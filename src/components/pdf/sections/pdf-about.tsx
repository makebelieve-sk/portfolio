import { Text, View } from "@react-pdf/renderer";

import type { Messages } from "@/types/locale/messages";
import { styles, COLORS } from "@/utils/pdf/styles";

type PdfAboutProps = { messages: Messages };

export default function PdfAbout({ messages }: PdfAboutProps) {
    const m = messages.aboutMe;

    const infoPairs: [string, string][] = [
        [m.labelPosition, m.valuePosition],
        [m.labelCommercialExp, m.valueCommercialExp],
        [m.labelEmploymentType, m.valueEmploymentType],
        [m.labelWorkFormat, m.valueWorkFormat],
        [m.labelLocation, m.valueLocation],
    ];

    return (
        <View style={{ marginTop: 20 }}>
            <Text style={styles.sectionHeading}>{m.aboutHeading}</Text>

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    columnGap: 16,
                    rowGap: 8,
                    marginBottom: 14,
                }}
            >
                {infoPairs.map(([label, value]) => (
                    <View
                        key={label}
                        style={{
                            width: "28%",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 7.5,
                                fontWeight: 700,
                                color: COLORS.primary,
                                marginBottom: 2,
                            }}
                        >
                            {label.replace(/\n/g, " ")}
                        </Text>
                        <Text style={{ fontSize: 9, fontWeight: 500 }}>
                            {value.replace(/\n/g, " ")}
                        </Text>
                    </View>
                ))}
            </View>

            <Text style={styles.bodyText}>{m.summaryCommerce}</Text>

            <Text style={[styles.bodyText, { fontWeight: 700, marginTop: 10, marginBottom: 4 }]}>
                {m.architectureLeadIn}
            </Text>

            {m.architectureList.map((item) => (
                <View key={item} style={styles.bulletRow}>
                    <View style={styles.bulletDot} />
                    <Text style={styles.bulletText}>{item}</Text>
                </View>
            ))}

            <View
                style={{
                    backgroundColor: COLORS.primary,
                    marginTop: 12,
                    marginHorizontal: -40,
                    paddingHorizontal: 40,
                    paddingVertical: 16,
                }}
            >
                {m.bioOnBlue.split("\n\n").map((para, i) => (
                    <Text
                        key={i}
                        style={{
                            fontSize: 9,
                            fontWeight: 600,
                            lineHeight: 1.4,
                            color: COLORS.white,
                            marginBottom: i < m.bioOnBlue.split("\n\n").length - 1 ? 6 : 0,
                        }}
                    >
                        {para}
                    </Text>
                ))}
            </View>
        </View>
    );
}
