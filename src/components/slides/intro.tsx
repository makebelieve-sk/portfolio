"use client";

import Image from "next/image";

import { useLocale } from "@/providers/locale-provider";

export default function Intro() {
    const { t } = useLocale();

    return (
        <section
            className="relative flex min-h-[min(100dvh,22dvh_+_28vw)] min-w-0 flex-col text-white min-[1400px]:min-h-[100dvh]"
            aria-label={t.hero.portfolioHeading}
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#0F3886_0%,#000E28_100%)]"
                aria-hidden
            />

            <div className="relative z-10 flex min-w-0 flex-1 flex-col pb-6 pl-[5.625vw] pr-[5vw] pt-6 sm:pb-8 sm:pt-8 md:px-[clamp(2.5rem,10vw,12rem)] md:pb-[clamp(2rem,4.8vw,5.75rem)] md:pt-[clamp(2rem,4.8vw,5.75rem)]">
                <div className="relative z-10 flex min-w-0 flex-col items-start">
                    <h1 className="text-[clamp(2.75rem,14.3vw,17.15rem)] font-normal leading-[1] tracking-[0.02em]">
                        {t.hero.portfolioHeading}
                    </h1>

                    <p className="mt-[clamp(0.75rem,3.07vw,3.7rem)] text-[clamp(16px,3.65vw,4.375rem)] font-medium leading-[1.333]">
                        {t.hero.nameLine}
                    </p>

                    <div className="relative mt-[clamp(1.5rem,6.3vw,7.75rem)]">
                        <div
                            className="bg-white"
                            style={{
                                marginLeft: "clamp(1.25rem, 2.81vw, 3.4rem)",
                                marginTop: "clamp(0.5rem, 1.8vw, 2.2rem)",
                                borderRadius:
                                    "0 clamp(1.2rem, 2.66vw, 3.2rem) clamp(1.2rem, 2.66vw, 3.2rem) clamp(1.2rem, 2.66vw, 3.2rem)",
                                padding:
                                    "clamp(0.6rem, 1.5vw, 1.85rem) clamp(0.65rem, 1.78vw, 2.15rem) clamp(0.65rem, 1.85vw, 2.2rem) clamp(1.3rem, 3.3vw, 3.95rem)",
                            }}
                        >
                            <span className="block text-[clamp(13px,2.7vw,3.25rem)] leading-[1.067] text-[#072B70]">
                                {t.hero.roleBadgeLine1}
                                <br />
                                {t.hero.roleBadgeLine2}
                            </span>
                        </div>

                        <div className="absolute left-0 top-0 z-10 flex size-[clamp(2.2rem,5.9vw,7rem)] items-center justify-center rounded-full border-[clamp(0.15rem,0.567vw,0.68rem)] border-[#0B3178] bg-white">
                            <Image
                                src="/slides/intro/role-icon.png"
                                alt=""
                                width={128}
                                height={128}
                                className="size-[55%]"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute right-[clamp(0vw,calc(-6.75rem_+_33.5vw),12vw)] top-[31%] w-[31vw] md:right-[8vw] md:top-[32%] md:w-[33.5vw] lg:top-[30%] lg:w-[36.5vw]">
                    <Image
                        src="/slides/intro/hero.png"
                        alt=""
                        width={3198}
                        height={2712}
                        className="h-auto w-full object-contain"
                        style={{
                            filter: "drop-shadow(11px 10px 32px rgba(0,46,82,0.1)) drop-shadow(44px 40px 59px rgba(0,46,82,0.09)) drop-shadow(98px 89px 80px rgba(0,46,82,0.05))",
                        }}
                        sizes="(min-width: 1024px) 36.5vw, (min-width: 768px) 33.5vw, 31vw"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
