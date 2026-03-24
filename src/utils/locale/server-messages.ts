import { cookies, headers } from "next/headers";

import type { Messages } from "@/types/locale/messages";
import { LOCALE_COOKIE_NAME } from "@/utils/locale/constants";
import { messages } from "@/utils/locale/messages";
import { resolveServerLocale } from "@/utils/locale/resolve-locale";

export async function getServerMessages(): Promise<Messages> {
    const [headerList, cookieStore] = await Promise.all([headers(), cookies()]);
    const locale = resolveServerLocale(
        cookieStore.get(LOCALE_COOKIE_NAME)?.value,
        headerList.get("accept-language"),
    );
    return messages[locale];
}
