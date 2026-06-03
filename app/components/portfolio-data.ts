export type Category = "all" | "shop" | "service" | "personal";

export type Project = {
  title: string;
  desc: string;
  image: string;
  category: Exclude<Category, "all">;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Lux Counter",
    desc: "سایت معرفی و فروش تخصصی سنگ کابینت — بیش از ۲۰۰ محصول، دوزبانه با دو تم",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/portfolio/portfolio-luxcounter.webp`,
    category: "shop",
    url: "https://luxcounter.ir",
  },
  {
    title: "Rubifo",
    desc: "ربات هوشمند بارگذاری محتوا برای روبیکا — درگاه پرداخت یکپارچه و سایت اختصاصی",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/portfolio/portfolio-rubifo.webp`,
    category: "service",
    url: "https://rubifo.ir",
  },
  {
    title: "AutoMarketing",
    desc: "سیستم جامع دیجیتال مارکتینگ مبتنی بر هوش مصنوعی — از تحقیقات بازار تا تولید محتوا، بارگذاری و آنالیز",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/portfolio/portfolio-automarketing.webp`,
    category: "service",
  },
  {
    title: "LoosiPet",
    desc: "پلتفرم هویت دیجیتال پت — QR هوشمند، ردیابی لحظه‌ای و دستیار هوش مصنوعی برای مراقبت از حیوانات خانگی",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/portfolio/portfolio-loosipet.webp`,
    category: "service",
  },
  {
    title: "نداهیر",
    desc: "فروشگاه تخصصی مراقبت از مو — مشاوره شخصی‌سازی‌شده، محصولات گیاهی و راهنمای درمان ریزش مو",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/portfolio/portfolio-nadahair.webp`,
    category: "shop",
    url: "https://nadahair.ir",
  },
];

export const filters: { key: Category; label: string }[] = [
  { key: "all", label: "همه" },
  { key: "shop", label: "فروشگاهی" },
  { key: "service", label: "خدماتی" },
  { key: "personal", label: "پرسونال" },
];

export function getVisibleProjects(filter: Category) {
  return projects.filter((project) => filter === "all" || project.category === filter);
}
