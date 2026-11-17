import { EncyclopediaTerm, TermCategory, CategoryMeta } from './types';
import { vibeAiTerms } from './terms-vibe-ai';
import { uiUxTerms } from './terms-ui-ux';
import { frontendTerms } from './terms-frontend';
import { wpCoreTerms } from './terms-wp-core';
import { databaseApiTerms } from './terms-database-api';
import { devopsServerTerms } from './terms-devops-server';

export * from './types';

export const allDictionaryTerms: EncyclopediaTerm[] = [
  ...vibeAiTerms,
  ...uiUxTerms,
  ...frontendTerms,
  ...wpCoreTerms,
  ...databaseApiTerms,
  ...devopsServerTerms,
];

export const categoriesMeta: CategoryMeta[] = [
  {
    id: 'vibe-ai',
    titleFa: 'وایب‌کدینگ و تعامل با هوش مصنوعی',
    titleEn: 'AI & Vibe Coding Core',
    description: 'اصول تعامل مهندسی با ادیتورهای Cursor، Claude و پرامپت‌نویسی بدون باگ و توهم',
    iconName: 'Sparkles',
    badgeColor: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  },
  {
    id: 'ui-ux',
    titleFa: 'طراحی، تجربه و رابط کاربری',
    titleEn: 'UI/UX & Design Systems',
    description: 'توکن‌های دیزاین، مقیاس تایپوگرافی، کنتراست دسترسی‌پذیری و ریزتعاملات لوکس',
    iconName: 'Layout',
    badgeColor: 'border-purple-400/30 bg-purple-400/10 text-purple-300',
  },
  {
    id: 'frontend',
    titleFa: 'فرانت‌اند مدرن، تیل‌ویند و گوتنبرگ',
    titleEn: 'Modern Frontend & Gutenberg',
    description: 'توسعه بلاک‌های اختصاصی، Tailwind JIT، بیلد با wp-scripts و رندر بهینه',
    iconName: 'Code2',
    badgeColor: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  },
  {
    id: 'wp-core',
    titleFa: 'هسته وردپرس، معماری بک‌اند و PHP',
    titleEn: 'WordPress Core & PHP Architecture',
    description: 'اکشن و فیلتر هوک‌ها، سلسله‌مراتب قالب، پوسته‌های فرزند، CPT و امنیت نانس‌ها',
    iconName: 'Layers',
    badgeColor: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  },
  {
    id: 'database-api',
    titleFa: 'دیتابیس، ارتباطات و وب‌سرویس‌ها',
    titleEn: 'Database, REST APIs & Data Flow',
    description: 'معماری مای‌اس‌کیوال، شیء wpdb، امنیت ضد تزریق کد، REST API و احراز هویت JWT',
    iconName: 'Database',
    badgeColor: 'border-rose-400/30 bg-rose-400/10 text-rose-300',
  },
  {
    id: 'devops-server',
    titleFa: 'سرور، هاست، خط فرمان و دیپلوی',
    titleEn: 'Hosting, WP-CLI & DevOps',
    description: 'مدیریت با ترمینال WP-CLI، کلیدهای SSH، محیط استیجینگ، OPcache و Core Web Vitals',
    iconName: 'Terminal',
    badgeColor: 'border-orange-400/30 bg-orange-400/10 text-orange-300',
  },
];

export function getTermById(id: string): EncyclopediaTerm | undefined {
  return allDictionaryTerms.find((t) => t.id === id);
}

export function getTermsByCategory(category: TermCategory): EncyclopediaTerm[] {
  return allDictionaryTerms.filter((t) => t.category === category);
}

export function getCategoryMeta(category: TermCategory): CategoryMeta | undefined {
  return categoriesMeta.find((c) => c.id === category);
}

export function searchTerms(query: string, category?: TermCategory, level?: string): EncyclopediaTerm[] {
  const normalizedQuery = query.trim().toLowerCase();
  
  return allDictionaryTerms.filter((term) => {
    // Category filter
    if (category && term.category !== category) {
      return false;
    }
    
    // Level filter
    if (level && level !== 'all' && term.level !== level) {
      return false;
    }
    
    // If no search query, match all
    if (!normalizedQuery) {
      return true;
    }
    
    // Match against English name, Persian name, tags, definitions, and SEO keywords
    const matchesEn = term.termEn.toLowerCase().includes(normalizedQuery);
    const matchesFa = term.termFa.toLowerCase().includes(normalizedQuery);
    const matchesDefinition = term.shortDefinition.toLowerCase().includes(normalizedQuery);
    const matchesTags = term.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));
    const matchesSeo = term.seoKeywords.some((kw) => kw.toLowerCase().includes(normalizedQuery));
    
    return matchesEn || matchesFa || matchesDefinition || matchesTags || matchesSeo;
  });
}
