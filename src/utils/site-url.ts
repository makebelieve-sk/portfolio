/**
 * Canonical site origin for metadata, sitemap, and robots.
 * On Vercel, `VERCEL_URL` is set automatically (https://<deployment-url>).
 * Locally `VERCEL_URL` is unset, so we fall back to localhost.
 */
export function getSiteUrl(): string {
    const vercel = process.env.VERCEL_URL?.trim();
    if (vercel) {
        return `https://${vercel.replace(/^https?:\/\//, "")}`;
    }
    return "http://localhost:3000";
}
