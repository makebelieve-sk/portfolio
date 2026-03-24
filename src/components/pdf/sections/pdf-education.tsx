import { Text, View } from "@react-pdf/renderer";

import type { Messages } from "@/types/locale/messages";
import { styles, COLORS } from "@/utils/pdf/styles";

type PdfEducationProps = { messages: Messages };

export default function PdfEducation({ messages }: PdfEducationProps) {
    const m = messages.education;

    return (
        <View style={{ marginTop: 6 }}>
            <Text style={styles.sectionHeading}>{m.heading}</Text>

            <Text style={[styles.h3, { marginBottom: 2 }]}>{m.university}</Text>
            <Text style={[styles.bodyText, { marginBottom: 10 }]}>{m.institute}</Text>

            <View style={{ flexDirection: "row", gap: 12 }}>
                {m.degrees.map((deg, i) => (
                    <View
                        key={i}
                        style={{
                            flex: 1,
                            borderLeftWidth: i > 0 ? 1 : 0,
                            borderLeftColor: COLORS.primary,
                            borderLeftStyle: "solid" as const,
                            paddingLeft: i > 0 ? 12 : 0,
                            opacity: i > 0 ? undefined : undefined,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 9,
                                fontWeight: 700,
                                textTransform: "uppercase",
                                marginBottom: 2,
                            }}
                        >
                            {deg.year}
                        </Text>
                        <Text style={styles.bodyText}>
                            {deg.specialty.replace(/\u00a0/g, " ").replace(/\n/g, " ")}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
