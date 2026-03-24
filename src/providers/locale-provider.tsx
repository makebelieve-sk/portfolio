"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useSyncExternalStore,
} from "react";

import type { LocaleContextValue, LocaleProviderProps } from "@/types/locale/locale-provider";
import type { Locale } from "@/types/locale/locale";
import {
    emitLocaleChange,
    markClientLocaleHydrated,
    persistLocale,
    readLocaleSnapshot,
    subscribeLocale,
} from "@/utils/locale/client-locale";
import { messages } from "@/utils/locale/messages";

const LocaleContext = createContext<LocaleContextValue | null>(null);

export default function LocaleProvider({ serverLocale, children }: LocaleProviderProps) {
    const locale = useSyncExternalStore(
        subscribeLocale,
        () => readLocaleSnapshot(serverLocale),
        () => serverLocale,
    );

    useEffect(() => {
        markClientLocaleHydrated();
    }, []);

    const setLocale = useCallback((next: Locale) => {
        persistLocale(next);
        emitLocaleChange();
    }, []);

    useEffect(() => {
        document.documentElement.lang = locale === "ru" ? "ru" : "en";
        document.title = messages[locale].meta.title;
    }, [locale]);

    const value = useMemo<LocaleContextValue>(
        () => ({
            locale,
            setLocale,
            t: messages[locale],
        }),
        [locale, setLocale],
    );

    return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
    const ctx = useContext(LocaleContext);
    if (!ctx) {
        throw new Error("useLocale must be used within LocaleProvider");
    }
    return ctx;
}
