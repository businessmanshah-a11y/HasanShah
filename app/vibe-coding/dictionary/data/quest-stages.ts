import { GamificationBadge, QuestStage, UserGamificationProfile } from './types';

export const gamificationBadges: GamificationBadge[] = [
  {
    id: 'badge-clean-mind',
    titleFa: 'نشان ذهن شفاف',
    titleEn: 'Clear Mind Master',
    description: 'مهار توهم مدل، کنترل پنجره بافت و تنظیم فایل قوانین .cursorrules',
    iconName: 'Sparkles',
    gradientColor: 'from-amber-400 to-amber-600',
    stageRequired: 2,
  },
  {
    id: 'badge-golden-designer',
    titleFa: 'نشان معمار دیزاین سیستم',
    titleEn: 'Golden UI Architect',
    description: 'تلفیق توکن‌های فیگما، تایپوگرافی شناور و رساندن CLS به صفر مطلق',
    iconName: 'Palette',
    gradientColor: 'from-emerald-400 to-teal-600',
    stageRequired: 4,
  },
  {
    id: 'badge-block-alchemist',
    titleFa: 'نشان کیمیاگر بلاک‌های گوتنبرگ',
    titleEn: 'Gutenberg Block Alchemist',
    description: 'کامپایل بلاک‌های بومی با @wordpress/scripts و رندر داینامیک سمت سرور',
    iconName: 'Zap',
    gradientColor: 'from-cyan-400 to-blue-600',
    stageRequired: 6,
  },
  {
    id: 'badge-hook-sorcerer',
    titleFa: 'نشان استاد پریزها و هوک‌ها',
    titleEn: 'Master of Hooks',
    description: 'تسلط بی‌نقص بر چرخه لود، اکشن هوک، فیلتر هوک و معماری چایلدتم',
    iconName: 'Terminal',
    gradientColor: 'from-purple-400 to-indigo-600',
    stageRequired: 8,
  },
  {
    id: 'badge-shield-guardian',
    titleFa: 'نشان سپر نفوذناپذیر دیتابیس',
    titleEn: 'Iron Database Guardian',
    description: 'خنثی‌سازی حملات SQL Injection، مدیریت توکن‌های Nonce و احراز هویت JWT',
    iconName: 'Shield',
    gradientColor: 'from-rose-400 to-red-600',
    stageRequired: 10,
  },
  {
    id: 'badge-legendary-vibe-coder',
    titleFa: 'جام قهرمانی وایب‌کدر ارشد وردپرس',
    titleEn: 'Legendary WordPress Vibe Coder',
    description: 'اتمام موفقیت‌آمیز ۱۲ مرحله، شکست باس‌فایت نهایی و تسلط بر دوآپس و سرور',
    iconName: 'Crown',
    gradientColor: 'from-amber-300 via-yellow-400 to-amber-600',
    stageRequired: 12,
  },
  {
    id: 'badge-speed-reflex-master',
    titleFa: 'نشان رفلکس سریع در بحران',
    titleEn: 'Speed Reflex Master',
    description: 'مهار ۵ بحران سرور و وردپرس در چالش سرعتی ۶۰ ثانیه‌ای',
    iconName: 'Zap',
    gradientColor: 'from-orange-400 to-amber-500',
    stageRequired: 0,
  },
  {
    id: 'badge-autonomous-builder',
    titleFa: 'نشان معمار خودکفا و ورود به بازار کار',
    titleEn: 'Autonomous Builder',
    description: 'ساخت اولین افزونه واقعی وردپرس در mu-plugins و تسلط بر پرامپت ۵ لایه‌ای',
    iconName: 'Crown',
    gradientColor: 'from-emerald-400 via-teal-500 to-amber-400',
    stageRequired: 13,
  },
];

