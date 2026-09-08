import type { Metadata } from "next";
import { Suspense } from "react";
import AboutContent from "./AboutContent";
import { PersonJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "درباره حسن شاهمرادی | داستان واقعی، آلبوم مسیر و تجارب حرفه‌ای",
  description:
    "روایت واقعی و تجارب حسن شاهمرادی از تأسیس استارتاپ ۳ سوت در سال ۹۷ و ۵ سال ویدیو مارکتینگ صنعتی تا توسعه فرانت‌اند و پرچمداری آموزش وایب‌کدینگ در ایران.",
  keywords: [
    "حسن شاهمرادی",
    "درباره حسن شاهمرادی",
    "رزومه حسن شاهمرادی",
    "وایب کدینگ",
    "مدرس وایب کدینگ",
    "استارتاپ ۳ سوت",
    "طراح سایت تهران",
    "آموزش هوش مصنوعی",
  ],
  alternates: {
    canonical: "https://hasanshah.ir/about/",
    languages: {
      "fa": "https://hasanshah.ir/about/",
      "en": "https://hasanshah.ir/about/",
      "ar": "https://hasanshah.ir/about/",
      "x-default": "https://hasanshah.ir/about/",
    },
  },
  openGraph: {
    locale: "fa_IR",
    type: "profile",
    siteName: "حسن شاهمرادی",
    title: "درباره حسن شاهمرادی — داستان مسیر، تجارب و وایب‌کدینگ",
    description:
      "آلبوم تصویری و خط زمانی مسیر حرفه‌ای حسن شاهمرادی از استارتاپ لجستیکی تا توسعه محصول با هوش مصنوعی.",
    url: "https://hasanshah.ir/about/",
    images: [
      {
        url: "/images/Shah2.webp",
        width: 1200,
        height: 630,
        alt: "حسن شاهمرادی — طراح وب و مدرس وایب‌کدینگ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "درباره حسن شاهمرادی | مسیر حرفه‌ای و وایب‌کدینگ",
    description:
      "خط زمانی مصور تجارب کاری حسن شاهمرادی و بازتعریف خلق محصول با هوش مصنوعی.",
    images: ["/images/Shah2.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      <PersonJsonLd />
      <Suspense
        fallback={
          <div className="min-h-screen bg-background flex items-center justify-center text-gold">
            در حال بارگذاری داستان مسیر...
          </div>
        }
      >
        <AboutContent />
      </Suspense>
    </>
  );
}
