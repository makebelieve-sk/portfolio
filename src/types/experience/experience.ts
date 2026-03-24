import type { Messages } from "@/types/locale/messages";

export type ExperienceEntry = Messages["experience"]["entries"][number];

export type ExperienceSubSection = ExperienceEntry["subSections"][number];
