export const dynamic = "force-static";
import type { MetadataRoute } from "next";

// Update these dates when the corresponding page content changes significantly.
// Using new Date() here would stamp every build as "modified today" and confuse crawlers.
const LAST_MODIFIED: Record<string, Date> = {
  home: new Date("2026-06-11"),
  vibeCoding: new Date("2026-06-11"),
};

function alternates(url: string) {
  return { languages: { fa: url, en: url, ar: url, "x-default": url } };
}

// Future blog posts — add an entry here each time a post is published.
// Example: { url: `${base}/blog/vibe-coding-intro`, lastModified: new Date("2026-07-01"), changeFrequency: "monthly" as const, priority: 0.8, alternates: alternates(`${base}/blog/vibe-coding-intro`) }
const blogPosts = (base: string): MetadataRoute.Sitemap => {
  void base;
  return [];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.ir";
  const vibeCodingUrl = `${base}/vibe-coding`;

  return [
    {
      url: base,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "monthly",
      priority: 1,
      alternates: alternates(base),
    },
    {
      url: vibeCodingUrl,
      lastModified: LAST_MODIFIED.vibeCoding,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: alternates(vibeCodingUrl),
    },
    ...blogPosts(base),
  ];
}
