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

/** Russian declension for «месяц». */
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

/** Russian declension for «год». */
export function ruYearsWord(count: number): string {
    const n = Math.abs(count) % 100;
    const n1 = count % 10;
    if (n > 10 && n < 20) {
        return "лет";
    }
    if (n1 === 1) {
        return "год";
    }
    if (n1 > 1 && n1 < 5) {
        return "года";
    }
    return "лет";
}

/** English: singular vs plural. */
export function enMonthsWord(count: number, singular: string, plural: string): string {
    return count === 1 ? singular : plural;
}

/** Word form for «month» after a numeric count. */
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

/**
 * Format a total month count as a human-readable duration string,
 * e.g. "1 year and 3 months" / "1 год и 3 месяца".
 */
export function formatDuration(
    locale: Locale,
    totalMonths: number,
    labels: {
        monthOne: string;
        monthsMany: string;
        yearOne: string;
        yearsMany: string;
        and: string;
    },
): string {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
        const word = monthUnitForCount(locale, totalMonths, {
            singular: labels.monthOne,
            plural: labels.monthsMany,
        });
        return `${totalMonths} ${word}`;
    }

    const yearWord =
        locale === "ru"
            ? ruYearsWord(years)
            : enMonthsWord(years, labels.yearOne, labels.yearsMany);
    const yearPart = `${years} ${yearWord}`;

    if (months === 0) {
        return yearPart;
    }

    const monthWord = monthUnitForCount(locale, months, {
        singular: labels.monthOne,
        plural: labels.monthsMany,
    });
    return `${yearPart} ${labels.and} ${months} ${monthWord}`;
}
