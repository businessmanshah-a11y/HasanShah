import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "حسن شاهمرادی — کمپین سایت رایگان",
  description: "دریافت سایت تک‌صفحه‌ای اختصاصی رایگان؛ طراحی و تحویل حداکثر تا ۷۲ ساعت روی دامنه آزمایشی، بدون پیش‌شرط و پیش‌پرداخت.",
  openGraph: {
    locale: "fa_IR",
    type: "website",
    title: "حسن شاهمرادی — کمپین سایت رایگان",
    description: "دریافت سایت تک‌صفحه‌ای اختصاصی رایگان؛ طراحی و تحویل حداکثر تا ۷۲ ساعت روی دامنه آزمایشی، بدون پیش‌شرط و پیش‌پرداخت.",
    images: ["/images/profile.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "حسن شاهمرادی — کمپین سایت رایگان",
    description: "دریافت سایت تک‌صفحه‌ای اختصاصی رایگان؛ طراحی و تحویل حداکثر تا ۷۲ ساعت روی دامنه آزمایشی، بدون پیش‌شرط و پیش‌پرداخت.",
    images: ["/images/profile.webp"],
  },
  icons: {
    icon: "/images/favicon.svg",
    apple: "/images/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preload" href="/fonts/PeydaWebFaNum-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PeydaWebFaNum-ExtraBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PeydaWebFaNum-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "oklch(0.19 0.015 230)",
              color: "oklch(0.95 0.006 210)",
              border: "1px solid oklch(0.57 0.07 208 / 0.3)",
              fontFamily: "'Peyda', Tahoma, sans-serif",
              direction: "rtl",
            },
          }}
        />
      </body>
    </html>
  );
}
