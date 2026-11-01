import type { Metadata } from "next";
import PricingContent from "./PricingContent";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.ir";

export const metadata: Metadata = {
  title: "تعرفه طراحی سایت اختصاصی و مهندسی وب ۱۴۰۴ | حسن شاهمرادی — Pricing & Investment",
  description:
    "لیست شفاف سرمایه‌گذاری و تعرفه طراحی سایت اختصاصی، فروشگاهی، شرکتی، خدماتی و وب‌اپلیکیشن با معماری کامپوننت‌محور، بدون قالب آماده، سرعت لود زیر ۱ ثانیه و پشتیبانی فنی مستقیم.",
  keywords: [
    "تعرفه طراحی سایت",
    "قیمت طراحی سایت اختصاصی",
    "هزینه طراحی سایت فروشگاهی",
    "تعرفه طراحی سایت شرکتی",
    "قیمت طراحی سایت بدون وردپرس",
    "طراحی سایت با کدنویسی اختصاصی",
    "هزینه طراحی سایت ۱۴۰۴",
    "تعرفه سایت پورتفولیو",
    "هزینه وب اپلیکیشن و استارتاپ",
    "طراحی سایت با قابلیت ۳D و Three.js",
    "قیمت طراحی سایت تهران",
    "حسن شاهمرادی طراح سایت",
    "Bespoke Web Design Pricing",
    "Custom Web Engineering Cost Iran",
    "Hasan Shahmoradi Pricing",
    "أسعار تصميم المواقع المخصصة",
    "تكلفة برمجة المتاجر الإلكترونية",
  ],
  alternates: {
    canonical: `${BASE}/pricing/`,
    languages: {
      fa: `${BASE}/pricing/`,
      en: `${BASE}/pricing/`,
      ar: `${BASE}/pricing/`,
      "x-default": `${BASE}/pricing/`,
    },
  },
  openGraph: {
    locale: "fa_IR",
    alternateLocale: ["en_US", "ar_SA"],
    type: "website",
    siteName: "حسن شاهمرادی | Hasan Shahmoradi",
    title: "تعرفه و سرمایه‌گذاری طراحی سایت اختصاصی — حسن شاهمرادی",
    description:
      "لیست شفاف تعرفه‌های طراحی سایت اختصاصی، فروشگاهی پرسرعت، شرکتی و وب‌اپلیکیشن؛ بدون قالب آماده و المنتور، با سرعت بارگذاری زیر ۱ ثانیه و گارانتی فنی.",
    url: `${BASE}/pricing/`,
    images: [
      {
        url: `${BASE}/images/pricing/hero-art.webp`,
        width: 1376,
        height: 768,
        alt: "تعرفه و سرمایه‌گذاری طراحی سایت اختصاصی — استودیو حسن شاهمرادی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تعرفه طراحی سایت اختصاصی و مهندسی وب — حسن شاهمرادی",
    description:
      "تعرفه‌های شفاف مهندسی وب اختصاصی، بدون قالب آماده و پلاگین‌های سنگین؛ سرعت لود فوق‌العاده و دیزاین ۱۰۰٪ اختصاصی و یکتا.",
    images: [`${BASE}/images/pricing/hero-art.webp`],
  },
};

export default function PricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE}/pricing/#webpage`,
    name: "تعرفه طراحی سایت اختصاصی و مهندسی وب | حسن شاهمرادی",
    url: `${BASE}/pricing/`,
    description:
      "لیست شفاف تعرفه‌ها و هزینه‌های طراحی سایت اختصاصی با کدنویسی تمیز، پرفورمنس حداکثری و دیزاین اختصاصی توسط حسن شاهمرادی.",
    inLanguage: ["fa", "en", "ar"],
    isPartOf: {
      "@type": "WebSite",
      name: "حسن شاهمرادی",
      url: BASE,
    },
    about: {
      "@type": "Person",
      name: "حسن شاهمرادی",
      url: BASE,
      jobTitle: "مهندس وب و استراتژیست ارشد رشد دیجیتال",
    },
    mainEntity: {
      "@type": "OfferCatalog",
      name: "خدمات و تعرفه‌های طراحی سایت اختصاصی",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "طراحی وب‌سایت پورتفولیو و برند شخصی",
            description: "شوکیس رزومه تعاملی، برندینگ شخصی لوکس و کدنویسی اختصاصی کامپوننت‌محور",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "IRR",
            minPrice: "350000000",
            maxPrice: "1100000000",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "طراحی وب‌سایت شرکتی و سازمانی",
            description: "طراحی سایت شرکتی، هلدینگ، صادراتی چندزبانه و برندینگ صنعتی با سئوی تکنیکال",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "IRR",
            minPrice: "450000000",
            maxPrice: "1500000000",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "طراحی وب‌سایت خدماتی و رزرواسیون هوشمند",
            description: "پلتفرم نوبت‌دهی آنلاین، جذب لید سریع برای تبلیغات گوگل و پورتال مشتریان",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "IRR",
            minPrice: "500000000",
            maxPrice: "1700000000",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "طراحی فروشگاه اینترنتی سفارشی و پرسرعت",
            description: "مهندسی فروشگاه اینترنتی با لود زیر ۱ ثانیه، تسویه یک‌مرحله‌ای و اتصال به حسابداری",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "IRR",
            minPrice: "800000000",
            maxPrice: "3000000000",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "توسعه وب‌اپلیکیشن، پلتفرم و سامانه‌های استارتاپی",
            description: "توسعه سفارشی فول‌استک با فریم‌ورک‌های مدرن، وب‌سوکت و منطق پردازشی اختصاصی (شروع از ۱۰۰ میلیون تومان)",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "IRR",
            minPrice: "1000000000",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PricingContent />
    </>
  );
}
