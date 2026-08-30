export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { getAllArticles } from "./blog/blog-data";

const LAST_MODIFIED: Record<string, Date> = {
  home: new Date("2026-06-11"),
  vibeCoding: new Date("2026-06-11"),
  blogArchive: new Date("2026-02-27"),
};

function alternates(url: string) {
  return { languages: { fa: url, en: url, ar: url, "x-default": url } };
}

const blogPosts = (base: string): MetadataRoute.Sitemap => {
  return getAllArticles().map((article) => ({
    url: `${base}/blog/${article.slug}/`,
    lastModified: new Date(article.dateIso),
    changeFrequency: "weekly" as const,
    priority: 0.85,
    alternates: alternates(`${base}/blog/${article.slug}/`),
  }));
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.ir";
  const vibeCodingUrl = `${base}/vibe-coding/`;
  const blogUrl = `${base}/blog/`;

  return [
    {
      url: base,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: alternates(base),
    },
    {
      url: vibeCodingUrl,
      lastModified: LAST_MODIFIED.vibeCoding,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: alternates(vibeCodingUrl),
    },
    {
      url: blogUrl,
      lastModified: LAST_MODIFIED.blogArchive,
      changeFrequency: "daily",
      priority: 0.9,
      alternates: alternates(blogUrl),
    },
    ...blogPosts(base),
  ];
}
