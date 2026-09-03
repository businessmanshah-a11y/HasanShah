// app/blog/authors.ts
import type { Locale } from "../i18n/config";
import type { ArticleAuthor } from "./types";

export const authors: Record<Locale, ArticleAuthor> = {
  fa: {
    name: "حسن شاهمرادی",
    role: "طراح، توسعه‌دهنده و استراتژیست دیجیتال",
    avatar: "/images/profile.webp",
    bio: "بیش از ۸ سال تجربه در طراحی وب‌سایت‌های لوکس، مارکتینگ دیجیتال و آموزش وایب‌کدینگ با مدل‌های پیشرفته هوش مصنوعی.",
  },
  en: {
    name: "Hasan Shahmoradi",
    role: "Web Designer, Developer & Digital Strategist",
    avatar: "/images/profile.webp",
    bio: "Over 8 years of experience designing premium websites, digital growth strategies, and teaching vibe coding with modern AI.",
  },
  ar: {
    name: "حسن شاهمرادي",
    role: "مصمّم مواقع ومطوّر واستراتيجي رقمي",
    avatar: "/images/profile.webp",
    bio: "أكثر من ۸ سنوات من الخبرة في تصميم المواقع الفاخرة واستراتيجيات النمو والفايب كودينغ مع الذكاء الاصطناعي.",
  },
};
