import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پروپوزال اختصاصی طراحی وب‌سایت ویزاکده | حسن شاهمرادی",
  description:
    "پیشنهاد رسمی، مشخصات فنی، مدل قیمت‌گذاری و زمان‌بندی طراحی و توسعه وب‌سایت ویزاکده برای جناب آقای فلاح توسط حسن شاهمرادی.",
  alternates: {
    canonical: "https://hasanshah.ir/clients/visakade/",
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "پروپوزال اختصاصی طراحی وب‌سایت ویزاکده | حسن شاهمرادی",
    description:
      "پیشنهاد رسمی، مشخصات فنی و زمان‌بندی توسعه وب‌سایت خدمات ویزا برای جناب آقای فلاح.",
    url: "https://hasanshah.ir/clients/visakade/",
    images: [
      {
        url: "/images/clients/visakade/visaland-hero.jpg",
        width: 1024,
        height: 665,
        alt: "الگوی طراحی وب‌سایت ویزا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "پروپوزال اختصاصی طراحی وب‌سایت ویزاکده | حسن شاهمرادی",
    description:
      "پیشنهاد رسمی توسعه وب‌سایت خدمات ویزا برای جناب آقای فلاح توسط حسن شاهمرادی.",
  },
};

export default function VisakadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
