"use client";

import { useState } from "react";

import { useLocale } from "@/providers/locale-provider";
import { gradientClip } from "@/utils/constants";
import { inclusiveMonthsFromStart, monthUnitForCount } from "@/utils/date/month-helpers";

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
        <section
            id="experience"
            aria-label={m.ariaLabel}
            className="hidden overflow-x-clip bg-white md:block"
        >
            <div
                className="relative mx-auto w-full max-w-[1920px]"
                style={{ containerType: "inline-size" }}
            >
                <h2
                    className="font-[family-name:var(--font-heading)] font-normal lowercase leading-none tracking-[0.02em] text-transparent"
                    style={{
                        paddingLeft: "10.208cqw",
                        paddingTop: "6.354cqw",
                        fontSize: "clamp(3rem, 11.458cqw, 13.75rem)",
                        ...gradientClip,
                    }}
                >
                    {m.heading}
                </h2>

                <div
                    style={{
                        paddingLeft: "10.573cqw",
                        paddingRight: "5cqw",
                        paddingBottom: "clamp(2rem, 6.354cqw, 7.625rem)",
                    }}
                >
                    {m.entries.map((entry, i) => {
                        const isCurrentJob = i === 0;
                        let periodLabel = entry.period;
                        if (isCurrentJob) {
                            const months = inclusiveMonthsFromStart(new Date(2025, 7, 1));
                            periodLabel = `${m.finamPeriodPresent} (${months} ${monthUnitForCount(
                                locale,
                                months,
                                {
                                    singular: m.durationMonthOne,
                                    plural: m.durationMonthsMany,
                                },
                            )})`;
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
