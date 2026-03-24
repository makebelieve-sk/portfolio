import type { Metadata } from "next";
import Link from "next/link";

import { getServerMessages } from "@/utils/locale/server-messages";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getServerMessages();
    return {
        title: `${t.notFoundPage.code} — ${t.notFoundPage.title}`,
    };
}

export default async function NotFound() {
    const t = await getServerMessages();

    return (
        <main className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
            <div className="max-w-md space-y-3">
                <p className="font-heading text-4xl tracking-wide text-foreground uppercase">
                    {t.notFoundPage.code}
                </p>
                <h1 className="text-4xl tracking-wide text-foreground uppercase">
                    {t.notFoundPage.title}
                </h1>
                <p className="text-foreground text-base leading-relaxed">
                    {t.notFoundPage.description}
                </p>
            </div>
            <Link
                href="/"
                className="border-border text-foreground hover:bg-muted cursor-pointer rounded-md border px-5 py-2.5 text-base font-medium transition-colors"
            >
                {t.notFoundPage.home}
            </Link>
        </main>
    );
}
