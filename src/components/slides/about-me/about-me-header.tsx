"use client";

import Image from "next/image";

import { useLocale } from "@/providers/locale-provider";
import { gradientClip } from "@/utils/constants";

const ROW_LINE =
    "linear-gradient(90deg, rgba(15,57,135,0) 0%, rgba(15,57,135,1) 50%, rgba(15,57,135,0) 100%)";

export default function AboutMeHeader() {
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
            style={{
                paddingLeft: "34.063cqw",
                paddingRight: "6.667cqw",
                paddingTop: "5.833cqw",
            }}
        >
            <h1
                className="font-[family-name:var(--font-heading)] font-normal uppercase leading-none tracking-[0.02em] text-transparent"
                style={{
                    fontSize: "clamp(2.875rem, 11.25cqw, 13.5rem)",
                    ...gradientClip,
                }}
            >
                {m.resumeHeading}
            </h1>

            <div className="flex flex-col" style={{ marginTop: "2cqw", rowGap: "1.85cqw" }}>
                {rows.map((row) => (
                    <div key={row.label} className="flex items-center" style={{ gap: "0.5cqw" }}>
                        <div style={{ width: "4.8cqw", flexShrink: 0 }}>
                            <Image
                                src={row.icon}
                                alt=""
                                width={256}
                                height={256}
                                className="h-auto w-full object-contain"
                                sizes="6vw"
                            />
                        </div>

                        {/* Text block — its width drives the divider length */}
                        <div className="relative flex items-center" style={{ gap: "1.3cqw" }}>
                            <p
                                className="whitespace-nowrap font-[family-name:var(--font-heading)] font-normal uppercase leading-[1.2] text-transparent"
                                style={{
                                    width: "24.5cqw",
                                    flexShrink: 0,
                                    fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)",
                                    ...gradientClip,
                                }}
                            >
                                {row.label}
                            </p>
                            <p
                                className="whitespace-pre-line font-medium leading-[1.11] text-[#0F3987]"
                                style={{ fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)" }}
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
                                    marginTop: "0.625cqw",
                                    height: "clamp(1px, 0.2cqw, 4px)",
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
