import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پگاه | تدوینگر و کارگردان فیلم",
  description:
    "پگاه — تدوینگر فیلم، کارگردان و متخصص پست‌پروداکشن. تماس: ۰۹۳۸۲۷۱۵۹۸۶",
  robots: { index: false, follow: false },
};

export default function PegahLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        body {
          background: oklch(0.99 0.002 0) !important;
          background-image: none !important;
        }
      `}</style>
      {children}
    </>
  );
}
