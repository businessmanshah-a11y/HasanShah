import { EncyclopediaTerm } from './types';

export const databaseApiTerms: EncyclopediaTerm[] = [
  {
    id: 'wp-posts-schema',
    termEn: 'wp_posts and wp_postmeta Schema',
    termFa: 'معماری جداول محتوا و مدل مقدار-ویژگی (EAV)',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'دیتابیس اِسکیما (wp_posts)',
    tags: ['database', 'mysql', 'architecture', 'meta'],
    sequenceOrder: 26,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: false,
    isCritical5: false,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'کتاب اصلی وردپرس (wp_posts) و برچسب‌های چسبان آن (wp_postmeta)؛ که اگر بدون ایندکس و بی‌رویه پر شوند، دیتابیس فلج می‌شود.',
    beginnerTrap: 'ذخیره میلیون‌ها رکورد دیتای عددی یا جستجوپذیر در جدول wp_postmeta؛ سرچ فیلترهای فروشگاه تا ۱۰ ثانیه کند می‌شود!',
    analogy: 'مثل یک دفترچه اصلی تلفن (wp_posts) و صدها برچسب چسبان زرد (wp_postmeta) برای یادداشت آدرس، سن و شغل افراد است؛ اگر ۱۰ میلیون برچسب به دفترچه بچسبانی، ورق زدنش ساعت‌ها طول می‌کشد!',
    humanQuestion: 'وردپرس اطلاعات مقالات، قیمت‌ها و محصولات من را در کجای پایگاه داده نگه‌داری می‌کند؟',
    realPain: 'اگر این جدول را نشناسی و میلیون‌ها داده را بدون ایندکس در postmeta بریزی، سرچ یک محصول در فروشگاهت ۱۰ ثانیه طول می‌کشد و مشتری فرار می‌کند!',
    commonAiError: {
      errorSnippet: 'Slow Query: Joining wp_postmeta 8 times in single query taking 4.2s',
      explanationFa: 'هوش مصنوعی کوئری وحشتناکی نوشته که ۸ بار این جدول سنگین رو به خودش وصل کرده و سرور به نفس‌نفس افتاده!'
    },
    freelanceTip: 'به کارفرما توضیح بده که با ساخت جداول اختصاصی برای دیتای سنگین، سرعت سایتش مثل موشک می‌ماند.',
    asciiDiagram: `[جدول wp_posts: عنوان، متن، تاریخ، وضعیت]
                     │
                     ▼ (ارتباط یک به چند با کلید post_id)
[جدول wp_postmeta: فیلدهای سفارشی (قیمت، امتیاز، مدرس)]`,
    injectionTarget: 'کوئری‌های پایگاه داده در کلاس‌های سرویس یا توابع کار با متادیتا',
    cursorPrompt: `[نقش]: معمار ارشد پایگاه داده MySQL و مهندس بهینه‌سازی دیتابیس وردپرس.
[زمینه]: ساختار جداول wp_posts و wp_postmeta.
[وظیفه]: یک کوئری سریع برای دریافت پست‌ها به همراه متادیتای اختصاصی [نام فیلد] با کمترین تعداد JOIN بنویس.
[شروط سلبی الزامی]:
- هرگز از JOIN های تودرتوی متعدد روی wp_postmeta استفاده نکن.
- از متد update_post_caches برای بهینه‌سازی خواندن در یک مرحله استفاده کن.
- از SELECT * اکیداً خودداری کن و فقط ستون‌های ضروری را درخواست کن.
[خروجی]: کوئری SQL یا متد بهینه‌شده WP_Query.`,
    claudePrompt: `معماری ذخیره ۵۰۰ هزار رکورد تراکنش در وردپرس را تحلیل کن: آیا نگهداری در wp_postmeta صحیح است یا باید جدول مستقل با ایندکس اختصاصی بسازیم؟ کدهای لازم برای ساخت جدول مستقل با dbDelta را بنویس.`,
    debugPrompt: `کوئری تولید شده در افزونه Query Monitor اخطار Slow Query با زمان لود ۲ ثانیه می‌دهد. کوئری را بازنویسی کن تا از ایندکس دیتابیس استفاده کرده و بدون اسکن کامل جدول اجرا شود.`,
    howToTest: {
      steps: [
        'افزونه Query Monitor را نصب کنید و صفحه حاوی کوئری را باز کنید.',
        'در نوار ابزار بالا روی زمان کوئری دیتابیس کلیک کنید.',
        'آیا کوئری قرمزی با زمان بالای ۰.۰۵ ثانیه یا JOIN های متعدد روی postmeta وجود دارد؟'
      ],
      expectedResult: 'تعداد کل کوئری‌های صفحه زیر ۲۵ عدد و زمان پاسخ دیتابیس زیر ۵۰ میلی‌ثانیه است.',
      redFlags: ['حضور کوئری‌های چندباره LEFT JOIN روی جدول postmeta']
    },
    shortDefinition: 'ساختار پایگاه داده رابطه‌ای وردپرس که اطلاعات اصلی در wp_posts و صدها فیلد سفارشی در جدول کلید-مقدار wp_postmeta نگه‌داری می‌شوند.',
    deepExplanation: 'جدول wp_posts قلب تپنده وردپرس است که نوشته‌ها و CPTها را نگه می‌دارد. اطلاعات جانبی در wp_postmeta ذخیره می‌شوند.',
    vibeCodingImpact: 'یک وایب‌کدر آگاه می‌داند که اگر جدولی به میلیون‌ها رکورد postmeta برسد باید از جداول سفارشی یا ایندکس استفاده کند.',
    goldenPrompt: 'من می‌خواهم ساختار ذخیره اطلاعات را برای یک سایت با حجم تراکنش بالا معماری کنم. توضیح بده آیا استفاده از wp_postmeta مناسب است یا باید یک جدول مستقل با wpdb طراحی کنیم؟',
    codeSnippet: {
      language: 'sql',
      description: 'ارتباط بین جدول پست‌ها و جدول متادیتا در دیتابیس مای‌اس‌کیوال',
      runContext: 'MySQL Query',
      code: "SELECT p.ID, p.post_title, m.meta_value AS project_cost\nFROM wp_posts p\nLEFT JOIN wp_postmeta m ON (p.ID = m.post_id AND m.meta_key = 'cost')\nWHERE p.post_type = 'hs_portfolio' AND p.post_status = 'publish';"
    },
    prerequisiteTermIds: ['custom-post-types'],
    relatedTermIds: ['wpdb-class', 'sql-injection-guard'],
    seoKeywords: ['دیتابیس وردپرس', 'wp_posts', 'wp_postmeta', 'ساختار دیتابیس مای اس کیو ال']
  },
  {
    id: 'wpdb-class',
    termEn: '$wpdb Global Database Class',
    termFa: 'کلاس سراسری ارتباط امن با پایگاه داده',
    category: 'database-api',
    level: 'intermediate',
    phonetic: 'دابلیو-پی-دی-بی ($wpdb)',
    tags: ['mysql', 'database', 'sql', 'backend'],
    sequenceOrder: 27,
    learningStation: 'station-3',
    readingTimeMinutes: 1,
    targetPersonas: ['developer'],
    isNoCodeFriendly: false,
    isCritical5: false,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'تنها راننده مجاز برای ورود به گاوصندوق دیتابیس وردپرس؛ که پیشوند جداول را به صورت خودکار مدیریت می‌کند.',
    beginnerTrap: 'هاردکد کردن نام جداول به صورت دستی مثل wp_users؛ اگر در هاست مشتری پیشوند جدول wp_ نباشد، کل کدهای شما به خطای عدم وجود جدول می‌خورند!',
    analogy: 'مثل یک محافظ شخصی مسلح و راننده کاربلد است که فقط او حق دارد تو را به داخل گاوصندوق بانک مرکزی (دیتابیس) ببرد و بیاورد!',
    humanQuestion: 'چطور با کدهای PHP به صورت مستقیم و بدون تداخل از پایگاه داده وردپرس اطلاعات بخوانیم؟',
    realPain: 'اگر به جای $wpdb از توابع خام PHP استفاده کنی، با تغییر نسخه دیتابیس یا هاست، کل سایت از کار می‌افتد.',
    commonAiError: {
      errorSnippet: 'Table "wp_users" does not exist (custom table prefix ignored)',
      explanationFa: 'هوش مصنوعی پیشوند جداول دیتابیس رو هاردکد کرده، در حالی که پیشوند سایت شما چیز دیگه‌ای بوده!'
    },
    freelanceTip: 'همیشه از پیشوند پویا ($wpdb->prefix) استفاده کن تا پلاگین یا کدهای اختصاصی روی تمام هاست‌ها بدون مشکل نصب شوند.',
    asciiDiagram: `[کد PHP شما] ──> global $wpdb; ──> $wpdb->prefix . 'my_table'
                                        │
                                        ▼ (ارتباط مستقیم و بهینه‌شده)
                           پایگاه داده MySQL وردپرس`,
    injectionTarget: 'فایل functions.php یا کلاس‌های اختصاصی مدیریت اطلاعات',
    cursorPrompt: `[نقش]: مهندس توسعه بک‌اند وردپرس با تخصص $wpdb.
[زمینه]: تعامل مستقیم با پایگاه داده وردپرس.
[وظیفه]: با فراخوانی شیء سراسری global $wpdb، آخرین رکوردهای جدول [نام جدول] را واکشی کن.
[شروط سلبی الزامی]:
- هرگز نام جدول را با پیشوند ثابت ننویس؛ حتماً از $wpdb->prefix استفاده کن.
- از توابع خام mysqli یا pdo جداً خودداری کن.
- حافظه دریافتی را با ARRAY_A به شکل آرایه انجمنی تمیز تحویل بده.
[خروجی]: قطعه کد استاندارد PHP.`,
    claudePrompt: `کدی برای درج، به‌روزرسانی و حذف یک رکورد در جدول سفارشی با استفاده از متدهای $wpdb->insert و $wpdb->update بنویس که خطاهای بازگشتی را نیز بررسی کند.`,
    debugPrompt: `دستور SQL با خطای Table doesn't exist متوقف شده است. مطمئن شو پیشوند جدول با $wpdb->prefix تولید شده و به صورت رشته متنی ساده نوشته نشده است.`,
    howToTest: {
      steps: [
        'در پیشخوان وردپرس پیشوند جدول را در فایل wp-config.php چک کنید.',
        'کد واکشی اطلاعات با $wpdb را اجرا کرده و خروجی را با var_dump بررسی کنید.',
        'آیا ردیف‌های جدول به درستی در قالب آرایه خوانده شدند؟'
      ],
      expectedResult: 'اطلاعات بدون نیاز به نوشتن کوئری‌های پیچیده و با پیشوند متغیر به درستی لود می‌شوند.',
      redFlags: ['استفاده از عبارت wp_ به صورت متن ثابت درون کوئری']
    },
    shortDefinition: 'کلاس بومی و امن وردپرس برای اجرای مستقیم دستورات SQL، دریافت ردیف‌ها، و ویرایش جداول اختصاصی پایگاه داده.',
    deepExplanation: 'هرگز نباید در پروژه‌های وردپرس از توابع خام PHP مانند mysqli استفاده کنید. آبجکت $wpdb پیشوند جداول را به طور خودکار مدیریت می‌کند.',
    vibeCodingImpact: 'هوش مصنوعی اگر هدایت نشود، نام جداول را به صورت پیش‌فرض هاردکد می‌کند و با اولین اجرا خطای عدم یافتن جدول رخ می‌دهد.',
    goldenPrompt: 'کدی با شیء سراسری $wpdb بنویس که لیست آخرین سفارش‌ها را از جدول اختصاصی با استفاده از prefix دیتابیس بخواند.',
    codeSnippet: {
      language: 'php',
      description: 'نحوه فراخوانی استاندارد $wpdb و واکشی اطلاعات از دیتابیس',
      runContext: 'PHP Script',
      code: "global $wpdb;\n$table_name = $wpdb->prefix . 'custom_leads';\n$leads = $wpdb->get_results(\n    \"SELECT id, full_name, created_at FROM $table_name ORDER BY id DESC LIMIT 10\",\n    ARRAY_A\n);"
    },
    prerequisiteTermIds: ['wp-posts-schema'],
    relatedTermIds: ['sql-injection-guard', 'wp-posts-schema'],
    seoKeywords: ['کلاس wpdb', '$wpdb در وردپرس', 'کوئری مستقیم به دیتابیس وردپرس', 'پیشوند جداول دیتابیس']
  },
  {
    id: 'sql-injection-guard',
    termEn: 'SQL Injection Guard ($wpdb->prepare)',
    termFa: 'محافظت در برابر تزریق کد مخرب به دیتابیس',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'اِس-کیو-اِل این-جِک-شِن گارد',
    tags: ['security', 'sql', 'prepare', 'sanitization'],
    sequenceOrder: 28,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'دستگاه گیت بازرسی فرودگاه برای دیتابیس؛ کلمات ارسالی کاربر را اسکن و خنثی می‌کند تا کدهای هکری وارد پایگاه داده نشوند.',
    beginnerTrap: 'چسباندن مستقیم ورودی کاربر درون رشته کوئری با نقطه (. $user_input)؛ هکر با وارد کردن یک کوتیشن ساده تمام نام‌های کاربری و پسوردهای سایت را تخلیه می‌کند!',
    analogy: 'مثل دستگاه ایکس‌ری فرودگاه است؛ قبل از اینکه مسافر (ورودی کاربر) سوار هواپیما (دیتابیس) شود، چمدانش را اسکن می‌کند تا اسلحه یا بمبی قاچاق نکرده باشد!',
    humanQuestion: 'چرا می‌گویند یک فرم ساده جستجو در سایت ممکن است باعث شود کل دیتابیس لو برود یا پاک شود؟',
    realPain: 'تزریق SQL آسان‌ترین راه هکرهاست؛ با وارد کردن یک عبارت ساده مثل \' OR 1=1 -- در فرم سرچ، هکر تمام نام‌های کاربری و پسوردهای دیتابیس را دانلود می‌کند!',
    commonAiError: {
      errorSnippet: 'Vulnerability: Unescaped parameter passed directly into raw SQL string',
      explanationFa: 'هوش مصنوعی کلمات کاربر رو بدون اسکن امنیتی فرستاده به دیتابیس و سایت هک‌پذیر شده!'
    },
    freelanceTip: 'به کارفرما ضمانت بده که تمام کوئری‌های دست‌نویس سایت با متد prepare ایمن‌سازی شده‌اند تا احتمال هک شدن دیتابیس صفر مطلق باشد.',
    asciiDiagram: `[ورودی مشکوک هکر: admin' OR '1'='1]
                 │
                 ▼
[$wpdb->prepare("WHERE email = %s", $input)] ──> تبدیل کدهای مخرب به متن بی‌خطر
                 │
                 ▼
[اجرای کاملاً امن در دیتابیس بدون لو رفتن اطلاعات]`,
    injectionTarget: 'تمام کوئری‌های سفارشی حاوی متغیرهای ورودی در functions.php',
    cursorPrompt: `[نقش]: افسر ارشد امنیت سایبری وردپرس (WordPress Security Officer).
[زمینه]: حفاظت در برابر حملات SQL Injection با متد prepare در @functions.php.
[وظیفه]: کوئری جستجوی کاربران بر اساس نام یا شماره تماس را بنویس.
[شروط سلبی فوق‌العاده الزامی]:
- هرگز و تحت هیچ شرایطی متغیر کاربر را مستقیم با رشته کوئری ترکیب نکن.
- استفاده اجباری از $wpdb->prepare با مشخص‌کننده‌های نوع داده (%s برای متن، %d برای عدد صحیح).
- ورودی را ابتدا با sanitize_text_field پاکسازی کن.
[خروجی]: قطعه کد نفوذناپذیر با تضمین امنیتی ۱۰۰٪.`,
    claudePrompt: `یک کوئری جستجو در وردپرس بنویس که ورودی کاربر را از پارامتر GET دریافت کرده و با رعایت کامل متد $wpdb->prepare از هرگونه نفوذ و تزریق SQL جلوگیری کند.`,
    debugPrompt: `کوئری تولید شده دارای خطای Missing argument in wpdb::prepare است. مطمئن شو تعداد نشانگرهای %s یا %d دقیقاً با تعداد آرگومان‌های ارسالی همخوانی دارد.`,
    howToTest: {
      steps: [
        'در فیلد ورودی جستجو عبارت مخرب تست: \' OR \'1\'=\'1 را تایپ و ارسال کنید.',
        'اگر سیستم هیچ رکوردی پیدا نکرد یا خطا نداد، متد prepare فعال است.',
        'اگر دیتابیس تمام ردیف‌ها را تخلیه کرد، سایت فوراً در خطر نفوذ قرار دارد!'
      ],
      expectedResult: 'ورودی‌های مخرب مانند کاراکترهای متنی ساده تلقی شده و خنثی می‌شوند.',
      redFlags: ['الحاق مستقیم متغیرها با علامت نقطه درون رشته SELECT']
    },
    shortDefinition: 'متد حیاتی در وردپرس که متغیرهای ارسالی کاربر را قبل از ترکیب در کوئری SQL پاکسازی و آماده‌سازی می‌کند تا امکان نفوذ هکر وجود نداشته باشد.',
    deepExplanation: 'متد prepare در کلاس $wpdb با جایگزینی متغیرها به صورت پارامتری، کدهای خطرناک را خنثی می‌سازد.',
    vibeCodingImpact: 'بزرگ‌ترین فاجعه امنیتی کدهای تولیدشده توسط هوش مصنوعی آماتور این است که ورودی کاربر را مستقیماً داخل رشته کوئری دیتابیس قرار می‌دهد.',
    goldenPrompt: 'یک کوئری جستجوی مستقیم در دیتابیس بنویس که ایمیل کاربر را دریافت کند. الزامی است که حتماً از wpdb prepare استفاده شود.',
    codeSnippet: {
      language: 'php',
      description: 'الگوی اجباری استفاده از prepare برای ایمن‌سازی کوئری در برابر هکرها',
      runContext: 'functions.php',
      code: "global $wpdb;\n$safe_email = sanitize_email( $_POST['email'] );\n$user_data  = $wpdb->get_row(\n    $wpdb->prepare(\n        \"SELECT ID, display_name FROM {$wpdb->users} WHERE user_email = %s\",\n        $safe_email\n    )\n);"
    },
    prerequisiteTermIds: ['wpdb-class'],
    relatedTermIds: ['wpdb-class', 'wp-posts-schema'],
    seoKeywords: ['sql injection وردپرس', 'wpdb prepare', 'امنیت دیتابیس وردپرس', 'جلوگیری از تزریق sql']
  },
  {
    id: 'wp-rest-api',
    termEn: 'WP REST API Standard',
    termFa: 'زیرساخت وب‌سرویس و داده‌های JSON وردپرس',
    category: 'database-api',
    level: 'intermediate',
    phonetic: 'دابلیو-پی رِست اِی-پی-آی',
    tags: ['rest-api', 'json', 'headless', 'integration'],
    sequenceOrder: 29,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'designer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'پیشخوان فیش‌های استاندارد JSON وردپرس؛ تا اپلیکیشن‌های موبایل و سایت‌های مدرن Next.js بتوانند به آسانی با دیتابیس تبادل داده کنند.',
    beginnerTrap: 'بستن یا مسدود کردن کامل REST API به بهانه امنیت؛ که باعث از کار افتادن ادیتور گوتنبرگ و خطای ذخیره‌سازی در سایت می‌شود!',
    analogy: 'مثل پیشخوان سفارش رستوران است؛ مهم نیست مشتری فارسی صحبت کند یا انگلیسی (سایت ری‌اکت باشد یا اپلیکیشن موبایل)، سفارش را به فرمت استاندارد فیش (JSON) تحویل آشپزخانه می‌دهد!',
    humanQuestion: 'چطور می‌توانم سایتم را به اپلیکیشن موبایل، سیستم حسابداری یا پنل‌های مدرن Next.js متصل کنم؟',
    realPain: 'اگر این قابلیت را بلد نباشی، برای اتصال سایت به یک اپلیکیشن باید ماه‌ها وقت صرف نوشتن وب‌سرویس‌های غیراستاندارد کنی.',
    commonAiError: {
      errorSnippet: 'CORS policy blocked access to /wp-json/ from external origin',
      explanationFa: 'هدرهای دسترسی دامنه تنظیم نشده و فرانت‌سایت اجازه خوندن اطلاعات از وردپرس رو نداره!'
    },
    freelanceTip: 'به کارفرما بگو وردپرس صرفاً یک سیستم وبلاگ نیست؛ می‌تواند بک‌اند قدرتمند اپلیکیشن موبایل یا سیستم سازمانی او باشد.',
    asciiDiagram: `[اپلیکیشن موبایل فلاتر یا وب‌سایت Next.js]
                     │
                     ▼ (درخواست اینترنتی: GET /wp-json/wp/v2/posts)
[هسته وردپرس: تحویل داده‌ها به صورت فایل سبک و استاندارد JSON]`,
    injectionTarget: 'آدرس پایه دامنه سایت در مسیر yoursite.com/wp-json/',
    cursorPrompt: `[نقش]: مهندس یکپارچه‌سازی وب‌سرویس‌های وردپرس (Headless WordPress Engineer).
[زمینه]: ارتباط با WP REST API استاندارد.
[وظیفه]: یک تابع جاوااسکریپت ناهمگام با fetch بنویس که لیست آخرین محصولات را از اندپوینت /wp-json/wc/v3/products دریافت کند.
[شروط سلبی الزامی]:
- خطاهای شبکه (Network Errors) و پاسخ‌های غیر ۲۰۰ را با try/catch مدیریت کن.
- از کش داده‌ها در فرانت برای کاهش درخواست‌های مکرر به سرور استفاده کن.
[خروجی]: تابع مدرن جاوااسکریپت تمیز با تایپ‌های TypeScript.`,
    claudePrompt: `دستورالعمل اتصال یک فرانت‌سایت ری‌اکتی به REST API وردپرس همراه با نمونه کدهای دریافت مقالات و رفع خطای متداول CORS را توضیح بده.`,
    debugPrompt: `مرورگر خطای CORS policy می‌دهد و اجازه دسترسی به /wp-json/ را مسدود کرده است. کدی بنویس که هدرهای Access-Control-Allow-Origin مناسب را به پاسخ‌های REST اضافه کند.`,
    howToTest: {
      steps: [
        'در مرورگر خود آدرس سایت را با پسوند /wp-json/wp/v2/posts باز کنید (مثال: hasanshah.ir/wp-json/wp/v2/posts).',
        'آیا یک متن ساختاریافته شامل اطلاعات مقالات با فرمت JSON در مرورگر دیده می‌شود؟',
        'اگر بله، زیرساخت REST API سایت شما کاملاً فعال و آماده اتصال است.'
      ],
      expectedResult: 'نمایش لیست داده‌های متنی با فرمت استاندارد JSON در مرورگر.',
      redFlags: ['دریافت خطای ۴۰۴ یا صفحه سفید به دلیل غیرفعال بودن وب‌سرویس']
    },
    shortDefinition: 'لایه وب‌سرویس استاندارد جهانی در هسته وردپرس که به هر اپلیکیشنی اجازه می‌دهد داده‌ها را با فرمت JSON ارسال یا دریافت کند.',
    deepExplanation: 'با WP REST API وردپرس فراتر از یک سایت معمولی رفته و تبدیل به یک سرور دیتای مقیاس‌پذیر می‌شود.',
    vibeCodingImpact: 'یک وایب‌کدر مسلط می‌تواند به سادگی یک فرانت‌سایت سبک با Next.js بسازد که مقالات را از REST API بگیرد.',
    goldenPrompt: 'یک تابع جاوااسکریپت با Fetch API مدرن بنویس که ۵ پروژه آخر را از مسیر /wp-json/wp/v2/hs_portfolio دریافت کرده و خطاها را مدیریت کند.',
    codeSnippet: {
      language: 'javascript',
      description: 'دریافت داده‌های پست از REST API با جاوااسکریپت مدرن',
      runContext: 'Frontend Script',
      code: "async function fetchProjects() {\n  try {\n    const res = await fetch('/wp-json/wp/v2/hs_portfolio?per_page=5');\n    if (!res.ok) throw new Error('خطا در دریافت پروژه‌ها');\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(err);\n  }\n}"
    },
    prerequisiteTermIds: ['wp-posts-schema'],
    relatedTermIds: ['custom-endpoints', 'jwt-authentication'],
    seoKeywords: ['wp rest api', 'رست ای پی آی وردپرس', 'api وردپرس', 'هدلس وردپرس']
  },
  {
    id: 'custom-endpoints',
    termEn: 'Custom REST Endpoints (register_rest_route)',
    termFa: 'ساخت مسیرهای اختصاصی API در وردپرس',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'کاس-توم رِست اِند-پوینْتز',
    tags: ['api', 'rest', 'backend', 'routing'],
    sequenceOrder: 30,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer'],
    isNoCodeFriendly: false,
    isCritical5: false,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'خط تلفن مستقیم و اختصاصی بین سایت و نرم‌افزارهای خارجی؛ برای ارسال فرم‌ها و تراکنش‌ها با بالاترین سرعت.',
    beginnerTrap: 'فراموش کردن شرط permission_callback در تابع register_rest_route؛ که لاگ وردپرس را پر از خطاهای اخطار امنیتی می‌کند و اطلاعات را در معرض دید عموم می‌گذارد!',
    analogy: 'مثل ساختن یک خط تلفن محرمانه مستقیم بین دو دفتر است؛ به جای زنگ زدن به تلفنخانه شلوغ شرکت، صاف به اتاق مدیر وصل می‌شوی!',
    humanQuestion: 'اگر خواستم اطلاعات خاصی (مثل شماره کارت، ثبت نام سریع یا فرم اختصاصی) را از طریق API رد و بدل کنم چه کنم؟',
    realPain: 'استفاده از سیستم‌های قدیمی مثل admin-ajax برای اپلیکیشن‌ها به شدت کند است و سرور را تحت فشار قرار می‌دهد.',
    commonAiError: {
      errorSnippet: 'REST route registered without permission_callback warning in WP 5.5+',
      explanationFa: 'هوش مصنوعی روت اختصاصی ساخته اما شرط دسترسی نذاشته و لاگ وردپرس پر از اخطار امنیتی شده!'
    },
    freelanceTip: 'ساخت روت‌های اختصاصی REST برای فرم‌های لید و استخدام، بهترین جایگزین برای افزونه‌های سنگین فرم‌ساز است.',
    asciiDiagram: `[درخواست از فرانت‌اند: POST /wp-json/hasanshah/v1/lead]
                                │
                                ▼
         بررسی مجوزها با permission_callback
        ├── تایید نشد ──> ❌ خطای دسترسی ۴۰۳
        └── تایید شد ──> ✅ اجرای تابع callback و ذخیره سریع دیتا`,
    injectionTarget: 'فایل functions.php یا پوشه inc/api.php با هوک rest_api_init',
    cursorPrompt: `[نقش]: معمار وب‌سرویس‌های سفارشی وردپرس (Custom REST Route Architect).
[زمینه]: ثبت مسیر اختصاصی در @functions.php با تابع register_rest_route.
[وظیفه]: اندپوینت اختصاصی با فضای نام [نام فضای نام مثلاً hasanshah/v1] برای ثبت اطلاعات فرم تماس بساز.
[شروط سلبی الزامی]:
- پارامتر permission_callback هرگز نباید خالی باشد (برای روت‌های عمومی از __return_true و برای ادمین از current_user_can استفاده کن).
- ورودی‌های کاربر در پارامتر args با validate_callback و sanitize_callback فیلتر شوند.
[خروجی]: کدهای استاندارد PHP متصل به هوک rest_api_init.`,
    claudePrompt: `یک اندپوینت REST اختصاصی برای دریافت شماره تماس کاربر با متد POST بنویس که اعتبارسنجی شماره ایران (۱۱ رقم با شروع ۰۹) را انجام دهد و در صورت خطا کد وضعیت ۴۰۰ بازگرداند.`,
    debugPrompt: `لاگ دیباگ اخطار می‌دهد که register_rest_route بدون تابع permission_callback رجیستر شده است. لطفاً آرگومان امنیتی لازم را به کد اضافه کن.`,
    howToTest: {
      steps: [
        'در مرورگر یا ابزاری مثل Postman یک درخواست POST به آدرس اندپوینت ارسال کنید.',
        'یک داده تستی با فرمت JSON ارسال کنید.',
        'بررسی کنید آیا پاسخ با کد وضعیت ۲۰۰ و پیام موفقیت دریافت می‌شود؟'
      ],
      expectedResult: 'اندپوینت با امنیت بالا و در زمان پاسخ زیر ۱۰۰ میلی‌ثانیه داده‌ها را پردازش می‌کند.',
      redFlags: ['ثبت اخطار در فایل debug.log به دلیل نبود شرط مجوز']
    },
    shortDefinition: 'ساخت URLهای سفارشی برای تبادل داده‌های دلخواه از طریق REST API وردپرس همراه با اعتبارسنجی پارامترها و دسترسی‌ها.',
    deepExplanation: 'با تابع register_rest_route در فضای نام اختصاصی اندپوینت امن خود را تعریف می‌کنید.',
    vibeCodingImpact: 'اندپوینت REST مدرن، سریع‌تر و استانداردتر از متدهای قدیمی است.',
    goldenPrompt: 'یک اندپوینت اختصاصی REST با register_rest_route بساز: فضای نام hasanshah/v1، مسیر /newsletter، متد POST و بررسی دسترسی.',
    codeSnippet: {
      language: 'php',
      description: 'ثبت اصولی یک روت اختصاصی REST API در functions.php',
      runContext: 'functions.php',
      code: "add_action( 'rest_api_init', function() {\n    register_rest_route( 'hasanshah/v1', '/submit-lead', [\n        'methods'             => 'POST',\n        'callback'            => 'hs_handle_lead_submission',\n        'permission_callback' => '__return_true',\n    ]);\n});"
    },
    prerequisiteTermIds: ['wp-rest-api'],
    relatedTermIds: ['wp-rest-api', 'jwt-authentication'],
    seoKeywords: ['register_rest_route', 'ساخت api اختصاصی وردپرس', 'اندپوینت سفارشی', 'توسعه وب سرویس']
  },
  {
    id: 'jwt-authentication',
    termEn: 'JWT Authentication for WP REST API',
    termFa: 'احراز هویت توکن‌محور با JWT در وردپرس',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'جِی-دَبلیو-تی آ-ثِن-تی-کِی-شِن',
    tags: ['auth', 'jwt', 'security', 'token'],
    sequenceOrder: 31,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'دستبند VIP دیجیتالی؛ کاربر یک بار با رمز لاگین می‌کند و بعد از آن با یک توکن رمزنگاری‌شده سبک در کل سایت شناخته می‌شود.',
    beginnerTrap: 'فراموش کردن تعریف کلید JWT_AUTH_SECRET_KEY در فایل wp-config.php؛ تمام توکن‌ها فاقد اعتبار می‌شوند و هیچ کاربری نمی‌تواند لاگین کند!',
    analogy: 'مثل دستبند VIP کنسرت است؛ وقتی یک بار در ورودی کارت شناسایی‌ات را نشان می‌دهی، این دستبند را به دستت می‌زنند تا در کل سالن بدون نیاز به نشان دادن دوباره شناسنامه، هویتت تایید شود!',
    humanQuestion: 'وقتی فرانت سایتم با Next.js جداست، چطور کاربر در سایت لاگین کند و حساب کاربری‌اش محفوظ بماند؟',
    realPain: 'بدون این توکن‌ها، هیچ کاربری نمی‌تواند در اپلیکیشن یا فرانت هدلس وارد پنل کاربری خود شود یا خرید انجام دهد.',
    commonAiError: {
      errorSnippet: 'JWT token expired or secret key undefined in wp-config.php',
      explanationFa: 'کلید رمزنگاری توکن در فایل تنظیمات تعریف نشده و اعتبار کاربر تایید نمیشه!'
    },
    freelanceTip: 'راهکار لاگین با JWT سنگ‌بنای ساخت وب‌اپلیکیشن‌های پیشرو (PWA) با بک‌اند وردپرس است.',
    asciiDiagram: `[کاربر: ارسال یوزر و پسورد] ──> [وردپرس: اعتبارسنجی]
                                             │
                                             ▼
                 [تولید توکن امضاشده JWT و ارسال به فرانت]
                                             │
                                             ▼
[ارسال توکن در هدر Authorization: Bearer <token> در درخواست‌های بعدی]`,
    injectionTarget: 'فایل wp-config.php برای کلید سکرت و هدرهای احراز هویت در فرانت',
    cursorPrompt: `[نقش]: متخصص سیستم‌های احراز هویت بدون کوکی و امنیت توکن (JWT Security Specialist).
[زمینه]: احراز هویت REST API وردپرس با JWT.
[وظیفه]: نحوه لاگین کاربر در فرانت‌اند با دریافت توکن و ذخیره امن در کوکی HttpOnly را بنویس.
[شروط سلبی الزامی]:
- توکن‌های حساس را هرگز در LocalStorage مرورگر به صورت ناامن ذخیره نکن (خطر XSS).
- مکانیزم بازنشانی توکن منقضی‌شده (Token Refresh) را در نظر بگیر.
[خروجی]: قطعه کد فرانت‌اند و بک‌اند استاندارد.`,
    claudePrompt: `نحوه تنظیم کامل افزونه JWT Authentication در وردپرس همراه با ثوابت الزامی wp-config.php و نمونه کد جاوااسکریپت احراز هویت را شرح بده.`,
    debugPrompt: `درخواست‌های احراز هویت ارور jwt_auth_bad_config می‌دهند. کلید محرمانه JWT_AUTH_SECRET_KEY را در wp-config.php به صورت تصادفی و طولانی تعریف کن.`,
    howToTest: {
      steps: [
        'یک درخواست POST حاوی username و password به آدرس /wp-json/jwt-auth/v1/token بفرستید.',
        'آیا پاسخی شامل یک رشته طولانی توکن (token: eyJhbGciOiJIUzI1Ni...) دریافت کردید؟',
        'با قرار دادن این توکن در هدر درخواست‌های بعدی، هویت کاربر باید به عنوان کاربر واردشده شناخته شود.'
      ],
      expectedResult: 'توکن رمزنگاری‌شده با موفقیت صادر شده و دسترسی‌های کاربر باز می‌شود.',
      redFlags: ['دریافت خطای ۴۰۳ یا انقضای فوری توکن']
    },
    shortDefinition: 'روش استاندارد احراز هویت بدون کوکی با توکن رمزنگاری‌شده (JSON Web Token) برای ورود کاربران در اپلیکیشن‌های فرانت جداگانه.',
    deepExplanation: 'اپلیکیشن با نام کاربری و رمز، یک توکن امضاشده JWT دریافت کرده و در هدر Authorization ارسال می‌نماید.',
    vibeCodingImpact: 'هنگام وایب‌کدینگ اپ‌های متصل به وردپرس، تسلط بر توکن برای پیاده‌سازی ثبت‌نام و خرید کاربر الزامی است.',
    goldenPrompt: 'نحوه پیکربندی احراز هویت JWT را در وردپرس برای ارتباط با فرانت‌سایت Next.js بنویس همراه با تنظیم کلید در wp-config.php.',
    codeSnippet: {
      language: 'php',
      description: 'تعریف کلیدهای محرمانه امضای JWT در فایل تنظیمات اصلی',
      runContext: 'wp-config.php',
      code: "define( 'JWT_AUTH_SECRET_KEY', 'your-ultra-secure-random-token-here' );\ndefine( 'JWT_AUTH_CORS_ENABLE', true );"
    },
    prerequisiteTermIds: ['custom-endpoints'],
    relatedTermIds: ['custom-endpoints', 'wp-rest-api'],
    seoKeywords: ['jwt در وردپرس', 'احراز هویت توکن وردپرس', 'ورود بدون کوکی', 'امنیت rest api']
  },
  {
    id: 'custom-database-tables',
    termEn: 'Custom Database Tables & dbDelta',
    termFa: 'ساخت جداول اختصاصی در دیتابیس با متد dbDelta',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'کاستوم دیتابیس تیبلز اند دی‌بی‌دلتا',
    tags: ['database', 'mysql', 'dbDelta', 'custom-tables', 'big-data'],
    sequenceOrder: 38,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: false,
    elevatorPitch: 'وقتی اطلاعات شما مثل تراکنش‌های مالی یا لاگ‌های میلیونی است، نباید آن‌ها را در جدول شلوغ wp_postmeta بریزید؛ با یک جدول مستقل اختصاصی سرعت سرور تا ۲۰ برابر افزایش می‌یابد!',
    beginnerTrap: 'استفاده از جدول wp_postmeta برای ثبت صدها هزار رکورد لاگ یا پیامک؛ که دیتابیس را به یک کوه آوار تبدیل کرده و جستجوها را چند ثانیه معطل می‌کند!',
    analogy: 'مثل داشتن یک زونکن اختصاصی بایگانی برای فاکتورهای رسمی در برابر ریختن همه فاکتورها در کشوی جوراب‌ها است!',
    humanQuestion: 'چه زمانی باید به جای پست‌متا، برای داده‌هایم جدول اختصاصی بسازم؟',
    realPain: 'جدول postmeta وردپرس ساختار کلید-مقداری (EAV) دارد و برای گزارش‌گیری‌های سنگین طراحی نشده است؛ کوئری زدن به ۱۰ میلیون پست‌متا سایت را درجا قفل می‌کند!',
    commonAiError: {
      errorSnippet: 'dbDelta syntax error: missing two spaces after PRIMARY KEY',
      explanationFa: 'هوش مصنوعی قواعد سخت‌گیرانه فاصله‌گذاری تابع dbDelta را رعایت نکرده و جدول ساخته نشده!'
    },
    freelanceTip: 'به کارفرما نشان بده با طراحی جدول اختصاصی برای سیستم سفارشات یا گزارش‌های مالی، دیتابیس سایت او توانایی پردازش ۱۰ میلیون تراکنش بدون حتی یک میلی‌ثانیه تاخیر را دارد.',
    asciiDiagram: `[روش اشتباه: ریختن ۵ میلیون رکورد لاگ در wp_postmeta] ──> 🐌 کرش سرور
[روش استاندارد: ساخت جدول اختصاصی wp_hs_logs با dbDelta] ──> ⚡ سرعت ۱ میلی‌ثانیه‌ای`,
    injectionTarget: 'هوک register_activation_hook یا فایل مایگریشن افزونه',
    universalPrompt: `[ROLE]: Senior MySQL & WordPress Database Architect.
[TASK]: Create a high-performance custom table named "wp_hs_transactions" using dbDelta().
[NEGATIVE CONSTRAINTS]:
- Strict adherence to dbDelta formatting rules: exactly two spaces after PRIMARY KEY, uppercase SQL keywords, and explicit table collation.
- Include proper indexes on foreign keys and created_at timestamps.
[OUTPUT]: Robust, migration-safe table creation function.`,
    agentsMdRule: `# استانداردهای دیتابیس در AGENTS.md:
برای داده‌های پرتراکنش (بیش از ۵۰ هزار رکورد در سال)، ایجاد جدول اختصاصی با تابع dbDelta الزامی است و استفاده از postmeta ممنوع می‌باشد.`,
    cursorPrompt: `Generate the dbDelta SQL schema for an audit log table with indexed timestamp columns.`,
    claudePrompt: `Write the complete activation hook using dbDelta to safely install and upgrade custom database tables in WordPress.`,
    debugPrompt: `تابع dbDelta جدول را نمی‌سازد. فاصله‌گذاری دوگانه بعد از PRIMARY KEY و تعاریف ایندکس را بررسی و اصلاح کن.`,
    howToTest: {
      steps: [
        'افزونه را در سایت تستی فعال کنید.',
        'ابزار phpMyAdmin یا Adminer را باز کنید و جداول دیتابیس را بررسی نمایید.',
        'مطمئن شوید جدول جدید با پیشوند wp_ و ایندکس‌های مربوطه ساخته شده است.'
      ],
      expectedResult: 'ایجاد تمیز جدول با کالکشن utf8mb4_unicode_ci.',
      redFlags: ['تولید کوئری‌های خام CREATE TABLE بدون dbDelta']
    },
    shortDefinition: 'روش استاندارد هسته وردپرس برای ایجاد و ارتقای ایمن ساختار جداول اختصاصی در پایگاه داده MySQL.',
    deepExplanation: 'تابع dbDelta تفاوت ساختار جدول موجود را با ساختار جدید مقایسه کرده و ستون‌های مفقود را بدون حذف اطلاعات قبلی به جدول اضافه می‌کند.',
    vibeCodingImpact: 'قابلیت ساخت نرم‌افزارهای تجاری با مقیاس میلیون رکورد بر بستر وردپرس.',
    goldenPrompt: 'یک تابع با dbDelta بنویس که یک جدول اختصاصی به نام wp_hs_leads با ایندکس روی شماره موبایل ایجاد کند.',
    codeSnippet: {
      language: 'php',
      description: 'الگوی ساخت جدول اختصاصی با قواعد نگارشی dbDelta',
      runContext: 'activation.php',
      code: "require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );\nglobal $wpdb;\n$table_name = $wpdb->prefix . 'hs_transactions';\n$charset_collate = $wpdb->get_charset_collate();\n\n$sql = \"CREATE TABLE $table_name (\n    id bigint(20) NOT NULL AUTO_INCREMENT,\n    user_id bigint(20) NOT NULL,\n    amount decimal(10,2) NOT NULL,\n    created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,\n    PRIMARY KEY  (id),\n    KEY user_id (user_id)\n) $charset_collate;\";\n\ndbDelta( $sql );"
    },
    prerequisiteTermIds: ['wpdb-class'],
    relatedTermIds: ['wpdb-class', 'prepared-statements'],
    seoKeywords: ['dbdelta', 'جداول اختصاصی وردپرس', 'ساخت جدول در وردپرس', 'بهینه سازی دیتابیس وردپرس']
  },
  {
    id: 'database-indexing',
    termEn: 'Database Indexing & Query Speed',
    termFa: 'ایندکس‌گذاری ستون‌های پرمصرف پایگاه داده (Indexing)',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'دیتابیس ایندکسینگ',
    tags: ['indexing', 'mysql', 'database-performance', 'slow-query'],
    sequenceOrder: 39,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    elevatorPitch: 'فهرست الفبایی در انتهای کتاب قطور! بدون ایندکس، دیتابیس باید تمام ۱ میلیون سطر را یک‌به‌یک بخواند تا شماره سفارش شما را پیدا کند (Full Table Scan). با ایندکس در ۱ میلی‌ثانیه مستقیماً به همان سطر پرش می‌کند!',
    beginnerTrap: 'جستجو در ستونی که ایندکس ندارد (مثلاً جستجو روی فیلد شماره ملی در یک جدول با ۱۰۰ هزار کاربر)؛ سرور در هر جستجو هنگ می‌کند!',
    analogy: 'مثل این است که در یک کتابخانه بدون قفسه‌بندی و دفترچه راهنما، دنبال یک کتاب بگردی و مجبور باشی تک‌تک کتاب‌های کتابخانه را ورق بزنی!',
    humanQuestion: 'چرا وقتی فیلتر محصولات یا جستجوی سایتم را می‌زنم، سرور ۵ ثانیه لودینگ نشان می‌دهد؟',
    realPain: 'کوئری‌های سنگین بدون ایندکس، کل صف دیتابیس را قفل می‌کنند و کاربران دیگر هم با خطای دیتابیس (Error establishing a database connection) روبرو می‌شوند!',
    commonAiError: {
      errorSnippet: 'Slow query logged / Full table scan on unindexed WHERE clause',
      explanationFa: 'هوش مصنوعی روی ستونی شرط WHERE گذاشته که ایندکس ندارد و دیتابیس باید کل رکوردهای جدول را بخواند!'
    },
    freelanceTip: 'تنها با اضافه کردن یک ایندکس صحیح به جدول‌های کند سایت کارفرما، سرعت جستجو و فیلترها را از ۵ ثانیه به ۵۰ میلی‌ثانیه می‌رسانی.',
    asciiDiagram: `[جستجو در جدول بدون ایندکس] ──> بررسی ۱,۰۰۰,۰۰۰ سطر ──> 🐌 ۴,۵۰۰ میلی‌ثانیه
[جستجو در جدول با ایندکس]   ──> پرش مستقیم به رکورد با B-Tree ──> ⚡ ۲ میلی‌ثانیه`,
    injectionTarget: 'تعاریف ساختار جداول اختصاصی در dbDelta یا دستور خط فرمان دیتابیس',
    universalPrompt: `[ROLE]: Senior MySQL Performance Tuning Engineer.
[TASK]: Analyze the query conditions for table "wp_hs_leads" and add compound indexes for (status, created_at).
[NEGATIVE CONSTRAINTS]:
- Avoid over-indexing (do not index columns with high write-frequency and low read-frequency).
- Check index cardinality.
[OUTPUT]: Optimal ALTER TABLE SQL statement.`,
    agentsMdRule: `# استانداردهای ایندکس در AGENTS.md:
تمامی ستون‌هایی که در بخش‌های WHERE، ORDER BY، یا JOIN کوئری‌ها استفاده می‌شوند، باید دارای ایندکس مناسب در دیتابیس باشند.`,
    cursorPrompt: `Suggest optimal MySQL indexes for these slow queries reported in Query Monitor.`,
    claudePrompt: `Explain how adding an index to this custom postmeta key eliminates the full table scan bottleneck.`,
    debugPrompt: `این کوئری در لاگ کدهای کند (Slow Query Log) ثبت شده است. ایندکس مناسب برای حل این مشکل را معرفی کن.`,
    howToTest: {
      steps: [
        'دستور EXPLAIN را قبل از کوئری خود در تب دیتابیس بنویسید.',
        'ستون type و rows را بررسی کنید.',
        'اگر type برابر با ALL بود، یعنی ایندکس وجود ندارد؛ پس از افزودن ایندکس، type باید به ref یا range تغییر یابد.'
      ],
      expectedResult: 'تغییر نوع جستجو از Full Table Scan به ایندکس مستقیم و لود میلی‌ثانیه‌ای.',
      redFlags: ['کوئری‌هایی که بیش از ۱۰۰ هزار سطر را برای بازگرداندن ۱۰ نتیجه اسکن می‌کنند']
    },
    shortDefinition: 'ساختار داده‌ای در موتور MySQL برای دسترسی فوق‌سریع به رکوردهای مشخص بدون اسکن کل جدول.',
    deepExplanation: 'ایندکس‌ها با الگوریتم B-Tree پیاده‌سازی می‌شوند و کلید طلایی عبور از افت سرعت در پروژه‌های بزرگ وردپرس هستند.',
    vibeCodingImpact: 'توانایی بهینه‌سازی دیتابیس‌های حجیم و کاهش ۹۵ درصدی زمان پاسخگویی سرور.',
    goldenPrompt: 'یک دستور SQL بنویس که روی ستون phone_number جدول سرنخ‌ها یک ایندکس اضافه کند تا سرعت سرچ بالا برود.',
    codeSnippet: {
      language: 'sql',
      description: 'افزودن ایندکس اختصاصی به جدول برای تسریع جستجو',
      runContext: 'MySQL Query',
      code: "ALTER TABLE wp_hs_leads ADD INDEX idx_phone (phone_number);"
    },
    prerequisiteTermIds: ['custom-database-tables'],
    relatedTermIds: ['custom-database-tables', 'wpdb-class'],
    seoKeywords: ['indexing mysql', 'ایندکس دیتابیس وردپرس', 'بهینه سازی کوئری کند', 'افزایش سرعت دیتابیس']
  },
  {
    id: 'rest-api-permissions-callback',
    termEn: 'REST API permission_callback Security',
    termFa: 'کنترل دقیق صلاحیت دسترسی در وب‌سرویس‌ها (permission_callback)',
    category: 'database-api',
    level: 'intermediate',
    phonetic: 'پر-میشن کال-بک',
    tags: ['rest-api', 'security', 'permission_callback', 'rbac', 'authorization'],
    sequenceOrder: 40,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: true,
    elevatorPitch: 'نگهبان دم در اندپوینت‌های API سایت! پارامتری حیاتی و اجباری در ثبت هر وب‌سرویس که چک می‌کند آیا کاربر اجازه دارد این اطلاعات محرمانه را ببیند یا این عملیات را انجام دهد یا خیر.',
    beginnerTrap: 'استفاده از __return_true برای تمام اندپوینت‌ها؛ با این کار کل اینترنت می‌توانند بدون ورود، دیتای کاربران را ویرایش یا حذف کنند!',
    analogy: 'مثل کارت ورود پرسنلی شرکت است؛ هر کسی کارت نداشته باشد بوق قرمز به صدا درمی‌آید و در قفل می‌ماند.',
    humanQuestion: 'چطور مطمئن شوم که فقط ادمین یا خریدار واقعی می‌تواند اطلاعات سفارش را از طریق API دریافت کند؟',
    realPain: 'بیشتر از ۶۰ درصد باگ‌های امنیتی افزونه‌های وردپرس ناشی از فراموش کردن permission_callback است که باعث نشت دیتابیس کاربران می‌شود!',
    commonAiError: {
      errorSnippet: 'REST route registered without permission_callback / missing capability check',
      explanationFa: 'هوش مصنوعی اندپوینت را بدون نگهبان امنیتی ثبت کرده و هر کسی با مرورگر می‌تواند دیتای کاربران را بدزدد!'
    },
    freelanceTip: 'به کارفرما اطمینان بده که تمامی وب‌سرویس‌های اختصاصی با نقش‌های کاربری (RBAC) و احراز هویت توکن محافظت شده‌اند.',
    asciiDiagram: `[درخواست به /wp-json/hs/v1/orders]
                    │
                    ▼
          [permission_callback]
        ├── کاربر دسترسی دارد (current_user_can) ──> اجرای تابع و تحویل سفارشات
        └── دسترسی ندارد ──> خطای ۴۰۳ Forbidden 🚫`,
    injectionTarget: 'آرایه پارامترهای register_rest_route',
    universalPrompt: `[ROLE]: WordPress REST API Security Architect.
[TASK]: Register a private endpoint "/wp-json/hs/v1/user-data" using "register_rest_route".
[NEGATIVE CONSTRAINTS]:
- NEVER use "__return_true" on mutation (POST/PUT/DELETE) routes.
- Implement a rigorous "permission_callback" verifying "current_user_can('edit_posts')" or user ownership.
- Return a 403 WP_Error on unauthorized requests.
[OUTPUT]: Secure endpoint registration.`,
    agentsMdRule: `# امنیت REST API در AGENTS.md:
تمامی مسیرهای وب‌سرویس باید دارای یک تابع permission_callback سخت‌گیرانه باشند. استفاده از __return_true روی مسیرهای حاوی داده‌های حساس اکیداً ممنوع است.`,
    cursorPrompt: `Audit this REST route and ensure permission_callback strictly checks user capabilities.`,
    claudePrompt: `Rewrite this REST registration with a robust permission_callback checking custom user caps and nonces.`,
    debugPrompt: `این اندپوینت بدون احراز هویت دیتای مشتریان را لو می‌دهد. یک تابع permission_callback با بررسی صلاحیت اضافه کن.`,
    howToTest: {
      steps: [
        'در مرورگر در حالت ناشناس (Incognito) آدرس اندپوینت را باز کنید.',
        'آیا خطای ۴۰۱ یا ۴۰۳ با پیام «دسترسی غیرمجاز» دریافت کردید؟',
        'سپس به عنوان ادمین لاگین کرده و دسترسی صحیح را تایید نمایید.'
      ],
      expectedResult: 'مسدودسازی دسترسی‌های غیرمجاز و تحویل اطلاعات فقط به کاربران دارای صلاحیت.',
      redFlags: ['باز شدن اطلاعات محرمانه در حالت لاگ‌اوت و بدون توکن']
    },
    shortDefinition: 'پارامتر اجباری در وب‌سرویس‌های وردپرس برای اعتبارسنجی سطح دسترسی و احراز هویت کاربر قبل از اجرای منطق اصلی.',
    deepExplanation: 'از نسخه وردپرس ۵.۵، حذف این پارامتر منجر به صدور خطای Notice در هسته می‌شود. این تابع سد اول دفاع در برابر نشت اطلاعات است.',
    vibeCodingImpact: 'تضمین نفوذناپذیری وب‌سرویس‌ها در اپلیکیشن‌های فرانت جداگانه و موبایل.',
    goldenPrompt: 'یک اندپوینت REST بنویس که فقط به کاربرانی که دسترسی manage_options دارند اجازه دریافت گزارش بدهد.',
    codeSnippet: {
      language: 'php',
      description: 'ثبت امن اندپوینت با کنترل دسترسی سطح ادمین',
      runContext: 'rest-routes.php',
      code: "register_rest_route( 'hs/v1', '/reports', [\n    'methods'             => 'GET',\n    'callback'            => 'hs_get_reports_data',\n    'permission_callback' => function() {\n        return current_user_can( 'manage_options' );\n    }\n]);"
    },
    prerequisiteTermIds: ['rest-api-endpoints'],
    relatedTermIds: ['rest-api-endpoints', 'nonces'],
    seoKeywords: ['permission_callback', 'امنیت rest api وردپرس', 'register_rest_route', 'احراز هویت وب سرویس وردپرس']
  },
  {
    id: 'object-caching-redis',
    termEn: 'Persistent Object Caching (Redis / Memcached)',
    termFa: 'کش ماندگار اشیاء دیتابیس با ردیس (Object Cache)',
    category: 'database-api',
    level: 'advanced',
    phonetic: 'آبجکت کشینگ ردیس',
    tags: ['redis', 'object-cache', 'performance', 'database-scale'],
    sequenceOrder: 41,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    elevatorPitch: 'انتقال دیتابیس از روی هارد دیسک کند سرور به داخل چیپ‌های فوق‌سریع رم (RAM)! با فعال‌سازی ردیس، وردپرس به جای کوئری زدن به هارد، نتایج را از حافظه رم در ۱ میلی‌ثانیه می‌خواند.',
    beginnerTrap: 'اشتباه گرفتن کش صفحه (Page Cache مثل WP Rocket) با کش شیء (Object Cache)؛ کش صفحه فقط به کاربران مهمان کمک می‌کند، اما ردیس سرعت پیشخوان و کاربران لاگین کرده را هم موشکی می‌کند!',
    analogy: 'کش صفحه مثل عکس گرفتن از یک ویترین است، اما ردیس مثل آوردن کل انبار فروشگاه به یک متری پیشخوان مغازه است!',
    humanQuestion: 'چرا پیشخوان ووکامرس من وقتی کاربران لاگین می‌کنند کند می‌شود و افزونه‌های کش تاثیری ندارند؟',
    realPain: 'کاربران لاگین کرده در فروشگاه‌های ووکامرسی نمی‌توانند از کش صفحه استفاده کنند؛ بدون ردیس، با هر کلیک صدها کوئری سنگین به دیتابیس اصابت می‌کند و سرور می‌خوابد!',
    commonAiError: {
      errorSnippet: 'Object cache collision / cache invalidation failure on custom post types',
      explanationFa: 'هوش مصنوعی کلید کش ردیس را هنگام ویرایش محصول باطل نکرده و اطلاعات قدیمی نمایش داده می‌شود!'
    },
    freelanceTip: 'با راه‌اندازی Redis Object Cache روی هاست کارفرما، سرعت بارگذاری سبد خرید و پیشخوان مدیریت ووکامرس ۵ برابر می‌شود.',
    asciiDiagram: `[درخواست کاربر لاگین‌کرده] ──> آیا کوئری در حافظه رم هست؟ (Redis)
                               ├── بله ──> ⚡ تحویل در ۱ میلی‌ثانیه از RAM
                               └── خیر ──> خواندن از هارد MySQL + ذخیره در ردیس`,
    injectionTarget: 'فایل wp-content/object-cache.php و تنظیمات Redis در wp-config.php',
    universalPrompt: `[ROLE]: High-Traffic WordPress Infrastructure Engineer.
[TASK]: Configure Redis Object Cache for WooCommerce and ensure proper cache group invalidation on product updates.
[NEGATIVE CONSTRAINTS]:
- Avoid caching dynamic cart sessions in persistent object cache groups.
- Use "wp_cache_delete()" hooks upon post status transitions.
[OUTPUT]: Robust caching configuration.`,
    agentsMdRule: `# کش ماندگار اشیاء در AGENTS.md:
توابع سفارشی دیتابیس باید به جای کوئری مستقیم، ابتدا از توابع wp_cache_get و wp_cache_set استفاده کنند تا از ردیس به بهترین نحو بهره‌برداری شود.`,
    cursorPrompt: `Implement wp_cache_get and wp_cache_set around this heavy analytical calculation.`,
    claudePrompt: `Explain how to integrate Redis Object Caching into this high-traffic membership site architecture.`,
    debugPrompt: `اطلاعات در ردیس کش شده و تغییرات جدید دیده نمی‌شود. هوک wp_cache_delete را برای کلید مربوطه اضافه کن.`,
    howToTest: {
      steps: [
        'افزونه Redis Object Cache را در وردپرس نصب و فعال کنید.',
        'روی دکمه Enable Object Cache کلیک کنید و اتصال به پورت ۶۳۷۹ ردیس را تایید نمایید.',
        'افزونه Query Monitor را باز کنید؛ مشاهده می‌کنید که شاخص Object Cache Hit Ratio به بالای ۹۰٪ رسیده است.'
      ],
      expectedResult: 'کاهش شدید کوئری‌های MySQL و لود فوری پیشخوان.',
      redFlags: ['نرخ Hit Ratio زیر ۵۰ درصد یا خطای قطع ارتباط با ردیس']
    },
    shortDefinition: 'سازوکار ذخیره‌سازی اشیاء و کوئری‌های وردپرس در حافظه رم با ابزارهایی مانند Redis برای افزایش سرعت پاسخگویی دیتابیس.',
    deepExplanation: 'کش اشیاء هسته وردپرس (WP_Object_Cache) به صورت پیش‌فرض غیرماندگار است. با نصب کلاینت Redis، این کش بین درخواست‌های مختلف ماندگار شده و بار سرور را به صفر نزدیک می‌کند.',
    vibeCodingImpact: 'پایدار نگه داشتن فروشگاه‌های بزرگ ووکامرس در جشنواره‌های فروش و بلک‌فرایدی.',
    goldenPrompt: 'یک الگو بنویس که قبل از اجرای کوئری با wpdb، دیتای کش‌شده را از wp_cache_get بخواند و در صورت نبودن، کش کند.',
    codeSnippet: {
      language: 'php',
      description: 'استفاده بهینه از توابع Object Cache در کدهای PHP',
      runContext: 'cache-helper.php',
      code: "$cache_key = 'hs_user_points_' . $user_id;\n$points = wp_cache_get( $cache_key, 'hs_points_group' );\n\nif ( false === $points ) {\n    $points = $wpdb->get_var( $wpdb->prepare( \"SELECT points FROM wp_hs_points WHERE user_id = %d\", $user_id ) );\n    wp_cache_set( $cache_key, $points, 'hs_points_group', 3600 );\n}"
    },
    prerequisiteTermIds: ['transients-api'],
    relatedTermIds: ['transients-api', 'wpdb-class'],
    seoKeywords: ['redis وردپرس', 'object cache وردپرس', 'ردیس آبجکت کش', 'افزایش سرعت ووکامرس با ردیس']
  }
];
