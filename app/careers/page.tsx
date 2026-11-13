import type { Metadata } from "next";
import { Suspense } from "react";
import CareersContent from "./CareersContent";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.ir";

export const metadata: Metadata = {
  title: "همکاری و استخدام | کارشناس فروش، رشد برند و شکارچی لید — استودیو حسن شاهمرادی",
  description:
    "فرصت همکاری اختصاصی با حسن شاهمرادی برای نقش کارشناس فروش، رشد برند و شکارچی لید (Lead Hunter). حقوق پایه + پورسانت نقدی، درآمد مستمر ماهانه و درآمد دلاری در یک محیط تکنولوژی خودران.",
  keywords: [
    "استخدام حسن شاهمرادی",
    "کارشناس فروش طراحی سایت",
    "استخدام بازاریاب دیجیتال",
    "شکارچی لید",
    "Lead Hunter",
    "همکاری در توسعه بازار",
    "استخدام تهران طراحی وب",
    "درآمد دلاری فریلنسری",
  ],
  alternates: {
    canonical: `${BASE}/careers/`,
    languages: {
      fa: `${BASE}/careers/`,
      en: `${BASE}/careers/`,
      ar: `${BASE}/careers/`,
      "x-default": `${BASE}/careers/`,
    },
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی | Hasan Shahmoradi",
    title: "فرصت همکاری اختصاصی | کارشناس فروش و رشد برند (Lead Hunter)",
    description:
      "فرصت پیوستن به استودیو حسن شاهمرادی به عنوان دست راست اجرایی رشد، جذب لید و مدیریت مشتریان با مدل مالی شفاف و پورسانت‌های پروژه‌ای و دلاری.",
    url: `${BASE}/careers/`,
    images: [
      {
        url: `${BASE}/images/logo.webp`,
        width: 1200,
        height: 630,
        alt: "همکاری و استخدام — استودیو حسن شاهمرادی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "فرصت همکاری با حسن شاهمرادی | Lead Hunter & Growth Specialist",
    description: "استخدام کارشناس فروش، شکار لید و توسعه بازار با مدل مالی جذاب و محیط پویا.",
    images: [`${BASE}/images/logo.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center text-gold font-bold">
          در حال بارگذاری فرصت‌های شغلی...
        </div>
      }
    >
      <CareersContent />
    </Suspense>
  );
}

