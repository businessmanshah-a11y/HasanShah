import type { Metadata } from "next";
import { ClientPortfolioJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "مرتضی دانش | مدیرعامل زی‌تک، عضو کارایا و مشاور ارشد کسب‌وکار و استارتاپ‌ها",
  description:
    "وب‌سایت شخصی و رسمی مرتضی دانش — مدیرعامل مرکز نوآوری زی‌تک (زرین‌پال)، سرمایه‌گذار فرشته در کارایا، مشاور تخصصی جذب سرمایه، نوآوری شرکتی (CVC) و مقیاس‌پذیری استارتاپ‌ها.",
  alternates: {
    canonical: "https://hasanshah.ir/clients/morteza-danesh/",
  },
  openGraph: {
    locale: "fa_IR",
    type: "profile",
    siteName: "حسن شاهمرادی",
    title: "مرتضی دانش | مشاور ارشد استارتاپ‌ها، سرمایه‌گذار فرشته و مدیرعامل زی‌تک",
    description:
      "طراحی اختصاصی لندینگ‌پیج رسمی مرتضی دانش (مدیرعامل زی‌تک زرین‌پال و عضو گروه سرمایه‌گذاران فرشته کارایا) توسط استودیو حسن شاهمرادی.",
    url: "https://hasanshah.ir/clients/morteza-danesh/",
    images: [
      {
        url: "https://hasanshah.ir/images/clients/morteza-danesh/morteza-danesh.webp",
        width: 800,
        height: 956,
        alt: "مرتضی دانش - مدیرعامل مرکز نوآوری زی‌تک زرین‌پال",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مرتضی دانش | مدیرعامل زی‌تک و مشاور سرمایه‌گذاری استارتاپ‌ها",
    description: "لندینگ‌پیج شخصی و اختصاصی مرتضی دانش، سرمایه‌گذار فرشته و رهبر مراکز نوآوری.",
    images: ["https://hasanshah.ir/images/clients/morteza-danesh/morteza-danesh.webp"],
  },
};

export default function MortezaDaneshLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientPortfolioJsonLd
        clientName="مرتضی دانش"
        clientRole="مدیرعامل زی‌تک، سرمایه‌گذار فرشته کارایا و مشاور نوآوری و استارتاپ‌ها"
        slug="morteza-danesh"
        description="طراحی و توسعه پلتفرم اختصاصی مرتضی دانش، مدیرعامل مرکز نوآوری زی‌تک زرین‌پال، عضو هیئت اجرایی سرمایه‌گذاران نیک‌اندیش کارایا و مدرس نوآوری و CVC."
      />
      {children}
    </>
  );
}
