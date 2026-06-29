export type Category = "all" | "shop" | "service" | "startup" | "personal";

export type Project = {
  title: string;
  desc: string;
  image: string;
  category: Exclude<Category, "all">;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "PROJECT_1_TITLE",
    desc: "PROJECT_1_DESC",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/portfolio/project-1.webp`,
    category: "service",
    url: "https://example.com",
  },
  {
    title: "PROJECT_2_TITLE",
    desc: "PROJECT_2_DESC",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/portfolio/project-2.webp`,
    category: "startup",
  },
  {
    title: "PROJECT_3_TITLE",
    desc: "PROJECT_3_DESC",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/portfolio/project-3.webp`,
    category: "shop",
    url: "https://example.com",
  },
];

export const filters: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "shop", label: "Shop" },
  { key: "service", label: "Service" },
  { key: "startup", label: "Startup" },
  { key: "personal", label: "Personal" },
];

export function getVisibleProjects(filter: Category) {
  return projects.filter((project) => filter === "all" || project.category === filter);
}
