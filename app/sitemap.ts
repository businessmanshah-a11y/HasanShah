export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { getAllArticles } from "./blog/blog-data";
import { allSeries } from "./vibe-coding/series/series-data";

const LAST_MODIFIED: Record<string, Date> = {
  home: new Date("2026-06-11"),
  vibeCoding: new Date("2026-06-11"),
  blogArchive: new Date("2026-09-06"),
  workshopArchive: new Date("2026-06-18"),
  workshop28Khordad: new Date("2026-06-18"),
  seriesArchive: new Date("2026-06-11"),
  clients: new Date("2026-06-11"),
};

function alternates(url: string) {
  return { languages: { fa: url, en: url, ar: url, "x-default": url } };
}

const blogPosts = (base: string): MetadataRoute.Sitemap => {
  return getAllArticles().map((article) => ({
    url: `${base}/blog/${article.slug}/`,
    lastModified: new Date(article.dateIso),
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: alternates(`${base}/blog/${article.slug}/`),
  }));
};

const seriesPosts = (base: string): MetadataRoute.Sitemap => {
  return allSeries.map((s) => ({
    url: `${base}/vibe-coding/series/${s.slug}/`,
    lastModified: LAST_MODIFIED.seriesArchive,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    alternates: alternates(`${base}/vibe-coding/series/${s.slug}/`),
  }));
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.ir";

  return [
    // ── Core Hubs ──
    {
      url: base,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: alternates(base),
    },
    {
      url: `${base}/vibe-coding/`,
      lastModified: LAST_MODIFIED.vibeCoding,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: alternates(`${base}/vibe-coding/`),
    },
    {
      url: `${base}/blog/`,
      lastModified: LAST_MODIFIED.blogArchive,
      changeFrequency: "daily",
      priority: 0.9,
      alternates: alternates(`${base}/blog/`),
    },

    // ── Blog Articles (Pillar & Cluster) ──
    ...blogPosts(base),

    // ── Client Showcases & Portfolio ──
    {
      url: `${base}/clients/hamed-tahouneh/`,
      lastModified: LAST_MODIFIED.clients,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alternates(`${base}/clients/hamed-tahouneh/`),
    },
    {
      url: `${base}/clients/milad-sojoudi/`,
      lastModified: LAST_MODIFIED.clients,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alternates(`${base}/clients/milad-sojoudi/`),
    },
    {
      url: `${base}/clients/pegah/`,
      lastModified: LAST_MODIFIED.clients,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alternates(`${base}/clients/pegah/`),
    },
    {
      url: `${base}/clients/visakade/`,
      lastModified: LAST_MODIFIED.clients,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alternates(`${base}/clients/visakade/`),
    },

    // ── Workshops & Events ──
    {
      url: `${base}/workshop/`,
      lastModified: LAST_MODIFIED.workshopArchive,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: alternates(`${base}/workshop/`),
    },
    {
      url: `${base}/workshop/vibe-coding-28khordad/`,
      lastModified: LAST_MODIFIED.workshop28Khordad,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: alternates(`${base}/workshop/vibe-coding-28khordad/`),
    },
    {
      url: `${base}/workshop/vibe-coding-28khordad/slides/`,
      lastModified: LAST_MODIFIED.workshop28Khordad,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: alternates(`${base}/workshop/vibe-coding-28khordad/slides/`),
    },

    // ── Educational Series ──
    {
      url: `${base}/vibe-coding/series/`,
      lastModified: LAST_MODIFIED.seriesArchive,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: alternates(`${base}/vibe-coding/series/`),
    },
    ...seriesPosts(base),
  ];
}
