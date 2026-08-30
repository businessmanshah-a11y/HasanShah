import type { Metadata } from "next";
import { ClientPortfolioJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "حامد طاحونه | مشاور امور اداری و ثبتی",
  description:
    "نمونه کار طراحی و توسعه لندینگ‌پیج اختصاصی حامد طاحونه، مشاور ارشد ثبت شرکت، تنظیم قراردادها و پیگیری امور اداری در تهران.",
  alternates: {
    canonical: "https://hasanshah.ir/clients/hamed-tahouneh/",
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "حامد طاحونه | مشاور امور اداری و ثبتی | حسن شاهمرادی",
    description:
      "طراحی اختصاصی لندینگ‌پیج حامد طاحونه با تمرکز بر نرخ تبدیل بالا و تجربه کاربری روان توسط حسن شاهمرادی.",
    url: "https://hasanshah.ir/clients/hamed-tahouneh/",
  },
  twitter: {
    card: "summary_large_image",
    title: "حامد طاحونه | مشاور امور اداری و ثبتی | حسن شاهمرادی",
    description: "نمونه کار طراحی و توسعه لندینگ‌پیج اختصاصی حامد طاحونه توسط حسن شاهمرادی.",
  },
};

export default function HamedTahounehLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientPortfolioJsonLd
        clientName="حامد طاحونه"
        clientRole="مشاور امور اداری و ثبتی"
        slug="hamed-tahouneh"
        description="طراحی و توسعه لندینگ‌پیج اختصاصی حامد طاحونه، مشاور ارشد ثبت شرکت و تنظیم قراردادها."
      />
      {children}
    </>
  );
}
