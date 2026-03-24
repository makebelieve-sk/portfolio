"use client";

import { useCallback, useEffect, useState } from "react";

import { useLocale } from "@/providers/locale-provider";
import { SCROLL_THRESHOLD } from "@/utils/constants";

export default function ScrollToTop() {
    const { t } = useLocale();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > SCROLL_THRESHOLD);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.scrollToTop.label}
            className={`fixed bottom-14 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#0F3886] text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#01215F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-8 sm:right-8 sm:h-12 sm:w-12 ${
                visible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
            }`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 sm:h-6 sm:w-6"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    );
}
