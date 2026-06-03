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
    desc: "فروشگاه لوکس ساعت — دوزبانه با دو تم",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/portfolio/portfolio-luxcounter.webp`,
    category: "shop",
    url: "https://luxcounter.ir",
  },
  {
    title: "Rubifo",
    desc: "فروشگاه آنلاین چندمنظوره — فارسی با دو تم",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/portfolio/portfolio-rubifo.webp`,
    category: "shop",
    url: "https://rubifo.ir",
  },
  {
    title: "AutoMarketing",
    desc: "داشبورد اتوماسیون مارکتینگ و تولید محتوای چندعاملی",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/portfolio/portfolio-automarketing.webp`,
    category: "service",
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
