import { BULLET_GRADIENT } from "@/utils/constants";

import type { ExperienceSubSection as SubSection } from "@/types/experience/experience";

interface ExperienceSubSectionProps {
    section: SubSection;
    index: number;
    hasIntro: boolean;
}

export default function ExperienceSubSection({
    section,
    index: j,
    hasIntro,
}: ExperienceSubSectionProps) {
    return (
        <div
            style={{
                marginTop:
                    j === 0 && !hasIntro
                        ? "clamp(1rem, 2.188cqw, 2.625rem)"
                        : j === 0
                          ? "clamp(1.5rem, 3.281cqw, 3.938rem)"
                          : "clamp(2rem, 6.042cqw, 7.25rem)",
            }}
        >
            {"heading" in section && section.heading && (
                <p
                    className="font-semibold leading-[1.267] text-[#0F3987]"
                    style={{
                        fontSize: "clamp(0.75rem, 1.46cqw, 1.75rem)",
                    }}
                >
                    {section.heading}
                </p>
            )}

            {"description" in section && section.description && (
                <p
                    className="font-medium leading-[1.267] text-[#0F3987]"
                    style={{
                        fontSize: "clamp(0.75rem, 1.46cqw, 1.75rem)",
                        marginTop: "heading" in section && section.heading ? "0.25em" : undefined,
                    }}
                >
                    {section.description}
                </p>
            )}

            {"bullets" in section && section.bullets && (
                <ul
                    className="list-none p-0 font-medium leading-[1.21] text-[#0F3987]"
                    style={{
                        fontSize: "clamp(0.6875rem, 1.41cqw, 1.6875rem)",
                        marginTop:
                            ("heading" in section && section.heading) ||
                            ("description" in section && section.description)
                                ? "clamp(0.75rem, 2.031cqw, 2.438rem)"
                                : undefined,
                    }}
                >
                    {section.bullets.map((bullet) => (
                        <li
                            key={bullet}
                            className="relative"
                            style={{
                                paddingLeft: "clamp(1.125rem, 1.75cqw, 2.1rem)",
                                marginTop: "clamp(4px, 0.781cqw, 0.938rem)",
                            }}
                        >
                            <span
                                className="absolute left-0 -translate-y-1/2 rounded-full"
                                style={{
                                    top: "0.605em",
                                    width: "clamp(0.5rem, 0.73cqw, 0.875rem)",
                                    height: "clamp(0.5rem, 0.73cqw, 0.875rem)",
                                    background: BULLET_GRADIENT,
                                }}
                                aria-hidden
                            />
                            {bullet}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
