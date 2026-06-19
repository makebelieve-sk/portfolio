"use client";

import Image from "next/image";

import { useLocale } from "@/providers/locale-provider";
import { gradientClip } from "@/utils/constants";

const ROW_LINE =
    "linear-gradient(90deg, rgba(15,57,135,0) 0%, rgba(15,57,135,1) 50%, rgba(15,57,135,0) 100%)";

export default function AboutMeMobileHeader() {
    const { t } = useLocale();
    const m = t.aboutMe;

    // Single label per line, always ending with a colon before the value.
    const toLabel = (raw: string) => raw.replace(/\n/g, " ").replace(/:?\s*$/, ":");

    const rows = [
        {
            icon: "/slides/resume/icon-employment-type.svg",
            label: toLabel(m.labelEmploymentType),
            value: m.valueEmploymentType,
        },
        {
            icon: "/slides/resume/icon-work-format.svg",
            label: toLabel(m.labelWorkFormat),
            value: m.valueWorkFormat,
        },
        {
            icon: "/slides/resume/icon-location.svg",
            label: toLabel(m.labelLocation),
            value: m.valueLocation,
        },
        {
            icon: "/slides/resume/icon-role.svg",
            label: toLabel(m.labelPosition),
            value: m.valuePosition,
        },
        {
            icon: "/slides/resume/icon-commercial-exp.svg",
            label: toLabel(m.labelCommercialExp),
            value: m.valueCommercialExp,
        },
    ];

    return (
        <div
            className="relative"
            style={{ padding: "4.3vw 5vw clamp(1.5rem, 7.552cqw, 9.063rem) 4vw" }}
        >
            {/* Decorative icons — staggered chess grid, full width */}
            <div className="pointer-events-none" aria-hidden>
                <div className="flex items-center justify-evenly">
                    <div style={{ width: "18vw" }}>
                        <Image
                            src="/slides/resume/decor-main.png"
                            alt=""
                            width={554}
                            height={652}
                            className="h-auto w-full object-contain"
                            sizes="18vw"
                        />
                    </div>
                    <div style={{ width: "14vw" }}>
                        <Image
                            src="/slides/resume/decor-1.png"
                            alt=""
                            width={512}
                            height={512}
                            className="h-auto w-full object-contain"
                            sizes="14vw"
                        />
                    </div>
                    <div style={{ width: "14.5vw" }}>
                        <Image
                            src="/slides/resume/decor-4.png"
                            alt=""
                            width={512}
                            height={512}
                            className="h-auto w-full object-contain"
                            sizes="15vw"
                        />
                    </div>
                </div>
                <div
                    className="flex items-center justify-evenly"
                    style={{ marginTop: "3vw", paddingInline: "14vw" }}
                >
                    <div style={{ width: "15vw" }}>
                        <Image
                            src="/slides/resume/decor-2.png"
                            alt=""
                            width={512}
                            height={512}
                            className="h-auto w-full object-contain"
                            sizes="15vw"
                        />
                    </div>
                    <div style={{ width: "13.5vw" }}>
                        <Image
                            src="/slides/resume/decor-3.png"
                            alt=""
                            width={512}
                            height={512}
                            className="h-auto w-full object-contain"
                            sizes="14vw"
                        />
                    </div>
                </div>
            </div>

            {/* Resume heading */}
            <h1
                className="font-[family-name:var(--font-heading)] font-normal uppercase leading-none tracking-[0.02em] text-transparent"
                style={{
                    fontSize: "clamp(70px, 12.82vw, 6.125rem)",
                    marginTop: "clamp(1.5rem, 5vw, 4rem)",
                    marginLeft: "1vw",
                    ...gradientClip,
                }}
            >
                {m.resumeHeading}
            </h1>

            {/* Metadata — vertical list: icon + label: + value, left-aligned */}
            <div
                className="flex flex-col"
                style={{ marginLeft: "1vw", marginTop: "5vw", rowGap: "3cqw" }}
            >
                {rows.map((row) => (
                    <div key={row.label} className="flex items-center" style={{ gap: "2cqw" }}>
                        <div style={{ width: "clamp(28px, 8cqw, 4.75rem)", flexShrink: 0 }}>
                            <Image
                                src={row.icon}
                                alt=""
                                width={256}
                                height={256}
                                className="h-auto w-full object-contain"
                                sizes="12vw"
                            />
                        </div>

                        {/* Text block — its width drives the divider length */}
                        <div className="relative flex items-center" style={{ gap: "1.5cqw" }}>
                            <p
                                className="whitespace-nowrap font-[family-name:var(--font-heading)] font-normal uppercase leading-[1.2] text-transparent"
                                style={{
                                    width: "36cqw",
                                    flexShrink: 0,
                                    fontSize: "clamp(12px, 3.6cqw, 1.75rem)",
                                    ...gradientClip,
                                }}
                            >
                                {row.label}
                            </p>
                            <p
                                className="whitespace-pre-line font-medium leading-[1.15] text-[#0F3987]"
                                style={{ fontSize: "clamp(10px, 2.8cqw, 1.375rem)" }}
                            >
                                {row.value}
                            </p>

                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: "100%",
                                    width: "100%",
                                    marginTop: "1.5cqw",
                                    height: "clamp(1px, 0.4cqw, 3px)",
                                    background: ROW_LINE,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
