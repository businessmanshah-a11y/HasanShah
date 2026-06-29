import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "میلاد سجودی | مرجع آموزش ترید حرفه‌ای در ایران",
  description:
    "آموزش حرفه‌ای ترید در بازارهای فارکس و ارزدیجیتال. از صفر تا استقلال مالی با میلاد سجودی.",
  robots: { index: false, follow: false },
};

export default function MiladSojoudiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        body {
          background: oklch(0.10 0.020 272) !important;
          background-image: none !important;
          background-attachment: initial !important;
        }
      `}</style>
      {children}
    </>
  );
}
