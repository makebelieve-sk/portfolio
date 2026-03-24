"use client";

import Image from "next/image";

import { useLocale } from "@/providers/locale-provider";

import type { ExperienceEntry as Entry } from "@/types/experience/experience";

import ExperienceSubSection from "@/components/slides/experience/experience-sub-section";
import ProjectLink from "@/components/slides/experience/project-link";

interface ExperienceEntryProps {
    entry: Entry;
    index: number;
    isExpanded: boolean;
    isCurrentJob: boolean;
    periodLabel: string;
    onToggle: (index: number) => void;
}

export default function ExperienceEntry({
    entry,
    index: i,
    isExpanded,
    isCurrentJob,
    periodLabel,
    onToggle,
}: ExperienceEntryProps) {
    const { t } = useLocale();
    const m = t.experience;

    return (
        <article
            style={{
                marginTop:
                    i === 0 ? "clamp(1.5rem, 4.063cqw, 4.875rem)" : "clamp(3rem, 9.167cqw, 11rem)",
            }}
        >
            <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`experience-entry-body-${i}`}
                id={`experience-entry-trigger-${i}`}
                onClick={() => onToggle(i)}
                className="flex w-full min-w-0 cursor-pointer items-center border-0 bg-transparent p-0 text-left"
                style={{ marginLeft: "0.26cqw" }}
            >
                <div
                    className={`flex shrink-0 items-center justify-center origin-center transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none ${
                        isExpanded ? "rotate-0" : "rotate-180"
                    }`}
                    style={{
                        height: "clamp(2.5rem, 4.271cqw, 5.125rem)",
                    }}
                    aria-hidden
                >
                    <Image
                        src="/slides/experience/big-arrow.png"
                        alt=""
                        width={56}
                        height={184}
                        className="h-full w-auto object-contain object-center"
                        sizes="56px"
                    />
                </div>
                <span
                    className="block font-bold uppercase leading-[1.21] text-[#0F3987]"
                    style={{
                        fontSize: "clamp(0.875rem, 1.5625cqw, 1.875rem)",
                        marginLeft: "clamp(0.5rem, 2.24cqw, 2.688rem)",
                    }}
                >
                    {entry.company}
                    <br />
                    {entry.position}
                    <br />
                    <span suppressHydrationWarning={isCurrentJob}>{periodLabel}</span>
                </span>
            </button>

            <div
                id={`experience-entry-body-${i}`}
                role="region"
                aria-labelledby={`experience-entry-trigger-${i}`}
                className={`grid motion-reduce:transition-none ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                } transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]`}
            >
                <div
                    className={`min-h-0 overflow-hidden transition-opacity duration-200 ease-out motion-reduce:transition-none ${
                        isExpanded ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                    {...(!isExpanded ? { inert: true as const } : {})}
                >
                    {"intro" in entry && entry.intro && (
                        <p
                            className="font-medium leading-[1.21] text-[#0F3987]"
                            style={{
                                fontSize: "clamp(0.875rem, 1.5625cqw, 1.875rem)",
                                marginTop: "clamp(1rem, 2.188cqw, 2.625rem)",
                            }}
                        >
                            {entry.intro}
                        </p>
                    )}

                    {entry.subSections.map((section, j) => (
                        <ExperienceSubSection
                            key={j}
                            section={section}
                            index={j}
                            hasIntro={"intro" in entry && Boolean(entry.intro)}
                        />
                    ))}

                    {"projectUrl" in entry && entry.projectUrl && (
                        <ProjectLink url={entry.projectUrl} label={m.projectLinkLabel} />
                    )}

                    <p
                        className="font-medium leading-[1.31] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.5625cqw, 1.875rem)",
                            marginTop:
                                "projectUrl" in entry && entry.projectUrl
                                    ? "clamp(1rem, 3.958cqw, 4.75rem)"
                                    : "clamp(1.5rem, 5.833cqw, 7rem)",
                        }}
                    >
                        {m.stackPrefix}
                        {entry.stack}
                    </p>
                </div>
            </div>
        </article>
    );
}
