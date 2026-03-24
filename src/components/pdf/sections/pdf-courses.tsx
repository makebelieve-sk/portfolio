import { Image, Text, View } from "@react-pdf/renderer";

import type { Messages } from "@/types/locale/messages";
import { styles, COLORS } from "@/utils/pdf/styles";

type PdfCoursesProps = { messages: Messages; origin: string };

export default function PdfCourses({ messages, origin }: PdfCoursesProps) {
    const m = messages.courses;

    return (
        <View style={{ marginTop: 16 }}>
            <Text style={styles.sectionHeading}>{m.heading}</Text>

            <View style={{ flexDirection: "row", gap: 12 }}>
                {m.entries.map((entry, i) => (
                    <View
                        key={i}
                        style={{
                            flex: 1,
                            borderLeftWidth: i > 0 ? 1 : 0,
                            borderLeftColor: COLORS.primary,
                            borderLeftStyle: "solid" as const,
                            paddingLeft: i > 0 ? 12 : 0,
                            justifyContent: "flex-end",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 8,
                                fontWeight: 700,
                                textTransform: "uppercase",
                                marginBottom: 2,
                            }}
                        >
                            {entry.provider}
                        </Text>
                        <Text style={[styles.bodyText, { marginBottom: 6 }]}>{entry.name}</Text>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image
                            src={`${origin}${entry.certificate}`}
                            style={{
                                width: 150,
                                height: 106,
                                objectFit: "contain",
                                borderWidth: 0.5,
                                borderColor: COLORS.primary,
                                borderStyle: "solid" as const,
                                marginTop: "auto",
                            }}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
}
