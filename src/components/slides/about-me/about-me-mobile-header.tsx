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
            style={{ padding: "4.3vw 5.2vw clamp(1.5rem, 7.552cqw, 9.063rem) 11.72vw" }}
        >
            {/* Decorative images — order matches desktop: main → 1 → 2 → 3 → 4 */}
            <div
                className="pointer-events-none absolute"
                aria-hidden
                style={{ left: "10.5vw", top: "-1vw", width: "15.5vw" }}
            >
                <Image
                    src="/slides/about-me/decor-main.png"
                    alt=""
                    width={554}
                    height={652}
                    className="h-auto w-full object-contain opacity-90"
                    sizes="16vw"
                />
            </div>
            <div
                className="pointer-events-none absolute"
                aria-hidden
                style={{ left: "22.5vw", top: "14vw", width: "10.5vw" }}
            >
                <Image
                    src="/slides/about-me/decor-1.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-auto w-full object-contain"
                    sizes="11vw"
                />
            </div>
            <div
                className="pointer-events-none absolute"
                aria-hidden
                style={{ left: "8.5vw", top: "27vw", width: "10vw" }}
            >
                <Image
                    src="/slides/about-me/decor-2.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-auto w-full object-contain"
                    sizes="10vw"
                />
            </div>
            <div
                className="pointer-events-none absolute"
                aria-hidden
                style={{ left: "20vw", top: "38vw", width: "10vw" }}
            >
                <Image
                    src="/slides/about-me/decor-3.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-auto w-full object-contain"
                    sizes="10vw"
                />
            </div>
            <div
                className="pointer-events-none absolute"
                aria-hidden
                style={{ left: "10vw", top: "50vw", width: "10.5vw" }}
            >
                <Image
                    src="/slides/about-me/decor-4.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-auto w-full object-contain"
                    sizes="11vw"
                />
            </div>

            {/* Vertical divider — spans full text height */}
            <div
                className="pointer-events-none absolute bg-[linear-gradient(180deg,rgba(3,38,102,0)_0%,rgba(5,57,153,1)_50%,rgba(6,76,204,0)_100%)]"
                style={{ left: "33.59vw", top: "4.3vw", width: 2, height: "60vw" }}
                aria-hidden
            />

            {/* Resume heading */}
            <h1
                className="font-[family-name:var(--font-heading)] font-normal uppercase leading-none tracking-[0.02em] text-transparent"
                style={{
                    fontSize: "clamp(2.375rem, 12.82vw, 6.125rem)",
                    marginLeft: "25.85vw",
                    ...gradientClip,
                }}
            >
                {m.resumeHeading}
            </h1>

            {/* Metadata grid */}
            <div
                className="relative grid grid-cols-2"
                style={{ marginLeft: "25.85vw", marginTop: "3.65vw", gap: "2vw 1vw" }}
            >
                <div>
                    <p
                        className="whitespace-pre-line font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.98] text-transparent"
                        style={{ fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelEmploymentType}
                    </p>
                    <p
                        className="whitespace-pre-line font-medium leading-[1.19] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
                            marginTop: "0.6vw",
                        }}
                    >
                        {m.valueEmploymentType}
                    </p>
                </div>
                <div>
                    <p
                        className="whitespace-pre-line font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.98] text-transparent"
                        style={{ fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelWorkFormat}
                    </p>
                    <p
                        className="font-medium leading-[1.19] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
                            marginTop: "0.6vw",
                        }}
                    >
                        {m.valueWorkFormat}
                    </p>
                </div>
                <div>
                    <p
                        className="whitespace-pre-line font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.98] text-transparent"
                        style={{ fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelLocation}
                    </p>
                    <p
                        className="whitespace-pre-line font-medium leading-[1.19] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
                            marginTop: "0.6vw",
                        }}
                    >
                        {m.valueLocation}
                    </p>
                </div>
                <div>
                    <p
                        className="font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.98] text-transparent"
                        style={{ fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelPosition}
                    </p>
                    <p
                        className="whitespace-pre-line font-medium leading-[1.19] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
                            marginTop: "0.6vw",
                        }}
                    >
                        {m.valuePosition}
                    </p>
                </div>
                <div className="col-span-2">
                    <p
                        className="whitespace-pre-line font-[family-name:var(--font-heading)] font-normal uppercase leading-[0.98] text-transparent"
                        style={{ fontSize: "clamp(1.125rem, 2.45cqw, 2.9375rem)", ...gradientClip }}
                    >
                        {m.labelCommercialExp}
                    </p>
                    <p
                        className="font-medium leading-[1.19] text-[#0F3987]"
                        style={{
                            fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)",
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
