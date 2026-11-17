import { EncyclopediaTerm } from './types';

export const devopsServerTerms: EncyclopediaTerm[] = [
  {
    id: 'wp-cli',
    termEn: 'WP-CLI (WordPress Command Line)',
    termFa: 'رابط خط فرمان مدیریت و ساخت وردپرس',
    category: 'devops-server',
    level: 'intermediate',
    phonetic: 'دابلیو پی سی ال آی',
    tags: ['cli', 'terminal', 'devops', 'automation'],
    shortDefinition: 'ابزار خط فرمان رسمی لینوکس برای مدیریت کل وردپرس، ساخت دیتابیس، نصب پلاگین‌ها و رفع خطاهای سایت بدون باز کردن مرورگر.',
    deepExplanation: 'کارهایی که در پیشخوان وردپرس ۱۰ دقیقه زمان می‌برند (مثل ساخت کاربر ادمین، پاک کردن کش، بررسی ارورها یا نصب ۳۰ افزونه)، در WP-CLI با یک خط دستور در ۲ ثانیه انجام می‌شوند. این ابزار ستون فقرات اتوماسیون و استقرار مدرن وردپرس است.',
    vibeCodingImpact: 'وقتی سایتی خطای Fatal Error می‌دهد و پیشخوان قفل می‌شود، افراد عادی مستأصل می‌شوند. یک وایب‌کدر با دستورات WP-CLI در ترمینال فوراً پلاگین خراب را با `wp plugin deactivate` غیرفعال و سایت را احیا می‌کند.',
    goldenPrompt: 'مجموعه دستورات ترمینال WP-CLI برای رفع سریع خطای قفل شدن پیشخوان وردپرس، پاکسازی کامل ترنزینت‌ها و بررسی وضعیت سلامتی دیتابیس را به ترتیب اولویت اجرا بنویس.',
    codeSnippet: {
      language: 'bash',
      description: 'دستورات ضروری WP-CLI برای عیب‌یابی و پاکسازی کش',
      runContext: 'Server Terminal',
      code: `# پاکسازی تمام ترنزینت‌های منقضی‌شده:\nwp transient delete --expired\n\n# بررسی و ترمیم تمام جداول دیتابیس:\nwp db check && wp db repair`
    },
    relatedTermIds: ['ssh-key-auth', 'db-search-replace', 'staging-environment'],
    seoKeywords: ['wp cli', 'خط فرمان وردپرس', 'ترمینال وردپرس', 'دستورات wp cli']
  },
  {
    id: 'ssh-key-auth',
    termEn: 'SSH Key Authentication',
    termFa: 'اتصال امن سرور با کلیدهای رمزنگاری',
    category: 'devops-server',
    level: 'intermediate',
    phonetic: 'اس اس اچ کی آتنتیکیشن',
    tags: ['ssh', 'security', 'server', 'terminal'],
    shortDefinition: 'روش استاندارد ورود ایمن به ترمینال سرور هاست یا VPS با یک جفت کلید خصوصی و عمومی، بدون نیاز به تایپ کلمه عبور متنی.',
    deepExplanation: 'رمزهای عبور متنی همواره در معرض خطر حملات Brute-Force ربات‌ها هستند. با تولید یک کلید رمزنگاری مدرن (مانند Ed25519) و ثبت کلید عمومی در فایل `authorized_keys` سرور، اتصال ترمینال شما به بالاترین سطح امنیتی ارتقا می‌یابد.',
    vibeCodingImpact: 'ابزارهای خودکار وایب‌کدینگ (مانند کدهای دیپلوی GitHub Actions) برای لاگین به سرور شما جهت آپلود خودکار کدهای قالب، الزاماً نیاز به کلیدهای SSH دارند.',
    goldenPrompt: 'نحوه تولید یک کلید مدرن SSH از نوع Ed25519 در مک/لینوکس و مراحل کپی کردن آن به هاست لینوکسی برای لاگین بدون پسورد را توضیح بده.',
    codeSnippet: {
      language: 'bash',
      description: 'تولید کلید امن SSH و کپی به سرور هاست',
      runContext: 'Local Terminal',
      code: `ssh-keygen -t ed25519 -C "admin@hasanshah.ir"\nssh-copy-id -i ~/.ssh/id_ed25519.pub user@your-server-ip`
    },
    relatedTermIds: ['wp-cli', 'staging-environment', 'opcache-tuning'],
    seoKeywords: ['ورود با کلید ssh', 'ssh key وردپرس', 'امنیت سرور vps', 'اتصال امن به هاست']
  },
  {
    id: 'staging-environment',
    termEn: 'Staging Environment',
    termFa: 'محیط آزمایشی و شبیه‌ساز ایزوله سایت',
    category: 'devops-server',
    level: 'beginner',
    phonetic: 'استیجینگ انوایرومنت',
    tags: ['devops', 'testing', 'deployment', 'workflow'],
    shortDefinition: 'یک کپی دقیق از سایت زنده روی یک ساب‌دامین اختصاصی و مخفی از گوگل، برای تست ویژگی‌های جدید و کدهای هوش مصنوعی قبل از انتشار.',
    deepExplanation: 'هرگز نباید کدهای تولیدشده توسط هوش مصنوعی را مستقیماً روی سایت اصلی که مشتریان در حال خرید هستند تست کنید! محیط استیجینگ به شما اجازه می‌دهد تغییرات قالب، آپدیت‌های ووکامرس و کدهای جدید را در امنیت کامل تست کنید و با یک کلیک (Push to Live) به سایت اصلی منتقل نمایید.',
    vibeCodingImpact: 'حرفه‌ای‌ترین تفاوت یک وایب‌کدر ارشد با یک کاربر معمولی، تست کدهای AI روی استیجینگ است؛ این رویکرد ریسک قطعی سایت برای کارفرما را به صفر مطلق می‌رساند.',
    goldenPrompt: 'چک‌لیست گام‌به‌گام راه‌اندازی یک محیط Staging برای یک فروشگاه ووکامرسی بزرگ: 1) کپی فایل‌ها و دیتابیس 2) تنظیم رمزگذاری با HTTP Basic Auth 3) مسدودسازی ایندکس گوگل با robots.txt 4) غیرفعال‌سازی ایمیل‌های خودکار برای جلوگیری از ارسال پیام اشتباه به مشتریان.',
    codeSnippet: {
      language: 'bash',
      description: 'دستور مسدودسازی موقت موتورهای جستجو در محیط استیجینگ با WP-CLI',
      runContext: 'Staging Server',
      code: `wp option update blog_public 0`
    },
    relatedTermIds: ['wp-cli', 'db-search-replace', 'ssh-key-auth'],
    seoKeywords: ['محیط استیجینگ', 'staging وردپرس', 'تست سایت قبل از انتشار', 'محیط آزمایشی سایت']
  },
  {
    id: 'db-search-replace',
    termEn: 'Database `search-replace`',
    termFa: 'تعویض ایمن دامنه‌ها در دیتابیس وردپرس',
    category: 'devops-server',
    level: 'advanced',
    phonetic: 'سرچ اند ریپلیس',
    tags: ['database', 'serialization', 'migration', 'wp-cli'],
    shortDefinition: 'فرآیند جایگزینی آدرس دامنه‌ها و لینک‌ها در دیتابیس با در نظر گرفتن ساختار رشته‌های سریال‌شده پی‌اچ‌پی (PHP Serialized Arrays).',
    deepExplanation: 'اگر در phpMyAdmin یک کوئری ساده SQL برای تغییر دامنه اجرا کنید (مثلاً `old.com` به `new.com`)، تمام تنظیمات قالب و ویجت‌های سایت خراب می‌شوند! چرا؟ چون طول کاراکترهای رشته در دیتابیس ذخیره شده است. ابزارهای رسمی مانند `wp search-replace` این محاسبه طول رشته را به صورت خودکار اصلاح می‌کنند.',
    vibeCodingImpact: 'هوش مصنوعی اغلب فراموش می‌کند که داده‌های وردپرس سریال شده هستند و یک اسکریپت ساده پایتون یا کوئری خام SQL برای تغییر دامنه پیشنهاد می‌دهد که دیتابیس را فاسد می‌کند.',
    goldenPrompt: 'دستور دقیق WP-CLI برای جایگزینی دامنه قدیمی http://staging.local با https://hasanshah.ir در تمام جداول دیتابیس همراه با سوییچ تست فرضی (--dry-run) را بنویس.',
    codeSnippet: {
      language: 'bash',
      description: 'تست فرضی و اجرای نهایی تغییر دامنه بدون خرابی داده‌های سریال‌شده',
      runContext: 'Server Terminal',
      code: `# گام اول: تست فرضی بدون اعمال تغییر:\nwp search-replace 'http://dev.local' 'https://hasanshah.ir' --dry-run\n\n# گام دوم: اجرای قطعی در کل دیتابیس:\nwp search-replace 'http://dev.local' 'https://hasanshah.ir' --all-tables`
    },
    relatedTermIds: ['wp-cli', 'staging-environment', 'opcache-tuning'],
    seoKeywords: ['سرچ ریپلیس دیتابیس', 'search-replace وردپرس', 'انتقال هاست وردپرس', 'خرابی داده های سریال شده']
  },
  {
    id: 'opcache-tuning',
    termEn: 'PHP OPcache & FastCGI',
    termFa: 'کامپایلر بایت‌کد پی‌اچ‌پی در حافظه رم سرور',
    category: 'devops-server',
    level: 'advanced',
    phonetic: 'اوپی کش تیونینگ',
    tags: ['performance', 'php', 'server', 'ttfb'],
    shortDefinition: 'موتور شتاب‌دهنده رسمی PHP که اسکریپت‌های کامپایل‌شده قالب وردپرس را در حافظه رم نگه می‌دارد تا برای هر درخواست نیازی به خواندن دیسک نباشد.',
    deepExplanation: 'وردپرس در هر بار بارگذاری صفحه باید صدها فایل PHP را بازخوانی، تجزیه (Parse) و کامپایل کند. با فعال بودن OPcache با تنظیمات حرفه‌ای، کدهای بایت‌کد در رم ذخیره شده و زمان پاسخ اولیه سرور (TTFB) از ۱ ثانیه به کمتر از ۱۰۰ میلی‌ثانیه سقوط می‌کند.',
    vibeCodingImpact: 'یک وایب‌کدر که سایت را برای کارفرما تحویل می‌دهد، اگر این تنظیمات را در هاست فعال کند، سایت حتی تحت ترافیک چند هزار نفری هم کاملاً سبک و سریع می‌ماند.',
    goldenPrompt: 'بهترین مقادیر پیکربندی فایل php.ini برای ماژول OPcache در یک سرور اختصاصی وردپرس با ۴ گیگابایت رم را بنویس تا بیشترین شتاب لود صفحات بدون پر شدن حافظه حاصل شود.',
    codeSnippet: {
      language: 'bash',
      description: 'تنظیمات طلایی ماژول OPcache در فایل php.ini سرور',
      runContext: 'php.ini',
      code: `opcache.enable=1\nopcache.memory_consumption=256\nopcache.max_accelerated_files=20000\nopcache.revalidate_freq=60\nopcache.validate_timestamps=1`
    },
    relatedTermIds: ['core-web-vitals', 'wp-cli', 'ssh-key-auth'],
    seoKeywords: ['opcache وردپرس', 'کاهش ttfb', 'بهینه سازی php سرور', 'افزایش سرعت هاست وردپرس']
  },
  {
    id: 'core-web-vitals',
    termEn: 'Core Web Vitals (CWV)',
    termFa: 'سنجه‌های حیاتی سرعت و تجربه کاربری گوگل',
    category: 'devops-server',
    level: 'intermediate',
    phonetic: 'کور وب ویتالز',
    tags: ['seo', 'google', 'speed', 'lcp', 'inp', 'cls'],
    shortDefinition: 'سه فاکتور رسمی گوگل برای سنجش سرعت، واکنش‌گرایی و ثبات بصری سایت: LCP (سرعت لود المان اصلی)، INP (سرعت پاسخ به کلیک)، و CLS (پرش صفحه).',
    deepExplanation: 'گوگل در الگوریتم رتبه‌بندی نتایج سرچ، سایت‌هایی که سنجه‌های وب ویتال را پاس کنند بالاتر از رقبا نشان می‌دهد. در سایت‌های وایب‌کدینگ با وردپرس، حذف کتابخانه‌های سنگین، لود تنبل تصاویر و بهینه‌سازی TTFB سرور، کسب امتیاز ۱۰۰ سبز را ممکن می‌سازد.',
    vibeCodingImpact: 'وایب‌کدرهای مبتدی فقط به زیبایی ظاهر سایت اهمیت می‌دهند؛ اما وایب‌کدر ارشد با نظارت بر وب‌ویتالز تضمین می‌کند که سایت در صفحه یک گوگل بدرخشد.',
    goldenPrompt: 'راهنمای عملی برای بهینه‌سازی سنجه LCP در یک پوسته وردپرس: 1) پیش‌بارگذاری تصویر اصلی هدر با rel="preload" 2) بارگذاری بهینه فونت‌های لوکال 3) تاخیر در لود اسکریپت‌های غیرضروری.',
    codeSnippet: {
      language: 'html',
      description: 'پیش‌بارگذاری تصویر اصلی هدر (LCP Image) در بخش head سایت',
      runContext: 'header.php',
      code: `<link rel="preload" as="image" href="/assets/hero-banner.webp" fetchpriority="high" type="image/webp">`
    },
    relatedTermIds: ['opcache-tuning', 'staging-environment', 'db-search-replace'],
    seoKeywords: ['core web vitals', 'سنجه های وب ویتالز', 'lcp وردپرس', 'سرعت سایت گوگل']
  }
];
