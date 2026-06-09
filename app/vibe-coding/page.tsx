import type { Metadata } from "next";
import VibeCodingPageContent from "./VibeCodingPageContent";
import { VibeCodingBreadcrumbJsonLd, VibeCodingCourseJsonLd, VibeCodingEventJsonLd, VibeCodingFaqJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "آموزش وایب‌کدینگ از صفر تا ساخت محصول با هوش مصنوعی",
  description:
    "یاد بگیر با Cursor، Claude و Codex ایده‌ات را به محصول دیجیتال واقعی تبدیل کنی. پیش‌تولید ایده، پرامپت‌نویسی و دورهمی حضوری رایگان وایب‌کدینگ در تهران.",
  keywords: [
    "آموزش وایب‌کدینگ",
    "وایب کدینگ",
    "vibe coding",
    "ساخت محصول با هوش مصنوعی",
    "Cursor آموزش",
    "Claude آموزش",
    "Codex آموزش",
    "دورهمی وایب‌کدینگ تهران",
    "پیش‌تولید محصول دیجیتال",
    "پرامپت نویسی",
    "آموزش AI برنامه‌نویسی",
  ],
  authors: [{ name: "حسن شاهمرادی", url: "https://hasanshah.ir" }],
  alternates: {
    canonical: "https://hasanshah.ir/vibe-coding",
    languages: {
      "fa": "https://hasanshah.ir/vibe-coding",
      "x-default": "https://hasanshah.ir/vibe-coding",
    },
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "آموزش وایب‌کدینگ از صفر تا ساخت محصول",
    description:
      "با Cursor، Claude و Codex ایده‌ات را به محصول دیجیتال تبدیل کن. دورهمی حضوری رایگان + سرفصل کامل.",
    url: "https://hasanshah.ir/vibe-coding",
    images: [
      {
        url: "/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "آموزش وایب‌کدینگ با حسن شاهمرادی — دورهمی حضوری رایگان تهران",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آموزش وایب‌کدینگ از صفر | حسن شاهمرادی",
    description:
      "با Cursor، Claude و Codex ایده‌ات را به محصول دیجیتال تبدیل کن. دورهمی حضوری رایگان.",
    images: ["/images/profile.webp"],
    creator: "@hasanshah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function VibeCodingPage() {
  return (
    <>
      <VibeCodingBreadcrumbJsonLd />
      <VibeCodingCourseJsonLd />
      <VibeCodingEventJsonLd />
      <VibeCodingFaqJsonLd />
      <VibeCodingPageContent />
    </>
  );
}
