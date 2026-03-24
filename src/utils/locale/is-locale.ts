import { LOCALES } from "@/utils/locale/constants";
import type { Locale } from "@/types/locale/locale";

/** Проверить, является ли значение локалью. */
export function isLocale(value: string): value is Locale {
    return (LOCALES as readonly string[]).includes(value);
}
