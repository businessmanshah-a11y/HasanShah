// app/blog/blog-data.ts
import type { Locale } from "../i18n/config";

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

export interface ArticleSection {
  id: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  callout?: ArticleCallout;
  table?: ArticleTable;
  codeSnippets?: ArticleCodeSnippet[];
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
  {
    slug: "chatgpt-slash-commands-handbook-2026",
    dateIso: "2026-02-27T00:00:00.000Z",
    coverImage: "/images/blog/chatgpt-handbook-cover.jpg",
    featured: true,
    relatedSlugs: ["what-is-vibe-coding-guide", "high-converting-landing-page-secrets"],
    locales: {
      fa: {
        title: "کامل‌ترین هندبوک اسلش‌کامندها و کدهای مخفی ChatGPT (ویرایش ۲۰۲۶)",
        summary: "مرجع جامع و دست‌اول تمام اسلش‌کامندها، کدهای مخفی تغییر استایل، رندرهای سینمایی و پرامپت‌های میانبر چت‌جی‌پی‌تی برای کاربران حرفه‌ای و تیم‌های توسعه.",
        category: "هوش مصنوعی",
        readTime: "۱۵ دقیقه مطالعه",
        publishedDate: "۸ اسفند ۱۴۰۴",
        tags: ["ChatGPT", "پرامپت‌نویسی", "اسلش‌کامند", "هوش مصنوعی", "کدهای مخفی", "وایب‌کدینگ"],
        author: authors.fa,
        toc: [
          { id: "understanding-commands", title: "۱. ساختار و لایه‌های پردازش کامندها در ChatGPT" },
          { id: "core-official-commands", title: "۲. اسلش‌کامندهای رسمی و قابلیت‌های سیستمی" },
          { id: "hidden-visual-styles", title: "۳. کدهای مخفی استایل بصری، رندر و عکاسی" },
          { id: "camera-and-angle-codes", title: "۴. کدهای کنترل زاویه دوربین، ترکیب‌بندی و کاراکتر" },
          { id: "dev-and-coding-prompts", title: "۵. کامندهای تخصصی توسعه‌دهندگان و وایب‌کدینگ" },
          { id: "business-and-strategy", title: "۶. کامندهای استراتژی بیزینس و لیدجنریشن" },
          { id: "prompt-chaining-framework", title: "۷. چارچوب ساخت پرامپت‌های زنجیره‌ای اختصاصی" },
          { id: "summary-and-takeaways", title: "۸. جمع‌بندی و نکات کلیدی" },
        ],
        sections: [
          {
            id: "understanding-commands",
            title: "۱. ساختار و لایه‌های پردازش کامندها در ChatGPT",
            lead: "اگه می‌خوای کنترل کاملی روی هوش مصنوعی داشته باشی، باید بدونی دستورات و کدهای میانبر دقیقاً تو چه لایه‌ای از مدل پردازش می‌شن.",
            paragraphs: [
              "خیلی‌ها فکر می‌کنن اسلش‌کامندها فقط یه سری کلمه رندوم هستن، اما مدل‌های نسل جدید مثل GPT-4o دستورات رو در چهار لایه معماری کاملاً تفکیک‌شده شناسایی می‌کنن.",
              "وقتی این لایه‌ها رو بشناسی، می‌دونی کی از ابزارهای داخلی استفاده کنی و کی با پرامپت‌های معنایی (Semantic Prompts) خروجی‌های شگفت‌انگیز بگیری.",
            ],
            table: {
              headers: ["نوع کامند", "لایه پردازش", "کارکرد و نحوه اجرا", "نمونه کاربردی"],
              rows: [
                ["Official Commands", "ChatGPT Core UI", "دستورات هسته اپلیکیشن برای منوها و ابزارها", "/canvas یا منشن با @"],
                ["Contextual Commands", "Active Tool / Sandbox", "دستورات ویژه ادیتور کد و محیط پایتون", "/comment یا /update"],
                ["Semantic Commands", "LLM Semantic Parser", "کلیدواژه‌های معنایی که مدل ذاتاً متدولوژی اون‌ها رو بلده", "/eli5 یا /tldr"],
                ["Custom Commands", "System Prompt / Rules", "کامندهای اختصاصی که خودت تو تنظیمات یا پرامپت تعریف کردی", "/audit یا /proshot"],
              ],
            },
            callout: {
              type: "tip",
              title: "نکته مهم",
              text: "استفاده از اسلش‌کامندهای معنایی مصرف توکن رو به شدت کم می‌کنه، سرعت پاسخ‌دهی رو چند برابر می‌کنه و توهم مدل رو به صفر می‌رسونه.",
            },
          },
          {
            id: "core-official-commands",
            title: "۲. اسلش‌کامندهای رسمی و قابلیت‌های سیستمی",
            lead: "دستورات هسته پلتفرم OpenAI که محیط کاربری رو مستقیماً تغییر می‌دن.",
            bulletPoints: [
              "‏/canvas — باز کردن بوم کاری دوپنجره‌ای برای نوشتن داکیومنت، متون طولانی و ادیت همزمان کدهای فرانت‌اند.",
              "‏@ (Custom GPTs) — فراخوانی مستقیم ربات‌ها و ابزارهای تخصصی وسط چت بدون عوض کردن پنجره گفتگو.",
              "‏/search — اجبار مدل به وب‌گردی عمیق لحظه‌ای و دریافت اطلاعات موثق روز با ذکر منبع دقیق.",
              "‏/reset یا /clear — پاکسازی کانتکست موقت گفتگو بدون دستکاری حافظه بلندمدت حسابت.",
            ],
            codeSnippets: [
              {
                title: "نمونه استفاده ترکیبی از کامند رسمی و کانتکست",
                language: "markdown",
                code: `@CodeCopilot /canvas
لطفاً ساختار کامپوننت کارت مقاله رو بر اساس دیزاین سیستم طلایی و مشکی با Tailwind v4 ریفکتور کن و تست‌های اون رو بنویس.`,
              },
            ],
          },
          {
            id: "hidden-visual-styles",
            title: "۳. کدهای مخفی استایل بصری، رندر و عکاسی",
            lead: "با این تگ‌ها و کدهای میانبر در بخش تصویرسازی، عکس‌هایی با کیفیت استودیوهای برتر دنیا بساز.",
            paragraphs: [
              "این کدها مستقیماً به لایه‌های سبک و نورپردازی مدل تصویرساز وصل می‌شن و پالت رنگ و بافت صحنه رو تنظیم می‌کنن:",
            ],
            bulletPoints: [
              "‏/PROSHOT — پرتره عکاسی با لنز ۸۵ میلی‌متری، بوکه عمیق، نورپردازی سه نقطه‌ای استودیویی و بافت طبیعی پوست.",
              "‏/cinematic — نورپردازی سینمایی آنامورفیک با کنتراست بالا و پالت رنگی گرم طلایی-سرمه‌ای.",
              "‏/ghibli — سبک انیمه نوستالژیک استودیو جیبلی با رنگ‌های آبرنگی زنده و آسمان عمیق.",
              "‏/cyberpunk — نورهای نئونی بنفش و آبی در محیط شبانه بارانی با انعکاس روی شیشه و آسفالت.",
              "‏/goldluxury — متریال طلای مات برس‌خورده، نورپردازی تیره موضعی و بافت لوکس و های‌اند.",
              "‏/glassmorphism — سطوح شیشه‌ای مات (Frosted Glass) با شکست نور کریستالی و گرادیان‌های نئونی ملایم.",
              "‏/isometric — زاویه دید سه‌بعدی ایزومتریک با جزییات مینیاتوری دقیق برای دیاگرام‌ها و معماری محصول.",
              "‏/retro90s و /y2k — بافت فیلم‌های آنالوگ با گرین ملایم و رنگ‌های پرکنتراست دهه نود میلادی.",
            ],
            callout: {
              type: "quote",
              title: "فرمول طلایی پرامپت تصویری",
              text: "موضوع اصلی + /PROSHOT + /goldluxury + /goldenhour + نورپردازی استودیویی = تصویری با کیفیت بی‌نظیر بدون حس تصنعی.",
            },
          },
          {
            id: "camera-and-angle-codes",
            title: "۴. کدهای کنترل زاویه دوربین، ترکیب‌بندی و کاراکتر",
            lead: "دستورات کنترل دوربین برای تنظیم زوایای دید و تغییر هوشمند اجزای صحنه:",
            table: {
              headers: ["کد دستوری", "عملکرد", "کاربرد اصلی"],
              rows: [
                ["/droneview", "نمای باز پرنده از آسمان", "مناسب برای پلان‌های شهری، ویلاها، معماری و لنداسکیپ"],
                ["/lowangleview", "نمای از پایین به بالا (Heroic)", "ایجاد حس قدرت، شکوه، محصول شاخص و برند رهبر"],
                ["/360views", "رندر پانورامای کامل ۳۶۰ درجه", "طراحی فضاهای داخلی و شووروم‌های دیجیتال"],
                ["/bgpersonremove", "حذف هوشمند انسان‌ها و نویز پس‌زمینه", "تبدیل عکس‌های شلوغ خیابانی به تصاویر مینیمال و تمیز"],
                ["/outfitchange", "تغییر لباس کاراکتر بدون تغییر چهره", "تولید کاتالوگ فشن و استایل سازمانی"],
                ["/together", "ترکیب دو کاراکتر در یک قاب هماهنگ", "سناریوهای همکاری تجاری و مکالمه انسانی"],
              ],
            },
          },
          {
            id: "dev-and-coding-prompts",
            title: "۵. کامندهای تخصصی توسعه‌دهندگان و وایب‌کدینگ",
            lead: "دستوراتی که سرعت و کیفیت کدنویسی، دیباگ و معماری پروژه‌ت رو ۱۰ برابر می‌کنن.",
            bulletPoints: [
              "‏/audit — بررسی دقیق کدها از نظر باگ‌های امنیتی، مموری‌لیک، بهینگی رندرینگ و استانداردهای TypeScript.",
              "‏/refactor — بازنویسی تمیز کد بر اساس اصول Clean Code، جداسازی مسئولیت‌ها و کاهش کدهای اضافی.",
              "‏/testsuite — تولید خودکار تست‌های واحد (Unit Tests) و تست‌های یکپارچگی با پوشش کامل سناریوهای مرزی.",
              "‏/schema — تبدیل مدل‌های دیتابیس به اعتبارسنجی‌های Zod و تایپ‌های جنریک فرانت‌اند.",
              "‏/docstring — تولید داکیومنت کامل استاندارد JSDoc با توضیح تمام پارامترها و مقادیر بازگشتی.",
            ],
            codeSnippets: [
              {
                title: "پرامپت نمونه برای دستور /audit",
                language: "markdown",
                code: `/audit
نقش: تو مهندس ارشد فرانت‌اند (Staff Engineer) هستی.
کد زیر را از نظر:
۱. Performance و جلوگیری از Re-renderهای اضافه
۲. امنیت و Sanitization ورودی‌ها
۳. دسترسی‌پذیری (a11y / WCAG AA)
تحلیل کن و سپس کد اصلاح‌شده رو بدون بخش‌های حذف‌شده بنویس.`,
              },
            ],
          },
          {
            id: "business-and-strategy",
            title: "۶. کامندهای استراتژی بیزینس و لیدجنریشن",
            lead: "دستوراتی برای بنیان‌گذاران، مدیران مارکتینگ و فریلنسرها جهت تدوین استراتژی‌های پربازده.",
            paragraphs: [
              "با این کامندها، تحلیل‌های مارکتینگی دقیق و متناسب با شرایط واقعی بازار دریافت می‌کنی:",
            ],
            bulletPoints: [
              "‏/icp — ترسیم پرسونای مشتری ایده‌آل شامل ترس‌ها، آرزوها، دغدغه‌های بودجه و محرک‌های تصمیم‌گیری.",
              "‏/hook — تولید ۱۰ قلاب متنی قدرتمند (Hooks) برای ریلزهای اینستاگرام، تایتل‌های ویدیو و هدرهای لندینگ پیج.",
              "‏/aida — بازنویسی ساختار متن بر اساس قیف فروش کلاسیک (Attention → Interest → Desire → Action).",
              "‏/objections — استخراج تمام شک‌ها و بهانه‌های ذهنی مشتری قبل از خرید و ارائه پاسخ‌های قانع‌کننده.",
            ],
          },
          {
            id: "prompt-chaining-framework",
            title: "۷. چارچوب ساخت پرامپت‌های زنجیره‌ای اختصاصی",
            lead: "چطور برای بیزینس خودت یه سیستم اسلش‌کامند بومی بسازی؟",
            paragraphs: [
              "بهترین راه برای اتوماسیون کارهای تکراری، تعریف یک فایل System Rules در تنظیمات Custom Instructions اکانت ChatGPT است.",
              "کافیه در بخش تنظیمات نحوه پاسخ‌دهی، ماتریس دستوراتت رو قرار بدی:",
            ],
            codeSnippets: [
              {
                title: "چارچوب پیکربندی System Rules",
                language: "markdown",
                code: `[COMMAND MATRIX]
وقتی دستوری با کاراکتر / وارد شد، فوراً پروتکل مربوطه رو بدون تعارف و مقدمه اجرا کن:

- /landing: ساختار لندینگ‌پیج با تیتر، هایلایت، بولت‌های ارزش و فرم لید رو طراحی کن.
- /review: بررسی لحن، املا و روانی متن فارسی بر اساس استانداردهای ویراستاری.
- /seo: استخراج متاتایتل ۶۰ کاراکتری، متادیسکریپشن ۱۵۰ کاراکتری، اسلاگ و کلمات کلیدی LSI.`,
              },
            ],
          },
          {
            id: "summary-and-takeaways",
            title: "۸. جمع‌بندی و نکات کلیدی",
            lead: "هوش مصنوعی ابزاریه که دقیقاً به اندازه شفافیت و کیفیت دستوراتت بهت قدرت میده.",
            paragraphs: [
              "استفاده هدفمند از این هندبوک بهت کمک می‌کنه زمان تولید محتوا، کدنویسی و تصویرسازی رو به یک‌دهم برسونی و همیشه خروجی درجه یک تحویل بگیری.",
            ],
            callout: {
              type: "tip",
              title: "همیشه یک قدم جلوتر باش",
              text: "این هندبوک با آپدیت‌های جدید مدل‌های زبانی مرتب به‌روزرسانی می‌شه. این صفحه رو بوکمارک کن و برای همکارات هم بفرست.",
            },
          },
        ],
        takeaways: [
          "اسلش‌کامندها صرفاً میانبر نیستن؛ زبان گفت‌وگوی با دقت میلی‌متری با هوش مصنوعی‌ان.",
          "برای تولید تصاویر لوکس، ترکیب تگ‌های نوری (/goldenhour, /cinematic) با سبک‌های هنری خروجی رو کاملاً طبیعی می‌کنه.",
          "توسعه‌دهنده‌ها می‌تونن با کامندهای /audit و /refactor کیفیت کدهای پروژه‌شون رو تضمین کنن.",
          "تعریف ماتریس کامندهای شخصی، سرعت کارهای روزمره کاریت رو چند برابر می‌کنه.",
        ],
      },
      en: {
        title: "The Ultimate ChatGPT Slash Commands & Hidden Codes Handbook (2026 Edition)",
        summary: "The master reference guide for all official slash commands, hidden visual render tags, cinematic photography styles, and power-user shortcuts in ChatGPT.",
        category: "Artificial Intelligence",
        readTime: "15 min read",
        publishedDate: "Feb 27, 2026",
        tags: ["ChatGPT", "Prompt Engineering", "Slash Commands", "AI Tools", "Vibe Coding"],
        author: authors.en,
        toc: [
          { id: "understanding-commands", title: "1. Understanding ChatGPT Command Layers" },
          { id: "core-official-commands", title: "2. Core Official Slash Commands" },
          { id: "hidden-visual-styles", title: "3. Hidden Visual & Photographic Styles" },
          { id: "camera-and-angle-codes", title: "4. Camera Angles & Character Controls" },
          { id: "dev-and-coding-prompts", title: "5. Developer & Vibe Coding Prompts" },
          { id: "business-and-strategy", title: "6. Business & Growth Strategy Prompts" },
          { id: "prompt-chaining-framework", title: "7. Building Custom Command Frameworks" },
          { id: "summary-and-takeaways", title: "8. Summary & Key Takeaways" },
        ],
        sections: [
          {
            id: "understanding-commands",
            title: "1. Understanding ChatGPT Command Layers",
            lead: "To truly master modern LLMs like GPT-4o, you need to understand where commands are parsed in the application stack.",
            paragraphs: [
              "Unlike common belief, slash commands aren't just random prompt hacks. Modern AI platforms process instructions across four distinct operational layers.",
              "Mastering these layers allows you to trigger native UI widgets and prompt semantic engines with pinpoint precision.",
            ],
            table: {
              headers: ["Command Type", "Processed By", "Function & Mechanism", "Example"],
              rows: [
                ["Official Commands", "ChatGPT Core UI", "Triggers native app features and routing", "/canvas or @ mentions"],
                ["Contextual Commands", "Active Sandbox / Tool", "Enabled in specific environments like code canvas", "/comment or /update"],
                ["Semantic Commands", "LLM Semantic Parser", "Shorthands interpreted natively by the language model", "/eli5 or /tldr"],
                ["Custom Commands", "System Rules / Prompts", "User-defined triggers mapped to detailed rules", "/audit or /proshot"],
              ],
            },
            callout: {
              type: "tip",
              title: "Power User Tip",
              text: "Semantic slash commands reduce token usage, eliminate hallucination, and return structured output significantly faster.",
            },
          },
          {
            id: "core-official-commands",
            title: "2. Core Official Slash Commands",
            lead: "Native interface controls built directly into ChatGPT by OpenAI.",
            bulletPoints: [
              "/canvas — Opens the dual-pane collaborative workspace for editing long docs and frontend code directly.",
              "@ (Custom GPTs) — Calls specialized GPT agents directly in the flow of your ongoing chat.",
              "/search — Forces deep real-time web retrieval with verified citations and source links.",
              "/reset or /clear — Wipes the current thread context without resetting your user memory.",
            ],
          },
          {
            id: "hidden-visual-styles",
            title: "3. Hidden Visual & Photographic Styles",
            lead: "Shortcodes and style triggers for Hollywood-grade image generation in DALL-E 3.",
            bulletPoints: [
              "/PROSHOT — 85mm lens portrait, deep bokeh, 3-point studio lighting, and authentic skin texture.",
              "/cinematic — Anamorphic cinema lighting with rich dynamic contrast and gold-navy palette.",
              "/ghibli — Studio Ghibli nostalgic hand-painted watercolor anime aesthetic.",
              "/cyberpunk — Rainy neon city night with vibrant reflections and futuristic HUD overlays.",
              "/goldluxury — Brushed matte gold materials, dark moody lighting, and high-end luxury textures.",
              "/glassmorphism — Frosted glass interfaces with crystal refraction and subtle neon glow.",
            ],
          },
          {
            id: "camera-and-angle-codes",
            title: "4. Camera Angles & Character Controls",
            lead: "Precise camera and scene editing triggers:",
            table: {
              headers: ["Command", "Action", "Primary Use Case"],
              rows: [
                ["/droneview", "Bird's-eye wide aerial shot", "Urban landscapes, real estate, architecture"],
                ["/lowangleview", "Heroic bottom-up perspective", "Showcasing authority, luxury products, leadership"],
                ["/360views", "Full 360-degree panoramic render", "Virtual showrooms and architectural interiors"],
                ["/bgpersonremove", "Removes crowd and background noise", "Creates clean, minimalist product shots"],
              ],
            },
          },
          {
            id: "dev-and-coding-prompts",
            title: "5. Developer & Vibe Coding Prompts",
            lead: "Multiply your engineering velocity by 10x with these precision code commands:",
            bulletPoints: [
              "/audit — Analyzes code for memory leaks, performance bottlenecks, and security vulnerabilities.",
              "/refactor — Clean Code refactoring using SOLID principles and minimal dependencies.",
              "/testsuite — Auto-generates exhaustive Unit and Integration tests including all edge cases.",
              "/schema — Converts database schemas into type-safe Zod validators and TypeScript interfaces.",
            ],
            codeSnippets: [
              {
                title: "Example Prompt for /audit",
                language: "markdown",
                code: `/audit
Role: Senior Staff Frontend Engineer.
Analyze the following code for:
1. Re-render performance and state optimizations
2. Input sanitization and security
3. Accessibility (WCAG AA compliance)
Provide the improved code without removing existing comments.`,
              },
            ],
          },
          {
            id: "business-and-strategy",
            title: "6. Business & Growth Strategy Prompts",
            lead: "Frameworks for founders, marketers, and product managers:",
            bulletPoints: [
              "/icp — Maps your ideal customer profile including friction points, desires, and willingness to pay.",
              "/hook — Generates 10 viral hooks for short-form video and high-converting landing page headlines.",
              "/aida — Restructures copy following the classic Attention → Interest → Desire → Action funnel.",
            ],
          },
          {
            id: "prompt-chaining-framework",
            title: "7. Building Custom Command Frameworks",
            lead: "How to configure your own custom slash command matrix inside Custom Instructions.",
            codeSnippets: [
              {
                title: "System Rules Configuration",
                language: "markdown",
                code: `[COMMAND MATRIX]
When a message starts with a slash command, execute the protocol immediately without conversational filler:

- /landing: Generates full high-converting landing page structure with hero, proof, and CTA.
- /review: Proofreads and humanizes copy according to modern brand guidelines.
- /seo: Outputs 60-char meta title, 150-char meta description, URL slug, and LSI keywords.`,
              },
            ],
          },
          {
            id: "summary-and-takeaways",
            title: "8. Summary & Key Takeaways",
            lead: "AI models are only as powerful as the precision of the instructions you provide.",
            paragraphs: [
              "Mastering these commands allows you to cut your content creation, coding, and design cycles down to a fraction of the time while maintaining top-tier quality.",
            ],
          },
        ],
        takeaways: [
          "Slash commands provide precision semantic control over AI outputs.",
          "Combining lighting shortcodes (/goldenhour, /cinematic) removes the artificial AI look.",
          "Developers can use /audit and /refactor to ship production-grade code rapidly.",
          "Custom System Prompts automate daily repetitive engineering tasks.",
        ],
      },
      ar: {
        title: "الدليل الشامل لأوامر ChatGPT والرموز المخفية (إصدار 2026)",
        summary: "المرجع التخصصي الكامل لجميع أوامر السلاش، والرموز المخفية لتوليد الصور والرندرات السينمائية، واختصارات المحترفين في ChatGPT.",
        category: "الذكاء الاصطناعي",
        readTime: "١٥ دقيقة للقراءة",
        publishedDate: "٢٧ فبراير ٢٠٢٦",
        tags: ["ChatGPT", "هندسة الأوامر", "أوامر السلاش", "الذكاء الاصطناعي", "فايب كودينغ"],
        author: authors.ar,
        toc: [
          { id: "understanding-commands", title: "١. طبقات معالجة الأوامر في ChatGPT" },
          { id: "core-official-commands", title: "٢. أوامر السلاش الرسمية وميزات النظام" },
          { id: "hidden-visual-styles", title: "٣. الرموز المخفية للأنماط البصرية والتصوير" },
          { id: "camera-and-angle-codes", title: "٤. التحكم بزوايا الكاميرا والمشاهد" },
          { id: "dev-and-coding-prompts", title: "٥. أوامر البرمجة والفايب كودينغ" },
          { id: "business-and-strategy", title: "٦. أوامر استراتيجية الأعمال والنمو" },
          { id: "prompt-chaining-framework", title: "٧. بناء نظام أوامر مخصص" },
          { id: "summary-and-takeaways", title: "٨. الخلاصة والنقاط الرئيسية" },
        ],
        sections: [
          {
            id: "understanding-commands",
            title: "١. طبقات معالجة الأوامر في ChatGPT",
            lead: "لتحقيق أقصى استفادة من نماذج الذكاء الاصطناعي، عليك فهم كيفية معالجة الأوامر عبر طبقات النظام المختلفة.",
            paragraphs: [
              "ليست أوامر السلاش مجرد حيل عشوائية، بل تتعامل معها النماذج الحديثة عبر ٤ طبقات معمارية محددة.",
              "معرفة هذه الطبقات تمكنك من استدعاء أدوات النظام وتوجيه النموذج بدقة متناهية.",
            ],
            table: {
              headers: ["نوع الأمر", "طبقة المعالجة", "الوظيفة والآلية", "مثال"],
              rows: [
                ["Official Commands", "ChatGPT Core UI", "تفعيل ميزات واجهة التطبيق والأدوات", "/canvas أو الإشارة بـ @"],
                ["Contextual Commands", "Active Tool / Sandbox", "أوامر بيئة البرمجة ومحرر الكود", "/comment أو /update"],
                ["Semantic Commands", "LLM Semantic Parser", "كلمات دلالية يفهمها النموذج تلقائياً", "/eli5 أو /tldr"],
                ["Custom Commands", "System Rules / Prompts", "أوامر مخصصة تقوم بتعريفها في التعليمات", "/audit أو /proshot"],
              ],
            },
            callout: {
              type: "tip",
              title: "نصيحة للمحترفين",
              text: "تساعد أوامر السلاش الدلالية في تقليل استهلاك التوكنات وتسريع الاستجابة وتفادي أخطاء النموذج تماماً.",
            },
          },
          {
            id: "core-official-commands",
            title: "٢. أوامر السلاش الرسمية وميزات النظام",
            lead: "الأدوات الرسمية المدمجة في واجهة OpenAI.",
            bulletPoints: [
              "/canvas — فتح مساحة العمل الثنائية لتحرير النصوص الطويلة وتطوير الكود مباشرة.",
              "@ (Custom GPTs) — استدعاء الروبوتات المتخصصة داخل نفس المحادثة.",
              "/search — البحث المباشر في الويب وجلب معلومات موثقة مع المصادر.",
              "/reset — إعادة ضبط سياق المحادثة الحالية دون التأثير على الذاكرة الدائمة.",
            ],
          },
          {
            id: "hidden-visual-styles",
            title: "٣. الرموز المخفية للأنماط البصرية والتصوير",
            lead: "رموز سريعة لإنشاء صور سينمائية فائقة الجودة:",
            bulletPoints: [
              "/PROSHOT — تصوير بورتريه بعدسة 85mm مع إضاءة استوديو ثلاثية وملمس طبيعي.",
              "/cinematic — إضاءة سينمائية احترافية مع تباين دايناميكي ولمسات ذهبية وكحلية.",
              "/ghibli — نمط استوديو غيبلي الأنمي الكلاسيكي مع ألوان مائية حية.",
              "/cyberpunk — أجواء مستقبلية مع إضاءات نيون ليلية وانعكاسات على الزجاج.",
              "/goldluxury — ملمس الذهب المطفي والإضاءة الفاخرة الموجهة.",
            ],
          },
          {
            id: "dev-and-coding-prompts",
            title: "٥. أوامر البرمجة والفايب كودينغ",
            lead: "أوامر تضاعف إنتاجيتك في البرمجة وهندسة المنتجات:",
            bulletPoints: [
              "/audit — فحص شامل للكود لاكتشاف الثغرات وتحسين الأداء ومعايير TypeScript.",
              "/refactor — إعادة هيكلة الكود وفق مبادئ Clean Code وتقليل الاعتماديات.",
              "/testsuite — توليد اختبارات Unit و Integration شاملة.",
            ],
          },
          {
            id: "summary-and-takeaways",
            title: "٨. الخلاصة والنقاط الرئيسية",
            lead: "الذكاء الاصطناعي أداة تمنحك القوة بقدر دقة الأوامر التي توجهها إليها.",
            paragraphs: [
              "يساعدك هذا الدليل في اختصار وقت تطوير البرمجيات والمحتوى والتصميم إلى جزء بسيط من الوقت بجودة عالمية.",
            ],
          },
        ],
        takeaways: [
          "أوامر السلاش هي لغة التخاطب الدقيقة مع نماذج الذكاء الاصطناعي.",
          "دمج أوامر الإضاءة السينمائية يمنح الصور مظهراً واقعياً بعيداً عن الطابع الاصطناعي.",
          "يمكن للمطورين ضمان جودة الكود باستخدام أوامر التدقيق وإعادة الهيكلة.",
        ],
      },
    },
  },
  {
    slug: "what-is-vibe-coding-guide",
    dateIso: "2026-02-23T00:00:00.000Z",
    coverImage: "/images/blog/vibe-coding-cover.jpg",
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
    coverImage: "/images/blog/landing-page-secrets-cover.jpg",
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
