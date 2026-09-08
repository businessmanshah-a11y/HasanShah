import { ALL_PROJECTS } from "../lib/portfolio-data";

export type Category = "all" | "shop" | "food" | "service" | "custom";

export type Project = {
  title: string;
  desc: string;
  image: string;
  category: Exclude<Category, "all">;
  url?: string;
  domain?: string;
  status?: "live" | "proprietary" | "concept";
  niche?: string;
  techStack?: string[];
};

export const projects: Project[] = ALL_PROJECTS.map((item) => ({
  title: item.title,
  desc: item.desc,
  image: item.image,
  category: item.category as Exclude<Category, "all">,
  url: item.url,
  domain: item.domain,
  status: item.status,
  niche: item.niche,
  techStack: item.techStack,
}));

export const filters: { key: Category; label: string }[] = [
  { key: "all", label: "همه" },
  { key: "shop", label: "فروشگاهی" },
  { key: "food", label: "کافه و رستوران" },
  { key: "service", label: "خدماتی" },
  { key: "custom", label: "سیستم اختصاصی" },
];

export function getVisibleProjects(filter: Category) {
  // Show featured or live projects first
  const filtered = projects.filter((project) => filter === "all" || project.category === filter);
  return filtered;
}
