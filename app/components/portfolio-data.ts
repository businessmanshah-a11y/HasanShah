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
    image: "/images/portfolio/portfolio-luxcounter.jpg",
    category: "shop",
    url: "https://luxcounter.ir",
  },
  {
    title: "Rubifo",
    desc: "فروشگاه آنلاین چندمنظوره — فارسی با دو تم",
    image: "/images/portfolio/portfolio-rubifo.jpg",
    category: "shop",
    url: "https://rubifo.ir",
  },
  {
    title: "Startup MVP",
    desc: "سایت تک‌صفحه‌ای استارتاپ با ساختار معرفی محصول",
    image: "/images/portfolio/portfolio-startup.jpg",
    category: "service",
  },
  {
    title: "Personal Brand",
    desc: "وب‌سایت پرسونال برندینگ یک متخصص",
    image: "/images/portfolio/portfolio-personal.jpg",
    category: "personal",
  },
  {
    title: "Service Business",
    desc: "وب‌سایت معرفی خدمات حرفه‌ای",
    image: "/images/portfolio/portfolio-service.jpg",
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
