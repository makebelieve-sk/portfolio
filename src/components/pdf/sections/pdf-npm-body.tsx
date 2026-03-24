import { Link, Text } from "@react-pdf/renderer";

import type { Messages } from "@/types/locale/messages";
import { styles } from "@/utils/pdf/styles";
import { NPM_REGISTRY_URL } from "@/utils/pdf/pdf-projects";

export default function PdfNpmBody({ m }: { m: Messages["aboutMe"] }) {
    return (
        <Text style={styles.bodyText}>
            {m.petNpmReposBodyBefore}
            <Link src={NPM_REGISTRY_URL} style={styles.link}>
                {m.petNpmReposRegistryLinkLabel}
            </Link>
            {m.petNpmReposBodyAfter}
        </Text>
    );
}
