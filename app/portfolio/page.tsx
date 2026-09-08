import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";
import { PortfolioPageJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "نمونه‌کارها و پروژه‌های اجرا شده | حسن شاهمرادی — Portfolio & Live Projects",
  description:
    "مجموعه پروژه‌های آنلاین و تجاری حسن شاهمرادی؛ فروشگاه‌های اینترنتی لوکس، منوهای دیجیتال تعاملی، سامانه‌های گیمینگ و نرم‌افزارهای اختصاصی با طراحی مدرن و تجربه کاربری بهینه‌شده.",
  keywords: [
    // Persian
    "نمونه کار طراحی سایت",
    "نمونه کارهای حسن شاهمرادی",
    "طراحی سایت فروشگاهی",
    "طراحی منو دیجیتال کافه",
    "طراحی سایت گیمینگ",
    "سایت فرش دهقانی",
    "سایت کافه ایلا",
    "سایت اف زد پیرسینگ",
    "سایت گیم لند",
    "سایت نداهیر",
    "سایت زد ان زد پرفیوم",
    "طراح سایت اختصاصی تهران",
    "پورتفولیو توسعه دهنده وب",
    // English
    "Hasan Shahmoradi Portfolio",
    "Web Design Portfolio Iran",
    "Luxury E-commerce Case Studies",
    "Next.js and WordPress Specialist",
    "High Conversion Web Design",
    // Arabic
    "أعمال حسن شهمرادي",
    "معرض أعمال تصميم المواقع",
    "تصميم متاجر إلكترونية احترافية",
  ],
  alternates: {
    canonical: "https://hasanshah.ir/portfolio/",
    languages: {
      "fa": "https://hasanshah.ir/portfolio/",
      "en": "https://hasanshah.ir/portfolio/",
      "ar": "https://hasanshah.ir/portfolio/",
      "x-default": "https://hasanshah.ir/portfolio/",
    },
  },
  openGraph: {
    locale: "fa_IR",
    alternateLocale: ["en_US", "ar_SA"],
    type: "website",
    siteName: "حسن شاهمرادی | Hasan Shahmoradi",
    title: "نمونه‌کارها و پروژه‌های اجرا شده — حسن شاهمرادی",
    description:
      "آرشیو نمونه‌کارهای زنده و تجاری حسن شاهمرادی؛ پروژه‌های موفق آنلاین با ترافیک واقعی، درگاه پرداخت و بالاترین کیفیت بصری.",
    url: "https://hasanshah.ir/portfolio/",
    images: [
      {
        url: "https://hasanshah.ir/images/portfolio/portfolio-dehghani.webp",
        width: 1440,
        height: 900,
        alt: "نمونه‌کارهای حسن شاهمرادی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "نمونه‌کارها و پروژه‌های اجرا شده — حسن شاهمرادی",
    description:
      "آرشیو نمونه‌کارهای زنده و تجاری حسن شاهمرادی با استانداردهای روز دیزاین بین‌المللی.",
    images: ["https://hasanshah.ir/images/portfolio/portfolio-dehghani.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioPageJsonLd />
      <PortfolioPageClient />
    </>
  );
}
