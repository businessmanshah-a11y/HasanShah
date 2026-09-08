import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بوت‌کمپ و مسیر آموزشی وایب‌کدینگ ویژه تیم‌های توسعه‌دهنده | حسن شاهمرادی",
  description:
    "کارگاه اختصاصی و ۴ ساعته مهندسی ایجنتیک و وایب‌کدینگ برای تیم‌های فنی و برنامه‌نویسان با تمرکز بر ساخت اسکیل‌های سفارشی، ارکستراسیون ایجنت‌ها و خودکارسازی پایپ‌لاین تولید با حسن شاهمرادی.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "حسن شاهمرادی",
    title: "بوت‌کمپ اختصاصی مهندسی ایجنتیک و وایب‌کدینگ ویژه تیم‌های توسعه‌دهنده",
    description:
      "مسیر آموزشی عملی ۴ ساعته در ۲ جلسه فشرده همراه با اسپرینت تمرین هفتگی برای ارتقای راندمان برنامه‌نویسان به سطح ایجنتیک.",
  },
};

export default function DevTeamBootcampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
