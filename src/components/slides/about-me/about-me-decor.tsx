import Image from "next/image";

import { hPctY, pctW, pctX } from "@/utils/decor/canvas-pct";

export default function AboutMeDecor() {
    return (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div
                className="absolute"
                style={{
                    left: pctX(132.61),
                    top: hPctY(0),
                    width: pctW(276.7),
                }}
            >
                <Image
                    src="/slides/about-me/decor-main.png"
                    alt=""
                    width={554}
                    height={652}
                    className="h-auto w-full object-contain opacity-90"
                    sizes="15vw"
                />
            </div>
            <div
                className="absolute"
                style={{
                    left: pctX(361.85),
                    top: hPctY(158.99),
                    width: pctW(184.1),
                }}
            >
                <Image
                    src="/slides/about-me/decor-1.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-auto w-full object-contain"
                    sizes="10vw"
                />
            </div>
            <div
                className="absolute"
                style={{
                    left: pctX(134),
                    top: hPctY(293),
                    width: pctW(169),
                }}
            >
                <Image
                    src="/slides/about-me/decor-2.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-auto w-full object-contain"
                    sizes="9vw"
                />
            </div>
            <div
                className="absolute"
                style={{
                    left: pctX(336),
                    top: hPctY(358),
                    width: pctW(161),
                }}
            >
                <Image
                    src="/slides/about-me/decor-3.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-auto w-full object-contain"
                    sizes="9vw"
                />
            </div>
            <div
                className="absolute"
                style={{
                    left: pctX(187.27),
                    top: hPctY(481.71),
                    width: pctW(175.29),
                }}
            >
                <Image
                    src="/slides/about-me/decor-4.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-auto w-full object-contain"
                    sizes="9vw"
                />
            </div>
        </div>
    );
}
