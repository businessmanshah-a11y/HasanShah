import { EncyclopediaTerm } from './types';

export const frontendTerms: EncyclopediaTerm[] = [
  {
    id: 'tailwind-jit',
    termEn: 'Tailwind CSS JIT Engine',
    termFa: 'موتور کامپایل لحظه‌ای تیل‌ویند (Just-In-Time)',
    category: 'frontend',
    level: 'beginner',
    phonetic: 'تِیل-ویند جی-آی-تی',
    tags: ['tailwind', 'css', 'compilation', 'performance'],
    sequenceOrder: 13,
    learningStation: 'station-2',
    readingTimeMinutes: 1,
    targetPersonas: ['developer', 'designer', 'beginner'],
    isNoCodeFriendly: false,
    isCritical5: true,
    isLanding24h: true,
    elevatorPitch: 'خیاط اختصاصی فوق‌سریع که فقط کلاس‌های استفاده‌شده در قالب را می‌دوزد و حجم فایل استایل را زیر ۳۰ کیلوبایت نگه می‌دارد.',
    beginnerTrap: 'معرفی نکردن مسیر فایل‌های PHP در بخش content تنظیمات تیل‌ویند؛ کلاس‌ها در کد نوشته می‌شوند اما در مرورگر هیچ استایلی اعمال نمی‌شود!',
    analogy: 'مثل یک سرآشپز اختصاصی است که فقط غذای سفارشی همان لحظه شما را می‌پزد، نه اینکه دیگ‌های غذای یک ماه را در خانه شما انبار کند!',
    humanQuestion: 'چرا سایت‌های قدیمی وردپرس چند مگابایت فایل استایل سنگین داشتند اما با تیل‌ویند کل استایل سایت فقط ۲۰ کیلوبایت است؟',
    realPain: 'اگر فایل پیکربندی JIT را درست تنظیم نکنی، هیچ‌کدام از کدهایی که هوش مصنوعی می‌نویسد رنگ و لعاب نمی‌گیرند و سایت کلاً بدون استایل نمایش داده می‌شود!',
    commonAiError: {
      errorSnippet: 'Tailwind classes not rendering: content path missing in tailwind.config',
      explanationFa: 'مسیر فایل‌های PHP به تیل‌ویند معرفی نشده، در نتیجه کلاس‌ها توی فایل استایل کامپایل نشدن!'
    },
    freelanceTip: 'به کارفرما بگو سایتی که می‌سازی از فریم‌ورک‌های سنگین مثل بوت‌استرپ یا استایل‌های المنتور استفاده نمی‌کنه و حجم CSS زیر ۳۰ کیلوبایته.',
    asciiDiagram: `[اسکن تمام فایل‌های PHP و JS قالب]
                 │
                 ▼
[استخراج فقط کلاس‌های استفاده‌شده: bg-gold, p-4]
                 │
                 ▼
[فایل فوق‌سبک style.css: حجم کمتر از ۳۰ کیلوبایت]`,
    injectionTarget: 'فایل tailwind.config.js یا تنظیمات @import در globals.css',
    cursorPrompt: `[نقش]: مهندس پرفورمنس فرانت‌اند وردپرس و متخصص Tailwind CSS.
[زمینه]: پروژه وردپرس با کامپایلر لحظه‌ای Tailwind JIT در @tailwind.config.js.
[وظیفه]: پیکربندی کامپایلر را به گونه‌ای بنویس که تمام فایل‌های ریشه، پوشه templates، تمپلیت‌پارت‌ها و بلاک‌های گوتنبرگ را اسکن کند.
[شروط سلبی الزامی]:
- هرگز مسیر پوشه‌های حجیم wp-admin، wp-includes و node_modules را در content قرار نده.
- از لود کردن استایل‌های بلااستفاده (Dead CSS) پرهیز کن.
[خروجی]: فایل تنظیمات دقیق و تست شده برای وردپرس.`,
    claudePrompt: `من می‌خواهم استایل‌های Tailwind v4 را در قالب اختصاصی وردپرس بیلد کنم. کانفیگ اسکن فایل‌ها را به گونه‌ای بنویس که تمام کدهای داخل فایل‌های .php بدون مشکل استخراج شوند.`,
    debugPrompt: `کلاس‌های جدید تیل‌ویند در مرورگر نمایش داده نمی‌شوند. لطفاً مسیر فایل فعلی را در بخش content کانفیگ تیل‌ویند اضافه کن و دستور بیلد مجدد را بگو.`,
    howToTest: {
      steps: [
        'در یکی از فایل‌های PHP یک کلاس تصادفی مثل bg-red-500 اضافه کنید.',
        'دستور بیلد یا واچ را اجرا کرده و فایل خروجی dist/style.css را چک کنید.',
        'آیا کلاس bg-red-500 در فایل نهایی ظاهر شده است؟ اگر بله، موتور JIT به درستی کار می‌کند.'
      ],
      expectedResult: 'کلاس‌های جدید فوراً در خروجی CSS کامپایل شده و در صفحه رندر می‌شوند.',
      redFlags: ['بزرگ شدن حجم فایل CSS به بالای ۵۰۰ کیلوبایت به دلیل اسکن اشتباه node_modules']
    },
    shortDefinition: 'موتور پردازشی مدرن Tailwind که کلاس‌های CSS را صرفاً بر اساس کدهای استفاده‌شده در قالب در کسری از ثانیه تولید می‌کند.',
    deepExplanation: 'با JIT در قالب‌های وردپرس، چه از کلاس‌های پیش‌فرض استفاده کنید و چه مقادیر دلخواه بنویسید، حجم فایل CSS نهایی بسیار سبک باقی می‌ماند.',
    vibeCodingImpact: 'اگر مسیر فایل‌های PHP قالب را به درستی تنظیم نکنید، کلاس‌هایی که هوش مصنوعی در تمپلیت‌ها می‌نویسد در CSS نهایی لود نمی‌شوند.',
    goldenPrompt: 'پیکربندی Tailwind CSS را برای یک پوسته وردپرس اختصاصی تنظیم کن به طوری که تمام فایل‌های .php در پوشه قالب را به درستی اسکن کرده و فایل سبک خروجی دهد.',
    codeSnippet: {
      language: 'javascript',
      description: 'تنظیم مسیر فایل‌های وردپرس در پیکربندی تیل‌ویند',
      runContext: 'tailwind.config.js / globals.css',
      code: "module.exports = {\n  content: [\n    './*.php',\n    './templates/**/*.php',\n    './parts/**/*.html',\n    './src/**/*.{js,jsx,ts,tsx}'\n  ],\n  theme: { extend: {} },\n  plugins: [],\n}"
    },
    prerequisiteTermIds: ['design-tokens'],
    relatedTermIds: ['block-json', 'wp-scripts', 'asset-enqueue'],
    seoKeywords: ['تیل ویند در وردپرس', 'tailwind jit', 'استایل نویسی مدرن قالب', 'tailwind v4']
  },
  {
    id: 'block-json',
    termEn: 'block.json Metadata',
    termFa: 'فایل شناسنامه استاندارد بلاک گوتنبرگ',
    category: 'frontend',
    level: 'intermediate',
    phonetic: 'بِلاک جِی-سان',
    tags: ['gutenberg', 'blocks', 'metadata', 'json'],
    sequenceOrder: 14,
    learningStation: 'station-2',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'designer'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    elevatorPitch: 'کارت ملی و شناسنامه یک قطعه لگوی اختصاصی در وردپرس؛ تا بدون نیاز به المنتور، بلاک خود را در ادیتور داشته باشید.',
    beginnerTrap: 'استفاده از روش‌های منسوخ شده جاوااسکریپتی قدیمی بدون فایل block.json؛ که با هر آپدیت هسته وردپرس بلاک‌ها خراب و قفل می‌شوند!',
    analogy: 'مثل کارت ملی و شناسنامه یک قطعه لگو است؛ به وردپرس می‌گوید این قطعه چه نامی دارد، چه رنگی است و کجای صفحه اجازه دارد قرار بگیرد.',
    humanQuestion: 'چطور بدون نصب افزونه‌های سنگینی مثل المنتور، در ادیتور وردپرس بلاک اختصاصی و سبک بسازیم؟',
    realPain: 'اگر به جای block.json کدهای قدیمی بنویسی، با اولین آپدیت وردپرس بلاک‌های سایتت قفل و خراب می‌شوند.',
    commonAiError: {
      errorSnippet: 'Block "hs/card" is missing schema or apiVersion in block.json',
      explanationFa: 'هوش مصنوعی شناسنامه استاندارد بلاک رو ناقص نوشته و ادیتور نمیتونه بلاک رو پیدا کنه!'
    },
    freelanceTip: 'طراحی سایت با بلاک‌های اختصاصی گوتنبرگ، آینده وردپرس است؛ کارفرما شیفته این می‌شود که نیازی به المنتور و لایسنس ندارد.',
    asciiDiagram: `[فایل block.json: نام، آیکون، نسخه API 3]
                   │
    ┌──────────────┴──────────────┐
    ▼                             ▼
ادیتور گوتنبرگ (ویرایش آسان)    رندر سریع و سبک در فرانت‌اند`,
    injectionTarget: 'پوشه هر بلاک اختصاصی در src/blocks/block-name/block.json',
    cursorPrompt: `[نقش]: توسعه‌دهنده تخصصی سیستم بلاک وردپرس (Gutenberg Core Engineer).
[زمینه]: وردپرس ۶.۷ و استاندارد Block API Version 3.
[وظیفه]: فایل شناسنامه @block.json را برای بلاک [نام بلاک مثلاً کارت قیمت‌گذاری لوکس] بساز.
[شروط سلبی الزامی]:
- نسخه apiVersion حتماً باید ۳ باشد.
- آدرس فایل‌های اسکریپت و استایل با پیشوند file:./ به فایل‌های کامپایل‌شده اشاره کند.
- تمام فیلدهای ورودی کاربر (Attributes) با تعیین نوع دقیق داده تعریف شوند.
[خروجی]: فایل معتبر JSON با آدرس اسکیما رسمی schemas.wp.org.`,
    claudePrompt: `یک فایل block.json استاندارد برای بلاک اختصاصی ایجاد کن که دارای خصوصیات title، subtitle و buttonText باشد و از استانداردهای نوین وردپرس پیروی کند.`,
    debugPrompt: `ادیتور وردپرس پیام می‌دهد که شناسنامه بلاک نامعتبر است. ساختار block.json را با اسکیما رسمی بررسی کن و خطای نحوی را برطرف ساز.`,
    howToTest: {
      steps: [
        'فایل block.json را ذخیره کرده و در functions.php با تابع register_block_type_from_metadata رجیستر کنید.',
        'یک برگه جدید در پیشخوان وردپرس باز کنید و دکمه + (افزودن بلاک) را بزنید.',
        'نام بلاک را جستجو کنید؛ آیا آیکون و عنوان بلاک در لیست گوتنبرگ نمایش داده می‌شود؟'
      ],
      expectedResult: 'بلاک اختصاصی بدون هیچ خطایی در پنل ادیتور گوتنبرگ لود می‌شود.',
      redFlags: ['پیام Block validation failed در کنسول ادیتور']
    },
    shortDefinition: 'فایل استاندارد رسمی وردپرس که خصوصیات، شناسه، استایل‌ها، و اسکریپت‌های یک بلاک گوتنبرگ را به هسته معرفی می‌کند.',
    deepExplanation: 'با یک فایل block.json، نسخه API، نام بلاک، دسته‌بندی، آیکون و فایل‌های رندر سمت سرور و کلاینت تعریف می‌شوند.',
    vibeCodingImpact: 'یک وایب‌کدر مدرن مستقیماً با دستور ساخت block.json v3 کد را در کوتاه‌ترین زمان دریافت می‌کند.',
    goldenPrompt: 'یک فایل block.json استاندارد برای وردپرس ۶.۵+ ایجاد کن. بلاک اختصاصی: hs/feature-card با خصوصیات عنوان، متن و آیکون و نسخه apiVersion 3.',
    codeSnippet: {
      language: 'json',
      description: 'نمونه فایل استاندارد block.json برای بلاک اختصاصی',
      runContext: 'src/blocks/feature-card/block.json',
      code: "{\n  \"$schema\": \"https://schemas.wp.org/trunk/block.json\",\n  \"apiVersion\": 3,\n  \"name\": \"hs/feature-card\",\n  \"title\": \"کارت ویژگی لوکس\",\n  \"category\": \"design\",\n  \"icon\": \"star-filled\",\n  \"editorScript\": \"file:./index.js\",\n  \"style\": \"file:./style-index.css\"\n}"
    },
    prerequisiteTermIds: ['tailwind-jit'],
    relatedTermIds: ['dynamic-blocks', 'wp-scripts'],
    seoKeywords: ['block json', 'بلاک گوتنبرگ', 'توسعه بلاک وردپرس', 'ساخت بلاک بدون افزونه']
  },
  {
    id: 'wp-scripts',
    termEn: '@wordpress/scripts',
    termFa: 'بسته رسمی بیلد و ابزارهای توسعه وردپرس',
    category: 'frontend',
    level: 'intermediate',
    phonetic: 'اَت-وردپرس اِسکریپتس',
    tags: ['npm', 'build-tools', 'webpack', 'react'],
    sequenceOrder: 15,
    learningStation: 'station-2',
    readingTimeMinutes: 1,
    targetPersonas: ['developer'],
    isNoCodeFriendly: false,
    isCritical5: false,
    isLanding24h: false,
    elevatorPitch: 'کارخانه اتوماتیک بسته‌بندی ری‌اکت در وردپرس؛ بدون نیاز به نوشتن حتی یک خط کانفیگ پیچیده وب‌پک.',
    beginnerTrap: 'درگیر شدن با کانفیگ‌های سنگین Webpack دستی که ساعت‌ها زمان را می‌سوزاند و در نهایت با ده‌ها ارور JSX همراه است!',
    analogy: 'مثل یک کارخانه بسته‌بندی تمام‌اتوماتیک است؛ تو کدهای ری‌اکت و جاوااسکریپت را به آن تحویل می‌دهی، خودش تر و تمیز بسته‌بندی می‌کند و تحویل وردپرس می‌دهد!',
    humanQuestion: 'چرا قبلاً روزها طول می‌کشید کدهای ری‌اکت در وردپرس کامپایل شوند اما الان با یک دستور انجام می‌شود؟',
    realPain: 'بدون این بسته، باید ساعت‌ها وقت برای کانفیگ دستی Webpack تلف کنی و در آخر هم به ده‌ها ارور عجیب بخوری.',
    commonAiError: {
      errorSnippet: 'Cannot use JSX without a proper loader configuration',
      explanationFa: 'هوش مصنوعی فراموش کرده پکیج wp-scripts رو نصب کنه و ادیتور سینتکس JSX رو نمی‌شناسه!'
    },
    freelanceTip: 'استفاده از پکیج رسمی وردپرس تضمین می‌کند کدهای فرانت پروژه با تمام آپدیت‌های آینده وردپرس هماهنگ بماند.',
    asciiDiagram: `[کدهای مدرن React / JSX / TypeScript]
                   │
                   ▼
[@wordpress/scripts build (پکیج رسمی تیم هسته)]
                   │
                   ▼
[پوشه build/ با فایل‌های آماده و مپینگ وابستگی‌های خودکار]`,
    injectionTarget: 'فایل package.json در پوشه قالب یا پلاگین اختصاصی',
    cursorPrompt: `[نقش]: مهندس ابزارهای بیلد مدرن وردپرس (WordPress Tooling Engineer).
[زمینه]: پروژه توسعه بلاک گوتنبرگ با ری‌اکت.
[وظیفه]: فایل @package.json را با پکیج رسمی @wordpress/scripts و اسکریپت‌های start و build پیکربندی کن.
[شروط سلبی الزامی]:
- از نصب ابزارهای تکراری یا وب‌پک دستی خودداری کن.
- پکیج‌های اضافی که در خود @wordpress/scripts ادغام هستند را در devDependencies تکرار نکن.
[خروجی]: فایل استاندارد package.json آماده نصب با npm i.`,
    claudePrompt: `دستورالعمل کامل راه‌اندازی محیط توسعه فرانت‌اند مدرن وردپرس با پکیج رسمی @wordpress/scripts را به همراه دستورات خط فرمان گام‌به‌گام بنویس.`,
    debugPrompt: `دستور npm run build ارور JSX loader می‌دهد. ساختار اسکریپت‌های package.json را با استانداردهای نسخه جدید @wordpress/scripts هماهنگ کن.`,
    howToTest: {
      steps: [
        'در ترمینال دستور npm run build را اجرا کنید.',
        'بررسی کنید آیا پوشه build/ ساخته شده و دو فایل index.js و index.asset.php در آن ایجاد شده‌اند یا خیر.',
        'فایل index.asset.php را باز کنید و ببینید آیا وابستگی‌های react و wp-blocks به صورت خودکار شناسایی شده‌اند.'
      ],
      expectedResult: 'کدهای فرانت بدون هیچ خطایی کامپایل شده و در پوشه build قرار می‌گیرند.',
      redFlags: ['خطای ناشناخته بودن تگ‌های JSX هنگام اجرای دستور build']
    },
    shortDefinition: 'بسته رسمی تیم هسته وردپرس برای کامپایل کدهای React، JSX، TypeScript و SCSS بدون نیاز به کانفیگ دستی Webpack.',
    deepExplanation: 'با نصب پکیج @wordpress/scripts، با دو دستور npm start و npm run build تمام کامپایل‌ها به صورت خودکار انجام می‌گیرد.',
    vibeCodingImpact: 'دانستن نام این پکیج کار بیلد بلاک‌ها را در ۵ دقیقه جمع می‌کند.',
    goldenPrompt: 'یک ساختار پروژه استاندارد برای ساخت بلاک گوتنبرگ با استفاده از پکیج رسمی @wordpress/scripts آماده کن.',
    codeSnippet: {
      language: 'json',
      description: 'اسکریپت‌های استاندارد package.json در توسعه بلاک وردپرس',
      runContext: 'package.json',
      code: "{\n  \"scripts\": {\n    \"start\": \"wp-scripts start\",\n    \"build\": \"wp-scripts build\"\n  },\n  \"devDependencies\": {\n    \"@wordpress/scripts\": \"^27.0.0\"\n  }\n}"
    },
    prerequisiteTermIds: ['block-json'],
    relatedTermIds: ['block-json', 'dynamic-blocks'],
    seoKeywords: ['wp scripts', 'بیلد بلاک گوتنبرگ', 'کامپایل ری اکت در وردپرس', 'ابزارهای توسعه وردپرس']
  },
  {
    id: 'dynamic-blocks',
    termEn: 'Dynamic Blocks (SSR)',
    termFa: 'بلاک‌های داینامیک با رندر سمت سرور',
    category: 'frontend',
    level: 'advanced',
    phonetic: 'دای-نامیک بِلاکس',
    tags: ['gutenberg', 'php-render', 'ssr', 'seo'],
    sequenceOrder: 16,
    learningStation: 'station-2',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'designer'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    elevatorPitch: 'بلاک‌هایی که در هر بار باز شدن صفحه، تازه‌ترین اطلاعات را مستقیم از دیتابیس می‌خوانند و همیشه زنده هستند.',
    beginnerTrap: 'استفاده از بلاک استاتیک برای نمایش پست‌ها؛ وقتی مقاله جدیدی منتشر کنید، بلاک تغییر نمی‌کند مگر اینکه برگه را دوباره دستی ویرایش و ذخیره کنید!',
    analogy: 'مثل صفحه تابلو اعلانات پرواز در فرودگاه است؛ هر مسافری که می‌رسد، آخرین وضعیت پروازها را زنده می‌بیند، نه عکس پروازهای پارسال را!',
    humanQuestion: 'چطور بلاکی بسازم که آخرین محصولات یا پست‌های جدید را به صورت خودکار و زنده نشان دهد؟',
    realPain: 'اگر بلاک استاتیک بسازی، وقتی پست جدیدی منتشر می‌کنی، محتوای صفحه آپدیت نمی‌شود مگر اینکه تک‌تک صفحات را باز کنی و دکمه ویرایش را بزنی!',
    commonAiError: {
      errorSnippet: 'This block contains unexpected or invalid content (Block Validation Error)',
      explanationFa: 'هوش مصنوعی کد بلاک استاتیک رو تغییر داده و ادیتور فکر می‌کنه دیتا مخدوش شده!'
    },
    freelanceTip: 'بلاک‌های داینامیک بهترین راهکار برای ساخت بخش وبلاگ، لیست اساتید یا محصولات تخفیف‌دار اختصاصی هستند.',
    asciiDiagram: `[کاربر وارد صفحه می‌شود]
            │
            ▼
[اجرای فایل render.php در سرور (کوئری زنده)]
            │
            ▼
[تحویل جدیدترین مقالات بدون نیاز به ویرایش دستی برگه]`,
    injectionTarget: 'فایل render.php در پوشه بلاک اختصاصی',
    cursorPrompt: `[نقش]: متخصص بلاک‌های سرور-رندر گوتنبرگ (Gutenberg SSR Specialist).
[زمینه]: بلاک داینامیک وردپرس با فایل @render.php.
[وظیفه]: فایل رندر سمت سرور را برای نمایش ۳ مقاله برگزیده با کش transients بنویس.
[شروط سلبی الزامی]:
- در فایل render.php حتماً بعد از کوئری تابع wp_reset_postdata() را فراخوانی کن تا کوئری اصلی صفحه به هم نریزد.
- خروجی‌ها را با esc_html و esc_url فرار بده.
[خروجی]: کدهای استاندارد PHP تمیز برای render.php.`,
    claudePrompt: `من می‌خواهم یک بلاک داینامیک برای نمایش دوره‌های آموزشی در وردپرس بسازم. ساختار block.json با معرفی فایل render.php و کدهای کامل فایل رندر را پیاده‌سازی کن.`,
    debugPrompt: `بلاک پس از نمایش پست‌ها، باعث به هم ریختن صفحه بعدی و عدم نمایش فوتر شده است. مطمئن شو wp_reset_postdata فراخوانی شده و لوپ کوئری بسته شده است.`,
    howToTest: {
      steps: [
        'بلاک را در یک برگه قرار داده و منتشر کنید.',
        'یک مقاله تستی جدید در بخش نوشته‌های وردپرس منتشر کنید.',
        'برگه را در مرورگر باز کنید؛ آیا مقاله جدید بدون ویرایش برگه بلافاصله ظاهر شد؟'
      ],
      expectedResult: 'مقالات به صورت زنده و آنی در برگه نمایش داده می‌شوند.',
      redFlags: ['نیاز به باز کردن ادیتور برگه برای دیدن مقالات جدید']
    },
    shortDefinition: 'بلاک‌های گوتنبرگی که خروجی HTML آن‌ها در زمان لود صفحه توسط PHP تولید می‌شود، به طوری که داده‌های جدید بلافاصله منعکس می‌گردند.',
    deepExplanation: 'بلاک داینامیک با داشتن یک فایل render.php، در هر بار باز شدن صفحه کوئری را تازه رندر می‌کند.',
    vibeCodingImpact: 'دانستن تفاوت بلاک استاتیک و داینامیک مانع از خطای وحشتناک خرابی بلاک (Block Validation Failed) در پنل وردپرس می‌شود.',
    goldenPrompt: 'یک بلاک داینامیک گوتنبرگ برای نمایش ۳ پست آخر وبلاگ بساز با block.json و فایل render.php استاندارد.',
    codeSnippet: {
      language: 'php',
      description: 'نمونه فایل render.php برای بلاک داینامیک گوتنبرگ',
      runContext: 'render.php',
      code: "<?php\n$latest = new WP_Query(['posts_per_page' => 3, 'post_status' => 'publish']);\nif ($latest->have_posts()) :\n    echo '<div class=\"grid md:grid-cols-3 gap-6\">';\n    while ($latest->have_posts()) : $latest->the_post();\n        echo '<article class=\"p-5 rounded-2xl bg-surface border border-white/10\">' . get_the_title() . '</article>';\n    endwhile;\n    echo '</div>';\n    wp_reset_postdata();\nendif;"
    },
    prerequisiteTermIds: ['block-json'],
    relatedTermIds: ['block-json', 'wp-scripts'],
    seoKeywords: ['بلاک داینامیک', 'dynamic blocks', 'رندر سمت سرور گوتنبرگ', 'render php بلاک']
  },
  {
    id: 'asset-enqueue',
    termEn: 'Asset Enqueueing (wp_enqueue_script)',
    termFa: 'بارگذاری اصولی استایل و اسکریپت در وردپرس',
    category: 'frontend',
    level: 'beginner',
    phonetic: 'اَسِت این-کیو',
    tags: ['php', 'scripts', 'styles', 'optimization'],
    sequenceOrder: 17,
    learningStation: 'station-2',
    readingTimeMinutes: 1,
    targetPersonas: ['developer', 'beginner', 'designer'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: true,
    elevatorPitch: 'ایستگاه مرکزی لود استایل‌ها و اسکریپت‌ها؛ برای اینکه کدهای قدیمی در مرورگر کاربر کش نمانند و تداخل ایجاد نشود.',
    beginnerTrap: 'گذاشتن مستقیم تگ link یا script در فایل header.php؛ مرورگر کاربر فایل قدیمی را کش می‌کند و هر تغییری بدهید مشتری آن را به هم ریخته می‌بیند!',
    analogy: 'مثل صف منظم سوار شدن به هواپیما در فرودگاه است؛ به جای اینکه مسافرها سرخود بدوند، منظم با کارت پرواز سوار می‌شوند تا پرواز به موقع انجام شود.',
    humanQuestion: 'چرا نباید کدهای استایل و جاوااسکریپت را مستقیماً در هدر یا فوتر قالب بنویسیم؟',
    realPain: 'اگر اسکریپت‌ها را هاردکد کنی، مرورگر کاربر فایل‌های قدیمی را کش می‌کند؛ سایت را آپدیت می‌کنی ولی مشتری ظاهر به هم ریخته را می‌بیند!',
    commonAiError: {
      errorSnippet: 'Uncaught ReferenceError: jQuery is not defined at header.php:12',
      explanationFa: 'هوش مصنوعی فایل رو مستقیم تو هدر گذاشته قبل از اینکه فایل‌های پیش‌نیاز لود بشن!'
    },
    freelanceTip: 'با متد اصولی wp_enqueue_style همراه با تابع filemtime، مشکل کش مرورگر مشتریان پس از هر تغییر به صفر می‌رسد.',
    asciiDiagram: `[هوک استاندارد wp_enqueue_scripts]
               │
   ┌───────────┴───────────┐
   ▼                       ▼
بررسی تاریخ ویرایش فایل   لود به ترتیب وابستگی
(filemtime -> کش شکنی)     (بدون خطای Undefined)`,
    injectionTarget: 'فایل functions.php یا فایل inc/enqueue.php',
    cursorPrompt: `[نقش]: مهندس پرفورمنس هسته وردپرس.
[زمینه]: فایل @functions.php قالب اختصاصی.
[وظیفه]: تابع استاندارد اتصال استایل‌ها و اسکریپت‌ها را با هوک wp_enqueue_scripts بنویس.
[شروط سلبی الزامی]:
- هرگز نسخه ثابت مانند '1.0' نگذار؛ حتماً از filemtime برای شکستن خودکار کش بعد از هر ذخیره استفاده کن.
- اسکریپت‌ها باید دارای پارامتر in_footer = true یا صفت defer باشند.
- پیشوند اختصاصی hs_ برای هندل‌ها رعایت شود.
[خروجی]: قطعه کد آماده با کامنت توضیحی.`,
    claudePrompt: `کد استاندارد لود کردن استایل اصلی قالب و یک فایل جاوااسکریپت ماژولار را با استفاده از wp_enqueue_scripts به نحوی بنویس که مشکل کش ماندن فایل‌ها در مرورگر مشتری برای همیشه حل شود.`,
    debugPrompt: `اسکریپت لود شده خطای وابستگی می‌دهد. مطمئن شو آرایه dependencies در تابع wp_enqueue_script به درستی تنظیم شده و اسکریپت در فوتر اجرا می‌شود.`,
    howToTest: {
      steps: [
        'در فایل style.css یک تغییر کوچک بدهید و ذخیره کنید.',
        'سورس صفحه (View Source) را در مرورگر باز کنید و آدرس فایل استایل را ببینید.',
        'آیا در انتهای آدرس پارامتری شبیه به ver=1731839210 (زمان ویرایش فایل) اضافه شده است؟'
      ],
      expectedResult: 'با هر ذخیره‌سازی، شماره نسخه به صورت خودکار تغییر کرده و کاربر بدون پاک کردن دستی کش مرورگر، آخرین استایل را می‌بیند.',
      redFlags: ['داشتن نسخه ثابت ver=1.0 که ماه‌ها کش می‌ماند']
    },
    shortDefinition: 'متد رسمی و استاندارد رجیستر کردن فایل‌های CSS و JS در صف لود وردپرس به همراه مدیریت وابستگی‌ها و نسخه فایل.',
    deepExplanation: 'تابع wp_enqueue_style و wp_enqueue_script تضمین می‌کنند که فایل‌ها تکراری لود نشوند و تقدم لود رعایت شود.',
    vibeCodingImpact: 'هوش مصنوعی کم‌تجربه کد اسکریپت را مستقیماً در header.php هاردکد می‌کند که باعث تداخل با افزونه‌های کش می‌شود.',
    goldenPrompt: 'تابعی برای هوک wp_enqueue_scripts در functions.php بنویس که فایل استایل را لود کرده و نسخه فایل را با filemtime تنظیم کند.',
    codeSnippet: {
      language: 'php',
      description: 'کد استاندارد اضافه کردن استایل با حل خودکار مشکل کش نسخه',
      runContext: 'functions.php',
      code: "add_action( 'wp_enqueue_scripts', function() {\n    $css_path = get_stylesheet_directory() . '/dist/style.css';\n    $version  = file_exists( $css_path ) ? filemtime( $css_path ) : '1.0.0';\n    wp_enqueue_style( 'hs-main-style', get_stylesheet_directory_uri() . '/dist/style.css', [], $version );\n});"
    },
    prerequisiteTermIds: ['tailwind-jit'],
    relatedTermIds: ['tailwind-jit', 'block-json'],
    seoKeywords: ['wp_enqueue_script', 'لود اسکریپت در وردپرس', 'افزودن استایل به قالب', 'کش فایل های قالب']
  },
  {
    id: 'fluid-typography',
    termEn: 'Fluid Typography (clamp)',
    termFa: 'تایپوگرافی شناور بدون مدیاکوئری',
    category: 'frontend',
    level: 'intermediate',
    phonetic: 'فلو-ئید تای-پوگ-را-فی',
    tags: ['css', 'clamp', 'responsive', 'typography'],
    sequenceOrder: 18,
    learningStation: 'station-2',
    readingTimeMinutes: 1,
    targetPersonas: ['designer', 'developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: true,
    elevatorPitch: 'فونت کشسانی که مثل لاستیک نرم با بزرگ و کوچک شدن صفحه نمایش تغییر سایز می‌دهد، بدون نیاز به ده‌ها خط مدیاکوئری.',
    beginnerTrap: 'اندازه فونت ثابت برای تیترها؛ تیتر در لپ‌تاپ زیباست اما در گوشی از صفحه بیرون می‌زند و اسکرول افقی خرابکارانه ایجاد می‌کند!',
    analogy: 'مثل کش پول است؛ هر چه صفحه نمایش بزرگ‌تر شود به نرمی کش می‌آید، نه اینکه پله‌پله و با شوک ناگهانی بپرد!',
    humanQuestion: 'چطور کاری کنم فونت سایتم روی گوشی‌های کوچک، لپ‌تاپ و تلویزیون‌های بزرگ بدون پرش متناسب باشد؟',
    realPain: 'بدون این تکنیک، باید برای ۵۰ سایز مختلف نمایشگر کد بنویسی؛ در غیر این صورت تیتر روی گوشی از کادر بیرون می‌زند!',
    commonAiError: {
      errorSnippet: 'Headline overflow horizontally on mobile screens (viewport width < 380px)',
      explanationFa: 'هوش مصنوعی اندازه ثابت گذاشته و تیتر روی آیفون نصفه دیده میشه!'
    },
    freelanceTip: 'تایپوگرافی شناور زیبایی بصری لندینگ‌های لوکس را تضمین می‌کند و رضایت صد درصدی کارفرما را به همراه دارد.',
    asciiDiagram: `صفحه نمایش ۳۲۰px (گوشی)  ──> حداقل فونت: ۲۸px
            │
            ▼ (تغییر نرم و پیوسته با تابع clamp)
            │
نمایشگر ۱۹۲۰px (دسکتاپ) ──> حداکثر فونت: ۶۴px`,
    injectionTarget: 'فایل استایل تایپوگرافی یا کلاس‌های دلخواه Tailwind',
    cursorPrompt: `[نقش]: طراح ارشد تایپوگرافی واکنش‌گرا (Responsive Typography Engineer).
[زمینه]: استایل تیترهای قالب وردپرس.
[وظیفه]: فونت تیتر H1 را با تابع clamp به صورت تایپوگرافی کاملاً شناور (Fluid) تعریف کن.
[شروط سلبی الزامی]:
- حداقل سایز نباید کمتر از ۲۴ پیکسل و حداکثر بیشتر از ۶۰ پیکسل باشد.
- از فرمول متناسب با واحد vw همراه با rem برای پشتیبانی از زوم کاربران با ضعف بینایی استفاده کن.
- از نوشتن مدیاکوئری‌های متعدد و شکننده پرهیز کن.
[خروجی]: کلاس CSS تست‌شده و استاندارد.`,
    claudePrompt: `مقیاس تایپوگرافی شناور برای H1، H2 و متن بدنه را با تابع CSS clamp() فرمول‌نویسی کن به طوری که روی موبایل تا مانیتورهای ۴K همیشه تناسب عالی داشته باشد.`,
    debugPrompt: `تیتر در گوشی‌های خیلی کوچک (عرض ۳۲۰ پیکسل) دوخطی شده و بیرون می‌زند. حداقل اندازه (حداقل مقدار clamp) را به ۱.۷۵rem کاهش بده.`,
    howToTest: {
      steps: [
        'در مرورگر کلید F12 را زده و حالت Device Toolbar (آیکون گوشی) را فعال کنید.',
        'لبه کادر را با موس بگیرید و عرض صفحه را به آرامی کم و زیاد کنید.',
        'آیا اندازه فونت کلمات به نرمی و بدون هیچ پرش ناگهانی تغییر اندازه می‌دهد؟'
      ],
      expectedResult: 'فونت در تمام عرض‌ها کاملاً هماهنگ و بدون بیرون‌زدگی افقی تغییر سایز می‌دهد.',
      redFlags: ['ایجاد اسکرول افقی در پایین صفحه گوشی به دلیل اندازه بزرگ فونت']
    },
    shortDefinition: 'روشی در CSS مدرن که در آن اندازه فونت با فرمول clamp(حداقل, ترجیحی, حداکثر) با عرض نمایشگر به صورت نرم تغییر سایز می‌دهد.',
    deepExplanation: 'تابع clamp() به مرورگر اجازه می‌دهد سایز فونت را متناسب با عرض صفحه به نرمی کوچک و بزرگ کند.',
    vibeCodingImpact: 'هوش مصنوعی اگر هدایت نشود، برای هر بریک‌پوینت کلاس‌های جداگانه می‌نویسد. وایب‌کدر با درخواست تایپوگرافی فلوئید خروجی تمیز می‌گیرد.',
    goldenPrompt: 'برای تیترهای اصلی قالب از فرمول تایپوگرافی شناور با تابع clamp در CSS استفاده کن: حداقل سایز ۲۴ پیکسل و حداکثر ۶۴ پیکسل.',
    codeSnippet: {
      language: 'css',
      description: 'تعریف اندازه فونت شناور با تابع clamp',
      runContext: 'typography.css',
      code: "h1.fluid-title {\n  font-size: clamp(1.75rem, 4vw + 1rem, 4rem);\n  line-height: 1.15;\n}"
    },
    prerequisiteTermIds: ['tailwind-jit'],
    relatedTermIds: ['tailwind-jit', 'design-tokens'],
    seoKeywords: ['تایپوگرافی شناور', 'fluid typography', 'تابع clamp در css', 'فونت واکنشگرا']
  }
];
