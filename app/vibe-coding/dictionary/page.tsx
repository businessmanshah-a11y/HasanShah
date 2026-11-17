export const dynamic = "force-static";

import type { Metadata } from "next";
import VibeDictionaryContent from "./VibeDictionaryContent";
import { allDictionaryTerms } from "./data";

export const metadata: Metadata = {
  title: "دانشنامه و دیکشنری تخصصی وایب‌کدینگ وردپرس | حسن شاهمرادی",
  description:
    "مرجع جامع و تعاملی اصطلاحات فول‌استک، پرامپت‌های طلایی هوش مصنوعی و کدهای کاربردی برای توسعه سریع، امن و بدون باگ سایت‌های وردپرسی با متدولوژی وایب‌کدینگ.",
  keywords: [
    "دانشنامه وایب کدینگ",
    "دیکشنری وایب کدینگ",
    "اصطلاحات وایب کدینگ",
    "وایب کدینگ وردپرس",
    "آموزش وایب کدینگ",
    "vibe coding wordpress",
    "پرامپت های وردپرس برای هوش مصنوعی",
    "Cursor وردپرس",
    "Claude وردپرس",
    "هوک های وردپرس",
    "توسعه قالب اختصاصی وردپرس",
    "WP-CLI آموزش",
  ],
  authors: [{ name: "حسن شاهمرادی", url: "https://hasanshah.ir" }],
  alternates: {
    canonical: "https://hasanshah.ir/vibe-coding/dictionary/",
    languages: {
      fa: "https://hasanshah.ir/vibe-coding/dictionary/",
      "x-default": "https://hasanshah.ir/vibe-coding/dictionary/",
    },
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "دانشنامه و دیکشنری تخصصی وایب‌کدینگ وردپرس",
    description:
      "الفبای مهندسی فول‌استک برای ساخت قالب‌ها و بلاک‌های اختصاصی وردپرس با ادیتورهای هوش مصنوعی؛ تعاریف عمیق + پرامپت طلایی برای هر اصطلاح.",
    url: "https://hasanshah.ir/vibe-coding/dictionary/",
    images: [
      {
        url: "/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "دانشنامه تخصصی وایب‌کدینگ وردپرس با حسن شاهمرادی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دانشنامه تخصصی وایب‌کدینگ وردپرس | حسن شاهمرادی",
    description:
      "مرجع اصطلاحات، پرامپت‌های طلایی و کدهای استاندارد وردپرس برای وایب‌کدرها.",
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

export default function VibeDictionaryPage() {
  const jsonLdDefinedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://hasanshah.ir/vibe-coding/dictionary/#termset",
    name: "دانشنامه و دیکشنری تخصصی وایب‌کدینگ وردپرس",
    description:
      "فهرست جامع اصطلاحات، معماری فول‌استک و پرامپت‌های طلایی توسعه وب با متدولوژی وایب‌کدینگ در وردپرس",
    inLanguage: "fa-IR",
    url: "https://hasanshah.ir/vibe-coding/dictionary/",
    hasDefinedTerm: allDictionaryTerms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `https://hasanshah.ir/vibe-coding/dictionary/#${term.id}`,
      name: term.termEn,
      alternateName: term.termFa,
      description: term.shortDefinition,
      inDefinedTermSet: "https://hasanshah.ir/vibe-coding/dictionary/#termset",
      termCode: term.id,
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "صفحه اصلی",
        item: "https://hasanshah.ir/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "آموزش وایب‌کدینگ",
        item: "https://hasanshah.ir/vibe-coding/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "دانشنامه تخصصی وایب‌کدینگ وردپرس",
        item: "https://hasanshah.ir/vibe-coding/dictionary/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDefinedTermSet) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <VibeDictionaryContent />
    </>
  );
}
