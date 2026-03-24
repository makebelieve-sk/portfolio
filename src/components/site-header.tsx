"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type FocusEvent } from "react";

import { useLocale } from "@/providers/locale-provider";

export default function SiteHeader() {
    const { locale, setLocale, t } = useLocale();
    const [menuOpen, setMenuOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    const handleDownloadResume = useCallback(() => {}, []);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMenu();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen, closeMenu]);

    useEffect(() => {
        if (!menuOpen) return;
        const onPointerDown = (e: PointerEvent) => {
            const el = containerRef.current;
            if (!el || el.contains(e.target as Node)) return;
            closeMenu();
        };
        document.addEventListener("pointerdown", onPointerDown, true);
        return () => document.removeEventListener("pointerdown", onPointerDown, true);
    }, [menuOpen, closeMenu]);

    const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
        const next = e.relatedTarget;
        if (next instanceof Node && e.currentTarget.contains(next)) return;
        closeMenu();
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50 flex justify-end px-5 pt-4 sm:px-8 sm:pt-6 md:px-[clamp(2.5rem,10.5vw,12.5rem)] md:pt-[clamp(1.5rem,6.5vw,7.5rem)]">
            <div className="pointer-events-auto flex items-start gap-3 sm:gap-4 md:gap-[clamp(0.75rem,1.5vw,1.5rem)] text-xs font-normal tracking-wide text-white sm:text-sm md:font-heading md:text-[clamp(1rem,2.08vw,2.5rem)] md:tracking-normal">
                <button
                    type="button"
                    onClick={handleDownloadResume}
                    className="shrink-0 cursor-pointer border-0 bg-transparent p-0 opacity-95 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                    aria-label={t.header.downloadResumePdfAria}
                >
                    <Image
                        src="/download-icon.png"
                        alt=""
                        width={100}
                        height={100}
                        className="h-[0.82em] w-[0.82em] object-contain"
                        sizes="48px"
                    />
                </button>
                <div ref={containerRef} className="relative md:-mt-[0.22em]" onBlur={handleBlur}>
                    <button
                        type="button"
                        className="cursor-pointer rounded-md px-1 py-0 uppercase leading-none tracking-[0.12em] opacity-95 transition-opacity hover:opacity-100 md:tracking-normal"
                        aria-expanded={menuOpen}
                        aria-haspopup="true"
                        aria-label={
                            locale === "ru"
                                ? "Язык: русский, открыть или закрыть выбор"
                                : "Language: English, open or close menu"
                        }
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {locale.toUpperCase()}
                    </button>
                    <div
                        className={`absolute right-0 top-full z-10 pt-1 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                        aria-hidden={!menuOpen}
                    >
                        <div
                            className={`min-w-48 cursor-pointer rounded-lg border border-white/15 bg-[#001f3f]/95 py-1 font-sans text-xs font-semibold shadow-lg backdrop-blur-sm transition-[opacity,visibility] duration-150 ${
                                menuOpen ? "visible opacity-100" : "invisible opacity-0"
                            }`}
                            role="menu"
                        >
                            <button
                                type="button"
                                role="menuitem"
                                className="block w-full cursor-pointer px-4 py-2 text-left text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                                aria-current={locale === "ru" ? "true" : undefined}
                                onClick={() => {
                                    setLocale("ru");
                                    closeMenu();
                                }}
                            >
                                {t.language.labelRu}
                            </button>
                            <button
                                type="button"
                                role="menuitem"
                                className="block w-full cursor-pointer px-4 py-2 text-left text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                                aria-current={locale === "en" ? "true" : undefined}
                                onClick={() => {
                                    setLocale("en");
                                    closeMenu();
                                }}
                            >
                                {t.language.labelEn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
