import { EncyclopediaTerm } from './types';

export const databaseApiTerms: EncyclopediaTerm[] = [
  {
    id: 'wp-posts-schema',
    termEn: 'wp_posts and wp_postmeta Schema',
    termFa: 'معماری جداول محتوا و مدل مقدار-ویژگی (EAV)',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'وردپرس پست متادیتا اسکیما',
    tags: ['database', 'mysql', 'architecture', 'meta'],
    shortDefinition: 'ساختار پایگاه داده رابطه‌ای وردپرس که اطلاعات اصلی در wp_posts و صدها فیلد سفارشی در جدول کلید-مقدار wp_postmeta نگه‌داری می‌شوند.',
    deepExplanation: 'جدول wp_posts قلب تپنده وردپرس است که نوشته‌ها، برگه‌ها، فایل‌های پیوست و تمام CPTها را نگه می‌دارد. اطلاعات جانبی (مثل قیمت، آدرس، نام استاد) در wp_postmeta ذخیره می‌شوند. کوئری‌های فیلتر با متادیتا نیازمند JOINهای سنگین هستند و باید در پروژه‌های بزرگ بهینه شوند.',
    vibeCodingImpact: 'هوش مصنوعی برای هر نیاز جدید فوراً پیشنهاد می‌دهد یک فیلد متای جدید در postmeta بسازید. یک وایب‌کدر آگاه می‌داند که اگر یک جدول به ۱۰ میلیون رکورد postmeta برسد، سایت به شدت کند می‌شود و باید از جداول سفارشی یا ایندکس استفاده کند.',
    goldenPrompt: 'من می‌خواهم ساختار ذخیره اطلاعات را برای یک سایت با حجم تراکنش بالا معماری کنم. توضیح بده آیا استفاده از wp_postmeta برای ذخیره فیلدهای سفارشی مناسب است یا باید یک جدول دیتابیس مستقل (Custom Table) با wpdb طراحی کنیم؟ معایب و مزایا را مقایسه کن.',
    codeSnippet: {
      language: 'sql',
      description: 'ارتباط بین جدول پست‌ها و جدول متادیتا در دیتابیس مای‌اس‌کیوال',
      runContext: 'MySQL Query',
      code: "SELECT p.ID, p.post_title, m.meta_value AS project_cost\nFROM wp_posts p\nLEFT JOIN wp_postmeta m ON (p.ID = m.post_id AND m.meta_key = 'cost')\nWHERE p.post_type = 'hs_portfolio' AND p.post_status = 'publish';"
    },
    relatedTermIds: ['wpdb-class', 'sql-injection-guard', 'wp-rest-api'],
    seoKeywords: ['دیتابیس وردپرس', 'wp_posts', 'wp_postmeta', 'ساختار دیتابیس مای اس کیو ال']
  },
  {
    id: 'wpdb-class',
    termEn: '$wpdb Global Database Class',
    termFa: 'کلاس سراسری ارتباط امن با پایگاه داده',
    category: 'database-api',
    level: 'intermediate',
    phonetic: 'دابلیو پی دی بی',
    tags: ['mysql', 'database', 'sql', 'backend'],
    shortDefinition: 'کلاس بومی و امن وردپرس برای اجرای مستقیم دستورات SQL، دریافت ردیف‌ها، و ویرایش جداول اختصاصی پایگاه داده.',
    deepExplanation: 'هرگز نباید در پروژه‌های وردپرس از توابع خام PHP مانند mysqli_connect یا PDO مستقیم استفاده کنید! آبجکت سراسری $wpdb حاوی متدهای بهینه‌ای مثل get_results, get_row, get_var, insert, update است و پیشوند جداول را به طور خودکار مدیریت می‌کند.',
    vibeCodingImpact: 'هوش مصنوعی اگر هدایت نشود، نام جداول را به صورت پیش‌فرض wp_posts هاردکد می‌کند؛ در حالی که روی سرور امن کاربر ممکن است پیشوند دیتابیس اختصاصی باشد و با اولین اجرا خطای Database Table Not Found رخ می‌دهد.',
    goldenPrompt: 'کدی با شیء سراسری $wpdb بنویس که لیست آخرین سفارش‌ها را از جدول اختصاصی با استفاده از prefix دیتابیس بخواند. حتماً از متد get_results با فرمت بازگشتی ARRAY_A استفاده کن و اصول امنیت دیتابیس را رعایت نما.',
    codeSnippet: {
      language: 'php',
      description: 'نحوه فراخوانی استاندارد $wpdb و واکشی اطلاعات از دیتابیس',
      runContext: 'PHP Script',
      code: "global $wpdb;\n$table_name = $wpdb->prefix . 'custom_leads';\n$leads = $wpdb->get_results(\n    \"SELECT id, full_name, created_at FROM $table_name ORDER BY id DESC LIMIT 10\",\n    ARRAY_A\n);"
    },
    relatedTermIds: ['sql-injection-guard', 'wp-posts-schema', 'custom-endpoints'],
    seoKeywords: ['کلاس wpdb', '$wpdb در وردپرس', 'کوئری مستقیم به دیتابیس وردپرس', 'پیشوند جداول دیتابیس']
  },
  {
    id: 'sql-injection-guard',
    termEn: 'SQL Injection Guard ($wpdb->prepare)',
    termFa: 'محافظت در برابر تزریق کد مخرب به دیتابیس',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'اس کیو ال اینجکشن گارد',
    tags: ['security', 'sql', 'prepare', 'sanitization'],
    shortDefinition: 'متد حیاتی در وردپرس که متغیرهای ارسالی کاربر را قبل از ترکیب در کوئری SQL پاکسازی و آماده‌سازی می‌کند تا امکان نفوذ هکر وجود نداشته باشد.',
    deepExplanation: 'تزریق SQL یکی از خطرناک‌ترین راه‌های سرقت کل دیتابیس سایت است. متد prepare در کلاس $wpdb مانند توابع sprintf عمل می‌کند و با جایگزینی متغیرها به صورت پارامتری (%s برای رشته و %d برای عدد)، کدهای خطرناک را خنثی می‌سازد.',
    vibeCodingImpact: 'بزرگ‌ترین فاجعه امنیتی کدهای تولیدشده توسط هوش مصنوعی آماتور این است که متغیرهای ورودی کاربر را مستقیماً داخل رشته کوئری دیتابیس قرار می‌دهد. چنین کدی سایت را در کسری از ثانیه هک‌پذیر می‌کند.',
    goldenPrompt: 'یک کوئری جستجوی مستقیم در دیتابیس بنویس که ایمیل کاربر را دریافت کند. الزامی است که حتماً از wpdb prepare با پلیس‌هولدر %s استفاده شود تا تحت هیچ شرایطی حفره SQL Injection به وجود نیاید.',
    codeSnippet: {
      language: 'php',
      description: 'الگوی اجباری استفاده از prepare برای ایمن‌سازی کوئری در برابر هکرها',
      runContext: 'functions.php',
      code: "global $wpdb;\n$safe_email = sanitize_email( $_POST['email'] );\n$user_data  = $wpdb->get_row(\n    $wpdb->prepare(\n        \"SELECT ID, display_name FROM {$wpdb->users} WHERE user_email = %s\",\n        $safe_email\n    )\n);"
    },
    relatedTermIds: ['wpdb-class', 'wp-posts-schema', 'jwt-authentication'],
    seoKeywords: ['sql injection وردپرس', 'wpdb prepare', 'امنیت دیتابیس وردپرس', 'جلوگیری از تزریق sql']
  },
  {
    id: 'wp-rest-api',
    termEn: 'WP REST API Standard',
    termFa: 'زیرساخت وب‌سرویس و داده‌های JSON وردپرس',
    category: 'database-api',
    level: 'intermediate',
    phonetic: 'وردپرس رست ای پی آی',
    tags: ['rest-api', 'json', 'headless', 'integration'],
    shortDefinition: 'لایه وب‌سرویس استاندارد جهانی در هسته وردپرس که به هر اپلیکیشنی اجازه می‌دهد داده‌ها را با فرمت JSON ارسال یا دریافت کند.',
    deepExplanation: 'با WP REST API (مسیر پیش‌فرض /wp-json/wp/v2/)، وردپرس فراتر از یک سایت معمولی رفته و تبدیل به یک سرور دیتای مقیاس‌پذیر برای اپ‌های Next.js، ری‌اکت نیتیو و فلاتر می‌شود. این قابلیت سنگ‌بنای معماری‌های نوین Headless است.',
    vibeCodingImpact: 'یک وایب‌کدر مسلط می‌تواند در ادیتور هوش مصنوعی به سادگی بگوید: یک فرانت‌سایت سبک با Next.js بساز که مقالات را از REST API بگیرد. بدون این دانش، مجبور به کدهای سنگین PHP در فرانت خواهید بود.',
    goldenPrompt: 'یک تابع جاوااسکریپت با Fetch API مدرن بنویس که ۵ پروژه آخر را از مسیر /wp-json/wp/v2/hs_portfolio با متدهای async/await دریافت کرده و خطاهای شبکه را با try/catch مدیریت کند.',
    codeSnippet: {
      language: 'javascript',
      description: 'دریافت داده‌های پست از REST API با جاوااسکریپت مدرن',
      runContext: 'Frontend Script',
      code: "async function fetchProjects() {\n  try {\n    const res = await fetch('/wp-json/wp/v2/hs_portfolio?per_page=5');\n    if (!res.ok) throw new Error('خطا در دریافت پروژه‌ها');\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(err);\n  }\n}"
    },
    relatedTermIds: ['custom-endpoints', 'jwt-authentication', 'wpdb-class'],
    seoKeywords: ['wp rest api', 'رست ای پی آی وردپرس', 'api وردپرس', 'هدلس وردپرس']
  },
  {
    id: 'custom-endpoints',
    termEn: 'Custom REST Endpoints (register_rest_route)',
    termFa: 'ساخت مسیرهای اختصاصی API در وردپرس',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'کاستوم اندپوینتز',
    tags: ['api', 'rest', 'backend', 'routing'],
    shortDefinition: 'ساخت URLهای سفارشی برای تبادل داده‌های دلخواه از طریق REST API وردپرس همراه با اعتبارسنجی پارامترها و دسترسی‌ها.',
    deepExplanation: 'گاهی اوقات مسیرهای پیش‌فرض وردپرس داده‌های بیش از حد حجیم برمی‌گردانند یا شما نیاز به دریافت اطلاعات فرم با فیلدهای خاص دارید. با تابع register_rest_route در فضای نام اختصاصی اندپوینت امن خود را تعریف می‌کنید.',
    vibeCodingImpact: 'هوش مصنوعی آماتور معمولاً کدهای پردازش فرم را در فایل‌های جداگانه با admin-ajax.php که کند و قدیمی است می‌نویسد؛ در حالی که اندپوینت REST مدرن، سریع‌تر و استانداردتر است.',
    goldenPrompt: 'یک اندپوینت اختصاصی REST با register_rest_route بساز: فضای نام hasanshah/v1، مسیر /newsletter، متد POST. الزامات: اعتبارسنجی فرمت ایمیل در args و بررسی دسترسی با permission_callback.',
    codeSnippet: {
      language: 'php',
      description: 'ثبت اصولی یک روت اختصاصی REST API در functions.php',
      runContext: 'functions.php',
      code: "add_action( 'rest_api_init', function() {\n    register_rest_route( 'hasanshah/v1', '/submit-lead', [\n        'methods'             => 'POST',\n        'callback'            => 'hs_handle_lead_submission',\n        'permission_callback' => '__return_true',\n    ]);\n});"
    },
    relatedTermIds: ['wp-rest-api', 'jwt-authentication', 'sql-injection-guard'],
    seoKeywords: ['register_rest_route', 'ساخت api اختصاصی وردپرس', 'اندپوینت سفارشی', 'توسعه وب سرویس']
  },
  {
    id: 'jwt-authentication',
    termEn: 'JWT Authentication for WP REST API',
    termFa: 'احراز هویت توکن‌محور با JWT در وردپرس',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'جی دبلیو تی آتنتیکیشن',
    tags: ['auth', 'jwt', 'security', 'token'],
    shortDefinition: 'روش استاندارد احراز هویت بدون کوکی با توکن رمزنگاری‌شده (JSON Web Token) برای ورود کاربران در اپلیکیشن‌های فرانت جداگانه.',
    deepExplanation: 'در وب سنتی وردپرس از کوکی‌های مرورگر استفاده می‌شود. اما وقتی فرانت‌سایت روی یک دامنه جداگانه با Next.js اجرا می‌شود، باید با نام کاربری و رمز، یک توکن امضاشده JWT دریافت کند و در هدر Authorization برای درخواست‌های محافظت‌شده ارسال نماید.',
    vibeCodingImpact: 'هنگام وایب‌کدینگ اپ‌های متصل به وردپرس، هوش مصنوعی بدون احراز هویت توکن نمی‌تواند کارهایی مانند درج دیدگاه یا خرید دوره توسط کاربر لاگین‌شده را پیاده کند.',
    goldenPrompt: 'نحوه پیکربندی احراز هویت JWT را در وردپرس برای ارتباط با فرانت‌سایت Next.js بنویس: تنظیمات کلید JWT_AUTH_SECRET_KEY در wp-config.php و نمونه درخواست احراز هویت در سمت کلاینت.',
    codeSnippet: {
      language: 'php',
      description: 'تعریف کلیدهای محرمانه امضای JWT در فایل تنظیمات اصلی',
      runContext: 'wp-config.php',
      code: "define( 'JWT_AUTH_SECRET_KEY', 'your-ultra-secure-random-token-here' );\ndefine( 'JWT_AUTH_CORS_ENABLE', true );"
    },
    relatedTermIds: ['custom-endpoints', 'wp-rest-api', 'sql-injection-guard'],
    seoKeywords: ['jwt در وردپرس', 'احراز هویت توکن وردپرس', 'ورود بدون کوکی', 'امنیت rest api']
  }
];
