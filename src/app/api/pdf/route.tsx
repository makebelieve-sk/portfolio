import { renderToBuffer } from "@react-pdf/renderer";

import type { Locale } from "@/types/locale/locale";
import { messages } from "@/utils/locale/messages";
import { registerFonts } from "@/utils/pdf/register-fonts";
import CvDocument from "@/components/pdf/cv-document";

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const locale: Locale = searchParams.get("locale") === "ru" ? "ru" : "en";
    const t = messages[locale];

    registerFonts(origin);

    const buffer = await renderToBuffer(
        <CvDocument messages={t} locale={locale} origin={origin} />,
    );

    return new Response(new Uint8Array(buffer), {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="Skryabin_CV_${locale}.pdf"`,
            "Cache-Control": "private, max-age=3600",
        },
    });
}
