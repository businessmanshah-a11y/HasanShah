import type { Metadata } from "next";
import { ClientPortfolioJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "میلاد سجودی | مرجع آموزش ترید حرفه‌ای و بازارهای مالی",
  description:
    "طراحی و توسعه پلتفرم اختصاصی میلاد سجودی — تحلیل‌گر ارشد کریپتوکارنسی، فارکس و مربی دوره‌های جامع معاملاتی با نرخ بازدهی اثبات‌شده.",
  alternates: {
    canonical: "https://hasanshah.ir/clients/milad-sojoudi/",
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "میلاد سجودی | مرجع آموزش ترید حرفه‌ای و بازارهای مالی | حسن شاهمرادی",
    description:
      "طراحی اختصاصی لندینگ‌پیج آموزش ترید میلاد سجودی با قابلیت سوییچ تم تیره و روشن توسط حسن شاهمرادی.",
    url: "https://hasanshah.ir/clients/milad-sojoudi/",
  },
  twitter: {
    card: "summary_large_image",
    title: "میلاد سجودی | مرجع آموزش ترید حرفه‌ای و بازارهای مالی | حسن شاهمرادی",
    description: "طراحی پلتفرم مدرن آموزش ترید میلاد سجودی توسط حسن شاهمرادی.",
  },
};

export default function MiladSojoudiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientPortfolioJsonLd
        clientName="میلاد سجودی"
        clientRole="مرجع آموزش ترید حرفه‌ای و بازارهای مالی"
        slug="milad-sojoudi"
        description="طراحی و توسعه پلتفرم آموزشی اختصاصی میلاد سجودی، تحلیل‌گر ارشد بازارهای مالی و مدرس دوره‌های ترید."
      />
      {children}
    </>
  );
}
