import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hasanshah.ir"),
  title: "شوگان گاراژ | پروپوزال اختصاصی پلتفرم و شورووم مهندسی",
  description:
    "پروپوزال جامع طراحی و توسعه پلتفرم دیجیتال، کاتالوگ مهندسی قطعات و شورووم تعاملی شوگان گاراژ (شهرک صنعتی گلگون) — آماده‌شده توسط حسن شاهمرادی",
  alternates: {
    canonical: "https://hasanshah.ir/clients/shogun-garage/",
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "شوگان گاراژ | Shogun 4x4",
    title: "شوگان گاراژ | پروپوزال اختصاصی پلتفرم و شورووم مهندسی",
    description:
      "پروپوزال جامع طراحی و توسعه پلتفرم دیجیتال، کاتالوگ مهندسی قطعات و شورووم تعاملی شوگان گاراژ (شهرک صنعتی گلگون) — توسعه با هوش مصنوعی و کدنویسی اختصاصی.",
    url: "https://hasanshah.ir/clients/shogun-garage/",
    images: [
      {
        url: "https://hasanshah.ir/images/clients/shogun/hero-jimny.jpg",
        width: 1200,
        height: 630,
        alt: "شوگان گاراژ — مرجع مهندسی خودروهای بیراهه‌نورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شوگان گاراژ | پروپوزال اختصاصی پلتفرم و شورووم مهندسی",
    description:
      "پروپوزال جامع طراحی و توسعه پلتفرم دیجیتال، کاتالوگ مهندسی قطعات و هاب خدمات شوگان گاراژ — شهرک صنعتی گلگون.",
    images: ["https://hasanshah.ir/images/clients/shogun/hero-jimny.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShogunLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "شوگان گاراژ | پروپوزال اختصاصی پلتفرم و شورووم مهندسی",
    description:
      "پروپوزال جامع طراحی و توسعه پلتفرم دیجیتال و سیستم سفارش‌گذاری شوگان گاراژ — شهرک صنعتی گلگون.",
    url: "https://hasanshah.ir/clients/shogun-garage/",
    image: "https://hasanshah.ir/images/clients/shogun/hero-jimny.jpg",
    author: {
      "@type": "Person",
      name: "حسن شاهمرادی",
      url: "https://hasanshah.ir",
    },
  };

  return (
    <div className="dark bg-[#0a0a0b] text-[#f4f4f5] antialiased selection:bg-[#dc2626] selection:text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Shogun Garage Custom Red Scrollbar - override globals.css gold thumb */
            html, body, #__next, main, div, * {
              scrollbar-color: #dc2626 #0a0a0b !important;
            }
            ::-webkit-scrollbar,
            html::-webkit-scrollbar,
            body::-webkit-scrollbar,
            main::-webkit-scrollbar,
            *::-webkit-scrollbar {
              width: 6px !important;
              height: 6px !important;
            }
            ::-webkit-scrollbar-track,
            html::-webkit-scrollbar-track,
            body::-webkit-scrollbar-track,
            main::-webkit-scrollbar-track,
            *::-webkit-scrollbar-track {
              background: #0a0a0b !important;
            }
            ::-webkit-scrollbar-thumb,
            html::-webkit-scrollbar-thumb,
            body::-webkit-scrollbar-thumb,
            main::-webkit-scrollbar-thumb,
            *::-webkit-scrollbar-thumb {
              background: #dc2626 !important;
              border-radius: 999px !important;
            }
            ::-webkit-scrollbar-thumb:hover,
            html::-webkit-scrollbar-thumb:hover,
            body::-webkit-scrollbar-thumb:hover,
            main::-webkit-scrollbar-thumb:hover,
            *::-webkit-scrollbar-thumb:hover {
              background: #ef4444 !important;
            }
          `,
        }}
      />
      {children}
    </div>
  );
}
