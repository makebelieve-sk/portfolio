import Image from "next/image";

export default function ProjectSmallArrow({ rotated = false }: { rotated?: boolean }) {
    return (
        <Image
            src="/slides/experience/small-arrow.png"
            alt=""
            width={44}
            height={78}
            className={`h-[clamp(14px,1.719cqw,39px)] w-auto object-contain object-center ${rotated ? "rotate-180" : ""}`}
            sizes="44px"
        />
    );
}
