import type { Metadata } from "next";
import EventPageContent from "./components/EventPageContent";

export const metadata: Metadata = {
  title: "کارگاه حضوری وایب‌کدینگ ۲۸ خرداد",
  description:
    "آرشیو اختصاصی کارگاه حضوری وایب‌کدینگ — گزارش رویداد، اسلایدها، ویدیوها و نظرات شرکت‌کنندگان در مرکز نوآوری زی‌تک تهران.",
  alternates: {
    canonical: "https://hasanshah.ir/workshop/vibe-coding-28khordad/",
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "کارگاه حضوری وایب‌کدینگ ۲۸ خرداد | حسن شاهمرادی",
    description:
      "گزارش تصویری، دستاوردها و محتوای کارگاه حضوری وایب‌کدینگ با هوش مصنوعی توسط حسن شاهمرادی.",
    url: "https://hasanshah.ir/workshop/vibe-coding-28khordad/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EventPage() {
  return <EventPageContent />;
}
