import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "مرتضی دانش | مدیرعامل زی‌تک، عضو کارایا و مشاور ارشد کسب‌وکار و استارتاپ‌ها",
  description:
    "وب‌سایت رسمی مرتضی دانش — مدیرعامل مرکز نوآوری زی‌تک (زرین‌پال)، سرمایه‌گذار فرشته در کارایا، مشاور تخصصی جذب سرمایه، نوآوری شرکتی (CVC) و رشد استارتاپ‌ها.",
  openGraph: {
    locale: "fa_IR",
    type: "profile",
    title: "مرتضی دانش | مشاور ارشد استارتاپ‌ها، سرمایه‌گذار فرشته و مدیرعامل زی‌تک",
    description:
      "وب‌سایت رسمی مرتضی دانش، مدیرعامل زی‌تک زرین‌پال و عضو گروه سرمایه‌گذاران فرشته کارایا.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
