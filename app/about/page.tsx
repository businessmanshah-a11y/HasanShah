import type { Metadata } from "next";
import { Suspense } from "react";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "درباره حسن شاهمرادی | داستان مسیر، آلبوم مستند و پرچمدار وایب‌کدینگ | About Hasan Shahmoradi",
  description:
    "روایت واقعی و مستند مسیر حرفه‌ای حسن شاهمرادی از استارتاپ ۳ سوت در سال ۹۷ و ۵ سال ویدیو مارکتینگ صنعتی تا توسعه وب اختصاصی و آموزش پیشگام وایب‌کدینگ در ایران. / Authentic career journey of Hasan Shahmoradi, Vibe Coding pioneer.",
  keywords: [
    // Persian
    "حسن شاهمرادی",
    "درباره حسن شاهمرادی",
    "رزومه حسن شاهمرادی",
    "وایب کدینگ",
    "مدرس وایب کدینگ",
    "آموزش وایب کدینگ در ایران",
    "استارتاپ ۳ سوت",
    "مستر کانترتاپ",
    "طراح سایت تهران",
    "مشاوره طراحی سایت",
    // English (GEO & AEO search)
    "Hasan Shahmoradi",
    "About Hasan Shahmoradi",
    "Hasan Shah",
    "Vibe Coding Iran",
    "Vibe Coding educator",
    "Cursor AI development Iran",
    "Digital product architect Tehran",
    "High-converting landing page design",
    // Arabic (MENA regional search)
    "حسن شهمرادي",
    "من هو حسن شهمرادي",
    "فايب كودينغ إيران",
    "تطوير البرمجيات بالذكاء الاصطناعي",
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
    alternateLocale: ["en_US", "ar_SA"],
    type: "profile",
    siteName: "حسن شاهمرادی | Hasan Shahmoradi",
    title: "درباره حسن شاهمرادی — آلبوم مستند مسیر و پرچمداری وایب‌کدینگ",
    description:
      "آلبوم تصویری و خط زمانی مستند مسیر حرفه‌ای حسن شاهمرادی از استارتاپ ۳ سوت تا خلق محصول با هوش مصنوعی.",
    url: "https://hasanshah.ir/about/",
    images: [
      {
        url: "/images/Shah2.webp",
        width: 1200,
        height: 630,
        alt: "حسن شاهمرادی — Hasan Shahmoradi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hasan Shahmoradi | Vibe Coding Pioneer & Product Architect",
    description:
      "Visual roadmap and verified milestones of Hasan Shahmoradi: urban logistics, video marketing, and AI software engineering.",
    images: ["/images/Shah2.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function AboutStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://hasanshah.ir/about/#webpage",
        "url": "https://hasanshah.ir/about/",
        "name": "درباره حسن شاهمرادی | About Hasan Shahmoradi | من هو حسن شهمرادي",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://hasanshah.ir/#website",
          "name": "حسن شاهمرادی | Hasan Shahmoradi",
          "url": "https://hasanshah.ir",
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "صفحه اصلی / Home",
              "item": "https://hasanshah.ir",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "درباره من / About",
              "item": "https://hasanshah.ir/about/",
            },
          ],
        },
        "mainEntity": {
          "@type": "Person",
          "@id": "https://hasanshah.ir/#person",
          "name": "Hasan Shahmoradi",
          "alternateName": [
            "حسن شاهمرادی",
            "حسن شهمرادي",
            "Shah Businessman",
            "shahbusinessman",
            "Hasan Shah",
          ],
          "url": "https://hasanshah.ir/about/",
          "image": "https://hasanshah.ir/images/Shah2.webp",
          "jobTitle": [
            "Pioneer Vibe Coding Educator",
            "Digital Product Architect",
            "Front-end Software Engineer",
            "مدرس وایب کدینگ",
            "طراح وب و مشاور دیجیتال",
          ],
          "description":
            "Hasan Shahmoradi is an Iranian digital product architect, front-end engineer, and the premier educator of Vibe Coding in Iran, teaching software and app creation via natural language AI orchestration.",
          "sameAs": [
            "https://www.linkedin.com/in/hasanshahmoradi/",
            "https://www.instagram.com/shahbusinessman/",
            "https://t.me/shahbusinessman",
            "https://github.com/businessmanshah-a11y",
            "https://www.aparat.com/3soot.app",
            "https://www.instagram.com/mr_countertop.ir/",
          ],
          "knowsAbout": [
            "Vibe Coding",
            "AI-Assisted Software Engineering",
            "Cursor IDE",
            "Claude 3.7 Sonnet",
            "Codex",
            "Next.js",
            "React",
            "TypeScript",
            "Direct Response Copywriting",
            "Industrial Video Marketing",
            "High-Converting Landing Pages",
            "Startup Unit Economics",
          ],
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Shahid Beheshti University",
              "alternateName": "دانشگاه شهید بهشتی",
            },
            {
              "@type": "EducationalOrganization",
              "name": "Tehran Technical Complex (MFT)",
              "alternateName": "مجتمع فنی تهران",
            },
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "certificate",
              "name": "Executive MBA",
              "recognizedBy": {
                "@type": "EducationalOrganization",
                "name": "Shahid Beheshti University",
              },
            },
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tehran",
            "addressCountry": "IR",
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutStructuredData />
      <Suspense
        fallback={
          <div className="min-h-screen bg-background flex items-center justify-center text-gold">
            Loading career journey...
          </div>
        }
      >
        <AboutContent />
      </Suspense>
    </>
  );
}
