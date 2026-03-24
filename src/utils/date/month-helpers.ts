import type { Locale } from "@/types/locale/locale";

/** Inclusive calendar months from the first day of `startMonth` through the current month. */
export function inclusiveMonthsFromStart(startMonth: Date, now = new Date()): number {
    const start = new Date(startMonth.getFullYear(), startMonth.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth(), 1);
    if (end < start) {
        return 1;
    }
    return (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()) + 1;
}

/** Russian declension for «месяц» with a numeric count. */
export function ruMonthsWord(count: number): string {
    const n = Math.abs(count) % 100;
    const n1 = count % 10;
    if (n > 10 && n < 20) {
        return "месяцев";
    }
    if (n1 === 1) {
        return "месяц";
    }
    if (n1 > 1 && n1 < 5) {
        return "месяца";
    }
    return "месяцев";
}

/** English: singular vs plural labels for “month” (strings from locale files). */
export function enMonthsWord(count: number, singular: string, plural: string): string {
    return count === 1 ? singular : plural;
}

/** Word form for «month» after a numeric count in experience period lines. */
export function monthUnitForCount(
    locale: Locale,
    count: number,
    en: { singular: string; plural: string },
): string {
    if (locale === "ru") {
        return ruMonthsWord(count);
    }
    return enMonthsWord(count, en.singular, en.plural);
}
