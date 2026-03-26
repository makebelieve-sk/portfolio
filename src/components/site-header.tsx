"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type FocusEvent } from "react";

import { useLocale } from "@/providers/locale-provider";
import { ANIM_MS } from "@/utils/constants";

export default function SiteHeader() {
    const { locale, setLocale, t } = useLocale();
    const [menuOpen, setMenuOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const confirmTimerRef = useRef<ReturnType<typeof setTimeout>>(null);

    const openConfirm = useCallback(() => {
        if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current);
        setConfirmOpen(true);
        requestAnimationFrame(() => setConfirmVisible(true));
    }, []);

    const closeConfirm = useCallback(() => {
        setConfirmVisible(false);
        confirmTimerRef.current = setTimeout(() => setConfirmOpen(false), ANIM_MS);
    }, []);

    const handleDownloadResume = useCallback(() => {
        closeConfirm();
        const fileName = locale === "ru" ? "Skryabin_A_ru.CV.pdf" : "Skryabin_A_en.CV.pdf";
        const link = document.createElement("a");
        link.href = `/pdf/${fileName}`;
        link.download = fileName;
        link.click();
    }, [locale, closeConfirm]);

    useEffect(() => {
        if (!menuOpen && !confirmOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (confirmOpen) closeConfirm();
                else if (menuOpen) closeMenu();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen, closeMenu, confirmOpen, closeConfirm]);

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
        <header className="absolute inset-x-0 top-0 z-50 flex justify-end pl-5 pr-[5vw] pt-6 sm:pl-8 sm:pt-8 md:px-[clamp(2.5rem,10.5vw,12.5rem)] md:pt-[clamp(2rem,4.8vw,5.75rem)]">
            <div className="pointer-events-auto flex items-start gap-[clamp(0.75rem,1.5vw,1.5rem)] font-heading text-[clamp(1.25rem,1.98vw,2.375rem)] tracking-normal text-white md:text-[clamp(0.875rem,1.98vw,2.375rem)]">
                <button
                    type="button"
                    onClick={openConfirm}
                    className="shrink-0 cursor-pointer border-0 bg-transparent p-0 opacity-95 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                    aria-label={t.header.downloadResumePdfAria}
                >
                    <Image
                        src="/download-icon.png"
                        alt=""
                        width={100}
                        height={100}
                        className="h-[1.1em] w-[1.1em] object-contain md:h-[0.82em] md:w-[0.82em]"
                        sizes="48px"
                    />
                </button>
                <div ref={containerRef} className="relative -mt-[0.22em]" onBlur={handleBlur}>
                    <button
                        type="button"
                        className="cursor-pointer rounded-md px-2 py-1 uppercase leading-none tracking-[0.12em] opacity-95 transition-opacity hover:opacity-100 md:px-1 md:py-0 md:tracking-normal"
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
                    {/* Desktop dropdown */}
                    <div
                        className={`absolute right-0 top-full z-10 hidden pt-1 md:block ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
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

                    {/* Mobile modal */}
                    <div
                        className={`fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-sm transition-[background-color,opacity,visibility] duration-200 md:hidden ${
                            menuOpen
                                ? "visible bg-black/50 opacity-100"
                                : "invisible bg-black/0 opacity-0"
                        }`}
                        inert={!menuOpen ? true : undefined}
                        onClick={(e) => {
                            if (e.target === e.currentTarget) closeMenu();
                        }}
                    >
                        <div
                            className={`min-w-[16rem] rounded-2xl border border-white/20 bg-[#001f3f]/95 font-sans shadow-2xl backdrop-blur-md transition-transform duration-200 ${
                                menuOpen ? "scale-100" : "scale-90"
                            }`}
                            style={{ padding: "clamp(1.25rem, 5vw, 2rem)" }}
                            role="menu"
                        >
                            <button
                                type="button"
                                role="menuitem"
                                className={`block w-full cursor-pointer rounded-xl py-3 text-center text-lg font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white ${locale === "ru" ? "border border-white/40" : ""}`}
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
                                className={`mt-2 block w-full cursor-pointer rounded-xl py-3 text-center text-lg font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white ${locale === "en" ? "border border-white/40" : ""}`}
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

            {confirmOpen && (
                <div
                    className={`fixed inset-0 z-[70] flex items-center justify-center backdrop-blur-sm transition-[background-color,opacity,visibility] ease-out ${
                        confirmVisible
                            ? "visible bg-black/60 opacity-100"
                            : "invisible bg-black/0 opacity-0"
                    }`}
                    style={{ transitionDuration: `${ANIM_MS}ms` }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeConfirm();
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-label={t.header.downloadConfirmTitle}
                >
                    <div
                        className={`mx-4 w-full max-w-sm rounded-2xl border border-white/20 bg-[#001f3f]/95 px-8 py-7 text-center font-sans shadow-2xl backdrop-blur-md transition-transform ease-out ${
                            confirmVisible ? "scale-100" : "scale-90"
                        }`}
                        style={{ transitionDuration: `${ANIM_MS}ms` }}
                    >
                        <p className="text-lg font-semibold text-white">
                            {t.header.downloadConfirmMessage}
                        </p>
                        <div className="mt-6 flex gap-3">
                            <button
                                type="button"
                                onClick={closeConfirm}
                                className="flex-1 cursor-pointer rounded-xl border border-white/30 bg-transparent py-2.5 text-base font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                {t.header.downloadCancelButton}
                            </button>
                            <button
                                type="button"
                                onClick={handleDownloadResume}
                                className="flex-1 cursor-pointer rounded-xl border-0 bg-white py-2.5 text-base font-semibold text-[#0F3987] transition-colors hover:bg-white/90"
                            >
                                {t.header.downloadConfirmButton}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
