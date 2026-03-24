import type { Messages } from "@/types/locale/messages";

export const pdfPetProjects = [
    {
        titleKey: "petNpmReposTitle" as const,
        url: "https://github.com/orgs/makebelieve21213-packages/repositories",
    },
    {
        titleKey: "petCryptoTitle" as const,
        url: "https://gitlab.com/makebelieve99/nakolenkechain",
    },
    {
        titleKey: "petMessengerTitle" as const,
        url: "https://github.com/makebelieve-sk/Messenger",
    },
] as const;

export type PdfPetProjectTitleKey = (typeof pdfPetProjects)[number]["titleKey"];

export const NPM_REGISTRY_URL = "https://www.npmjs.com/settings/makebelieve21213-packages/packages";

export const projectBodies: Record<string, (m: Messages["aboutMe"]) => string> = {
    petCryptoTitle: (m) => m.petCryptoBody,
    petMessengerTitle: (m) => m.petMessengerBody,
};
