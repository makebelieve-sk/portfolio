import { Image, Link, Text, View } from "@react-pdf/renderer";

import type { Messages } from "@/types/locale/messages";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/utils/footer/constants";
import { COLORS } from "@/utils/pdf/styles";

type PdfHeaderProps = {
    messages: Messages;
    origin: string;
};

export default function PdfHeader({ messages, origin }: PdfHeaderProps) {
    const hero = messages.hero;
    const footer = messages.footer;

    return (
        <View
            style={{
                backgroundColor: COLORS.gradientStart,
                marginTop: -40,
                marginHorizontal: -40,
                paddingHorizontal: 40,
                paddingTop: 20,
                paddingBottom: 18,
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
            }}
        >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
                src={`${origin}/slides/intro/hero.png`}
                style={{ width: 72, height: 72, objectFit: "contain" }}
            />

            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <View>
                    <Text
                        style={{
                            fontFamily: "Bebas Neue",
                            fontSize: 28,
                            color: COLORS.white,
                            letterSpacing: 1,
                        }}
                    >
                        {hero.nameLine}
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: COLORS.white,
                            opacity: 0.9,
                        }}
                    >
                        {hero.roleBadgeLine1} {hero.roleBadgeLine2}
                    </Text>
                </View>

                <View style={{ alignItems: "flex-end", gap: 4 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                        <Text style={{ fontSize: 8, color: COLORS.white, opacity: 0.7 }}>
                            {footer.phoneLabel}:
                        </Text>
                        <Link src={PHONE_HREF} style={{ fontSize: 9, color: COLORS.white }}>
                            {PHONE}
                        </Link>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                        <Text style={{ fontSize: 8, color: COLORS.white, opacity: 0.7 }}>
                            {footer.emailLabel}:
                        </Text>
                        <Link src={EMAIL_HREF} style={{ fontSize: 9, color: COLORS.white }}>
                            {EMAIL}
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    );
}
