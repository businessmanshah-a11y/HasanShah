import type { Metadata } from "next";
import BlogArchiveContent from "./BlogArchiveContent";
import { BlogListJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "آموزش‌ها و مقالات تخصصی | حسن شاهمرادی",
  description:
    "مرجع تخصصی آموزش‌های هوش مصنوعی، وایب‌کدینگ با Cursor و Claude، اسلش‌کامندهای ChatGPT و طراحی لندینگ‌پیج‌های پرفروش.",
  alternates: {
    canonical: "https://hasanshah.ir/blog/",
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "آموزش‌ها و مقالات تخصصی | حسن شاهمرادی",
    description:
      "مرجع تخصصی آموزش‌های هوش مصنوعی، وایب‌کدینگ با Cursor و Claude، اسلش‌کامندهای ChatGPT و طراحی لندینگ‌پیج‌های پرفروش.",
    url: "https://hasanshah.ir/blog/",
    images: [
      {
        url: "https://hasanshah.ir/images/blog/chatgpt-handbook-cover.jpg",
        width: 1200,
        height: 630,
        alt: "آموزش‌ها و مقالات تخصصی حسن شاهمرادی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آموزش‌ها و مقالات تخصصی | حسن شاهمرادی",
    description:
      "مرجع تخصصی آموزش‌های هوش مصنوعی، وایب‌کدینگ و طراحی لندینگ‌پیج‌های پرفروش.",
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogListJsonLd />
      <BlogArchiveContent />
    </>
  );
}
