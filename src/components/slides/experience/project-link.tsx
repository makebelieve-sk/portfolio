import ProjectSmallArrow from "@/components/project-small-arrow";

interface ProjectLinkProps {
    url: string;
    label: string;
}

export default function ProjectLink({ url, label }: ProjectLinkProps) {
    return (
        <div
            className="flex items-center"
            style={{
                marginTop: "clamp(1rem, 4.167cqw, 5rem)",
                marginLeft: "clamp(1rem, 32.344cqw, 38.813rem)",
            }}
        >
            <span
                className="mr-[clamp(4px,0.365cqw,7px)] flex shrink-0 items-center gap-0"
                aria-hidden
            >
                <ProjectSmallArrow rotated />
                <ProjectSmallArrow rotated />
            </span>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0F3987] font-bold uppercase text-white decoration-white underline-offset-[0.2em] hover:underline"
                style={{
                    fontSize: "clamp(1rem, 1.823cqw, 2.1875rem)",
                    paddingInline: "clamp(0.75rem, 2.083cqw, 2.5rem)",
                    height: "clamp(2rem, 2.76cqw, 3.3125rem)",
                    borderRadius: "clamp(3px, 0.365cqw, 7px)",
                }}
            >
                {label}
            </a>
            <span
                className="ml-[clamp(4px,0.365cqw,7px)] flex shrink-0 items-center gap-0"
                aria-hidden
            >
                <ProjectSmallArrow />
                <ProjectSmallArrow />
            </span>
        </div>
    );
}
