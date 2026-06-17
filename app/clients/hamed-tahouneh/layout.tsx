import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حامد طاحونه | مشاور خدمات اداری",
  description:
    "مشاوره تخصصی خدمات اداری در سراسر ایران. ثبت شرکت، تنظیم قرارداد، پیگیری امور اداری. تماس: ۰۹۳۹۲۴۰۶۷۶۷",
  robots: { index: false, follow: false },
};

export default function HamedTahounehLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* override the main site's dark-navy body background for this route */}
      <style>{`
        body {
          background: oklch(0.99 0.003 0) !important;
          background-image: none !important;
          background-attachment: initial !important;
        }
      `}</style>
      {children}
    </>
  );
}
