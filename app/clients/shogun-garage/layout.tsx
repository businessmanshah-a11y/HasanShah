import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پروپوزال اختصاصی شوگان گاراژ | حسن شاهمرادی",
  description: "سند استراتژیک طراحی و توسعه شو‌روم دیجیتال و پلتفرم مهندسی شوگان گاراژ (Shogun 4x4)",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShogunLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dark bg-[#0a0a0b] text-[#f4f4f5] antialiased selection:bg-[#dc2626] selection:text-white min-h-screen">{children}</div>;
}
