"use client";

import Image from "next/image";

import { useLocale } from "@/providers/locale-provider";
import {
    EMAIL,
    EMAIL_HREF,
    FH,
    FW,
    PHONE,
    PHONE_HREF,
    QR_CODES,
    fpw,
    fpx,
    fpy,
} from "@/utils/footer/constants";

export default function SiteFooter() {
    const { t } = useLocale();
    const f = t.footer;

    return (
        <footer aria-label={f.ariaLabel} className="overflow-x-clip">
            {/* Desktop footer */}
            <div
                className="relative mx-auto hidden w-full max-w-[1920px] md:block"
                style={{ containerType: "inline-size" }}
            >
                <div
                    className="relative w-full bg-[linear-gradient(135deg,#0F3886_0%,#01215F_100%)]"
                    style={{ aspectRatio: `${FW} / ${FH}` }}
                >
                    <div
                        className="pointer-events-none absolute"
                        style={{ left: fpx(203), top: fpy(138), width: fpw(34) }}
                        aria-hidden
                    >
                        <Image
                            src="/slides/footer/icon-phone.png"
                            alt=""
                            width={68}
                            height={68}
                            className="h-auto w-full object-contain"
                            sizes="2vw"
                        />
                    </div>

                    <a
                        href={PHONE_HREF}
                        className="absolute truncate font-medium text-white no-underline transition-opacity hover:opacity-80"
                        style={{
                            left: fpx(253),
                            top: fpy(132),
                            maxWidth: fpw(550),
                            fontSize: "clamp(0.5rem, 1.72cqw, 2.0625rem)",
                            lineHeight: 1.21,
                        }}
                        aria-label={`${f.phoneLabel}: ${PHONE}`}
                    >
                        {PHONE}
                    </a>

                    <div
                        className="pointer-events-none absolute"
                        style={{ left: fpx(207), top: fpy(203), width: fpw(34) }}
                        aria-hidden
                    >
                        <Image
                            src="/slides/footer/icon-mail.png"
                            alt=""
                            width={68}
                            height={68}
                            className="h-auto w-full object-contain"
                            sizes="2vw"
                        />
                    </div>

                    <a
                        href={EMAIL_HREF}
                        className="absolute truncate font-medium text-white no-underline transition-opacity hover:opacity-80"
                        style={{
                            left: fpx(256),
                            top: fpy(194),
                            maxWidth: fpw(550),
                            fontSize: "clamp(0.5rem, 1.72cqw, 2.0625rem)",
                            lineHeight: 1.21,
                        }}
                        aria-label={`${f.emailLabel}: ${EMAIL}`}
                    >
                        {EMAIL}
                    </a>

                    {QR_CODES.map((qr) => (
                        <div
                            key={qr.src}
                            className="absolute"
                            style={{ left: fpx(qr.x), top: fpy(qr.y), width: fpw(qr.w) }}
                        >
                            <Image
                                src={qr.src}
                                alt={f[qr.altKey]}
                                width={316}
                                height={316}
                                className="h-auto w-full rounded-[clamp(2px,0.26cqw,5px)] object-contain"
                                sizes="8vw"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile footer */}
            <div
                className="bg-[linear-gradient(135deg,#0F3886_0%,#01215F_100%)] md:hidden"
                style={{ padding: "clamp(1.25rem, 5.34vw, 2.5rem) clamp(1rem, 4vw, 2rem)" }}
            >
                <div className="flex flex-col items-center gap-[clamp(0.5rem,2.08vw,1rem)]">
                    <a
                        href={PHONE_HREF}
                        className="flex items-center gap-[clamp(0.25rem,1vw,0.5rem)] font-medium text-white no-underline transition-opacity hover:opacity-80"
                        style={{ fontSize: "clamp(0.625rem, 2.5vw, 1.125rem)", lineHeight: 1.33 }}
                        aria-label={`${f.phoneLabel}: ${PHONE}`}
                    >
                        <Image
                            src="/slides/footer/icon-phone.png"
                            alt=""
                            width={68}
                            height={68}
                            className="h-[1.1em] w-[1.1em] object-contain"
                            sizes="24px"
                        />
                        {PHONE}
                    </a>
                    <a
                        href={EMAIL_HREF}
                        className="flex items-center gap-[clamp(0.25rem,1vw,0.5rem)] font-medium text-white no-underline transition-opacity hover:opacity-80"
                        style={{ fontSize: "clamp(0.625rem, 2.5vw, 1.125rem)", lineHeight: 1.33 }}
                        aria-label={`${f.emailLabel}: ${EMAIL}`}
                    >
                        <Image
                            src="/slides/footer/icon-mail.png"
                            alt=""
                            width={68}
                            height={68}
                            className="h-[1.05em] w-[1.05em] object-contain"
                            sizes="24px"
                        />
                        {EMAIL}
                    </a>
                </div>
                <div className="mt-[clamp(0.75rem,3.25vw,1.5rem)] flex items-center justify-center gap-[clamp(0.375rem,1.56vw,0.75rem)]">
                    {QR_CODES.map((qr) => (
                        <a
                            key={qr.src}
                            href={qr.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: "clamp(2.5rem, 8.46vw, 4.06rem)" }}
                            aria-label={f[qr.altKey]}
                        >
                            <Image
                                src={qr.src}
                                alt={f[qr.altKey]}
                                width={316}
                                height={316}
                                className="h-auto w-full rounded-[2px] object-contain"
                                sizes="(min-width: 768px) 8vw, 8.46vw"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
