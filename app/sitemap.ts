export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.ir";
  const now = new Date();

  // All three locales share the same URL (locale is determined client-side via cookie/browser).
  // hreflang alternates signal to search engines which languages are supported.
  const langAlternates = {
    fa: base,
    en: base,
    ar: base,
  };

  const vibeCodingUrl = `${base}/vibe-coding`;
  const vibeCodingAlternates = {
    fa: vibeCodingUrl,
    en: vibeCodingUrl,
    ar: vibeCodingUrl,
  };

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: langAlternates },
    },
    {
      url: vibeCodingUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: vibeCodingAlternates },
    },
  ];
}
