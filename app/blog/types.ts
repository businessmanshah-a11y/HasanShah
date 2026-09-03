// app/blog/types.ts
import type { Locale } from "../i18n/config";

export interface TableOfContentItem {
  id: string;
  title: string;
}

export interface ArticleAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface ArticleCallout {
  type: "tip" | "warning" | "info" | "quote";
  title?: string;
  text: string;
}

export interface ArticleTable {
  headers: string[];
  rows: string[][];
}

export interface ArticleCodeSnippet {
  title?: string;
  language?: string;
  code: string;
}

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticleCommandItem {
  num: number;
  command: string;
  category: string;
  description: string;
  example?: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  callout?: ArticleCallout;
  table?: ArticleTable;
  codeSnippets?: ArticleCodeSnippet[];
  image?: ArticleImage;
  commands?: ArticleCommandItem[];
}

export interface LocalizedArticleContent {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishedDate: string;
  tags: string[];
  author: ArticleAuthor;
  toc: TableOfContentItem[];
  sections: ArticleSection[];
  takeaways?: string[];
}

export interface RawArticle {
  slug: string;
  dateIso: string;
  coverImage: string;
  featured: boolean;
  relatedSlugs?: string[];
  locales: Record<Locale, LocalizedArticleContent>;
}

export interface Article extends LocalizedArticleContent {
  slug: string;
  dateIso: string;
  coverImage: string;
  featured: boolean;
  relatedSlugs?: string[];
}
