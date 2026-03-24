"use client";

import { useLocale } from "@/providers/locale-provider";

export default function AboutMeProjects() {
    const { t } = useLocale();
    const m = t.aboutMe;

    return (
        <div
            className="mt-[clamp(2rem,7.396cqw,8.875rem)] font-medium leading-[1.37]"
            style={{ fontSize: "clamp(0.875rem, 1.72cqw, 2.0625rem)" }}
        >
            <p className="mb-[1.37em]">{m.petProjectsIntro}</p>

            <a
                href="https://github.com/orgs/makebelieve21213-packages/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-[0.4em] inline-flex items-center rounded-[clamp(3px,0.365cqw,7px)] bg-[#0F3987] font-bold text-white underline decoration-white underline-offset-[0.2em] transition-colors hover:bg-[#1a4da6] hover:text-white/90"
                style={{
                    marginLeft: "-0.417cqw",
                    paddingInline: "0.573cqw",
                    height: "clamp(1.5rem, 2.76cqw, 3.3125rem)",
                }}
            >
                {m.petNpmReposTitle}
            </a>
            <p className="mb-[1.37em]">
                {m.petNpmReposBodyBefore}
                <a
                    href="https://www.npmjs.com/settings/makebelieve21213-packages/packages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-inherit underline decoration-[#0F3987] underline-offset-[0.2em] hover:opacity-90"
                >
                    {m.petNpmReposRegistryLinkLabel}
                </a>
                {m.petNpmReposBodyAfter}
            </p>

            <a
                href="https://gitlab.com/makebelieve99/nakolenkechain"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-[0.4em] inline-flex items-center rounded-[clamp(3px,0.365cqw,7px)] bg-[#0F3987] font-bold text-white underline decoration-white underline-offset-[0.2em] transition-colors hover:bg-[#1a4da6] hover:text-white/90"
                style={{
                    marginLeft: "-0.417cqw",
                    paddingInline: "0.573cqw",
                    height: "clamp(1.5rem, 2.76cqw, 3.3125rem)",
                }}
            >
                {m.petCryptoTitle}
            </a>
            <p className="mb-[1.37em]">{m.petCryptoBody}</p>

            <a
                href="https://github.com/makebelieve-sk/Messenger"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-[0.4em] inline-flex items-center rounded-[clamp(3px,0.365cqw,7px)] bg-[#0F3987] font-bold text-white underline decoration-white underline-offset-[0.2em] transition-colors hover:bg-[#1a4da6] hover:text-white/90"
                style={{
                    marginLeft: "-0.417cqw",
                    paddingInline: "0.573cqw",
                    height: "clamp(1.5rem, 2.76cqw, 3.3125rem)",
                }}
            >
                {m.petMessengerTitle}
            </a>
            <p className="mb-0">{m.petMessengerBody}</p>
        </div>
    );
}
