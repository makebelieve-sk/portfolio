"use client";

import { useLocale } from "@/providers/locale-provider";
import { gradientClip } from "@/utils/constants";

export default function AboutMeHeader() {
    const { t } = useLocale();
    const m = t.aboutMe;

    return (
        <div
            style={{
                paddingLeft: "34.063cqw",
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

            <div className="flex" style={{ marginTop: "1.979cqw", marginLeft: "0.417cqw" }}>
                <div style={{ width: "16.042cqw", flexShrink: 0 }}>
                    <p
                        className="whitespace-pre-line font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.98] text-transparent"
                        style={{
                            fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)",
                            ...gradientClip,
                        }}
                    >
                        {m.labelEmploymentType}
                    </p>
                    <p
                        className="whitespace-pre-line font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
                            marginTop: "0.573cqw",
                        }}
                    >
                        {m.valueEmploymentType}
                    </p>
                </div>

                <div style={{ width: "15.99cqw", flexShrink: 0 }}>
                    <p
                        className="whitespace-pre-line font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.98] text-transparent"
                        style={{
                            fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)",
                            ...gradientClip,
                        }}
                    >
                        {m.labelWorkFormat}
                    </p>
                    <p
                        className="font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
                            marginTop: "0.573cqw",
                        }}
                    >
                        {m.valueWorkFormat}
                    </p>
                </div>

                <div>
                    <p
                        className="whitespace-pre-line font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.96] text-transparent"
                        style={{
                            fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)",
                            ...gradientClip,
                        }}
                    >
                        {m.labelLocation}
                    </p>
                    <p
                        className="whitespace-pre-line font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
                            marginTop: "0.573cqw",
                        }}
                    >
                        {m.valueLocation}
                    </p>
                </div>
            </div>

            <div className="flex" style={{ marginTop: "3.021cqw", marginLeft: "0.417cqw" }}>
                <div style={{ width: "24.01cqw", flexShrink: 0 }}>
                    <p
                        className="font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.98] text-transparent"
                        style={{
                            fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)",
                            ...gradientClip,
                        }}
                    >
                        {m.labelPosition}
                    </p>
                    <p
                        className="whitespace-pre-line font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
                            marginTop: "0.573cqw",
                        }}
                    >
                        {m.valuePosition}
                    </p>
                </div>

                <div>
                    <p
                        className="whitespace-pre-line font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.98] text-transparent"
                        style={{
                            fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)",
                            ...gradientClip,
                        }}
                    >
                        {m.labelCommercialExp}
                    </p>
                    <p
                        className="font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
                            marginTop: "0.573cqw",
                        }}
                    >
                        {m.valueCommercialExp}
                    </p>
                </div>
            </div>
        </div>
    );
}
