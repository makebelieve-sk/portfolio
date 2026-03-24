import { Image, Link, View } from "@react-pdf/renderer";

import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, QR_CODES } from "@/utils/footer/constants";
import { COLORS } from "@/utils/pdf/styles";

type PdfFooterProps = { origin: string };

export default function PdfFooter({ origin }: PdfFooterProps) {
    return (
        <View
            style={{
                backgroundColor: COLORS.gradientStart,
                marginHorizontal: -40,
                marginBottom: -50,
                paddingHorizontal: 40,
                paddingVertical: 14,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "auto",
            }}
        >
            <View style={{ gap: 6 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image
                        src={`${origin}/slides/footer/icon-phone.png`}
                        style={{ width: 14, height: 14 }}
                    />
                    <Link src={PHONE_HREF} style={{ fontSize: 10, color: COLORS.white }}>
                        {PHONE}
                    </Link>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image
                        src={`${origin}/slides/footer/icon-mail.png`}
                        style={{ width: 14, height: 14 }}
                    />
                    <Link src={EMAIL_HREF} style={{ fontSize: 10, color: COLORS.white }}>
                        {EMAIL}
                    </Link>
                </View>
            </View>

            <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                {QR_CODES.map(({ src, altKey }) => (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <Image key={altKey} src={`${origin}${src}`} style={{ width: 46, height: 46 }} />
                ))}
            </View>
        </View>
    );
}
