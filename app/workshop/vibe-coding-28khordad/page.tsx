import type { Metadata } from "next";
import EventPageContent from "./components/EventPageContent";

export const metadata: Metadata = {
  title: "کارگاه وایب‌کدینگ ۲۸ خرداد ۱۴۰۴",
  description: "صفحه اختصاصی کارگاه وایب‌کدینگ — شرکت‌کنندگان، سرفصل‌ها، ویدیو و نظرات",
  robots: { index: false },
};

export default function EventPage() {
  return <EventPageContent />;
}
