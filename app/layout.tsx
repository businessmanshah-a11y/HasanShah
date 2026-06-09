import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "./i18n/LanguageProvider";
import LocalizedToaster from "./components/LocalizedToaster";
import { type Locale, LOCALE_STORAGE_KEY, defaultLocale, dirOf } from "./i18n/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-latin", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://hasanshah.ir"),
  title: {
    default: "حسن شاهمرادی | طراح وب، توسعه‌دهنده و آموزش وایب‌کدینگ",
    template: "%s | حسن شاهمرادی",
  },
  description:
    "حسن شاهمرادی — طراح وب و توسعه‌دهنده فرانت‌اند ایرانی. سایت تک‌صفحه‌ای رایگان در ۷۲ ساعت. آموزش وایب‌کدینگ با Cursor، Claude و Codex. بدون پیش‌پرداخت.",
  keywords: [
    "طراح وب ایرانی",
    "توسعه‌دهنده فرانت‌اند",
    "وایب‌کدینگ",
    "آموزش وایب‌کدینگ",
    "ساخت سایت با هوش مصنوعی",
    "Cursor AI",
    "Claude AI",
    "سایت رایگان",
    "حسن شاهمرادی",
    "Next.js",
    "React",
  ],
  authors: [{ name: "حسن شاهمرادی", url: "https://hasanshah.ir" }],
  creator: "حسن شاهمرادی",
  alternates: {
    canonical: "https://hasanshah.ir",
    languages: {
      "fa": "https://hasanshah.ir",
      "en": "https://hasanshah.ir",
      "ar": "https://hasanshah.ir",
      "x-default": "https://hasanshah.ir",
    },
  },
  openGraph: {
    locale: "fa_IR",
    alternateLocale: ["en_US", "ar_SA"],
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "حسن شاهمرادی | طراح وب، توسعه‌دهنده و آموزش وایب‌کدینگ",
    description:
      "سایت تک‌صفحه‌ای رایگان در ۷۲ ساعت + آموزش وایب‌کدینگ با هوش مصنوعی. بدون پیش‌پرداخت.",
    url: "https://hasanshah.ir",
    images: [
      {
        url: "/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "حسن شاهمرادی — طراح وب و مدرس وایب‌کدینگ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "حسن شاهمرادی | طراح وب، توسعه‌دهنده و آموزش وایب‌کدینگ",
    description:
      "سایت تک‌صفحه‌ای رایگان در ۷۲ ساعت + آموزش وایب‌کدینگ با هوش مصنوعی.",
    images: ["/images/profile.webp"],
    creator: "@hasanshah",
  },
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
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
        <link rel="preload" href="/fonts/PeydaWebFaNum-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PeydaWebFaNum-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PeydaWebFaNum-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
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
