"use client";

import Link from "next/link";
import { useEffect } from "react";

import { useLocale } from "@/providers/locale-provider";
import type { AppErrorPageProps } from "@/types/app/error-page";

export default function ErrorPage({ error, unstable_retry }: AppErrorPageProps) {
    const { t } = useLocale();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
            <div className="max-w-md space-y-3">
                <h1 className="text-4xl tracking-wide text-foreground uppercase">
                    {t.errorPage.title}
                </h1>
                <p className="text-foreground text-base leading-relaxed">
                    {t.errorPage.descriptionLine1}
                    <br />
                    {t.errorPage.descriptionLine2}
                </p>
                {error.digest ? (
                    <p className="text-muted-foreground font-mono text-xs" title="Error reference">
                        {error.digest}
                    </p>
                ) : null}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                    type="button"
                    onClick={() => unstable_retry()}
                    className="border-border bg-foreground text-background hover:bg-foreground/90 cursor-pointer rounded-md border px-5 py-2.5 text-base font-medium transition-colors"
                >
                    {t.errorPage.retry}
                </button>
                <Link
                    href="/"
                    className="border-border text-foreground hover:bg-muted rounded-md border px-5 py-2.5 text-base font-medium transition-colors"
                >
                    {t.errorPage.home}
                </Link>
            </div>
        </main>
    );
}