export const questStages: QuestStage[] = [
  {
    stageNumber: 1,
    titleFa: 'مرحله ۱: غواصی در ذهن هوش مصنوعی',
    subtitle: 'آشنایی با حافظه فعال، فایل قوانین ادیتور و حالت چندفایلی کامپوزر',
    category: 'vibe-ai',
    termIds: ['context-window', 'cursorrules-file', 'composer-mode'],
    checkpointQuiz: [
      {
        id: 'q1-1',
        termId: 'context-window',
        scenarioText: 'هوش مصنوعی وسط پیاده‌سازی کدهای فوتر سایت وردپرس شما، ناگهان کدهای فایل functions.php را پاک کرد و توابع نامرتبط دیگری اختراع کرد! علت اصلی این رفتار فاجعه‌بار چیست؟',
        codeSnippetPreview: '# خطا: Context length exceeded / Model hallucinated earlier functions',
        options: [
          'پنجره بافت (Context Window) به دلیل باز گذاشتن پوشه‌های سنگینی مثل wp-admin پر شده است.',
          'نسخه وردپرس هاست قدیمی است و باید آپدیت شود.',
          'رم کامپیوتر شما برای اجرای ادیتور کم است.',
          'سرعت اینترنت پایین بوده و توکن‌ها قطع و وصل شده‌اند.',
        ],
        correctIndex: 0,
        explanation: 'وقتی تمام فایل‌های پروژه را بدون فیلتر به ادیتور تحمیل می‌کنید، پنجره بافت پر شده و مدل کدهای ابتدایی را فراموش می‌کند و برای جبران توهم می‌زند!',
        remediationHint: 'به یاد تمثیل تخته‌وایت‌برد بیفتید: اگر کل کتاب را یکجا روی تخته بنویسی، نوشته‌های قبلی پاک می‌شوند! راهکار: ساخت فایل .cursorignore برای نادیده گرفتن فایل‌های سنگین.',
      },
      {
        id: 'q1-2',
        termId: 'cursorrules-file',
        scenarioText: 'می‌خواهید ادیتور Cursor در تمام پرامپت‌ها بدون نیاز به یادآوری مکرر، از نوشتن کدهای jQuery خودداری کند و کدهای PHP را با پیشوند اختصاصی hs_ تولید کند. بهترین راهکار مهندسی چیست؟',
        options: [
          'در ریشه پروژه فایلی به نام .cursorrules ساخته و قوانین خط قرمز را در آن ثبت کنید.',
          'در هر پرامپت این جملات را با کیبورد دستی تایپ و ارسال کنید.',
          'در دیتابیس وردپرس جدول جدیدی برای قوانین اضافه کنید.',
          'نسخه PHP هاست را به صورت دستی دانگرید کنید.',
        ],
        correctIndex: 0,
        explanation: 'فایل .cursorrules اساسنامه دائمی پروژه است و قبل از هر سوال، قوانین معماری شما را مخفیانه در کانتکست سیستمی مدل تزریق می‌کند.',
        remediationHint: 'تمثیل اساسنامه روی دیوار: به دیوار اتاق کار AI تابلوی ورود ممنوع می‌زنی تا هیچ‌وقت کدهای منسوخ ننویسد.',
      },
    ],
  },
  {
    stageNumber: 2,
    titleFa: 'مرحله ۲: گارد ضد توهم و نقشه راه',
    subtitle: 'مهار دروغ‌های مطمئن مدل، مهندسی مشخصات محصول و زنجیره استدلال',
    category: 'vibe-ai',
    termIds: ['hallucination-guard', 'prd-workflow', 'chain-of-thought'],
    badgeUnlocked: gamificationBadges[0],
    checkpointQuiz: [
      {
        id: 'q2-1',
        termId: 'hallucination-guard',
        scenarioText: 'کدی که هوش مصنوعی تولید کرده در ظاهر بسیار تمیز است، اما به محض ذخیره در functions.php سایت با خطای Fatal error: Call to undefined function wp_get_current_user_avatar() از کار می‌افتد. قضیه چیست؟',
        codeSnippetPreview: "Fatal error: Uncaught Error: Call to undefined function wp_get_current_user_avatar()",
        options: [
          'هوش مصنوعی این تابع را از خودش اختراع کرده و چنین تابعی در هسته وردپرس وجود خارجی ندارد (توهم مدل).',
          'دسترسی اینترنت سرور قطع شده است.',
          'قالب چایلدتم فعال نبوده است.',
          'کش مرورگر باید با کلید Ctrl+F5 پاک شود.',
        ],
        correctIndex: 0,
        explanation: 'مدل‌های زبان طبیعی در صورت عدم اطمینان، اسامی منطقی ولی دروغین حدس می‌زنند. همیشه نام توابع را در developer.wordpress.org استعلام کنید.',
        remediationHint: 'تمثیل گمرک: بازرس گمرک گذرنامه توابع را استعلام می‌کند تا مبادا کلمه جعلی وارد سایت شود.',
      },
      {
        id: 'q2-2',
        termId: 'chain-of-thought',
        scenarioText: 'می‌خواهید یک کوئری بسیار پیچیده برای فیلتر همزمان محصولات بر اساس رنگ، سایز و محدوده قیمت بنویسید. چطور مانع از تولید کوئری کند یا اشتباه توسط هوش مصنوعی شویم؟',
        options: [
          'استفاده از تکنیک Chain-of-Thought (الزام مدل به تشریح قدم‌به‌قدم شروط قبل از نوشتن کد).',
          'خواستن فوری تمام کدهای PHP در اولین ثانیه با پرامپت یک‌خطی.',
          'نصب ۵ افزونه فیلتر متفاوت روی سایت به صورت همزمان.',
          'افزایش حافظه رم سرور بدون بهینه‌سازی کوئری.',
        ],
        correctIndex: 0,
        explanation: 'وادار کردن مدل به فکر کردن و چرک‌نویس کردن منطق فیلترها (CoT) خطاهای معماری پایگاه داده را تا ۷۰ درصد کاهش می‌دهد.',
        remediationHint: 'تمثیل المپیاد ریاضی: دانش‌آموز تیزهوش اول محاسبات را روی چرک‌نویس چک می‌کند تا نمره منفی نگیرد.',
      },
    ],
  },
  {
    stageNumber: 3,
    titleFa: 'مرحله ۳: زبان مشترک فیگما و فرانت',
    subtitle: 'توکن‌های سیستم طراحی، سلسله‌مراتب بصری و ریزتعاملات زنده',
    category: 'ui-ux',
    termIds: ['design-tokens', 'visual-hierarchy', 'micro-interactions'],
    checkpointQuiz: [
      {
        id: 'q3-1',
        termId: 'design-tokens',
        scenarioText: 'کارفرما تصمیم گرفته رنگ سازمانی طلایی سایت را از زرد براق به طلایی ملایم تغییر دهد. اگر از توکن‌های طراحی (Design Tokens) استفاده نکرده باشید چه عذابی در انتظار شماست؟',
        codeSnippetPreview: "color: #d4af37; /* هاردکد شده در ۱۸۰ فایل مختلف */",
        options: [
          'باید به صورت دستی در بیش از ۱۰۰ فایل مختلف کدهای رنگی هگزادسیمال را یکی‌یکی عوض کنید!',
          'سایت به صورت خودکار خودش رنگ‌ها را از روی لوگو تشخیص می‌دهد.',
          'هیچ مشکلی پیش نمی‌آید و وردپرس خودش آپدیت می‌کند.',
          'نیازی به تغییر نیست و رنگ‌ها بی‌اهمیت هستند.',
        ],
        correctIndex: 0,
        explanation: 'با توکن‌های طراحی (مانند var(--color-gold)) با تغییر فقط یک خط در globals.css، کل سایت در کسری از ثانیه تغییر تم می‌دهد.',
        remediationHint: 'تمثیل قوطی ادویه: اگر نمک می‌خواهی از قوطی نمک برمی‌داری، نه اینکه هر بار یک مدل نمک جدید از کوچه بخری!',
      },
      {
        id: 'q3-2',
        termId: 'visual-hierarchy',
        scenarioText: 'مشتری وارد لندینگ پیج می‌شود اما نرخ تبدیل (خرید یا ثبت‌نام) فاجعه‌بار است؛ چون نمی‌داند بعد از خواندن تیتر باید کجا را کلیک کند. اشکال چیست؟',
        options: [
          'فقدان سلسله‌مراتب بصری؛ تیتر، متن و دکمه‌ها همه با یک اندازه و رنگ یکنواخت چیده شده‌اند.',
          'سرعت اینترنت کاربر کند بوده است.',
          'سایت روی هاست لینوکس نیست.',
          'عکس بنر دارای ابعاد مربعی بوده است.',
        ],
        correctIndex: 0,
        explanation: 'سلسله‌مراتب بصری با تیتر بزرگ (H1)، توضیح ملایم و دکمه اقدام اصلی برجسته (CTA) چشم کاربر را مستقیماً به هدف هدایت می‌کند.',
        remediationHint: 'تمثیل روزنامه: تیتر یک روزنامه باید آنقدر بزرگ باشد که از ده متری خوانده شود، نه با فونت ریز چاپ شود!',
      },
    ],
  },
  {
    stageNumber: 4,
    titleFa: 'مرحله ۴: هنر دسترسی‌پذیری و پایداری',
    subtitle: 'کنتراست استاندارد WCAG، قفل‌کردن جای عکس‌ها و اسکلتون لودینگ',
    category: 'ui-ux',
    termIds: ['wcag-contrast', 'cls-prevention', 'skeleton-loading'],
    badgeUnlocked: gamificationBadges[1],
    checkpointQuiz: [
      {
        id: 'q4-1',
        termId: 'cls-prevention',
        scenarioText: 'هنگام باز شدن صفحه لندینگ، کاربر می‌خواهد روی دکمه کلیک کند اما ناگهان با ظاهر شدن عکس، صفحه به پایین پرتاب می‌شود و دست کاربر به جای دیگری می‌خورد! نام این خطای سئو چیست و چطور حل می‌شود؟',
        codeSnippetPreview: '<img src="banner.webp"> <!-- بدون مشخص بودن ابعاد! -->',
        options: [
          'خطای پرش چیدمان (CLS)؛ با رزرو فضا با aspect-ratio یا صفات width/height حل می‌شود.',
          'خطای کمبود رم سرور؛ با ریستارت آپاچی حل می‌شود.',
          'خطای نانس امنیتی؛ با wp_create_nonce حل می‌شود.',
          'خطای کوئری دیتابیس؛ با WP_Query حل می‌شود.',
        ],
        correctIndex: 0,
        explanation: 'وقتی مرورگر قبل از لود تصویر ابعاد آن را نداند، با لود عکس صفحه دچار جهش ناگهانی می‌شود که گوگل سایت را به شدت جریمه می‌کند.',
        remediationHint: 'تمثیل رزرو صندلی در سینما: جای عکس را از قبل با aspect-video رزرو می‌کنی تا کسی جایش را تکان ندهد!',
      },
      {
        id: 'q4-2',
        termId: 'skeleton-loading',
        scenarioText: 'چرا به جای لودینگ‌های چرخان قدیمی (اسپینر تمام‌صفحه)، شرکت‌های مدرنی مثل یوتیوب و لینکدین از اسکلتون لودینگ استفاده می‌کنند؟',
        options: [
          'چون حس معطلی کاربر را تا ۵۰٪ کاهش می‌دهد و ساختار صفحه را قبل از لود ترسیم می‌کند.',
          'چون اسپینر باعث خرابی کدهای PHP سرور می‌شود.',
          'چون اسکلتون لودینگ باعث افزایش حجم دیتابیس می‌شود.',
          'چون گوگل استفاده از دایره چرخان را در اینترنت ممنوع کرده است.',
        ],
        correctIndex: 0,
        explanation: 'اسکلتون لودینگ با نمایش باکس‌های ملایم پالس‌زننده، زمان ادراکی بارگذاری را در ذهن کاربر به شدت کوتاه می‌کند.',
        remediationHint: 'تمثیل مانکن ویترین: فرم لباس را نشان می‌دهد تا متوجه شوی چه جنسی در راه است، نه اینکه پرده سیاه بکشی!',
      },
    ],
  },
  {
    stageNumber: 5,
    titleFa: 'مرحله ۵: سوخت موشک فرانت‌اند',
    subtitle: 'موتور لحظه‌ای تیل‌ویند، شناسنامه بلاک و ابزار رسمی بیلد وردپرس',
    category: 'frontend',
    termIds: ['tailwind-jit', 'block-json', 'wp-scripts'],
    checkpointQuiz: [
      {
        id: 'q5-1',
        termId: 'tailwind-jit',
        scenarioText: 'کلاس‌های جدید Tailwind را در فایل template-parts/card.php قالب اضافه کرده‌اید اما در مرورگر هیچ استایلی اعمال نمی‌شود و ظاهر کدهای جدید خام است! ریشه مشکل کجاست؟',
        codeSnippetPreview: "// content path missing in tailwind.config.js!",
        options: [
          'مسیر فایل‌های PHP به بخش content در پیکربندی Tailwind معرفی نشده و JIT آن را اسکن نکرده است.',
          'قالب باید حتماً با المنتور پرو سازگار شود.',
          'وردپرس از فایل‌های CSS پشتیبانی نمی‌کند.',
          'فونت‌های گوگل باید دانلود و دستی نصب شوند.',
        ],
        correctIndex: 0,
        explanation: 'موتور JIT تیل‌ویند فقط فایل‌هایی را کامپایل می‌کند که مسیرشان در آرایه content رجیستر شده باشد.',
        remediationHint: 'تمثیل خیاط اختصاصی: خیاط فقط لباسی که سفارش داده‌ای را می‌دوزد؛ اگر سفارشت را به او نرسانی لباسی دوخته نمی‌شود!',
      },
      {
        id: 'q5-2',
        termId: 'block-json',
        scenarioText: 'چرا در ساخت بلاک‌های گوتنبرگ به جای روش‌های قدیمی جاوااسکریپت، استفاده از فایل استاندارد block.json با apiVersion 3 الزامی است؟',
        options: [
          'تا خصوصیات، استایل‌ها و اسکریپت‌ها به صورت رسمی تعریف شوند و با آپدیت‌های آینده وردپرس قفل یا خراب نشوند.',
          'تا نیاز به نصب افزونه ووکامرس برطرف شود.',
          'چون بدون این فایل نمی‌توان در وردپرس عکس آپلود کرد.',
          'تا سرعت اینترنت هاست ۲ برابر شود.',
        ],
        correctIndex: 0,
        explanation: 'فایل block.json استاندارد مدرن تیم هسته وردپرس است که شناسنامه و متادیتای بلاک را ثبت می‌کند.',
        remediationHint: 'تمثیل کارت ملی لگو: شناسنامه قطعه لگو است که مشخص می‌کند کجای صفحه اجازه دارد قرار بگیرد.',
      },
    ],
  },
  {
    stageNumber: 6,
    titleFa: 'مرحله ۶: داینامیک‌سازی و کش‌شکنی',
    subtitle: 'رندر سمت سرور گوتنبرگ، لود استاندارد استایل‌ها و تایپوگرافی شناور',
    category: 'frontend',
    termIds: ['dynamic-blocks', 'asset-enqueue', 'fluid-typography'],
    badgeUnlocked: gamificationBadges[2],
    checkpointQuiz: [
      {
        id: 'q6-1',
        termId: 'asset-enqueue',
        scenarioText: 'در فایل style.css قالب تغییری ایجاد می‌کنید، اما مشتری زنگ می‌زند و می‌گوید ظاهر سایت همان ظاهر قدیمی و به هم ریخته است! چطور با wp_enqueue_style این مشکل را برای همیشه حل کنیم؟',
        codeSnippetPreview: "$version = filemtime( get_stylesheet_directory() . '/dist/style.css' );",
        options: [
          'استفاده از تابع filemtime برای تولید خودکار شماره نسخه بر اساس تاریخ ذخیره فایل در هوک wp_enqueue_scripts.',
          'گفتن به مشتری که باید هر روز تاریخچه مرورگر خود را به طور کامل پاک کند.',
          'حذف کامل فایل استایل و نوشتن استایل درون خطی.',
          'تغییر دادن نام دامنه سایت بعد از هر تغییر کوچک.',
        ],
        correctIndex: 0,
        explanation: 'با filemtime به محض ذخیره فایل، پارامتر ver در آدرس استایل عوض شده و مرورگر مشتری فوراً نسخه جدید را بدون کش دانلود می‌کند.',
        remediationHint: 'تمثیل تاریخ انقضای شیر: تاریخ ویرایش فایل روی بسته درج می‌شود تا مرورگر شیر تازه را بردارد نه شیر مانده!',
      },
      {
        id: 'q6-2',
        termId: 'dynamic-blocks',
        scenarioText: 'می‌خواهید بلاکی بسازید که آخرین مقالات وبلاگ را نشان دهد. چرا باید از بلاک داینامیک با render.php استفاده کرد نه بلاک استاتیک؟',
        options: [
          'چون با انتشار مقاله جدید، بلاک داینامیک به صورت زنده آپدیت می‌شود بدون اینکه نیاز به ویرایش دستی برگه باشد.',
          'چون بلاک‌های استاتیک فقط روی سرورهای ویندوزی کار می‌کنند.',
          'چون بلاک داینامیک باعث حذف افزونه‌های وردپرس می‌شود.',
          'چون هزینه ساخت بلاک داینامیک کمتر است.',
        ],
        correctIndex: 0,
        explanation: 'بلاک استاتیک HTML را در دیتابیس پست ذخیره می‌کند و با مقاله جدید آپدیت نمی‌شود؛ اما بلاک داینامیک کوئری زنده در سرور اجرا می‌کند.',
        remediationHint: 'تمثیل تابلوی پرواز فرودگاه: وضعیت زنده پروازهای الان را نشان می‌دهد نه عکس پروازهای پارسال را!',
      },
    ],
  },
  {
    stageNumber: 7,
    titleFa: 'مرحله ۷: نبض هسته و پریزهای اتصال',
    subtitle: 'تسلط بر اکشن هوک، فیلتر هوک و سلسله‌مراتب وراثت قالب',
    category: 'wp-core',
    termIds: ['action-hooks', 'filter-hooks', 'theme-hierarchy'],
    checkpointQuiz: [
      {
        id: 'q7-1',
        termId: 'filter-hooks',
        scenarioText: 'کدی با add_filter برای the_content نوشته‌اید تا باکسی در انتهای مقالات اضافه شود. اما به محض اجرا، کل متن مقالات در سایت غیب شده و صفحه خالی است! چه اشتباه مرگباری رخ داده؟',
        codeSnippetPreview: "add_filter('the_content', function($content) {\n  $box = '<div>سلام</div>';\n  // کجاست دستور return؟!\n});",
        options: [
          'فراموش شده که متغیر دستکاری‌شده در انتهای تابع با دستور return $content بازگردانده شود.',
          'وردپرس قابلیت فیلتر متن را پشتیبانی نمی‌کند.',
          'متن مقالات از دیتابیس پاک شده است.',
          'باید به جای فیلتر از دستور delete استفاده می‌شد.',
        ],
        correctIndex: 0,
        explanation: 'فیلتر هوک‌ها داده را تحویل می‌گیرند و موظفند مقدار جدید را return کنند. اگر چیزی برنگردانید خروجی پوچ و سفید می‌شود!',
        remediationHint: 'تمثیل دستگاه تصفیه آب: آب را می‌گیرد، تصفیه می‌کند و باید آب زلال را پس بدهد، نه اینکه شیر خروجی را ببندد!',
      },
      {
        id: 'q7-2',
        termId: 'action-hooks',
        scenarioText: 'می‌خواهید بعد از لود کامل سیستم کاربری وردپرس کدی اجرا کنید. اگر کدتان را مستقیماً بدون هیچ هوکی در فایل functions.php رها کنید چه فاجعه‌ای رخ می‌دهد؟',
        options: [
          'کد قبل از لود توابع هسته اجرا شده و سایت با خطای مرگبار Fatal Error و صفحه سفید قفل می‌شود.',
          'کد بدون مشکل با سرعت ۱۰ برابر اجرا می‌شود.',
          'وردپرس به صورت خودکار کد را به دیتابیس منتقل می‌کند.',
          'هیچ اتفاقی نمی‌افتد و کد نادیده گرفته می‌شود.',
        ],
        correctIndex: 0,
        explanation: 'توابع پردازشی وردپرس باید در چرخه حیات مناسب (مانند init یا template_redirect) با add_action ثبت شوند.',
        remediationHint: 'تمثیل پریز برق: دوشاخه را باید در پریز مناسب بزنی، نه اینکه سیم را به دیوار بدون برق وصل کنی!',
      },
    ],
  },
  {
    stageNumber: 8,
    titleFa: 'مرحله ۸: پایداری و سپر امنیتی',
    subtitle: 'معماری چایلدتم، پست‌تایپ‌های اختصاصی، توکن‌های نانس و کش موقت',
    category: 'wp-core',
    termIds: ['child-theme', 'custom-post-types', 'nonces', 'transients-api'],
    badgeUnlocked: gamificationBadges[3],
    checkpointQuiz: [
      {
        id: 'q8-1',
        termId: 'nonces',
        scenarioText: 'یک فرم تماس سریع در قالب وردپرس ساخته‌اید. اگر برای این فرم از توکن‌های امنیتی یکبارمصرف (Nonces) استفاده نکنید، هکرها چه آسیبی می‌توانند بزنند؟',
        codeSnippetPreview: "// فرم فاقد wp_verify_nonce یا check_ajax_referer است!",
        options: [
          'با حملات جعل درخواست (CSRF) و ارسال درخواست‌های فیشینگ و رباتی می‌توانند به سایت نفوذ کنند.',
          'رنگ دکمه فرم به خاکستری تغییر پیدا می‌کند.',
          'کاربران دیگر نمی‌توانند در سایت لاگین کنند.',
          'فونت‌های سایت ناخوانا می‌شوند.',
        ],
        correctIndex: 0,
        explanation: 'نانس‌ها رمز پویای فرم‌های وردپرس هستند و اثبات می‌کنند درخواست واقعاً از سوی همان کاربر و از همان فرم رسمی سایت صادر شده است.',
        remediationHint: 'تمثیل رمز پویای بانکی: فقط برای همین یک درخواست و برای چند دقیقه معتبر است تا دزد نتواند پول بردارد!',
      },
      {
        id: 'q8-2',
        termId: 'transients-api',
        scenarioText: 'سایت شما قیمت لحظه‌ای بیت‌کوین را از یک API خارجی می‌خواند. اگر از Transients API استفاده نکنید، با ورود ۱۰۰ کاربر همزمان چه اتفاقی می‌افتد؟',
        options: [
          'سرور در هر ثانیه ۱۰۰ درخواست خارجی ارسال کرده، حافظه پر می‌شود و سایت با خطای لود متوقف می‌گردد.',
          'سرعت اینترنت کاربران تا ۱۰ برابر افزایش می‌یابد.',
          'دیتابیس به صورت خودکار مقادیر را در اکسل ذخیره می‌کند.',
          'هیچ تغییری در بار سرور رخ نمی‌دهد.',
        ],
        correctIndex: 0,
        explanation: 'با Transients API نتیجه را به مدت مثلاً ۱ ساعت کش می‌کنید تا صدها کاربر بعدی بدون معطلی نتیجه را در ۲ میلی‌ثانیه ببینند.',
        remediationHint: 'تمثیل نان در فریزر: نان را برای چند روز نگه می‌داری تا برای هر لقمه نانوایی نروی!',
      },
    ],
  },
  {
    stageNumber: 9,
    titleFa: 'مرحله ۹: نفوذ به اعماق پایگاه داده',
    subtitle: 'معماری جداول محتوا، کلاس سراسری دیتابیس و گارد ضد هک SQL',
    category: 'database-api',
    termIds: ['wp-posts-schema', 'wpdb-class', 'sql-injection-guard'],
    checkpointQuiz: [
      {
        id: 'q9-1',
        termId: 'sql-injection-guard',
        scenarioText: 'در حال نوشتن کوئری جستجوی کاربران هستید. کدام متد برای اتصال ورودی کاربر به کوئری SQL الزامی است تا هکر نتواند دیتابیس را دانلود یا پاک کند؟',
        codeSnippetPreview: "$wpdb->prepare('SELECT * FROM ... WHERE email = %s', $email)",
        options: [
          'متد $wpdb->prepare با تعیین نوع داده (%s یا %d) برای خنثی‌سازی ورودی‌های مخرب.',
          'چسباندن مستقیم متغیر با نقطه (. $email) درون رشته کوئری.',
          'نوشتن دستور echo در کنار کوئری.',
          'تغییر نام پایگاه داده به یک عبارت رمزی.',
        ],
        correctIndex: 0,
        explanation: 'متد prepare ورودی‌های کاربر را اسکن کرده و پارامترهای مخرب مانند OR 1=1 را به متن بی‌خطر تبدیل می‌کند.',
        remediationHint: 'تمثیل گیت ایکس‌ری فرودگاه: قبل از اینکه بار سوار هواپیمای دیتابیس شود، اسکن می‌شود تا اسلحه یا بمب نداشته باشد!',
      },
      {
        id: 'q9-2',
        termId: 'wpdb-class',
        scenarioText: 'چرا در نوشتن کوئری با کلاس $wpdb هرگز نباید نام جدول را به صورت ثابت wp_users نوشت و حتماً باید از $wpdb->prefix استفاده کرد؟',
        options: [
          'چون در هاست‌های مختلف پیشوند جداول به دلایل امنیتی ممکن است چیزی به جز wp_ باشد.',
          'چون نوشتن wp_ باعث کند شدن پردازنده سرور می‌شود.',
          'چون زبان PHP از حروف کوچک پشتیبانی نمی‌کند.',
          'چون وردپرس جداول با نام wp_ را پاک می‌کند.',
        ],
        correctIndex: 0,
        explanation: 'استفاده از $wpdb->prefix تضمین می‌کند کد شما روی هر هاستی با هر پیشوند دلخواهی بدون خطای Table not found اجرا شود.',
        remediationHint: 'تمثیل آدرس متغیر: از راننده می‌خواهی به شعبه مرکزی برود، نه اینکه آدرس خیابان را هاردکد کنی!',
      },
    ],
  },
  {
    stageNumber: 10,
    titleFa: 'مرحله ۱۰: ارتباط با فرانت‌های مدرن',
    subtitle: 'وب‌سرویس REST API، اندپوینت‌های سفارشی و احراز هویت توکن‌محور',
    category: 'database-api',
    termIds: ['wp-rest-api', 'custom-endpoints', 'jwt-authentication'],
    badgeUnlocked: gamificationBadges[4],
    checkpointQuiz: [
      {
        id: 'q10-1',
        termId: 'custom-endpoints',
        scenarioText: 'هنگام ثبت یک روت سفارشی با register_rest_route، اگر آرگومان permission_callback را خالی بگذارید چه هشداری دریافت می‌کنید؟',
        codeSnippetPreview: "register_rest_route('hs/v1', '/data', [ 'permission_callback' => '__return_true' ])",
        options: [
          'اخطار امنیتی جدی در وردپرس ۵.۵+ مبنی بر اینکه دسترسی بدون شرط مجوز تعریف شده و خطر نفوذ دارد.',
          'سایت بلافاصله به حالت تعمیرات می‌رود.',
          'پایگاه داده به طور خودکار قفل می‌شود.',
          'هیچ اخطاری داده نمی‌شود و کار استاندارد است.',
        ],
        correctIndex: 0,
        explanation: 'در روت‌های REST همیشه باید شرط دسترسی (حداقل __return_true برای روت عمومی یا current_user_can برای ادمین) قید شود.',
        remediationHint: 'تمثیل نگهبان دم در: نمی‌توانی در اتاق را بدون نگهبان باز بگذاری؛ باید حداقل بگویی ورود برای همه آزاد است!',
      },
      {
        id: 'q10-2',
        termId: 'jwt-authentication',
        scenarioText: 'وقتی فرانت‌سایت شما با Next.js ساخته شده و از وردپرس جداست، کاربر چطور لاگین می‌کند و هویتش بدون کوکی شناسایی می‌شود؟',
        options: [
          'با دریافت توکن امضاشده JWT و ارسال آن در هدر Authorization: Bearer در هر درخواست.',
          'با فرستادن رمز عبور در قالب عکس در هر درخواست.',
          'با تماس تلفنی با پشتیبانی هاست.',
          'با غیرفعال کردن سیستم لاگین وردپرس.',
        ],
        correctIndex: 0,
        explanation: 'توکن JWT هویت کاربر را بدون نیاز به ذخیره سشن در سرور به صورت رمزنگاری‌شده تایید می‌کند.',
        remediationHint: 'تمثیل دستبند VIP کنسرت: یک بار کارت شناسایی نشان می‌دهی و با دستبند در کل سالن می‌چرخی!',
      },
    ],
  },
  {
    stageNumber: 11,
    titleFa: 'مرحله ۱۱: فرماندهی سرور و لینوکس',
    subtitle: 'خط فرمان WP-CLI، کلیدهای رمزنگاری SSH و محیط ایزوله استیجینگ',
    category: 'devops-server',
    termIds: ['wp-cli', 'ssh-key-auth', 'staging-environment'],
    checkpointQuiz: [
      {
        id: 'q11-1',
        termId: 'wp-cli',
        scenarioText: 'یک افزونه معیوب باعث قفل شدن پیشخوان وردپرس و خطای سفید مرگبار شده و دسترسی به پنل ادمین ندارید. سریع‌ترین راه نجات در ۲ ثانیه چیست؟',
        codeSnippetPreview: "wp plugin deactivate faulty-plugin-name",
        options: [
          'اتصال به SSH سرور و اجرای دستور خط فرمان wp plugin deactivate برای غیرفعال‌سازی آنی افزونه.',
          'فرستادن تیکت به پشتیبانی هاست و معطلی ۴ ساعته.',
          'نصب مجدد ویندوز روی کامپیوتر شخصی.',
          'پاک کردن کل دیتابیس سایت و شروع از صفر.',
        ],
        correctIndex: 0,
        explanation: 'ابزار WP-CLI به شما قدرت کنترل کامل سایت را از ترمینال سرور بدون نیاز به باز کردن پیشخوان می‌دهد.',
        remediationHint: 'تمثیل کلید برق اضطراری: در کابین خلبان با یک کلید موتور معیوب را خاموش می‌کنی!',
      },
      {
        id: 'q11-2',
        termId: 'staging-environment',
        scenarioText: 'چرا تست کدهای جدید هوش مصنوعی مستقیماً روی سایت زنده یک خطای آماتور است و حتماً باید از محیط Staging استفاده کرد؟',
        options: [
          'چون با بروز کوچک‌ترین باگ، فرایند خرید مشتریان مختل شده و اعتماد به برند از بین می‌رود.',
          'چون هوش مصنوعی روی هاست‌های اصلی کار نمی‌کند.',
          'چون گوگل سایت‌های بدون استیجینگ را مسدود می‌کند.',
          'چون هزینه برق هاست استیجینگ رایگان است.',
        ],
        correctIndex: 0,
        explanation: 'محیط استیجینگ اتاق گریم و آزمایشگاه ایزوله شماست؛ کدهایتان را در امنیت تست می‌کنید و پس از تایید به سایت اصلی می‌برید.',
        remediationHint: 'تمثیل اتاق گریم تئاتر: هر چقدر خواستی لباس عوض کن بدون اینکه تماشاگران متوجه شوند!',
      },
    ],
  },
  {
    stageNumber: 12,
    titleFa: 'مرحله ۱۲: فینال بزرگ سرعت و سئو',
    subtitle: 'تعویض ایمن دامنه‌ها، کامپایلر رم OPcache و عبور از چکاپ گوگل',
    category: 'devops-server',
    termIds: ['db-search-replace', 'opcache-tuning', 'core-web-vitals'],
    badgeUnlocked: gamificationBadges[5],
    checkpointQuiz: [
      {
        id: 'q12-1',
        termId: 'db-search-replace',
        scenarioText: 'سایت را از هاست لوکال به دامنه اصلی منتقل کرده‌اید. چرا تعویض دامنه با دستور ساده REPLACE در phpMyAdmin باعث خرابی چیدمان و ریست شدن تنظیمات قالب می‌شود؟',
        codeSnippetPreview: 'wp search-replace "http://dev.local" "https://hasanshah.ir" --dry-run',
        options: [
          'چون داده‌های وردپرس به صورت رشته‌های سریال‌شده (Serialized) ذخیره می‌شوند و طول کاراکترهای رشته جدید به هم می‌ریزد.',
          'چون phpMyAdmin فقط از زبان انگلیسی پشتیبانی می‌کند.',
          'چون فونت‌های سایت در دیتابیس ذخیره نمی‌شوند.',
          'چون هاست جدید نیازمند لایسنس پولی است.',
        ],
        correctIndex: 0,
        explanation: 'دستور رسمی wp search-replace طول رشته‌های سریال‌شده پی‌اچ‌پی را به طور خودکار محاسبه و اصلاح می‌کند تا داده‌ها فاسد نشوند.',
        remediationHint: 'تمثیل جابجایی اثاثیه شکستنی: اگر با کارتن مخصوص حمل نکنی وسط راه می‌شکند!',
      },
      {
        id: 'q12-2',
        termId: 'core-web-vitals',
        scenarioText: 'گوگل در گزارش Core Web Vitals سایت شما را بر اساس چه فاکتورهای کلیدی می‌سنجد و رتبه‌بندی می‌کند؟',
        options: [
          'سرعت لود بزرگترین محتوا (LCP)، تاخیر واکنش به اولین کلیک (INP) و پایداری چیدمان بدون پرش (CLS).',
          'تعداد کلمات هر مقاله و رنگ لوگوی سایت.',
          'تعداد فالوورهای اینستاگرام مدیر سایت.',
          'نسخه سیستم‌عامل لپ‌تاپ طراح سایت.',
        ],
        correctIndex: 0,
        explanation: 'سه فاکتور LCP، INP و CLS نبض رسمی گوگل برای سنجش سرعت و تجربه کاربری در نتایج رتبه‌بندی موبایل هستند.',
        remediationHint: 'تمثیل معاینه فنی خودرو: آزمایش ۳ گانه سلامت که تابلوی تبلیغاتی‌ات را در ورودی اتوبان گوگل می‌گذارد!',
      },
    ],
  },
];

export function calculateUserLevel(xp: number): {
  level: number;
  rankTitle: string;
  nextLevelXp: number;
  progressPercent: number;
} {
  const levels = [
    { level: 1, minXp: 0, title: 'شاگرد صفر کیلومتر' },
    { level: 2, minXp: 400, title: 'شکارچی پرامپت' },
    { level: 3, minXp: 900, title: 'جادوگر هوک‌های وردپرس' },
    { level: 4, minXp: 1600, title: 'معمار امنیتی دیتابیس' },
    { level: 5, minXp: 2500, title: 'وایب‌کدر ارشد و افسانه‌ای' },
  ];

  let current = levels[0];
  let next = levels[1];

  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].minXp) {
      current = levels[i];
      next = levels[i + 1] || { level: 5, minXp: 3500, title: 'افسانه بی‌همتا' };
      break;
    }
  }

  const range = next.minXp - current.minXp;
  const inLevelXp = xp - current.minXp;
  const progressPercent = Math.min(100, Math.max(0, Math.round((inLevelXp / range) * 100)));

  return {
    level: current.level,
    rankTitle: current.title,
    nextLevelXp: next.minXp,
    progressPercent,
  };
}
