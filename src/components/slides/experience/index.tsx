"use client";

import { useState } from "react";

import { useLocale } from "@/providers/locale-provider";
import { gradientClip } from "@/utils/constants";
import { formatDuration, inclusiveMonthsFromStart } from "@/utils/date/month-helpers";

import ExperienceEntry from "@/components/slides/experience/experience-entry";

export default function Experience() {
    const { t, locale } = useLocale();
    const m = t.experience;
    const [expandedIndices, setExpandedIndices] = useState<Set<number>>(() => new Set([0]));

    const toggleEntry = (index: number) => {
        setExpandedIndices((prev) => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    return (
        <section id="experience" aria-label={m.ariaLabel} className="overflow-x-clip bg-white">
            <div
                className="relative mx-auto w-full max-w-[1920px]"
                style={{ containerType: "inline-size" }}
            >
                <h2
                    className="pl-[18px] font-[family-name:var(--font-heading)] font-normal lowercase leading-[0.886] tracking-[0.02em] text-transparent md:pl-[10.208cqw] md:leading-none"
                    style={{
                        paddingTop: "clamp(35px, 6.354cqw, 7.625rem)",
                        fontSize: "clamp(70px, 11.25cqw, 13.5rem)",
                        ...gradientClip,
                    }}
                >
                    {m.heading}
                </h2>

                <div
                    className="pl-[20px] pr-[16px] md:pl-[10.573cqw] md:pr-[5cqw]"
                    style={{
                        paddingBottom: "clamp(2rem, 6.354cqw, 7.625rem)",
                    }}
                >
                    {m.entries.map((entry, i) => {
                        const isCurrentJob = i === 0;
                        let periodLabel = entry.period;
                        if (isCurrentJob) {
                            const totalMonths = inclusiveMonthsFromStart(new Date(2025, 7, 1));
                            const duration = formatDuration(locale, totalMonths, {
                                monthOne: m.durationMonthOne,
                                monthsMany: m.durationMonthsMany,
                                yearOne: m.durationYearOne,
                                yearsMany: m.durationYearsMany,
                                and: m.durationAnd,
                            });
                            periodLabel = `${m.finamPeriodPresent} (${duration})`;
                        }
                        return (
                            <ExperienceEntry
                                key={entry.company}
                                entry={entry}
                                index={i}
                                isExpanded={expandedIndices.has(i)}
                                isCurrentJob={isCurrentJob}
                                periodLabel={periodLabel}
                                onToggle={toggleEntry}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
