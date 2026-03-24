import { Document, Page, Text } from "@react-pdf/renderer";

import type { Locale } from "@/types/locale/locale";
import type { Messages } from "@/types/locale/messages";
import { styles } from "@/utils/pdf/styles";
import PdfHeader from "@/components/pdf/sections/pdf-header";
import PdfAbout from "@/components/pdf/sections/pdf-about";
import PdfProjects from "@/components/pdf/sections/pdf-projects";
import PdfExperience from "@/components/pdf/sections/pdf-experience";
import PdfEducation from "@/components/pdf/sections/pdf-education";
import PdfCourses from "@/components/pdf/sections/pdf-courses";
import PdfFooter from "@/components/pdf/sections/pdf-footer";

type CvDocumentProps = {
    messages: Messages;
    locale: Locale;
    origin: string;
};

export default function CvDocument({ messages, locale, origin }: CvDocumentProps) {
    return (
        <Document
            title={messages.meta.title}
            author={messages.hero.nameLine}
            subject={`${messages.hero.roleBadgeLine1} ${messages.hero.roleBadgeLine2}`}
        >
            <Page size="A4" style={styles.page} wrap>
                <PdfHeader messages={messages} origin={origin} />
                <PdfAbout messages={messages} />
                <PdfProjects messages={messages} />
                <PdfExperience messages={messages} locale={locale} />
                <PdfEducation messages={messages} />
                <PdfCourses messages={messages} origin={origin} />
                <PdfFooter origin={origin} />

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                    fixed
                />
            </Page>
        </Document>
    );
}
