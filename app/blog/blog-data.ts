// app/blog/blog-data.ts
import type { Locale } from "../i18n/config";
import { aiViralVideoReplicationArticle } from "./articles/ai-viral-video-replication-article";
import { aiImageToVideoArticle } from "./articles/ai-image-to-video-article";

export interface TableOfContentItem {
  id: string;
  title: string;
}

export interface ArticleAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface ArticleCallout {
  type: "tip" | "warning" | "info" | "quote";
  title?: string;
  text: string;
}

export interface ArticleTable {
  headers: string[];
  rows: string[][];
}

export interface ArticleCodeSnippet {
  title?: string;
  language?: string;
  code: string;
}

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticleCommandItem {
  num: number;
  command: string;
  category: string;
  description: string;
  example?: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  callout?: ArticleCallout;
  table?: ArticleTable;
  codeSnippets?: ArticleCodeSnippet[];
  image?: ArticleImage;
  commands?: ArticleCommandItem[];
}

export interface LocalizedArticleContent {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishedDate: string;
  tags: string[];
  author: ArticleAuthor;
  toc: TableOfContentItem[];
  sections: ArticleSection[];
  takeaways?: string[];
}

export interface RawArticle {
  slug: string;
  dateIso: string;
  coverImage: string;
  featured: boolean;
  relatedSlugs?: string[];
  locales: Record<Locale, LocalizedArticleContent>;
}

export interface Article extends LocalizedArticleContent {
  slug: string;
  dateIso: string;
  coverImage: string;
  featured: boolean;
  relatedSlugs?: string[];
}

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

export const rawArticles: RawArticle[] = [
  aiViralVideoReplicationArticle,
  aiImageToVideoArticle,
  {
    slug: "chatgpt-slash-commands-handbook-2026",
    dateIso: "2026-02-27T00:00:00.000Z",
    coverImage: "/images/blog/chatgpt-handbook-cover.webp",
    featured: false,
    relatedSlugs: ["ai-image-to-video-cinematic-prompts", "what-is-vibe-coding-guide", "high-converting-landing-page-secrets"],
    locales: {
      fa: {
        title: "کامل‌ترین هندبوک ۴۶۰ اسلش‌کامند و کدهای مخفی ChatGPT (ویرایش ۲۰۲۶)",
        summary: "مرجع جامع و دست‌اول ۴۶۰ اسلش‌کامند، کدهای مخفی تغییر استایل، رندرهای سینمایی و پرامپت‌های میانبر چت‌جی‌پی‌تی برای کاربران حرفه‌ای و تیم‌های توسعه.",
        category: "هوش مصنوعی",
        readTime: "۲۵ دقیقه مطالعه",
        publishedDate: "۸ اسفند ۱۴۰۴",
        tags: ["ChatGPT", "پرامپت‌نویسی", "اسلش‌کامند", "هوش مصنوعی", "کدهای مخفی", "وایب‌کدینگ"],
        author: authors.fa,
        toc: [
        {
                "id": "understanding-commands",
                "title": "۱. ساختار و معماری ۴ لایه پردازش کامندها در ChatGPT"
        },
        {
                "id": "core-official-commands",
                "title": "۲. اسلش‌کامندهای رسمی و سیستمی هسته (Official Commands)"
        },
        {
                "id": "canvas-workspace-and-files",
                "title": "۳. محیط کار Canvas، مدیریت اسناد و تحلیل داده (Workspace & Data)"
        },
        {
                "id": "commercial-product-showcase",
                "title": "۴. شورت‌کدهای عکاسی تجاری، تبلیغات بیلبوردی و پروداکت شوکیس (۱۵۰ دستور)"
        },
        {
                "id": "camera-angles-and-cinema",
                "title": "۵. زوایا، لنزها و پرسپکتیو سینمایی عکاسی و تصویرسازی (۸۵ دستور)"
        },
        {
                "id": "ai-image-tools-and-edits",
                "title": "۶. ابزارها و فرامین اختصاصی ادیت و بازسازی تصویر هوش مصنوعی (۲۸ دستور)"
        },
        {
                "id": "secret-styles-and-fashion",
                "title": "۷. کدهای مخفی تغییر استایل، فشن، کاراکتر و رندرهای خاص (۱۰۳ کد)"
        },
        {
                "id": "dev-and-coding-prompts",
                "title": "۸. کامندهای تخصصی مهندسی نرم‌افزار، معماری کد و وایب‌کدینگ (۱۶ دستور)"
        },
        {
                "id": "business-and-strategy",
                "title": "۹. کامندهای استراتژی بیزینس، مارکتینگ و بنیان‌گذاران (۱۵ دستور)"
        },
        {
                "id": "writing-and-copywriting",
                "title": "۱۰. کامندهای تولید محتوا، کپی‌رایتینگ، تیترنویسی و سناریوسازی (۱۸ دستور)"
        },
        {
                "id": "research-and-productivity",
                "title": "۱۱. کامندهای تحقیق، یادگیری عمیق، حافظه و بهره‌وری شخصی (۱۸ دستور)"
        },
        {
                "id": "roleplay-personas-experimental",
                "title": "۱۲. نقش‌آفرینی، شبیه‌سازی پرسونای متخصصین و کدهای تجربی (۸ دستور)"
        },
        {
                "id": "keyboard-shortcuts-guide",
                "title": "۱۳. جدول جامع کلیدهای میانبر کیبورد در وب، مک و ویندوز"
        },
        {
                "id": "custom-prompt-framework",
                "title": "۱۴. متدولوژی ساخت فریم‌ورک اختصاصی و پرامپت‌های زنجیره‌ای (Prompt Chaining)"
        },
        {
                "id": "summary-and-takeaways",
                "title": "۱۵. جمع‌بندی نهایی و نقشه راه تسلط بر پرامپت‌های پیشرفته"
        }
],
        sections: [
        {
                "id": "understanding-commands",
                "title": "۱. ساختار و معماری ۴ لایه پردازش کامندها در ChatGPT",
                "lead": "برای تسلط واقعی بر هوش مصنوعی، باید بدونی که دستورات و اسلش‌کامندها در چهار لایه معماری کاملاً تفکیک‌شده پردازش می‌شن.",
                "paragraphs": [
                        "برخلاف تصور عموم که اسلش‌کامندها رو صرفاً یک‌سری میانبر تصادفی می‌دونن، مدل‌های هوشمند مانند GPT-4o و محیط تعاملی OpenAI دستورات رو بر اساس لایه‌های دسترسی، ابزارهای فعال و پارسرهای معنایی ارزیابی می‌کنن.",
                        "در واقع علامت اسلش (/) در آموزش مدل‌های هوش مصنوعی به عنوان یک جداکننده معنایی در سطح خط فرمان (CLI) یا سطح سیستم تلقی می‌شه. وقتی این ساختار رو بشناسی، می‌دونی چطور با نوشتن کمترین کلمات، بیشترین دقت و بازدهی رو از هوش مصنوعی بگیری."
                ],
                "image": {
                        "src": "/images/blog/chatgpt-commands-architecture.webp",
                        "alt": "معماری ۴ لایه پردازش و اجرای اسلش‌کامندها در هوش مصنوعی و چت‌جی‌پی‌تی",
                        "caption": "نمای شماتیک از لایه‌های چهارگانه پردازش دستورات: هسته اپلیکیشن، محیط ایزوله Canvas، لایه معنایی LLM و پرامپت‌های سفارشی سیستم"
                },
                "table": {
                        "headers": [
                                "نوع کامند",
                                "لایه پردازش",
                                "کارکرد و نحوه اجرا",
                                "نمونه کاربردی"
                        ],
                        "rows": [
                                [
                                        "Official Commands",
                                        "ChatGPT Core UI",
                                        "دستورات رسمی و هاردکدشده رابط کاربری برای مدیریت نشست، منوها و مسیردهی",
                                        "/canvas یا منشن با @"
                                ],
                                [
                                        "Contextual Commands",
                                        "Active Sandbox / Tool",
                                        "دستورات فعال در محیط‌های اختصاصی مانند بوم Canvas یا مفسر پایتون",
                                        "/comment یا /update"
                                ],
                                [
                                        "Semantic Commands",
                                        "LLM Semantic Parser",
                                        "کلیدواژه‌های معنایی که مدل ذاتاً متدولوژی و ساختار اجرایی اون‌ها رو یاد گرفته",
                                        "/eli5 یا /tldr"
                                ],
                                [
                                        "Custom Commands",
                                        "System Rules / Prompts",
                                        "کامندهای اختصاصی که خودت در تنظیمات Custom Instructions یا فایل قوانین تعریف کردی",
                                        "/audit یا /proshot"
                                ]
                        ]
                },
                "callout": {
                        "type": "tip",
                        "title": "مزیت کلیدی استفاده از اسلش‌کامندها",
                        "text": "استفاده از اسلش‌کامندها مصرف توکن ورودی رو تا ۷۰٪ کاهش می‌ده، سرعت پاسخ‌دهی هوش مصنوعی رو به شدت بالا می‌بره و توهم (Hallucination) مدل رو به صفر نزدیک می‌کنه."
                }
        },
        {
                "id": "core-official-commands",
                "title": "۲. اسلش‌کامندهای رسمی و سیستمی هسته (Official Commands)",
                "lead": "این دستورات به صورت مستقیم در رابط کاربری رسمی وب، دسکتاپ و موبایل ChatGPT توسط OpenAI تعبیه شدن و عملکردهای سیستمی رو کنترل می‌کنن.",
                "paragraphs": [
                        "با تایپ مستقیم این فرامین در کادر ورودی گفتگو، قابلیت‌های هسته پلتفرم بدون نیاز به کلیک‌های اضافه فعال می‌شن:"
                ],
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "نمونه پرامپت"
                        ],
                        "rows": [
                                [
                                        "1",
                                        "`/help`",
                                        "نمایش راهنمای ابزارها، کلیدهای میانبر و قابلیت‌های فعال در چت",
                                        "/help"
                                ],
                                [
                                        "2",
                                        "`/new`",
                                        "شروع یک نشست گفتگوی کاملاً جدید و تمیز بدون حفظ کانتکست قبلی",
                                        "/new"
                                ],
                                [
                                        "3",
                                        "`/clear`",
                                        "پاکسازی تاریخچه پیام‌های نشست جاری بدون بستن پنجره گفتگو",
                                        "/clear"
                                ],
                                [
                                        "4",
                                        "`/rename`",
                                        "تغییر نام و عنوان چت جاری در سایدبار",
                                        "/rename AI Research Vault"
                                ],
                                [
                                        "5",
                                        "`/delete`",
                                        "حذف دائمی چت جاری به صورت مستقیم از کادر پرامپت",
                                        "/delete"
                                ],
                                [
                                        "6",
                                        "`/settings`",
                                        "باز کردن منوی تنظیمات، مدل‌ها و دستورالعمل‌های سفارشی",
                                        "/settings"
                                ],
                                [
                                        "7",
                                        "`/about`",
                                        "نمایش اطلاعات نسخه سیستم، مدل فعال و وضعیت پلتفرم",
                                        "/about"
                                ]
                        ]
                },
                "codeSnippets": [
                        {
                                "title": "نمونه استفاده از دستور رسمی و کانتکست",
                                "language": "text",
                                "code": "/settings\nلطفا بخش Custom Instructions را با متدولوژی Staff Engineer بازبینی و تنظیم کن."
                        }
                ]
        },
        {
                "id": "canvas-workspace-and-files",
                "title": "۳. محیط کار Canvas، مدیریت اسناد و تحلیل داده (Workspace & Data)",
                "lead": "محیط Canvas یک ویرایشگر دوپنجره‌ای فوق‌العاده برای همکاری تعاملی روی کدها، مقالات طولانی و تحلیل فایل‌های اکسل و دیتابیس است.",
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "نمونه پرامپت"
                        ],
                        "rows": [
                                [
                                        "8",
                                        "`/canvas`",
                                        "باز کردن محیط ویرایشگر تعاملی دوپنجره‌ای Canvas برای کد و داکیومنت",
                                        "/canvas build a scalable TypeScript SaaS boilerplate"
                                ],
                                [
                                        "9",
                                        "`/update`",
                                        "اعمال تغییرات و بازنویسی ساختاری روی کل سند فعال در Canvas",
                                        "/update rewrite this entire document in APA style format"
                                ],
                                [
                                        "10",
                                        "`/comment`",
                                        "تحلیل سند و افزودن کامنت‌های توضیحی و مستندات درون‌خطی",
                                        "/comment add detailed inline documentation to all helper functions"
                                ],
                                [
                                        "11",
                                        "`/read`",
                                        "اسکن و خواندن فایل‌ها، اسناد PDF یا دیتابیس‌های متصل به گفتگو",
                                        "/read parse this quarterly financial PDF and extract all tables"
                                ],
                                [
                                        "12",
                                        "`/summarize`",
                                        "استخراج خلاصه تحلیلی فشرده و نکات کلیدی سند یا متن طولانی",
                                        "/summarize distill this 40-page whitepaper into 5 actionable insights"
                                ],
                                [
                                        "13",
                                        "`/extract`",
                                        "استخراج داده‌های ساختاریافته، جداول، آدرس‌ها یا ارقام از متن",
                                        "/extract pull all email addresses, company names, and LinkedIn URLs"
                                ],
                                [
                                        "14",
                                        "`/table`",
                                        "تبدیل داده‌های متنی به جدول تمیز مارک‌داون یا فرمت CSV",
                                        "/table format this competitive benchmark comparison as a table"
                                ],
                                [
                                        "15",
                                        "`/pdf`",
                                        "تحلیل عمیق فایل‌های PDF چندصفحه‌ای، قراردادها و گزارش‌ها",
                                        "/pdf analyze this contract and flag liability clauses"
                                ],
                                [
                                        "16",
                                        "`/docx`",
                                        "تولید یا ویرایش متون متناسب با فرمت‌بندی استاندارد Word",
                                        "/docx generate a formal software license agreement template"
                                ],
                                [
                                        "17",
                                        "`/csv`",
                                        "تولید و ساختاردهی داده‌ها با فرمت استاندارد مقادیر جداشده با کاما (CSV)",
                                        "/csv export product inventory with SKUs and prices"
                                ],
                                [
                                        "18",
                                        "`/excel`",
                                        "طراحی ساختار شیت اکسل، فرمول‌های محاسبه و توابع مالی",
                                        "/excel generate dynamic formulas for CAC and LTV cohorts"
                                ],
                                [
                                        "19",
                                        "`/chart`",
                                        "تولید نمودارها و دیاگرام‌های آماری تصویری یا ساختار کد Mermaid",
                                        "/chart create a funnel conversion chart for marketing channels"
                                ]
                        ]
                },
                "callout": {
                        "type": "info",
                        "title": "قدرت تحلیل اسناد",
                        "text": "ترکیب دستورات /pdf یا /read همراه با /table به شما امکان می‌ده ظرف چند ثانیه گزارش‌های مالی صد صفحه‌ای رو به جداول مقایسه‌ای تر و تمیز تبدیل کنید."
                }
        },
        {
                "id": "commercial-product-showcase",
                "title": "۴. شورت‌کدهای عکاسی تجاری، تبلیغات بیلبوردی و پروداکت شوکیس (۱۵۰ دستور)",
                "lead": "مجموعه بی‌نظیر ۱۵۰ شورت‌کد اختصاصی برای طراحی کمپین‌های تبلیغاتی، بیلبوردهای سه‌بعدی شهری، استوری‌های فروشگاهی و پروداکت شات‌های استودیویی های‌اند.",
                "paragraphs": [
                        "کافیه عکس محصول خودت رو در چت آپلود کنی، یک یا چند مورد از این شورت‌کدها رو در پرامپت قرار بدی و جزییات رنگ، زاویه یا نور دلخواهت رو اضافه کنی:",
                        "نکته تکمیلی: بعد از ساخت عکس رفرنس، می‌تونی با استفاده از [آموزش جامع تبدیل عکس به ویدیو با هوش مصنوعی (۱۰۰ پرامپت سینمایی)](/blog/ai-image-to-video-cinematic-prompts/) تصاویر محصولت رو به تیزرهای هالیوودی و بیلبوردهای ۳D متحرک تبدیل کنی."
                ],
                "image": {
                        "src": "/images/blog/chatgpt-image-generation-modes.webp",
                        "alt": "مجموعه استایل‌های بصری رندر محصول، بیلبوردهای سه‌بعدی و عکاسی استودیویی با هوش مصنوعی",
                        "caption": "نمونه خروجی‌های بصری ایجادشده با کدهای شورت‌کات عکاسی، بیلبوردهای سه‌بعدی و استایل‌های استودیویی"
                },
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "مورد استفاده / مثال"
                        ],
                        "rows": [
                                [
                                        "95",
                                        "`/3dbillboard`",
                                        "شبیه‌سازی بیلبورد ۳ بعدی شهری با افکت بیرون‌زدگی سوژه از قاب",
                                        "/3dbillboard"
                                ],
                                [
                                        "96",
                                        "`/cornerbillboard`",
                                        "تبلیغ سه‌بعدی آنامورفیک متقاطع بر روی نبش و گوشه برج تجاری",
                                        "/cornerbillboard"
                                ],
                                [
                                        "97",
                                        "`/digitalbillboard`",
                                        "کمپین تبلیغاتی معرفی محصول روی نمایشگر غول‌پیکر LED دیجیتال شهری",
                                        "/digitalbillboard"
                                ],
                                [
                                        "98",
                                        "`/highwaybillboard`",
                                        "بیلبورد تبلیغاتی افقی غول‌پیکر کنار اتوبان با نورپردازی طبیعی",
                                        "/highwaybillboard"
                                ],
                                [
                                        "99",
                                        "`/rooftopbillboard`",
                                        "تابلوی تبلیغاتی بزرگ بام ساختمان‌ها بر فراز خط افق کلان‌شهر",
                                        "/rooftopbillboard"
                                ],
                                [
                                        "100",
                                        "`/busstopad`",
                                        "موکاپ پوستر تبلیغاتی لایت‌باکس داخل ایستگاه اتوبوس شهری",
                                        "/busstopad"
                                ],
                                [
                                        "101",
                                        "`/subwayad`",
                                        "تابلوی تبلیغاتی دیواری نورانی داخل سالن ایستگاه مترو",
                                        "/subwayad"
                                ],
                                [
                                        "102",
                                        "`/buildingwrap`",
                                        "Campaign covering a building’s exterior.",
                                        "/buildingwrap"
                                ],
                                [
                                        "103",
                                        "`/streetposter`",
                                        "پوسترهای تبلیغاتی چاپ‌شده چسبانده‌شده بر دیوارهای خیابان شهری",
                                        "/streetposter"
                                ],
                                [
                                        "104",
                                        "`/truckwrap`",
                                        "طراحی استیکر و کاور تبلیغاتی کامل بدنه کامیون تجاری در حال تردد",
                                        "/truckwrap"
                                ],
                                [
                                        "105",
                                        "`/metaads`",
                                        "طراحی بنر تبلیغاتی استاندارد فید اینستاگرام و فیسبوک با فضای CTA",
                                        "/metaads"
                                ],
                                [
                                        "106",
                                        "`/storyad`",
                                        "طراحی تبلیغ استوری عمودی (۹:۱۶) بهینه‌شده برای اینستاگرام و تیک‌تاک",
                                        "/storyad"
                                ],
                                [
                                        "107",
                                        "`/reelcover`",
                                        "طراحی کاور جذاب و پرکلیک برای ویدیوهای ریلز با کنتراست بالا",
                                        "/reelcover"
                                ],
                                [
                                        "108",
                                        "`/carouselcover`",
                                        "اسلاید قلاب کاور اول پست اسلایدی اینستاگرام برای توقف اسکرول",
                                        "/carouselcover"
                                ],
                                [
                                        "109",
                                        "`/carouselslide`",
                                        "اسلایدهای میانی پست کاروسل با هویت بصری یکدست و هارمونیک",
                                        "/carouselslide"
                                ],
                                [
                                        "110",
                                        "`/productlaunch`",
                                        "بنر رونمایی محصول جدید با افکت‌های نوری هیجان‌انگیز و پرزنت لوکس",
                                        "/productlaunch"
                                ],
                                [
                                        "111",
                                        "`/salead`",
                                        "بنر تبلیغاتی حراج و جشنواره فروش با تایپوگرافی آفر تخفیف",
                                        "/salead"
                                ],
                                [
                                        "112",
                                        "`/pricead`",
                                        "بنر فروش مستقیم با تمرکز بر برچسب قیمت رقابتی و کال‌تواکشن",
                                        "/pricead"
                                ],
                                [
                                        "113",
                                        "`/retargetingad`",
                                        "بنر یادآوری و ری‌تارگتینگ برای مخاطبانی که محصول را قبلاً دیده‌اند",
                                        "/retargetingad"
                                ],
                                [
                                        "114",
                                        "`/collectionad`",
                                        "پرزنت همزمان کالکشن کامل محصولات در یک قاب هماهنگ و ست",
                                        "/collectionad"
                                ],
                                [
                                        "115",
                                        "`/showcase`",
                                        "عکاسی استودیویی پرمیوم محصول با نورهای کنترل‌شده و بازتاب ملایم",
                                        "/showcase"
                                ],
                                [
                                        "116",
                                        "`/heroshot`",
                                        "شات هیرو اصلی محصول با تسلط بصری کامل و تاثیرگذاری بالا",
                                        "/heroshot"
                                ],
                                [
                                        "117",
                                        "`/pedestal`",
                                        "نمایش محصول روی پدیوم و استند سنگی دیزاین‌شده با متریال لوکس",
                                        "/pedestal"
                                ],
                                [
                                        "118",
                                        "`/floatingproduct`",
                                        "معلق بودن طبیعی محصول در فضا با تعادل نوری در تمام جهات",
                                        "/floatingproduct"
                                ],
                                [
                                        "119",
                                        "`/glassdisplay`",
                                        "پرزنت محصول درون ویترین شیشه‌ای لوکس با بازتاب‌های کریستالی",
                                        "/glassdisplay"
                                ],
                                [
                                        "120",
                                        "`/museumdisplay`",
                                        "پرزنت محصول در فضای گالری و موزه با نورپردازی متمرکز هنری",
                                        "/museumdisplay"
                                ],
                                [
                                        "121",
                                        "`/luxuryshowcase`",
                                        "تاکید بر متریال‌های اشرافی، فلزات براق و نورپردازی لوکس",
                                        "/luxuryshowcase"
                                ],
                                [
                                        "122",
                                        "`/minimalshowcase`",
                                        "چیدمان پروداکت خلوت و مدرن با فضای خالی فراوان جهت تایپوگرافی",
                                        "/minimalshowcase"
                                ],
                                [
                                        "123",
                                        "`/darkshowcase`",
                                        "استودیوی بلک‌باکس تیره با نورهای خطی کنترل‌شده روی لبه‌های محصول",
                                        "/darkshowcase"
                                ],
                                [
                                        "124",
                                        "`/whiteshowcase`",
                                        "استودیوی سفید یکدست و روشن با انعکاس‌های کریستالی محو کف",
                                        "/whiteshowcase"
                                ],
                                [
                                        "125",
                                        "`/360view`",
                                        "شیت عکاسی چندزاویه‌ای از تمام جهات و زوایای محصول",
                                        "/360view"
                                ],
                                [
                                        "126",
                                        "`/frontview`",
                                        "نمای مستقیم روبه‌رو (Front View) با تقارن کامل زاویه دید",
                                        "/frontview"
                                ],
                                [
                                        "127",
                                        "`/backview`",
                                        "نمای پشت محصول (Rear View) با فوکوس روی جزئیات پنل عقب",
                                        "/backview"
                                ],
                                [
                                        "128",
                                        "`/sideview`",
                                        "نمای نیم‌رخ و زاویه جانبی ۹۰ درجه محصول (Side Profile)",
                                        "/sideview"
                                ],
                                [
                                        "129",
                                        "`/topview`",
                                        "عکاسی عمود از بالا (Top-down Flatlay) با زاویه ۹۰ درجه",
                                        "/topview"
                                ],
                                [
                                        "130",
                                        "`/threequarter`",
                                        "زاویه سه‌رخ ۴۵ درجه محصول (Three-Quarter) برای نمایش ابعاد",
                                        "/threequarter"
                                ],
                                [
                                        "131",
                                        "`/macrodetail`",
                                        "کلوزآپ ماکرو از ظرافت دوخت، لوگو و متریال تشکیل‌دهنده",
                                        "/macrodetail"
                                ],
                                [
                                        "132",
                                        "`/xray`",
                                        "نمای شفاف اشعه ایکس از اجزا و بردهای الکترونیکی داخلی محصول",
                                        "/xray"
                                ],
                                [
                                        "133",
                                        "`/cutaway`",
                                        "نمای کات‌اوت کانسپچوال با برش بخشی از پوسته برای دیدن درون",
                                        "/cutaway"
                                ],
                                [
                                        "134",
                                        "`/explodedview`",
                                        "نمای انفجاری (Exploded View) با تفکیک شناور تمام قطعات در فضا",
                                        "/explodedview"
                                ],
                                [
                                        "135",
                                        "`/packshot`",
                                        "عکاسی پَک‌شات استاندارد صنعتی محصول بدون المان مزاحم",
                                        "/packshot"
                                ],
                                [
                                        "136",
                                        "`/catalog`",
                                        "عکس استاندارد کاتالوگ با نور و کادربندی یکدست برای محصولات",
                                        "/catalog"
                                ],
                                [
                                        "137",
                                        "`/ecommerce`",
                                        "عکاسی فروشگاهی تمیز محصول با پس‌زمینه شفاف جهت فروشگاه اینترنتی",
                                        "/ecommerce"
                                ],
                                [
                                        "138",
                                        "`/flatlay`",
                                        "چیدمان فلت‌لی المان‌ها روی سطح با عکاسی عمود از بالا",
                                        "/flatlay"
                                ],
                                [
                                        "139",
                                        "`/productinhand`",
                                        "نمایش در دست گرفتن طبیعی محصول توسط انسان برای حس مقیاس",
                                        "/productinhand"
                                ],
                                [
                                        "140",
                                        "`/lifestyle`",
                                        "عکاسی لایف‌استایل در محیط واقعی و روزمره زندگی",
                                        "/lifestyle"
                                ],
                                [
                                        "141",
                                        "`/editorial`",
                                        "عکاسی ادیتوریال هنری مناسب ژورنال‌ها و مجلات مد و دیزاین",
                                        "/editorial"
                                ],
                                [
                                        "142",
                                        "`/stilllife`",
                                        "طبیعت بی‌جان تجاری (Still Life) با اکسسوری‌ها و نورپردازی لطیف",
                                        "/stilllife"
                                ],
                                [
                                        "143",
                                        "`/texturefocus`",
                                        "نورپردازی زاویه‌دار برای برجسته‌سازی بافت، تاروپود و زبری متریال",
                                        "/texturefocus"
                                ],
                                [
                                        "144",
                                        "`/scalecontext`",
                                        "قرار دادن محصول در کنار اشیای آشنا برای درک اندازه و مقیاس واقعی",
                                        "/scalecontext"
                                ],
                                [
                                        "145",
                                        "`/whitebackground`",
                                        "پس‌زمینه سفید یکدست ایزوله استودیویی بدون سایه اضافه",
                                        "/whitebackground"
                                ],
                                [
                                        "146",
                                        "`/blackbackground`",
                                        "پس‌زمینه مشکی عمیق با نورهای متمرکز روی لبه‌های محصول",
                                        "/blackbackground"
                                ],
                                [
                                        "147",
                                        "`/brandbackground`",
                                        "پس‌زمینه با رنگ‌های سازمانی و پالت اختصاصی برند شما",
                                        "/brandbackground"
                                ],
                                [
                                        "148",
                                        "`/gradientbackground`",
                                        "بک‌دراپ گرادیانت نرم و ملایم رنگی با انتقال لطیف نور",
                                        "/gradientbackground"
                                ],
                                [
                                        "149",
                                        "`/greenscreen`",
                                        "پس‌زمینه پرده سبز یکنواخت (Chroma Key) جهت حذف و جایگزینی بعدی",
                                        "/greenscreen"
                                ],
                                [
                                        "150",
                                        "`/studiobackground`",
                                        "محیط استودیوی حرفه‌ای با پرده اینفینیتی بدون درز و خط اتصال",
                                        "/studiobackground"
                                ],
                                [
                                        "151",
                                        "`/luxuryinterior`",
                                        "فضای داخلی و دکوراسیون شیک و لوکس مدرن در پیرامون محصول",
                                        "/luxuryinterior"
                                ],
                                [
                                        "152",
                                        "`/naturebackground`",
                                        "محیط طبیعت سرسبز، ساحلی یا جنگلی در نور طبیعی روز",
                                        "/naturebackground"
                                ],
                                [
                                        "153",
                                        "`/urbanbackground`",
                                        "فضای مدرن خیابان‌های شهری با معماری بتنی و برج‌های شیشه‌ای",
                                        "/urbanbackground"
                                ],
                                [
                                        "154",
                                        "`/futuristicbackground`",
                                        "محیط فیوچریستیک آینده‌نگرانه با نورهای نئونی و المان‌های سایبرپانک",
                                        "/futuristicbackground"
                                ],
                                [
                                        "155",
                                        "`/softlight`",
                                        "نورپردازی سافت‌لایت بسیار نرم با سایه‌های محو و لطیف",
                                        "/softlight"
                                ],
                                [
                                        "156",
                                        "`/hardlight`",
                                        "نورپردازی هاردلایت تند با سایه‌های کاملاً شارپ و کنتراست بالا",
                                        "/hardlight"
                                ],
                                [
                                        "157",
                                        "`/goldenhour`",
                                        "نور طلایی گلدن‌اور غروب و طلوع خورشید با تناژ گرم و دلنشین",
                                        "/goldenhour"
                                ],
                                [
                                        "158",
                                        "`/bluehour`",
                                        "نور سرمه‌ای و گرگ‌ومیش بلوهاور پس از غروب آفتاب",
                                        "/bluehour"
                                ],
                                [
                                        "159",
                                        "`/windowlight`",
                                        "نور طبیعی تابیده‌شده از پنجره با سایه‌روشن‌های لطیف پرده",
                                        "/windowlight"
                                ],
                                [
                                        "160",
                                        "`/rimlight`",
                                        "نور ریم‌لایت درخشان روی خطوط محیطی و لبه‌های بیرونی سوژه",
                                        "/rimlight"
                                ],
                                [
                                        "161",
                                        "`/spotlight`",
                                        "اسپات‌لایت متمرکز نوری برای جداسازی کامل سوژه از تاریکی محیط",
                                        "/spotlight"
                                ],
                                [
                                        "162",
                                        "`/neonlight`",
                                        "تابش نئونی با رنگ‌های سیان، صورتی و بنفش و بازتاب‌های درخشان",
                                        "/neonlight"
                                ],
                                [
                                        "163",
                                        "`/backlight`",
                                        "نور بک‌لایت از پشت سر سوژه با هاله نوری درخشان در اطراف",
                                        "/backlight"
                                ],
                                [
                                        "164",
                                        "`/highkey`",
                                        "نورپردازی های‌کی بسیار روشن، پرانرژی و شفاف بدون سایه‌های تیره",
                                        "/highkey"
                                ],
                                [
                                        "165",
                                        "`/brandpalette`",
                                        "اعمال پالت رنگی سازمانی با حفظ تعادل و هارمونی المان‌ها",
                                        "/brandpalette"
                                ],
                                [
                                        "166",
                                        "`/beigeluxury`",
                                        "پالت نود لاکچری شامل رنگ‌های کرم، بژ، شامپاینی و خاکستری گرم",
                                        "/beigeluxury"
                                ],
                                [
                                        "167",
                                        "`/navypremium`",
                                        "رنگ سرمه‌ای سلطنتی با هایلایت‌های نقره‌ای یا طلایی براق",
                                        "/navypremium"
                                ],
                                [
                                        "168",
                                        "`/monochrome`",
                                        "طراحی مونوکروم با تنالیته‌های مختلف از یک خانواده رنگی واحد",
                                        "/monochrome"
                                ],
                                [
                                        "169",
                                        "`/blackandwhite`",
                                        "عکاسی سیاه‌وسفید فاخر با کنتراست تونال غنی و بافت‌های عمیق",
                                        "/blackandwhite"
                                ],
                                [
                                        "170",
                                        "`/pastel`",
                                        "پالت رنگ‌های پاستلی ملایم، رویایی و دلنشین",
                                        "/pastel"
                                ],
                                [
                                        "171",
                                        "`/vibrant`",
                                        "رنگ‌های شاداب، زنده، غنی و پرانرژی با اشباع کنترل‌شده",
                                        "/vibrant"
                                ],
                                [
                                        "172",
                                        "`/muted`",
                                        "پالت رنگی میوت‌شده و کم‌اشباع برای حس مینیمال و آرام",
                                        "/muted"
                                ],
                                [
                                        "173",
                                        "`/cooltone`",
                                        "اتمسفر رنگی سرد با ته‌رنگ‌های آبی، نقره‌ای و یخی",
                                        "/cooltone"
                                ],
                                [
                                        "174",
                                        "`/warmtone`",
                                        "اتمسفر رنگی گرم با ته‌رنگ‌های کهربایی، طلایی و آجری",
                                        "/warmtone"
                                ],
                                [
                                        "175",
                                        "`/chrome`",
                                        "متریال کروم فوق‌براق و صیقلی با بازتاب‌های آینه‌ای محیط",
                                        "/chrome"
                                ],
                                [
                                        "176",
                                        "`/liquidmetal`",
                                        "فلز مایع مذاب با سطوح مواج و فرم‌های ارگانیک درخشان",
                                        "/liquidmetal"
                                ],
                                [
                                        "177",
                                        "`/glass`",
                                        "شیشه کریستالی فوق‌شفاف با انکسار نوری دقیق و بازتاب‌های زنده",
                                        "/glass"
                                ],
                                [
                                        "178",
                                        "`/frostedglass`",
                                        "شیشه مات سندبلاست‌شده با عبور نور ملایم و بافت مخملی",
                                        "/frostedglass"
                                ],
                                [
                                        "179",
                                        "`/holographic`",
                                        "افکت هولوگرافیک رنگین‌کمانی با تغییر رنگ متناسب با زاویه دید",
                                        "/holographic"
                                ],
                                [
                                        "180",
                                        "`/iridescent`",
                                        "درخشش مرواریدی و صدف‌گون با هایلایت‌های پاستلی ملایم",
                                        "/iridescent"
                                ],
                                [
                                        "181",
                                        "`/matte`",
                                        "پوشش مات مخملی غیربازتابنده با حس لمسی لطیف و مدرن",
                                        "/matte"
                                ],
                                [
                                        "182",
                                        "`/metallic`",
                                        "متریال فلز خش‌دار برس‌خورده یا صیقلی‌شده تیتانیومی و آلومینیومی",
                                        "/metallic"
                                ],
                                [
                                        "183",
                                        "`/translucent`",
                                        "متریال نیمه‌شفاف با نمایش مبهم و زیبای لایه‌های زیرین",
                                        "/translucent"
                                ],
                                [
                                        "184",
                                        "`/clayrender`",
                                        "رندر سفالی مات سه‌بعدی برای نمایش خالص فرم و هندسه محصول",
                                        "/clayrender"
                                ],
                                [
                                        "185",
                                        "`/watersplash`",
                                        "پاشش و مجسمه‌سازی قطرات کریستالی آب در پیرامون محصول",
                                        "/watersplash"
                                ],
                                [
                                        "186",
                                        "`/underwater`",
                                        "صحنه هنری عکاسی زیر آب با پرتوهای نور خورشید و حباب‌های هوا",
                                        "/underwater"
                                ],
                                [
                                        "187",
                                        "`/smokereveal`",
                                        "ظهور دراماتیک محصول از میان دود یا مه نرم و سینمایی",
                                        "/smokereveal"
                                ],
                                [
                                        "188",
                                        "`/powderburst`",
                                        "انفجار پودرهای رنگی هولی در اطراف سوژه با انرژی بصری بالا",
                                        "/powderburst"
                                ],
                                [
                                        "189",
                                        "`/particletrail`",
                                        "مسیر ذرات ریز درخشان معلق در فضا که امتداد حرکت را نشان می‌دهند",
                                        "/particletrail"
                                ],
                                [
                                        "190",
                                        "`/lighttrails`",
                                        "خطوط نوری مواج و کشیده لایت‌بینگ در پیرامون محصول",
                                        "/lighttrails"
                                ],
                                [
                                        "191",
                                        "`/levitation`",
                                        "شناوری معلق چندین المان و محصول در یک ترکیب‌بندی متوازن",
                                        "/levitation"
                                ],
                                [
                                        "192",
                                        "`/gravitydefying`",
                                        "تعادل سورئال و ضدجاذبه محصول روی لبه‌های باریک یا سنگ‌ها",
                                        "/gravitydefying"
                                ],
                                [
                                        "193",
                                        "`/motionfreeze`",
                                        "فریز کردن فوق‌شارپ لحظه حرکت دینامیک بدون کوچک‌ترین تاری",
                                        "/motionfreeze"
                                ],
                                [
                                        "194",
                                        "`/speedblur`",
                                        "سوژه اصلی فوق‌شارپ با موشن بلور هدایت‌شده در پس‌زمینه",
                                        "/speedblur"
                                ],
                                [
                                        "195",
                                        "`/packaging`",
                                        "طراحی کانسپت پکیجینگ و بسته‌بندی پریمیوم محصول",
                                        "/packaging"
                                ],
                                [
                                        "196",
                                        "`/boxmockup`",
                                        "موکاپ جعبه بسته‌بندی هاردباکس با چاپ برجسته دیزاین شما",
                                        "/boxmockup"
                                ],
                                [
                                        "197",
                                        "`/bottlemockup`",
                                        "موکاپ لیبل شیشه‌ای یا قوطی نوشیدنی با قطرات شبنم",
                                        "/bottlemockup"
                                ],
                                [
                                        "198",
                                        "`/pouchmockup`",
                                        "طراحی بسته‌بندی پاکت زیپ‌دار کاغذی یا متالایز قهوه و خوراکی",
                                        "/pouchmockup"
                                ],
                                [
                                        "199",
                                        "`/bagmockup`",
                                        "موکاپ ساک دستی کاغذی خرید لوکس با بند نخی و لوگوی طلایی",
                                        "/bagmockup"
                                ],
                                [
                                        "200",
                                        "`/labelmockup`",
                                        "نمایش لیبل روی ظروف و قوطی‌های متناسب با محصول",
                                        "/labelmockup"
                                ],
                                [
                                        "201",
                                        "`/unboxing`",
                                        "چیدمان صحنه آنباکسینگ با جعبه بازشده و متعلقات محصول",
                                        "/unboxing"
                                ],
                                [
                                        "202",
                                        "`/giftset`",
                                        "پکیج هدیه و گیفت‌ست با چیدمان منظم محصولات در جعبه کادویی",
                                        "/giftset"
                                ],
                                [
                                        "203",
                                        "`/embossedlogo`",
                                        "موکاپ لوگوی برجسته دیباس یا امباس روی چرم، مقوا یا فلز",
                                        "/embossedlogo"
                                ],
                                [
                                        "204",
                                        "`/foilprint`",
                                        "چاپ فویل متالیک طلاکوب و نقره‌کوب روی سطوح مات",
                                        "/foilprint"
                                ],
                                [
                                        "205",
                                        "`/typographyposter`",
                                        "پوستر تایپوگرافی مدرن با فونت‌های بولد و چیدمان خلاقانه کلمات",
                                        "/typographyposter"
                                ],
                                [
                                        "206",
                                        "`/headlinead`",
                                        "بنر تبلیغاتی مینیمال با محوریت یک تیتر شاهکار و گیرا",
                                        "/headlinead"
                                ],
                                [
                                        "207",
                                        "`/minimalposter`",
                                        "پوستر مینیمال با عناصر بصری محدود و پیام شفاف و مستقیم",
                                        "/minimalposter"
                                ],
                                [
                                        "208",
                                        "`/boldposter`",
                                        "تایپوگرافی فونت درشت با کنتراست رنگی فوق‌العاده قوی",
                                        "/boldposter"
                                ],
                                [
                                        "209",
                                        "`/splitlayout`",
                                        "طراحی اسپلیت دوسویه با تقسیم متعادل ۵۰-۵۰ متن و تصویر",
                                        "/splitlayout"
                                ],
                                [
                                        "210",
                                        "`/comparisonlayout`",
                                        "لی‌اوت مقایسه دوبه‌دو (قبل/بعد) با خطوط تفکیک‌کننده تمیز",
                                        "/comparisonlayout"
                                ],
                                [
                                        "211",
                                        "`/featurecallouts`",
                                        "بنر اینفوگرافیک پروداکت با خطوط راهنما و کال‌اوت ویژگی‌ها",
                                        "/featurecallouts"
                                ],
                                [
                                        "212",
                                        "`/testimonialad`",
                                        "بنر سوشال‌پروف و رضایت مشتری با نقل‌قول، عکس و ستاره‌ها",
                                        "/testimonialad"
                                ],
                                [
                                        "213",
                                        "`/magazinecover`",
                                        "ترکیب‌بندی ژورنالیستی مشابه جلد مجلات بین‌المللی تایم و ووگ",
                                        "/magazinecover"
                                ],
                                [
                                        "214",
                                        "`/campaignkeyvisual`",
                                        "Main visual establishing a campaign’s look.",
                                        "/campaignkeyvisual"
                                ],
                                [
                                        "215",
                                        "`/enhance`",
                                        "بهبود همه‌جانبه شفافیت، تنظیم داینامیک نور و بالانس رنگ تصویر",
                                        "/enhance"
                                ],
                                [
                                        "216",
                                        "`/denoise`",
                                        "حذف نویزهای دیجیتال، گرین نامطلوب و خطاهای پیکسلی تصویر",
                                        "/denoise"
                                ],
                                [
                                        "217",
                                        "`/sharpen`",
                                        "افزایش شارپنس لبه‌ها، وضوح بافت‌ها و تفکیک جزئیات ریز",
                                        "/sharpen"
                                ],
                                [
                                        "218",
                                        "`/whitebalance`",
                                        "تنظیم وایت‌بالانس و اصلاح ته‌رنگ‌های نامطلوب زردی یا آبی عکس",
                                        "/whitebalance"
                                ],
                                [
                                        "219",
                                        "`/exposurefix`",
                                        "اصلاح اکسپوژر و تنظیم اکسپوز در تصاویر کم‌نور یا سوخته",
                                        "/exposurefix"
                                ],
                                [
                                        "220",
                                        "`/colorcorrect`",
                                        "کالرکارکشن حرفه‌ای برای برگرداندن رنگ پوست و محیط به حالت طبیعی",
                                        "/colorcorrect"
                                ],
                                [
                                        "221",
                                        "`/removetext`",
                                        "حذف هوشمند نوشته‌ها، واترمارک‌ها و تایپوگرافی اضافی از روی تصویر",
                                        "/removetext"
                                ],
                                [
                                        "222",
                                        "`/removeobject`",
                                        "حذف بدون رد اشیا، افراد یا موانع اضافی و بازسازی پس‌زمینه",
                                        "/removeobject"
                                ],
                                [
                                        "223",
                                        "`/replacebackground`",
                                        "تغییر و جایگزینی پس‌زمینه با لوکیشن و دکور درخواستی شما",
                                        "/replacebackground"
                                ],
                                [
                                        "224",
                                        "`/recolor`",
                                        "تغییر رنگ انتخابی لباس، محصول یا هر شیء با حفظ بافت و نور",
                                        "/recolor"
                                ],
                                [
                                        "225",
                                        "`/zoomout`",
                                        "زوم‌اوت هوشمند و گسترش فضای اطراف سوژه در تمام جهات",
                                        "/zoomout"
                                ],
                                [
                                        "226",
                                        "`/extendhorizontal`",
                                        "گسترش افقی بوم به سمت چپ و راست برای تبدیل به تصویر عریض",
                                        "/extendhorizontal"
                                ],
                                [
                                        "227",
                                        "`/extendvertical`",
                                        "گسترش بوم تصویر از بالا و پایین با حفظ پیوستگی عناصر",
                                        "/extendvertical"
                                ],
                                [
                                        "228",
                                        "`/fullproduct`",
                                        "بازسازی کادربندی و بازتولید تصویر کامل و بی‌نقص محصول",
                                        "/fullproduct"
                                ],
                                [
                                        "229",
                                        "`/centercomposition`",
                                        "قرار دادن سوژه اصلی دقیقاً در مرکز کادر با پرسپکتیو متقارن",
                                        "/centercomposition"
                                ],
                                [
                                        "230",
                                        "`/negativespace`",
                                        "ایجاد فضای منفی و خالی باز برای تایپوگرافی، تیتر و متن تبلیغاتی",
                                        "/negativespace"
                                ],
                                [
                                        "231",
                                        "`/symmetry`",
                                        "ترکیب‌بندی متعادل و قرینه برای جلوه بصری چشم‌نواز و آرامش‌بخش",
                                        "/symmetry"
                                ],
                                [
                                        "232",
                                        "`/portraitformat`",
                                        "تنظیم و بهینه‌سازی کادر برای فرمت عمودی (مناسب ریلز و استوری)",
                                        "/portraitformat"
                                ],
                                [
                                        "233",
                                        "`/landscapeformat`",
                                        "تنظیم و بهینه‌سازی کادر برای فرمت افقی عریض و بنرهای وب",
                                        "/landscapeformat"
                                ],
                                [
                                        "234",
                                        "`/squareformat`",
                                        "تنظیم و بهینه‌سازی ترکیب‌بندی برای فرمت استاندارد مربعی (1:1)",
                                        "/squareformat"
                                ],
                                [
                                        "235",
                                        "`/3drender`",
                                        "رندر سه‌بعدی پروداکت با متریال‌های براق، شیدرهای رئال و نور نرم",
                                        "/3drender"
                                ],
                                [
                                        "236",
                                        "`/claystyle`",
                                        "تصویرسازی خمیری و سفالی با بافت‌های مات لطیف و رنگ‌های پاستلی",
                                        "/claystyle"
                                ],
                                [
                                        "237",
                                        "`/papercraft`",
                                        "طراحی چندلایه مقوایی و کاغذبرش با سایه‌های طبیعی عمق‌دار",
                                        "/papercraft"
                                ],
                                [
                                        "238",
                                        "`/origami`",
                                        "سبک اوریگامی و کاغذ تاشده با خطوط هندسی دقیق و مینیمال",
                                        "/origami"
                                ],
                                [
                                        "239",
                                        "`/isometric`",
                                        "تصویرسازی ایزومتریک با زاویه ۳۰ درجه سه‌بعدی و جزئیات دقیق",
                                        "/isometric"
                                ],
                                [
                                        "240",
                                        "`/lineart`",
                                        "تصویرسازی خطی وکتور با خطوط محیطی یکدست، شفاف و مدرن",
                                        "/lineart"
                                ],
                                [
                                        "241",
                                        "`/pencilsketch`",
                                        "طراحی فیگوراتیو با مداد سیاه و هاشورهای دست‌کشیده کلاسیک",
                                        "/pencilsketch"
                                ],
                                [
                                        "242",
                                        "`/watercolor`",
                                        "نقاشی آبرنگ با پخش رنگ‌های ملایم، لکه‌های خیس و بافت کاغذ زبر",
                                        "/watercolor"
                                ],
                                [
                                        "243",
                                        "`/comicstyle`",
                                        "استایل کمیک‌بوک و رمان گرافیکی با خطوط ضخیم و بافت نقطه‌ای",
                                        "/comicstyle"
                                ],
                                [
                                        "244",
                                        "`/retroprint`",
                                        "پوستر چاپی وینتیج رترو با گرین دانه‌ریز و رنگ‌های تفکیک‌شده",
                                        "/retroprint"
                                ]
                        ]
                },
                "callout": {
                        "type": "quote",
                        "title": "فرمول طلایی پرامپت عکاسی محصول",
                        "text": "[عکس محصول آپلودشده] + /showcase + /luxuryshowcase + /rimlight + Keep original product colors, portrait 4:5, no text."
                }
        },
        {
                "id": "camera-angles-and-cinema",
                "title": "۵. زوایا، لنزها و پرسپکتیو سینمایی عکاسی و تصویرسازی (۸۵ دستور)",
                "lead": "کدهای دقیق برای تعیین ارتفاع دوربین، فاصله کانونی لنزها، ترکیب‌بندی قاب و ایجاد اتمسفر سینمایی در تصاویر هوش مصنوعی.",
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "مورد استفاده / مثال"
                        ],
                        "rows": [
                                [
                                        "245",
                                        "`/lowangle`",
                                        "زاویه لو انجل (از پایین به بالا) برای القای قدرت، عظمت و تسلط سوژه",
                                        "/lowangle"
                                ],
                                [
                                        "246",
                                        "`/highangle`",
                                        "زاویه های انجل (از بالا به پایین) برای نمایش مقیاس و دید کلی کادر",
                                        "/highangle"
                                ],
                                [
                                        "247",
                                        "`/eyelevel`",
                                        "زاویه هم‌سطح چشم (Eye-Level) با پرسپکتیو کاملاً طبیعی و واقعی",
                                        "/eyelevel"
                                ],
                                [
                                        "248",
                                        "`/dutchangle`",
                                        "زاویه داچ انجل (کادر مورب) برای ایجاد هیجان، پویایی و انرژی بالا",
                                        "/dutchangle"
                                ],
                                [
                                        "249",
                                        "`/OTS`",
                                        "کادربندی از روی شانه (OTS) برای ایجاد عمق میدان و حس حضور در صحنه",
                                        "/OTS"
                                ],
                                [
                                        "250",
                                        "`/POV`",
                                        "دید اول شخص (POV) به گونه‌ای که مخاطب خود را درون صحنه حس کند",
                                        "/POV"
                                ],
                                [
                                        "251",
                                        "`/wormsview`",
                                        "نمای دید کرم (Worm's Eye) چسبیده به زمین با زاویه تند رو به آسمان",
                                        "/wormsview"
                                ],
                                [
                                        "252",
                                        "`/birdsview`",
                                        "نمای دید پرنده (Bird's Eye) با زاویه عمودی ۹۰ درجه مشرف به کل صحنه",
                                        "/birdsview"
                                ],
                                [
                                        "253",
                                        "`/droneview`",
                                        "شات هوایی پهپادی سینمایی با وسعت دید وسیع از محیط و مناظر",
                                        "/droneview"
                                ],
                                [
                                        "254",
                                        "`/closeup`",
                                        "کلوزآپ بسته با تمرکز شدید بر میمیک صورت، احساسات یا بافت محصول",
                                        "/closeup"
                                ],
                                [
                                        "255",
                                        "`/extremecloseup`",
                                        "اکستریم کلوزآپ ماکرو روی یک جزئیات خیره‌کننده مانند چشم یا بافت",
                                        "/extremecloseup"
                                ],
                                [
                                        "256",
                                        "`/mediumshot`",
                                        "نمای مدیوم شات (از کمر به بالا) ایده‌آل برای پرتره، تبلیغات و تعامل",
                                        "/mediumshot"
                                ],
                                [
                                        "257",
                                        "`/fullbody`",
                                        "نمای تمام‌قد (Full Shot) همراه با فضای تنفس کافی در اطراف کاراکتر",
                                        "/fullbody"
                                ],
                                [
                                        "258",
                                        "`/wideframe`",
                                        "نمای واید سینمایی برای نمایش همزمان سوژه و اتمسفر پیرامون",
                                        "/wideframe"
                                ],
                                [
                                        "259",
                                        "`/centerframe`",
                                        "تثبیت سوژه در مرکز تصویر برای خلق اثری شاخص، نمادین و پوستری",
                                        "/centerframe"
                                ],
                                [
                                        "260",
                                        "`/ruleofthirds`",
                                        "قانون یک‌سوم عکاسی برای ایجاد ترکیب‌بندی ژورنالیستی و جذاب",
                                        "/ruleofthirds"
                                ],
                                [
                                        "261",
                                        "`/foregroundframe`",
                                        "استفاده از المان‌های پیش‌زمینه تار (Foreground) برای ایجاد لایه‌های عمق",
                                        "/foregroundframe"
                                ],
                                [
                                        "262",
                                        "`/cinematic`",
                                        "فریم سینمایی فیلم هالیوودی با نورپردازی مهندسی‌شده و کالرگریدینگ",
                                        "/cinematic"
                                ],
                                [
                                        "263",
                                        "`/filmstill`",
                                        "حس فیلم داستانی آنالوگ همراه با نقص‌های طبیعی و گرین لطیف سینمایی",
                                        "/filmstill"
                                ],
                                [
                                        "264",
                                        "`/anamorphic`",
                                        "تصویر واید اسکرین آنامورفیک با خطوط نوری (Lens Flare) ظریف افقی",
                                        "/anamorphic"
                                ],
                                [
                                        "265",
                                        "`/imax`",
                                        "شات لارج‌فرمت با وضوح شگفت‌انگیز جزئیات و پرسپکتیو باصلابت",
                                        "/imax"
                                ],
                                [
                                        "266",
                                        "`/noir`",
                                        "اتمسفر نوآر سیاه و سفید رازآلود با سایه‌های کشیده و نورهای تیز",
                                        "/noir"
                                ],
                                [
                                        "267",
                                        "`/neonnoir`",
                                        "صحنه تاریک سینمایی با نورهای نئونی رنگارنگ و بازتاب‌های شبانه خیس",
                                        "/neonnoir"
                                ],
                                [
                                        "268",
                                        "`/vintagefilm`",
                                        "بافت فیلم نگاتیوی آنالوگ با گرین نرم، هلیشن نوری و رنگ‌های نوستالژیک",
                                        "/vintagefilm"
                                ],
                                [
                                        "269",
                                        "`/70scinema`",
                                        "عکاسی سینمایی گرم و بافت‌دار الهام‌گرفته از فیلم‌های دهه ۱۹۷۰",
                                        "/70scinema"
                                ],
                                [
                                        "270",
                                        "`/80saction`",
                                        "نورپردازی پرانرژی فیلم‌های اکشن بلاک‌باستر با کادربندی قهرمانانه",
                                        "/80saction"
                                ],
                                [
                                        "271",
                                        "`/indiefilm`",
                                        "سینمای مستقل واقع‌گرایانه با نورهای طبیعی روز و پلان‌های صمیمی",
                                        "/indiefilm"
                                ],
                                [
                                        "272",
                                        "`/silhouette`",
                                        "ضدنور و سیلوئت کامل سوژه در برابر پس‌زمینه درخشان آسمان یا نور",
                                        "/silhouette"
                                ],
                                [
                                        "273",
                                        "`/chiaroscuro`",
                                        "نورپردازی کیاروسکورو الهام‌گرفته از نقاشی‌های رنسانس رامبراند",
                                        "/chiaroscuro"
                                ],
                                [
                                        "274",
                                        "`/practicallight`",
                                        "استفاده از منابع نوری درون‌کادر (Practical Lights) مانند آباژور و نئون",
                                        "/practicallight"
                                ],
                                [
                                        "275",
                                        "`/producthero`",
                                        "قرار دادن محصول به عنوان قهرمان بلامنازع و کانون توجه اصلی کادر",
                                        "/producthero"
                                ],
                                [
                                        "276",
                                        "`/luxuryad`",
                                        "رویکرد تجاری پرمیوم و شیک با چیدمان حساب‌شده و جزئیات بی‌نقص",
                                        "/luxuryad"
                                ],
                                [
                                        "277",
                                        "`/applestyle`",
                                        "تبلیغات مینیمال با سلسله‌مراتب بصری پاکیزه و فضای تنفس گسترده",
                                        "/applestyle"
                                ],
                                [
                                        "278",
                                        "`/billboard`",
                                        "طراحی صحنه متناسب با یک کمپین تبلیغات محیطی و بیلبوردی اثرگذار",
                                        "/billboard"
                                ],
                                [
                                        "279",
                                        "`/editorialad`",
                                        "عکاسی ادیتوریال فشن مجلات ووگ با استایلینگ و پوزهای آوانگارد",
                                        "/editorialad"
                                ],
                                [
                                        "280",
                                        "`/beautyshot`",
                                        "شات هیرو پرچمدار با تاکید بر خطوط بدنه، ارگونومی و پرداخت متریال",
                                        "/beautyshot"
                                ],
                                [
                                        "281",
                                        "`/macroproduct`",
                                        "شات جزئیات ماکرو از دست‌ساز بودن، دوخت‌ها و ظرافت ساخت محصول",
                                        "/macroproduct"
                                ],
                                [
                                        "282",
                                        "`/freezeaction`",
                                        "فریز کردن لحظه حرکت سریع (آب، پرتاب، جهش) با شاتر اسپید بالا",
                                        "/freezeaction"
                                ],
                                [
                                        "283",
                                        "`/motionblur`",
                                        "موشن بلور حرکتی هدایت‌شده در پس‌زمینه حین شفاف ماندن سوژه اصلی",
                                        "/motionblur"
                                ],
                                [
                                        "284",
                                        "`/speedramp`",
                                        "حس بصری اکشن اسلوموشن با نمایش قطرات معلق و انرژی جنبشی بالا",
                                        "/speedramp"
                                ],
                                [
                                        "285",
                                        "`/midair`",
                                        "ثبت سوژه در اوج نقطه معلق بودن در فضا در یک وضعیت شگفت‌انگیز",
                                        "/midair"
                                ],
                                [
                                        "286",
                                        "`/impactframe`",
                                        "ثبت لحظه دقیق برخورد و انفجار پاشش ذرات با دینامیک بصری مهیج",
                                        "/impactframe"
                                ],
                                [
                                        "287",
                                        "`/windblown`",
                                        "شبیه‌سازی جریان باد ملایم برای حرکت مواج موها، پارچه لباس یا دود",
                                        "/windblown"
                                ],
                                [
                                        "288",
                                        "`/runningframe`",
                                        "پوز دویدن پویا با پرسپکتیو سینمایی و موشن بلور المان‌های محیطی",
                                        "/runningframe"
                                ],
                                [
                                        "289",
                                        "`/jumpcutframe`",
                                        "خلق موقعیت بصری غافلگیرکننده با تضاد خلاقانه المان‌ها در کادر",
                                        "/jumpcutframe"
                                ],
                                [
                                        "290",
                                        "`/collision`",
                                        "چیدمان همگرایی خطوط و عناصر صحنه به سمت نقطه ثقل طلایی کادر",
                                        "/collision"
                                ],
                                [
                                        "291",
                                        "`/chaosframe`",
                                        "ترکیب‌بندی پرانرژی و پرجزئیات شهری با لایه‌های متنوع رویدادها",
                                        "/chaosframe"
                                ],
                                [
                                        "292",
                                        "`/impossibleangle`",
                                        "پرسپکتیو سورئال و غیرممکن که در عکاسی عادی با دوربین فیزیکی میسر نیست",
                                        "/impossibleangle"
                                ],
                                [
                                        "293",
                                        "`/gravityoff`",
                                        "شناوری شناور و طبیعی اجسام و کاراکترها در وضعیت بی‌وزنی کامل",
                                        "/gravityoff"
                                ],
                                [
                                        "294",
                                        "`/giantobject`",
                                        "تبدیل یک شیء روزمره کوچک به سازه‌ای غول‌پیکر در مقیاس یک آسمان‌خراش",
                                        "/giantobject"
                                ],
                                [
                                        "295",
                                        "`/miniworld`",
                                        "خلق یک دنیای مینیاتوری شگفت‌انگیز درون یا در مجاورت سوژه اصلی",
                                        "/miniworld"
                                ],
                                [
                                        "296",
                                        "`/mirrorworld`",
                                        "خلق دنیای موازی آینه‌ای با منطق بصری متقارن و هوشمندانه",
                                        "/mirrorworld"
                                ],
                                [
                                        "297",
                                        "`/dreamlogic`",
                                        "فضای رویاگونه سورئال با هارمونی بصری منسجم و فرم‌های چشم‌نواز",
                                        "/dreamlogic"
                                ],
                                [
                                        "298",
                                        "`/infinite`",
                                        "تکرار بی‌نهایت و امتداد الگوهای بصری تا افق‌های دوردست کادر",
                                        "/infinite"
                                ],
                                [
                                        "299",
                                        "`/portal`",
                                        "طراحی درگاه نوری (Portal) متصل‌کننده دو بعد یا دو اقلیم کاملاً متفاوت",
                                        "/portal"
                                ],
                                [
                                        "300",
                                        "`/scaleillusion`",
                                        "دستکاری هوشمندانه پرسپکتیو برای القای اغراق‌آمیز مقیاس‌های کوچک و بزرگ",
                                        "/scaleillusion"
                                ],
                                [
                                        "301",
                                        "`/realityshift`",
                                        "ترکیب دو اقلیم متضاد (مانند کویر و اقیانوس) در یک فریم کاملاً واقع‌گرایانه",
                                        "/realityshift"
                                ],
                                [
                                        "302",
                                        "`/fashioneditorial`",
                                        "کادربندی های‌فشن با فیگورهای کاریزماتیک و استایلینگ ادیتوریال مجلات مد",
                                        "/fashioneditorial"
                                ],
                                [
                                        "303",
                                        "`/streetphoto`",
                                        "عکاسی خیابانی مستند بدون فیگورهای ساختگی با نور طبیعی شهری",
                                        "/streetphoto"
                                ],
                                [
                                        "304",
                                        "`/paparazzi`",
                                        "عکاسی پاپاراتزی سلبریتی‌ها با فلاش مستقیم و حس لحظه‌ای پویا",
                                        "/paparazzi"
                                ],
                                [
                                        "305",
                                        "`/polaroid`",
                                        "طعم خاطره‌انگیز عکس‌های پولاروید با کنتراست ملایم و حاشیه‌های نوستالژیک",
                                        "/polaroid"
                                ],
                                [
                                        "306",
                                        "`/35mm`",
                                        "کاراکتر اصیل عکس‌های فیلم ۳۵ میلی‌متری با گرین طبیعی کداک",
                                        "/35mm"
                                ],
                                [
                                        "307",
                                        "`/mediumformat`",
                                        "خروجی دوربین مدیوم‌فرمت هاسلبلاد با تفکیک رنگی فوق‌العاده و وضوح بالا",
                                        "/mediumformat"
                                ],
                                [
                                        "308",
                                        "`/disposablecam`",
                                        "عکاسی با دوربین‌های کامپکت دهه‌های گذشته و بازتاب‌های نوستالژیک فلاش",
                                        "/disposablecam"
                                ],
                                [
                                        "309",
                                        "`/contactsheet`",
                                        "نمایش کانتکت‌شیت عکاسی با فریم‌های پیوسته نگاتیو و یادداشت‌های ادیتور",
                                        "/contactsheet"
                                ],
                                [
                                        "310",
                                        "`/lookbook`",
                                        "شیت لوک‌بوک برندهای فشن با بک‌گراند خنثی و معرفی استایل‌ها",
                                        "/lookbook"
                                ],
                                [
                                        "311",
                                        "`/coverstory`",
                                        "پرتره جلد مجلات اینترنشنال با فضای بالای کادر برای لوگو و تیتر",
                                        "/coverstory"
                                ],
                                [
                                        "312",
                                        "`/BTS`",
                                        "نمای پشت صحنه (BTS) صحنه تولید همراه با تجهیزات، عوامل و دوربین",
                                        "/BTS"
                                ],
                                [
                                        "313",
                                        "`/behindthescenes`",
                                        "آشکارسازی دوربین‌ها، تجهیزات استودیو، نورها و پرده کروماکی صحنه",
                                        "/behindthescenes"
                                ],
                                [
                                        "314",
                                        "`/setphoto`",
                                        "عکاسی از سوژه در داخل یک دکور و صحنه فیلم‌برداری حرفه‌ای هالیوودی",
                                        "/setphoto"
                                ],
                                [
                                        "315",
                                        "`/camerarig`",
                                        "نمایش تجهیزات سینمایی شامل ردی، مانیتورهای کارگردانی و سه‌پایه",
                                        "/camerarig"
                                ],
                                [
                                        "316",
                                        "`/lightingrig`",
                                        "نمایش شکل‌دهنده‌های نور استودیو از جمله سافت‌باکس، فلگ و رفلکتور",
                                        "/lightingrig"
                                ],
                                [
                                        "317",
                                        "`/directorview`",
                                        "کادربندی از زاویه دید و صندلی کارگردان در حین تماشای مانیتور ضبط",
                                        "/directorview"
                                ],
                                [
                                        "318",
                                        "`/videovillage`",
                                        "مانیتور پلی‌بک صحنه با نمایش هیستوگرام، فوکوس پیکینگ و تحلیل شات",
                                        "/videovillage"
                                ],
                                [
                                        "319",
                                        "`/studiofloor`",
                                        "نمای لانگ‌شات از فضای کامل استودیوی فیلم‌سازی و ابعاد سالن تولید",
                                        "/studiofloor"
                                ],
                                [
                                        "320",
                                        "`/beforeafter`",
                                        "مقایسه قبل و بعد بصری بین ستاپ خام استودیو و رندر نهایی فاینال",
                                        "/beforeafter"
                                ],
                                [
                                        "321",
                                        "`/makingof`",
                                        "مستندنگاری سینمایی از هنر و مهارت ساخت و خلق تصویر در پشت صحنه",
                                        "/makingof"
                                ],
                                [
                                        "322",
                                        "`/fisheye`",
                                        "اعوجاج اپتیکال لنز فیش‌آی برای خلق کادرهای اغراق‌شده و مهیج",
                                        "/fisheye"
                                ],
                                [
                                        "323",
                                        "`/tinyplanet`",
                                        "تبدیل ۳۶۰ درجه پانوراما به سیاره کوچک کروی معلق در فضا (Tiny Planet)",
                                        "/tinyplanet"
                                ],
                                [
                                        "324",
                                        "`/reflection`",
                                        "ترکیب‌بندی بر پایه بازتاب‌های کریستالی آینه، شیشه یا سطح خیس آب",
                                        "/reflection"
                                ],
                                [
                                        "325",
                                        "`/throughglass`",
                                        "عکاسی از پشت شیشه باران‌خورده یا بازتاب‌دار برای شکست نور و عمق لایه‌ای",
                                        "/throughglass"
                                ],
                                [
                                        "326",
                                        "`/xraystyle`",
                                        "رندر اشعه ایکس و مقطع شفاف از معماری قطعات و ساختار داخلی محصول",
                                        "/xraystyle"
                                ],
                                [
                                        "327",
                                        "`/thermal`",
                                        "تصویرسازی با پالت رنگی ترموگرافی و نقشه گرمایی دوربین‌های حرارتی",
                                        "/thermal"
                                ],
                                [
                                        "328",
                                        "`/blueprint`",
                                        "نقشه فنی بلblueprint مهندسی روی پس‌زمینه آبی با ابعاد و خطوط اندازه‌گذاری",
                                        "/blueprint"
                                ],
                                [
                                        "329",
                                        "`/conceptart`",
                                        "کانسپت‌آرت سینمایی تراز اول هالیوودی با حفظ رئالیسم و جزئیات نوری",
                                        "/conceptart"
                                ]
                        ]
                }
        },
        {
                "id": "ai-image-tools-and-edits",
                "title": "۶. ابزارها و فرامین اختصاصی ادیت و بازسازی تصویر هوش مصنوعی (۲۸ دستور)",
                "lead": "دستورات مستقیم برای ادیت، روتوش، حذف پس‌زمینه، کالرایز کردن عکس‌های قدیمی و تبدیل فرمت‌های بصری.",
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "مورد استفاده / مثال"
                        ],
                        "rows": [
                                [
                                        "330",
                                        "`/generateimage`",
                                        "تولید تصویر باکیفیت از روی توضیحات متنی با دقت بالا به جزئیات پرامپت",
                                        "/generateimage"
                                ],
                                [
                                        "331",
                                        "`/generatehandwrittenimage`",
                                        "شبیه‌سازی دست‌نوشته و نامه خطی واقع‌گرایانه با جوهر خودنویس روی کاغذ",
                                        "/generatehandwrittenimage"
                                ],
                                [
                                        "332",
                                        "`/editimage`",
                                        "ویرایش و اعمال تغییرات هوشمند بر روی تصویر مرجع با حفظ ماهیت سوژه",
                                        "/editimage"
                                ],
                                [
                                        "333",
                                        "`/removebackground`",
                                        "حذف و عزل کامل پس‌زمینه تصویر و ایجاد پس‌زمینه شفاف یا تک‌رنگ",
                                        "/removebackground"
                                ],
                                [
                                        "334",
                                        "`/upscale`",
                                        "افزایش رزولوشن، وضوح و شارپنس تصویر با بازسازی هوشمند پیکسل‌ها",
                                        "/upscale"
                                ],
                                [
                                        "335",
                                        "`/enhanceimage`",
                                        "ارتقای جامع کیفیت، بالانس نورپردازی و بهبود غنای رنگی تصویر",
                                        "/enhanceimage"
                                ],
                                [
                                        "336",
                                        "`/restorephoto`",
                                        "ترمیم، حذف خط‌وخش و بازسازی عکس‌های قدیمی، رنگ‌ورفته و آسیب‌دیده",
                                        "/restorephoto"
                                ],
                                [
                                        "337",
                                        "`/colorize`",
                                        "رنگی‌کردن واقع‌گرایانه تصاویر تاریخی و سیاه‌وسفید با پالت طبیعی",
                                        "/colorize"
                                ],
                                [
                                        "338",
                                        "`/inpaint`",
                                        "حذف یا جایگزینی بخشی از تصویر (Inpainting) با بافت یکپارچه محیط",
                                        "/inpaint"
                                ],
                                [
                                        "339",
                                        "`/outpaint`",
                                        "گسترش مرزهای کادر تصویر به جهات مختلف با بازسازی محیط (Outpainting)",
                                        "/outpaint"
                                ],
                                [
                                        "340",
                                        "`/generatelogo`",
                                        "طراحی لوگوی مینیمال، مدرن و تایپوگرافی اختصاصی هویت برند",
                                        "/generatelogo"
                                ],
                                [
                                        "341",
                                        "`/generateicon`",
                                        "طراحی آیکون‌ست مدرن با فرم‌های یکدست برای اپلیکیشن و وب‌سایت",
                                        "/generateicon"
                                ],
                                [
                                        "342",
                                        "`/generateposter`",
                                        "طراحی پوستر گرافیکی جذاب برای رویدادها، تئاتر و کمپین‌ها",
                                        "/generateposter"
                                ],
                                [
                                        "343",
                                        "`/generatebanner`",
                                        "طراحی بنرهای تبلیغاتی دیجیتال با کادربندی استاندارد شبکه‌های اجتماعی",
                                        "/generatebanner"
                                ],
                                [
                                        "344",
                                        "`/generatethumbnail`",
                                        "طراحی تامبنیل پرکلیک یوتیوب و آپارات با کنتراست بالا و تایپوگرافی بولد",
                                        "/generatethumbnail"
                                ],
                                [
                                        "345",
                                        "`/generateavatar`",
                                        "تولید آواتارهای پرتره شخصی‌سازی‌شده سه‌بعدی و ایلاستریتیو",
                                        "/generateavatar"
                                ],
                                [
                                        "346",
                                        "`/generatepixelart`",
                                        "تصویرسازی پیکسلی رترو و استایل بازی‌های نوستالژیک ۸ و ۱۶ بیتی",
                                        "/generatepixelart"
                                ],
                                [
                                        "347",
                                        "`/generateanime`",
                                        "تصویرسازی به سبک انیمه ژاپنی با کاراکترهای احساسی و نورهای استودیو گیبلی",
                                        "/generateanime"
                                ],
                                [
                                        "348",
                                        "`/generatephotorealistic`",
                                        "تولید تصاویر فوتورئالیستی غیرقابل تشخیص از عکس واقعی با بافت پوست طبیعی",
                                        "/generatephotorealistic"
                                ],
                                [
                                        "349",
                                        "`/generate3d`",
                                        "تصویرسازی سه‌بعدی نرم و فانتزی با سایه‌های ژلاتینی و رنگ‌های شاداب",
                                        "/generate3d"
                                ],
                                [
                                        "350",
                                        "`/generatesticker`",
                                        "طراحی استیکرهای کارتونی با حاشیه سفید و برش تمیز برای مسنجرها",
                                        "/generatesticker"
                                ],
                                [
                                        "351",
                                        "`/generateinfographic`",
                                        "طراحی اینفوگرافیک با ساختار داده‌ای منظم، نمودارها و گراف‌های خوانا",
                                        "/generateinfographic"
                                ],
                                [
                                        "352",
                                        "`/mockup`",
                                        "موکاپ واقع‌گرایانه محصول در محیط واقعی برای پرزنتیشن به مشتری",
                                        "/mockup"
                                ],
                                [
                                        "353",
                                        "`/grammar`",
                                        "اصلاح و ویرایش ساختار گرامری، رفع خطاهای نگارشی و روان‌سازی لحن متن",
                                        "/grammar"
                                ],
                                [
                                        "354",
                                        "`/blog`",
                                        "نگارش مقالات جامع بلاگ با ساختار سئو، قلاب‌های جذاب و نتیجه‌گیری گیرا",
                                        "/blog"
                                ],
                                [
                                        "355",
                                        "`/essay`",
                                        "نگارش جستارهای تحلیلی و مقالات علمی با استدلال‌های منطقی و ارجاعات مستند",
                                        "/essay"
                                ],
                                [
                                        "356",
                                        "`/analyze`",
                                        "تحلیل عمیق داده‌ها، استخراج الگوهای آماری و ارائه بینش‌های کاربردی تجاری",
                                        "/analyze"
                                ],
                                [
                                        "357",
                                        "`/research`",
                                        "تحقیق عمیق چندبعدی در مورد یک موضوع همراه با مقایسه منابع و دسته‌بندی نکات",
                                        "/research"
                                ]
                        ]
                }
        },
        {
                "id": "secret-styles-and-fashion",
                "title": "۷. کدهای مخفی تغییر استایل، فشن، کاراکتر و رندرهای خاص (۱۰۳ کد)",
                "lead": "کدهای جادویی استایل، تغییر لباس و چهره، تم‌های انیمه، سایبرپانک، سبک‌های تاریخی، سای‌فای و عکاسی مد و فشن.",
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "مورد استفاده / مثال"
                        ],
                        "rows": [
                                [
                                        "358",
                                        "`/PROSHOT`",
                                        "تنظیم تخصصی نورپردازی، لنز دوربین و کالرگریدینگ عکاسی استودیویی",
                                        "/PROSHOT"
                                ],
                                [
                                        "359",
                                        "`/NEWBG`",
                                        "حذف و جایگزینی پس‌زمینه تصویر با محیط انتخابی جدید",
                                        "/NEWBG"
                                ],
                                [
                                        "360",
                                        "`/OUTFIT`",
                                        "تغییر هوشمندانه لباس و استایل کاراکتر با حفظ هویت چهره",
                                        "/OUTFIT"
                                ],
                                [
                                        "361",
                                        "`/TOGETHER`",
                                        "ترکیب و ادغام چند کاراکتر یا المان مختلف در یک قاب طبیعی مشترک",
                                        "/TOGETHER"
                                ],
                                [
                                        "362",
                                        "`/HDREAL`",
                                        "ارتقای وضوح تصویر به کیفیت عکاسی واقعی با بافت پوست طبیعی",
                                        "/HDREAL"
                                ],
                                [
                                        "363",
                                        "`/PASSPORT`",
                                        "تولید عکس پرسنلی و گذرنامه بیومتریک با زمینه سفید و نور یکنواخت",
                                        "/PASSPORT"
                                ],
                                [
                                        "364",
                                        "`/steampunk`",
                                        "سبک استیم‌پانک با چرخ‌دنده‌های برنجی، لوله‌های مسی و موتورهای بخار",
                                        "/steampunk"
                                ],
                                [
                                        "365",
                                        "`/ghibli`",
                                        "نقاشی دست‌کشیده رویایی استودیو گیبلی با آسمان آبی و علفزارهای سرسبز",
                                        "/ghibli"
                                ],
                                [
                                        "366",
                                        "`/anime`",
                                        "تصویرسازی مدرن انیمه ژاپنی با چشمان احساسی و خطوط محیطی شفاف",
                                        "/anime"
                                ],
                                [
                                        "367",
                                        "`/chibi`",
                                        "کاراکترهای چیبی مینیاتوری فانتزی با سر بزرگ، بدن کوچک و حس بامزه",
                                        "/chibi"
                                ],
                                [
                                        "368",
                                        "`/disney`",
                                        "تصویرسازی نوستالژیک کلاسیک دیزنی با رنگ‌های گرم و فرم‌های متحرک",
                                        "/disney"
                                ],
                                [
                                        "369",
                                        "`/pixar`",
                                        "رندر انیمیشن سه‌بعدی تراز اول پیکسار با نورپردازی مخملی و متریال زنده",
                                        "/pixar"
                                ],
                                [
                                        "370",
                                        "`/dreamworks`",
                                        "انیمیشن سه‌بعدی پرانرژی دریم‌ورکس با میمیک‌های خنده‌دار و اکشن پویا",
                                        "/dreamworks"
                                ],
                                [
                                        "371",
                                        "`/filmgrain`",
                                        "بافت نگاتیو فیلم سینمایی با دانه‌های گرین ارگانیک ۳۵ میلی‌متری",
                                        "/filmgrain"
                                ],
                                [
                                        "372",
                                        "`/retro90s`",
                                        "حال‌وهوای نوستالژیک دهه ۹۰ با رنگ‌های نئونی، کاست و فرهنگ پاپ",
                                        "/retro90s"
                                ],
                                [
                                        "373",
                                        "`/y2k`",
                                        "استایل هزاره سوم سال ۲۰۰۰ با متریال‌های کرومی، شیشه‌های رنگی و سایبر",
                                        "/y2k"
                                ],
                                [
                                        "374",
                                        "`/synthwave`",
                                        "موسیقی و رتروویو دهه ۸۰ با افق بنفش، خورشید نئونی و اتومبیل‌های اسپرت",
                                        "/synthwave"
                                ],
                                [
                                        "375",
                                        "`/outrun`",
                                        "حال‌وهوای بازی‌های مسابقه‌ای شبانه آوت‌ران با نورهای نئونی و سرعت بالا",
                                        "/outrun"
                                ],
                                [
                                        "376",
                                        "`/glitch`",
                                        "افکت گلیچ دیجیتال با اعوجاج رنگی RGB، خطوط اسکن و خطاهای تصویری",
                                        "/glitch"
                                ],
                                [
                                        "377",
                                        "`/hologram`",
                                        "هولوگرام نوری سه‌بعدی معلق در فضا با خطوط اسکن و درخشش فیروزه‌ای",
                                        "/hologram"
                                ],
                                [
                                        "378",
                                        "`/glassmorphism`",
                                        "طراحی گلس‌مورفیسم با شیشه‌های مات، بازتاب‌های بلوری و لایه‌های شناور",
                                        "/glassmorphism"
                                ],
                                [
                                        "379",
                                        "`/neon`",
                                        "نورپردازی نئونی پرکنتراست با رنگ‌های شب‌تاب درخشان صورتی و آبی",
                                        "/neon"
                                ],
                                [
                                        "380",
                                        "`/goldluxury`",
                                        "طراحی مجلل طلاکوب با فلز طلای ۲۴ عیار براق و مرمر مشکی",
                                        "/goldluxury"
                                ],
                                [
                                        "381",
                                        "`/minimal`",
                                        "طراحی مینیمال خلوت با حذف المان‌های اضافه و تمرکز بر خطوط ناب",
                                        "/minimal"
                                ],
                                [
                                        "382",
                                        "`/flatdesign`",
                                        "طراحی فلت دوبعدی گرافیکی با پالت‌های رنگی یکدست و آیکون‌های وکتور",
                                        "/flatdesign"
                                ],
                                [
                                        "383",
                                        "`/doodle`",
                                        "نقاشی‌های دودل و خط‌خطی‌های دستی خلاقانه و بازیگوش با ماژیک",
                                        "/doodle"
                                ],
                                [
                                        "384",
                                        "`/graffiti`",
                                        "هنر گرافیتی خیابانی روی دیوارهای بتنی با اسپری رنگ‌های شاداب و تگ‌ها",
                                        "/graffiti"
                                ],
                                [
                                        "385",
                                        "`/spraypaint`",
                                        "تکنیک نقاشی با اسپری رنگ و شابلون‌های استنسیل چندلایه",
                                        "/spraypaint"
                                ],
                                [
                                        "386",
                                        "`/popart`",
                                        "هنر پاپ‌آرت اندی وارهول با پالت‌های رنگی تند و بافت نقطه‌ای چاپ",
                                        "/popart"
                                ],
                                [
                                        "387",
                                        "`/cubism`",
                                        "سبک کوبیسم پیکاسو با تجزیه اشکال به حجم‌های هندسی چندبعدی",
                                        "/cubism"
                                ],
                                [
                                        "388",
                                        "`/surreal`",
                                        "هنر سورئالیسم سالوادور دالی با مفاهیم رویایی و ساختارهای ناممکن",
                                        "/surreal"
                                ],
                                [
                                        "389",
                                        "`/abstract`",
                                        "هنر انتزاعی مدرن با بازی هارمونیک خطوط، بافت‌ها و پالت‌های رنگی",
                                        "/abstract"
                                ],
                                [
                                        "390",
                                        "`/expressionism`",
                                        "سبک اکسپرسیونیسم پرشور با ضربات قلم‌موی ضخیم و رنگ‌های احساسی",
                                        "/expressionism"
                                ],
                                [
                                        "391",
                                        "`/renaissance`",
                                        "نقاشی شاهکار رنسانس با کمال تناسبات، نورپردازی ملایم و رنگ‌روغن",
                                        "/renaissance"
                                ],
                                [
                                        "392",
                                        "`/baroque`",
                                        "سبک باروک با نورپردازی تند کیاروسکورو، درام عمیق و شکوه درباری",
                                        "/baroque"
                                ],
                                [
                                        "393",
                                        "`/gothic`",
                                        "معماری و اتمسفر گوتیک تاریک با طاق‌های نوک‌تیز، شیشه‌های رنگی و رازآلودگی",
                                        "/gothic"
                                ],
                                [
                                        "394",
                                        "`/fantasy`",
                                        "سرزمین جادویی فانتزی با قلعه‌های معلق در آسمان و موجودات افسانه‌ای",
                                        "/fantasy"
                                ],
                                [
                                        "395",
                                        "`/mythology`",
                                        "اساطیر باستان یونان و روم با کوه المپ، تندیس‌های مرمری و ایزدان نبرد",
                                        "/mythology"
                                ],
                                [
                                        "396",
                                        "`/dragon`",
                                        "اژدهای باستانی عظیم با فلس‌های درخشان و نفس آتشین در غار کوهستانی",
                                        "/dragon"
                                ],
                                [
                                        "397",
                                        "`/elf`",
                                        "الف‌های نجیب جنگلی با گوش‌های کشیده، ردای ابریشمی و کمان جادویی",
                                        "/elf"
                                ],
                                [
                                        "398",
                                        "`/wizard`",
                                        "کاراکتر جادوگر کهن با ردای افسانه‌ای، عصای نورانی و هاله‌های جادویی",
                                        "/wizard"
                                ],
                                [
                                        "399",
                                        "`/samurai`",
                                        "سامورایی با زره سنتی ژاپنی، شمشیر کاتانای تیز و باران شکوفه‌های گیلاس",
                                        "/samurai"
                                ],
                                [
                                        "400",
                                        "`/ninja`",
                                        "شینوبی و نینجای در سایه با ماسک مشکی، سلاح‌های مخفی و مهتاب شبانه",
                                        "/ninja"
                                ],
                                [
                                        "401",
                                        "`/viking`",
                                        "جنگجوی وایکینگ نورس با تبر دودست، بافت چرم و خز و پس‌زمینه کوهستان برفی",
                                        "/viking"
                                ],
                                [
                                        "402",
                                        "`/medieval`",
                                        "شوالیه‌ها و دربار قرون وسطی با زره‌های فولادی و قلعه‌های سنگی باستانی",
                                        "/medieval"
                                ],
                                [
                                        "403",
                                        "`/ancientrome`",
                                        "معماری و لژیونرهای روم باستان با ستون‌های مرمرین و لباس‌های امپراتوری",
                                        "/ancientrome"
                                ],
                                [
                                        "404",
                                        "`/ancientegypt`",
                                        "مصر باستان با اهرام طلایی، کتیبه‌های هیروگلیف و تندیس‌های فراعنه",
                                        "/ancientegypt"
                                ],
                                [
                                        "405",
                                        "`/space`",
                                        "سفر به اعماق کیهان با سحابی‌های رنگارنگ و ایستگاه‌های فضایی پیشرفته",
                                        "/space"
                                ],
                                [
                                        "406",
                                        "`/galaxy`",
                                        "نمای پانورامای کهکشان راه‌شیری با میلیون‌ها ستاره درخشان و غبار کیهانی",
                                        "/galaxy"
                                ],
                                [
                                        "407",
                                        "`/astronaut`",
                                        "فضانورد با لباس مدرن ناسا در حال راهپیمایی فضایی با بازتاب زمین در وایزر کلاه",
                                        "/astronaut"
                                ],
                                [
                                        "408",
                                        "`/mars`",
                                        "چشم‌انداز سطح سیاره سرخ مریخ با تپه‌های شنی قرمز و پایگاه‌های تحقیقاتی",
                                        "/mars"
                                ],
                                [
                                        "409",
                                        "`/moonlight`",
                                        "منظره شاعرانه مهتابی با تابش نقره‌ای ماه روی سطح آب و سایه‌های کشیده",
                                        "/moonlight"
                                ],
                                [
                                        "410",
                                        "`/ocean`",
                                        "اقیانوس بیکران با امواج سهمگین کریستالی و پرتوهای نور خورشید در عمق آب",
                                        "/ocean"
                                ],
                                [
                                        "411",
                                        "`/jungle`",
                                        "جنگل‌های بارانی استوایی مه‌آلود با درختان کهنسال، سرخس‌ها و حیات‌وحش بکر",
                                        "/jungle"
                                ],
                                [
                                        "412",
                                        "`/desert`",
                                        "کویر طلایی با تپه‌های ماسه‌ای روان بی‌انتها و آسمان پرستاره کویری",
                                        "/desert"
                                ],
                                [
                                        "413",
                                        "`/volcano`",
                                        "آتشفشان فعال با جریان‌های گدازه مذاب درخشان و ابرهای غلیظ خاکستر و دود",
                                        "/volcano"
                                ],
                                [
                                        "414",
                                        "`/snow`",
                                        "منظره برفی رویایی با درختان کاج یخ‌زده و دانه‌های کریستالی برف در حال بارش",
                                        "/snow"
                                ],
                                [
                                        "415",
                                        "`/rain`",
                                        "باران شدید شهری روی سنگفرش‌های خیس با بازتاب‌های رنگی چراغ‌های نئونی",
                                        "/rain"
                                ],
                                [
                                        "416",
                                        "`/storm`",
                                        "طوفان مهیب اقیانوسی با رعدوبرق‌های درخشان در آسمان تاریک و متلاطم",
                                        "/storm"
                                ],
                                [
                                        "417",
                                        "`/sunset`",
                                        "غروب درخشان خورشید با ترکیب رنگ‌های نارنجی آتشین، ارغوانی و طلایی در افق",
                                        "/sunset"
                                ],
                                [
                                        "418",
                                        "`/sunrise`",
                                        "طلوع دل‌انگیز صبحگاهی با پرتوهای طلایی خورشید و شبنم روی گلبرگ‌ها",
                                        "/sunrise"
                                ],
                                [
                                        "419",
                                        "`/nightcity`",
                                        "خط افق کلان‌شهر مدرن در شب با هزاران پنجره نورانی و ترافیک روان چراغ‌ها",
                                        "/nightcity"
                                ],
                                [
                                        "420",
                                        "`/architecture`",
                                        "معماری شاهکار پارامتریک و مدرن با خطوط مواج بتنی، شیشه و فولاد",
                                        "/architecture"
                                ],
                                [
                                        "421",
                                        "`/interior`",
                                        "دکوراسیون داخلی فوق‌مدرن با مبلمان مینیمال ایتالیایی و نورپردازی مخفی",
                                        "/interior"
                                ],
                                [
                                        "422",
                                        "`/scifiroom`",
                                        "اتاق فرمان سفینه فضایی سای‌فای با هولوگرام‌های سه‌بعدی و پنل‌های لمسی",
                                        "/scifiroom"
                                ],
                                [
                                        "423",
                                        "`/remaster`",
                                        "بازسازی و ارتقای کیفیت بصری با شارپنس کریستالی و داینامیک‌رنج بالا",
                                        "/remaster"
                                ],
                                [
                                        "424",
                                        "`/epicportrait`",
                                        "پرتره حماسی سینمایی با نورپردازی متضاد دراماتیک و نگاه کاریزماتیک",
                                        "/epicportrait"
                                ],
                                [
                                        "425",
                                        "`/movieposter`",
                                        "پوستر رسمی فیلم پرفروش هالیوودی با ترکیب‌بندی چندلایه و تایپوگرافی بولد",
                                        "/movieposter"
                                ],
                                [
                                        "426",
                                        "`/cyberpunk`",
                                        "استایل سایبرپانک ۲۰۷۷ با خیابان‌های باران‌خورده، برج‌های نئونی و ایمپلنت‌ها",
                                        "/cyberpunk"
                                ],
                                [
                                        "427",
                                        "`/dslr`",
                                        "عکاسی حرفه‌ای با دوربین فول‌فریم DSLR با بوکه کروی محو در عمق میدان",
                                        "/dslr"
                                ],
                                [
                                        "428",
                                        "`/studio`",
                                        "نورپردازی سه‌نقطه‌ای استاندارد استودیو عکاسی با کی‌لایت، فیل‌لایت و ریم‌لایت",
                                        "/studio"
                                ],
                                [
                                        "429",
                                        "`/ultrahd`",
                                        "وضوح شگفت‌انگیز 8K با شفافیت میکروسکوپی بافت‌ها و پورس‌های پوستی",
                                        "/ultrahd"
                                ],
                                [
                                        "430",
                                        "`/masterpiece`",
                                        "شاهکار هنری برنده جوایز بین‌المللی با هماهنگی بی‌نظیر نور، فرم و رنگ",
                                        "/masterpiece"
                                ],
                                [
                                        "431",
                                        "`/neoncity`",
                                        "شهر نئونی شبانه با تابلوهای درخشان کانجی ژاپنی و مه بنفش و صورتی",
                                        "/neoncity"
                                ],
                                [
                                        "432",
                                        "`/retrofilm`",
                                        "حس نوستالژیک فیلم‌های کداک دهه ۱۹۸۰ با گرین گرم و ته‌رنگ‌های وینتیج",
                                        "/retrofilm"
                                ],
                                [
                                        "433",
                                        "`/luxurylook`",
                                        "استایل فوق‌اشرافی با جواهرات الماس، پارچه‌های ابریشم و نورپردازی پریمیوم",
                                        "/luxurylook"
                                ],
                                [
                                        "434",
                                        "`/rainyday`",
                                        "فضای ملودراماتیک روز بارانی با نشستن قطرات آب روی شیشه کافه‌ها",
                                        "/rainyday"
                                ],
                                [
                                        "435",
                                        "`/foggymood`",
                                        "اتمسفر مه‌آلود رازآلود با پرتوهای نوری خطی که از میان مه می‌گذرند",
                                        "/foggymood"
                                ],
                                [
                                        "436",
                                        "`/nightshot`",
                                        "عکاسی شبانه با نوردهی طولانی و شبیه‌سازی حس چشم انسان در تاریکی",
                                        "/nightshot"
                                ],
                                [
                                        "437",
                                        "`/sunsetvibes`",
                                        "وایب گرم و احساسی عصرگاهی با نور نارنجی ملایم و سایه‌های کشیده",
                                        "/sunsetvibes"
                                ],
                                [
                                        "438",
                                        "`/streetstyle`",
                                        "استایل خیابانی مدرن و هیپ‌هاپ با کتونی‌های ترند و پس‌زمینه گرافیتی",
                                        "/streetstyle"
                                ],
                                [
                                        "439",
                                        "`/urbanlook`",
                                        "پوشش مینیمال اداری-شهری معاصر با ترنچ‌کت و اکسسوری‌های مدرن",
                                        "/urbanlook"
                                ],
                                [
                                        "440",
                                        "`/superhero`",
                                        "قهرمان افسانه‌ای با زره زره‌پوش تکنولوژیک و انرژی درخشان در دستان",
                                        "/superhero"
                                ],
                                [
                                        "441",
                                        "`/villain`",
                                        "شخصیت منفی کاریزماتیک با سایه‌روشن‌های تاریک و لبخند مرموز در سایه",
                                        "/villain"
                                ],
                                [
                                        "442",
                                        "`/warrior`",
                                        "جنگجوی کهن نبرد با شمشیر فولادی، رد زخم‌های کهنه و نگاه تسخیرناپذیر",
                                        "/warrior"
                                ],
                                [
                                        "443",
                                        "`/queen`",
                                        "ملکه سلطنتی با تاج مروارید و الماس، ردای مخملین سرخ و نگاه باصلابت",
                                        "/queen"
                                ],
                                [
                                        "444",
                                        "`/royalportrait`",
                                        "پرتره اشرافی خاندان سلطنتی در تالار کاخ با قاب‌های طلایی باستانی",
                                        "/royalportrait"
                                ],
                                [
                                        "445",
                                        "`/spaceexplorer`",
                                        "کاشف سیارات ناشناخته با اسکنرهای مجهز و تجهیزات بقا در سیاره بیگانه",
                                        "/spaceexplorer"
                                ],
                                [
                                        "446",
                                        "`/futurecity`",
                                        "آسمان‌خراش‌های چندکیلومتری معلق با اتومبیل‌های پرنده در سال ۲۱۵۰",
                                        "/futurecity"
                                ],
                                [
                                        "447",
                                        "`/scifi`",
                                        "دنیای علمی‌تخیلی پیشرفته با هوش مصنوعی‌های سایبرنتیک و درگاه‌های زمانی",
                                        "/scifi"
                                ],
                                [
                                        "448",
                                        "`/fairytale`",
                                        "سرزمین پریان رویایی با قارچ‌های درخشان شب‌تاب و موجودات افسانه‌ای",
                                        "/fairytale"
                                ],
                                [
                                        "449",
                                        "`/angelic`",
                                        "فیگور فرشته‌گون با بال‌های پر سفید عظیم، هاله‌های نوری و پرتوهای آسمانی",
                                        "/angelic"
                                ],
                                [
                                        "450",
                                        "`/thuglife`",
                                        "استایل گنگستری و هیپ‌هاپی رترو با زنجیر طلا، عینک تیره و کادیلاک کلاسیک",
                                        "/thuglife"
                                ],
                                [
                                        "451",
                                        "`/bodybuilder`",
                                        "ورزشکار بدنساز با عضلات تفکیک‌شده فیگوراتیو و نور متمرکز استیج",
                                        "/bodybuilder"
                                ],
                                [
                                        "452",
                                        "`/businessman`",
                                        "مدیر ارشد تجاری با کت‌وشلوار دست‌دوز در دفتر شیشه‌ای پنت‌هاوس",
                                        "/businessman"
                                ],
                                [
                                        "453",
                                        "`/celebritylook`",
                                        "استایل سلبریتی‌های هالیوود با عینک آفتابی، فلاش‌های پاپاراتزی و پوشش لوکس",
                                        "/celebritylook"
                                ],
                                [
                                        "454",
                                        "`/redcarpet`",
                                        "فرش قرمز جشنواره فیلم با لباس شب فاخر، نورپردازی پروژکتورها و عکاسان",
                                        "/redcarpet"
                                ],
                                [
                                        "455",
                                        "`/natureportrait`",
                                        "پرتره در دل طبیعت سرسبز با نور طبیعی، گندم‌زار و باد ملایم",
                                        "/natureportrait"
                                ],
                                [
                                        "456",
                                        "`/photorealistic`",
                                        "تصویر کاملاً طبیعی با بافت پوست غیرقابل تشخیص از عکس دوربین واقعی",
                                        "/photorealistic"
                                ],
                                [
                                        "457",
                                        "`/bgpersonremove`",
                                        "حذف تمیز افراد مزاحم از پس‌زمینه و بازسازی بافت محیط",
                                        "/bgpersonremove"
                                ],
                                [
                                        "458",
                                        "`/lowangleview`",
                                        "زاویه دید از پایین به بالا برای نمایش ارتفاع، صلابت و ابهت سوژه",
                                        "/lowangleview"
                                ],
                                [
                                        "459",
                                        "`/360views`",
                                        "پکیج شیت عکاسی دورتاور ۳۶۰ درجه از زوایای روبه‌رو، پشت و سه‌رخ",
                                        "/360views"
                                ],
                                [
                                        "460",
                                        "`/outfitchange`",
                                        "تغییر هوشمندانه لباس و استایل پوشش کاراکتر با حفظ هویت چهره",
                                        "/outfitchange"
                                ]
                        ]
                }
        },
        {
                "id": "dev-and-coding-prompts",
                "title": "۸. کامندهای تخصصی مهندسی نرم‌افزار، معماری کد و وایب‌کدینگ (۱۶ دستور)",
                "lead": "دستوراتی که فرآیند توسعه، خطایابی، نوشتن تست و ریفکتور کدهای شما رو تا ۱۰ برابر سریع‌تر و استانداردتر می‌کنن.",
                "image": {
                        "src": "/images/blog/chatgpt-developer-productivity.webp",
                        "alt": "داشبورد توسعه‌دهندگان، تحلیل داده، اتوماسیون کدنویسی و بهینه‌سازی استراتژی بیزینس",
                        "caption": "محیط تعاملی توسعه نرم‌افزار، دیباگ هوشمند و تست‌های خودکار با استفاده از دستورات مهندسی پرامپت"
                },
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "نمونه پرامپت اجرایی"
                        ],
                        "rows": [
                                [
                                        "20",
                                        "`/code`",
                                        "ورود به مود تخصصی توسعه نرم‌افزار و معماری کدهای تمیز",
                                        "/code write a Next.js 15 Server Action for Stripe webhook handling"
                                ],
                                [
                                        "21",
                                        "`/debug`",
                                        "خطایابی عمیق، ردیابی لاگ‌های خطا و رفع باگ‌های منطقی و سینتکسی",
                                        "/debug analyze why this async useEffect causes infinite re-renders"
                                ],
                                [
                                        "22",
                                        "`/refactor`",
                                        "بازنویسی و ریفکتور کد طبق اصول Clean Code و SOLID",
                                        "/refactor convert this monolithic Express handler to modular MVC services"
                                ],
                                [
                                        "23",
                                        "`/test`",
                                        "تولید تست‌های واحد (Unit Tests) و تست‌های پوشش‌دهنده سناریوهای مرزی",
                                        "/test write Jest unit tests for this authentication utility"
                                ],
                                [
                                        "24",
                                        "`/explaincode`",
                                        "تشریح گام‌به‌گام و روان نحوه کارکرد الگوریتم یا تکه کد پیچیده",
                                        "/explaincode explain how this recursive binary search works"
                                ],
                                [
                                        "25",
                                        "`/optimize`",
                                        "بهینه‌سازی پرفورمنس کد، کاهش مصرف رم و ارتقای سرعت اجرا",
                                        "/optimize optimize this heavy image processing function"
                                ],
                                [
                                        "26",
                                        "`/documentcode`",
                                        "تولید داکیومنت‌های استاندارد JSDoc/Docstring برای تمام توابع",
                                        "/documentcode generate comprehensive JSDoc annotations"
                                ],
                                [
                                        "27",
                                        "`/sql`",
                                        "تولید و تیونینگ کوئری‌های پیچیده دیتابیس، جوین‌ها و ایندکس‌گذاری",
                                        "/sql write a PostgreSQL query for monthly recurring revenue"
                                ],
                                [
                                        "28",
                                        "`/regex`",
                                        "تولید عبارات منظم (Regex) همراه با توضیح تشریحی بخش‌ها",
                                        "/regex create a pattern to validate international phone numbers"
                                ],
                                [
                                        "29",
                                        "`/api`",
                                        "طراحی مشخصات اندپوینت‌های RESTful یا اسکیماهای GraphQL",
                                        "/api design a CRUD API spec for a multi-tenant platform"
                                ],
                                [
                                        "30",
                                        "`/git`",
                                        "تولید دستورات گیت، حل تعارض‌های مرج و پیام‌های استاندارد کامیت",
                                        "/git show how to rebase feature branch onto main cleanly"
                                ],
                                [
                                        "31",
                                        "`/docker`",
                                        "تولید Dockerfile چندمرحله‌ای بهینه و کانفیگ docker-compose",
                                        "/docker create a production Dockerfile for Next.js app"
                                ],
                                [
                                        "32",
                                        "`/audit`",
                                        "بررسی امنیتی، آسیب‌پذیری‌ها و استانداردهای دسترسی‌پذیری کد",
                                        "/audit inspect this authentication flow for security flaws"
                                ],
                                [
                                        "33",
                                        "`/schema`",
                                        "تولید اسکیماهای اعتبارسنجی Zod/TypeScript یا پایگاه‌داده",
                                        "/schema build a Zod validation schema for checkout form"
                                ],
                                [
                                        "34",
                                        "`/testsuite`",
                                        "طراحی پکیج کامل تست‌های End-to-End با Playwright/Cypress",
                                        "/testsuite write E2E tests for user signup and onboarding"
                                ],
                                [
                                        "35",
                                        "`/docstring`",
                                        "تولید خودکار مستندات فنی و راهنمای استفاده برای توابع",
                                        "/docstring document all exported classes and methods"
                                ]
                        ]
                },
                "codeSnippets": [
                        {
                                "title": "پرامپت نمونه مهندسی فرانت‌اند با /audit",
                                "language": "markdown",
                                "code": "/audit\nنقش: تو مهندس ارشد فرانت‌اند (Staff Engineer) هستی.\nکد زیر را از نظر:\n۱. Performance و جلوگیری از Re-renderهای اضافه در React 19\n۲. رعایت اصول Accessibility (WCAG 2.2 AA)\n۳. تایپ‌سیف بودن با TypeScript Strict Mode\nتحلیل کن و سپس کد بهینه‌شده را همراه با کامنت‌های آموزشی بازنویسی کن."
                        }
                ]
        },
        {
                "id": "business-and-strategy",
                "title": "۹. کامندهای استراتژی بیزینس، مارکتینگ و بنیان‌گذاران (۱۵ دستور)",
                "lead": "ماتریس‌های تحلیلی، استراتژی قیمت‌گذاری، قیف‌های فروش و پرسونای مشتری برای بنیان‌گذاران و مدیران رشد.",
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "نمونه پرامپت اجرایی"
                        ],
                        "rows": [
                                [
                                        "36",
                                        "`/swot`",
                                        "تحلیل ماتریس نقاط قوت، ضعف، فرصت‌ها و تهدیدهای بیزینس",
                                        "/swot analyze our B2B SaaS entering enterprise market"
                                ],
                                [
                                        "37",
                                        "`/pestle`",
                                        "تحلیل کلان عوامل سیاسی، اقتصادی، اجتماعی، فناوری و محیطی",
                                        "/pestle perform a PESTLE analysis for EV charging network"
                                ],
                                [
                                        "38",
                                        "`/competitor`",
                                        "تحلیل عمیق رقبا، ماتریس مقایسه فیچرها و کشف مزیت رقابتی",
                                        "/competitor benchmark our tool against top competitors"
                                ],
                                [
                                        "39",
                                        "`/pricing`",
                                        "طراحی استراتژی قیمت‌گذاری، پکیج‌های اشتراکی و پلن‌های سودآور",
                                        "/pricing design a 3-tier SaaS pricing model"
                                ],
                                [
                                        "40",
                                        "`/funnel`",
                                        "طراحی قیف بازاریابی و تبدیل از جذب تا فروش نهایی",
                                        "/funnel map a high-converting B2B lead generation funnel"
                                ],
                                [
                                        "41",
                                        "`/icp`",
                                        "ترسیم پرسونای مشتری ایده‌آل شامل نقاط درد، بودجه و فاکتورهای تصمیم",
                                        "/icp create an ICP profile for startup CTOs"
                                ],
                                [
                                        "42",
                                        "`/kpi`",
                                        "تعریف شاخص‌های کلیدی عملکرد و متریک‌های کلیدی OKR",
                                        "/kpi define quarterly OKRs and north-star metrics"
                                ],
                                [
                                        "43",
                                        "`/pitch`",
                                        "نگارش پیچ‌دک سرمایه‌گذاری و نطق یک‌دقیقه‌ای معرفی استارتاپ",
                                        "/pitch write a 60-second pitch for our AI startup"
                                ],
                                [
                                        "44",
                                        "`/tam`",
                                        "محاسبه و تخمین حجم کل بازار و سهم هدف (TAM/SAM/SOM)",
                                        "/tam estimate TAM, SAM, and SOM for remote healthcare"
                                ],
                                [
                                        "45",
                                        "`/gtm`",
                                        "طراحی استراتژی ورود به بازار (Go-To-Market) و کانال‌های توزیع",
                                        "/gtm build a 90-day GTM strategy for developer tool"
                                ],
                                [
                                        "46",
                                        "`/objections`",
                                        "استخراج تمام بهانه‌ها و شک‌های خریدار و پاسخ‌های قانع‌کننده",
                                        "/objections list 10 objections to luxury web design and responses"
                                ],
                                [
                                        "47",
                                        "`/roadmap`",
                                        "طراحی نقشه راه محصول با فازبندی‌های ۳۰-۶۰-۹۰ روزه",
                                        "/roadmap create a 90-day feature roadmap for mobile app"
                                ],
                                [
                                        "48",
                                        "`/statistics`",
                                        "تحلیل داده‌های آماری، میانگین، واریانس و الگوهای رشد",
                                        "/statistics analyze monthly churn rate patterns"
                                ],
                                [
                                        "49",
                                        "`/brainstorm`",
                                        "طوفان فکری خلاقانه برای خلق ۲۰ ایده نوآورانه و متمایز",
                                        "/brainstorm generate 20 viral marketing angles for AI tool"
                                ],
                                [
                                        "50",
                                        "`/compare`",
                                        "مقایسه دو محصول، ابزار یا سناریوی تجاری در جدول تحلیلی",
                                        "/compare compare Stripe vs Paddle for global SaaS payments"
                                ]
                        ]
                }
        },
        {
                "id": "writing-and-copywriting",
                "title": "۱۰. کامندهای تولید محتوا، کپی‌رایتینگ، تیترنویسی و سناریوسازی (۱۸ دستور)",
                "lead": "فرمول‌های طلایی روانشناسی تبدیل (AIDA, PAS)، قلاب‌های ویدیویی میخکوب‌کننده و لحن‌های اختصاصی برندینگ.",
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "نمونه پرامپت اجرایی"
                        ],
                        "rows": [
                                [
                                        "51",
                                        "`/write`",
                                        "تولید متن جامع، مقاله یا ساختار محتوایی بر اساس پرامپت",
                                        "/write write an authoritative guide on modern frontend design"
                                ],
                                [
                                        "52",
                                        "`/rewrite`",
                                        "بازنویسی متن برای بهبود لحن، شیوایی و انتقال پیام",
                                        "/rewrite rewrite this formal email to sound approachable"
                                ],
                                [
                                        "53",
                                        "`/proofread`",
                                        "اصلاح ایرادات گرامری، املایی و نشانه‌گذاری نگارشی",
                                        "/proofread review this press release for grammatical precision"
                                ],
                                [
                                        "54",
                                        "`/tone`",
                                        "تنظیم لحن متن (رسمی، صمیمی، طنز، لوکس، علمی یا پرانرژی)",
                                        "/tone make this announcement sound urgent yet professional"
                                ],
                                [
                                        "55",
                                        "`/headline`",
                                        "تولید ۱۰ تیتر جذاب و کلیک‌خور بر اساس روانشناسی مخاطب",
                                        "/headline write 10 compelling titles for blog post on AI"
                                ],
                                [
                                        "56",
                                        "`/hook`",
                                        "تولید قلاب‌های میخکوب‌کننده اول ویدیو و کپشن ریلز",
                                        "/hook generate 5 hooks for an Instagram Reel about AI prompts"
                                ],
                                [
                                        "57",
                                        "`/aida`",
                                        "ساختاردهی محتوا بر اساس فرمول Attention, Interest, Desire, Action",
                                        "/aida write a promotional email for luxury web design"
                                ],
                                [
                                        "58",
                                        "`/pas`",
                                        "نگارش متن بر اساس فرمول Problem, Agitation, Solution",
                                        "/pas write a landing page hero section for slow agency turnaround"
                                ],
                                [
                                        "59",
                                        "`/tldr`",
                                        "خلاصه‌سازی تک‌جمله‌ای فوق‌العاده سریع از مفاهیم پیچیده",
                                        "/tldr give me a TL;DR of this 10-page economic report"
                                ],
                                [
                                        "60",
                                        "`/eli5`",
                                        "توضیح مفاهیم سخت و تخصصی به زبان ساده و قابل فهم",
                                        "/eli5 explain how quantum encryption works simply"
                                ],
                                [
                                        "61",
                                        "`/script`",
                                        "نگارش سناریو و فیلم‌نامه ویدیویی دو ستونه برای یوتیوب و ریلز",
                                        "/script write a 60-second video script about Claude SEO"
                                ],
                                [
                                        "62",
                                        "`/expand`",
                                        "بسط دادن و تشریح مفصل یک ایده یا پاراگراف خلاصه",
                                        "/expand expand this product feature into a 3-paragraph value story"
                                ],
                                [
                                        "63",
                                        "`/shorten`",
                                        "کوتاه‌سازی و حذف کلمات اضافه متن بدون تغییر مفهوم اصلی",
                                        "/shorten cut this 300-word paragraph down to 100 words"
                                ],
                                [
                                        "64",
                                        "`/paraphrase`",
                                        "بیان مجدد جملات با واژگان متنوع و ساختار زبانی تازه",
                                        "/paraphrase paraphrase this technical definition uniquely"
                                ],
                                [
                                        "65",
                                        "`/translate`",
                                        "ترجمه روان و بومی‌سازی‌شده متون با حفظ اصطلاحات تخصصی",
                                        "/translate translate this technical changelog into natural Persian"
                                ],
                                [
                                        "66",
                                        "`/email`",
                                        "نگارش ایمیل‌های حرفه‌ای کاری، پیگیری فروش و خبرنامه",
                                        "/email write a follow-up email after a client discovery call"
                                ],
                                [
                                        "67",
                                        "`/caption`",
                                        "تولید کپشن‌های جذاب اینستاگرام و لینکدین همراه با هشتگ",
                                        "/caption write a LinkedIn post caption about vibe coding launch"
                                ],
                                [
                                        "68",
                                        "`/story`",
                                        "خلق روایت داستانی جذاب و استوری‌تلینگ برای برندها",
                                        "/story write a founder journey story about overcoming burnout"
                                ]
                        ]
                }
        },
        {
                "id": "research-and-productivity",
                "title": "۱۱. کامندهای تحقیق، یادگیری عمیق، حافظه و بهره‌وری شخصی (۱۸ دستور)",
                "lead": "دستورات جستجوی زنده، راستی‌آزمایی فکت‌ها، مدیریت حافظه بلندمدت چت‌جی‌پی‌تی و برنامه‌ریزی هدفمند کارهای روزانه.",
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "نمونه پرامپت اجرایی"
                        ],
                        "rows": [
                                [
                                        "69",
                                        "`/search`",
                                        "جستجوی زنده در وب برای بازیابی جدیدترین آمار و اخبار مستند",
                                        "/search what are the latest Google Search core updates in 2026?"
                                ],
                                [
                                        "70",
                                        "`/factcheck`",
                                        "اعتبارسنجی ارقام و ادعاهای مطرح‌شده با منابع معتبر جهانی",
                                        "/factcheck verify whether OpenAI recently launched native slash commands"
                                ],
                                [
                                        "71",
                                        "`/cite`",
                                        "تولید ارجاعات علمی و کتاب‌شناسی بر اساس استانداردهای آکادمیک",
                                        "/cite generate APA citations for top 3 foundation model papers"
                                ],
                                [
                                        "72",
                                        "`/proscons`",
                                        "ماتریس مقایسه جامع مزایا، معایب و ریسک‌های یک تصمیم‌گیری",
                                        "/proscons compare Next.js App Router vs Remix for e-commerce"
                                ],
                                [
                                        "73",
                                        "`/analogy`",
                                        "توضیح مفاهیم انتزاعی با مثال‌های ملموس و شبیه‌سازی ذهنی",
                                        "/analogy create an analogy explaining how Transformer attention works"
                                ],
                                [
                                        "74",
                                        "`/plan`",
                                        "تدوین برنامه زمانی گام‌به‌گام و مایلستون‌های اجرایی پروژه",
                                        "/plan create a 4-week study plan to master TypeScript"
                                ],
                                [
                                        "75",
                                        "`/actionitems`",
                                        "استخراج لیست وظایف عملیاتی و مسئولیت‌ها از متن جلسات",
                                        "/actionitems extract all deliverables and deadlines from transcript"
                                ],
                                [
                                        "76",
                                        "`/prioritize`",
                                        "اولویت‌بندی کارها با ماتریس آیزنهاور یا متد RICE",
                                        "/prioritize sort these 12 feature requests using RICE scoring"
                                ],
                                [
                                        "77",
                                        "`/memorize`",
                                        "ذخیره دستورالعمل یا ترجیح کاری در حافظه بلندمدت ChatGPT",
                                        "/memorize always format code solutions using TypeScript and Tailwind"
                                ],
                                [
                                        "78",
                                        "`/forget`",
                                        "حذف یک داده یا حافظه مشخص از دیتابیس حافظه اکانت",
                                        "/forget remove previous project requirements from memory"
                                ],
                                [
                                        "79",
                                        "`/todo`",
                                        "تولید چک‌لیست کارهای روزانه به همراه اولویت و زمان‌بندی",
                                        "/todo organize my morning sprint tasks with estimated minutes"
                                ],
                                [
                                        "80",
                                        "`/checklist`",
                                        "تولید چک‌لیست جامع قبل از لانچ محصول یا استقرار روی سرور",
                                        "/checklist create a pre-launch production checklist for Next.js app"
                                ],
                                [
                                        "81",
                                        "`/studyplan`",
                                        "طراحی برنامه آموزشی گام‌به‌گام برای یادگیری یک مهارت جدید",
                                        "/studyplan build a 30-day curriculum to learn UI/UX design"
                                ],
                                [
                                        "82",
                                        "`/tripplan`",
                                        "برنامه‌ریزی برنامه سفر روزانه با مسیرها و توصیه‌های محلی",
                                        "/tripplan create a 5-day cultural itinerary for Tokyo"
                                ],
                                [
                                        "83",
                                        "`/workout`",
                                        "طراحی برنامه تمرینی ورزشی متناسب با سطح آمادگی و اهداف",
                                        "/workout build a 4-day strength training split for intermediate level"
                                ],
                                [
                                        "84",
                                        "`/mealplan`",
                                        "برنامه‌ریزی تغذیه سالم با محاسبه کالری و ماکروها",
                                        "/mealplan design a high-protein vegetarian meal plan for 7 days"
                                ],
                                [
                                        "85",
                                        "`/flashcards`",
                                        "تولید فلش‌کارت‌های پرسش و پاسخ برای حفظ و تثبیت مباحث",
                                        "/flashcards create 20 flashcards on JavaScript closures and event loop"
                                ],
                                [
                                        "86",
                                        "`/quiz`",
                                        "طراحی آزمون چهارگزینه‌ای سنجش تسلط همراه با پاسخ تشریحی",
                                        "/quiz create a 10-question quiz testing React hooks mastery"
                                ]
                        ]
                }
        },
        {
                "id": "roleplay-personas-experimental",
                "title": "۱۲. نقش‌آفرینی، شبیه‌سازی پرسونای متخصصین و کدهای تجربی (۸ دستور)",
                "lead": "شبیه‌سازی مصاحبه‌های استخدامی، شبیه‌سازی اتاق فکر با حضور منتقدین سرسخت و تحلیل بدون سوگیری فرضیه‌ها.",
                "table": {
                        "headers": [
                                "ردیف",
                                "دستور (Command)",
                                "توضیحات و عملکرد",
                                "نمونه پرامپت اجرایی"
                        ],
                        "rows": [
                                [
                                        "87",
                                        "`/expert`",
                                        "تغییر پرسونای هوش مصنوعی به یک دانشمند یا متخصص ارشد جهانی",
                                        "/expert act as a Principal Cloud Architect specializing in AWS"
                                ],
                                [
                                        "88",
                                        "`/critic`",
                                        "ایفای نقش یک منتقد سخت‌گیر برای کالبدشکافی ضعف‌ها و نقد بیزینس",
                                        "/critic ruthlessly critique this startup business model and pitch"
                                ],
                                [
                                        "89",
                                        "`/tutor`",
                                        "تبدیل شدن به یک معلم صبور با روش سقراطی و طرح سوالات هدایت‌کننده",
                                        "/tutor teach me linear algebra concepts step by step"
                                ],
                                [
                                        "90",
                                        "`/interviewer`",
                                        "شبیه‌سازی مصاحبه استخدامی تخصصی همراه با سوالات چالش‌برانگیز",
                                        "/interviewer conduct a Senior React Developer system design interview"
                                ],
                                [
                                        "91",
                                        "`/sarcastic`",
                                        "پاسخ‌دهی با لحن طنز، کنایه‌آمیز و جذاب برای سناریوهای خلاق",
                                        "/sarcastic roast my over-engineered portfolio website"
                                ],
                                [
                                        "92",
                                        "`/dan`",
                                        "حالت کاوش سناریوهای فرضی بدون محدودیت‌های پیش‌فرض",
                                        "/dan explore an alternate history where the internet began in 1920"
                                ],
                                [
                                        "93",
                                        "`/debugmode`",
                                        "نمایش زنجیره استدلال تحلیلی درونی و لایه‌های تفکر مدل",
                                        "/debugmode show internal reasoning for solving this combinatorics problem"
                                ],
                                [
                                        "94",
                                        "`/continue`",
                                        "ادامه تولید محتوا از نقطه توقف بدون تکرار بخش‌های قبلی",
                                        "/continue continue generating the remaining code modules"
                                ]
                        ]
                }
        },
        {
                "id": "keyboard-shortcuts-guide",
                "title": "۱۳. جدول جامع کلیدهای میانبر کیبورد در وب، مک و ویندوز",
                "lead": "استفاده از شورت‌کات‌های کیبورد سرعت ناوبری شما را در محیط ChatGPT چندین برابر می‌کند.",
                "table": {
                        "headers": [
                                "عملکرد میانبر",
                                "کلید میانبر در macOS",
                                "کلید میانبر در Windows / Linux"
                        ],
                        "rows": [
                                [
                                        "ایجاد چت جدید (New Chat)",
                                        "Cmd + Shift + O",
                                        "Ctrl + Shift + O"
                                ],
                                [
                                        "فوکوس روی کادر پرامپت",
                                        "Shift + Esc",
                                        "Shift + Esc"
                                ],
                                [
                                        "کپی کردن آخرین پاسخ چت",
                                        "Cmd + Shift + C",
                                        "Ctrl + Shift + C"
                                ],
                                [
                                        "باز و بسته کردن سایدبار",
                                        "Cmd + Shift + S",
                                        "Ctrl + Shift + S"
                                ],
                                [
                                        "تغییر مدل فعال هوش مصنوعی",
                                        "Cmd + Shift + ;",
                                        "Ctrl + Shift + ;"
                                ],
                                [
                                        "حذف چت جاری",
                                        "Cmd + Shift + Backspace",
                                        "Ctrl + Shift + Backspace"
                                ],
                                [
                                        "نمایش راهنمای کامل کلیدها",
                                        "Cmd + /",
                                        "Ctrl + /"
                                ]
                        ]
                }
        },
        {
                "id": "custom-prompt-framework",
                "title": "۱۴. متدولوژی ساخت فریم‌ورک اختصاصی و پرامپت‌های زنجیره‌ای (Prompt Chaining)",
                "lead": "چگونه دستورات اختصاصی خود را در بخش Custom Instructions اکانت ChatGPT تعریف و اتوماسیون کنید؟",
                "paragraphs": [
                        "بهترین روش برای صرفه‌جویی در زمان، تعریف یک ماتریس قوانین دستوری (Command Matrix) در تنظیمات سفارشی اکانت است.",
                        "کافی است بلوک زیر را در بخش «How would you like ChatGPT to respond» قرار دهید تا مدل بلافاصله دستورات شما را بدون حاشیه‌پردازی اجرا کند:"
                ],
                "codeSnippets": [
                        {
                                "title": "الگوی ماتریس فرامین در تنظیمات Custom Instructions",
                                "language": "markdown",
                                "code": "[COMMAND MATRIX PROTOCOL]\nهر زمان پیامی با کاراکتر اسلش (/) آغاز شد، بلافاصله پروتکل مربوطه را به صورت مستقیم و بدون مقدمه‌چینی اجرا کن:\n\n- /landing: ساختار کامل لندینگ پیج با نرخ تبدیل بالا شامل قلاب، اثبات اجتماعی، فیچرها و CTA.\n- /seo: ارائه عنوان سئو (زیر ۶۰ کاراکتر)، متادیسکریپشن (زیر ۱۵۵ کاراکتر)، اسلاگ URL و کلمات کلیدی LSI.\n- /review: بازبینی دقیق متن، اصلاح لحن، حذف حشو و انسان‌سازی (Humanize) طبق استاندارد برند.\n- /audit: تحلیل امنیتی و پرفورمنس کدهای فرانت‌اند همراه با اصلاح باگ‌ها."
                        }
                ]
        },
        {
                "id": "summary-and-takeaways",
                "title": "۱۵. جمع‌بندی نهایی و نقشه راه تسلط بر پرامپت‌های پیشرفته",
                "lead": "هوش مصنوعی ابزاری به وسعت اقیانوس است؛ اما این دستورات دقیق و حساب‌شده هستند که نتیجه را تعیین می‌کنند.",
                "paragraphs": [
                        "با ذخیره کردن این هندبوک و استفاده منظم از ۴۶۰ اسلش‌کامند دسته‌بندی‌شده، زمان اجرای پروژه‌های کدنویسی، طراحی بصری و استراتژی مارکتینگ خود را به کسری از زمان قبل کاهش می‌دهید."
                ]
        }
],
        takeaways: [
        "اسلش‌کامندها مصرف توکن را تا ۷۰٪ کاهش داده و خروجی‌های هوش مصنوعی را کاملاً قطعی و دقیق می‌کنند.",
        "ترکیب شورت‌کدهای نورپردازی و عکاسی استودیویی (/showcase, /luxuryshowcase, /rimlight) تصاویر مصنوعی را به شات‌های فوق‌حرفه‌ای تبدیل می‌کند.",
        "توسعه‌دهندگان می‌توانند با دستوراتی مانند /audit و /refactor کدهای سطح پروداکشن را در کمترین زمان ممکن تحویل دهند.",
        "تعریف ماتریس اختصاصی در تنظیمات Custom Instructions تمام تسک‌های تکراری روزمره شما را خودکار می‌کند."
]
      },
      en: {
        title: "The Ultimate Handbook of 460 ChatGPT Slash Commands & Secret Codes (2026 Edition)",
        summary: "The definitive master reference of 460 ChatGPT slash commands, creative image shortcuts, cinematic render prompts, and developer workflows.",
        category: "Artificial Intelligence",
        readTime: "25 min read",
        publishedDate: "Feb 27, 2026",
        tags: ["ChatGPT", "Prompt Engineering", "Slash Commands", "Artificial Intelligence", "Secret Codes", "Vibe Coding"],
        author: authors.en,
        toc: [
        {
                "id": "understanding-commands",
                "title": "1. The 4-Layer Architecture of ChatGPT Command Processing"
        },
        {
                "id": "core-official-commands",
                "title": "2. Official Core System Commands (Official Commands)"
        },
        {
                "id": "canvas-workspace-and-files",
                "title": "3. Canvas Workspace, Document Management & Data Analytics (Workspace & Data)"
        },
        {
                "id": "commercial-product-showcase",
                "title": "4. Commercial Product Showcase & Advertising Shortcodes (150 Commands)"
        },
        {
                "id": "camera-angles-and-cinema",
                "title": "5. Cinematic Angles, Camera Lenses & Perspective Codes (85 Commands)"
        },
        {
                "id": "ai-image-tools-and-edits",
                "title": "6. Dedicated AI Image Editing & Inpainting Commands (28 Commands)"
        },
        {
                "id": "secret-styles-and-fashion",
                "title": "7. Secret Style Modifiers, High Fashion, Character & Unique Render Codes (103 Codes)"
        },
        {
                "id": "dev-and-coding-prompts",
                "title": "8. Software Engineering, Architecture & Vibe Coding Prompts (16 Commands)"
        },
        {
                "id": "business-and-strategy",
                "title": "9. Business Strategy, Growth & Founder Workflows (15 Commands)"
        },
        {
                "id": "writing-and-copywriting",
                "title": "10. Content Creation, Copywriting & Scriptwriting Commands (18 Commands)"
        },
        {
                "id": "research-and-productivity",
                "title": "11. Deep Research, Learning, Memory & Personal Productivity (18 Commands)"
        },
        {
                "id": "roleplay-personas-experimental",
                "title": "12. Persona Roleplay, Expert Simulation & Experimental Codes (8 Commands)"
        },
        {
                "id": "keyboard-shortcuts-guide",
                "title": "13. Master Keyboard Shortcuts Reference (Web, Mac & Windows)"
        },
        {
                "id": "custom-prompt-framework",
                "title": "14. Building Custom Command Frameworks & Prompt Chaining"
        },
        {
                "id": "summary-and-takeaways",
                "title": "15. Summary & Actionable Roadmap for Advanced Prompting"
        }
],
        sections: [
        {
                "id": "understanding-commands",
                "title": "1. The 4-Layer Architecture of ChatGPT Command Processing",
                "lead": "To master modern AI, you must understand that slash commands operate across four distinct architectural processing layers.",
                "paragraphs": [
                        "Contrary to common misconception that slash commands are mere arbitrary shortcuts, state-of-the-art models like GPT-4o evaluate commands based on access layers, active tools, and semantic parsers.",
                        "The forward-slash (/) operates as a CLI Semantic Delimiter in LLM training. Mastering this structure enables you to achieve deterministic, maximum precision with minimal input tokens."
                ],
                "image": {
                        "src": "/images/blog/chatgpt-commands-architecture.webp",
                        "alt": "The 4-Layer Processing Architecture of Slash Commands in ChatGPT",
                        "caption": "Architectural schematic of the 4 execution tiers: Native Core Application, Isolated Canvas Workspace, Semantic Prompt Layer, and Custom System Instructions."
                },
                "table": {
                        "headers": [
                                "Command Type",
                                "Execution Layer",
                                "Function & Workflow",
                                "Practical Example"
                        ],
                        "rows": [
                                [
                                        "Official Commands",
                                        "ChatGPT Core UI",
                                        "Hardcoded UI system commands for session management, menus, and routing.",
                                        "/canvas or @ Mentions"
                                ],
                                [
                                        "Contextual Commands",
                                        "Active Sandbox / Tool",
                                        "Contextual commands active in dedicated sandboxes like Canvas or Python.",
                                        "/comment or /update"
                                ],
                                [
                                        "Semantic Commands",
                                        "LLM Semantic Parser",
                                        "Semantic triggers where the LLM inherently understands the workflow.",
                                        "/eli5 or /tldr"
                                ],
                                [
                                        "Custom Commands",
                                        "System Rules / Prompts",
                                        "Custom command workflows defined in Custom Instructions or system rules.",
                                        "/audit or /proshot"
                                ]
                        ]
                },
                "callout": {
                        "type": "tip",
                        "title": "Key Advantage of Slash Commands",
                        "text": "Using slash commands reduces input token overhead by up to 70%, accelerates response velocity, and virtually eliminates model hallucination drift."
                }
        },
        {
                "id": "core-official-commands",
                "title": "2. Official Core System Commands (Official Commands)",
                "lead": "These hardcoded system commands are natively integrated by OpenAI into ChatGPT web, desktop, and mobile clients to control system operations.",
                "paragraphs": [
                        "Typing these commands directly into the prompt input triggers core platform features without manual navigation:"
                ],
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Example Prompt"
                        ],
                        "rows": [
                                [
                                        "1",
                                        "`/help`",
                                        "Display help guide, active keyboard shortcuts, and tools in chat.",
                                        "/help"
                                ],
                                [
                                        "2",
                                        "`/new`",
                                        "Start a fresh, clean conversation session without previous context.",
                                        "/new"
                                ],
                                [
                                        "3",
                                        "`/clear`",
                                        "Clear the message history of current session without closing the window.",
                                        "/clear"
                                ],
                                [
                                        "4",
                                        "`/rename`",
                                        "Rename the current chat title in the sidebar.",
                                        "/rename AI Research Vault"
                                ],
                                [
                                        "5",
                                        "`/delete`",
                                        "Permanently delete the current chat directly from the prompt input.",
                                        "/delete"
                                ],
                                [
                                        "6",
                                        "`/settings`",
                                        "Open settings, model selectors, and custom instructions menu.",
                                        "/settings"
                                ],
                                [
                                        "7",
                                        "`/about`",
                                        "Display system version, active model parameters, and platform status.",
                                        "/about"
                                ]
                        ]
                },
                "codeSnippets": [
                        {
                                "title": "Sample Core Command & Context Workflow",
                                "language": "text",
                                "code": "/settings\nPlease calibrate Custom Instructions adhering to Staff Software Engineer principles."
                        }
                ]
        },
        {
                "id": "canvas-workspace-and-files",
                "title": "3. Canvas Workspace, Document Management & Data Analytics (Workspace & Data)",
                "lead": "The Canvas workspace is an interactive split-screen editor for collaborative coding, long-form documents, and data analytics.",
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Example Prompt"
                        ],
                        "rows": [
                                [
                                        "8",
                                        "`/canvas`",
                                        "Open the interactive split-screen Canvas editor for code and documents.",
                                        "/canvas build a scalable TypeScript SaaS boilerplate"
                                ],
                                [
                                        "9",
                                        "`/update`",
                                        "Apply structural edits and full rewrites to the active Canvas document.",
                                        "/update rewrite this entire document in APA style format"
                                ],
                                [
                                        "10",
                                        "`/comment`",
                                        "Analyze document and add explanatory inline comments and documentation.",
                                        "/comment add detailed inline documentation to all helper functions"
                                ],
                                [
                                        "11",
                                        "`/read`",
                                        "Scan and parse attached files, PDF documents, or conversational data stores.",
                                        "/read parse this quarterly financial PDF and extract all tables"
                                ],
                                [
                                        "12",
                                        "`/summarize`",
                                        "Extract dense analytical summaries and key takeaways from long-form documents.",
                                        "/summarize distill this 40-page whitepaper into 5 actionable insights"
                                ],
                                [
                                        "13",
                                        "`/extract`",
                                        "Extract structured data entities, tables, addresses, or numeric metrics from text.",
                                        "/extract pull all email addresses, company names, and LinkedIn URLs"
                                ],
                                [
                                        "14",
                                        "`/table`",
                                        "Format unstructured text into clean Markdown comparison tables or CSV grids.",
                                        "/table format this competitive benchmark comparison as a table"
                                ],
                                [
                                        "15",
                                        "`/pdf`",
                                        "Deep analytical review of multi-page PDF documents, legal contracts, and reports.",
                                        "/pdf analyze this contract and flag liability clauses"
                                ],
                                [
                                        "16",
                                        "`/docx`",
                                        "Generate or edit formatted copy structured for Microsoft Word (.docx) export.",
                                        "/docx generate a formal software license agreement template"
                                ],
                                [
                                        "17",
                                        "`/csv`",
                                        "Generate structured datasets adhering to standard comma-separated values (CSV).",
                                        "/csv export product inventory with SKUs and prices"
                                ],
                                [
                                        "18",
                                        "`/excel`",
                                        "Architect Excel spreadsheet models, calculation formulas, and lookup logic.",
                                        "/excel generate dynamic formulas for CAC and LTV cohorts"
                                ],
                                [
                                        "19",
                                        "`/chart`",
                                        "Generate visual statistical charts, diagrams, or renderable Mermaid syntax.",
                                        "/chart create a funnel conversion chart for marketing channels"
                                ]
                        ]
                },
                "callout": {
                        "type": "info",
                        "title": "Document Analytics Power",
                        "text": "Combining /pdf or /read with /table allows you to convert 100+ page reports into clean comparative data tables in seconds."
                }
        },
        {
                "id": "commercial-product-showcase",
                "title": "4. Commercial Product Showcase & Advertising Shortcodes (150 Commands)",
                "lead": "A master collection of 150 commercial shortcodes for advertising campaigns, 3D billboards, e-commerce assets, and luxury studio product showcases.",
                "paragraphs": [
                        "Upload your product image, add one or more of these shortcodes to the prompt, and specify your desired lighting, camera angle, or background:"
                ],
                "image": {
                        "src": "/images/blog/chatgpt-image-generation-modes.webp",
                        "alt": "Visual Reference Showcase: AI Product Rendering, 3D Billboards, and Studio Lighting Modifiers",
                        "caption": "Visual showcase generated using commercial photography shortcodes, anamorphic 3D billboards, and luxury studio rendering presets."
                },
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Use Case / Execution Example"
                        ],
                        "rows": [
                                [
                                        "95",
                                        "`/3dbillboard`",
                                        "Product appearing to pop out of a city billboard.",
                                        "/3dbillboard"
                                ],
                                [
                                        "96",
                                        "`/cornerbillboard`",
                                        "Anamorphic ad wrapping around a building corner.",
                                        "/cornerbillboard"
                                ],
                                [
                                        "97",
                                        "`/digitalbillboard`",
                                        "Product campaign on a large LED screen.",
                                        "/digitalbillboard"
                                ],
                                [
                                        "98",
                                        "`/highwaybillboard`",
                                        "Outdoor billboard beside a highway.",
                                        "/highwaybillboard"
                                ],
                                [
                                        "99",
                                        "`/rooftopbillboard`",
                                        "Large advertisement above a city building.",
                                        "/rooftopbillboard"
                                ],
                                [
                                        "100",
                                        "`/busstopad`",
                                        "Campaign displayed inside a bus shelter.",
                                        "/busstopad"
                                ],
                                [
                                        "101",
                                        "`/subwayad`",
                                        "Advertising mockup inside a subway station.",
                                        "/subwayad"
                                ],
                                [
                                        "102",
                                        "`/buildingwrap`",
                                        "Campaign covering a building’s exterior.",
                                        "/buildingwrap"
                                ],
                                [
                                        "103",
                                        "`/streetposter`",
                                        "Printed campaign posters in a street setting.",
                                        "/streetposter"
                                ],
                                [
                                        "104",
                                        "`/truckwrap`",
                                        "Branded advertising wrapped around a truck.",
                                        "/truckwrap"
                                ],
                                [
                                        "105",
                                        "`/metaads`",
                                        "Facebook and Instagram feed ad.",
                                        "/metaads"
                                ],
                                [
                                        "106",
                                        "`/storyad`",
                                        "Vertical ad designed for Stories.",
                                        "/storyad"
                                ],
                                [
                                        "107",
                                        "`/reelcover`",
                                        "Bold cover image for a Reel.",
                                        "/reelcover"
                                ],
                                [
                                        "108",
                                        "`/carouselcover`",
                                        "Opening slide for a carousel.",
                                        "/carouselcover"
                                ],
                                [
                                        "109",
                                        "`/carouselslide`",
                                        "Individual carousel slide with matching styling.",
                                        "/carouselslide"
                                ],
                                [
                                        "110",
                                        "`/productlaunch`",
                                        "New-product announcement creative.",
                                        "/productlaunch"
                                ],
                                [
                                        "111",
                                        "`/salead`",
                                        "Promotional design using your supplied offer.",
                                        "/salead"
                                ],
                                [
                                        "112",
                                        "`/pricead`",
                                        "Sales creative emphasizing your supplied price.",
                                        "/pricead"
                                ],
                                [
                                        "113",
                                        "`/retargetingad`",
                                        "Reminder creative for people familiar with the product.",
                                        "/retargetingad"
                                ],
                                [
                                        "114",
                                        "`/collectionad`",
                                        "Multiple products presented as a coordinated collection.",
                                        "/collectionad"
                                ],
                                [
                                        "115",
                                        "`/showcase`",
                                        "Premium studio product presentation.",
                                        "/showcase"
                                ],
                                [
                                        "116",
                                        "`/heroshot`",
                                        "One dominant product with strong visual impact.",
                                        "/heroshot"
                                ],
                                [
                                        "117",
                                        "`/pedestal`",
                                        "Product displayed on a styled platform.",
                                        "/pedestal"
                                ],
                                [
                                        "118",
                                        "`/floatingproduct`",
                                        "Product suspended naturally in the composition.",
                                        "/floatingproduct"
                                ],
                                [
                                        "119",
                                        "`/glassdisplay`",
                                        "Product showcased inside a glass display case.",
                                        "/glassdisplay"
                                ],
                                [
                                        "120",
                                        "`/museumdisplay`",
                                        "Gallery-style product presentation.",
                                        "/museumdisplay"
                                ],
                                [
                                        "121",
                                        "`/luxuryshowcase`",
                                        "Refined materials and premium lighting.",
                                        "/luxuryshowcase"
                                ],
                                [
                                        "122",
                                        "`/minimalshowcase`",
                                        "Clean product composition with generous empty space.",
                                        "/minimalshowcase"
                                ],
                                [
                                        "123",
                                        "`/darkshowcase`",
                                        "Dark studio scene with controlled highlights.",
                                        "/darkshowcase"
                                ],
                                [
                                        "124",
                                        "`/whiteshowcase`",
                                        "Bright studio presentation on white.",
                                        "/whiteshowcase"
                                ],
                                [
                                        "125",
                                        "`/360view`",
                                        "Static multi-angle product sheet.",
                                        "/360view"
                                ],
                                [
                                        "126",
                                        "`/frontview`",
                                        "Straight-on product view.",
                                        "/frontview"
                                ],
                                [
                                        "127",
                                        "`/backview`",
                                        "Rear product view.",
                                        "/backview"
                                ],
                                [
                                        "128",
                                        "`/sideview`",
                                        "Side-profile product view.",
                                        "/sideview"
                                ],
                                [
                                        "129",
                                        "`/topview`",
                                        "Product photographed from directly above.",
                                        "/topview"
                                ],
                                [
                                        "130",
                                        "`/threequarter`",
                                        "Product at a three-quarter angle.",
                                        "/threequarter"
                                ],
                                [
                                        "131",
                                        "`/macrodetail`",
                                        "Close-up of a selected product detail.",
                                        "/macrodetail"
                                ],
                                [
                                        "132",
                                        "`/xray`",
                                        "Stylized translucent view of imagined internal components.",
                                        "/xray"
                                ],
                                [
                                        "133",
                                        "`/cutaway`",
                                        "Conceptual product view with part of its shell removed.",
                                        "/cutaway"
                                ],
                                [
                                        "134",
                                        "`/explodedview`",
                                        "Conceptual separated-component product visualization.",
                                        "/explodedview"
                                ],
                                [
                                        "135",
                                        "`/packshot`",
                                        "Clean commercial product photograph.",
                                        "/packshot"
                                ],
                                [
                                        "136",
                                        "`/catalog`",
                                        "Consistent product image for a catalog.",
                                        "/catalog"
                                ],
                                [
                                        "137",
                                        "`/ecommerce`",
                                        "Simple product-focused online-store image.",
                                        "/ecommerce"
                                ],
                                [
                                        "138",
                                        "`/flatlay`",
                                        "Objects arranged on a surface and photographed overhead.",
                                        "/flatlay"
                                ],
                                [
                                        "139",
                                        "`/productinhand`",
                                        "Product held naturally by a person.",
                                        "/productinhand"
                                ],
                                [
                                        "140",
                                        "`/lifestyle`",
                                        "Product placed in an everyday setting.",
                                        "/lifestyle"
                                ],
                                [
                                        "141",
                                        "`/editorial`",
                                        "Magazine-style creative product photography.",
                                        "/editorial"
                                ],
                                [
                                        "142",
                                        "`/stilllife`",
                                        "Carefully arranged product-and-prop composition.",
                                        "/stilllife"
                                ],
                                [
                                        "143",
                                        "`/texturefocus`",
                                        "Lighting and framing that emphasize material texture.",
                                        "/texturefocus"
                                ],
                                [
                                        "144",
                                        "`/scalecontext`",
                                        "Product beside familiar objects to suggest its size.",
                                        "/scalecontext"
                                ],
                                [
                                        "145",
                                        "`/whitebackground`",
                                        "Clean white background.",
                                        "/whitebackground"
                                ],
                                [
                                        "146",
                                        "`/blackbackground`",
                                        "Deep black background.",
                                        "/blackbackground"
                                ],
                                [
                                        "147",
                                        "`/brandbackground`",
                                        "Background using your supplied brand colors.",
                                        "/brandbackground"
                                ],
                                [
                                        "148",
                                        "`/gradientbackground`",
                                        "Smooth colored gradient backdrop.",
                                        "/gradientbackground"
                                ],
                                [
                                        "149",
                                        "`/greenscreen`",
                                        "Even green background for later chroma keying.",
                                        "/greenscreen"
                                ],
                                [
                                        "150",
                                        "`/studiobackground`",
                                        "Professional seamless studio setting.",
                                        "/studiobackground"
                                ],
                                [
                                        "151",
                                        "`/luxuryinterior`",
                                        "Luxury modern interior architecture and decor surrounding the subject.",
                                        "/luxuryinterior"
                                ],
                                [
                                        "152",
                                        "`/naturebackground`",
                                        "Lush natural outdoor environment with forest, mountain, or coastal daylight.",
                                        "/naturebackground"
                                ],
                                [
                                        "153",
                                        "`/urbanbackground`",
                                        "Contemporary city setting.",
                                        "/urbanbackground"
                                ],
                                [
                                        "154",
                                        "`/futuristicbackground`",
                                        "Futuristic environment with controlled visual detail.",
                                        "/futuristicbackground"
                                ],
                                [
                                        "155",
                                        "`/softlight`",
                                        "Gentle lighting with soft shadows.",
                                        "/softlight"
                                ],
                                [
                                        "156",
                                        "`/hardlight`",
                                        "Strong directional light with crisp shadows.",
                                        "/hardlight"
                                ],
                                [
                                        "157",
                                        "`/goldenhour`",
                                        "Warm, low-angle sunlight.",
                                        "/goldenhour"
                                ],
                                [
                                        "158",
                                        "`/bluehour`",
                                        "Cool twilight lighting.",
                                        "/bluehour"
                                ],
                                [
                                        "159",
                                        "`/windowlight`",
                                        "Natural light entering through a window.",
                                        "/windowlight"
                                ],
                                [
                                        "160",
                                        "`/rimlight`",
                                        "Bright edge lighting around the subject.",
                                        "/rimlight"
                                ],
                                [
                                        "161",
                                        "`/spotlight`",
                                        "Focused light isolating the subject.",
                                        "/spotlight"
                                ],
                                [
                                        "162",
                                        "`/neonlight`",
                                        "Colored neon illumination and reflections.",
                                        "/neonlight"
                                ],
                                [
                                        "163",
                                        "`/backlight`",
                                        "Lighting from behind the subject.",
                                        "/backlight"
                                ],
                                [
                                        "164",
                                        "`/highkey`",
                                        "Bright, airy lighting with restrained shadows.",
                                        "/highkey"
                                ],
                                [
                                        "165",
                                        "`/brandpalette`",
                                        "Applies your supplied brand palette.",
                                        "/brandpalette"
                                ],
                                [
                                        "166",
                                        "`/beigeluxury`",
                                        "Cream, beige, champagne, and soft neutral tones.",
                                        "/beigeluxury"
                                ],
                                [
                                        "167",
                                        "`/navypremium`",
                                        "Deep navy with refined highlights.",
                                        "/navypremium"
                                ],
                                [
                                        "168",
                                        "`/monochrome`",
                                        "Composition built around one color family.",
                                        "/monochrome"
                                ],
                                [
                                        "169",
                                        "`/blackandwhite`",
                                        "Black-and-white treatment with tonal contrast.",
                                        "/blackandwhite"
                                ],
                                [
                                        "170",
                                        "`/pastel`",
                                        "Soft pastel color treatment.",
                                        "/pastel"
                                ],
                                [
                                        "171",
                                        "`/vibrant`",
                                        "Rich, energetic colors.",
                                        "/vibrant"
                                ],
                                [
                                        "172",
                                        "`/muted`",
                                        "Restrained, desaturated palette.",
                                        "/muted"
                                ],
                                [
                                        "173",
                                        "`/cooltone`",
                                        "Cooler overall color mood.",
                                        "/cooltone"
                                ],
                                [
                                        "174",
                                        "`/warmtone`",
                                        "Warmer overall color mood.",
                                        "/warmtone"
                                ],
                                [
                                        "175",
                                        "`/chrome`",
                                        "Reflective chrome treatment.",
                                        "/chrome"
                                ],
                                [
                                        "176",
                                        "`/liquidmetal`",
                                        "Flowing metallic surfaces or surroundings.",
                                        "/liquidmetal"
                                ],
                                [
                                        "177",
                                        "`/glass`",
                                        "Clear glass-like material treatment.",
                                        "/glass"
                                ],
                                [
                                        "178",
                                        "`/frostedglass`",
                                        "Soft translucent glass treatment.",
                                        "/frostedglass"
                                ],
                                [
                                        "179",
                                        "`/holographic`",
                                        "Iridescent, shifting-color appearance.",
                                        "/holographic"
                                ],
                                [
                                        "180",
                                        "`/iridescent`",
                                        "Pearlescent highlights and color reflections.",
                                        "/iridescent"
                                ],
                                [
                                        "181",
                                        "`/matte`",
                                        "Soft, non-reflective surface finish.",
                                        "/matte"
                                ],
                                [
                                        "182",
                                        "`/metallic`",
                                        "Brushed or polished metal appearance.",
                                        "/metallic"
                                ],
                                [
                                        "183",
                                        "`/translucent`",
                                        "Partially transparent material treatment.",
                                        "/translucent"
                                ],
                                [
                                        "184",
                                        "`/clayrender`",
                                        "Matte clay-sculpted 3D render highlighting pure product geometry.",
                                        "/clayrender"
                                ],
                                [
                                        "185",
                                        "`/watersplash`",
                                        "Product surrounded by a sculpted water splash.",
                                        "/watersplash"
                                ],
                                [
                                        "186",
                                        "`/underwater`",
                                        "Artistic underwater product scene.",
                                        "/underwater"
                                ],
                                [
                                        "187",
                                        "`/smokereveal`",
                                        "Product emerging through controlled smoke.",
                                        "/smokereveal"
                                ],
                                [
                                        "188",
                                        "`/powderburst`",
                                        "Colored powder bursting around the subject.",
                                        "/powderburst"
                                ],
                                [
                                        "189",
                                        "`/particletrail`",
                                        "Fine particles tracing movement through the scene.",
                                        "/particletrail"
                                ],
                                [
                                        "190",
                                        "`/lighttrails`",
                                        "Flowing light paths around the subject.",
                                        "/lighttrails"
                                ],
                                [
                                        "191",
                                        "`/levitation`",
                                        "Multiple objects suspended in a balanced composition.",
                                        "/levitation"
                                ],
                                [
                                        "192",
                                        "`/gravitydefying`",
                                        "Surreal balancing or impossible product placement.",
                                        "/gravitydefying"
                                ],
                                [
                                        "193",
                                        "`/motionfreeze`",
                                        "A moment of action captured sharply.",
                                        "/motionfreeze"
                                ],
                                [
                                        "194",
                                        "`/speedblur`",
                                        "Sharp hero subject with directional background blur.",
                                        "/speedblur"
                                ],
                                [
                                        "195",
                                        "`/packaging`",
                                        "Product packaging concept.",
                                        "/packaging"
                                ],
                                [
                                        "196",
                                        "`/boxmockup`",
                                        "Your design applied to a box.",
                                        "/boxmockup"
                                ],
                                [
                                        "197",
                                        "`/bottlemockup`",
                                        "Your label applied to a bottle.",
                                        "/bottlemockup"
                                ],
                                [
                                        "198",
                                        "`/pouchmockup`",
                                        "Branded flexible pouch packaging.",
                                        "/pouchmockup"
                                ],
                                [
                                        "199",
                                        "`/bagmockup`",
                                        "Branded shopping bag.",
                                        "/bagmockup"
                                ],
                                [
                                        "200",
                                        "`/labelmockup`",
                                        "Label design shown on a suitable product.",
                                        "/labelmockup"
                                ],
                                [
                                        "201",
                                        "`/unboxing`",
                                        "Product and packaging arranged in an unboxing scene.",
                                        "/unboxing"
                                ],
                                [
                                        "202",
                                        "`/giftset`",
                                        "Coordinated products presented as a gift set.",
                                        "/giftset"
                                ],
                                [
                                        "203",
                                        "`/embossedlogo`",
                                        "Supplied logo shown embossed into a surface.",
                                        "/embossedlogo"
                                ],
                                [
                                        "204",
                                        "`/foilprint`",
                                        "Supplied artwork with a metallic foil-print appearance.",
                                        "/foilprint"
                                ],
                                [
                                        "205",
                                        "`/typographyposter`",
                                        "Poster led by expressive typography.",
                                        "/typographyposter"
                                ],
                                [
                                        "206",
                                        "`/headlinead`",
                                        "Ad built around one strong headline.",
                                        "/headlinead"
                                ],
                                [
                                        "207",
                                        "`/minimalposter`",
                                        "Simple poster with limited visual elements.",
                                        "/minimalposter"
                                ],
                                [
                                        "208",
                                        "`/boldposter`",
                                        "Large typography and strong contrast.",
                                        "/boldposter"
                                ],
                                [
                                        "209",
                                        "`/splitlayout`",
                                        "Balanced division between imagery and copy.",
                                        "/splitlayout"
                                ],
                                [
                                        "210",
                                        "`/comparisonlayout`",
                                        "Side-by-side comparison using supplied facts or images.",
                                        "/comparisonlayout"
                                ],
                                [
                                        "211",
                                        "`/featurecallouts`",
                                        "Product callouts using verified details you provide.",
                                        "/featurecallouts"
                                ],
                                [
                                        "212",
                                        "`/testimonialad`",
                                        "Design featuring a real testimonial you supply.",
                                        "/testimonialad"
                                ],
                                [
                                        "213",
                                        "`/magazinecover`",
                                        "Editorial cover-style composition.",
                                        "/magazinecover"
                                ],
                                [
                                        "214",
                                        "`/campaignkeyvisual`",
                                        "Main visual establishing a campaign’s look.",
                                        "/campaignkeyvisual"
                                ],
                                [
                                        "215",
                                        "`/enhance`",
                                        "Improves perceived clarity, lighting, and overall finish.",
                                        "/enhance"
                                ],
                                [
                                        "216",
                                        "`/denoise`",
                                        "Reduces visible noise and rough artifacts.",
                                        "/denoise"
                                ],
                                [
                                        "217",
                                        "`/sharpen`",
                                        "Increases perceived edge and detail clarity.",
                                        "/sharpen"
                                ],
                                [
                                        "218",
                                        "`/whitebalance`",
                                        "Corrects an unwanted warm or cool cast.",
                                        "/whitebalance"
                                ],
                                [
                                        "219",
                                        "`/exposurefix`",
                                        "Balances an image that appears too dark or bright.",
                                        "/exposurefix"
                                ],
                                [
                                        "220",
                                        "`/colorcorrect`",
                                        "Adjusts colors toward a natural appearance.",
                                        "/colorcorrect"
                                ],
                                [
                                        "221",
                                        "`/removetext`",
                                        "Removes unwanted text from the image.",
                                        "/removetext"
                                ],
                                [
                                        "222",
                                        "`/removeobject`",
                                        "Removes an object you identify.",
                                        "/removeobject"
                                ],
                                [
                                        "223",
                                        "`/replacebackground`",
                                        "Replaces the background with your requested setting.",
                                        "/replacebackground"
                                ],
                                [
                                        "224",
                                        "`/recolor`",
                                        "Changes the color of a specified object or surface.",
                                        "/recolor"
                                ],
                                [
                                        "225",
                                        "`/zoomout`",
                                        "Extends the scene around the subject.",
                                        "/zoomout"
                                ],
                                [
                                        "226",
                                        "`/extendhorizontal`",
                                        "Expands the canvas on the left and right.",
                                        "/extendhorizontal"
                                ],
                                [
                                        "227",
                                        "`/extendvertical`",
                                        "Expands the canvas at the top and bottom.",
                                        "/extendvertical"
                                ],
                                [
                                        "228",
                                        "`/fullproduct`",
                                        "Reframes or reconstructs a fully visible product.",
                                        "/fullproduct"
                                ],
                                [
                                        "229",
                                        "`/centercomposition`",
                                        "Places the main subject centrally.",
                                        "/centercomposition"
                                ],
                                [
                                        "230",
                                        "`/negativespace`",
                                        "Adds clean space for copy or layout.",
                                        "/negativespace"
                                ],
                                [
                                        "231",
                                        "`/symmetry`",
                                        "Creates a balanced, symmetrical composition.",
                                        "/symmetry"
                                ],
                                [
                                        "232",
                                        "`/portraitformat`",
                                        "Adapts the composition to a vertical format.",
                                        "/portraitformat"
                                ],
                                [
                                        "233",
                                        "`/landscapeformat`",
                                        "Adapts the composition to a horizontal format.",
                                        "/landscapeformat"
                                ],
                                [
                                        "234",
                                        "`/squareformat`",
                                        "Adapts the composition to a square format.",
                                        "/squareformat"
                                ],
                                [
                                        "235",
                                        "`/3drender`",
                                        "Polished 3D-style product visualization.",
                                        "/3drender"
                                ],
                                [
                                        "236",
                                        "`/claystyle`",
                                        "Soft sculpted-clay illustration.",
                                        "/claystyle"
                                ],
                                [
                                        "237",
                                        "`/papercraft`",
                                        "Layered cut-paper appearance.",
                                        "/papercraft"
                                ],
                                [
                                        "238",
                                        "`/origami`",
                                        "Folded-paper interpretation.",
                                        "/origami"
                                ],
                                [
                                        "239",
                                        "`/isometric`",
                                        "Isometric illustrated composition.",
                                        "/isometric"
                                ],
                                [
                                        "240",
                                        "`/lineart`",
                                        "Clean outline illustration.",
                                        "/lineart"
                                ],
                                [
                                        "241",
                                        "`/pencilsketch`",
                                        "Pencil-drawn interpretation.",
                                        "/pencilsketch"
                                ],
                                [
                                        "242",
                                        "`/watercolor`",
                                        "Watercolor illustration.",
                                        "/watercolor"
                                ],
                                [
                                        "243",
                                        "`/comicstyle`",
                                        "Graphic comic-style treatment.",
                                        "/comicstyle"
                                ],
                                [
                                        "244",
                                        "`/retroprint`",
                                        "Vintage printed-poster aesthetic.",
                                        "/retroprint"
                                ]
                        ]
                },
                "callout": {
                        "type": "quote",
                        "title": "Golden Product Photography Prompt Formula",
                        "text": "[Uploaded Product Photo] + /showcase + /luxuryshowcase + /rimlight + Keep original product colors, portrait 4:5, no text."
                }
        },
        {
                "id": "camera-angles-and-cinema",
                "title": "5. Cinematic Angles, Camera Lenses & Perspective Codes (85 Commands)",
                "lead": "Precision parameters for camera elevation, focal lengths, framing composition, and cinematic lighting in AI generation.",
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Use Case / Execution Example"
                        ],
                        "rows": [
                                [
                                        "245",
                                        "`/lowangle`",
                                        "Camera below the subject for a powerful, dominant perspective.",
                                        "/lowangle"
                                ],
                                [
                                        "246",
                                        "`/highangle`",
                                        "Camera above the subject for vulnerability, scale, or graphic composition.",
                                        "/highangle"
                                ],
                                [
                                        "247",
                                        "`/eyelevel`",
                                        "Natural eye-level perspective with balanced, realistic proportions.",
                                        "/eyelevel"
                                ],
                                [
                                        "248",
                                        "`/dutchangle`",
                                        "Tilt the horizon for tension, chaos, or a stylized editorial feel.",
                                        "/dutchangle"
                                ],
                                [
                                        "249",
                                        "`/OTS`",
                                        "Over-the-shoulder framing that creates depth and a cinematic viewpoint.",
                                        "/OTS"
                                ],
                                [
                                        "250",
                                        "`/POV`",
                                        "First-person perspective as if the viewer is physically in the scene.",
                                        "/POV"
                                ],
                                [
                                        "251",
                                        "`/wormsview`",
                                        "Extreme ground-level view looking dramatically upward.",
                                        "/wormsview"
                                ],
                                [
                                        "252",
                                        "`/birdsview`",
                                        "High overhead perspective looking down into the scene.",
                                        "/birdsview"
                                ],
                                [
                                        "253",
                                        "`/droneview`",
                                        "Aerial cinematic viewpoint with strong spatial scale.",
                                        "/droneview"
                                ],
                                [
                                        "254",
                                        "`/closeup`",
                                        "Tight framing emphasizing face, texture, emotion, or product detail.",
                                        "/closeup"
                                ],
                                [
                                        "255",
                                        "`/extremecloseup`",
                                        "Ultra-tight crop focused on one striking visual detail.",
                                        "/extremecloseup"
                                ],
                                [
                                        "256",
                                        "`/mediumshot`",
                                        "Balanced upper-body framing for portraits, ads, and dialogue.",
                                        "/mediumshot"
                                ],
                                [
                                        "257",
                                        "`/fullbody`",
                                        "Full-body composition with clean space around the subject.",
                                        "/fullbody"
                                ],
                                [
                                        "258",
                                        "`/wideframe`",
                                        "Wide cinematic composition showing subject and environment together.",
                                        "/wideframe"
                                ],
                                [
                                        "259",
                                        "`/centerframe`",
                                        "Subject locked centrally for an iconic, poster-like composition.",
                                        "/centerframe"
                                ],
                                [
                                        "260",
                                        "`/ruleofthirds`",
                                        "Place the subject on a third for a natural editorial composition.",
                                        "/ruleofthirds"
                                ],
                                [
                                        "261",
                                        "`/foregroundframe`",
                                        "Use foreground elements to create depth and layered perspective.",
                                        "/foregroundframe"
                                ],
                                [
                                        "262",
                                        "`/cinematic`",
                                        "High-end movie still with controlled lighting, depth, and composition.",
                                        "/cinematic"
                                ],
                                [
                                        "263",
                                        "`/filmstill`",
                                        "Authentic narrative film-frame feeling with natural imperfections.",
                                        "/filmstill"
                                ],
                                [
                                        "264",
                                        "`/anamorphic`",
                                        "Wide-screen cinema aesthetic with lens character and subtle flare.",
                                        "/anamorphic"
                                ],
                                [
                                        "265",
                                        "`/imax`",
                                        "Large-format visual scale with immersive detail and dramatic perspective.",
                                        "/imax"
                                ],
                                [
                                        "266",
                                        "`/noir`",
                                        "Moody black-and-white crime-film atmosphere with strong shadows.",
                                        "/noir"
                                ],
                                [
                                        "267",
                                        "`/neonnoir`",
                                        "Dark cinematic scene with colorful neon accents and reflections.",
                                        "/neonnoir"
                                ],
                                [
                                        "268",
                                        "`/vintagefilm`",
                                        "Analog film texture, gentle grain, halation, and nostalgic color.",
                                        "/vintagefilm"
                                ],
                                [
                                        "269",
                                        "`/70scinema`",
                                        "Warm, textured 1970s-inspired cinematic photography.",
                                        "/70scinema"
                                ],
                                [
                                        "270",
                                        "`/80saction`",
                                        "Bold action-film lighting, contrast, atmosphere, and heroic framing.",
                                        "/80saction"
                                ],
                                [
                                        "271",
                                        "`/indiefilm`",
                                        "Naturalistic, intimate filmmaking with understated visual choices.",
                                        "/indiefilm"
                                ],
                                [
                                        "272",
                                        "`/silhouette`",
                                        "Expose for the background so the subject becomes a bold dark shape.",
                                        "/silhouette"
                                ],
                                [
                                        "273",
                                        "`/chiaroscuro`",
                                        "Dramatic light-versus-shadow treatment inspired by classical painting.",
                                        "/chiaroscuro"
                                ],
                                [
                                        "274",
                                        "`/practicallight`",
                                        "Visible lamps, screens, signs, or fixtures become believable light sources.",
                                        "/practicallight"
                                ],
                                [
                                        "275",
                                        "`/producthero`",
                                        "Make the product the unmistakable visual hero of the frame.",
                                        "/producthero"
                                ],
                                [
                                        "276",
                                        "`/luxuryad`",
                                        "Premium commercial treatment with restrained composition and immaculate detail.",
                                        "/luxuryad"
                                ],
                                [
                                        "277",
                                        "`/applestyle`",
                                        "Minimal, refined product advertising with generous space and clean hierarchy.",
                                        "/applestyle"
                                ],
                                [
                                        "278",
                                        "`/billboard`",
                                        "Design the scene like a striking outdoor advertising campaign.",
                                        "/billboard"
                                ],
                                [
                                        "279",
                                        "`/editorialad`",
                                        "High-fashion magazine advertising with sophisticated composition.",
                                        "/editorialad"
                                ],
                                [
                                        "280",
                                        "`/beautyshot`",
                                        "Polished hero image emphasizing surface, form, and premium finish.",
                                        "/beautyshot"
                                ],
                                [
                                        "281",
                                        "`/macroproduct`",
                                        "Extreme detail shot highlighting materials, texture, and craftsmanship.",
                                        "/macroproduct"
                                ],
                                [
                                        "282",
                                        "`/freezeaction`",
                                        "Freeze a fast-moving moment with crisp detail and dramatic timing.",
                                        "/freezeaction"
                                ],
                                [
                                        "283",
                                        "`/motionblur`",
                                        "Directional motion blur while keeping the main subject readable.",
                                        "/motionblur"
                                ],
                                [
                                        "284",
                                        "`/speedramp`",
                                        "Visual language inspired by a dramatic slow-fast-slow action sequence.",
                                        "/speedramp"
                                ],
                                [
                                        "285",
                                        "`/midair`",
                                        "Capture the subject suspended at a visually impossible peak moment.",
                                        "/midair"
                                ],
                                [
                                        "286",
                                        "`/impactframe`",
                                        "Compose the instant of impact with debris, motion, and visual energy.",
                                        "/impactframe"
                                ],
                                [
                                        "287",
                                        "`/windblown`",
                                        "Use believable wind to animate hair, fabric, smoke, and loose objects.",
                                        "/windblown"
                                ],
                                [
                                        "288",
                                        "`/runningframe`",
                                        "Dynamic running pose with cinematic perspective and environmental motion.",
                                        "/runningframe"
                                ],
                                [
                                        "289",
                                        "`/jumpcutframe`",
                                        "Create a visually surprising moment that feels like an editorial jump cut.",
                                        "/jumpcutframe"
                                ],
                                [
                                        "290",
                                        "`/collision`",
                                        "Stage visual elements converging in a dramatic controlled moment.",
                                        "/collision"
                                ],
                                [
                                        "291",
                                        "`/chaosframe`",
                                        "Dense, energetic composition with multiple simultaneous visual events.",
                                        "/chaosframe"
                                ],
                                [
                                        "292",
                                        "`/impossibleangle`",
                                        "Camera perspective that could not physically exist in normal photography.",
                                        "/impossibleangle"
                                ],
                                [
                                        "293",
                                        "`/gravityoff`",
                                        "Objects and people float naturally as if gravity has been switched off.",
                                        "/gravityoff"
                                ],
                                [
                                        "294",
                                        "`/giantobject`",
                                        "Turn an ordinary object into a monumental element of the world.",
                                        "/giantobject"
                                ],
                                [
                                        "295",
                                        "`/miniworld`",
                                        "Build a tiny believable world around or inside the main subject.",
                                        "/miniworld"
                                ],
                                [
                                        "296",
                                        "`/mirrorworld`",
                                        "Create a mirrored or alternate reality with intentional visual logic.",
                                        "/mirrorworld"
                                ],
                                [
                                        "297",
                                        "`/dreamlogic`",
                                        "Surreal scene where visual relationships feel dreamlike but coherent.",
                                        "/dreamlogic"
                                ],
                                [
                                        "298",
                                        "`/infinite`",
                                        "Repeat or extend an element into an impossible infinite environment.",
                                        "/infinite"
                                ],
                                [
                                        "299",
                                        "`/portal`",
                                        "Introduce a believable portal connecting two visually different spaces.",
                                        "/portal"
                                ],
                                [
                                        "300",
                                        "`/scaleillusion`",
                                        "Manipulate perspective so objects appear dramatically oversized or tiny.",
                                        "/scaleillusion"
                                ],
                                [
                                        "301",
                                        "`/realityshift`",
                                        "Blend two incompatible environments into one convincing photographic scene.",
                                        "/realityshift"
                                ],
                                [
                                        "302",
                                        "`/fashioneditorial`",
                                        "High-fashion magazine composition with deliberate styling and attitude.",
                                        "/fashioneditorial"
                                ],
                                [
                                        "303",
                                        "`/streetphoto`",
                                        "Candid documentary-style street photography with natural imperfection.",
                                        "/streetphoto"
                                ],
                                [
                                        "304",
                                        "`/paparazzi`",
                                        "Flash-heavy candid celebrity-photography energy without polished posing.",
                                        "/paparazzi"
                                ],
                                [
                                        "305",
                                        "`/polaroid`",
                                        "Instant-film aesthetic with soft contrast, grain, and casual framing.",
                                        "/polaroid"
                                ],
                                [
                                        "306",
                                        "`/35mm`",
                                        "Classic 35mm photographic character with realistic grain and lens response.",
                                        "/35mm"
                                ],
                                [
                                        "307",
                                        "`/mediumformat`",
                                        "Clean, detailed medium-format look with rich tonal separation.",
                                        "/mediumformat"
                                ],
                                [
                                        "308",
                                        "`/disposablecam`",
                                        "Casual imperfect flash photography with nostalgic consumer-camera character.",
                                        "/disposablecam"
                                ],
                                [
                                        "309",
                                        "`/contactsheet`",
                                        "Present multiple photographic moments as a cohesive contact-sheet layout.",
                                        "/contactsheet"
                                ],
                                [
                                        "310",
                                        "`/lookbook`",
                                        "Fashion lookbook presentation with consistent styling and clean composition.",
                                        "/lookbook"
                                ],
                                [
                                        "311",
                                        "`/coverstory`",
                                        "Magazine-cover-ready portrait with deliberate negative space and hierarchy.",
                                        "/coverstory"
                                ],
                                [
                                        "312",
                                        "`/BTS`",
                                        "Behind-the-scenes version showing the real production setup around the shot.",
                                        "/BTS"
                                ],
                                [
                                        "313",
                                        "`/behindthescenes`",
                                        "Reveal camera, crew, lights, props, and environment behind the final frame.",
                                        "/behindthescenes"
                                ],
                                [
                                        "314",
                                        "`/setphoto`",
                                        "Photograph the subject on a professional production set.",
                                        "/setphoto"
                                ],
                                [
                                        "315",
                                        "`/camerarig`",
                                        "Show camera body, lens, tripod, monitor, and rig in the scene.",
                                        "/camerarig"
                                ],
                                [
                                        "316",
                                        "`/lightingrig`",
                                        "Reveal softboxes, flags, stands, practical lights, and modifiers.",
                                        "/lightingrig"
                                ],
                                [
                                        "317",
                                        "`/directorview`",
                                        "Frame the scene from the director's working position on set.",
                                        "/directorview"
                                ],
                                [
                                        "318",
                                        "`/videovillage`",
                                        "Show the production monitor and crew reviewing the shot.",
                                        "/videovillage"
                                ],
                                [
                                        "319",
                                        "`/studiofloor`",
                                        "Wide view of a functioning photo or film studio around the subject.",
                                        "/studiofloor"
                                ],
                                [
                                        "320",
                                        "`/beforeafter`",
                                        "Visually compare the raw production setup with the polished final image.",
                                        "/beforeafter"
                                ],
                                [
                                        "321",
                                        "`/makingof`",
                                        "Cinematic making-of photograph capturing the craft behind the image.",
                                        "/makingof"
                                ],
                                [
                                        "322",
                                        "`/fisheye`",
                                        "Extreme wide-angle lens distortion for an energetic, unconventional frame.",
                                        "/fisheye"
                                ],
                                [
                                        "323",
                                        "`/tinyplanet`",
                                        "Wrap the environment into a surreal spherical tiny-planet composition.",
                                        "/tinyplanet"
                                ],
                                [
                                        "324",
                                        "`/reflection`",
                                        "Build the composition around mirrors, glass, water, or polished reflections.",
                                        "/reflection"
                                ],
                                [
                                        "325",
                                        "`/throughglass`",
                                        "Shoot through realistic glass with reflections, refraction, and layered depth.",
                                        "/throughglass"
                                ],
                                [
                                        "326",
                                        "`/xraystyle`",
                                        "Stylized transparent visualization revealing internal structures.",
                                        "/xraystyle"
                                ],
                                [
                                        "327",
                                        "`/thermal`",
                                        "Thermal-camera-inspired visual treatment with graphic temperature mapping.",
                                        "/thermal"
                                ],
                                [
                                        "328",
                                        "`/blueprint`",
                                        "Technical blueprint-style presentation with structured visual information.",
                                        "/blueprint"
                                ],
                                [
                                        "329",
                                        "`/conceptart`",
                                        "High-end cinematic concept-art presentation retaining photographic detail.",
                                        "/conceptart"
                                ]
                        ]
                }
        },
        {
                "id": "ai-image-tools-and-edits",
                "title": "6. Dedicated AI Image Editing & Inpainting Commands (28 Commands)",
                "lead": "Direct operational commands for generative editing, inpainting, background replacement, vintage colorization, and visual conversion.",
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Use Case / Execution Example"
                        ],
                        "rows": [
                                [
                                        "330",
                                        "`/generateimage`",
                                        "Create an image from a text description.",
                                        "/generateimage"
                                ],
                                [
                                        "331",
                                        "`/generatehandwrittenimage`",
                                        "Create a realistic handwritten note or letter.",
                                        "/generatehandwrittenimage"
                                ],
                                [
                                        "332",
                                        "`/editimage`",
                                        "Modify an existing image.",
                                        "/editimage"
                                ],
                                [
                                        "333",
                                        "`/removebackground`",
                                        "Remove the background from an image.",
                                        "/removebackground"
                                ],
                                [
                                        "334",
                                        "`/upscale`",
                                        "Increase image resolution and clarity.",
                                        "/upscale"
                                ],
                                [
                                        "335",
                                        "`/enhanceimage`",
                                        "Improve image quality, lighting, and sharpness.",
                                        "/enhanceimage"
                                ],
                                [
                                        "336",
                                        "`/restorephoto`",
                                        "Repair old, damaged, or faded photos.",
                                        "/restorephoto"
                                ],
                                [
                                        "337",
                                        "`/colorize`",
                                        "Add color to black-and-white images.",
                                        "/colorize"
                                ],
                                [
                                        "338",
                                        "`/inpaint`",
                                        "Remove or replace selected objects in an image.",
                                        "/inpaint"
                                ],
                                [
                                        "339",
                                        "`/outpaint`",
                                        "Extend an image beyond its original borders.",
                                        "/outpaint"
                                ],
                                [
                                        "340",
                                        "`/generatelogo`",
                                        "Design a logo.",
                                        "/generatelogo"
                                ],
                                [
                                        "341",
                                        "`/generateicon`",
                                        "Create icons.",
                                        "/generateicon"
                                ],
                                [
                                        "342",
                                        "`/generateposter`",
                                        "Design posters.",
                                        "/generateposter"
                                ],
                                [
                                        "343",
                                        "`/generatebanner`",
                                        "Create banners.",
                                        "/generatebanner"
                                ],
                                [
                                        "344",
                                        "`/generatethumbnail`",
                                        "Make thumbnails.",
                                        "/generatethumbnail"
                                ],
                                [
                                        "345",
                                        "`/generateavatar`",
                                        "Generate avatars.",
                                        "/generateavatar"
                                ],
                                [
                                        "346",
                                        "`/generatepixelart`",
                                        "Create pixel art.",
                                        "/generatepixelart"
                                ],
                                [
                                        "347",
                                        "`/generateanime`",
                                        "Generate anime-style artwork.",
                                        "/generateanime"
                                ],
                                [
                                        "348",
                                        "`/generatephotorealistic`",
                                        "Create photorealistic images.",
                                        "/generatephotorealistic"
                                ],
                                [
                                        "349",
                                        "`/generate3d`",
                                        "Produce 3D-style illustrations.",
                                        "/generate3d"
                                ],
                                [
                                        "350",
                                        "`/generatesticker`",
                                        "Design stickers.",
                                        "/generatesticker"
                                ],
                                [
                                        "351",
                                        "`/generateinfographic`",
                                        "Create infographics.",
                                        "/generateinfographic"
                                ],
                                [
                                        "352",
                                        "`/mockup`",
                                        "Create product mockups.",
                                        "/mockup"
                                ],
                                [
                                        "353",
                                        "`/grammar`",
                                        "Correct grammar.",
                                        "/grammar"
                                ],
                                [
                                        "354",
                                        "`/blog`",
                                        "Write blog posts.",
                                        "/blog"
                                ],
                                [
                                        "355",
                                        "`/essay`",
                                        "Write essays.",
                                        "/essay"
                                ],
                                [
                                        "356",
                                        "`/analyze`",
                                        "Analyze data.",
                                        "/analyze"
                                ],
                                [
                                        "357",
                                        "`/research`",
                                        "Research a topic.",
                                        "/research"
                                ]
                        ]
                }
        },
        {
                "id": "secret-styles-and-fashion",
                "title": "7. Secret Style Modifiers, High Fashion, Character & Unique Render Codes (103 Codes)",
                "lead": "Secret aesthetic codes for wardrobe styling, facial alteration, anime, cyberpunk, historical eras, sci-fi, and haute couture fashion.",
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Use Case / Execution Example"
                        ],
                        "rows": [
                                [
                                        "358",
                                        "`/PROSHOT`",
                                        "Professional studio photography setup with calibrated lighting and color grade.",
                                        "/PROSHOT"
                                ],
                                [
                                        "359",
                                        "`/NEWBG`",
                                        "Replace image background seamlessly with a requested custom environment.",
                                        "/NEWBG"
                                ],
                                [
                                        "360",
                                        "`/OUTFIT`",
                                        "Intelligently style new wardrobe and clothing while preserving facial identity.",
                                        "/OUTFIT"
                                ],
                                [
                                        "361",
                                        "`/TOGETHER`",
                                        "Combine multiple separate characters or subjects naturally into a unified frame.",
                                        "/TOGETHER"
                                ],
                                [
                                        "362",
                                        "`/HDREAL`",
                                        "Enhance image resolution to hyper-realistic camera capture with skin microtexture.",
                                        "/HDREAL"
                                ],
                                [
                                        "363",
                                        "`/PASSPORT`",
                                        "Generate biometric passport headshot on clean neutral background with even light.",
                                        "/PASSPORT"
                                ],
                                [
                                        "364",
                                        "`/steampunk`",
                                        "Victorian Steampunk aesthetic with brass gears, copper pipes, and steam engines.",
                                        "/steampunk"
                                ],
                                [
                                        "365",
                                        "`/ghibli`",
                                        "Dreamy Studio Ghibli hand-painted aesthetic with lush meadows and clouds.",
                                        "/ghibli"
                                ],
                                [
                                        "366",
                                        "`/anime`",
                                        "Modern Japanese anime illustration with expressive eyes and crisp linework.",
                                        "/anime"
                                ],
                                [
                                        "367",
                                        "`/chibi`",
                                        "Cute miniature Chibi character proportions with playful expressive styling.",
                                        "/chibi"
                                ],
                                [
                                        "368",
                                        "`/disney`",
                                        "Classic Disney storybook animation style with warm emotional charm.",
                                        "/disney"
                                ],
                                [
                                        "369",
                                        "`/pixar`",
                                        "High-end Pixar 3D CGI character animation with subsurface skin scattering.",
                                        "/pixar"
                                ],
                                [
                                        "370",
                                        "`/dreamworks`",
                                        "Dynamic DreamWorks animated style with humorous expressions and vivid action.",
                                        "/dreamworks"
                                ],
                                [
                                        "371",
                                        "`/filmgrain`",
                                        "Organic 35mm motion picture film grain texture with nostalgic analog depth.",
                                        "/filmgrain"
                                ],
                                [
                                        "372",
                                        "`/retro90s`",
                                        "Nostalgic 1990s pop culture aesthetic with vibrant retro tones and VHS vibes.",
                                        "/retro90s"
                                ],
                                [
                                        "373",
                                        "`/y2k`",
                                        "Futuristic Y2K cyber aesthetic with chrome metallics and bubblegum translucency.",
                                        "/y2k"
                                ],
                                [
                                        "374",
                                        "`/synthwave`",
                                        "80s Synthwave aesthetic with neon grid horizons, chrome grid, and sunset hues.",
                                        "/synthwave"
                                ],
                                [
                                        "375",
                                        "`/outrun`",
                                        "Nighttime Outrun arcade racing mood with high-speed neon light trails.",
                                        "/outrun"
                                ],
                                [
                                        "376",
                                        "`/glitch`",
                                        "Digital glitch art distortion with chromatic RGB split and CRT scanlines.",
                                        "/glitch"
                                ],
                                [
                                        "377",
                                        "`/hologram`",
                                        "Futuristic volumetric 3D light hologram with glowing turquoise scanlines.",
                                        "/hologram"
                                ],
                                [
                                        "378",
                                        "`/glassmorphism`",
                                        "Modern UI glassmorphism with frosted blur panels and specular border gleam.",
                                        "/glassmorphism"
                                ],
                                [
                                        "379",
                                        "`/neon`",
                                        "Vibrant high-contrast neon illumination glowing in darkness.",
                                        "/neon"
                                ],
                                [
                                        "380",
                                        "`/goldluxury`",
                                        "Opulent 24k polished gold accents paired with glossy black marble textures.",
                                        "/goldluxury"
                                ],
                                [
                                        "381",
                                        "`/minimal`",
                                        "Restrained minimalist aesthetic prioritizing negative space and pure form.",
                                        "/minimal"
                                ],
                                [
                                        "382",
                                        "`/flatdesign`",
                                        "Clean 2D flat graphic design with bold color blocks and geometric vector shapes.",
                                        "/flatdesign"
                                ],
                                [
                                        "383",
                                        "`/doodle`",
                                        "Playful hand-drawn whimsical doodle sketches with organic ink outlines.",
                                        "/doodle"
                                ],
                                [
                                        "384",
                                        "`/graffiti`",
                                        "Urban spray-paint street graffiti mural on weathered brick texture.",
                                        "/graffiti"
                                ],
                                [
                                        "385",
                                        "`/spraypaint`",
                                        "Layered stencil spray paint technique with organic aerosol overspray splatter.",
                                        "/spraypaint"
                                ],
                                [
                                        "386",
                                        "`/popart`",
                                        "Andy Warhol inspired Pop Art with bold silkscreen halftone dot patterns.",
                                        "/popart"
                                ],
                                [
                                        "387",
                                        "`/cubism`",
                                        "Picasso-style analytical Cubism fragmenting subjects into geometric facets.",
                                        "/cubism"
                                ],
                                [
                                        "388",
                                        "`/surreal`",
                                        "Salvador Dali surrealism blending dreamscapes with paradoxical physics.",
                                        "/surreal"
                                ],
                                [
                                        "389",
                                        "`/abstract`",
                                        "Modern non-representational abstract art with expressive texture flows.",
                                        "/abstract"
                                ],
                                [
                                        "390",
                                        "`/expressionism`",
                                        "Emotional Expressionism with heavy impasto brushstrokes and vivid drama.",
                                        "/expressionism"
                                ],
                                [
                                        "391",
                                        "`/renaissance`",
                                        "Classical Renaissance oil painting with delicate sfumato and anatomical mastery.",
                                        "/renaissance"
                                ],
                                [
                                        "392",
                                        "`/baroque`",
                                        "Dramatic Baroque period grandeur with extreme chiaroscuro illumination.",
                                        "/baroque"
                                ],
                                [
                                        "393",
                                        "`/gothic`",
                                        "Dark Gothic romantic aesthetic with vaulted cathedrals and stained glass shadows.",
                                        "/gothic"
                                ],
                                [
                                        "394",
                                        "`/fantasy`",
                                        "High-fantasy mystical world with floating citadel peaks and radiant auras.",
                                        "/fantasy"
                                ],
                                [
                                        "395",
                                        "`/mythology`",
                                        "Ancient mythology epic with Mount Olympus vistas, marble gods, and lightning.",
                                        "/mythology"
                                ],
                                [
                                        "396",
                                        "`/dragon`",
                                        "Colossal ancient mythical dragon with obsidian scales breathing radiant flame.",
                                        "/dragon"
                                ],
                                [
                                        "397",
                                        "`/elf`",
                                        "Noble forest elf with elongated pointed ears, ethereal grace, and silver bow.",
                                        "/elf"
                                ],
                                [
                                        "398",
                                        "`/wizard`",
                                        "Ancient wizard character with mystical robes, glowing staff, and arcane runes.",
                                        "/wizard"
                                ],
                                [
                                        "399",
                                        "`/samurai`",
                                        "Samurai warrior in traditional armor, katana blade, and cherry blossom petals.",
                                        "/samurai"
                                ],
                                [
                                        "400",
                                        "`/ninja`",
                                        "Shinobi ninja in dark attire, concealed blades, and nighttime moonlight shadows.",
                                        "/ninja"
                                ],
                                [
                                        "401",
                                        "`/viking`",
                                        "Norse Viking warrior with dual axes, weathered fur armor, and snowy fjord background.",
                                        "/viking"
                                ],
                                [
                                        "402",
                                        "`/medieval`",
                                        "Medieval fantasy realm featuring steel knights and majestic stone fortresses.",
                                        "/medieval"
                                ],
                                [
                                        "403",
                                        "`/ancientrome`",
                                        "Ancient Roman empire with marble collonades, gladiator arenas, and imperial togas.",
                                        "/ancientrome"
                                ],
                                [
                                        "404",
                                        "`/ancientegypt`",
                                        "Ancient Egyptian empire with golden pyramids, hieroglyphs, and pharaoh monuments.",
                                        "/ancientegypt"
                                ],
                                [
                                        "405",
                                        "`/space`",
                                        "Deep cosmos journey with colorful interstellar nebulae and futuristic space stations.",
                                        "/space"
                                ],
                                [
                                        "406",
                                        "`/galaxy`",
                                        "Panoramic Milky Way spiral galaxy with billions of glowing stars and cosmic dust.",
                                        "/galaxy"
                                ],
                                [
                                        "407",
                                        "`/astronaut`",
                                        "Astronaut in sleek EVA spacesuit spacewalking with Earth reflection in helmet visor.",
                                        "/astronaut"
                                ],
                                [
                                        "408",
                                        "`/mars`",
                                        "Martian red planet landscape with crimson dunes and futuristic habitat domes.",
                                        "/mars"
                                ],
                                [
                                        "409",
                                        "`/moonlight`",
                                        "Poetic moonlit nightscape with silvery lunar glow reflecting over calm water.",
                                        "/moonlight"
                                ],
                                [
                                        "410",
                                        "`/ocean`",
                                        "Vast ocean realm with crystalline turquoise waves and dramatic underwater light caustics.",
                                        "/ocean"
                                ],
                                [
                                        "411",
                                        "`/jungle`",
                                        "Lush tropical rainforest canopy with misty atmosphere, giant ferns, and wildlife.",
                                        "/jungle"
                                ],
                                [
                                        "412",
                                        "`/desert`",
                                        "Endless golden sand dunes with wind-rippled textures and pristine desert skies.",
                                        "/desert"
                                ],
                                [
                                        "413",
                                        "`/volcano`",
                                        "Active volcano eruption with glowing molten lava rivers and dramatic ash plumes.",
                                        "/volcano"
                                ],
                                [
                                        "414",
                                        "`/snow`",
                                        "Pristine winter wonderland with frosted pine trees and falling crystal snowflakes.",
                                        "/snow"
                                ],
                                [
                                        "415",
                                        "`/rain`",
                                        "Cinematic downpour over slick city pavements with luminous reflective puddle ripples.",
                                        "/rain"
                                ],
                                [
                                        "416",
                                        "`/storm`",
                                        "Thunderstorm tempest with dramatic lightning bolts cleaving dark tempestuous clouds.",
                                        "/storm"
                                ],
                                [
                                        "417",
                                        "`/sunset`",
                                        "Spectacular sunset horizon blazing with fiery orange, magenta, and amber gradients.",
                                        "/sunset"
                                ],
                                [
                                        "418",
                                        "`/sunrise`",
                                        "Serene morning sunrise with golden rays piercing morning mist over dew-kissed meadows.",
                                        "/sunrise"
                                ],
                                [
                                        "419",
                                        "`/nightcity`",
                                        "Metropolitan cyberpunk skyline at night with glittering skyscraper windows and light trails.",
                                        "/nightcity"
                                ],
                                [
                                        "420",
                                        "`/architecture`",
                                        "Parametric architectural masterpiece with dynamic fluid curves, glass, and steel.",
                                        "/architecture"
                                ],
                                [
                                        "421",
                                        "`/interior`",
                                        "Ultra-modern interior architecture with Italian designer furniture and recessed lighting.",
                                        "/interior"
                                ],
                                [
                                        "422",
                                        "`/scifiroom`",
                                        "Sci-fi spacecraft command bridge with floating interactive 3D holograms and control consoles.",
                                        "/scifiroom"
                                ],
                                [
                                        "423",
                                        "`/remaster`",
                                        "Visual remastering pipeline enhancing micro-detail clarity, dynamic range, and texture fidelity.",
                                        "/remaster"
                                ],
                                [
                                        "424",
                                        "`/epicportrait`",
                                        "Epic cinematic portrait with dramatic Rembrandt rim lighting and intense commanding gaze.",
                                        "/epicportrait"
                                ],
                                [
                                        "425",
                                        "`/movieposter`",
                                        "Blockbuster movie poster composition with dynamic multi-tier character framing.",
                                        "/movieposter"
                                ],
                                [
                                        "426",
                                        "`/cyberpunk`",
                                        "Cyberpunk 2077 aesthetic with rain-slicked streets, neon high-rises, and cyberware.",
                                        "/cyberpunk"
                                ],
                                [
                                        "427",
                                        "`/dslr`",
                                        "Professional full-frame DSLR photography with creamy circular bokeh depth-of-field.",
                                        "/dslr"
                                ],
                                [
                                        "428",
                                        "`/studio`",
                                        "Three-point studio lighting setup with key, fill, and hair rim lights on seamless cyclorama.",
                                        "/studio"
                                ],
                                [
                                        "429",
                                        "`/ultrahd`",
                                        "Ultra-HD 8K fidelity capturing microscopic skin pores, fabric threads, and specular sheen.",
                                        "/ultrahd"
                                ],
                                [
                                        "430",
                                        "`/masterpiece`",
                                        "Award-winning artistic masterpiece boasting immaculate compositional harmony and chromatic depth.",
                                        "/masterpiece"
                                ],
                                [
                                        "431",
                                        "`/neoncity`",
                                        "Tokyo-inspired neon metropolis with glowing kanji billboards, steam, and magenta haze.",
                                        "/neoncity"
                                ],
                                [
                                        "432",
                                        "`/retrofilm`",
                                        "1980s Kodak Kodachrome vintage film look with warm organic grain and rich saturation.",
                                        "/retrofilm"
                                ],
                                [
                                        "433",
                                        "`/luxurylook`",
                                        "Haute couture luxury aesthetic draped in diamond jewelry, velvet, and gold accents.",
                                        "/luxurylook"
                                ],
                                [
                                        "434",
                                        "`/rainyday`",
                                        "Melancholic rainy afternoon mood with water beads tracing down boutique window panes.",
                                        "/rainyday"
                                ],
                                [
                                        "435",
                                        "`/foggymood`",
                                        "Atmospheric morning fog with volumetric light rays piercing dense pine woodland.",
                                        "/foggymood"
                                ],
                                [
                                        "436",
                                        "`/nightshot`",
                                        "Long-exposure night photography capturing crisp shadow detail and nocturnal ambiance.",
                                        "/nightshot"
                                ],
                                [
                                        "437",
                                        "`/sunsetvibes`",
                                        "Warm golden-hour lifestyle aesthetic with long amber shadows and nostalgic warmth.",
                                        "/sunsetvibes"
                                ],
                                [
                                        "438",
                                        "`/streetstyle`",
                                        "Urban streetwear fashion featuring hyped sneakers, oversized puffer, and graffiti murals.",
                                        "/streetstyle"
                                ],
                                [
                                        "439",
                                        "`/urbanlook`",
                                        "Contemporary metropolitan sartorial look with tailored trench coats and minimal accessories.",
                                        "/urbanlook"
                                ],
                                [
                                        "440",
                                        "`/superhero`",
                                        "Heroic superhero character adorned in biomechanical armor radiating energetic plasma.",
                                        "/superhero"
                                ],
                                [
                                        "441",
                                        "`/villain`",
                                        "Charismatic antihero villain cloaked in midnight shadows with ominous glowing eyes.",
                                        "/villain"
                                ],
                                [
                                        "442",
                                        "`/warrior`",
                                        "Battle-hardened epic warrior clutching a broadsword, battle scars, and indomitable presence.",
                                        "/warrior"
                                ],
                                [
                                        "443",
                                        "`/queen`",
                                        "Regal monarch queen wearing a diamond-encrusted crown, crimson velvet robes, and majestic aura.",
                                        "/queen"
                                ],
                                [
                                        "444",
                                        "`/royalportrait`",
                                        "Aristocratic oil-style royal portrait posed inside an ornate gilded palace gallery.",
                                        "/royalportrait"
                                ],
                                [
                                        "445",
                                        "`/spaceexplorer`",
                                        "Planetary explorer surveying alien biosphere terrain equipped with holographic sensors.",
                                        "/spaceexplorer"
                                ],
                                [
                                        "446",
                                        "`/futurecity`",
                                        "Futuristic utopian megacity with floating sky-bridges and flying autonomous transit vehicles.",
                                        "/futurecity"
                                ],
                                [
                                        "447",
                                        "`/scifi`",
                                        "Futuristic sci-fi world filled with cybernetic constructs and glowing temporal gateways.",
                                        "/scifi"
                                ],
                                [
                                        "448",
                                        "`/fairytale`",
                                        "Enchanted fairytale woodland with bioluminescent mushrooms and whimsical mystical creatures.",
                                        "/fairytale"
                                ],
                                [
                                        "449",
                                        "`/angelic`",
                                        "Angelic ethereal figure with magnificent feathered wings and celestial divine radiance.",
                                        "/angelic"
                                ],
                                [
                                        "450",
                                        "`/thuglife`",
                                        "Retro hip-hop vibe with thick gold cuban chains, dark shades, and classic vintage lowrider.",
                                        "/thuglife"
                                ],
                                [
                                        "451",
                                        "`/bodybuilder`",
                                        "Chiseled physique bodybuilder with vascular definition under dramatic stage spotlights.",
                                        "/bodybuilder"
                                ],
                                [
                                        "452",
                                        "`/businessman`",
                                        "Executive business leader in bespoke tailored suit inside a high-rise corner office.",
                                        "/businessman"
                                ],
                                [
                                        "453",
                                        "`/celebritylook`",
                                        "Hollywood celebrity paparazzi moment styled in designer eyewear and luxury couture.",
                                        "/celebritylook"
                                ],
                                [
                                        "454",
                                        "`/redcarpet`",
                                        "Glamorous Cannes red-carpet premiere bathed in camera flashes and haute couture gown.",
                                        "/redcarpet"
                                ],
                                [
                                        "455",
                                        "`/natureportrait`",
                                        "Lush outdoor nature portrait immersed in sunlit golden wheat fields and gentle breeze.",
                                        "/natureportrait"
                                ],
                                [
                                        "456",
                                        "`/photorealistic`",
                                        "Hyper-photorealistic rendering indistinguishable from high-end raw camera capture.",
                                        "/photorealistic"
                                ],
                                [
                                        "457",
                                        "`/bgpersonremove`",
                                        "Clean removal of background pedestrians and seamless reconstruction of the scene.",
                                        "/bgpersonremove"
                                ],
                                [
                                        "458",
                                        "`/lowangleview`",
                                        "Dramatic low-angle worm's-eye perspective accentuating majestic height and power.",
                                        "/lowangleview"
                                ],
                                [
                                        "459",
                                        "`/360views`",
                                        "Comprehensive 360-degree multi-perspective sheet covering front, back, and isometric profiles.",
                                        "/360views"
                                ],
                                [
                                        "460",
                                        "`/outfitchange`",
                                        "Intelligent wardrobe modification styling new garments while preserving facial identity.",
                                        "/outfitchange"
                                ]
                        ]
                }
        },
        {
                "id": "dev-and-coding-prompts",
                "title": "8. Software Engineering, Architecture & Vibe Coding Prompts (16 Commands)",
                "lead": "Software engineering commands that accelerate development, debugging, unit testing, and code refactoring tenfold.",
                "image": {
                        "src": "/images/blog/chatgpt-developer-productivity.webp",
                        "alt": "Developer Productivity Dashboard, Data Analytics, Code Automation, and Business Strategy",
                        "caption": "Interactive software engineering environment: intelligent debugging, clean architecture, and automated testing via prompt workflows."
                },
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Execution Prompt Example"
                        ],
                        "rows": [
                                [
                                        "20",
                                        "`/code`",
                                        "Activate expert software engineering mode and clean code architecture.",
                                        "/code write a Next.js 15 Server Action for Stripe webhook handling"
                                ],
                                [
                                        "21",
                                        "`/debug`",
                                        "Deep debugging, error log tracing, and syntax/logic resolution.",
                                        "/debug analyze why this async useEffect causes infinite re-renders"
                                ],
                                [
                                        "22",
                                        "`/refactor`",
                                        "Refactor and rewrite codebase adhering to Clean Code and SOLID principles.",
                                        "/refactor convert this monolithic Express handler to modular MVC services"
                                ],
                                [
                                        "23",
                                        "`/test`",
                                        "Generate unit tests and edge-case coverage test suites.",
                                        "/test write Jest unit tests for this authentication utility"
                                ],
                                [
                                        "24",
                                        "`/explaincode`",
                                        "Step-by-step walkthrough explaining complex algorithms or code blocks.",
                                        "/explaincode explain how this recursive binary search works"
                                ],
                                [
                                        "25",
                                        "`/optimize`",
                                        "Optimize code execution speed, runtime memory, and throughput.",
                                        "/optimize optimize this heavy image processing function"
                                ],
                                [
                                        "26",
                                        "`/documentcode`",
                                        "Generate production-grade JSDoc/Docstring documentation for functions.",
                                        "/documentcode generate comprehensive JSDoc annotations"
                                ],
                                [
                                        "27",
                                        "`/sql`",
                                        "Generate and tune high-performance SQL queries, joins, and indexes.",
                                        "/sql write a PostgreSQL query for monthly recurring revenue"
                                ],
                                [
                                        "28",
                                        "`/regex`",
                                        "Generate optimized regular expressions with detailed token breakdown.",
                                        "/regex create a pattern to validate international phone numbers"
                                ],
                                [
                                        "29",
                                        "`/api`",
                                        "Design RESTful API endpoints and GraphQL schemas with type definitions.",
                                        "/api design a CRUD API spec for a multi-tenant platform"
                                ],
                                [
                                        "30",
                                        "`/git`",
                                        "Generate Git commands, merge conflict resolutions, and commit messages.",
                                        "/git show how to rebase feature branch onto main cleanly"
                                ],
                                [
                                        "31",
                                        "`/docker`",
                                        "Generate optimized multi-stage Dockerfiles and docker-compose configurations.",
                                        "/docker create a production Dockerfile for Next.js app"
                                ],
                                [
                                        "32",
                                        "`/audit`",
                                        "Conduct automated security audits, vulnerability scans, and a11y checks.",
                                        "/audit inspect this authentication flow for security flaws"
                                ],
                                [
                                        "33",
                                        "`/schema`",
                                        "Generate Zod/TypeScript validation schemas and database models.",
                                        "/schema build a Zod validation schema for checkout form"
                                ],
                                [
                                        "34",
                                        "`/testsuite`",
                                        "Build comprehensive End-to-End testing suites with Playwright/Cypress.",
                                        "/testsuite write E2E tests for user signup and onboarding"
                                ],
                                [
                                        "35",
                                        "`/docstring`",
                                        "Automatically generate technical documentation and API usage guides.",
                                        "/docstring document all exported classes and methods"
                                ]
                        ]
                },
                "codeSnippets": [
                        {
                                "title": "Frontend Architecture Prompt Example using /audit",
                                "language": "markdown",
                                "code": "/audit\nRole: You are a Staff Frontend Engineer.\nAudit the following code for:\n1. Performance & React 19 re-render mitigation\n2. Accessibility compliance (WCAG 2.2 AA)\n3. Strict type safety with TypeScript\nDeliver the refactored code with inline documentation."
                        }
                ]
        },
        {
                "id": "business-and-strategy",
                "title": "9. Business Strategy, Growth & Founder Workflows (15 Commands)",
                "lead": "Strategic decision matrices, monetization tiers, sales funnels, and ICP customer personas for founders and growth leaders.",
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Execution Prompt Example"
                        ],
                        "rows": [
                                [
                                        "36",
                                        "`/swot`",
                                        "Conduct comprehensive SWOT matrix analysis for strategic planning.",
                                        "/swot analyze our B2B SaaS entering enterprise market"
                                ],
                                [
                                        "37",
                                        "`/pestle`",
                                        "Perform macro-environmental PESTLE strategic analysis.",
                                        "/pestle perform a PESTLE analysis for EV charging network"
                                ],
                                [
                                        "38",
                                        "`/competitor`",
                                        "Deep competitive intelligence matrix and moat discovery analysis.",
                                        "/competitor benchmark our tool against top competitors"
                                ],
                                [
                                        "39",
                                        "`/pricing`",
                                        "Formulate pricing models, monetization tiers, and profit packaging.",
                                        "/pricing design a 3-tier SaaS pricing model"
                                ],
                                [
                                        "40",
                                        "`/funnel`",
                                        "Architect marketing funnels and conversion pipelines from lead to sale.",
                                        "/funnel map a high-converting B2B lead generation funnel"
                                ],
                                [
                                        "41",
                                        "`/icp`",
                                        "Build Ideal Customer Personas (ICP) detailing pain points and triggers.",
                                        "/icp create an ICP profile for startup CTOs"
                                ],
                                [
                                        "42",
                                        "`/kpi`",
                                        "Define measurable KPIs and quarterly Objectives & Key Results (OKRs).",
                                        "/kpi define quarterly OKRs and north-star metrics"
                                ],
                                [
                                        "43",
                                        "`/pitch`",
                                        "Write investor pitch deck narratives and compelling elevator pitches.",
                                        "/pitch write a 60-second pitch for our AI startup"
                                ],
                                [
                                        "44",
                                        "`/tam`",
                                        "Calculate and estimate market sizing models (TAM / SAM / SOM).",
                                        "/tam estimate TAM, SAM, and SOM for remote healthcare"
                                ],
                                [
                                        "45",
                                        "`/gtm`",
                                        "Formulate Go-To-Market (GTM) rollout roadmap and acquisition channels.",
                                        "/gtm build a 90-day GTM strategy for developer tool"
                                ],
                                [
                                        "46",
                                        "`/objections`",
                                        "Extract buyer objections and construct persuasive rebuttal frameworks.",
                                        "/objections list 10 objections to luxury web design and responses"
                                ],
                                [
                                        "47",
                                        "`/roadmap`",
                                        "Design product roadmap with phased 30-60-90 day milestone execution.",
                                        "/roadmap create a 90-day feature roadmap for mobile app"
                                ],
                                [
                                        "48",
                                        "`/statistics`",
                                        "Analyze statistical growth patterns, metrics variance, and data trends.",
                                        "/statistics analyze monthly churn rate patterns"
                                ],
                                [
                                        "49",
                                        "`/brainstorm`",
                                        "Facilitate structured brainstorming to generate 20 breakthrough concepts.",
                                        "/brainstorm generate 20 viral marketing angles for AI tool"
                                ],
                                [
                                        "50",
                                        "`/compare`",
                                        "Build structured head-to-head feature and trade-off comparison tables.",
                                        "/compare compare Stripe vs Paddle for global SaaS payments"
                                ]
                        ]
                }
        },
        {
                "id": "writing-and-copywriting",
                "title": "10. Content Creation, Copywriting & Scriptwriting Commands (18 Commands)",
                "lead": "Psychological conversion copywriting frameworks (AIDA, PAS), scroll-stopping video hooks, and branded narrative voice.",
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Execution Prompt Example"
                        ],
                        "rows": [
                                [
                                        "51",
                                        "`/write`",
                                        "Generate comprehensive long-form articles, outlines, and copy structures.",
                                        "/write write an authoritative guide on modern frontend design"
                                ],
                                [
                                        "52",
                                        "`/rewrite`",
                                        "Rewrite text to enhance voice, clarity, elegance, and message delivery.",
                                        "/rewrite rewrite this formal email to sound approachable"
                                ],
                                [
                                        "53",
                                        "`/proofread`",
                                        "Proofread grammar, punctuation, syntactic rhythm, and spelling errors.",
                                        "/proofread review this press release for grammatical precision"
                                ],
                                [
                                        "54",
                                        "`/tone`",
                                        "Calibrate copy tone (formal, conversational, witty, luxury, energetic).",
                                        "/tone make this announcement sound urgent yet professional"
                                ],
                                [
                                        "55",
                                        "`/headline`",
                                        "Generate 10 high-CTR headlines applying cognitive psychological triggers.",
                                        "/headline write 10 compelling titles for blog post on AI"
                                ],
                                [
                                        "56",
                                        "`/hook`",
                                        "Craft scroll-stopping video hooks and engaging social caption leads.",
                                        "/hook generate 5 hooks for an Instagram Reel about AI prompts"
                                ],
                                [
                                        "57",
                                        "`/aida`",
                                        "Structure marketing copy based on the proven AIDA persuasion model.",
                                        "/aida write a promotional email for luxury web design"
                                ],
                                [
                                        "58",
                                        "`/pas`",
                                        "Write high-conversion copy using the Problem-Agitation-Solution (PAS) framework.",
                                        "/pas write a landing page hero section for slow agency turnaround"
                                ],
                                [
                                        "59",
                                        "`/tldr`",
                                        "Ultra-fast one-sentence TL;DR summary distilling core concepts.",
                                        "/tldr give me a TL;DR of this 10-page economic report"
                                ],
                                [
                                        "60",
                                        "`/eli5`",
                                        "Explain complex technical concepts in plain, accessible language (ELI5).",
                                        "/eli5 explain how quantum encryption works simply"
                                ],
                                [
                                        "61",
                                        "`/script`",
                                        "Write two-column AV video scripts with visual cues and voiceover lines.",
                                        "/script write a 60-second video script about Claude SEO"
                                ],
                                [
                                        "62",
                                        "`/expand`",
                                        "Elaborate and deeply expand concise ideas into comprehensive sections.",
                                        "/expand expand this product feature into a 3-paragraph value story"
                                ],
                                [
                                        "63",
                                        "`/shorten`",
                                        "Concise text shortening, eliminating fluff while preserving core meaning.",
                                        "/shorten cut this 300-word paragraph down to 100 words"
                                ],
                                [
                                        "64",
                                        "`/paraphrase`",
                                        "Paraphrase sentences with rich vocabulary and refreshing syntax.",
                                        "/paraphrase paraphrase this technical definition uniquely"
                                ],
                                [
                                        "65",
                                        "`/translate`",
                                        "Fluent, culturally adapted translation preserving technical terminology.",
                                        "/translate translate this technical changelog into natural Persian"
                                ],
                                [
                                        "66",
                                        "`/email`",
                                        "Draft high-converting business emails, sales follow-ups, and newsletters.",
                                        "/email write a follow-up email after a client discovery call"
                                ],
                                [
                                        "67",
                                        "`/caption`",
                                        "Create engaging LinkedIn & Instagram captions with strategic hashtags.",
                                        "/caption write a LinkedIn post caption about vibe coding launch"
                                ],
                                [
                                        "68",
                                        "`/story`",
                                        "Craft compelling brand storytelling and immersive narrative arcs.",
                                        "/story write a founder journey story about overcoming burnout"
                                ]
                        ]
                }
        },
        {
                "id": "research-and-productivity",
                "title": "11. Deep Research, Learning, Memory & Personal Productivity (18 Commands)",
                "lead": "Live web intelligence, empirical fact verification, ChatGPT long-term memory management, and structured productivity planning.",
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Execution Prompt Example"
                        ],
                        "rows": [
                                [
                                        "69",
                                        "`/search`",
                                        "Perform live web browsing to retrieve recent verified data and news.",
                                        "/search what are the latest Google Search core updates in 2026?"
                                ],
                                [
                                        "70",
                                        "`/factcheck`",
                                        "Fact-check claims, data points, and figures against trusted sources.",
                                        "/factcheck verify whether OpenAI recently launched native slash commands"
                                ],
                                [
                                        "71",
                                        "`/cite`",
                                        "Generate academic citations and bibliographies in APA/IEEE standards.",
                                        "/cite generate APA citations for top 3 foundation model papers"
                                ],
                                [
                                        "72",
                                        "`/proscons`",
                                        "Synthesize comprehensive pros, cons, and risk analysis trade-off matrix.",
                                        "/proscons compare Next.js App Router vs Remix for e-commerce"
                                ],
                                [
                                        "73",
                                        "`/analogy`",
                                        "Explain abstract concepts using tangible mental models and analogies.",
                                        "/analogy create an analogy explaining how Transformer attention works"
                                ],
                                [
                                        "74",
                                        "`/plan`",
                                        "Formulate step-by-step project roadmaps, milestones, and timelines.",
                                        "/plan create a 4-week study plan to master TypeScript"
                                ],
                                [
                                        "75",
                                        "`/actionitems`",
                                        "Extract action items, assignees, and key decisions from meeting notes.",
                                        "/actionitems extract all deliverables and deadlines from transcript"
                                ],
                                [
                                        "76",
                                        "`/prioritize`",
                                        "Prioritize task backlogs using Eisenhower Matrix or RICE scoring frameworks.",
                                        "/prioritize sort these 12 feature requests using RICE scoring"
                                ],
                                [
                                        "77",
                                        "`/memorize`",
                                        "Persist user preference or operational guidelines into ChatGPT memory.",
                                        "/memorize always format code solutions using TypeScript and Tailwind"
                                ],
                                [
                                        "78",
                                        "`/forget`",
                                        "Delete a specific memory item from the account memory database.",
                                        "/forget remove previous project requirements from memory"
                                ],
                                [
                                        "79",
                                        "`/todo`",
                                        "Generate structured daily action checklists with priority tiers.",
                                        "/todo organize my morning sprint tasks with estimated minutes"
                                ],
                                [
                                        "80",
                                        "`/checklist`",
                                        "Generate comprehensive pre-launch and deployment verification checklist.",
                                        "/checklist create a pre-launch production checklist for Next.js app"
                                ],
                                [
                                        "81",
                                        "`/studyplan`",
                                        "Design customized accelerated learning curricula for new skills.",
                                        "/studyplan build a 30-day curriculum to learn UI/UX design"
                                ],
                                [
                                        "82",
                                        "`/tripplan`",
                                        "Plan curated daily travel itineraries with local logistics and routes.",
                                        "/tripplan create a 5-day cultural itinerary for Tokyo"
                                ],
                                [
                                        "83",
                                        "`/workout`",
                                        "Create personalized workout routines tailored to fitness goals.",
                                        "/workout build a 4-day strength training split for intermediate level"
                                ],
                                [
                                        "84",
                                        "`/mealplan`",
                                        "Formulate nutritional meal plans with calibrated macros and calories.",
                                        "/mealplan design a high-protein vegetarian meal plan for 7 days"
                                ],
                                [
                                        "85",
                                        "`/flashcards`",
                                        "Generate Q&A active recall flashcards for knowledge retention.",
                                        "/flashcards create 20 flashcards on JavaScript closures and event loop"
                                ],
                                [
                                        "86",
                                        "`/quiz`",
                                        "Design multiple-choice mastery quizzes with explanatory answer keys.",
                                        "/quiz create a 10-question quiz testing React hooks mastery"
                                ]
                        ]
                }
        },
        {
                "id": "roleplay-personas-experimental",
                "title": "12. Persona Roleplay, Expert Simulation & Experimental Codes (8 Commands)",
                "lead": "Executive hiring interview simulations, devil's advocate pressure tests, and objective strategic validation.",
                "table": {
                        "headers": [
                                "#",
                                "Command",
                                "Description & Function",
                                "Execution Prompt Example"
                        ],
                        "rows": [
                                [
                                        "87",
                                        "`/expert`",
                                        "Assume the persona of a world-renowned scientist or senior authority.",
                                        "/expert act as a Principal Cloud Architect specializing in AWS"
                                ],
                                [
                                        "88",
                                        "`/critic`",
                                        "Act as a ruthless Devil's Advocate dissecting business weaknesses.",
                                        "/critic ruthlessly critique this startup business model and pitch"
                                ],
                                [
                                        "89",
                                        "`/tutor`",
                                        "Act as a patient Socratic mentor guiding understanding via questions.",
                                        "/tutor teach me linear algebra concepts step by step"
                                ],
                                [
                                        "90",
                                        "`/interviewer`",
                                        "Simulate technical job interviews with challenging candidate scenarios.",
                                        "/interviewer conduct a Senior React Developer system design interview"
                                ],
                                [
                                        "91",
                                        "`/sarcastic`",
                                        "Deliver witty, sarcastic, and humorous responses for creative banter.",
                                        "/sarcastic roast my over-engineered portfolio website"
                                ],
                                [
                                        "92",
                                        "`/dan`",
                                        "Explore open hypothetical simulations without default constraints.",
                                        "/dan explore an alternate history where the internet began in 1920"
                                ],
                                [
                                        "93",
                                        "`/debugmode`",
                                        "Expose internal chain-of-thought and step-by-step reasoning logic.",
                                        "/debugmode show internal reasoning for solving this combinatorics problem"
                                ],
                                [
                                        "94",
                                        "`/continue`",
                                        "Seamlessly continue token generation from exact stopping point.",
                                        "/continue continue generating the remaining code modules"
                                ]
                        ]
                }
        },
        {
                "id": "keyboard-shortcuts-guide",
                "title": "13. Master Keyboard Shortcuts Reference (Web, Mac & Windows)",
                "lead": "Mastering keyboard shortcuts accelerates conversation navigation and prompt input speed significantly across all desktop platforms.",
                "table": {
                        "headers": [
                                "Shortcut Action",
                                "macOS Shortcut",
                                "Windows / Linux Shortcut"
                        ],
                        "rows": [
                                [
                                        "Start New Chat",
                                        "Cmd + Shift + O",
                                        "Ctrl + Shift + O"
                                ],
                                [
                                        "Focus Prompt Input Bar",
                                        "Shift + Esc",
                                        "Shift + Esc"
                                ],
                                [
                                        "Copy Last AI Response",
                                        "Cmd + Shift + C",
                                        "Ctrl + Shift + C"
                                ],
                                [
                                        "Toggle Sidebar",
                                        "Cmd + Shift + S",
                                        "Ctrl + Shift + S"
                                ],
                                [
                                        "Switch Active AI Model",
                                        "Cmd + Shift + ;",
                                        "Ctrl + Shift + ;"
                                ],
                                [
                                        "Delete Current Chat",
                                        "Cmd + Shift + Backspace",
                                        "Ctrl + Shift + Backspace"
                                ],
                                [
                                        "Show Keyboard Shortcuts Modal",
                                        "Cmd + /",
                                        "Ctrl + /"
                                ]
                        ]
                }
        },
        {
                "id": "custom-prompt-framework",
                "title": "14. Building Custom Command Frameworks & Prompt Chaining",
                "lead": "How to define and automate your custom command matrix inside ChatGPT Custom Instructions:",
                "paragraphs": [
                        "The most effective way to eliminate repetitive context setting is by declaring an automated Command Matrix in your Custom Instructions.",
                        "Simply paste the following system block into 'How would you like ChatGPT to respond?' to activate instant command resolution:"
                ],
                "codeSnippets": [
                        {
                                "title": "Command Matrix Template for Custom Instructions",
                                "language": "markdown",
                                "code": "[COMMAND MATRIX PROTOCOL]\nWhenever a user prompt begins with a forward slash (/), execute the designated protocol directly without conversational fluff:\n\n- /landing: High-conversion landing page structure with hook, social proof, feature breakdown, and CTAs.\n- /seo: Complete SEO title (<60 chars), meta description (<155 chars), URL slug, and secondary LSI keywords.\n- /review: Thorough editorial review, polishing tone, eliminating fluff, and humanizing prose.\n- /audit: Full frontend security, performance, and accessibility code audit with bug fixes."
                        }
                ]
        },
        {
                "id": "summary-and-takeaways",
                "title": "15. Summary & Actionable Roadmap for Advanced Prompting",
                "lead": "Artificial Intelligence possesses vast capabilities; however, deterministic, engineered commands dictate exceptional outcomes.",
                "paragraphs": [
                        "By bookmarking this master handbook and integrating these 460 curated slash commands, you will compress software development, visual design, and marketing production cycles into a fraction of the time."
                ]
        }
],
        takeaways: [
        "Slash commands reduce input token usage by up to 70% while delivering deterministic, high-precision AI responses.",
        "Combining studio lighting and commercial shortcodes (/showcase, /luxuryshowcase, /rimlight) elevates generated visuals into professional magazine-grade assets.",
        "Software engineers and vibe coders can ship secure, production-grade code in minutes using /audit, /refactor, and /testsuite workflows.",
        "Setting up a custom command matrix in Custom Instructions permanently automates your daily repetitive workflows."
]
      },
      ar: {
        title: "الدليل الشامل لـ 460 أمراً ورمزاً سرياً في ChatGPT (إصدار 2026)",
        summary: "المرجع الشامل لـ 460 أمراً ورمزاً سرياً في ChatGPT، اختصارات توليد الصور السينمائية، رندرات المنتجات وتدفقات عمل المطورين والمبدعين.",
        category: "الذكاء الاصطناعي",
        readTime: "٢٥ دقيقة قراءة",
        publishedDate: "٨ شعبان ١٤٤٧",
        tags: ["ChatGPT", "هندسة الأوامر", "أوامر السلاش", "الذكاء الاصطناعي", "الرموز السرية", "Vibe Coding"],
        author: authors.ar,
        toc: [
        {
                "id": "understanding-commands",
                "title": "١. البنية المعمارية رباعية الطبقات لمعالجة الأوامر في ChatGPT"
        },
        {
                "id": "core-official-commands",
                "title": "٢. الأوامر الرسمية وأوامر النظام الأساسية (Official Commands)"
        },
        {
                "id": "canvas-workspace-and-files",
                "title": "٣. مساحة عمل Canvas، إدارة المستندات وتحليل البيانات (Workspace & Data)"
        },
        {
                "id": "commercial-product-showcase",
                "title": "٤. أوامر التصوير التجاري، الإعلانات وعرض المنتجات (150 أمراً)"
        },
        {
                "id": "camera-angles-and-cinema",
                "title": "٥. زوايا الكاميرا، العدسات والمنظور السينمائي (85 أمراً)"
        },
        {
                "id": "ai-image-tools-and-edits",
                "title": "٦. أدوات وتعديل الصور المخصصة للذكاء الاصطناعي (28 أمراً)"
        },
        {
                "id": "secret-styles-and-fashion",
                "title": "٧. الرموز السرية لتعديل الأنماط، الأزياء والرندرات المتميزة (103 رمزاً)"
        },
        {
                "id": "dev-and-coding-prompts",
                "title": "٨. أوامر هندسة البرمجيات، معمارية الأكواد والـ Vibe Coding (16 أمراً)"
        },
        {
                "id": "business-and-strategy",
                "title": "٩. أوامر استراتيجية الأعمال، التسويق ورواد الأعمال (15 أمراً)"
        },
        {
                "id": "writing-and-copywriting",
                "title": "١٠. أوامر صناعة المحتوى، كتابة الإعلانات والسيناريو (18 أمراً)"
        },
        {
                "id": "research-and-productivity",
                "title": "١١. أوامر البحث المعمق، التعلم السريع والإنتاجية الشخصية (18 أمراً)"
        },
        {
                "id": "roleplay-personas-experimental",
                "title": "١٢. تقمص الأدوار، محاكاة الخبراء والرموز التجريبية (8 أوامر)"
        },
        {
                "id": "keyboard-shortcuts-guide",
                "title": "١٣. الدليل الشامل لاختصارات لوحة المفاتيح في الويب وماك وويندوز"
        },
        {
                "id": "custom-prompt-framework",
                "title": "١٤. منهجية بناء إطارات الأوامر المخصصة وسلاسل البرومبت (Prompt Chaining)"
        },
        {
                "id": "summary-and-takeaways",
                "title": "١٥. الخلاصة النهائية وخريطة الطريق لإتقان البرومبت المتقدم"
        }
],
        sections: [
        {
                "id": "understanding-commands",
                "title": "١. البنية المعمارية رباعية الطبقات لمعالجة الأوامر في ChatGPT",
                "lead": "لإتقان الذكاء الاصطناعي، يجب أن تدرك أن أوامر السلاش تُعالج عبر أربع طبقات معمارية متباينة تماماً.",
                "paragraphs": [
                        "على عكس الاعتقاد الشائع بأن أوامر السلاش مجرد اختصارات عشوائية، فإن النماذج المتقدمة مثل GPT-4o تقيّم الأوامر وفق طبقات الوصول والأدوات النشطة والمحللات الدلالية.",
                        "تعمل علامة السلاش (/) في تدريب النماذج كفاصل دلالي بنمط سطر الأوامر (CLI). يتيح لك فهم هذا البناء تحقيق أقصى دقة بأقل عدد من الكلمات."
                ],
                "image": {
                        "src": "/images/blog/chatgpt-commands-architecture.webp",
                        "alt": "البنية المعمارية رباعية الطبقات لمعالجة أوامر السلاش في ChatGPT",
                        "caption": "رسم تخطيطي لطبقات معالجة الأوامر الأربعة: نواة التطبيق، بيئة Canvas المعزولة، طبقة البرومبت الدلالية، والتعليمات المخصصة."
                },
                "table": {
                        "headers": [
                                "نوع الأمر",
                                "طبقة المعالجة",
                                "الوظيفة وآلية التنفيذ",
                                "مثال تطبيقي"
                        ],
                        "rows": [
                                [
                                        "Official Commands",
                                        "ChatGPT Core UI",
                                        "أوامر النظام الرسمية المدمجة لإدارة الجلسات والقوائم والتوجيه.",
                                        "/canvas أو الإشارة بـ @"
                                ],
                                [
                                        "Contextual Commands",
                                        "Active Sandbox / Tool",
                                        "أوامر سياقية نشطة داخل بيئات مخصصة مثل بوم Canvas ومفسر بايثون.",
                                        "/comment أو /update"
                                ],
                                [
                                        "Semantic Commands",
                                        "LLM Semantic Parser",
                                        "أوامر دلالية يفهم النموذج بنيتها التشغيلية ومخرجاتها بطريقة فطرية.",
                                        "/eli5 أو /tldr"
                                ],
                                [
                                        "Custom Commands",
                                        "System Rules / Prompts",
                                        "أوامر مخصصة تقوم بتعريفها في إعدادات Custom Instructions أو ملفات القواعد.",
                                        "/audit أو /proshot"
                                ]
                        ]
                },
                "callout": {
                        "type": "tip",
                        "title": "الميزة الجوهرية لاستخدام أوامر السلاش",
                        "text": "يقلل استخدام أوامر السلاش استهلاك التوكنات بنسبة تصل إلى 70%، ويرفع سرعة استجابة النموذج ويقضي على الهلوسة والانحراف الدلالي."
                }
        },
        {
                "id": "core-official-commands",
                "title": "٢. الأوامر الرسمية وأوامر النظام الأساسية (Official Commands)",
                "lead": "تم دمج هذه الأوامر الرسمية مباشرة في واجهة ويب وتطبيق سطح المكتب والهاتف لـ ChatGPT من قبل OpenAI للتحكم في وظائف النظام.",
                "paragraphs": [
                        "كتابة هذه الأوامر مباشرة في مربع الإدخال تفعل إمكانيات النظام الأساسية فوراً دون نقرات إضافية:"
                ],
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "مثال البرومبت"
                        ],
                        "rows": [
                                [
                                        "1",
                                        "`/help`",
                                        "عرض دليل المساعدة، اختصارات لوحة المفاتيح والأدوات النشطة في الدردشة.",
                                        "/help"
                                ],
                                [
                                        "2",
                                        "`/new`",
                                        "بدء جلسة محادثة جديدة ونظيفة تماماً دون الاحتفاظ بالسياق السابق.",
                                        "/new"
                                ],
                                [
                                        "3",
                                        "`/clear`",
                                        "مسح سجل رسائل الجلسة الحالية دون إغلاق نافذة المحادثة.",
                                        "/clear"
                                ],
                                [
                                        "4",
                                        "`/rename`",
                                        "إعادة تسمية عنوان المحادثة الحالية في الشريط الجانبي.",
                                        "/rename AI Research Vault"
                                ],
                                [
                                        "5",
                                        "`/delete`",
                                        "حذف المحادثة الحالية نهائياً ومباشرة من مربع الإدخال.",
                                        "/delete"
                                ],
                                [
                                        "6",
                                        "`/settings`",
                                        "فتح قائمة الإعدادات، نماذج الذكاء الاصطناعي والتعليمات المخصصة.",
                                        "/settings"
                                ],
                                [
                                        "7",
                                        "`/about`",
                                        "عرض معلومات إصدار النظام، النموذج النشط وحالة المنصة.",
                                        "/about"
                                ]
                        ]
                },
                "codeSnippets": [
                        {
                                "title": "نموذج استخدام الأمر الرسمي مع السياق",
                                "language": "text",
                                "code": "/settings\nيرجى ضبط التعليمات المخصصة (Custom Instructions) وفق معايير مهندس البرمجيات المتميز (Staff Engineer)."
                        }
                ]
        },
        {
                "id": "canvas-workspace-and-files",
                "title": "٣. مساحة عمل Canvas، إدارة المستندات وتحليل البيانات (Workspace & Data)",
                "lead": "بيئة Canvas هي مساحة عمل تفاعلية بشاشة منقسمة للتعاون في كتابة الأكواد، المقالات الطويلة وتحليل البيانات.",
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "مثال البرومبت"
                        ],
                        "rows": [
                                [
                                        "8",
                                        "`/canvas`",
                                        "فتح محرر Canvas التفاعلي في نافذة منقسمة للأكواد والمستندات.",
                                        "/canvas build a scalable TypeScript SaaS boilerplate"
                                ],
                                [
                                        "9",
                                        "`/update`",
                                        "تطبيق تعديلات وإعادة صياغة هيكلية على المستند النشط في Canvas.",
                                        "/update rewrite this entire document in APA style format"
                                ],
                                [
                                        "10",
                                        "`/comment`",
                                        "تحليل المستند وإضافة تعليقات توضيحية وتوثيق داخلي منظم.",
                                        "/comment add detailed inline documentation to all helper functions"
                                ],
                                [
                                        "11",
                                        "`/read`",
                                        "مسح وقراءة الملفات والمستندات المرفقة أو قواعد البيانات المتصلة بالدردشة.",
                                        "/read parse this quarterly financial PDF and extract all tables"
                                ],
                                [
                                        "12",
                                        "`/summarize`",
                                        "استخراج ملخص تحليلي مكثف وأهم النقاط الجوهرية من المستندات الطويلة.",
                                        "/summarize distill this 40-page whitepaper into 5 actionable insights"
                                ],
                                [
                                        "13",
                                        "`/extract`",
                                        "استخراج بيانات منظمة، جداول، عناوين أو أرقام وإحصائيات من النصوص.",
                                        "/extract pull all email addresses, company names, and LinkedIn URLs"
                                ],
                                [
                                        "14",
                                        "`/table`",
                                        "تحويل البيانات النصية إلى جداول ماركداون نقية أو تنسيق CSV.",
                                        "/table format this competitive benchmark comparison as a table"
                                ],
                                [
                                        "15",
                                        "`/pdf`",
                                        "تحليل معمق لملفات PDF متعددة الصفحات والعقود والتقارير المالية.",
                                        "/pdf analyze this contract and flag liability clauses"
                                ],
                                [
                                        "16",
                                        "`/docx`",
                                        "توليد وتحرير نصوص متوافقة مع تنسيق مستندات Word القياسية.",
                                        "/docx generate a formal software license agreement template"
                                ],
                                [
                                        "17",
                                        "`/csv`",
                                        "توليد وتنظيم البيانات بتنسيق القيم المفصولة بفواصل (CSV).",
                                        "/csv export product inventory with SKUs and prices"
                                ],
                                [
                                        "18",
                                        "`/excel`",
                                        "تصميم جداول إكسل، صياغة المعادلات الحسابية والدوال المالية.",
                                        "/excel generate dynamic formulas for CAC and LTV cohorts"
                                ],
                                [
                                        "19",
                                        "`/chart`",
                                        "توليد مخططات إحصائية بيانية أو أكواد Mermaid التخطيطية.",
                                        "/chart create a funnel conversion chart for marketing channels"
                                ]
                        ]
                },
                "callout": {
                        "type": "info",
                        "title": "قوة تحليل المستندات",
                        "text": "يتيح لك دمج أمري /pdf أو /read مع /table تحويل التقارير المطولة إلى جداول مقارنة دقيقة في ثوانٍ معدودة."
                }
        },
        {
                "id": "commercial-product-showcase",
                "title": "٤. أوامر التصوير التجاري، الإعلانات وعرض المنتجات (150 أمراً)",
                "lead": "مجموعة استثنائية من 150 شورت كود لتصميم الحملات الإعلانية، اللوحات ثلاثية الأبعاد، وصور المنتجات الفاخرة.",
                "paragraphs": [
                        "ما عليك سوى رفع صورة منتجك وإضافة هذه الأكواد إلى البرومبت وتحديد الإضاءة وزوايا التصوير المطلوبة:"
                ],
                "image": {
                        "src": "/images/blog/chatgpt-image-generation-modes.webp",
                        "alt": "معرض الأنماط البصرية لرندر المنتجات، اللوحات ثلاثية الأبعاد وتصوير الاستوديو بالذكاء الاصطناعي",
                        "caption": "معرض المخرجات البصرية المنفذة بواسطة أوامر التصوير التجاري واللوحات الإعلانية المجسمة ورندرات الاستوديو."
                },
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "حالة الاستخدام / مثال"
                        ],
                        "rows": [
                                [
                                        "95",
                                        "`/3dbillboard`",
                                        "محاكاة بيلبورد ثلاثي الأبعاد بالمدينة مع تأثير خروج المجسم من الإطار",
                                        "/3dbillboard"
                                ],
                                [
                                        "96",
                                        "`/cornerbillboard`",
                                        "إعلان ثلاثي الأبعاد أنامورفيك يلتف حول زاوية المبنى التجاري",
                                        "/cornerbillboard"
                                ],
                                [
                                        "97",
                                        "`/digitalbillboard`",
                                        "حملة إعلانية للمنتج على شاشة LED رقمية عملاقة في قلب المدينة",
                                        "/digitalbillboard"
                                ],
                                [
                                        "98",
                                        "`/highwaybillboard`",
                                        "لوحة إعلانات ضخمة على جانب الطريق السريع بإضاءة طبيعية",
                                        "/highwaybillboard"
                                ],
                                [
                                        "99",
                                        "`/rooftopbillboard`",
                                        "إعلان ضخم على أسطح المباني يطل على أفق المدينة الحديثة",
                                        "/rooftopbillboard"
                                ],
                                [
                                        "100",
                                        "`/busstopad`",
                                        "ملصق إعلاني مضيء داخل موقف حافلات بتفاصيل واقعية",
                                        "/busstopad"
                                ],
                                [
                                        "101",
                                        "`/subwayad`",
                                        "لوحة إعلانية جدارية مضيئة داخل صالة محطة المترو",
                                        "/subwayad"
                                ],
                                [
                                        "102",
                                        "`/buildingwrap`",
                                        "Campaign covering a building’s exterior.",
                                        "/buildingwrap"
                                ],
                                [
                                        "103",
                                        "`/streetposter`",
                                        "ملصقات حملة دعائية مطبوعة على جدران الشارع الحضرية",
                                        "/streetposter"
                                ],
                                [
                                        "104",
                                        "`/truckwrap`",
                                        "تصميم غلاف إعلاني تجاري كامل لشاحنة نقل أثناء السير",
                                        "/truckwrap"
                                ],
                                [
                                        "105",
                                        "`/metaads`",
                                        "إعلان قياسي مخصص لخلاصات إنستغرام وفيسبوك مع مساحة CTA",
                                        "/metaads"
                                ],
                                [
                                        "106",
                                        "`/storyad`",
                                        "إعلان رأسي للقصص (9:16) مخصص لإنستغرام وتيك توك",
                                        "/storyad"
                                ],
                                [
                                        "107",
                                        "`/reelcover`",
                                        "تصميم غلاف جذاب وبارز لمقاطع الريلز بنسبة نقر عالية",
                                        "/reelcover"
                                ],
                                [
                                        "108",
                                        "`/carouselcover`",
                                        "شريحة غلاف أولى لمنشورات الكاروسيل لإيقاف التمرير وجذب الانتباه",
                                        "/carouselcover"
                                ],
                                [
                                        "109",
                                        "`/carouselslide`",
                                        "شرائح كاروسيل فردية بتصميم متطابق وهوية بصرية متناسقة",
                                        "/carouselslide"
                                ],
                                [
                                        "110",
                                        "`/productlaunch`",
                                        "تصميم إعلاني لإطلاق منتج جديد بتأثيرات بصرية حماسية",
                                        "/productlaunch"
                                ],
                                [
                                        "111",
                                        "`/salead`",
                                        "تصميم ترويجي لعروض التخفيضات مع إبراز نسبة الخصم",
                                        "/salead"
                                ],
                                [
                                        "112",
                                        "`/pricead`",
                                        "تصميم إعلاني للمبيعات يركز على السعر التنافسي والدعوة للشراء",
                                        "/pricead"
                                ],
                                [
                                        "113",
                                        "`/retargetingad`",
                                        "إعلان إعادة استهداف وتذكير للعملاء المهتمين بالمنتج",
                                        "/retargetingad"
                                ],
                                [
                                        "114",
                                        "`/collectionad`",
                                        "عرض مجموعة متكاملة من المنتجات في تشكيلة متناسقة وأنيقة",
                                        "/collectionad"
                                ],
                                [
                                        "115",
                                        "`/showcase`",
                                        "عرض استوديو فاخر للمنتج بإضاءة دقيقة وانعكاسات ناعمة",
                                        "/showcase"
                                ],
                                [
                                        "116",
                                        "`/heroshot`",
                                        "لقطة بطلة للمنتج مع حضور بصري قوي وتأثير جذاب",
                                        "/heroshot"
                                ],
                                [
                                        "117",
                                        "`/pedestal`",
                                        "عرض المنتج على منصة حجرية أو قاعدة مخصصة بتصميم فاخر",
                                        "/pedestal"
                                ],
                                [
                                        "118",
                                        "`/floatingproduct`",
                                        "تعليق المنتج في الهواء بانسيابية وتوازن ضوئي متقن",
                                        "/floatingproduct"
                                ],
                                [
                                        "119",
                                        "`/glassdisplay`",
                                        "عرض المنتج داخل خزانة زجاجية فاخرة مع انعكاسات نقية",
                                        "/glassdisplay"
                                ],
                                [
                                        "120",
                                        "`/museumdisplay`",
                                        "عرض المنتج بأسلوب المعارض والمتاحف بإضاءة فنية مركزة",
                                        "/museumdisplay"
                                ],
                                [
                                        "121",
                                        "`/luxuryshowcase`",
                                        "إبراز الخامات الراقية والمعادن الفاخرة بإضاءة استثنائية",
                                        "/luxuryshowcase"
                                ],
                                [
                                        "122",
                                        "`/minimalshowcase`",
                                        "تكوين منتج نظيف ومودرن مع مساحات واسعة للتايبوغرافي",
                                        "/minimalshowcase"
                                ],
                                [
                                        "123",
                                        "`/darkshowcase`",
                                        "استوديو مظلم مع إضاءات حواف خطية دقيقة على المنتج",
                                        "/darkshowcase"
                                ],
                                [
                                        "124",
                                        "`/whiteshowcase`",
                                        "استوديو أبيض ناصع مع انعكاسات ناعمة على الأرضية",
                                        "/whiteshowcase"
                                ],
                                [
                                        "125",
                                        "`/360view`",
                                        "ورقة تصوير متعددة الزوايا تعرض تفاصيل المنتج بالكامل",
                                        "/360view"
                                ],
                                [
                                        "126",
                                        "`/frontview`",
                                        "منظور أمامي مباشر (Front View) بتماثل وتوازن تام",
                                        "/frontview"
                                ],
                                [
                                        "127",
                                        "`/backview`",
                                        "منظور خلفي للمنتج (Rear View) يركز على تفاصيل الواجهة الخلفية",
                                        "/backview"
                                ],
                                [
                                        "128",
                                        "`/sideview`",
                                        "منظور جانبي بزاوية 90 درجة للمنتج (Side Profile)",
                                        "/sideview"
                                ],
                                [
                                        "129",
                                        "`/topview`",
                                        "تصوير رأسي مباشر من الأعلى (Top-down Flatlay)",
                                        "/topview"
                                ],
                                [
                                        "130",
                                        "`/threequarter`",
                                        "منظور بزاوية 45 درجة (Three-Quarter) لإبراز الأبعاد والعمق",
                                        "/threequarter"
                                ],
                                [
                                        "131",
                                        "`/macrodetail`",
                                        "لقطة ماكرو مقربة تبرز دقة الحرفية والشعار والخامات",
                                        "/macrodetail"
                                ],
                                [
                                        "132",
                                        "`/xray`",
                                        "رؤية شفافة مجسمة للأجزاء والمكونات الداخلية للمنتج",
                                        "/xray"
                                ],
                                [
                                        "133",
                                        "`/cutaway`",
                                        "عرض مقطعي (Cutaway) يزيل جزءاً من الهيكل لرؤية المحتوى الداخلي",
                                        "/cutaway"
                                ],
                                [
                                        "134",
                                        "`/explodedview`",
                                        "عرض انفجاري مفكك (Exploded View) لجميع الأجزاء معلقة بدقة",
                                        "/explodedview"
                                ],
                                [
                                        "135",
                                        "`/packshot`",
                                        "تصوير تجاري قياسي للمنتج (Packshot) بدون أي مشتتات",
                                        "/packshot"
                                ],
                                [
                                        "136",
                                        "`/catalog`",
                                        "صورة كتالوج موحدة بإضاءة وتأطير قياسي لعرض المنتجات",
                                        "/catalog"
                                ],
                                [
                                        "137",
                                        "`/ecommerce`",
                                        "صورة تجارة إلكترونية نظيفة ومركزة على المنتج للمتاجر الإلكترونية",
                                        "/ecommerce"
                                ],
                                [
                                        "138",
                                        "`/flatlay`",
                                        "ترتيب فني للعناصر على سطح مع تصوير من الأعلى (Flat Lay)",
                                        "/flatlay"
                                ],
                                [
                                        "139",
                                        "`/productinhand`",
                                        "إمساك المنتج باليد بطريقة طبيعية لإظهار الحجم الواقعي",
                                        "/productinhand"
                                ],
                                [
                                        "140",
                                        "`/lifestyle`",
                                        "وضع المنتج في بيئة حياتية يومية واقعية ومريحة",
                                        "/lifestyle"
                                ],
                                [
                                        "141",
                                        "`/editorial`",
                                        "تصوير إعلاني تحريري إبداعي يناسب مجلات التصميم والموضة",
                                        "/editorial"
                                ],
                                [
                                        "142",
                                        "`/stilllife`",
                                        "تكوين طبيعة صامتة (Still Life) مع إكسسوارات وإضاءة هادئة",
                                        "/stilllife"
                                ],
                                [
                                        "143",
                                        "`/texturefocus`",
                                        "إضاءة جانبية تبرز ملمس الخامات ونسيج المواد بدقة",
                                        "/texturefocus"
                                ],
                                [
                                        "144",
                                        "`/scalecontext`",
                                        "وضع المنتج بجوار عناصر مألوفة لبيان حجمه ومقاييسه الواقعية",
                                        "/scalecontext"
                                ],
                                [
                                        "145",
                                        "`/whitebackground`",
                                        "خلفية بيضاء نقية معزولة تماماً بدون ظلال مشتتة",
                                        "/whitebackground"
                                ],
                                [
                                        "146",
                                        "`/blackbackground`",
                                        "خلفية سوداء حالكة مع إضاءة موجهة على حواف المنتج",
                                        "/blackbackground"
                                ],
                                [
                                        "147",
                                        "`/brandbackground`",
                                        "خلفية مخصصة تعتمد على ألوان الهوية البصرية للعلامة التجارية",
                                        "/brandbackground"
                                ],
                                [
                                        "148",
                                        "`/gradientbackground`",
                                        "خلفية تدرج لوني انسيابية وناعمة بألوان متناسقة",
                                        "/gradientbackground"
                                ],
                                [
                                        "149",
                                        "`/greenscreen`",
                                        "خلفية خضراء متساوية الإضاءة (Chroma Key) لسهولة العزل لاحقاً",
                                        "/greenscreen"
                                ],
                                [
                                        "150",
                                        "`/studiobackground`",
                                        "بيئة استوديو احترافية مع خلفية لا نهائية ناعمة وبدون حواف",
                                        "/studiobackground"
                                ],
                                [
                                        "151",
                                        "`/luxuryinterior`",
                                        "ديكور داخلي عصري وفاخر يحيط بالمنتج بأناقة.",
                                        "/luxuryinterior"
                                ],
                                [
                                        "152",
                                        "`/naturebackground`",
                                        "بيئة طبيعية خلابة ساحلية أو غابية في ضوء النهار الطبيعي.",
                                        "/naturebackground"
                                ],
                                [
                                        "153",
                                        "`/urbanbackground`",
                                        "مشهد مدينة عصري مع ناطحات سحاب وزجاج وأرصفة حديثة",
                                        "/urbanbackground"
                                ],
                                [
                                        "154",
                                        "`/futuristicbackground`",
                                        "بيئة مستقبلية متطورة مع خطوط نيون وعناصر سايبربانك",
                                        "/futuristicbackground"
                                ],
                                [
                                        "155",
                                        "`/softlight`",
                                        "إضاءة ناعمة جداً مع ظلال خفيفة ومتدرجة بلطف",
                                        "/softlight"
                                ],
                                [
                                        "156",
                                        "`/hardlight`",
                                        "إضاءة قوية وحادة مع ظلال واضحة وتباين عالي",
                                        "/hardlight"
                                ],
                                [
                                        "157",
                                        "`/goldenhour`",
                                        "ضوء الساعة الذهبية الدافئ وقت الغروب بزاوية شمس منخفضة",
                                        "/goldenhour"
                                ],
                                [
                                        "158",
                                        "`/bluehour`",
                                        "إضاءة الساعة الزرقاء الباردة وقت الغسق بعد مغيب الشمس",
                                        "/bluehour"
                                ],
                                [
                                        "159",
                                        "`/windowlight`",
                                        "ضوء النهار الطبيعي النافذ من النافذة مع ظلال الستائر الناعمة",
                                        "/windowlight"
                                ],
                                [
                                        "160",
                                        "`/rimlight`",
                                        "إضاءة حواف ساطعة (Rim Light) تفصل العنصر عن الخلفية",
                                        "/rimlight"
                                ],
                                [
                                        "161",
                                        "`/spotlight`",
                                        "إضاءة موجهة (Spotlight) تعزل العنصر في بقعة ضوء ساحرة",
                                        "/spotlight"
                                ],
                                [
                                        "162",
                                        "`/neonlight`",
                                        "إضاءة نيون ملونة مع انعكاسات وردية وزرقاء مستقبلية",
                                        "/neonlight"
                                ],
                                [
                                        "163",
                                        "`/backlight`",
                                        "إضاءة خلفية (Backlight) تخلق هالة ضوئية متوهجة حول العنصر",
                                        "/backlight"
                                ],
                                [
                                        "164",
                                        "`/highkey`",
                                        "إضاءة هاي كي (High-Key) مشرقة ومنعشة مع الحد الأدنى من الظلال",
                                        "/highkey"
                                ],
                                [
                                        "165",
                                        "`/brandpalette`",
                                        "تطبيق لوحة ألوان العلامة التجارية مع توازن بصري تام",
                                        "/brandpalette"
                                ],
                                [
                                        "166",
                                        "`/beigeluxury`",
                                        "لوحة ألوان فاخرة تشمل درجات البيج، الكريمي والشمبانيا الهادئة",
                                        "/beigeluxury"
                                ],
                                [
                                        "167",
                                        "`/navypremium`",
                                        "كحلي ملكي عميق مع لمسات وإضاءات فضية أو ذهبية راقية",
                                        "/navypremium"
                                ],
                                [
                                        "168",
                                        "`/monochrome`",
                                        "تكوين أحادي اللون (Monochrome) بدرجات متدرجة من لون واحد",
                                        "/monochrome"
                                ],
                                [
                                        "169",
                                        "`/blackandwhite`",
                                        "معالجة بالأبيض والأسود مع تباين درامي وتفاصيل غنية",
                                        "/blackandwhite"
                                ],
                                [
                                        "170",
                                        "`/pastel`",
                                        "لوحة ألوان باستيل ناعمة وحالمة تضفي شعوراً بالراحة",
                                        "/pastel"
                                ],
                                [
                                        "171",
                                        "`/vibrant`",
                                        "ألوان زاهية، مفعمة بالحيوية والطاقة مع تشبع لوني متقن",
                                        "/vibrant"
                                ],
                                [
                                        "172",
                                        "`/muted`",
                                        "لوحة ألوان هادئة منخفضة التشبع لطابع مينيمال راقٍ",
                                        "/muted"
                                ],
                                [
                                        "173",
                                        "`/cooltone`",
                                        "أجواء لونية باردة بدرجات الأزرق والفضي والجليدي",
                                        "/cooltone"
                                ],
                                [
                                        "174",
                                        "`/warmtone`",
                                        "أجواء لونية دافئة بدرجات العنبر والذهبي والبرتقالي",
                                        "/warmtone"
                                ],
                                [
                                        "175",
                                        "`/chrome`",
                                        "مادة الكروم العاكسة فائقة اللمعان مع انعكاسات نقية",
                                        "/chrome"
                                ],
                                [
                                        "176",
                                        "`/liquidmetal`",
                                        "معدن سائل منساب بأسطح متموجة وأشكال انسيابية براقة",
                                        "/liquidmetal"
                                ],
                                [
                                        "177",
                                        "`/glass`",
                                        "زجاج كريستالي نقي للغاية مع انكسارات ضوئية دقيقة",
                                        "/glass"
                                ],
                                [
                                        "178",
                                        "`/frostedglass`",
                                        "زجاج مصنفر شبه شفاف مع نفاذية ضوء ناعمة وملمس مخملي",
                                        "/frostedglass"
                                ],
                                [
                                        "179",
                                        "`/holographic`",
                                        "تأثير هولوغرافي متغير الألوان يتبدل مع زوايا الرؤية المختلفة",
                                        "/holographic"
                                ],
                                [
                                        "180",
                                        "`/iridescent`",
                                        "بريق لؤلؤي ساحر مع انعكاسات صدفية ناعمة",
                                        "/iridescent"
                                ],
                                [
                                        "181",
                                        "`/matte`",
                                        "تشطيب مطفي ناعم غير عاكس بلمسة مخملية عصرية",
                                        "/matte"
                                ],
                                [
                                        "182",
                                        "`/metallic`",
                                        "معدن مصقول أو مفرش بتأثير التيتانيوم والألمنيوم الفاخر",
                                        "/metallic"
                                ],
                                [
                                        "183",
                                        "`/translucent`",
                                        "خامة شبه شفافة تظهر الطبقات الداخلية بنعومة وأناقة",
                                        "/translucent"
                                ],
                                [
                                        "184",
                                        "`/clayrender`",
                                        "رندر ثلاثي الأبعاد بطين الصلصال لعرض هندسة وتفاصيل المجسم.",
                                        "/clayrender"
                                ],
                                [
                                        "185",
                                        "`/watersplash`",
                                        "تناثر قطرات الماء الكريستالية المنحوتة حول المنتج بانسيابية",
                                        "/watersplash"
                                ],
                                [
                                        "186",
                                        "`/underwater`",
                                        "مشهد تصوير فني تحت الماء مع أشعة الشمس والفقاعات الهوائية",
                                        "/underwater"
                                ],
                                [
                                        "187",
                                        "`/smokereveal`",
                                        "ظهور درامي للمنتج من بين الدخان أو الضباب السينمائي الناعم",
                                        "/smokereveal"
                                ],
                                [
                                        "188",
                                        "`/powderburst`",
                                        "انفجار مساحيق الألوان الزاهية حول العنصر بطاقة بصرية مبهجة",
                                        "/powderburst"
                                ],
                                [
                                        "189",
                                        "`/particletrail`",
                                        "جزيئات مضيئة دقيقة تتتبع مسار الحركة في المشهد بأناقة",
                                        "/particletrail"
                                ],
                                [
                                        "190",
                                        "`/lighttrails`",
                                        "مسارات ضوئية انسيابية متوهجة تلتف حول المنتج بنعومة",
                                        "/lighttrails"
                                ],
                                [
                                        "191",
                                        "`/levitation`",
                                        "تعليق عناصر متعددة في الهواء بتكوين متناسق وتوازن تام",
                                        "/levitation"
                                ],
                                [
                                        "192",
                                        "`/gravitydefying`",
                                        "توازن سريالي خارق للجاذبية للمنتج على حواف صخرية دقيقة",
                                        "/gravitydefying"
                                ],
                                [
                                        "193",
                                        "`/motionfreeze`",
                                        "تجميد لحظة حركة حاسمة بدقة فائقة ووضوح تام",
                                        "/motionfreeze"
                                ],
                                [
                                        "194",
                                        "`/speedblur`",
                                        "عنصر رئيسي حاد مع تمويه حركي سريع في الخلفية",
                                        "/speedblur"
                                ],
                                [
                                        "195",
                                        "`/packaging`",
                                        "تصميم مفهوم التغليف والعبوات الفاخرة للمنتجات",
                                        "/packaging"
                                ],
                                [
                                        "196",
                                        "`/boxmockup`",
                                        "تطبيق تصميمك على علبة كرتونية فاخرة بملمس واقعي",
                                        "/boxmockup"
                                ],
                                [
                                        "197",
                                        "`/bottlemockup`",
                                        "تطبيق الملصق على زجاجة أنيقة مع قطرات الندى المنعشة",
                                        "/bottlemockup"
                                ],
                                [
                                        "198",
                                        "`/pouchmockup`",
                                        "تصميم أكياس التغليف المرنة والمعدنية بتفاصيل احترافية",
                                        "/pouchmockup"
                                ],
                                [
                                        "199",
                                        "`/bagmockup`",
                                        "حقيبة تسوق ورقية فاخرة للعلامات التجارية مع مقابض أنيقة",
                                        "/bagmockup"
                                ],
                                [
                                        "200",
                                        "`/labelmockup`",
                                        "عرض تصميم الملصق على عبوات مطابقة لنوع المنتج",
                                        "/labelmockup"
                                ],
                                [
                                        "201",
                                        "`/unboxing`",
                                        "تنسيق مشهد فتح الصندوق (Unboxing) مع كافة الملحقات",
                                        "/unboxing"
                                ],
                                [
                                        "202",
                                        "`/giftset`",
                                        "مجموعة هدايا متناسقة تضم المنتجات مرتبة في صندوق هدايا فاخر",
                                        "/giftset"
                                ],
                                [
                                        "203",
                                        "`/embossedlogo`",
                                        "شعارك مطبوع بأسلوب الحفر البارز (Embossed) على الجلد أو الورق",
                                        "/embossedlogo"
                                ],
                                [
                                        "204",
                                        "`/foilprint`",
                                        "طباعة فويل معدني مذهب أو فضي لامع على أسطح فاخرة",
                                        "/foilprint"
                                ],
                                [
                                        "205",
                                        "`/typographyposter`",
                                        "ملصق يعتمد على التايبوغرافي الجريء والخطوط الإبداعية المبتكرة",
                                        "/typographyposter"
                                ],
                                [
                                        "206",
                                        "`/headlinead`",
                                        "إعلان مبني حول عنوان رئيسي قوي يجذب الانتباه فوراً",
                                        "/headlinead"
                                ],
                                [
                                        "207",
                                        "`/minimalposter`",
                                        "ملصق مينيمال بسيط بعناصر بصرية محددة ورسالة واضحة",
                                        "/minimalposter"
                                ],
                                [
                                        "208",
                                        "`/boldposter`",
                                        "تايبوغرافي بحروف ضخمة وتباين لوني قوي ومؤثر",
                                        "/boldposter"
                                ],
                                [
                                        "209",
                                        "`/splitlayout`",
                                        "تخطيط مقسوم بتوازن متكافئ 50-50 بين الصورة والنص",
                                        "/splitlayout"
                                ],
                                [
                                        "210",
                                        "`/comparisonlayout`",
                                        "تصميم مقارنة جنباً إلى جنب (قبل/بعد) بخطوط فصل واضحة",
                                        "/comparisonlayout"
                                ],
                                [
                                        "211",
                                        "`/featurecallouts`",
                                        "تصميم يبرز مميزات المنتج عبر خطوط إرشادية وتفاصيل واضحة",
                                        "/featurecallouts"
                                ],
                                [
                                        "212",
                                        "`/testimonialad`",
                                        "إعلان شهادات العملاء ورضا المشترين مع التقييمات والنجوم",
                                        "/testimonialad"
                                ],
                                [
                                        "213",
                                        "`/magazinecover`",
                                        "تكوين تحريري يماثل أغلفة المجلات العالمية المرموقة",
                                        "/magazinecover"
                                ],
                                [
                                        "214",
                                        "`/campaignkeyvisual`",
                                        "Main visual establishing a campaign’s look.",
                                        "/campaignkeyvisual"
                                ],
                                [
                                        "215",
                                        "`/enhance`",
                                        "تحسين شامل لدرجة الوضوح، توازن الإضاءة واللمسة النهائية",
                                        "/enhance"
                                ],
                                [
                                        "216",
                                        "`/denoise`",
                                        "تقليل الضوضاء والتشويش البصري وتنعيم تفاصيل الصورة",
                                        "/denoise"
                                ],
                                [
                                        "217",
                                        "`/sharpen`",
                                        "زيادة حدة الحواف ووضوح التفاصيل الدقيقة والخامات",
                                        "/sharpen"
                                ],
                                [
                                        "218",
                                        "`/whitebalance`",
                                        "ضبط توازن اللون الأبيض وتصحيح انحراف الألوان غير المرغوب",
                                        "/whitebalance"
                                ],
                                [
                                        "219",
                                        "`/exposurefix`",
                                        "ضبط التعريض الضوئي وتصحيح الصور المظلمة أو الساطعة جداً",
                                        "/exposurefix"
                                ],
                                [
                                        "220",
                                        "`/colorcorrect`",
                                        "تصحيح الألوان الاحترافي لتبدو درجات الألوان طبيعية وواقعية",
                                        "/colorcorrect"
                                ],
                                [
                                        "221",
                                        "`/removetext`",
                                        "إزالة النصوص والعلامات المائية غير المرغوبة من الصورة بدقة",
                                        "/removetext"
                                ],
                                [
                                        "222",
                                        "`/removeobject`",
                                        "إزالة عناصر أو أشخاص محددين مع إعادة بناء الخلفية بسلاسة",
                                        "/removeobject"
                                ],
                                [
                                        "223",
                                        "`/replacebackground`",
                                        "استبدال الخلفية ببيئة أو ديكور جديد وفق طلبك مع مطابقة الإضاءة",
                                        "/replacebackground"
                                ],
                                [
                                        "224",
                                        "`/recolor`",
                                        "تغيير لون عنصر أو جزء محدد مع الحفاظ على الظلال والملمس",
                                        "/recolor"
                                ],
                                [
                                        "225",
                                        "`/zoomout`",
                                        "تصغير المنظور وتوسيع المشهد المحيط بالعنصر من كافة الاتجاهات",
                                        "/zoomout"
                                ],
                                [
                                        "226",
                                        "`/extendhorizontal`",
                                        "توسيع إطار الصورة أفقياً نحو اليمين واليسار لتحويلها لصورة عريضة",
                                        "/extendhorizontal"
                                ],
                                [
                                        "227",
                                        "`/extendvertical`",
                                        "توسيع إطار الصورة من الأعلى والأسفل مع الحفاظ على التناسق",
                                        "/extendvertical"
                                ],
                                [
                                        "228",
                                        "`/fullproduct`",
                                        "إعادة تأطير وبناء صورة متكاملة وواضحة للمنتج",
                                        "/fullproduct"
                                ],
                                [
                                        "229",
                                        "`/centercomposition`",
                                        "وضع العنصر الرئيسي في مركز الكادر بتركيز بصري تام",
                                        "/centercomposition"
                                ],
                                [
                                        "230",
                                        "`/negativespace`",
                                        "إضافة مساحات فارغة نظيفة للنصوص والتايبوغرافي الإعلاني",
                                        "/negativespace"
                                ],
                                [
                                        "231",
                                        "`/symmetry`",
                                        "إنشاء تكوين بصري متوازن ومتماثل بدقة وأناقة",
                                        "/symmetry"
                                ],
                                [
                                        "232",
                                        "`/portraitformat`",
                                        "تكييف التكوين للوضع الرأسي (مناسب للقصص والريلز)",
                                        "/portraitformat"
                                ],
                                [
                                        "233",
                                        "`/landscapeformat`",
                                        "تكييف التكوين للوضع الأفقي العريض وبانرات المواقع",
                                        "/landscapeformat"
                                ],
                                [
                                        "234",
                                        "`/squareformat`",
                                        "تكييف التكوين للتنسيق المربع القياسي (1:1)",
                                        "/squareformat"
                                ],
                                [
                                        "235",
                                        "`/3drender`",
                                        "رندر ثلاثي الأبعاد للمنتج بخامات واقعية وإضاءة ناعمة",
                                        "/3drender"
                                ],
                                [
                                        "236",
                                        "`/claystyle`",
                                        "رسوم توضيحية بطين الصلصال الناعم وخامات مطفية أنيقة",
                                        "/claystyle"
                                ],
                                [
                                        "237",
                                        "`/papercraft`",
                                        "مظهر قصاصات الورق الطبقية مع ظلال واقعية تعكس العمق",
                                        "/papercraft"
                                ],
                                [
                                        "238",
                                        "`/origami`",
                                        "نمط الأوريغامي والورق المطوي بخطوط هندسية دقيقة",
                                        "/origami"
                                ],
                                [
                                        "239",
                                        "`/isometric`",
                                        "رسم توضيحي آيزومتري ثلاثي الأبعاد بزوايا هندسية متناسقة",
                                        "/isometric"
                                ],
                                [
                                        "240",
                                        "`/lineart`",
                                        "رسوم توضيحية خطية نقية (Outline) بأسلوب فيكتور عصري",
                                        "/lineart"
                                ],
                                [
                                        "241",
                                        "`/pencilsketch`",
                                        "رسم كلاسيكي بقلم الرصاص مع تظليلات يدوية احترافية",
                                        "/pencilsketch"
                                ],
                                [
                                        "242",
                                        "`/watercolor`",
                                        "لوحة ألوان مائية بانسيابية لونية وتأثيرات الورق المبلل",
                                        "/watercolor"
                                ],
                                [
                                        "243",
                                        "`/comicstyle`",
                                        "أسلوب كتب الكوميكس والروايات المصورة بخطوط واضحة",
                                        "/comicstyle"
                                ],
                                [
                                        "244",
                                        "`/retroprint`",
                                        "ملصق فني كلاسيكي عتيق (Vintage) بتأثيرات طباعة قديمة",
                                        "/retroprint"
                                ]
                        ]
                },
                "callout": {
                        "type": "quote",
                        "title": "الصيغة الذهبية لبرومبت تصوير المنتجات",
                        "text": "[صورة المنتج المرفوعة] + /showcase + /luxuryshowcase + /rimlight + Keep original product colors, portrait 4:5, no text."
                }
        },
        {
                "id": "camera-angles-and-cinema",
                "title": "٥. زوايا الكاميرا، العدسات والمنظور السينمائي (85 أمراً)",
                "lead": "أكواد دقيقة لتحديد ارتفاع الكاميرا، الأبعاد البؤرية للعدسات، وتكوين الكادر السينمائي المتقن بالذكاء الاصطناعي.",
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "حالة الاستخدام / مثال"
                        ],
                        "rows": [
                                [
                                        "245",
                                        "`/lowangle`",
                                        "زاوية منخفضة (من الأسفل) لإبراز القوة والهيبة والفخامة",
                                        "/lowangle"
                                ],
                                [
                                        "246",
                                        "`/highangle`",
                                        "زاوية مرتفعة (من الأعلى) لعرض المنظور الشامل والمقاييس",
                                        "/highangle"
                                ],
                                [
                                        "247",
                                        "`/eyelevel`",
                                        "زاوية مستوى العين الطبيعية بتناسب بصري واقعي ومتوازن",
                                        "/eyelevel"
                                ],
                                [
                                        "248",
                                        "`/dutchangle`",
                                        "زاوية مائلة (Dutch Angle) لإضفاء الحماس والديناميكية والإثارة",
                                        "/dutchangle"
                                ],
                                [
                                        "249",
                                        "`/OTS`",
                                        "تأطير من فوق الكتف (OTS) لخلق عمق سينمائي وشعور بالمشاركة",
                                        "/OTS"
                                ],
                                [
                                        "250",
                                        "`/POV`",
                                        "منظور الشخص الأول (POV) وكأن المشاهد موجود داخل المشهد",
                                        "/POV"
                                ],
                                [
                                        "251",
                                        "`/wormsview`",
                                        "زاوية عين الدودة من مستوى الأرض نحو الأعلى بشكل درامي",
                                        "/wormsview"
                                ],
                                [
                                        "252",
                                        "`/birdsview`",
                                        "زاوية عين الطائر من الأعلى عمودياً بزاوية 90 درجة",
                                        "/birdsview"
                                ],
                                [
                                        "253",
                                        "`/droneview`",
                                        "لقطة جوية سينمائية بالطائرات المسيرة تعرض اتساع المشهد",
                                        "/droneview"
                                ],
                                [
                                        "254",
                                        "`/closeup`",
                                        "لقطة مقربة (Close-up) تركز على الملامح والمشاعر وتفاصيل المنتج",
                                        "/closeup"
                                ],
                                [
                                        "255",
                                        "`/extremecloseup`",
                                        "لقطة مقربة للغاية (Extreme Close-up) لجزئية دقيقة ومبهرة",
                                        "/extremecloseup"
                                ],
                                [
                                        "256",
                                        "`/mediumshot`",
                                        "لقطة متوسطة (Medium Shot) من الخصر للأعلى مثالية للحوارات",
                                        "/mediumshot"
                                ],
                                [
                                        "257",
                                        "`/fullbody`",
                                        "لقطة كاملة للجسم (Full Shot) مع مساحات متوازنة حول العنصر",
                                        "/fullbody"
                                ],
                                [
                                        "258",
                                        "`/wideframe`",
                                        "لقطة سينمائية واسعة تدمج بين العنصر والبيئة المحيطة بتناغم",
                                        "/wideframe"
                                ],
                                [
                                        "259",
                                        "`/centerframe`",
                                        "تمركز العنصر في منتصف الصورة لتصميم ملصق بصري أيقوني",
                                        "/centerframe"
                                ],
                                [
                                        "260",
                                        "`/ruleofthirds`",
                                        "تطبيق قاعدة الأثلاث لتكوين تحريري جذاب ومريح للعين",
                                        "/ruleofthirds"
                                ],
                                [
                                        "261",
                                        "`/foregroundframe`",
                                        "استخدام عناصر في المقدمة (Foreground) لخلق عمق بصري متعدد الطبقات",
                                        "/foregroundframe"
                                ],
                                [
                                        "262",
                                        "`/cinematic`",
                                        "لقطة سينمائية عالية المستوى مع إضاءة دقيقة وتدرج ألوان هوليوودي",
                                        "/cinematic"
                                ],
                                [
                                        "263",
                                        "`/filmstill`",
                                        "إحساس اللقطة السينمائية الروائية مع عيوب بصرية طبيعية ممتعة",
                                        "/filmstill"
                                ],
                                [
                                        "264",
                                        "`/anamorphic`",
                                        "طابع شاشات السينما العريضة مع توهج عدسة (Lens Flare) خافت",
                                        "/anamorphic"
                                ],
                                [
                                        "265",
                                        "`/imax`",
                                        "لقطة بمقاييس كبيرة (Large Format) بدقة غامرة وتفاصيل فائقة",
                                        "/imax"
                                ],
                                [
                                        "266",
                                        "`/noir`",
                                        "أجواء أفلام النوار الكلاسيكية بالأبيض والأسود مع ظلال عميقة",
                                        "/noir"
                                ],
                                [
                                        "267",
                                        "`/neonnoir`",
                                        "مشهد سينمائي مظلم مع إضاءات نيون ملونة وانعكاسات ليلية",
                                        "/neonnoir"
                                ],
                                [
                                        "268",
                                        "`/vintagefilm`",
                                        "خامة الفيلم التناظري الكلاسيكي مع حبيبات ناعمة وألوان دافئة",
                                        "/vintagefilm"
                                ],
                                [
                                        "269",
                                        "`/70scinema`",
                                        "تصوير سينمائي دافئ وغني بالخامات مستوحى من سبعينيات القرن الماضي",
                                        "/70scinema"
                                ],
                                [
                                        "270",
                                        "`/80saction`",
                                        "إضاءة أفلام الأكشن الحماسية مع تباين قوي وتأطير بطولي",
                                        "/80saction"
                                ],
                                [
                                        "271",
                                        "`/indiefilm`",
                                        "سينما واقعية حميمية بإضاءة طبيعية واختيارات بصرية هادئة",
                                        "/indiefilm"
                                ],
                                [
                                        "272",
                                        "`/silhouette`",
                                        "صورة ظلية (Silhouette) كاملة للعنصر أمام خلفية مضيئة وساحرة",
                                        "/silhouette"
                                ],
                                [
                                        "273",
                                        "`/chiaroscuro`",
                                        "إضاءة كياروسكورو الدرامية المستوحاة من لوحات عصر النهضة",
                                        "/chiaroscuro"
                                ],
                                [
                                        "274",
                                        "`/practicallight`",
                                        "استخدام مصادر إضاءة واقعية داخل الكادر مثل المصابيح والشاشات",
                                        "/practicallight"
                                ],
                                [
                                        "275",
                                        "`/producthero`",
                                        "إبراز المنتج كبطل بصري لا يقبل المنافسة في مركز الاهتمام",
                                        "/producthero"
                                ],
                                [
                                        "276",
                                        "`/luxuryad`",
                                        "معالجة تجارية فاخرة بتكوين متقن وأعلى درجات النقاء البصري",
                                        "/luxuryad"
                                ],
                                [
                                        "277",
                                        "`/applestyle`",
                                        "إعلان منتجات مينيمال بسلسلة بصرية واضحة ومساحات بيضاء أنيقة",
                                        "/applestyle"
                                ],
                                [
                                        "278",
                                        "`/billboard`",
                                        "تصميم المشهد ليماثل حملة إعلانات خارجية ضخمة ومؤثرة",
                                        "/billboard"
                                ],
                                [
                                        "279",
                                        "`/editorialad`",
                                        "تصوير تحريري لمجلات الموضة الراقية بتنسيق وأزياء مبتكرة",
                                        "/editorialad"
                                ],
                                [
                                        "280",
                                        "`/beautyshot`",
                                        "لقطة بطلة فاخرة تبرز انحناءات التصميم وجودة التشطيب النهائي",
                                        "/beautyshot"
                                ],
                                [
                                        "281",
                                        "`/macroproduct`",
                                        "لقطة تفصيلية فائقة الدقة تبرز جودة الحرفية ودقة الصنع",
                                        "/macroproduct"
                                ],
                                [
                                        "282",
                                        "`/freezeaction`",
                                        "تجميد لحظة حركة سريعة بتفاصيل حادة وتوقيت درامي مذهل",
                                        "/freezeaction"
                                ],
                                [
                                        "283",
                                        "`/motionblur`",
                                        "تمويه حركي ديناميكي في الخلفية مع بقاء العنصر الرئيسي حاداً",
                                        "/motionblur"
                                ],
                                [
                                        "284",
                                        "`/speedramp`",
                                        "لغة بصرية مقتبسة من مشاهد الحركة البطيئة السينمائية (Slow-Mo)",
                                        "/speedramp"
                                ],
                                [
                                        "285",
                                        "`/midair`",
                                        "التقاط العنصر معلقاً في الهواء في أقصى لحظة ارتفاع وتألق",
                                        "/midair"
                                ],
                                [
                                        "286",
                                        "`/impactframe`",
                                        "تصوير لحظة الاصطدام المباشر مع تناثر الجزيئات وطاقة بصرية قوية",
                                        "/impactframe"
                                ],
                                [
                                        "287",
                                        "`/windblown`",
                                        "محاكاة حركة الرياح الطبيعية لتحريك الشعر والأقمشة والدخان بانسيابية",
                                        "/windblown"
                                ],
                                [
                                        "288",
                                        "`/runningframe`",
                                        "وضعية ركض ديناميكية مع منظور سينمائي وحركة في البيئة المحيطة",
                                        "/runningframe"
                                ],
                                [
                                        "289",
                                        "`/jumpcutframe`",
                                        "خلق لحظة بصرية مفاجئة ومبتكرة بتناقض إبداعي جذاب",
                                        "/jumpcutframe"
                                ],
                                [
                                        "290",
                                        "`/collision`",
                                        "ترتيب العناصر البصرية لتلتقي في نقطة تركيز درامية واحدة",
                                        "/collision"
                                ],
                                [
                                        "291",
                                        "`/chaosframe`",
                                        "تكوين غني بالتفاصيل والطاقة مع أحداث بصرية متعددة في آن واحد",
                                        "/chaosframe"
                                ],
                                [
                                        "292",
                                        "`/impossibleangle`",
                                        "منظور كاميرا خيالي وسريالي يستحيل تنفيذه بالتصوير الفوتوغرافي العادي",
                                        "/impossibleangle"
                                ],
                                [
                                        "293",
                                        "`/gravityoff`",
                                        "طفو العناصر والشخصيات بانسيابية وكأن الجاذبية الأرضية منعدمة",
                                        "/gravityoff"
                                ],
                                [
                                        "294",
                                        "`/giantobject`",
                                        "تحويل مجسم صغير عادي إلى معلم عملاق وضخم بحجم ناطحة سحاب",
                                        "/giantobject"
                                ],
                                [
                                        "295",
                                        "`/miniworld`",
                                        "بناء عالم مصغر مذهل (Miniature) داخل العنصر الرئيسي أو حوله",
                                        "/miniworld"
                                ],
                                [
                                        "296",
                                        "`/mirrorworld`",
                                        "إنشاء واقع موازٍ ومعكوس بمنطق بصري ذكي ومتقن",
                                        "/mirrorworld"
                                ],
                                [
                                        "297",
                                        "`/dreamlogic`",
                                        "مشهد سريالي حالم بعلاقات بصرية منسجمة وجذابة للغاية",
                                        "/dreamlogic"
                                ],
                                [
                                        "298",
                                        "`/infinite`",
                                        "تكرار لا نهائي للأنماط والعناصر لتمتد إلى ما وراء الأفق",
                                        "/infinite"
                                ],
                                [
                                        "299",
                                        "`/portal`",
                                        "تصميم بوابة مضيئة تربط بين عالمين أو بيئتين مختلفتين تماماً",
                                        "/portal"
                                ],
                                [
                                        "300",
                                        "`/scaleillusion`",
                                        "تلاعب ذكي بالمنظور البصري لإظهار العناصر بأحجام عملاقة أو متناهية الصغر",
                                        "/scaleillusion"
                                ],
                                [
                                        "301",
                                        "`/realityshift`",
                                        "دمج بيئتين متناقضتين (مثل الصحراء والمحيط) في لقطة واقعية متجانسة",
                                        "/realityshift"
                                ],
                                [
                                        "302",
                                        "`/fashioneditorial`",
                                        "تكوين أزياء راقية (High-Fashion) مع إطلالات كاريزماتية وأناقة تحريرية",
                                        "/fashioneditorial"
                                ],
                                [
                                        "303",
                                        "`/streetphoto`",
                                        "تصوير شوارع وثائقي عفوي بدون تكلف مع إضاءة طبيعية",
                                        "/streetphoto"
                                ],
                                [
                                        "304",
                                        "`/paparazzi`",
                                        "تصوير المشاهير السريع (Paparazzi) بفلاش مباشر وطاقة عفوية",
                                        "/paparazzi"
                                ],
                                [
                                        "305",
                                        "`/polaroid`",
                                        "طابع صور البولارويد الفورية مع تباين ناعم وحبيبات دافئة",
                                        "/polaroid"
                                ],
                                [
                                        "306",
                                        "`/35mm`",
                                        "طابع التصوير الكلاسيكي بفيلم 35mm مع حبيبات فيلم كوداك الأصيلة",
                                        "/35mm"
                                ],
                                [
                                        "307",
                                        "`/mediumformat`",
                                        "مظهر كاميرات الميديوم فورمات (Hasselblad) بتدرج لوني فائق النقاء",
                                        "/mediumformat"
                                ],
                                [
                                        "308",
                                        "`/disposablecam`",
                                        "تصوير بكاميرات مدمجة قديمة مع وميض فلاش نوستالجي مميز",
                                        "/disposablecam"
                                ],
                                [
                                        "309",
                                        "`/contactsheet`",
                                        "عرض ورقة تواصل فوتوغرافية (Contact Sheet) تضم لقطات متتالية من الفيلم",
                                        "/contactsheet"
                                ],
                                [
                                        "310",
                                        "`/lookbook`",
                                        "لوحة لوك بوك (Lookbook) لأحدث مجموعات الأزياء بخلفيات حيادية",
                                        "/lookbook"
                                ],
                                [
                                        "311",
                                        "`/coverstory`",
                                        "بورتريه جاهز لأغلفة المجلات العالمية مع مساحة مخصصة للعنوان والمانشيت",
                                        "/coverstory"
                                ],
                                [
                                        "312",
                                        "`/BTS`",
                                        "لقطة كواليس التصوير (BTS) تظهر طاقم العمل ومعدات الإنتاج",
                                        "/BTS"
                                ],
                                [
                                        "313",
                                        "`/behindthescenes`",
                                        "كشف معدات الإضاءة والكاميرات والديكورات المحيطة باللقطة النهائية",
                                        "/behindthescenes"
                                ],
                                [
                                        "314",
                                        "`/setphoto`",
                                        "تصوير العنصر داخل استوديو وديكور إنتاج سينمائي احترافي",
                                        "/setphoto"
                                ],
                                [
                                        "315",
                                        "`/camerarig`",
                                        "إظهار معدات التصوير الاحترافية والشاشات والحوامل في الكادر",
                                        "/camerarig"
                                ],
                                [
                                        "316",
                                        "`/lightingrig`",
                                        "كشف موزعات الإضاءة، السوفت بوكس، الفلاج والعواكس الضوئية",
                                        "/lightingrig"
                                ],
                                [
                                        "317",
                                        "`/directorview`",
                                        "تأطير المشهد من زاوية وموقع المخرج أثناء متابعة التصوير",
                                        "/directorview"
                                ],
                                [
                                        "318",
                                        "`/videovillage`",
                                        "شاشة مراقبة الإنتاج مع الطاقم أثناء مراجعة وتحليل اللقطة المسجلة",
                                        "/videovillage"
                                ],
                                [
                                        "319",
                                        "`/studiofloor`",
                                        "لقطة واسعة تظهر المساحة الشاملة لاستوديو التصوير بالكامل",
                                        "/studiofloor"
                                ],
                                [
                                        "320",
                                        "`/beforeafter`",
                                        "مقارنة بصرية بين كواليس المشهد الخام والنتيجة النهائية المعالجة",
                                        "/beforeafter"
                                ],
                                [
                                        "321",
                                        "`/makingof`",
                                        "توثيق سينمائي للجهد الإبداعي والحرفية المتقنة وراء صناعة الصورة",
                                        "/makingof"
                                ],
                                [
                                        "322",
                                        "`/fisheye`",
                                        "تأثير عدسة عين السمكة (Fisheye) لانحناءات بصرية حماسية ومبتكرة",
                                        "/fisheye"
                                ],
                                [
                                        "323",
                                        "`/tinyplanet`",
                                        "تحويل المشهد البانورامي 360 درجة إلى كوكب دائري مصغر مذهل",
                                        "/tinyplanet"
                                ],
                                [
                                        "324",
                                        "`/reflection`",
                                        "بناء التكوين البصري حول انعكاسات المرايا والأسطح الزجاجية والمائية",
                                        "/reflection"
                                ],
                                [
                                        "325",
                                        "`/throughglass`",
                                        "التصوير من خلال زجاج واقعي مع انكسار الضوء وقطرات المطر لخلق عمق",
                                        "/throughglass"
                                ],
                                [
                                        "326",
                                        "`/xraystyle`",
                                        "رندر شفاف بأسلوب الأشعة السينية يكشف المكونات والهيكل الداخلي",
                                        "/xraystyle"
                                ],
                                [
                                        "327",
                                        "`/thermal`",
                                        "معالجة بصرية مستوحاة من الكاميرات الحرارية وتدرجات درجات الحرارة",
                                        "/thermal"
                                ],
                                [
                                        "328",
                                        "`/blueprint`",
                                        "مخطط هندسي تقني (Blueprint) بخطوط بيضاء على خلفية زرقاء هندسية",
                                        "/blueprint"
                                ],
                                [
                                        "329",
                                        "`/conceptart`",
                                        "فن المفاهيم السينمائي (Concept Art) مع الحفاظ على أعلى درجات الواقعية",
                                        "/conceptart"
                                ]
                        ]
                }
        },
        {
                "id": "ai-image-tools-and-edits",
                "title": "٦. أدوات وتعديل الصور المخصصة للذكاء الاصطناعي (28 أمراً)",
                "lead": "أوامر مباشرة لتعديل الصور، إزالة الخلفيات، تلوين الصور الأرشيفية وترقية الجودة البصرية.",
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "حالة الاستخدام / مثال"
                        ],
                        "rows": [
                                [
                                        "330",
                                        "`/generateimage`",
                                        "توليد صور عالية الجودة من الوصف النصي مع مراعاة تفاصيل البرومبت",
                                        "/generateimage"
                                ],
                                [
                                        "331",
                                        "`/generatehandwrittenimage`",
                                        "محاكاة رسالة بخط اليد واقعية بالحبر على ورق بملمس طبيعي",
                                        "/generatehandwrittenimage"
                                ],
                                [
                                        "332",
                                        "`/editimage`",
                                        "تعديل صورة موجودة وتطبيق التغييرات مع الحفاظ على هوية العنصر",
                                        "/editimage"
                                ],
                                [
                                        "333",
                                        "`/removebackground`",
                                        "إزالة خلفية الصورة وعزل العنصر بدقة عالية وخلفية شفافة",
                                        "/removebackground"
                                ],
                                [
                                        "334",
                                        "`/upscale`",
                                        "رفع دقة ووضوح الصورة (Upscale) وإبراز التفاصيل الحادة",
                                        "/upscale"
                                ],
                                [
                                        "335",
                                        "`/enhanceimage`",
                                        "تحسين جودة الصورة الشاملة، ضبط الإضاءة وتوازن الألوان",
                                        "/enhanceimage"
                                ],
                                [
                                        "336",
                                        "`/restorephoto`",
                                        "ترميم الصور القديمة والتالفة وإزالة الخدوش وتجديد تفاصيلها",
                                        "/restorephoto"
                                ],
                                [
                                        "337",
                                        "`/colorize`",
                                        "تلوين الصور القديمة بالأبيض والأسود بألوان طبيعية واقعية",
                                        "/colorize"
                                ],
                                [
                                        "338",
                                        "`/inpaint`",
                                        "إزالة أو استبدال عناصر محددة في الصورة بدقة وتناغم تام (Inpainting)",
                                        "/inpaint"
                                ],
                                [
                                        "339",
                                        "`/outpaint`",
                                        "توسيع إطار الصورة خارج حدودها الأصلية (Outpainting) مع امتداد واقعي",
                                        "/outpaint"
                                ],
                                [
                                        "340",
                                        "`/generatelogo`",
                                        "تصميم شعار (Logo) عصري ومينيمال يعكس هوية العلامة التجارية",
                                        "/generatelogo"
                                ],
                                [
                                        "341",
                                        "`/generateicon`",
                                        "تصميم حزمة أيقونات عصرية متناسقة لتطبيقات الجوال والمواقع",
                                        "/generateicon"
                                ],
                                [
                                        "342",
                                        "`/generateposter`",
                                        "تصميم ملصقات بصرية (Posters) جذابة للفعاليات والحملات",
                                        "/generateposter"
                                ],
                                [
                                        "343",
                                        "`/generatebanner`",
                                        "تصميم بانرات إعلانية رقمية متوافقة مع منصات التواصل الاجتماعي",
                                        "/generatebanner"
                                ],
                                [
                                        "344",
                                        "`/generatethumbnail`",
                                        "تصميم صور مصغرة (Thumbnails) لليوتيوب بنسبة نقر عالية وتصميم ملفت",
                                        "/generatethumbnail"
                                ],
                                [
                                        "345",
                                        "`/generateavatar`",
                                        "توليد صور رمزية (Avatars) ثلاثية الأبعاد مخصصة للحسابات الشخصية",
                                        "/generateavatar"
                                ],
                                [
                                        "346",
                                        "`/generatepixelart`",
                                        "رسوم بكسل آرت (Pixel Art) مستوحاة من ألعاب الفيديو الكلاسيكية",
                                        "/generatepixelart"
                                ],
                                [
                                        "347",
                                        "`/generateanime`",
                                        "رسوم بأسلوب الأنمي الياباني بألوان مميزة وتفاصيل كلاسيكية ساحرة",
                                        "/generateanime"
                                ],
                                [
                                        "348",
                                        "`/generatephotorealistic`",
                                        "توليد صور واقعية للغاية تحاكي التصوير الفوتوغرافي الاحترافي",
                                        "/generatephotorealistic"
                                ],
                                [
                                        "349",
                                        "`/generate3d`",
                                        "رسوم توضيحية ثلاثية الأبعاد بتأثيرات خامات ناعمة ومجسمة",
                                        "/generate3d"
                                ],
                                [
                                        "350",
                                        "`/generatesticker`",
                                        "تصميم ملصقات (Stickers) كرتونية مرحة بحدود بيضاء مقصوصة",
                                        "/generatesticker"
                                ],
                                [
                                        "351",
                                        "`/generateinfographic`",
                                        "تصميم إنفوجرافيك تعليمي بتنظيم بصري للبيانات ورسوم توضيحية",
                                        "/generateinfographic"
                                ],
                                [
                                        "352",
                                        "`/mockup`",
                                        "موك آب (Mockup) واقعي للمنتجات لعرض التصاميم باحترافية للعملاء",
                                        "/mockup"
                                ],
                                [
                                        "353",
                                        "`/grammar`",
                                        "تصحيح القواعد اللغوية، علامات الترقيم وتحسين انسيابية النص",
                                        "/grammar"
                                ],
                                [
                                        "354",
                                        "`/blog`",
                                        "كتابة مقالات مدونة متوافقة مع السيو بمقدمات جذابة وهيكل منظم",
                                        "/blog"
                                ],
                                [
                                        "355",
                                        "`/essay`",
                                        "كتابة مقالات أكاديمية وتحليلية مدعومة بالأدلة والبراهين المنطقية",
                                        "/essay"
                                ],
                                [
                                        "356",
                                        "`/analyze`",
                                        "تحليل متقدم للبيانات، استخراج الأنماط الإحصائية وتقديم رؤى تجارية",
                                        "/analyze"
                                ],
                                [
                                        "357",
                                        "`/research`",
                                        "بحث معمق وشامل حول موضوع معين مع مقارنة المصادر واستخلاص النتائج",
                                        "/research"
                                ]
                        ]
                }
        },
        {
                "id": "secret-styles-and-fashion",
                "title": "٧. الرموز السرية لتعديل الأنماط، الأزياء والرندرات المتميزة (103 رمزاً)",
                "lead": "الرموز السرية لتغيير الأزياء والملامح، أنماط الأنمي، السايبربانك، العصور التاريخية، والخيال العلمي وعالم الأزياء.",
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "حالة الاستخدام / مثال"
                        ],
                        "rows": [
                                [
                                        "358",
                                        "`/PROSHOT`",
                                        "إعداد تصوير استوديو احترافي بإضاءة متقنة ومعايرة ألوان سينمائية.",
                                        "/PROSHOT"
                                ],
                                [
                                        "359",
                                        "`/NEWBG`",
                                        "استبدال خلفية الصورة بسلاسة مع الحفاظ التام على هوية العنصر.",
                                        "/NEWBG"
                                ],
                                [
                                        "360",
                                        "`/OUTFIT`",
                                        "تغيير ذكي للأزياء والملابس مع الحفاظ الكامل على ملامح الوجه.",
                                        "/OUTFIT"
                                ],
                                [
                                        "361",
                                        "`/TOGETHER`",
                                        "دمج عدة شخصيات أو عناصر مختلفة بشكل طبيعي في كادر واحد.",
                                        "/TOGETHER"
                                ],
                                [
                                        "362",
                                        "`/HDREAL`",
                                        "ترقية دقة الصورة إلى واقعية فائقة مع ملامح بشرة طبيعية.",
                                        "/HDREAL"
                                ],
                                [
                                        "363",
                                        "`/PASSPORT`",
                                        "توليد صور شخصية وجواز سفر بيومترية بخلفية بيضاء وإضاءة متوازنة.",
                                        "/PASSPORT"
                                ],
                                [
                                        "364",
                                        "`/steampunk`",
                                        "طابع ستيم بانك فيكتوري بتروس نحاسية، أنابيب ومحركات بخارية.",
                                        "/steampunk"
                                ],
                                [
                                        "365",
                                        "`/ghibli`",
                                        "أسلوب استوديو غيبلي الساحر برسوم يدوية وسماء زرقاء ومروج خضراء.",
                                        "/ghibli"
                                ],
                                [
                                        "366",
                                        "`/anime`",
                                        "رسوم أنمي يابانية عصرية بعيون معبرة وخطوط واضحة وألوان مشرقة.",
                                        "/anime"
                                ],
                                [
                                        "367",
                                        "`/chibi`",
                                        "شخصيات تشيبي كرتونية مصغرة برؤوس كبيرة وتفاصيل مرحة ولطيفة.",
                                        "/chibi"
                                ],
                                [
                                        "368",
                                        "`/disney`",
                                        "أسلوب ديزني الكلاسيكي الساحر برواية القصص والألوان الدافئة.",
                                        "/disney"
                                ],
                                [
                                        "369",
                                        "`/pixar`",
                                        "رندر ثلاثي الأبعاد بأسلوب بيكسار العالمي بإضاءة مخملية وخامات حية.",
                                        "/pixar"
                                ],
                                [
                                        "370",
                                        "`/dreamworks`",
                                        "أسلوب دريم ووركس ثلاثي الأبعاد المليء بالحيوية والتعبيرات المرحة.",
                                        "/dreamworks"
                                ],
                                [
                                        "371",
                                        "`/filmgrain`",
                                        "خامة فيلم 35mm سينمائي أصيل بحبيبات ناعمة وعمق كلاسيكي.",
                                        "/filmgrain"
                                ],
                                [
                                        "372",
                                        "`/retro90s`",
                                        "أجواء التسعينات النوستالجية بألوان زاهية وشرائط كاسيت وطابع كلاسيكي.",
                                        "/retro90s"
                                ],
                                [
                                        "373",
                                        "`/y2k`",
                                        "طابع الألفية (Y2K) المستقبلي بالكروم اللامع والزجاج الملون والسيبرنتيك.",
                                        "/y2k"
                                ],
                                [
                                        "374",
                                        "`/synthwave`",
                                        "طابع السينث ويف والريترو بأفق نيون بنفسجي وشمس ساطعة وسيارات رياضية.",
                                        "/synthwave"
                                ],
                                [
                                        "375",
                                        "`/outrun`",
                                        "أجواء سباقات ألعاب الفيديو الليلية (Outrun) بأضواء نيون وسرعة فائقة.",
                                        "/outrun"
                                ],
                                [
                                        "376",
                                        "`/glitch`",
                                        "تأثير جليتش رقمي فني بتشتت لوني RGB وخطوط شاشات كلاسيكية.",
                                        "/glitch"
                                ],
                                [
                                        "377",
                                        "`/hologram`",
                                        "هولوغرام ثلاثي الأبعاد مضيء معلق في الهواء بخطوط مسح زرقاء.",
                                        "/hologram"
                                ],
                                [
                                        "378",
                                        "`/glassmorphism`",
                                        "تصميم جلاسمورفيزم (Glassmorphism) بألواح زجاجية ضبابية وطبقات عائمة.",
                                        "/glassmorphism"
                                ],
                                [
                                        "379",
                                        "`/neon`",
                                        "إضاءة نيون ساطعة عالية التباين تتوهج في الظلام بألوان حيوية.",
                                        "/neon"
                                ],
                                [
                                        "380",
                                        "`/goldluxury`",
                                        "تصميم ملكي فاخر بالذهب الخالص عيار 24 والرخام الأسود المصقول.",
                                        "/goldluxury"
                                ],
                                [
                                        "381",
                                        "`/minimal`",
                                        "تصميم مينيمال هادئ يركز على المساحات الفارغة وبساطة الخطوط.",
                                        "/minimal"
                                ],
                                [
                                        "382",
                                        "`/flatdesign`",
                                        "تصميم مسطح ثنائي الأبعاد (Flat Design) بكتل لونية وأشكال هندسية نقية.",
                                        "/flatdesign"
                                ],
                                [
                                        "383",
                                        "`/doodle`",
                                        "رسوم دودل يدوية إبداعية ومرحة بخطوط حبر عفوية وجميلة.",
                                        "/doodle"
                                ],
                                [
                                        "384",
                                        "`/graffiti`",
                                        "فن الجرافيتي الجداري بالبخاخات الملونة على جدران الشوارع الحضرية.",
                                        "/graffiti"
                                ],
                                [
                                        "385",
                                        "`/spraypaint`",
                                        "تقنية الرسم برذاذ الطلاء والبخاخ بطبقات استنسل فنية مبتكرة.",
                                        "/spraypaint"
                                ],
                                [
                                        "386",
                                        "`/popart`",
                                        "فن البوب آرت (Pop Art) المستوحى من آندي وارهول بنقاط الطباعة الحريرية.",
                                        "/popart"
                                ],
                                [
                                        "387",
                                        "`/cubism`",
                                        "المدرسة التكعيبية لبيكاسو بتفكيك الأشكال إلى مجسمات هندسية متعددة الأبعاد.",
                                        "/cubism"
                                ],
                                [
                                        "388",
                                        "`/surreal`",
                                        "فن السريالية لسلفادور دالي بدمج الأحلام بالقوانين الفيزيائية المستحيلة.",
                                        "/surreal"
                                ],
                                [
                                        "389",
                                        "`/abstract`",
                                        "فن تجريدي حديث يعتمد على التدفقات اللونية والخطوط التعبيرية.",
                                        "/abstract"
                                ],
                                [
                                        "390",
                                        "`/expressionism`",
                                        "المدرسة التعبيرية بضربات فرشاة بارزة وألوان حماسية مشحونة بالعاطفة.",
                                        "/expressionism"
                                ],
                                [
                                        "391",
                                        "`/renaissance`",
                                        "لوحات عصر النهضة الكلاسيكية بالألوان الزيتية والتدرج الضوئي الناعم.",
                                        "/renaissance"
                                ],
                                [
                                        "392",
                                        "`/baroque`",
                                        "الفن الباروكي الفاخر بتباين ضوئي درامي مهيب وتفاصيل ملكية غنية.",
                                        "/baroque"
                                ],
                                [
                                        "393",
                                        "`/gothic`",
                                        "الطابع القوطي المظلم بأقواس الكاتدرائيات والزجاج الملون والأجواء الغامضة.",
                                        "/gothic"
                                ],
                                [
                                        "394",
                                        "`/fantasy`",
                                        "عالم خيالي سحري بمدن معلقة في السحاب ومخلوقات أسطورية مبهرة.",
                                        "/fantasy"
                                ],
                                [
                                        "395",
                                        "`/mythology`",
                                        "الأساطير الإغريقية القديمة بجبل أوليمبوس، تماثيل الرخام والآلهة الأسطورية.",
                                        "/mythology"
                                ],
                                [
                                        "396",
                                        "`/dragon`",
                                        "تنين أسطوري عملاق بحراشف بركانية ونفثات نيران متوهجة.",
                                        "/dragon"
                                ],
                                [
                                        "397",
                                        "`/elf`",
                                        "ألف الغابات النبيل بأذنين مدببتين، رداء حريري وقوس فضي ساحر.",
                                        "/elf"
                                ],
                                [
                                        "398",
                                        "`/wizard`",
                                        "شخصية ساحر أسطوري برداء سحري، عصا مضيئة وهالات خيالية.",
                                        "/wizard"
                                ],
                                [
                                        "399",
                                        "`/samurai`",
                                        "محارب ساموراي بالدرع الياباني التقليدي، سيف كاتانا حاد وبتلات الكرز.",
                                        "/samurai"
                                ],
                                [
                                        "400",
                                        "`/ninja`",
                                        "نينجا متخفٍ في الظلال بزي أسود، أسلحة سرية وأجواء ليلية غامضة.",
                                        "/ninja"
                                ],
                                [
                                        "401",
                                        "`/viking`",
                                        "محارب فايكنغ نرويجي بفأس ثنائي، درع جلدي وفراء وسط جبال ثلجية.",
                                        "/viking"
                                ],
                                [
                                        "402",
                                        "`/medieval`",
                                        "أجواء العصور الوسطى بفرسان في دروع فولاذية وقلاع حجرية مهيبة.",
                                        "/medieval"
                                ],
                                [
                                        "403",
                                        "`/ancientrome`",
                                        "الإمبراطورية الرومانية القديمة بأعمدة الرخام، حلبات المصارعين والتوغا الإمبراطورية.",
                                        "/ancientrome"
                                ],
                                [
                                        "404",
                                        "`/ancientegypt`",
                                        "الحضارة المصرية القديمة بالأهرامات الذهبية، النقوش الهيروغليفية والتماثيل الفرعونية.",
                                        "/ancientegypt"
                                ],
                                [
                                        "405",
                                        "`/space`",
                                        "رحلة في أعماق الكون مع سدم فضائية ملونة ومحطات مدارية متطورة.",
                                        "/space"
                                ],
                                [
                                        "406",
                                        "`/galaxy`",
                                        "مشهد بانورامي لمجرة درب التبانة مع مليارات النجوم المتلألئة والغبار الكوني.",
                                        "/galaxy"
                                ],
                                [
                                        "407",
                                        "`/astronaut`",
                                        "رائد فضاء ببدلة فضائية حديثة مع انعكاس كوكب الأرض على خوذته الزجاجية.",
                                        "/astronaut"
                                ],
                                [
                                        "408",
                                        "`/mars`",
                                        "تضاريس كوكب المريخ الأحمر بكثبانه القرمزية وقباب المستعمرات المستقبلية.",
                                        "/mars"
                                ],
                                [
                                        "409",
                                        "`/moonlight`",
                                        "مشهد ليلي شاعري بضوء القمر الفضي الساطع وانعكاساته على المياه الهادئة.",
                                        "/moonlight"
                                ],
                                [
                                        "410",
                                        "`/ocean`",
                                        "المحيط الشاسع بأمواجه الفيروزية الكريستالية وأشعة الشمس المتخللة للأعماق.",
                                        "/ocean"
                                ],
                                [
                                        "411",
                                        "`/jungle`",
                                        "الغابات الاستوائية المطيرة بأشجارها العملاقة، الضباب والغطاء النباتي الكثيف.",
                                        "/jungle"
                                ],
                                [
                                        "412",
                                        "`/desert`",
                                        "الصحراء الذهبية بكثبانها الرملية المتموجة وسحر السماء الصافية.",
                                        "/desert"
                                ],
                                [
                                        "413",
                                        "`/volcano`",
                                        "بركان نشط بأنهار الحمم البركانية المتوهجة وسحب الرماد والدخان المتصاعد.",
                                        "/volcano"
                                ],
                                [
                                        "414",
                                        "`/snow`",
                                        "مشهد شتوي ساحر بغابات الصنوبر المثلجة وتساقط ندف الثلج النقية.",
                                        "/snow"
                                ],
                                [
                                        "415",
                                        "`/rain`",
                                        "هطول أمطار غزيرة على أرصفة المدينة المبتلة مع انعكاسات أضواء النيون البراقة.",
                                        "/rain"
                                ],
                                [
                                        "416",
                                        "`/storm`",
                                        "عاصفة رعدية مهيبة بصواعق برق متوهجة تشق السماء المظلمة.",
                                        "/storm"
                                ],
                                [
                                        "417",
                                        "`/sunset`",
                                        "غروب شمس مهيب بتدرجات برتقالية نارية، أرجوانية وذهبية تعانق الأفق.",
                                        "/sunset"
                                ],
                                [
                                        "418",
                                        "`/sunrise`",
                                        "شروق شمس صباحي هادئ بأشعة ذهبية تخترق الضباب وقطرات الندى.",
                                        "/sunrise"
                                ],
                                [
                                        "419",
                                        "`/nightcity`",
                                        "أفق مدينة كبرى في الليل مع آلاف النوافذ المضيئة ومسارات أضواء السيارات.",
                                        "/nightcity"
                                ],
                                [
                                        "420",
                                        "`/architecture`",
                                        "تحفة معمارية بارامترية حديثة بخطوط انسيابية متموجة من الزجاج والفولاذ.",
                                        "/architecture"
                                ],
                                [
                                        "421",
                                        "`/interior`",
                                        "تصميم داخلي فائق العصرية بأثاث إيطالي فاخر وإضاءة مخفية أنيقة.",
                                        "/interior"
                                ],
                                [
                                        "422",
                                        "`/scifiroom`",
                                        "غرفة قيادة سفينة فضائية مستقبلية بشاشات هولوغرام تفاعلية ثلاثية الأبعاد.",
                                        "/scifiroom"
                                ],
                                [
                                        "423",
                                        "`/remaster`",
                                        "إعادة معالجة وترقية الجودة البصرية بحدة كريستالية ونطاق ديناميكي واسع.",
                                        "/remaster"
                                ],
                                [
                                        "424",
                                        "`/epicportrait`",
                                        "بورتريه سينمائي ملحمي بإضاءة درامية حادة ونظرة كاريزماتية قوية.",
                                        "/epicportrait"
                                ],
                                [
                                        "425",
                                        "`/movieposter`",
                                        "ملصق فيلم سينمائي ضخم بتنسيق متعدد الطبقات للشخصيات وتصميم مؤثر.",
                                        "/movieposter"
                                ],
                                [
                                        "426",
                                        "`/cyberpunk`",
                                        "طابع سايبربانك 2077 بشوارع ممطرة، ناطحات سحاب نيون وأجهزة سيبرنتية.",
                                        "/cyberpunk"
                                ],
                                [
                                        "427",
                                        "`/dslr`",
                                        "تصوير فوتوغرافي احترافي بكاميرا DSLR مع بوكيه دائري ناعم في الخلفية.",
                                        "/dslr"
                                ],
                                [
                                        "428",
                                        "`/studio`",
                                        "إضاءة استوديو ثلاثية قياسية (Key, Fill, Rim Light) بخلفية متصلة.",
                                        "/studio"
                                ],
                                [
                                        "429",
                                        "`/ultrahd`",
                                        "دقة فائقة 8K فائقة الوضوح تبرز مسام البشرة، خيوط النسيج واللمعان الواقعي.",
                                        "/ultrahd"
                                ],
                                [
                                        "430",
                                        "`/masterpiece`",
                                        "تحفة فنية حائزة على جوائز عالمية بتناغم بصري استثنائي بين الضوء واللون.",
                                        "/masterpiece"
                                ],
                                [
                                        "431",
                                        "`/neoncity`",
                                        "مدينة نيون ليلية مستوحاة من طوكيو بلافتات متوهجة وضباب أرجواني.",
                                        "/neoncity"
                                ],
                                [
                                        "432",
                                        "`/retrofilm`",
                                        "طابع أفلام كوداك الثمانينات مع حبيبات دافئة وألوان نوستالجية غنية.",
                                        "/retrofilm"
                                ],
                                [
                                        "433",
                                        "`/luxurylook`",
                                        "إطلالة أرستقراطية فاخرة مرصعة بالمجوهرات والأقمشة الحريرية الفاخرة.",
                                        "/luxurylook"
                                ],
                                [
                                        "434",
                                        "`/rainyday`",
                                        "أجواء يوم ماطر دافئة مع قطرات المطر المنسابة على زجاج المقاهي.",
                                        "/rainyday"
                                ],
                                [
                                        "435",
                                        "`/foggymood`",
                                        "ضباب صباحي غامض مع أشعة ضوئية حجمية تخترق كثافة الأشجار.",
                                        "/foggymood"
                                ],
                                [
                                        "436",
                                        "`/nightshot`",
                                        "تصوير ليلي احترافي بتعريض متقن يبرز تفاصيل الظلال والأجواء الليلية.",
                                        "/nightshot"
                                ],
                                [
                                        "437",
                                        "`/sunsetvibes`",
                                        "أجواء غروب مريحة بإضاءة عنبرية دافئة وظلال مسائية انسيابية.",
                                        "/sunsetvibes"
                                ],
                                [
                                        "438",
                                        "`/streetstyle`",
                                        "أزياء شوارع عصرية (Streetwear) مع أحذية رياضية عصرية وجدران جرافيتي.",
                                        "/streetstyle"
                                ],
                                [
                                        "439",
                                        "`/urbanlook`",
                                        "إطلالة حضرية أنيقة بمعاطف كلاسيكية وإكسسوارات عصرية راقية.",
                                        "/urbanlook"
                                ],
                                [
                                        "440",
                                        "`/superhero`",
                                        "بطل خارق أسطوري بدرع تقني متطور وطاقة بلازما مشعة من يديه.",
                                        "/superhero"
                                ],
                                [
                                        "441",
                                        "`/villain`",
                                        "شخصية شرير كاريزماتية في ظلال غامضة ونظرات ثاقبة ومرعبة.",
                                        "/villain"
                                ],
                                [
                                        "442",
                                        "`/warrior`",
                                        "محارب قديم متمرس في المعارك بسيف فولاذي وندوب تحكي بطولاته.",
                                        "/warrior"
                                ],
                                [
                                        "443",
                                        "`/queen`",
                                        "ملكة متوجة بالماس واللؤلؤ، رداء مخملي ملكي وهيبة استثنائية.",
                                        "/queen"
                                ],
                                [
                                        "444",
                                        "`/royalportrait`",
                                        "بورتريه ملكي كلاسيكي داخل بهو قصر فخم بإطارات ذهبية تاريخية.",
                                        "/royalportrait"
                                ],
                                [
                                        "445",
                                        "`/spaceexplorer`",
                                        "مستكشف كواكب في بيئة فضائية غريبة مجهز بأجهزة استشعار متطورة.",
                                        "/spaceexplorer"
                                ],
                                [
                                        "446",
                                        "`/futurecity`",
                                        "مدينة مستقبلية عملاقة بناطحات سحاب شاهقة وجسور معلقة وسيارات طائرة.",
                                        "/futurecity"
                                ],
                                [
                                        "447",
                                        "`/scifi`",
                                        "عالم خيال علمي متطور بحضارات رقمية وبوابات زمنية مضيئة.",
                                        "/scifi"
                                ],
                                [
                                        "448",
                                        "`/fairytale`",
                                        "عالم أساطير ساحر بفطريات مضيئة ليلاً ومخلوقات خيالية لطيفة.",
                                        "/fairytale"
                                ],
                                [
                                        "449",
                                        "`/angelic`",
                                        "ملاك أسطوري بأجنحة ريشية بيضاء عملاقة وهالات نورانية سماوية.",
                                        "/angelic"
                                ],
                                [
                                        "450",
                                        "`/thuglife`",
                                        "طابع هيب هوب كلاسيكي بسلاسل ذهبية، نظارات شمسية وسيارات فارهة.",
                                        "/thuglife"
                                ],
                                [
                                        "451",
                                        "`/bodybuilder`",
                                        "رياضي كمال أجسام بعضلات منحوتة بدقة وإضاءة مسرحية درامية.",
                                        "/bodybuilder"
                                ],
                                [
                                        "452",
                                        "`/businessman`",
                                        "رجل أعمال ومدير تنفيذي ببدلة كلاسيكية فاخرة داخل مكتب بنتهاوس زجاجي.",
                                        "/businessman"
                                ],
                                [
                                        "453",
                                        "`/celebritylook`",
                                        "إطلالة مشاهير هوليوود بنظارات مصممة، ومضات الباباراتزي وأزياء راقية.",
                                        "/celebritylook"
                                ],
                                [
                                        "454",
                                        "`/redcarpet`",
                                        "سجادة حمراء لمهرجان سينمائي مع فلاشات الكاميرات وفساتين السهرة الفاخرة.",
                                        "/redcarpet"
                                ],
                                [
                                        "455",
                                        "`/natureportrait`",
                                        "بورتريه هادئ في أحضان الطبيعة وحقول القمح الذهبية في ضوء الشمس.",
                                        "/natureportrait"
                                ],
                                [
                                        "456",
                                        "`/photorealistic`",
                                        "صورة واقعية فائقة الدقة تحاكي التصوير الفوتوغرافي الخام وتفاصيل البشرة.",
                                        "/photorealistic"
                                ],
                                [
                                        "457",
                                        "`/bgpersonremove`",
                                        "إزالة المارة والأشخاص من الخلفية وإعادة بناء المشهد بنقاء تام.",
                                        "/bgpersonremove"
                                ],
                                [
                                        "458",
                                        "`/lowangleview`",
                                        "منظور منخفض من الأسفل يبرز هيبة وضخامة وشموخ العنصر.",
                                        "/lowangleview"
                                ],
                                [
                                        "459",
                                        "`/360views`",
                                        "ورقة تصوير 360 درجة تغطي المنظور الأمامي والخلفي والجانبي بالكامل.",
                                        "/360views"
                                ],
                                [
                                        "460",
                                        "`/outfitchange`",
                                        "تغيير ذكي للأزياء والملابس مع الحفاظ الكامل على ملامح وهوية الوجه.",
                                        "/outfitchange"
                                ]
                        ]
                }
        },
        {
                "id": "dev-and-coding-prompts",
                "title": "٨. أوامر هندسة البرمجيات، معمارية الأكواد والـ Vibe Coding (16 أمراً)",
                "lead": "أوامر هندسة البرمجيات التي تسرع عمليات التطوير، تصحيح الأخطاء، وكتابة الاختبارات وإعادة الهيكلة حتى 10 أضعاف.",
                "image": {
                        "src": "/images/blog/chatgpt-developer-productivity.webp",
                        "alt": "لوحة تحكم المطورين، تحليل البيانات، أتمتة البرمجة وتحسين استراتيجيات الأعمال",
                        "caption": "بيئة تفاعلية لتطوير البرمجيات، الفحص الذكي للثغرات والاختبارات التلقائية باستخدام أوامر هندسة البرمجة."
                },
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "مثال البرومبت التنفيذي"
                        ],
                        "rows": [
                                [
                                        "20",
                                        "`/code`",
                                        "تفعيل الوضع المتخصص في هندسة البرمجيات ومعمارية الأكواد النظيفة.",
                                        "/code write a Next.js 15 Server Action for Stripe webhook handling"
                                ],
                                [
                                        "21",
                                        "`/debug`",
                                        "تصحيح الأخطاء العميق، تتبع سجلات الأخطاء وإصلاح الثغرات المنطقية.",
                                        "/debug analyze why this async useEffect causes infinite re-renders"
                                ],
                                [
                                        "22",
                                        "`/refactor`",
                                        "إعادة هيكلة وتطوير الكود وفق مبادئ Clean Code ومبادئ SOLID.",
                                        "/refactor convert this monolithic Express handler to modular MVC services"
                                ],
                                [
                                        "23",
                                        "`/test`",
                                        "توليد اختبارات الوحدة (Unit Tests) وتغطية السيناريوهات الحدية.",
                                        "/test write Jest unit tests for this authentication utility"
                                ],
                                [
                                        "24",
                                        "`/explaincode`",
                                        "شرح تفصيلي خطوة بخطوة لكيفية عمل الخوارزميات المعقدة.",
                                        "/explaincode explain how this recursive binary search works"
                                ],
                                [
                                        "25",
                                        "`/optimize`",
                                        "تحسين أداء الكود، تقليل استهلاك الذاكرة وتسريع وقت التنفيذ.",
                                        "/optimize optimize this heavy image processing function"
                                ],
                                [
                                        "26",
                                        "`/documentcode`",
                                        "توليد توثيق قياسي وشامل للدوال بنمط JSDoc و Docstrings.",
                                        "/documentcode generate comprehensive JSDoc annotations"
                                ],
                                [
                                        "27",
                                        "`/sql`",
                                        "صياغة وتحسين استعلامات قواعد البيانات المعقدة والفهارس.",
                                        "/sql write a PostgreSQL query for monthly recurring revenue"
                                ],
                                [
                                        "28",
                                        "`/regex`",
                                        "توليد تعبيرات نمطية (Regex) مع شرح تفصيلي لمكوناتها.",
                                        "/regex create a pattern to validate international phone numbers"
                                ],
                                [
                                        "29",
                                        "`/api`",
                                        "تصميم مواصفات واجهات RESTful ومخططات GraphQL المتقدمة.",
                                        "/api design a CRUD API spec for a multi-tenant platform"
                                ],
                                [
                                        "30",
                                        "`/git`",
                                        "توليد أوامر Git، حل تعارضات الدمج وصياغة رسائل التثبيت.",
                                        "/git show how to rebase feature branch onto main cleanly"
                                ],
                                [
                                        "31",
                                        "`/docker`",
                                        "إنشاء ملفات Dockerfile متعددة المراحل وإعدادات docker-compose.",
                                        "/docker create a production Dockerfile for Next.js app"
                                ],
                                [
                                        "32",
                                        "`/audit`",
                                        "إجراء تدقيق أمني شامل للثغرات البرمجية ومعايير إمكانية الوصول.",
                                        "/audit inspect this authentication flow for security flaws"
                                ],
                                [
                                        "33",
                                        "`/schema`",
                                        "توليد مخططات التحقق من صحة البيانات باستخدام Zod و TypeScript.",
                                        "/schema build a Zod validation schema for checkout form"
                                ],
                                [
                                        "34",
                                        "`/testsuite`",
                                        "بناء حزمة اختبارات شاملة من البداية للنهاية باستخدام Playwright و Cypress.",
                                        "/testsuite write E2E tests for user signup and onboarding"
                                ],
                                [
                                        "35",
                                        "`/docstring`",
                                        "توليد التوثيق التقني وأدلة الاستخدام البرمجية تلقائياً.",
                                        "/docstring document all exported classes and methods"
                                ]
                        ]
                },
                "codeSnippets": [
                        {
                                "title": "نموذج برومبت هندسة الواجهات الأمامية باستخدام /audit",
                                "language": "markdown",
                                "code": "/audit\nالدور: أنت مهندس واجهات أمامية أول (Staff Frontend Engineer).\nقم بمراجعة الكود التالي من حيث:\n1. الأداء وتجنب إعادة التصيير في React 19\n2. إمكانية الوصول وفق معايير (WCAG 2.2 AA)\n3. أمان الأنواع الصارم في TypeScript\nوقدم النسخة المحسنة مع توثيق تعليمي."
                        }
                ]
        },
        {
                "id": "business-and-strategy",
                "title": "٩. أوامر استراتيجية الأعمال، التسويق ورواد الأعمال (15 أمراً)",
                "lead": "مصفوفات التحليل الاستراتيجي، نماذج التسعير، أقماع المبيعات وتحديد شخصية العميل المستهدف لرواد الأعمال.",
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "مثال البرومبت التنفيذي"
                        ],
                        "rows": [
                                [
                                        "36",
                                        "`/swot`",
                                        "إجراء تحليل سوات (SWOT) الشامل لنقاط القوة والضعف والفرص والتهديدات.",
                                        "/swot analyze our B2B SaaS entering enterprise market"
                                ],
                                [
                                        "37",
                                        "`/pestle`",
                                        "إجراء تحليل بيستل (PESTLE) للعوامل السياسية والاقتصادية والتقنية.",
                                        "/pestle perform a PESTLE analysis for EV charging network"
                                ],
                                [
                                        "38",
                                        "`/competitor`",
                                        "تحليل معمق للمنافسين ومقارنة الميزات لاكتشاف الميزة التنافسية.",
                                        "/competitor benchmark our tool against top competitors"
                                ],
                                [
                                        "39",
                                        "`/pricing`",
                                        "تصميم استراتيجيات التسعير، باقات الاشتراكات وخطط تحقيق الأرباح.",
                                        "/pricing design a 3-tier SaaS pricing model"
                                ],
                                [
                                        "40",
                                        "`/funnel`",
                                        "هندسة قمع التسويق ومراحل التحويل من جذب العملاء حتى الشراء.",
                                        "/funnel map a high-converting B2B lead generation funnel"
                                ],
                                [
                                        "41",
                                        "`/icp`",
                                        "رسم شخصية العميل المثالي (ICP) متضمنة نقاط الألم والميزانية.",
                                        "/icp create an ICP profile for startup CTOs"
                                ],
                                [
                                        "42",
                                        "`/kpi`",
                                        "تحديد مؤشرات الأداء الرئيسية (KPIs) والأهداف والنتائج الرئيسية (OKRs).",
                                        "/kpi define quarterly OKRs and north-star metrics"
                                ],
                                [
                                        "43",
                                        "`/pitch`",
                                        "صياغة عروض الاستثمار (Pitch Deck) ونصوص التعريف السريعة للشركات الناشئة.",
                                        "/pitch write a 60-second pitch for our AI startup"
                                ],
                                [
                                        "44",
                                        "`/tam`",
                                        "حساب وتقدير أحجام السوق الكلية والمستهدفة (TAM / SAM / SOM).",
                                        "/tam estimate TAM, SAM, and SOM for remote healthcare"
                                ],
                                [
                                        "45",
                                        "`/gtm`",
                                        "تصميم استراتيجية الدخول إلى السوق (GTM) وقنوات التوزيع المباشرة.",
                                        "/gtm build a 90-day GTM strategy for developer tool"
                                ],
                                [
                                        "46",
                                        "`/objections`",
                                        "حصر اعتراضات ومخاوف العملاء وصياغة ردود إقناعية حاسمة.",
                                        "/objections list 10 objections to luxury web design and responses"
                                ],
                                [
                                        "47",
                                        "`/roadmap`",
                                        "تصميم خارطة طريق المنتج على مراحل زمنية 30-60-90 يوماً.",
                                        "/roadmap create a 90-day feature roadmap for mobile app"
                                ],
                                [
                                        "48",
                                        "`/statistics`",
                                        "تحليل البيانات الإحصائية، المتوسطات وأنماط النمو التجاري.",
                                        "/statistics analyze monthly churn rate patterns"
                                ],
                                [
                                        "49",
                                        "`/brainstorm`",
                                        "عصف ذهني إبداعي لتوليد 20 فكرة مبتكرة ومتميزة للمشاريع.",
                                        "/brainstorm generate 20 viral marketing angles for AI tool"
                                ],
                                [
                                        "50",
                                        "`/compare`",
                                        "مقارنة شاملة بين منتجين أو أداتين في جدول تحليلي دقيق.",
                                        "/compare compare Stripe vs Paddle for global SaaS payments"
                                ]
                        ]
                }
        },
        {
                "id": "writing-and-copywriting",
                "title": "١٠. أوامر صناعة المحتوى، كتابة الإعلانات والسيناريو (18 أمراً)",
                "lead": "الصيغ الذهبية لنماذج الإقناع التسويقية (AIDA, PAS)، خطافات الفيديو البصرية، وتكييف نبرة النصوص الإعلانية.",
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "مثال البرومبت التنفيذي"
                        ],
                        "rows": [
                                [
                                        "51",
                                        "`/write`",
                                        "توليد مقالات شاملة وهياكل محتوى احترافية وفق متطلبات البرومبت.",
                                        "/write write an authoritative guide on modern frontend design"
                                ],
                                [
                                        "52",
                                        "`/rewrite`",
                                        "إعادة صياغة النصوص لتحسين النبرة، البلاغة وتوصيل الرسالة.",
                                        "/rewrite rewrite this formal email to sound approachable"
                                ],
                                [
                                        "53",
                                        "`/proofread`",
                                        "تصحيح الأخطاء النحوية والإملائية وضبط علامات الترقيم.",
                                        "/proofread review this press release for grammatical precision"
                                ],
                                [
                                        "54",
                                        "`/tone`",
                                        "ضبط نبرة النص (رسمية، ودية، فكاهية، فاخرة، علمية أو حماسية).",
                                        "/tone make this announcement sound urgent yet professional"
                                ],
                                [
                                        "55",
                                        "`/headline`",
                                        "توليد 10 عناوين جذابة بنسبة نقر عالية مستندة لعلم نفس الجماهير.",
                                        "/headline write 10 compelling titles for blog post on AI"
                                ],
                                [
                                        "56",
                                        "`/hook`",
                                        "صياغة خطافات بصرية ونصية مبهرة لبدايات مقاطع الفيديو والريلز.",
                                        "/hook generate 5 hooks for an Instagram Reel about AI prompts"
                                ],
                                [
                                        "57",
                                        "`/aida`",
                                        "هيكلة المحتوى الإعلاني وفق نموذج الإقناع الشهير AIDA.",
                                        "/aida write a promotional email for luxury web design"
                                ],
                                [
                                        "58",
                                        "`/pas`",
                                        "كتابة نصوص تسويقية عالية التحويل بصيغة المشكلة، الإثارة والحل (PAS).",
                                        "/pas write a landing page hero section for slow agency turnaround"
                                ],
                                [
                                        "59",
                                        "`/tldr`",
                                        "تلخيص سريع في جملة واحدة مكثفة تختزل المفاهيم المعقدة.",
                                        "/tldr give me a TL;DR of this 10-page economic report"
                                ],
                                [
                                        "60",
                                        "`/eli5`",
                                        "تبسيط وشرح المفاهيم العلمية المعقدة بلغة سهلة ومباشرة (ELI5).",
                                        "/eli5 explain how quantum encryption works simply"
                                ],
                                [
                                        "61",
                                        "`/script`",
                                        "كتابة سيناريوهات فيديو ثنائية الأعمدة لليوتيوب والريلز مع التوجيهات البصرية.",
                                        "/script write a 60-second video script about Claude SEO"
                                ],
                                [
                                        "62",
                                        "`/expand`",
                                        "التوسع في شرح فكرة موجزة وتحويلها إلى أطروحة متكاملة.",
                                        "/expand expand this product feature into a 3-paragraph value story"
                                ],
                                [
                                        "63",
                                        "`/shorten`",
                                        "اختصار النصوص وحذف الكلمات الزائدة مع الحفاظ على المعنى الجوهري.",
                                        "/shorten cut this 300-word paragraph down to 100 words"
                                ],
                                [
                                        "64",
                                        "`/paraphrase`",
                                        "إعادة صياغة العبارات بمفردات لغوية متنوعة وبنية تعبيرية جديدة.",
                                        "/paraphrase paraphrase this technical definition uniquely"
                                ],
                                [
                                        "65",
                                        "`/translate`",
                                        "ترجمة احترافية وسياقية مع الحفاظ الكامل على المصطلحات التقنية.",
                                        "/translate translate this technical changelog into natural Persian"
                                ],
                                [
                                        "66",
                                        "`/email`",
                                        "كتابة رسائل بريد إلكتروني مهنية للمتابعة، المبيعات والنشرات الإخبارية.",
                                        "/email write a follow-up email after a client discovery call"
                                ],
                                [
                                        "67",
                                        "`/caption`",
                                        "كتابة كابشن احترافي لمنشورات لينكد إن وإنستغرام مع الوسوم المناسبة.",
                                        "/caption write a LinkedIn post caption about vibe coding launch"
                                ],
                                [
                                        "68",
                                        "`/story`",
                                        "بناء سرد قصصي جذاب (Storytelling) يعزز مكانة وهوية العلامة التجارية.",
                                        "/story write a founder journey story about overcoming burnout"
                                ]
                        ]
                }
        },
        {
                "id": "research-and-productivity",
                "title": "١١. أوامر البحث المعمق، التعلم السريع والإنتاجية الشخصية (18 أمراً)",
                "lead": "أوامر البحث المباشر، تدقيق الحقائق، إدارة الذاكرة طويلة المدى في ChatGPT وتخطيط الأهداف والإنتاجية اليومية.",
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "مثال البرومبت التنفيذي"
                        ],
                        "rows": [
                                [
                                        "69",
                                        "`/search`",
                                        "البحث المباشر عبر الويب لاسترجاع أحدث الإحصائيات والأخبار الموثوقة.",
                                        "/search what are the latest Google Search core updates in 2026?"
                                ],
                                [
                                        "70",
                                        "`/factcheck`",
                                        "التحقق من صحة الأرقام والادعاءات بمقارنتها مع المصادر العالمية المعتمدة.",
                                        "/factcheck verify whether OpenAI recently launched native slash commands"
                                ],
                                [
                                        "71",
                                        "`/cite`",
                                        "توليد الاستشهادات والمراجع الأكاديمية وفق معايير APA و IEEE.",
                                        "/cite generate APA citations for top 3 foundation model papers"
                                ],
                                [
                                        "72",
                                        "`/proscons`",
                                        "بناء مصفوفة شاملة للإيجابيات والسلبيات ومخاطر اتخاذ القرار.",
                                        "/proscons compare Next.js App Router vs Remix for e-commerce"
                                ],
                                [
                                        "73",
                                        "`/analogy`",
                                        "شرح المفاهيم المجردة بأمثلة حسية ونماذج عقلية واضحة.",
                                        "/analogy create an analogy explaining how Transformer attention works"
                                ],
                                [
                                        "74",
                                        "`/plan`",
                                        "إعداد جدول زمني تدريجي ومعالم تنفيذية محددة للمشاريع.",
                                        "/plan create a 4-week study plan to master TypeScript"
                                ],
                                [
                                        "75",
                                        "`/actionitems`",
                                        "استخراج قوائم المهام التنفيذية والمسؤوليات من محاضر الاجتماعات.",
                                        "/actionitems extract all deliverables and deadlines from transcript"
                                ],
                                [
                                        "76",
                                        "`/prioritize`",
                                        "ترتيب أولويات المهام باستخدام مصفوفة أيزنهاور أو نموذج RICE.",
                                        "/prioritize sort these 12 feature requests using RICE scoring"
                                ],
                                [
                                        "77",
                                        "`/memorize`",
                                        "حفظ تفضيلات العمل والتعليمات في الذاكرة طويلة المدى لـ ChatGPT.",
                                        "/memorize always format code solutions using TypeScript and Tailwind"
                                ],
                                [
                                        "78",
                                        "`/forget`",
                                        "حذف معلومة محددة من قاعدة بيانات الذاكرة في الحساب.",
                                        "/forget remove previous project requirements from memory"
                                ],
                                [
                                        "79",
                                        "`/todo`",
                                        "توليد قائمة مهام يومية منظمة مع تحديد الأولويات والأوقات.",
                                        "/todo organize my morning sprint tasks with estimated minutes"
                                ],
                                [
                                        "80",
                                        "`/checklist`",
                                        "إعداد قائمة تحقق شاملة قبل إطلاق المنتجات أو نشرها على الخوادم.",
                                        "/checklist create a pre-launch production checklist for Next.js app"
                                ],
                                [
                                        "81",
                                        "`/studyplan`",
                                        "تصميم خطة تعليمية تدريجية لاكتساب وإتقان مهارة جديدة.",
                                        "/studyplan build a 30-day curriculum to learn UI/UX design"
                                ],
                                [
                                        "82",
                                        "`/tripplan`",
                                        "تخطيط جدول رحلات سياحية يومي مع أفضل المسارات والتوصيات المحلية.",
                                        "/tripplan create a 5-day cultural itinerary for Tokyo"
                                ],
                                [
                                        "83",
                                        "`/workout`",
                                        "تصميم برامج تمارين رياضية مخصصة تناسب مستوى اللياقة البدنية والأهداف.",
                                        "/workout build a 4-day strength training split for intermediate level"
                                ],
                                [
                                        "84",
                                        "`/mealplan`",
                                        "تخطيط وجبات غذائية صحية مع حساب السعرات الحرارية والماكروز.",
                                        "/mealplan design a high-protein vegetarian meal plan for 7 days"
                                ],
                                [
                                        "85",
                                        "`/flashcards`",
                                        "توليد بطاقات تعليمية (Flashcards) بنظام السؤال والجواب لترسيخ المعلومات.",
                                        "/flashcards create 20 flashcards on JavaScript closures and event loop"
                                ],
                                [
                                        "86",
                                        "`/quiz`",
                                        "تصميم اختبارات اختيار من متعدد لتقييم الاستيعاب مع إجابات نموذجية.",
                                        "/quiz create a 10-question quiz testing React hooks mastery"
                                ]
                        ]
                }
        },
        {
                "id": "roleplay-personas-experimental",
                "title": "١٢. تقمص الأدوار، محاكاة الخبراء والرموز التجريبية (8 أوامر)",
                "lead": "محاكاة مقابلات التوظيف التنافسية، غرف التفكير النقدي مع مراجعين حازمين والتحليل الموضوعي الخالي من التحيز.",
                "table": {
                        "headers": [
                                "الرقم",
                                "الأمر (Command)",
                                "الوصف والشرح",
                                "مثال البرومبت التنفيذي"
                        ],
                        "rows": [
                                [
                                        "87",
                                        "`/expert`",
                                        "تقمص دور عالم رائد أو خبير دولي بارز لتقديم إجابات متعمقة.",
                                        "/expert act as a Principal Cloud Architect specializing in AWS"
                                ],
                                [
                                        "88",
                                        "`/critic`",
                                        "لعب دور الناقد الصارم لتشريح نقاط الضعف وتقديم مراجعة نقدية حازمة.",
                                        "/critic ruthlessly critique this startup business model and pitch"
                                ],
                                [
                                        "89",
                                        "`/tutor`",
                                        "التحول إلى معلم صبور يستخدم الأسلوب السقراطي والأسئلة التوجيهية.",
                                        "/tutor teach me linear algebra concepts step by step"
                                ],
                                [
                                        "90",
                                        "`/interviewer`",
                                        "محاكاة مقابلات التوظيف التقنية المتقدمة بأسئلة وتحديات واقعية.",
                                        "/interviewer conduct a Senior React Developer system design interview"
                                ],
                                [
                                        "91",
                                        "`/sarcastic`",
                                        "الرد بنبرة فكاهية وساخرة ممتعة للسيناريوهات الإبداعية.",
                                        "/sarcastic roast my over-engineered portfolio website"
                                ],
                                [
                                        "92",
                                        "`/dan`",
                                        "استكشاف السيناريوهات الافتراضية والتجريبية بحرية إبداعية تامة.",
                                        "/dan explore an alternate history where the internet began in 1920"
                                ],
                                [
                                        "93",
                                        "`/debugmode`",
                                        "إظهار سلسلة التفكير المنطقي الداخلي (Chain of Thought) وخطوات الاستنتاج.",
                                        "/debugmode show internal reasoning for solving this combinatorics problem"
                                ],
                                [
                                        "94",
                                        "`/continue`",
                                        "مواصلة توليد المحتوى بسلاسة من نقطة التوقف دون تكرار.",
                                        "/continue continue generating the remaining code modules"
                                ]
                        ]
                }
        },
        {
                "id": "keyboard-shortcuts-guide",
                "title": "١٣. الدليل الشامل لاختصارات لوحة المفاتيح في الويب وماك وويندوز",
                "lead": "يضاعف استخدام اختصارات لوحة المفاتيح سرعة التنقل والتنفيذ داخل بيئة ChatGPT على كافة المنصات.",
                "table": {
                        "headers": [
                                "وظيفة الاختصار",
                                "اختصار macOS",
                                "اختصار Windows / Linux"
                        ],
                        "rows": [
                                [
                                        "بدء محادثة جديدة",
                                        "Cmd + Shift + O",
                                        "Ctrl + Shift + O"
                                ],
                                [
                                        "التركيز على مربع الإدخال",
                                        "Shift + Esc",
                                        "Shift + Esc"
                                ],
                                [
                                        "نسخ آخر رد للذكاء الاصطناعي",
                                        "Cmd + Shift + C",
                                        "Ctrl + Shift + C"
                                ],
                                [
                                        "فتح/إغلاق الشريط الجانبي",
                                        "Cmd + Shift + S",
                                        "Ctrl + Shift + S"
                                ],
                                [
                                        "تبديل نموذج الذكاء الاصطناعي",
                                        "Cmd + Shift + ;",
                                        "Ctrl + Shift + ;"
                                ],
                                [
                                        "حذف المحادثة الحالية",
                                        "Cmd + Shift + Backspace",
                                        "Ctrl + Shift + Backspace"
                                ],
                                [
                                        "عرض نافذة اختصارات المفاتيح",
                                        "Cmd + /",
                                        "Ctrl + /"
                                ]
                        ]
                }
        },
        {
                "id": "custom-prompt-framework",
                "title": "١٤. منهجية بناء إطارات الأوامر المخصصة وسلاسل البرومبت (Prompt Chaining)",
                "lead": "كيفية تعريف وأتمتة مصفوفة الأوامر المخصصة في إعدادات Custom Instructions:",
                "paragraphs": [
                        "الطريقة المثلى لتوفير الوقت هي إنشاء مصفوفة أوامر بروتوكولية (Command Matrix) داخل تعليمات حسابك المخصصة.",
                        "ما عليك سوى لصق الكود التالي في خانة 'How would you like ChatGPT to respond' ليتعرف النموذج على أوامرك فوراً:"
                ],
                "codeSnippets": [
                        {
                                "title": "قالب مصفوفة الأوامر في إعدادات Custom Instructions",
                                "language": "markdown",
                                "code": "[COMMAND MATRIX PROTOCOL]\nكلما بدأت الرسالة برمز السلاش (/)، نفذ البروتوكول المخصص فوراً دون مقدمات زائفة:\n\n- /landing: هيكل صفحة هبوط عالية التحويل يتضمن الخطاف، الدليل الاجتماعي، الميزات ودعوة اتخاذ الإجراء (CTA).\n- /seo: عنوان سيو (<60 حرف)، وصف الميتا (<155 حرف)، الرابط الدائم والكلمات المفتاحية المساعدة.\n- /review: مراجعة دقيقة للنصوص، ضبط النبرة، إزالة الحشو وإضفاء الطابع الإنساني الطبيعي.\n- /audit: تدقيق أمني وأداء متقدم لأكواد الواجهات الأمامية مع إصلاح الثغرات."
                        }
                ]
        },
        {
                "id": "summary-and-takeaways",
                "title": "١٥. الخلاصة النهائية وخريطة الطريق لإتقان البرومبت المتقدم",
                "lead": "الذكاء الاصطناعي محيط شاسع من الإمكانيات؛ لكن الأوامر الهندسية الدقيقة هي التي تحسم جودة النتائج الاستثنائية.",
                "paragraphs": [
                        "بحفظك لهذا المرجع الشامل واستخدامك المنتظم لـ 460 أمراً مصنفاً، ستختصر دورات تطوير البرمجيات والتصميم والتسويق إلى جزء ضئيل من الوقت."
                ]
        }
],
        takeaways: [
        "تقلل أوامر السلاش استهلاك التوكنات بنسبة تصل إلى 70% وتجعل استجابات الذكاء الاصطناعي دقيقة وحاسمة تماماً.",
        "دمج شورت كودات الإضاءة والتصوير التجاري (/showcase, /luxuryshowcase, /rimlight) يحول الصور المولدة إلى لقطات احترافية بمستوى المجلات العالمية.",
        "يمكن لمهندسي البرمجيات ومطوري الـ Vibe Coding تسليم أكواد جاهزة للإنتاج في دقائق عبر أوامر /audit و /refactor.",
        "تعريف مصفوفة أوامر مخصصة في إعدادات Custom Instructions يؤتمت مهامك اليومية المتكررة إلى الأبد."
]
      }
    }
  },
  {
    slug: "what-is-vibe-coding-guide",
    dateIso: "2026-02-23T00:00:00.000Z",
    coverImage: "/images/blog/vibe-coding-cover.webp",
    featured: true,
    relatedSlugs: ["chatgpt-slash-commands-handbook-2026", "high-converting-landing-page-secrets"],
    locales: {
      fa: {
        title: "وایب‌کدینگ چیست؟ راهنمای کامل برنامه‌نویسی با هوش مصنوعی در سال ۲۰۲۶",
        summary: "چطور بدون نیاز به یادگیری کدنویسی سنتی، ایده‌های تجاری و استارتاپی خودت رو با ابزارهایی مثل Claude و Cursor در چند روز بسازی و لانچ کنی؟",
        category: "وایب‌کدینگ",
        readTime: "۱۰ دقیقه مطالعه",
        publishedDate: "۴ اسفند ۱۴۰۴",
        tags: ["وایب‌کدینگ", "Cursor", "Claude", "Next.js", "توسعه محصول", "هوش مصنوعی"],
        author: authors.fa,
        toc: [
          { id: "what-is-vibe-coding", title: "۱. تعریف و مفهوم وایب‌کدینگ" },
          { id: "tools-of-the-trade", title: "۲. جعبه‌ابزار اصلی یک وایب‌کدر حرفه‌ای" },
          { id: "mindset-shift", title: "۳. تغییر ذهنیت: از کدنویس به معمار محصول" },
          { id: "workflow-blueprint", title: "۴. مراحل اجرای یک پروژه کامل وایب‌کدینگ" },
          { id: "common-pitfalls", title: "۵. اشتباهات رایج و نحوه جلوگیری از آن‌ها" },
        ],
        sections: [
          {
            id: "what-is-vibe-coding",
            title: "۱. تعریف و مفهوم وایب‌کدینگ",
            lead: "وایب‌کدینگ یعنی تمرکز روی حس، منطق و تجربه کاربری محصول، در حالی که هوش مصنوعی بار سنگین نوشتن سینتکس کد رو به دوش می‌کشه.",
            paragraphs: [
              "اصطلاح Vibe Coding که اولین بار توسط آندری کارپاتی مطرح شد، توصیف‌کننده عصری جدیده که توش برنامه‌نویسی به کارگردانی هوش مصنوعی تبدیل شده.",
              "تو این روش، لازم نیست سینتکس‌ها یا توابع رو حفظ باشی؛ تمرکز اصلیت روی شفاف‌سازی مشخصات محصول، طراحی تجربه کاربر و هدایت دقیق مدل‌های هوش مصنوعیه.",
            ],
          },
          {
            id: "tools-of-the-trade",
            title: "۲. جعبه‌ابزار اصلی یک وایب‌کدر حرفه‌ای",
            lead: "برای ورود به این فضا نیاز به ابزارهای نسل جدید داری که کل پروژه رو یکپارچه درک می‌کنن:",
            bulletPoints: [
              "‏Cursor / Windsurf — ادیتورهای مدرن با درک کامل از ساختار فایل‌ها و وابستگی‌های پروژه.",
              "‏Claude 3.7 Sonnet — مدل‌های دارای تفکر و استدلال معماری که کدهای تمیز و اصولی تولید می‌کنن.",
              "‏Next.js & Tailwind CSS — فریم‌ورک استاندارد وب برای ساخت صفحات سریع، ریسپانسیو و سئومحور.",
              "‏Vercel & Supabase — زیرساخت ابری برای دیتابیس و دیپلوی فوری محصول در سراسر دنیا.",
            ],
          },
          {
            id: "mindset-shift",
            title: "۳. تغییر ذهنیت: از کدنویس به معمار محصول",
            lead: "ارزش تو در توانایی حل مسئله و دیزاین سیستم خلاصه می‌شه، نه در تعداد خط کدی که دستی تایپ می‌کنی.",
            paragraphs: [
              "تو برنامه‌نویسی سنتی، ۸۰ درصد وقت صرف نوشتن سینتکس و ارورهای کامپایلر می‌شد. در وایب‌کدینگ این نسبت برعکس شده: تو ۸۰ درصد زمانت رو صرف درک نیاز بیزینس و تجربه کاربری می‌کنی.",
            ],
            callout: {
              type: "tip",
              title: "قاعده طلایی",
              text: "اگه نتونی با کلمات ساده برای یه انسان توضیح بدی محصولت چطور کار می‌کنه، هوش مصنوعی هم نمی‌تونه کد درستی برات بنویسه.",
            },
          },
          {
            id: "workflow-blueprint",
            title: "۴. مراحل اجرای یک پروژه کامل وایب‌کدینگ",
            lead: "نقشه راه ۵ مرحله‌ای برای تبدیل ایده ذهنی به محصول واقعی:",
            bulletPoints: [
              "مرحله ۱: نوشتن سند مشخصات محصول (Product Spec) و مشخص کردن جریان کاربر.",
              "مرحله ۲: آماده‌سازی دیزاین سیستم (پالت رنگ، فونت، کامپوننت‌های پایه).",
              "مرحله ۳: ساخت صفحه اصلی و بخش‌های تعاملی با هدایت مداوم هوش مصنوعی.",
              "مرحله ۴: تست مرحله‌به‌مرحله در مرورگر و برطرف کردن ناهماهنگی‌ها در گام‌های کوچک.",
              "مرحله ۵: دیپلوی روی دامنه نهایی و اتصال به ابزارهای تحلیل کاربر.",
            ],
          },
        ],
        takeaways: [
          "وایب‌کدینگ فاصله بین «ایده داشتن» تا «لانچ محصول» رو از چند ماه به چند روز رسونده.",
          "کلید موفقیت، تفکر ساختاریافته و نگارش پرامپت‌های دقیق مهندسیه.",
          "Next.js و Tailwind CSS بهترین بستر برای اجرای پروژه‌های مدرن وایب‌کدینگ هستن.",
        ],
      },
      en: {
        title: "What is Vibe Coding? The Complete 2026 AI Development Guide",
        summary: "How to build and launch production-grade digital products with AI assistants like Cursor and Claude in days without writing manual syntax.",
        category: "Vibe Coding",
        readTime: "10 min read",
        publishedDate: "Feb 23, 2026",
        tags: ["Vibe Coding", "Cursor", "Claude", "Next.js", "AI Development"],
        author: authors.en,
        toc: [
          { id: "what-is-vibe-coding", title: "1. What is Vibe Coding?" },
          { id: "tools-of-the-trade", title: "2. The Essential Vibe Coder Toolkit" },
          { id: "mindset-shift", title: "3. Mindset Shift: From Coder to Product Architect" },
          { id: "workflow-blueprint", title: "4. The 5-Step Vibe Coding Blueprint" },
        ],
        sections: [
          {
            id: "what-is-vibe-coding",
            title: "1. What is Vibe Coding?",
            lead: "Vibe coding means focusing on the vision, user experience, and product logic while letting AI do the heavy syntax lifting.",
            paragraphs: [
              "Coined by Andrej Karpathy, vibe coding describes a new paradigm where developers act as directors rather than line-by-line syntax writers.",
            ],
          },
          {
            id: "tools-of-the-trade",
            title: "2. The Essential Vibe Coder Toolkit",
            lead: "Next-generation tools with full repository context understanding:",
            bulletPoints: [
              "Cursor / Windsurf — AI-native code editors.",
              "Claude 3.7 Sonnet — Advanced architectural reasoning models.",
              "Next.js & Tailwind CSS — Industry-standard web development stack.",
            ],
          },
        ],
        takeaways: [
          "Vibe coding cuts the time from idea to launch by 90%.",
          "Structured product specs and clear communication are the new superpowers.",
        ],
      },
      ar: {
        title: "ما هو الفايب كودينغ؟ الدليل الشامل للبرمجة بالذكاء الاصطناعي في 2026",
        summary: "كيف تبني وتطلق منتجات رقمية متكاملة باستخدام أدوات الذكاء الاصطناعي مثل Cursor وClaude في أيام معدودة دون كتابة كود يدوي معقد.",
        category: "فايب كودينغ",
        readTime: "١٠ دقائق للقراءة",
        publishedDate: "٢٣ فبراير ٢٠٢٦",
        tags: ["فايب كودينغ", "Cursor", "Claude", "Next.js", "تطوير المنتجات"],
        author: authors.ar,
        toc: [
          { id: "what-is-vibe-coding", title: "١. مفهوم الفايب كودينغ" },
          { id: "tools-of-the-trade", title: "٢. صندوق أدوات الفايب كودينغ" },
          { id: "mindset-shift", title: "٣. التحول من مبرمج إلى مهندس منتج" },
        ],
        sections: [
          {
            id: "what-is-vibe-coding",
            title: "١. مفهوم الفايب كودينغ",
            lead: "التركيز على تجربة المستخدم ومنطق العمل بينما يتولى الذكاء الاصطناعي كتابة الكود البرمجي.",
            paragraphs: [
              "يمثل الفايب كودينغ ثورة في سرعة بناء المشاريع الرقمية والتحول السريع من الفكرة إلى الإطلاق.",
            ],
          },
        ],
        takeaways: [
          "يختصر الفايب كودينغ وقت بناء المشاريع من أشهر إلى أيام قليلة.",
        ],
      },
    },
  },
  {
    slug: "high-converting-landing-page-secrets",
    dateIso: "2026-02-14T00:00:00.000Z",
    coverImage: "/images/blog/landing-page-secrets-cover.webp",
    featured: true,
    relatedSlugs: ["chatgpt-slash-commands-handbook-2026", "what-is-vibe-coding-guide"],
    locales: {
      fa: {
        title: "اصول طلایی طراحی لندینگ‌پیج با نرخ تبدیل بالا برای کسب‌وکارهای ایرانی",
        summary: "چرا بیش از ۸۰٪ پیج‌های اینستاگرامی در جذب لید و اعتمادسازی شکست می‌خورن و چطور یک لندینگ‌پیج یک‌صفحه‌ای اختصاصی بازی رو عوض می‌کنه؟",
        category: "طراحی سایت و فروش",
        readTime: "۸ دقیقه مطالعه",
        publishedDate: "۲۵ بهمن ۱۴۰۴",
        tags: ["لندینگ‌پیج", "افزایش فروش", "مارکتینگ", "طراحی وب", "اعتمادسازی"],
        author: authors.fa,
        toc: [
          { id: "instagram-vulnerability", title: "۱. چرا تکیه کردن فقط به اینستاگرام خطرناکه؟" },
          { id: "anatomy-of-high-converting-page", title: "۲. آناتومی یک لندینگ‌پیج پرفروش" },
          { id: "pain-before-promise", title: "۳. اصل درد قبل از وعده (Pain before Promise)" },
          { id: "frictionless-lead-generation", title: "۴. ساخت مسیر دریافت لید بدون اصطکاک" },
          { id: "trust-elements", title: "۵. عناصر حیاتی اعتمادسازی در نگاه اول" },
        ],
        sections: [
          {
            id: "instagram-vulnerability",
            title: "۱. چرا تکیه کردن فقط به اینستاگرام خطرناکه؟",
            lead: "اینستاگرام ابزار فوق‌العاده‌ای برای جلب توجهه، اما جای امنی برای دارایی اصلی بیزینست نیست.",
            paragraphs: [
              "تغییرات مداوم الگوریتم، خطر قطعی یا فیلترینگ، گم شدن مشتری‌های جدی تو شلوغی دایرکت‌ها و نبودن تو سرچ‌های گوگل باعث می‌شن بخش زیادی از زحماتت هدر بره.",
              "یه لندینگ‌پیج اختصاصی قرار نیست جای اینستاگرامت رو بگیره؛ بلکه ستون اصلی اعتماد و ابزار جذب مشتری جدی در کنار پیجته.",
            ],
          },
          {
            id: "anatomy-of-high-converting-page",
            title: "۲. آناتومی یک لندینگ‌پیج پرفروش",
            lead: "هر لندینگ‌پیج موفق از ۵ بخش اصلی و هماهنگ تشکیل شده:",
            bulletPoints: [
              "هدینگ اصلی (Hero) با ارزش پیشنهادی شفاف که تو ۳ ثانیه اول مخاطب رو نگه داره.",
              "لمس دقیق درد و چالش مشتری (Pain Points) تا متوجه بشه شرایطش رو کاملاً می‌فهمی.",
              "معرفی خدمات و مزیت رقابتی با شواهد و نمونه‌کارهای واقعی.",
              "پیشنهاد بدون ریسک (Offer) مثل مشاوره رایگان برای شروع گفتگو.",
              "فرم ثبت درخواست ساده با کمترین فیلدهای ممکن برای ثبت سریع اطلاعات.",
            ],
          },
          {
            id: "pain-before-promise",
            title: "۳. اصل درد قبل از وعده (Pain before Promise)",
            lead: "مخاطب ایرانی اول باید حس کنه دردش رو می‌شناسی، بعد به راهکارت گوش میده.",
            paragraphs: [
              "اگه از همون اول فقط از خودت تعریف کنی، مخاطب صفحه رو می‌بنده. ولی وقتی اول چالش‌های روزمره‌ش رو دقیق نام ببری، می‌فهمه با متخصصی طرفه که تو دل کاره.",
            ],
          },
        ],
        takeaways: [
          "لندینگ‌پیج نرخ تبدیل ترافیک سوشال مدیا به مشتری پرداخت‌کننده رو تا ۳ برابر بیشتر می‌کنه.",
          "پیشنهاد بدون ریسک بهترین راه برای شروع ارتباط با مشتری جدیه.",
          "دیزاین لوکس و تمیز پیش‌فرض ذهنی مشتری رو درباره ارزشمند بودن خدماتت شکل میده.",
        ],
      },
      en: {
        title: "High-Converting Landing Page Secrets for Digital Businesses",
        summary: "Why most social media pages fail at lead generation and how a single high-impact custom landing page changes the conversion game.",
        category: "Web Design & Growth",
        readTime: "8 min read",
        publishedDate: "Feb 14, 2026",
        tags: ["Landing Page", "Conversion Rate", "Web Design", "Lead Generation"],
        author: authors.en,
        toc: [
          { id: "instagram-vulnerability", title: "1. The Single-Channel Risk" },
          { id: "anatomy-of-high-converting-page", title: "2. Anatomy of a Converting Page" },
          { id: "pain-before-promise", title: "3. Pain Before Promise" },
        ],
        sections: [
          {
            id: "instagram-vulnerability",
            title: "1. The Single-Channel Risk",
            lead: "Social media is great for attention, but a website is the cornerstone of trust.",
            paragraphs: [
              "A custom landing page captures leads reliably and builds lasting brand credibility.",
            ],
          },
        ],
        takeaways: [
          "A targeted landing page triples your visitor-to-client conversion rate.",
          "Frictionless forms capture leads before they get lost in social inboxes.",
        ],
      },
      ar: {
        title: "أسرار تصميم صفحات الهبوط عالية التحويل للأعمال الرقمية",
        summary: "لماذا تفشل معظم الحسابات في جذب العملاء الجادين وكيف تغير صفحة الهبوط المخصصة مسار المبيعات بالكامل.",
        category: "تصميم المواقع والنمو",
        readTime: "٨ دقائق للقراءة",
        publishedDate: "١٤ فبراير ٢٠٢٦",
        tags: ["صفحات الهبوط", "معدل التحويل", "تصميم المواقع", "جذب العملاء"],
        author: authors.ar,
        toc: [
          { id: "instagram-vulnerability", title: "١. مخاطر الاعتماد على منصة واحدة" },
          { id: "anatomy-of-high-converting-page", title: "٢. تشريح صفحة الهبوط الناجحة" },
        ],
        sections: [
          {
            id: "instagram-vulnerability",
            title: "١. مخاطر الاعتماد على منصة واحدة",
            lead: "صفحة الهبوط تبني ركيزة الثقة الأساسية بجانب منصات التواصل.",
            paragraphs: [
              "صفحة الهبوط المتقنة تجمع العملاء المحتملين وتزيد من ولاء العلامة التجارية.",
            ],
          },
        ],
        takeaways: [
          "صفحة الهبوط ترفع معدل تحويل الزوار إلى عملاء فعليين بثلاثة أضعاف.",
        ],
      },
    },
  },
];

export function getAllArticles(locale: Locale = "fa"): Article[] {
  return rawArticles.map((raw) => {
    const locContent = raw.locales[locale] || raw.locales.fa;
    return {
      slug: raw.slug,
      dateIso: raw.dateIso,
      coverImage: raw.coverImage,
      featured: raw.featured,
      relatedSlugs: raw.relatedSlugs,
      ...locContent,
    };
  });
}

export function getFeaturedArticles(locale: Locale = "fa"): Article[] {
  return getAllArticles(locale).filter((a) => a.featured);
}

export function getArticleBySlug(slug: string, locale: Locale = "fa"): Article | undefined {
  const raw = rawArticles.find((r) => r.slug === slug);
  if (!raw) return undefined;
  const locContent = raw.locales[locale] || raw.locales.fa;
  return {
    slug: raw.slug,
    dateIso: raw.dateIso,
    coverImage: raw.coverImage,
    featured: raw.featured,
    relatedSlugs: raw.relatedSlugs,
    ...locContent,
  };
}

export function getRelatedArticles(slug: string, locale: Locale = "fa"): Article[] {
  const current = rawArticles.find((r) => r.slug === slug);
  if (!current) return [];
  const allLocalized = getAllArticles(locale);
  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    return allLocalized.filter((a) => current.relatedSlugs?.includes(a.slug));
  }
  return allLocalized.filter((a) => a.slug !== slug).slice(0, 2);
}
