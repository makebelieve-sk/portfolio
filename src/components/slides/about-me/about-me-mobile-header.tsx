"use client";

import Image from "next/image";

import { useLocale } from "@/providers/locale-provider";
import { gradientClip } from "@/utils/constants";

export default function AboutMeMobileHeader() {
    const { t } = useLocale();
    const m = t.aboutMe;

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
                            src="/slides/about-me/decor-main.png"
                            alt=""
                            width={554}
                            height={652}
                            className="h-auto w-full object-contain"
                            sizes="18vw"
                        />
                    </div>
                    <div style={{ width: "14vw" }}>
                        <Image
                            src="/slides/about-me/decor-1.png"
                            alt=""
                            width={512}
                            height={512}
                            className="h-auto w-full object-contain"
                            sizes="14vw"
                        />
                    </div>
                    <div style={{ width: "14.5vw" }}>
                        <Image
                            src="/slides/about-me/decor-4.png"
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
                            src="/slides/about-me/decor-2.png"
                            alt=""
                            width={512}
                            height={512}
                            className="h-auto w-full object-contain"
                            sizes="15vw"
                        />
                    </div>
                    <div style={{ width: "13.5vw" }}>
                        <Image
                            src="/slides/about-me/decor-3.png"
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

            {/* Metadata grid */}
            <div
                className="relative grid grid-cols-2"
                style={{
                    marginLeft: "1vw",
                    marginTop: "3.65vw",
                    gap: "clamp(14px, 4.5vw, 2.5rem) 3vw",
                }}
            >
                <div>
                    <p
                        className="whitespace-nowrap font-[family-name:var(--font-heading)] font-normal uppercase leading-[1.14] text-transparent"
                        style={{ fontSize: "clamp(14px, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelEmploymentType}
                    </p>
                    <p
                        className="whitespace-pre-line font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(9px, 1.72cqw, 2.0625rem)",
                            marginTop: "0.6vw",
                        }}
                    >
                        {m.valueEmploymentType}
                    </p>
                </div>
                <div>
                    <p
                        className="whitespace-nowrap font-[family-name:var(--font-heading)] font-normal uppercase leading-[1.14] text-transparent"
                        style={{ fontSize: "clamp(14px, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelLocation}
                    </p>
                    <p
                        className="whitespace-pre-line font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(9px, 1.72cqw, 2.0625rem)",
                            marginTop: "0.6vw",
                        }}
                    >
                        {m.valueLocation}
                    </p>
                </div>
                <div>
                    <p
                        className="whitespace-nowrap font-[family-name:var(--font-heading)] font-normal uppercase leading-[1.14] text-transparent"
                        style={{ fontSize: "clamp(14px, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelWorkFormat}
                    </p>
                    <p
                        className="font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(9px, 1.72cqw, 2.0625rem)",
                            marginTop: "0.6vw",
                        }}
                    >
                        {m.valueWorkFormat}
                    </p>
                </div>
                <div>
                    <p
                        className="whitespace-nowrap font-[family-name:var(--font-heading)] font-normal uppercase leading-[1.14] text-transparent"
                        style={{ fontSize: "clamp(14px, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelPosition}
                    </p>
                    <p
                        className="whitespace-pre-line font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(9px, 1.72cqw, 2.0625rem)",
                            marginTop: "0.6vw",
                        }}
                    >
                        {m.valuePosition}
                    </p>
                </div>
                <div className="col-span-2">
                    <p
                        className="whitespace-nowrap font-[family-name:var(--font-heading)] font-normal uppercase leading-[1.14] text-transparent"
                        style={{ fontSize: "clamp(14px, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelCommercialExp}
                    </p>
                    <p
                        className="font-medium leading-[1.11] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(9px, 1.72cqw, 2.0625rem)",
                            marginTop: "0.6vw",
                        }}
                    >
                        {m.valueCommercialExp}
                    </p>
                </div>
            </div>
        </div>
    );
}
