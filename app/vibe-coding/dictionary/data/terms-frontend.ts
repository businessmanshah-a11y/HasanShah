import { EncyclopediaTerm } from './types';

export const frontendTerms: EncyclopediaTerm[] = [
  {
    id: 'tailwind-jit',
    termEn: 'Tailwind CSS JIT Engine',
    termFa: 'موتور کامپایل لحظه‌ای تیل‌ویند (Just-In-Time)',
    category: 'frontend',
    level: 'beginner',
    phonetic: 'تیل ویند جیت',
    tags: ['tailwind', 'css', 'compilation', 'performance'],
    shortDefinition: 'موتور پردازشی مدرن Tailwind که کلاس‌های CSS را صرفاً بر اساس کدهای استفاده‌شده در فایل‌های تمپلیت در کسری از ثانیه تولید می‌کند.',
    deepExplanation: 'در نسخه‌های قدیمی CSS، تمام کلاس‌ها از قبل در یک فایل چند مگابایتی کامپایل می‌شدند. با JIT در قالب‌های وردپرس، چه از کلاس‌های پیش‌فرض استفاده کنید و چه مقادیر دلخواه بنویسید، حجم فایل CSS نهایی سایت تنها در حد چند کیلوبایت باقی می‌ماند.',
    vibeCodingImpact: 'اگر مسیر فایل‌های PHP قالب را در پیکربندی Tailwind به درستی تنظیم نکنید، کلاس‌هایی که هوش مصنوعی در تمپلیت‌ها می‌نویسد در CSS نهایی لود نشده و سایت بدون استایل به نمایش درمی‌آید.',
    goldenPrompt: 'پیکربندی Tailwind CSS را برای یک پوسته وردپرس اختصاصی تنظیم کن به طوری که تمام فایل‌های .php در پوشه قالب و فایل‌های جاوااسکریپت و بلاک‌های گوتنبرگ را به درستی اسکن کرده و فایل سبک مینیمایز شده خروجی دهد.',
    codeSnippet: {
      language: 'javascript',
      description: 'تنظیم مسیر فایل‌های وردپرس در پیکربندی تیل‌ویند',
      runContext: 'tailwind.config.js / globals.css',
      code: `module.exports = {\n  content: [\n    './*.php',\n    './templates/**/*.php',\n    './parts/**/*.html',\n    './src/**/*.{js,jsx,ts,tsx}'\n  ],\n  theme: { extend: {} },\n  plugins: [],\n}`
    },
    relatedTermIds: ['block-json', 'wp-scripts', 'asset-enqueue'],
    seoKeywords: ['تیل ویند در وردپرس', 'tailwind jit', 'استایل نویسی مدرن قالب', 'tailwind v4']
  },
  {
    id: 'block-json',
    termEn: 'block.json Metadata',
    termFa: 'فایل شناسنامه استاندارد بلاک گوتنبرگ',
    category: 'frontend',
    level: 'intermediate',
    phonetic: 'بلاک جیسون',
    tags: ['gutenberg', 'blocks', 'metadata', 'json'],
    shortDefinition: 'فایل استاندارد رسمی وردپرس که خصوصیات، شناسه، استایل‌ها، و اسکریپت‌های یک بلاک گوتنبرگ را به هسته معرفی می‌کند.',
    deepExplanation: 'از وردپرس ۵.۸ به بعد، روش قدیمی رجیستر کردن بلاک با توابع پیچیده پی‌اچ‌پی منسوخ شد. حالا با یک فایل `block.json`، نسخه API، نام بلاک، دسته‌بندی، آیکون، اتریبیوت‌ها و فایل‌های رندر سمت سرور و کلاینت تعریف می‌شوند.',
    vibeCodingImpact: 'هوش مصنوعی اگر به درستی پرامپت نشود، ممکن است بلاک‌ها را به سبک قدیمی سال ۲۰۱۹ بسازد. یک وایب‌کدر مدرن مستقیماً با دستور ساخت `block.json v3` کد را در کوتاه‌ترین زمان دریافت می‌کند.',
    goldenPrompt: 'یک فایل block.json استاندارد برای وردپرس ۶.۵+ ایجاد کن. بلاک اختصاصی: hs/feature-card. خصوصیات: عنوان، متن و آیکون. از apiVersion 3 استفاده کن و فایل‌های editorScript و style را به درستی آدرس‌دهی نما.',
    codeSnippet: {
      language: 'json',
      description: 'نمونه فایل استاندارد block.json برای بلاک اختصاصی',
      runContext: 'src/blocks/feature-card/block.json',
      code: `{\n  "$schema": "https://schemas.wp.org/trunk/block.json",\n  "apiVersion": 3,\n  "name": "hs/feature-card",\n  "title": "کارت ویژگی لوکس",\n  "category": "design",\n  "icon": "star-filled",\n  "editorScript": "file:./index.js",\n  "style": "file:./style-index.css"\n}`
    },
    relatedTermIds: ['dynamic-blocks', 'wp-scripts', 'tailwind-jit'],
    seoKeywords: ['block json', 'بلاک گوتنبرگ', 'توسعه بلاک وردپرس', 'ساخت بلاک بدون افزونه']
  },
  {
    id: 'wp-scripts',
    termEn: '@wordpress/scripts',
    termFa: 'بسته رسمی بیلد و ابزارهای توسعه وردپرس',
    category: 'frontend',
    level: 'intermediate',
    phonetic: 'وردپرس اسکریپتس',
    tags: ['npm', 'build-tools', 'webpack', 'react'],
    shortDefinition: 'بسته رسمی تیم هسته وردپرس برای کامپایل کدهای React، JSX، TypeScript و SCSS بدون نیاز به کانفیگ دستی Webpack.',
    deepExplanation: 'توسعه‌دهندگان در گذشته ساعت‌ها صرف کانفیگ Webpack و Babel می‌کردند تا کدهای ری‌اکت در وردپرس کامپایل شوند. با نصب پکیج `@wordpress/scripts`، با دو دستور `npm start` و `npm run build` تمام کامپایل‌ها و تولید فایل‌های `.asset.php` به صورت خودکار انجام می‌گیرد.',
    vibeCodingImpact: 'هوش مصنوعی گاهی اوقات پیشنهاد می‌دهد کدهای بلاک را به صورت دستی در فایل‌های PHP قرار دهید یا وب‌پک را از اول بسازید! دانستن نام این پکیج کار را در ۵ دقیقه جمع می‌کند.',
    goldenPrompt: 'یک ساختار پروژه استاندارد برای ساخت بلاک گوتنبرگ با استفاده از پکیج رسمی @wordpress/scripts به همراه فایل package.json با اسکریپت‌های start و build آماده کن.',
    codeSnippet: {
      language: 'json',
      description: 'اسکریپت‌های استاندارد package.json در توسعه بلاک وردپرس',
      runContext: 'package.json',
      code: `{\n  "scripts": {\n    "start": "wp-scripts start",\n    "build": "wp-scripts build"\n  },\n  "devDependencies": {\n    "@wordpress/scripts": "^27.0.0"\n  }\n}`
    },
    relatedTermIds: ['block-json', 'dynamic-blocks', 'asset-enqueue'],
    seoKeywords: ['wp scripts', 'بیلد بلاک گوتنبرگ', 'کامپایل ری اکت در وردپرس', 'ابزارهای توسعه وردپرس']
  },
  {
    id: 'dynamic-blocks',
    termEn: 'Dynamic Blocks (SSR)',
    termFa: 'بلاک‌های داینامیک با رندر سمت سرور',
    category: 'frontend',
    level: 'advanced',
    phonetic: 'داینامیک بلاکس',
    tags: ['gutenberg', 'php-render', 'ssr', 'seo'],
    shortDefinition: 'بلاک‌های گوتنبرگی که خروجی HTML آن‌ها در زمان لود صفحه توسط PHP تولید می‌شود، به طوری که داده‌های جدید بلافاصله منعکس می‌گردند.',
    deepExplanation: 'بلاک‌های استاتیک محتوا را در دیتابیس پست ذخیره می‌کنند؛ بنابراین اگر پست‌های مرتبط را در یک بلاک استاتیک نشان دهید، با اضافه شدن پست جدید خروجی آپدیت نمی‌شود. بلاک داینامیک با داشتن یک فایل `render.php`، در هر بار باز شدن صفحه کوئری را تازه رندر می‌کند.',
    vibeCodingImpact: 'اگر تفاوت بلاک استاتیک و داینامیک را ندانید، هوش مصنوعی بلاکی می‌سازد که با هر بار ویرایش کد PHP، در پنل ادمین خطای Block Validation Failed (خرابی بلاک) می‌دهد.',
    goldenPrompt: 'یک بلاک داینامیک گوتنبرگ برای نمایش ۳ پست آخر وبلاگ بساز. ساختار باید شامل block.json با کلید render: "file:./render.php" باشد و در فایل render.php از WP_Query استاندارد با رعایت اصول سئو و استایل تیل‌ویند استفاده کند.',
    codeSnippet: {
      language: 'php',
      description: 'نمونه فایل render.php برای بلاک داینامیک گوتنبرگ',
      runContext: 'render.php',
      code: `<?php\n$latest_posts = new WP_Query([\n    'posts_per_page' => 3,\n    'post_status'    => 'publish'\n]);\nif ( $latest_posts->have_posts() ) :\n    echo '<div class="grid md:grid-cols-3 gap-6">';\n    while ( $latest_posts->have_posts() ) :\n        $latest_posts->the_post();\n        echo '<article class="p-5 rounded-2xl bg-surface border border-white/10">' . get_the_title() . '</article>';\n    endwhile;\n    echo '</div>';\n    wp_reset_postdata();\nendif;`
    },
    relatedTermIds: ['block-json', 'wp-scripts', 'asset-enqueue'],
    seoKeywords: ['بلاک داینامیک', 'dynamic blocks', 'رندر سمت سرور گوتنبرگ', 'render php بلاک']
  },
  {
    id: 'asset-enqueue',
    termEn: 'Asset Enqueueing (`wp_enqueue_script`)',
    termFa: 'بارگذاری اصولی استایل و اسکریپت در وردپرس',
    category: 'frontend',
    level: 'beginner',
    phonetic: 'است این‌کیو',
    tags: ['php', 'scripts', 'styles', 'optimization'],
    shortDefinition: 'متد رسمی و استاندارد رجیستر کردن فایل‌های CSS و JS در صف لود وردپرس به همراه مدیریت وابستگی‌ها و نسخه فایل.',
    deepExplanation: 'هرگز نباید در قالب‌های وردپرس تگ‌های `<link>` یا `<script>` را مستقیماً در هدر یا فوتر بنویسید! تابع `wp_enqueue_style` و `wp_enqueue_script` تضمین می‌کنند که فایل‌ها تکراری لود نشوند و تقدم لود اسکریپت‌ها رعایت شود.',
    vibeCodingImpact: 'هوش مصنوعی کم‌تجربه کد اسکریپت را مستقیماً در `header.php` هاردکد می‌کند که باعث تداخل با افزونه‌های کش و باگ‌های شدید لود صفحه می‌شود.',
    goldenPrompt: 'تابعی برای هوک wp_enqueue_scripts در functions.php بنویس که فایل استایل اصلی قالب و یک اسکریپت انیمیشن را لود کند. حتماً نسخه فایل را با filemtime بگذار تا مشکل کش مرورگر پس از هر ویرایش حل شود.',
    codeSnippet: {
      language: 'php',
      description: 'کد استاندارد اضافه کردن استایل با حل خودکار مشکل کش نسخه',
      runContext: 'functions.php',
      code: `add_action( 'wp_enqueue_scripts', function() {\n    $css_path = get_stylesheet_directory() . '/dist/style.css';\n    $version  = file_exists( $css_path ) ? filemtime( $css_path ) : '1.0.0';\n    wp_enqueue_style( 'hs-main-style', get_stylesheet_directory_uri() . '/dist/style.css', [], $version );\n});`
    },
    relatedTermIds: ['tailwind-jit', 'block-json', 'dynamic-blocks'],
    seoKeywords: ['wp_enqueue_script', 'لود اسکریپت در وردپرس', 'افزودن استایل به قالب', 'کش فایل های قالب']
  },
  {
    id: 'fluid-typography',
    termEn: 'Fluid Typography (`clamp`)',
    termFa: 'تایپوگرافی شناور بدون مدیاکوئری',
    category: 'frontend',
    level: 'intermediate',
    phonetic: 'فلوئید تایپوگرافی',
    tags: ['css', 'clamp', 'responsive', 'typography'],
    shortDefinition: 'روشی در CSS مدرن که در آن اندازه فونت با فرمول ریاضی `clamp(حداقل, ترجیحی, حداکثر)` با عرض نمایشگر به صورت نرم تغییر سایز می‌دهد.',
    deepExplanation: 'به جای نوشتن ده‌ها مدیاکوئری برای موبایل، تبلت و لپ‌تاپ، تابع `clamp()` به مرورگر اجازه می‌دهد سایز فونت را متناسب با عرض صفحه به نرمی کوچک و بزرگ کند. این کار لندینگ‌های وردپرسی را روی مانیتورهای عریض و گوشی‌ها فوق‌العاده خوانا می‌سازد.',
    vibeCodingImpact: 'هوش مصنوعی اگر هدایت نشود، برای هر بریک‌پوینت (sm, md, lg, xl, 2xl) کلاس‌های جداگانه می‌نویسد که استایل‌ها را شلوغ می‌کند. وایب‌کدر با درخواست تایپوگرافی فلوئید، خروجی به مراتب زیباتری می‌گیرد.',
    goldenPrompt: 'برای تیترهای اصلی قالب از فرمول تایپوگرافی شناور با تابع clamp در CSS استفاده کن: حداقل سایز ۲۴ پیکسل در موبایل، سایز شناور 4vw + 1rem، و حداکثر سایز ۶۴ پیکسل در نمایشگرهای عریض.',
    codeSnippet: {
      language: 'css',
      description: 'تعریف اندازه فونت شناور با تابع clamp',
      runContext: 'typography.css',
      code: `h1.fluid-title {\n  font-size: clamp(1.75rem, 4vw + 1rem, 4rem);\n  line-height: 1.15;\n}`
    },
    relatedTermIds: ['tailwind-jit', 'design-tokens', 'visual-hierarchy'],
    seoKeywords: ['تایپوگرافی شناور', 'fluid typography', 'تابع clamp در css', 'فونت واکنشگرا']
  }
];
