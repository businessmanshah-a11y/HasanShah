export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.ir";
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AI search crawlers — allow indexing for AEO/GEO
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
