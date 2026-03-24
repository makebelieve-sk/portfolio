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
        <footer aria-label={f.ariaLabel} className="hidden overflow-x-clip md:block">
            <div
                className="relative mx-auto w-full max-w-[1920px]"
                style={{ containerType: "inline-size" }}
            >
                <div
                    className="relative w-full bg-[linear-gradient(135deg,#0F3886_0%,#01215F_100%)]"
                    style={{ aspectRatio: `${FW} / ${FH}` }}
                >
                    {/* Phone icon */}
                    <div
                        className="pointer-events-none absolute"
                        style={{
                            left: fpx(203),
                            top: fpy(138),
                            width: fpw(34),
                        }}
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

                    {/* Phone text */}
                    <a
                        href={PHONE_HREF}
                        className="absolute truncate font-medium text-white no-underline transition-opacity hover:opacity-80"
                        style={{
                            left: fpx(253),
                            top: fpy(132),
                            maxWidth: fpw(550),
                            fontSize: "clamp(0.625rem, 1.823cqw, 2.1875rem)",
                            lineHeight: 1.21,
                        }}
                        aria-label={`${f.phoneLabel}: ${PHONE}`}
                    >
                        {PHONE}
                    </a>

                    {/* Mail icon */}
                    <div
                        className="pointer-events-none absolute"
                        style={{
                            left: fpx(207),
                            top: fpy(203),
                            width: fpw(34),
                        }}
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

                    {/* Email text */}
                    <a
                        href={EMAIL_HREF}
                        className="absolute truncate font-medium text-white no-underline transition-opacity hover:opacity-80"
                        style={{
                            left: fpx(256),
                            top: fpy(194),
                            maxWidth: fpw(550),
                            fontSize: "clamp(0.625rem, 1.823cqw, 2.1875rem)",
                            lineHeight: 1.21,
                        }}
                        aria-label={`${f.emailLabel}: ${EMAIL}`}
                    >
                        {EMAIL}
                    </a>

                    {/* QR Codes */}
                    {QR_CODES.map((qr) => (
                        <div
                            key={qr.src}
                            className="absolute"
                            style={{
                                left: fpx(qr.x),
                                top: fpy(qr.y),
                                width: fpw(qr.w),
                            }}
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
        </footer>
    );
}
