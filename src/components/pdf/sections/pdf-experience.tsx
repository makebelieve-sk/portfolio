import { Link, Text, View } from "@react-pdf/renderer";

import type { Locale } from "@/types/locale/locale";
import type { Messages } from "@/types/locale/messages";
import { formatDuration, inclusiveMonthsFromStart } from "@/utils/date/month-helpers";
import { styles, COLORS } from "@/utils/pdf/styles";

type PdfExperienceProps = { messages: Messages; locale: Locale };

export default function PdfExperience({ messages, locale }: PdfExperienceProps) {
    const m = messages.experience;

    return (
        <View style={{ marginTop: 6 }}>
            <Text style={styles.sectionHeading}>{m.heading}</Text>

            {m.entries.map((entry, i) => {
                const isCurrentJob = i === 0;
                let periodLabel = entry.period;

                if (isCurrentJob) {
                    const totalMonths = inclusiveMonthsFromStart(new Date(2025, 7, 1));
                    const duration = formatDuration(locale, totalMonths, {
                        monthOne: m.durationMonthOne,
                        monthsMany: m.durationMonthsMany,
                        yearOne: m.durationYearOne,
                        yearsMany: m.durationYearsMany,
                        and: m.durationAnd,
                    });
                    periodLabel = `${m.finamPeriodPresent} (${duration})`;
                }

                return (
                    <View key={entry.company} style={{ marginBottom: 12 }} wrap={false}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                marginBottom: 4,
                            }}
                        >
                            <View>
                                <Text style={styles.h3}>{entry.company}</Text>
                                <Text style={{ fontSize: 9, fontWeight: 600, marginBottom: 2 }}>
                                    {entry.position}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 8,
                                    fontWeight: 500,
                                    color: COLORS.gray,
                                    textAlign: "right",
                                    maxWidth: 180,
                                }}
                            >
                                {periodLabel}
                            </Text>
                        </View>

                        {"intro" in entry && entry.intro && (
                            <Text style={[styles.bodyText, { marginBottom: 4 }]}>
                                {entry.intro}
                            </Text>
                        )}

                        {entry.subSections.map((sub, si) => (
                            <View key={si} style={{ marginBottom: 4 }}>
                                {"heading" in sub && sub.heading && (
                                    <Text
                                        style={{
                                            fontSize: 9.5,
                                            fontWeight: 700,
                                            marginBottom: 3,
                                        }}
                                    >
                                        {sub.heading}
                                    </Text>
                                )}
                                {"description" in sub && sub.description && (
                                    <Text style={[styles.bodyText, { marginBottom: 3 }]}>
                                        {sub.description}
                                    </Text>
                                )}
                                {"bullets" in sub &&
                                    sub.bullets?.map((bullet, bi) => (
                                        <View key={bi} style={styles.bulletRow}>
                                            <View style={styles.bulletDot} />
                                            <Text style={styles.bulletText}>{bullet}</Text>
                                        </View>
                                    ))}
                            </View>
                        ))}

                        {"projectUrl" in entry && entry.projectUrl && (
                            <View
                                style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}
                            >
                                <Text style={{ fontSize: 8, fontWeight: 600 }}>
                                    {m.projectLinkLabel}:{" "}
                                </Text>
                                <Link src={entry.projectUrl} style={[styles.link, { fontSize: 8 }]}>
                                    {entry.projectUrl}
                                </Link>
                            </View>
                        )}

                        <Text
                            style={{
                                fontSize: 7.5,
                                fontWeight: 500,
                                color: COLORS.gray,
                                marginTop: 3,
                            }}
                        >
                            {m.stackPrefix}
                            {entry.stack}
                        </Text>

                        {i < m.entries.length - 1 && <View style={styles.divider} />}
                    </View>
                );
            })}
        </View>
    );
}
