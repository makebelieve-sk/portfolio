import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/utils/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = getSiteUrl();
    return [
        {
            url: base,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
