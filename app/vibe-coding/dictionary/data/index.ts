import { EncyclopediaTerm, TermCategory, CategoryMeta, UserPersona, LearningStation, DifficultyLevel } from './types';
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
].sort((a, b) => a.sequenceOrder - b.sequenceOrder);

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

export interface LearningStationMeta {
  id: LearningStation;
  stepNumber: number;
  titleFa: string;
  subtitleFa: string;
  iconName: string;
  accentColor: string;
}

export const learningStationsMeta: LearningStationMeta[] = [
  {
    id: 'station-1',
    stepNumber: 1,
    titleFa: 'ایستگاه اول: ذهن هوش مصنوعی را بشناس',
    subtitleFa: 'اصول مهار توهم، مدیریت حافظه ادیتور و پرامپت‌نویسی مهندسی',
    iconName: 'Brain',
    accentColor: 'text-amber-400 border-amber-400/40 bg-amber-400/10',
  },
  {
    id: 'station-2',
    stepNumber: 2,
    titleFa: 'ایستگاه دوم: ظاهر و دیزاین سیستم لوکس',
    subtitleFa: 'تبدیل فیگما به کدهای سبک تیل‌ویند و بلاک‌های مدرن بدون المنتور',
    iconName: 'Layout',
    accentColor: 'text-purple-400 border-purple-400/40 bg-purple-400/10',
  },
  {
    id: 'station-3',
    stepNumber: 3,
    titleFa: 'ایستگاه سوم: مغز وردپرس و امنیت دیتابیس',
    subtitleFa: 'هوک‌های حیاتی، امنیت فرم‌ها و محافظت در برابر هک و خرابی داده‌ها',
    iconName: 'Layers',
    accentColor: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
  },
  {
    id: 'station-4',
    stepNumber: 4,
    titleFa: 'ایستگاه چهارم: سرور، لانچ و تست‌های سرعت',
    subtitleFa: 'انتقال بدون باگ، بهینه‌سازی لود زیر ۱ ثانیه و تحویل نهایی به کارفرما',
    iconName: 'Terminal',
    accentColor: 'text-sky-400 border-sky-400/40 bg-sky-400/10',
  },
];

export interface ConfusingPair {
  id: string;
  title: string;
  conceptA: {
    name: string;
    description: string;
    analogy: string;
    useWhen: string;
  };
  conceptB: {
    name: string;
    description: string;
    analogy: string;
    useWhen: string;
  };
}

export const confusingPairsData: ConfusingPair[] = [
  {
    id: 'action-vs-filter',
    title: 'تفاوت Action Hook با Filter Hook',
    conceptA: {
      name: 'Action Hook (قلاب اکشن)',
      description: 'یک کار مشخص انجام می‌دهد یا کدی را در لحظه‌ای از زمان اجرا می‌کند.',
      analogy: 'مثل زدن دوشاخه جاروبرقی به پریز برق (کاری انجام می‌شود).',
      useWhen: 'وقتی می‌خواهی چیزی چاپ کنی، ایمیلی بفرستی، یا اسکریپتی لود کنی.',
    },
    conceptB: {
      name: 'Filter Hook (قلاب فیلتر)',
      description: 'داده‌ای را تحویل می‌گیرد، تغییرش می‌دهد و حتماً باید برگرداند.',
      analogy: 'مثل دستگاه تصفیه آب (آب وارد می‌شود، تصفیه شده و خارج می‌شود).',
      useWhen: 'وقتی می‌خواهی متن پست، عنوان یا قیمت را قبل از نمایش دستکاری کنی.',
    },
  },
  {
    id: 'static-vs-dynamic-block',
    title: 'تفاوت بلاک استاتیک با بلاک داینامیک گوتنبرگ',
    conceptA: {
      name: 'بلاک استاتیک (Static Block)',
      description: 'خروجی HTML مستقیماً درون متن پست ذخیره می‌شود و سرعت لود برق‌آسا دارد.',
      analogy: 'مثل یک عکس چاپ‌شده در آلبوم؛ تصویر ثابت است و تا عکس جدید نچسبانی عوض نمی‌شود.',
      useWhen: 'برای تیترها، بنرهای متنی ثابت، جدول قیمت یا کارت‌های معرفی ثابت.',
    },
    conceptB: {
      name: 'بلاک داینامیک (Dynamic Block)',
      description: 'کدهای PHP با هر بار باز شدن صفحه اجرا می‌شوند و دیتای تازه را واکشی می‌کنند.',
      analogy: 'مثل صفحه دیجیتال نمایش نرخ لحظه‌ای ارز در صرافی.',
      useWhen: 'برای لیست آخرین مقالات، محصولات دارای تخفیف یا آخرین نظرات کاربران.',
    },
  },
  {
    id: 'posts-vs-postmeta',
    title: 'تفاوت جدول wp_posts با wp_postmeta در دیتابیس',
    conceptA: {
      name: 'جدول wp_posts',
      description: 'شناسنامه اصلی محتوا: شامل عنوان، متن، تاریخ، وضعیت و نامک نوشته.',
      analogy: 'مثل جلد و صفحات اصلی یک کتاب با شماره شابک رسمی.',
      useWhen: 'تمام محتواهای پایه، برگه‌ها و CPTها در این جدول ذخیره می‌شوند.',
    },
    conceptB: {
      name: 'جدول wp_postmeta',
      description: 'فیلدهای اضافی نامحدود به صورت کلید-مقدار (قیمت، متراژ، رنگ).',
      analogy: 'مثل برچسب‌های چسبان زرد رنگ که روی جلد کتاب یادداشت می‌چسبانی.',
      useWhen: 'برای ذخیره فیلدهای سفارشی ACF و اطلاعات تکمیلی محصول.',
    },
  },
];

