"use client";

import { useLocale } from "@/providers/locale-provider";
import { gradientClip } from "@/utils/constants";
import { CANVAS_W, HEADER_H, hPctH, hPctY, pctX } from "@/utils/decor/canvas-pct";

import AboutMeDecor from "@/components/slides/about-me/about-me-decor";
import AboutMeHeader from "@/components/slides/about-me/about-me-header";
import AboutMeProjects from "@/components/slides/about-me/about-me-projects";
import AboutMeSummary from "@/components/slides/about-me/about-me-summary";

export default function AboutMe() {
    const { t } = useLocale();
    const m = t.aboutMe;

    return (
        <section
            id="about-me"
            aria-label={m.ariaLabel}
            className="hidden overflow-x-clip bg-white md:block"
        >
            <div
                className="relative mx-auto w-full max-w-[1920px]"
                style={{ containerType: "inline-size" }}
            >
                <div
                    className="relative w-full"
                    style={{ aspectRatio: `${CANVAS_W} / ${HEADER_H}` }}
                >
                    <AboutMeDecor />

                    <div
                        className="pointer-events-none absolute bg-[linear-gradient(180deg,rgba(3,38,102,0)_0%,rgba(5,57,153,1)_50%,rgba(6,76,204,0)_100%)]"
                        style={{
                            left: pctX(582),
                            top: hPctY(84),
                            width: 3,
                            height: hPctH(580),
                        }}
                        aria-hidden
                    />

                    <h2
                        className="absolute font-[family-name:var(--font-heading)] font-normal lowercase leading-none tracking-[0.02em] text-transparent"
                        style={{
                            left: pctX(196),
                            top: hPctY(888),
                            fontSize: "clamp(3rem, 11.458cqw, 13.75rem)",
                            ...gradientClip,
                        }}
                    >
                        {m.aboutHeading}
                    </h2>

                    <AboutMeHeader />
                </div>

                <div
                    className="pb-[clamp(2rem,5.208cqw,6.25rem)] text-[#0F3987]"
                    style={{ paddingLeft: "10.417cqw", paddingRight: "6.667cqw" }}
                >
                    <AboutMeSummary />
                    <AboutMeProjects />
                </div>
            </div>
        </section>
    );
}
