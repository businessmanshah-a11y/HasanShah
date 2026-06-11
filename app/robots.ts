export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.ir";
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Traditional search engines
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Anthropic
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Meta AI
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
      // ByteDance / TikTok
      { userAgent: "Bytespider", allow: "/" },
      // Amazon Alexa
      { userAgent: "Amazonbot", allow: "/" },
      // Diffbot (enterprise AI)
      { userAgent: "DiffBot", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
