"use client";

import { useLocale } from "@/providers/locale-provider";
import { gradientClip } from "@/utils/constants";

export default function Education() {
    const { t } = useLocale();
    const m = t.education;

    return (
        <section
            id="education"
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
                        paddingLeft: "10cqw",
                        paddingTop: "5.833cqw",
                        fontSize: "clamp(3rem, 11.458cqw, 13.75rem)",
                        ...gradientClip,
                    }}
                >
                    {m.heading}
                </h2>

                <div
                    style={{
                        paddingLeft: "10.3125cqw",
                        paddingRight: "10.729cqw",
                    }}
                >
                    <p
                        className="font-bold uppercase leading-none text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.667cqw, 2rem)",
                            marginTop: "clamp(1.5rem, 2.917cqw, 3.5rem)",
                        }}
                    >
                        {m.university}
                    </p>

                    <p
                        className="font-medium leading-[1.21] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.5625cqw, 1.875rem)",
                            marginTop: "clamp(0.5rem, 1.146cqw, 1.375rem)",
                        }}
                    >
                        {m.institute}
                    </p>

                    <div
                        className="flex"
                        style={{
                            marginTop: "clamp(2rem, 4.0625cqw, 4.875rem)",
                            paddingBottom: "clamp(3rem, 7.552cqw, 9.063rem)",
                        }}
                    >
                        {m.degrees.map((degree, i) => (
                            <div key={i} className="flex min-w-0">
                                {i > 0 && (
                                    <div
                                        className="shrink-0"
                                        style={{
                                            width: "clamp(4rem, 7.604cqw, 9.125rem)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "clamp(2px, 0.26cqw, 5px)",
                                                height: "clamp(5rem, 8.854cqw, 10.625rem)",
                                                background:
                                                    "linear-gradient(180deg, rgba(15,57,135,0) 0%, rgba(15,57,135,1) 50%, rgba(15,57,135,0) 100%)",
                                            }}
                                        />
                                    </div>
                                )}
                                <div
                                    className="min-w-0"
                                    style={{
                                        width:
                                            i === 0
                                                ? "clamp(10rem, 24.74cqw, 29.688rem)"
                                                : i === 1
                                                  ? "clamp(8rem, 18.281cqw, 21.938rem)"
                                                  : "clamp(9rem, 20.729cqw, 24.875rem)",
                                        flexShrink: 0,
                                    }}
                                >
                                    <p
                                        className="font-bold uppercase leading-[1.21] text-[#0F3987]"
                                        style={{
                                            fontSize: "clamp(0.875rem, 1.5625cqw, 1.875rem)",
                                        }}
                                    >
                                        {degree.year}
                                    </p>
                                    <p
                                        className="whitespace-pre-line font-medium leading-[1.21] text-[#0F3987]"
                                        style={{
                                            fontSize: "clamp(0.875rem, 1.5625cqw, 1.875rem)",
                                            marginTop: "clamp(4px, 0.521cqw, 0.625rem)",
                                        }}
                                    >
                                        {degree.specialty}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
