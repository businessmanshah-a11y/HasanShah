import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "../blog-data";
import ArticleDetailContent from "./ArticleDetailContent";
import { ArticleJsonLd } from "../../components/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "fa");
  if (!article) return {};

  const fullUrl = `https://hasanshah.ir/blog/${article.slug}/`;
  const fullCover = article.coverImage.startsWith("http")
    ? article.coverImage
    : `https://hasanshah.ir${article.coverImage}`;

  return {
    title: `${article.title} | حسن شاهمرادی`,
    description: article.summary,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      locale: "fa_IR",
      type: "article",
      siteName: "حسن شاهمرادی",
      title: article.title,
      description: article.summary,
      url: fullUrl,
      publishedTime: article.dateIso,
      authors: [article.author.name],
      tags: article.tags,
      images: [
        {
          url: fullCover,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [fullCover],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "fa");

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd article={article} />
      <ArticleDetailContent initialArticle={article} />
    </>
  );
}
