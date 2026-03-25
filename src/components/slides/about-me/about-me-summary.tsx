"use client";

import { useLocale } from "@/providers/locale-provider";
import { BULLET_GRADIENT } from "@/utils/constants";

export default function AboutMeSummary() {
    const { t } = useLocale();
    const m = t.aboutMe;

    return (
        <>
            <p
                className="font-medium leading-[1.21]"
                style={{ fontSize: "clamp(10px, 1.72cqw, 2.0625rem)" }}
            >
                {m.summaryCommerce}
            </p>

            <p
                className="mt-[clamp(1.5rem,5.208cqw,6.25rem)] font-bold leading-[1.167]"
                style={{ fontSize: "clamp(12px, 1.93cqw, 2.3125rem)" }}
            >
                {m.architectureLeadIn}
            </p>

            <ul
                className="ml-[clamp(2px,0.3125cqw,6px)] mt-[clamp(0.75rem,2.188cqw,2.625rem)] list-none space-y-[clamp(4px,0.711cqw,0.854rem)] p-0 font-sans font-medium leading-[1.21]"
                style={{ fontSize: "clamp(9px, 1.72cqw, 2.0625rem)" }}
            >
                {m.architectureList.map((line) => (
                    <li key={line} className="relative pl-[clamp(1.125rem,1.75cqw,2.1rem)]">
                        <span
                            className="absolute left-0 -translate-y-1/2 rounded-full"
                            style={{
                                top: "0.605em",
                                width: "clamp(0.5rem, 0.73cqw, 0.875rem)",
                                height: "clamp(0.5rem, 0.73cqw, 0.875rem)",
                                background: BULLET_GRADIENT,
                            }}
                            aria-hidden
                        />
                        {line}
                    </li>
                ))}
            </ul>

            <div className="relative mt-[clamp(1.5rem,5.208cqw,6.25rem)]">
                <div
                    className="absolute inset-y-0 bg-[#0F3987]"
                    style={{ left: "max(-15.885cqw, -20vw)", width: "min(110.938cqw, 140vw)" }}
                    aria-hidden
                />
                <div
                    className="relative z-10 whitespace-pre-line py-[clamp(1.25rem,4.375cqw,5.25rem)] font-semibold leading-[1.14] text-white"
                    style={{ fontSize: "clamp(11px, 1.72cqw, 2.0625rem)" }}
                >
                    {m.bioOnBlue.split("\n\n").map((para, i) => (
                        <p key={i} className="mb-0 [&:not(:last-child)]:mb-[1.14em]">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}
