"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useLocale } from "@/providers/locale-provider";
import { ANIM_MS, gradientClip } from "@/utils/constants";

export default function Courses() {
    const { t } = useLocale();
    const m = t.courses;
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const [visible, setVisible] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    const openLightbox = useCallback((src: string) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setLightboxSrc(src);
        requestAnimationFrame(() => setVisible(true));
    }, []);

    const closeLightbox = useCallback(() => {
        setVisible(false);
        timerRef.current = setTimeout(() => setLightboxSrc(null), ANIM_MS);
    }, []);

    useEffect(() => {
        if (!lightboxSrc) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [lightboxSrc, closeLightbox]);

    return (
        <section id="courses" aria-label={m.ariaLabel} className="overflow-x-clip bg-white">
            <div
                className="relative mx-auto w-full max-w-[1920px]"
                style={{ containerType: "inline-size" }}
            >
                <h2
                    className="font-[family-name:var(--font-heading)] font-normal lowercase leading-none tracking-[0.02em] text-transparent"
                    style={{
                        paddingLeft: "10cqw",
                        paddingTop: "5.833cqw",
                        fontSize: "clamp(2.875rem, 11.25cqw, 13.5rem)",
                        ...gradientClip,
                    }}
                >
                    {m.heading}
                </h2>

                <div
                    className="flex"
                    style={{
                        paddingLeft: "10.573cqw",
                        paddingRight: "7.5cqw",
                        marginTop: "clamp(0.75rem, 3.177cqw, 3.813rem)",
                        paddingBottom: "clamp(1.5rem, 5.417cqw, 6.5rem)",
                    }}
                >
                    {m.entries.map((entry, i) => {
                        const hasBorder = i < 2;
                        return (
                            <React.Fragment key={i}>
                                {i > 0 && (
                                    <div
                                        className="flex shrink-0 items-center justify-center"
                                        style={{
                                            width: "clamp(0.5rem, 4.69cqw, 9rem)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "clamp(1px, 0.26cqw, 5px)",
                                                height: "clamp(5rem, 24.167cqw, 29rem)",
                                                background:
                                                    "linear-gradient(180deg, rgba(15,57,135,0) 0%, rgba(15,57,135,1) 50%, rgba(15,57,135,0) 100%)",
                                            }}
                                        />
                                    </div>
                                )}
                                <div className="flex min-w-0 flex-1 flex-col">
                                    <div
                                        className="flex flex-col justify-start"
                                        style={{
                                            fontSize: "clamp(0.375rem, 1.46cqw, 1.75rem)",
                                            minHeight: "4em",
                                        }}
                                    >
                                        <p className="font-bold uppercase leading-[1.21] text-[#0F3987]">
                                            {entry.provider}
                                        </p>
                                        <p
                                            className="font-medium leading-[1.21] text-[#0F3987]"
                                            style={{
                                                marginTop: "clamp(2px, 0.521cqw, 10px)",
                                            }}
                                        >
                                            {entry.name}
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => openLightbox(entry.certificate)}
                                        className={`relative mt-[clamp(0.25rem,1.042cqw,1.25rem)] block w-full cursor-pointer overflow-hidden bg-white transition-transform duration-200 ease-out hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F3987] ${
                                            hasBorder
                                                ? "rounded-[clamp(2px,0.26cqw,5px)] border border-[#0F3987]"
                                                : ""
                                        }`}
                                        style={{ aspectRatio: "434 / 306" }}
                                    >
                                        <Image
                                            src={entry.certificate}
                                            alt={`${entry.provider} — ${entry.name}`}
                                            fill
                                            className="object-cover object-center"
                                            sizes="(min-width:1920px) 500px, (min-width:768px) 26vw, 25vw"
                                            loading="eager"
                                        />
                                    </button>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            {lightboxSrc && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-[background-color,opacity] ease-out ${
                        visible ? "bg-black/80 opacity-100" : "bg-black/0 opacity-0"
                    }`}
                    style={{ transitionDuration: `${ANIM_MS}ms` }}
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Certificate preview"
                >
                    <button
                        type="button"
                        onClick={closeLightbox}
                        className="absolute right-[clamp(1rem,2vw,2.5rem)] top-[clamp(1rem,2vw,2.5rem)] z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 bg-white/20 text-2xl text-white transition-colors hover:bg-white/40"
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <Image
                        src={lightboxSrc}
                        alt="Certificate"
                        width={1520}
                        height={1080}
                        className={`pointer-events-none max-h-[90vh] max-w-[90vw] object-contain transition-transform ease-out ${
                            visible ? "scale-100" : "scale-95"
                        }`}
                        style={{ transitionDuration: `${ANIM_MS}ms` }}
                        sizes="90vw"
                        loading="eager"
                    />
                </div>
            )}
        </section>
    );
}
