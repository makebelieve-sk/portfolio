import type { Locale } from "@/types/locale/locale";
import { LOCALE_COOKIE_MAX_AGE, LOCALE_COOKIE_NAME } from "@/utils/locale/constants";
import { isLocale } from "@/utils/locale/is-locale";
import { localeFromLanguageTag } from "@/utils/locale/resolve-locale";

const listeners = new Set<() => void>();

let clientHydrated = false;

/** Подписаться на изменения локали. */
export function subscribeLocale(onChange: () => void) {
    listeners.add(onChange);
    return () => listeners.delete(onChange);
}

/** Вызвать всех слушателей. */
export function emitLocaleChange() {
    for (const listener of listeners) {
        listener();
    }
}

/** Сохранить локаль в cookie. */
export function persistLocale(next: Locale) {
    document.cookie = `${LOCALE_COOKIE_NAME}=${next}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
}

function readCookieLocale(): Locale | null {
    const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE_NAME}=([^;]*)`));
    const value = match?.[1];
    if (value && isLocale(value)) return value;
    return null;
}

/** Первый кадр на клиенте совпадает с сервером; после гидрации — cookie или navigator. */
export function readLocaleSnapshot(serverFallback: Locale): Locale {
    if (typeof window === "undefined") return serverFallback;
    if (!clientHydrated) return serverFallback;
    return readCookieLocale() ?? localeFromLanguageTag(navigator.language);
}

/** Пометить клиент как гидратированный. */
export function markClientLocaleHydrated(): void {
    clientHydrated = true;
    emitLocaleChange();
}
