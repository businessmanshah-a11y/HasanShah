import type { Metadata } from "next";
import WorkshopsPageContent from "./WorkshopsPageContent";
import { WorkshopsListJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "ورکشاپ‌ها و رویدادهای وایب‌کدینگ با هوش مصنوعی",
  description:
    "مجموعه کارگاه‌ها و دورهمی‌های حضوری و آنلاین وایب‌کدینگ حسن شاهمرادی — آموزش تبدیل ایده به محصول واقعی با ابزارهای Cursor، Claude و Codex.",
  alternates: {
    canonical: "https://hasanshah.ir/workshop/",
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "ورکشاپ‌ها و رویدادهای وایب‌کدینگ با هوش مصنوعی | حسن شاهمرادی",
    description:
      "کارگاه‌های عملی و تعاملی وایب‌کدینگ — یادگیری ساخت سیستم‌ها و محصولات دیجیتال با ابزارهای هوش مصنوعی بدون نیاز به کدنویسی سنتی.",
    url: "https://hasanshah.ir/workshop/",
    images: [
      {
        url: "https://hasanshah.ir/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "ورکشاپ‌های وایب‌کدینگ حسن شاهمرادی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ورکشاپ‌ها و رویدادهای وایب‌کدینگ با هوش مصنوعی | حسن شاهمرادی",
    description: "کارگاه‌های عملی و تعاملی آموزش وایب‌کدینگ با هوش مصنوعی توسط حسن شاهمرادی.",
  },
};

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopsListJsonLd />
      <WorkshopsPageContent />
    </>
  );
}
