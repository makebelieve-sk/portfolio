"use client";

import { useLocale } from "@/providers/locale-provider";
import { gradientClip } from "@/utils/constants";

export default function Education() {
    const { t } = useLocale();
    const m = t.education;

    return (
        <section id="education" aria-label={m.ariaLabel} className="overflow-x-clip bg-white">
            <div
                className="relative mx-auto w-full max-w-[1920px]"
                style={{ containerType: "inline-size" }}
            >
                <h2
                    className="pl-[18px] font-[family-name:var(--font-heading)] font-normal lowercase leading-none tracking-[0.02em] text-transparent md:pl-[10cqw]"
                    style={{
                        paddingTop: "5.833cqw",
                        fontSize: "clamp(65px, 11.25cqw, 13.5rem)",
                        ...gradientClip,
                    }}
                >
                    {m.heading}
                </h2>

                <div className="pl-[19px] pr-[15px] md:pl-[10.3125cqw] md:pr-[10.729cqw]">
                    <p
                        className="font-bold uppercase leading-[1.083] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(12px, 1.56cqw, 1.875rem)",
                            marginTop: "clamp(1.5rem, 2.917cqw, 3.5rem)",
                        }}
                    >
                        {m.university}
                    </p>

                    <p
                        className="whitespace-pre-line font-medium leading-[1.083] text-[#0F3987] md:whitespace-normal"
                        style={{
                            fontSize: "clamp(12px, 1.46cqw, 1.75rem)",
                            marginTop: "clamp(0.5rem, 1.146cqw, 1.375rem)",
                        }}
                    >
                        {m.institute}
                    </p>

                    <div
                        className="flex flex-col md:flex-row md:flex-nowrap"
                        style={{
                            marginTop: "clamp(1.25rem, 4.0625cqw, 4.875rem)",
                            paddingBottom: "clamp(1.5rem, 7.552cqw, 9.063rem)",
                            gap: "clamp(1rem, 5vw, 1.5rem) 0",
                        }}
                    >
                        {m.degrees.map((degree, i) => (
                            <div key={i} className="flex min-w-0">
                                {i > 0 && (
                                    <div
                                        className="hidden shrink-0 items-center justify-center md:flex"
                                        style={{
                                            width: "clamp(1rem, 7.604cqw, 9.125rem)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "clamp(1px, 0.26cqw, 5px)",
                                                height: "clamp(3rem, 8.854cqw, 10.625rem)",
                                                background:
                                                    "linear-gradient(180deg, rgba(15,57,135,0) 0%, rgba(15,57,135,1) 50%, rgba(15,57,135,0) 100%)",
                                            }}
                                        />
                                    </div>
                                )}
                                <div className="min-w-0 md:flex md:w-[clamp(4rem,21.25cqw,25.5rem)] md:shrink-0 md:items-start md:justify-center">
                                    <div className="min-w-0">
                                        <p
                                            className="font-bold uppercase leading-[1.21] text-[#0F3987]"
                                            style={{
                                                fontSize: "clamp(10px, 1.46cqw, 1.75rem)",
                                            }}
                                        >
                                            {degree.year}
                                        </p>
                                        <p
                                            className="whitespace-nowrap font-medium leading-[1.11] text-[#0F3987] md:whitespace-pre-line"
                                            style={{
                                                fontSize: "clamp(9px, 1.46cqw, 1.75rem)",
                                                marginTop: "clamp(2px, 0.521cqw, 0.625rem)",
                                            }}
                                        >
                                            {degree.specialty}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
