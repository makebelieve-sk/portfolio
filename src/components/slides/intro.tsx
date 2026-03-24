"use client";

import Image from "next/image";

import { useLocale } from "@/providers/locale-provider";

export default function Intro() {
    const { t } = useLocale();

    return (
        <section
            className="relative flex min-h-dvh min-w-0 flex-col text-white"
            aria-label={t.hero.portfolioHeading}
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#0F3886_0%,#000E28_100%)]"
                aria-hidden
            />

            <div className="relative z-10 flex min-w-0 flex-1 flex-col px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8 md:px-[clamp(2.5rem,10vw,12rem)] md:pb-[clamp(2rem,4.8vw,5.75rem)] md:pt-[clamp(2rem,4.8vw,5.75rem)]">
                <div className="relative z-10 flex min-w-0 flex-col items-start">
                    <h1 className="text-[clamp(3.5rem,14.5vw,17.4rem)] font-normal leading-[1] tracking-[0.02em]">
                        {t.hero.portfolioHeading}
                    </h1>

                    <p className="mt-[clamp(0.75rem,3.07vw,3.7rem)] text-[clamp(1.5rem,3.75vw,4.5rem)] font-medium leading-[1.333]">
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
                                    "clamp(0.75rem, 1.8vw, 2.2rem) clamp(0.75rem, 2.03vw, 2.44rem) clamp(0.75rem, 2.2vw, 2.6rem) clamp(1.5rem, 3.85vw, 4.63rem)",
                            }}
                        >
                            <span className="block text-[clamp(1.125rem,3.28vw,3.94rem)] leading-[0.94] text-[#072B70]">
                                {t.hero.roleBadgeLine1}
                                <br />
                                {t.hero.roleBadgeLine2}
                            </span>
                        </div>

                        <div className="absolute left-0 top-0 z-10 flex size-[clamp(4rem,6.68vw,8rem)] items-center justify-center rounded-full border-[clamp(0.25rem,0.567vw,0.68rem)] border-[#0B3178] bg-white">
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

                <div className="absolute right-[8vw] top-[34.4%] hidden w-[40.5vw] min-[500px]:block">
                    <Image
                        src="/slides/intro/hero.png"
                        alt=""
                        width={3198}
                        height={2712}
                        className="h-auto w-full object-contain"
                        style={{
                            filter: "drop-shadow(11px 10px 32px rgba(0,46,82,0.1)) drop-shadow(44px 40px 59px rgba(0,46,82,0.09)) drop-shadow(98px 89px 80px rgba(0,46,82,0.05))",
                        }}
                        sizes="40.5vw"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