// Intent Search mapping for human questions
const intentKeywordsMap: Record<string, string[]> = {
  'کند': ['transients-api', 'opcache-tuning', 'cls-prevention', 'core-web-vitals'],
  'سرعت': ['opcache-tuning', 'transients-api', 'cls-prevention', 'core-web-vitals'],
  'هک': ['nonces', 'sql-injection-guard', 'ssh-key-auth'],
  'امنیت': ['nonces', 'sql-injection-guard', 'ssh-key-auth', 'hallucination-guard'],
  'فرم': ['nonces', 'sql-injection-guard', 'custom-endpoints'],
  'فروشگاه': ['custom-post-types', 'nonces', 'wp-posts-schema', 'wp-rest-api', 'transients-api'],
  'لندینگ': ['design-tokens', 'visual-hierarchy', 'micro-interactions', 'fluid-typography', 'cls-prevention'],
  'ارور': ['hallucination-guard', 'action-hooks', 'child-theme', 'wp-cli'],
  'رنگ': ['design-tokens', 'wcag-contrast'],
  'فونت': ['fluid-typography', 'visual-hierarchy', 'design-tokens'],
  'بلاک': ['block-json', 'wp-scripts', 'dynamic-blocks'],
  'انتقال': ['db-search-replace', 'staging-environment', 'wp-cli'],
  'هاست': ['staging-environment', 'opcache-tuning', 'wp-cli', 'ssh-key-auth'],
};

export function getTermById(id: string): EncyclopediaTerm | undefined {
  return allDictionaryTerms.find((t) => t.id === id);
}

export function searchTerms(
  query: string,
  category?: TermCategory | 'all',
  level?: DifficultyLevel | 'all',
  persona?: UserPersona | 'all',
  station?: LearningStation | 'all',
  preset?: 'landing24h' | 'ecommerce' | 'critical5' | 'nocode' | 'all'
): EncyclopediaTerm[] {
  const normalizedQuery = query.trim().toLowerCase();

  // Find intent matched IDs if user typed intent words
  const intentMatchedIds: string[] = [];
  if (normalizedQuery) {
    for (const [intentWord, termIds] of Object.entries(intentKeywordsMap)) {
      if (normalizedQuery.includes(intentWord)) {
        intentMatchedIds.push(...termIds);
      }
    }
  }

  return allDictionaryTerms.filter((term) => {
    // Preset Filters
    if (preset === 'critical5' && !term.isCritical5) return false;
    if (preset === 'landing24h' && !term.isLanding24h) return false;
    if (preset === 'ecommerce' && !term.isEcommerceEssential) return false;
    if (preset === 'nocode' && !term.isNoCodeFriendly) return false;

    // Station Filter
    if (station && station !== 'all' && term.learningStation !== station) return false;

    // Persona Filter
    if (persona && persona !== 'all' && !term.targetPersonas.includes(persona)) return false;

    // Category filter
    if (category && category !== 'all' && term.category !== category) return false;

    // Level filter
    if (level && level !== 'all' && term.level !== level) return false;

    // If no query, match
    if (!normalizedQuery) return true;

    // If matched by intent
    if (intentMatchedIds.includes(term.id)) return true;

    // Match text fields
    const matchesEn = term.termEn.toLowerCase().includes(normalizedQuery);
    const matchesFa = term.termFa.toLowerCase().includes(normalizedQuery);
    const matchesAnalogy = term.analogy.toLowerCase().includes(normalizedQuery);
    const matchesHumanQ = term.humanQuestion.toLowerCase().includes(normalizedQuery);
    const matchesDef = term.shortDefinition.toLowerCase().includes(normalizedQuery);
    const matchesTags = term.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));
    const matchesSeo = term.seoKeywords.some((kw) => kw.toLowerCase().includes(normalizedQuery));

    return matchesEn || matchesFa || matchesAnalogy || matchesHumanQ || matchesDef || matchesTags || matchesSeo;
  });
}
