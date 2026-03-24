import { isLocale } from "@/utils/locale/is-locale";
import type { Locale } from "@/types/locale/locale";

const FALLBACK: Locale = "en";

/** Первый язык из заголовка Accept-Language (на сервере ≈ регион/настройки браузера). */
export function localeFromAcceptLanguage(header: string | null): Locale {
    if (!header) return FALLBACK;
    const first = header.split(",")[0]?.trim().split(";")[0]?.trim().toLowerCase();
    if (!first) return FALLBACK;
    const primary = first.split("-")[0] ?? first;
    return primary === "ru" ? "ru" : FALLBACK;
}

/** Язык из BCP47-тега (navigator.language). */
export function localeFromLanguageTag(tag: string): Locale {
    const primary = tag.split("-")[0]?.trim().toLowerCase();
    if (primary === "ru") return "ru";
    return FALLBACK;
}

/** Cookie (если валидная) → Accept-Language → fallback. */
export function resolveServerLocale(
    cookieValue: string | undefined,
    acceptLanguage: string | null,
): Locale {
    if (cookieValue && isLocale(cookieValue)) return cookieValue;
    return localeFromAcceptLanguage(acceptLanguage);
}
