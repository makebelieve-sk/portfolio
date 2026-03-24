import { Link, Text, View } from "@react-pdf/renderer";

import type { Messages } from "@/types/locale/messages";
import { styles, COLORS } from "@/utils/pdf/styles";
import { pdfPetProjects, projectBodies } from "@/utils/pdf/pdf-projects";
import PdfNpmBody from "@/components/pdf/sections/pdf-npm-body";

type PdfProjectsProps = { messages: Messages };

export default function PdfProjects({ messages }: PdfProjectsProps) {
    const m = messages.aboutMe;

    return (
        <View style={{ marginTop: 14 }}>
            <Text style={[styles.bodyText, { marginBottom: 8 }]}>{m.petProjectsIntro}</Text>

            {pdfPetProjects.map(({ titleKey, url }) => (
                <View key={titleKey} style={{ marginBottom: 8 }}>
                    <Link
                        src={url}
                        style={{
                            fontSize: 9,
                            fontWeight: 700,
                            color: COLORS.white,
                            backgroundColor: COLORS.primary,
                            paddingHorizontal: 6,
                            paddingVertical: 3,
                            borderRadius: 3,
                            textDecoration: "underline",
                            alignSelf: "flex-start",
                            marginBottom: 3,
                        }}
                    >
                        {m[titleKey]}
                    </Link>
                    {titleKey === "petNpmReposTitle" ? (
                        <PdfNpmBody m={m} />
                    ) : (
                        <Text style={styles.bodyText}>{projectBodies[titleKey](m)}</Text>
                    )}
                </View>
            ))}
        </View>
    );
}
