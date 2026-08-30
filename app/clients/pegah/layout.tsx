import type { Metadata } from "next";
import { ClientPortfolioJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "پگاه | تدوینگر، کارگردان و استراتژیست محتوای ویدیویی",
  description:
    "پورتفولیو و شوکیس اختصاصی پگاه — تدوینگر و کارگردان تیزرهای تبلیغاتی، ویدیو موزیک، یوتیوب و محتوای روایی با استانداردهای سینمایی.",
  alternates: {
    canonical: "https://hasanshah.ir/clients/pegah/",
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "پگاه | تدوینگر، کارگردان و استراتژیست ویدیو | حسن شاهمرادی",
    description:
      "طراحی پورتفولیو مینیمال و سینمایی پگاه با گالری ویدیو و لایت‌باکس اختصاصی توسط حسن شاهمرادی.",
    url: "https://hasanshah.ir/clients/pegah/",
  },
  twitter: {
    card: "summary_large_image",
    title: "پگاه | تدوینگر، کارگردان و استراتژیست ویدیو | حسن شاهمرادی",
    description: "نمونه کار طراحی پورتفولیو ویدیویی پگاه توسط حسن شاهمرادی.",
  },
};

export default function PegahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientPortfolioJsonLd
        clientName="پگاه"
        clientRole="تدوینگر و کارگردان فیلم"
        slug="pegah"
        description="طراحی پورتفولیو مینیمال و سینمایی پگاه، تدوینگر و کارگردان تیزرهای تبلیغاتی و پروژه‌های هنری."
      />
      {children}
    </>
  );
}
