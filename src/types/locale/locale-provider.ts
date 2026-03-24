import type { ReactNode } from "react";

import type { Messages } from "@/types/locale/messages";
import type { Locale } from "@/types/locale/locale";

export type LocaleContextValue = {
    locale: Locale;
    setLocale: (next: Locale) => void;
    t: Messages;
};

export type LocaleProviderProps = {
    serverLocale: Locale;
    children: ReactNode;
};
