import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cookies, headers } from "next/headers";

import { getSiteUrl } from "@/utils/site-url";
import SiteHeader from "@/components/site-header";
import LocaleProvider from "@/providers/locale-provider";
import { LOCALE_COOKIE_NAME } from "@/utils/locale/constants";
import { resolveServerLocale } from "@/utils/locale/resolve-locale";

import "./globals.css";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
    display: "swap",
});

const bebasNeueCyrillic = localFont({
    src: "../fonts/bebasneuecyrillic.ttf",
    variable: "--font-bebas",
    display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Portfolio — Alexey Skryabin",
        template: "%s — Alexey Skryabin",
    },
    description:
        "Senior fullstack developer portfolio: projects, work experience, education, and background. English and Russian.",
    applicationName: "Portfolio — Alexey Skryabin",
    authors: [{ name: "Alexey Skryabin", url: siteUrl }],
    creator: "Alexey Skryabin",
    category: "portfolio",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: ["ru_RU"],
        url: siteUrl,
        siteName: "Portfolio — Alexey Skryabin",
        title: "Portfolio — Alexey Skryabin",
        description:
            "Senior fullstack developer portfolio: projects, work experience, education, and background.",
        images: [
            {
                url: "/slides/intro/hero.png",
                width: 3198,
                height: 2712,
                alt: "Alexey Skryabin — portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio — Alexey Skryabin",
        description:
            "Senior fullstack developer portfolio: projects, work experience, education, and background.",
        images: ["/slides/intro/hero.png"],
    },
    icons: {
        icon: [{ url: "/favicon.ico", sizes: "any" }],
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const [headerList, cookieStore] = await Promise.all([headers(), cookies()]);
    const serverLocale = resolveServerLocale(
        cookieStore.get(LOCALE_COOKIE_NAME)?.value,
        headerList.get("accept-language"),
    );

    return (
        <html
            lang={serverLocale === "ru" ? "ru" : "en"}
            className={`${inter.variable} ${bebasNeueCyrillic.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <body className="flex min-h-full min-w-0 flex-col">
                <LocaleProvider serverLocale={serverLocale}>
                    <SiteHeader />
                    {children}
                </LocaleProvider>
            </body>
        </html>
    );
}
