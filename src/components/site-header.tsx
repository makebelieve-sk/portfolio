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

    const [downloading, setDownloading] = useState(false);

    const handleDownloadResume = useCallback(async () => {
        if (downloading) return;
        setDownloading(true);
        try {
            const res = await fetch(`/api/pdf?locale=${locale}`);
            if (!res.ok) {
                window.alert(t.header.downloadResumePdfError);
                return;
            }
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `Skryabin_CV_${locale}.pdf`;
            a.click();
            URL.revokeObjectURL(url);
        } catch {
            window.alert(t.header.downloadResumePdfError);
        } finally {
            setDownloading(false);
        }
    }, [locale, downloading, t]);

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
        <header className="absolute inset-x-0 top-0 z-50 flex justify-end pl-5 pr-[10.417vw] pt-6 sm:pl-8 sm:pt-8 md:px-[clamp(2.5rem,10.5vw,12.5rem)] md:pt-[clamp(2rem,4.8vw,5.75rem)]">
            <div className="pointer-events-auto flex items-start gap-[clamp(0.75rem,1.5vw,1.5rem)] font-heading text-[clamp(0.875rem,1.98vw,2.375rem)] tracking-normal text-white">
                <button
                    type="button"
                    onClick={handleDownloadResume}
                    disabled={downloading}
                    className="shrink-0 cursor-pointer border-0 bg-transparent p-0 opacity-95 transition-opacity hover:opacity-100 disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                    aria-label={t.header.downloadResumePdfAria}
                >
                    <Image
                        src="/download-icon.png"
                        alt=""
                        width={100}
                        height={100}
                        className={`h-[0.82em] w-[0.82em] object-contain ${downloading ? "animate-pulse" : ""}`}
                        sizes="48px"
                    />
                </button>
                <div ref={containerRef} className="relative -mt-[0.22em]" onBlur={handleBlur}>
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
                        inert={!menuOpen ? true : undefined}
                    >
                        <div
                            className={`cursor-pointer rounded-lg border border-white/15 bg-[#001f3f]/95 font-sans font-semibold shadow-lg backdrop-blur-sm transition-[opacity,visibility] duration-150 ${
                                menuOpen ? "visible opacity-100" : "invisible opacity-0"
                            }`}
                            style={{
                                minWidth: "clamp(12rem, 14vw, 18rem)",
                                fontSize: "clamp(0.625rem, 0.9vw, 1.125rem)",
                                paddingBlock: "clamp(0.25rem, 0.4vw, 0.5rem)",
                            }}
                            role="menu"
                        >
                            <button
                                type="button"
                                role="menuitem"
                                className="block w-full cursor-pointer text-left text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                                style={{
                                    padding:
                                        "clamp(0.5rem, 0.7vw, 0.875rem) clamp(1rem, 1.4vw, 1.75rem)",
                                }}
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
                                className="block w-full cursor-pointer text-left text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                                style={{
                                    padding:
                                        "clamp(0.5rem, 0.7vw, 0.875rem) clamp(1rem, 1.4vw, 1.75rem)",
                                }}
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
