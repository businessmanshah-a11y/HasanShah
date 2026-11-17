import { EncyclopediaTerm } from './types';

export const uiUxTerms: EncyclopediaTerm[] = [
  {
    id: 'design-tokens',
    termEn: 'Design Tokens',
    termFa: 'توکن‌های دیزاین / متغیرهای طراحی',
    category: 'ui-ux',
    level: 'beginner',
    phonetic: 'دیزاین توکنز',
    tags: ['figma', 'tailwind', 'design-system', 'variables'],
    shortDefinition: 'کوچک‌ترین واحدهای تصمیم‌گیری در طراحی (رنگ، سایز، فونت، سایه) که در قالب متغیر تعریف شده و بین ابزار دیزاین و کد مشترک هستند.',
    deepExplanation: 'به جای نوشتن رنگ‌های هگزادسیمال متفرقه (مانند `#d4af37` یا `#1a1a2e`) در سراسر کدهای قالب وردپرس، آن‌ها را در قالب توکن‌های معنادار (مانند `--color-gold` یا `--color-surface`) در CSS تعریف می‌کنیم تا تغییر هویت بصری سایت با یک خط کد در کل پروژه اعمال شود.',
    vibeCodingImpact: 'هنگام وایب‌کدینگ با هوش مصنوعی، اگر توکن‌های دیزاین را مشخص نکنید، AI برای هر کامپوننت یک رنگ یا سایز جدید با مقادیر هاردکد (Hardcoded) اختراع می‌کند که ظاهر سایت را بسیار شلخته و آماتور می‌کند.',
    goldenPrompt: 'من برای این قالب وردپرس یک دیزاین سیستم مشخص دارم. در تمامی فایل‌های CSS و کلاس‌های Tailwind فقط از توکن‌های موجود در متغیرهای CSS ریشه (مانند var(--color-gold) و var(--color-background)) استفاده کن و هرگز رنگ هگزادسیمال تصادفی تولید نکن.',
    codeSnippet: {
      language: 'css',
      description: 'تعریف توکن‌های پایه دیزاین در متغیرهای CSS سراسری',
      runContext: 'globals.css',
      code: `:root {\n  --color-gold: oklch(0.83 0.105 72);\n  --color-surface: oklch(0.18 0.025 270);\n  --color-background: oklch(0.13 0.022 272);\n  --radius-card: 1rem;\n}`
    },
    relatedTermIds: ['visual-hierarchy', 'wcag-contrast', 'cls-prevention'],
    seoKeywords: ['دیزاین توکن', 'design tokens', 'طراحی سیستم وردپرس', 'متغیرهای استایل']
  },
  {
    id: 'visual-hierarchy',
    termEn: 'Visual Hierarchy',
    termFa: 'سلسله‌مراتب بصری چیدمان المان‌ها',
    category: 'ui-ux',
    level: 'beginner',
    phonetic: 'ویژوال هایررکی',
    tags: ['typography', 'layout', 'landing-page', 'ui'],
    shortDefinition: 'تنظیم اندازه، وزن فونت، رنگ و موقعیت المان‌ها به گونه‌ای که چشم مخاطب ناخودآگاه مهم‌ترین اطلاعات را اول بخواند.',
    deepExplanation: 'در صفحات فرود وردپرسی، چشم کاربر نباید در صفحه سرگردان شود. یک سلسله‌مراتب بصری استاندارد با عنوان اصلی بزرگ (H1 پررنگ)، توضیح کوتاه با کنتراست ملایم، و دکمه اقدام به عمل (CTA) طلایی با کنتراست قوی شروع می‌شود.',
    vibeCodingImpact: 'هوش مصنوعی به طور پیش‌فرض تمایل دارد تیترها و متون را در اندازه‌های یکدست و خاکستری رها کند. یک وایب‌کدر باید در پرامپت خود با واژگان مقیاس تایپوگرافی (Display, H1, Body, Caption) تعادل بصری را دیکته کند.',
    goldenPrompt: 'برای این بخش هدر لندینگ، سلسله‌مراتب بصری شفاف ایجاد کن: تیتر H1 فوق‌العاده بزرگ و بولد (text-4xl تا text-6xl)، پاراگراف توضیحی خوانا با فاصله خطوط باز (leading-relaxed)، و یک دکمه CTA اصلی با گرادیان طلایی درخشان که کانون توجه صفحه باشد.',
    codeSnippet: {
      language: 'html',
      description: 'ساختار استاندارد سلسله‌مراتب بصری با کلاس‌های تیل‌ویند',
      runContext: 'Header Component',
      code: `<div class="space-y-4 text-center">\n  <span class="text-xs font-semibold uppercase tracking-wider text-gold">نسل جدید</span>\n  <h1 class="text-4xl font-black text-foreground md:text-6xl">عنوان اصلی کانون توجه</h1>\n  <p class="text-lg text-muted-foreground max-w-xl mx-auto">توضیح ثانویه با فونت سبک‌تر</p>\n</div>`
    },
    relatedTermIds: ['design-tokens', 'micro-interactions', 'wcag-contrast'],
    seoKeywords: ['سلسله مراتب بصری', 'visual hierarchy', 'طراحی لندینگ پیج', 'چیدمان صفحات وب']
  },
  {
    id: 'micro-interactions',
    termEn: 'Micro-interactions',
    termFa: 'ریزتعاملات و انیمیشن‌های ظریف کاربری',
    category: 'ui-ux',
    level: 'intermediate',
    phonetic: 'مایکرو اینتراکشنز',
    tags: ['animation', 'delight', 'framer-motion', 'css-transitions'],
    shortDefinition: 'انیمیشن‌ها و بازخوردهای حرکتی بسیار ظریف در زمان هاور، کلیک، اسکرول یا کپی که به رابط کاربری حس زنده و ارزشمند بودن می‌بخشند.',
    deepExplanation: 'تفاوت یک سایت معمولی با یک وب‌سایت پرمیوم چندصد میلیونی در ریزتعاملات است: تغییر نرم موقعیت دکمه در زمان هاور (-translate-y-0.5)، درخشش کادرها (Glow Effect)، بازخورد تیک سبز در زمان کپی کردن لینک، و انیمیشن ورود آرام کارت‌ها (Fade-in).',
    vibeCodingImpact: 'هوش مصنوعی اگر به حال خود رها شود، دکمه‌های خشک و بدون ترنزیشن تحویل می‌دهد. وایب‌کدر با درخواست کلاس‌های `transition-all duration-300` و افکت‌های هاور اختصاصی، محصول را در سطح لوکس آماده می‌کند.',
    goldenPrompt: 'به تمامی دکمه‌ها و کارت‌های این صفحه ریزتعاملات ظریف و لوکس اضافه کن: در زمان هاور ۳ پیکسل به بالا حرکت کنند (hover:-translate-y-1)، سایه طلایی ملایم پیدا کنند، و ترنزیشن حرکت آن با easing طبیعی در ۳۰۰ میلی‌ثانیه باشد.',
    codeSnippet: {
      language: 'css',
      description: 'کلاس‌های کاربردی تیل‌ویند برای ساخت هاور و انیمیشن روان',
      runContext: 'Tailwind classes',
      code: `transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(212,175,55,0.3)]`
    },
    relatedTermIds: ['visual-hierarchy', 'design-tokens', 'cls-prevention'],
    seoKeywords: ['ریزتعاملات', 'micro interactions', 'انیمیشن هاور', 'طراحی رابط کاربری لوکس']
  },
  {
    id: 'wcag-contrast',
    termEn: 'WCAG Color Contrast',
    termFa: 'کنتراست استاندارد رنگی دسترسی‌پذیری',
    category: 'ui-ux',
    level: 'intermediate',
    phonetic: 'دبلیو سی ای جی کنتراست',
    tags: ['accessibility', 'a11y', 'compliance', 'readability'],
    shortDefinition: 'نسبت تضاد روشنایی میان رنگ متن و پس‌زمینه بر اساس دستورالعمل بین‌المللی WCAG برای خوانایی کامل روی همه نمایشگرها.',
    deepExplanation: 'بر اساس سطح AA استاندارد WCAG 2.1، حداقل نسبت کنتراست برای متون عادی باید ۴.۵ به ۱ و برای متون درشت ۳ به ۱ باشد. در تم‌های تاریک (Dark Mode)، استفاده از خاکستری‌های بسیار تیره روی پس‌زمینه سیاه باعث خستگی چشم و عدم خوانایی در نور خورشید می‌شود.',
    vibeCodingImpact: 'هوش مصنوعی علاقه زیادی به استفاده از متون خاکستری بسیار کم‌رنگ (مثل text-gray-500 روی بک‌گراند مشکی) دارد که توسط ابزارهای Lighthouse به عنوان باگ سئو و دسترسی‌پذیری جریمه می‌شود.',
    goldenPrompt: 'رنگ‌های استفاده‌شده در این کامپوننت را مطابق استاندارد WCAG 2.1 AA بررسی کن. کنتراست متن اصلی و رنگ طلایی با پس‌زمینه تاریک باید حداقل ۵ به ۱ باشد تا امتیاز کامل Accessibility در لایت‌هاوس گوگل تضمین شود.',
    codeSnippet: {
      language: 'css',
      description: 'استفاده از مقادیر رنگی با تضاد نوری تضمین‌شده در فضای oklch',
      runContext: 'colors.css',
      code: `/* متن روشن روی پس‌زمینه فوق‌تیره */\n--bg-dark: oklch(0.12 0.02 270);\n--text-bright: oklch(0.96 0.01 70); /* نسبت کنتراست بالاتر از 12:1 */`
    },
    relatedTermIds: ['design-tokens', 'cls-prevention', 'skeleton-loading'],
    seoKeywords: ['کنتراست رنگی', 'wcag contrast', 'دسترسی پذیری وب', 'a11y وردپرس']
  },
  {
    id: 'cls-prevention',
    termEn: 'CLS Prevention',
    termFa: 'مهار پرش چیدمان صفحه (Cumulative Layout Shift)',
    category: 'ui-ux',
    level: 'advanced',
    phonetic: 'سی ال اس پریونشن',
    tags: ['performance', 'core-web-vitals', 'layout', 'seo'],
    shortDefinition: 'تکنیک‌های جلوگیری از جابه‌جایی ناگهانی و پرش المان‌های صفحه هنگام لود شدن تصاویر، فونت‌ها و بنرها.',
    deepExplanation: 'حتماً تجربه کرده‌اید که می‌خواهید روی لینکی کلیک کنید، اما با لود شدن یک تصویر ناگهان صفحه به پایین پرش می‌کند و اشتباهی روی تبلیغات کلیک می‌کنید! این پرش CLS نام دارد. با تعریف مقادیر دقیق `width` و `height` برای تصاویر و استفاده از `aspect-ratio` از این خطا جلوگیری می‌شود.',
    vibeCodingImpact: 'هوش مصنوعی تگ‌های `<img>` را معمولاً بدون ابعاد عرض و ارتفاع تولید می‌کند. این موضوع مستقیماً امتیاز Core Web Vitals سایت را در سرچ کنسول قرمز می‌کند.',
    goldenPrompt: 'برای تمام تصاویر و باکس‌های محتوایی در این تمپلیت وردپرس، نسبت ابعاد دقیق (aspect-ratio) و رزرو فضا تعیین کن تا از هرگونه Cumulative Layout Shift در زمان لود محتوا جلوگیری شود و مقدار CLS سایت در لایت‌هاوس روی عدد صفر باقی بماند.',
    codeSnippet: {
      language: 'html',
      description: 'رزرو فضای تصویر با aspect-ratio در تیل‌ویند',
      runContext: 'Image wrapper',
      code: `<div class="relative w-full aspect-video overflow-hidden rounded-2xl bg-surface">\n  <img src="banner.webp" width="1280" height="720" alt="..." class="object-cover w-full h-full" loading="lazy" />\n</div>`
    },
    relatedTermIds: ['skeleton-loading', 'wcag-contrast', 'visual-hierarchy'],
    seoKeywords: ['پرش چیدمان', 'cls وردپرس', 'core web vitals cls', 'بهینه سازی لایت هاوس']
  },
  {
    id: 'skeleton-loading',
    termEn: 'Skeleton Screen Loading',
    termFa: 'بارگذاری با اسکلت خاکستری المان‌ها',
    category: 'ui-ux',
    level: 'intermediate',
    phonetic: 'اسکلتون لودینگ',
    tags: ['ux', 'perceived-performance', 'animation', 'async'],
    shortDefinition: 'نمایش جعبه‌های توخالی خاکستری با انیمیشن پالس نوری در محل قرارگیری محتوا، تا زمان دریافت داده‌ها از سرور یا API.',
    deepExplanation: 'اسکلتون اسکرین حس معطلی کاربر را تا ۵۰ درصد نسبت به اسپینرهای چرخان کاهش می‌دهد. کاربر دقیقاً متوجه می‌شود که چه نوع محتوایی (عنوان، عکس، کارت پست) در شرف بارگذاری است و ساختار صفحه را پیش از لود حس می‌کند.',
    vibeCodingImpact: 'در سایت‌های وایب‌کدینگ متصل به REST API، هوش مصنوعی معمولاً یک دایره لودینگ زشت در وسط صفحه می‌گذارد. پیاده‌سازی اسکلتون تمیز، سایت شما را به کلاس شرکت‌هایی مانند یوتیوب و لینکدین ارتقا می‌دهد.',
    goldenPrompt: 'یک کامپوننت Skeleton Loading با افکت پالس نوری (animate-pulse) برای کارت‌های پست وبلاگ با کلاس‌های Tailwind طراحی کن که شامل جایگاه تصویر، ۲ خط برای تیتر و یک دکمه خاکستری باشد.',
    codeSnippet: {
      language: 'html',
      description: 'کامپوننت اسکلتون تمیز با انیمیشن پالس بومی تیل‌ویند',
      runContext: 'SkeletonCard.tsx',
      code: `<div class="p-6 rounded-2xl border border-white/10 bg-surface/50 animate-pulse space-y-4">\n  <div class="h-44 bg-white/10 rounded-xl w-full"></div>\n  <div class="h-6 bg-white/10 rounded w-3/4"></div>\n  <div class="h-4 bg-white/10 rounded w-1/2"></div>\n</div>`
    },
    relatedTermIds: ['cls-prevention', 'micro-interactions', 'design-tokens'],
    seoKeywords: ['اسکلتون لودینگ', 'skeleton loading', 'انیمیشن لود صفحه', 'تجربه کاربری بارگذاری']
  }
];
