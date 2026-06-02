import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "./i18n/LanguageProvider";
import LocalizedToaster from "./components/LocalizedToaster";
import { type Locale, LOCALE_STORAGE_KEY, defaultLocale, dirOf } from "./i18n/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-latin", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.vercel.app"),
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

// Runs before hydration: picks the locale from the cookie or the browser language
// and sets <html lang/dir> + the cookie, so direction is correct on first paint.
const NO_FLASH_SCRIPT = `(function(){try{var s=['fa','en','ar'];var m=document.cookie.match(/(?:^|; )${LOCALE_STORAGE_KEY}=([^;]+)/);var l=m&&m[1];if(!l||s.indexOf(l)<0){var n=(navigator.language||'fa').toLowerCase().split('-')[0];l=s.indexOf(n)>=0?n:'fa';}document.documentElement.lang=l;document.documentElement.dir=l==='en'?'ltr':'rtl';document.cookie='${LOCALE_STORAGE_KEY}='+l+';path=/;max-age=31536000;samesite=lax';}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const initialLocale: Locale = defaultLocale;

  return (
    <html
      lang={initialLocale}
      dir={dirOf(initialLocale)}
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />
        <link rel="preload" href="/HasanShah/fonts/PeydaWebFaNum-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/HasanShah/fonts/PeydaWebFaNum-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/HasanShah/fonts/PeydaWebFaNum-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider initialLocale={initialLocale}>
          {children}
          <LocalizedToaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
