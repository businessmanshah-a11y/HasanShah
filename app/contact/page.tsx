import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "تماس با حسن شاهمرادی | مشاوره رایگان طراحی سایت و آموزش وایب‌کدینگ",
  description:
    "ارتباط مستقیم و ثبت درخواست مشاوره برای طراحی وب‌سایت‌های مدرن، سیستم‌های اختصاصی و یادگیری وایب‌کدینگ با هوش مصنوعی همراه با حسن شاهمرادی.",
  keywords: [
    "تماس با حسن شاهمرادی",
    "مشاوره طراحی سایت",
    "سفارش سایت اختصاصی",
    "مشاوره وایب کدینگ",
    "ثبت نام وایب کدینگ",
    "طراح سایت تهران",
  ],
  alternates: {
    canonical: "https://hasanshah.ir/contact/",
    languages: {
      "fa": "https://hasanshah.ir/contact/",
      "en": "https://hasanshah.ir/contact/",
      "ar": "https://hasanshah.ir/contact/",
      "x-default": "https://hasanshah.ir/contact/",
    },
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "تماس و ثبت درخواست مشاوره | حسن شاهمرادی",
    description:
      "ارتباط مستقیم برای طراحی سایت اختصاصی، لندینگ پیج و آموزش عملی وایب‌کدینگ با ابزارهای AI.",
    url: "https://hasanshah.ir/contact/",
    images: [
      {
        url: "/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "تماس با حسن شاهمرادی — مشاوره طراحی سایت و وایب‌کدینگ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تماس و مشاوره | حسن شاهمرادی",
    description: "فرم ثبت درخواست و مشاوره طراحی سایت و آموزش وایب‌کدینگ با AI.",
    images: ["/images/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-gold">در حال بارگذاری فرم تماس...</div>}>
      <ContactContent />
    </Suspense>
  );
}
