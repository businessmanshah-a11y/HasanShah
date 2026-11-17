import { EncyclopediaTerm } from './types';

export const wpCoreTerms: EncyclopediaTerm[] = [
  {
    id: 'action-hooks',
    termEn: 'Action Hooks (`do_action` / `add_action`)',
    termFa: 'قلاب‌های اکشن و چرخه حیات وردپرس',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'اکشن هوکس',
    tags: ['php', 'hooks', 'architecture', 'lifecycle'],
    shortDefinition: 'نقاط تزریق مشخص در چرخه اجرای وردپرس که به شما اجازه می‌دهند بدون تغییر فایل‌های هسته، کدهای اختصاصی خود را در لحظه مشخص اجرا کنید.',
    deepExplanation: 'هنگام بارگذاری هر صفحه در وردپرس، صدها قلاب اکشن به ترتیب زمانی صدا زده می‌شوند (مثلاً `init`, `wp_loaded`, `template_redirect`, `wp_head`, `wp_footer`). شما با تابع `add_action()` مشخص می‌کنید که تابع شما دقیقاً در کدام مرحله از پردازش وارد عمل شود.',
    vibeCodingImpact: 'هوش مصنوعی اغلب تمایل دارد کدهای شما را مستقیماً در `functions.php` بدون هوک قرار دهد. این کار باعث می‌شود کدهایی که نیاز به توابع کاربری دارند، قبل از لود سیستم احراز هویت اجرا شده و ارور Fatal Error دهند.',
    goldenPrompt: 'قابلیت [نام قابلیت] را در قالب وردپرس بنویس. حتماً از یک اکشن هوک مناسب با چرخه حیات وردپرس (مثل wp_enqueue_scripts یا init) استفاده کن. تابع باید دارای پیشوند اختصاصی hs_ بوده و به درستی با add_action ثبت شود.',
    codeSnippet: {
      language: 'php',
      description: 'ثبت اصولی اکشن هوک برای اضافه کردن متاتگ اختصاصی به هدر وردپرس',
      runContext: 'functions.php',
      code: `function hs_add_custom_meta_tags() {\n    echo '<meta name="theme-creator" content="Hasan Shah">';\n}\nadd_action( 'wp_head', 'hs_add_custom_meta_tags', 5 );`
    },
    relatedTermIds: ['filter-hooks', 'child-theme', 'theme-hierarchy'],
    seoKeywords: ['اکشن هوک', 'action hooks', 'add_action در وردپرس', 'هوک های وردپرس']
  },
  {
    id: 'filter-hooks',
    termEn: 'Filter Hooks (`apply_filters` / `add_filter`)',
    termFa: 'قلاب‌های فیلتر و اصلاح خروجی داده‌ها',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'فیلتر هوکس',
    tags: ['php', 'hooks', 'data-manipulation', 'filters'],
    shortDefinition: 'توابعی که مقادیر خروجی متون، محتوا یا آرایه‌ها را دریافت کرده، آن‌ها را ویرایش می‌کنند و مقدار اصلاح‌شده را بازمی‌گردانند.',
    deepExplanation: 'تفاوت کلیدی اکشن و فیلتر این است: اکشن «کاری را انجام می‌دهد»، اما فیلتر «داده‌ای را دریافت کرده، تغییر می‌دهد و باید حتماً آن را return کند». معروف‌ترین فیلتر وردپرس `the_content` است که محتوای نوشته را قبل از چاپ در مرورگر اصلاح می‌کند.',
    vibeCodingImpact: 'یکی از متداول‌ترین خطاهای هوش مصنوعی این است که داخل تابع متصل به فیلتر، فراموش می‌کند مقدار متغیر را `return` کند یا به جای `return` از `echo` استفاده می‌کند که باعث خالی شدن کل محتوای صفحه می‌شود!',
    goldenPrompt: 'یک فیلتر وردپرس با add_filter برای the_content بنویس که در انتهای هر مقاله، یک باکس فراخوان به اقدام (CTA) لوکس با کلاس‌های تیل‌ویند درج کند. حتماً مقدار $content ویرایش‌شده را در پایان تابع return کن.',
    codeSnippet: {
      language: 'php',
      description: 'فیلتر کردن محتوای پست وردپرس برای تزریق کادر دعوت اختصاصی',
      runContext: 'functions.php',
      code: `add_filter( 'the_content', function( $content ) {\n    if ( is_singular( 'post' ) ) {\n        $cta = '<div class="my-8 p-6 rounded-2xl bg-gold/10 border border-gold/30 text-gold font-bold">برای یادگیری وایب‌کدینگ به دوره‌های حسن شاهمرادی بپیوندید.</div>';\n        return $content . $cta;\n    }\n    return $content;\n});`
    },
    relatedTermIds: ['action-hooks', 'custom-post-types', 'theme-hierarchy'],
    seoKeywords: ['فیلتر هوک', 'filter hooks', 'add_filter در وردپرس', 'تغییر خروجی با فیلتر']
  },
  {
    id: 'theme-hierarchy',
    termEn: 'WordPress Theme Hierarchy',
    termFa: 'سلسله‌مراتب و تقدم لود فایل‌های پوسته',
    category: 'wp-core',
    level: 'beginner',
    phonetic: 'تم هایررکی',
    tags: ['templates', 'php', 'hierarchy', 'routing'],
    shortDefinition: 'قانون رسمی وردپرس که مشخص می‌کند برای نمایش هر صفحه (تک‌پست، برگه، آرشیو، نویسنده)، کدام فایل تمپلیت تقدم بالاتر دارد.',
    deepExplanation: 'اگر کاربری صفحه محصول با شناسه `portfolio` را باز کند، وردپرس ابتدا دنبال فایل `single-portfolio.php` می‌گردد؛ اگر نبود به سراغ `single.php` و در نهایت به سراغ `index.php` می‌رود. درک این درخت وراثت مانع از ایجاد فایل‌های اضافه در پوسته می‌شود.',
    vibeCodingImpact: 'اگر به هوش مصنوعی نام صفحه را نگویید، تمایل دارد کل سایت را در یک فایل شلوغ `index.php` با ده‌ها دستور `if/else` بسازد که نگه‌داری قالب را بعداً غیرممکن می‌کند.',
    goldenPrompt: 'من یک CPT به نام hs_project دارم. با رعایت قوانین Theme Hierarchy وردپرس، نام دقیق تمپلیت برای صفحه تکی (Single) و صفحه آرشیو (Archive) را مشخص کرده و ساختار تمپلیت اختصاصی آن را با کدهای تمیز بنویس.',
    codeSnippet: {
      language: 'bash',
      description: 'نام‌گذاری استاندارد فایل‌های پوسته برای Custom Post Type اختصاصی',
      runContext: 'Theme Directory',
      code: `# برای صفحه نمایش تک‌پروژه:\nsingle-hs_project.php\n\n# برای صفحه آرشیو و لیست کل پروژه‌ها:\narchive-hs_project.php`
    },
    relatedTermIds: ['child-theme', 'action-hooks', 'custom-post-types'],
    seoKeywords: ['سلسله مراتب قالب وردپرس', 'theme hierarchy', 'ساختار فایل های پوسته', 'تمپلیت های وردپرس']
  },
  {
    id: 'child-theme',
    termEn: 'Child Theme Architecture',
    termFa: 'معماری پوسته فرزند برای حفظ تغییرات',
    category: 'wp-core',
    level: 'beginner',
    phonetic: 'چایلد تم',
    tags: ['theme', 'updates', 'stability', 'best-practices'],
    shortDefinition: 'پوسته‌ای که تمام امکانات پوسته والد را به ارث می‌برد و تغییرات سفارشی شما را بعد از آپدیت پوسته اصلی محفوظ نگه می‌دارد.',
    deepExplanation: 'اگر تغییرات یا کدهای سفارشی را در پوسته اصلی بنویسید، با آمدن اولین آپدیت امنیتی از طرف توسعه‌دهنده قالب، تمام فایل‌ها جایگزین شده و صدها ساعت زحمت شما از بین می‌رود! پوسته فرزند با فقط یک فایل `style.css` و `functions.php` فعال می‌شود.',
    vibeCodingImpact: 'هوش مصنوعی همیشه سریع‌ترین راه را انتخاب می‌کند و مستقیماً فایل‌های تم والد را دستکاری می‌کند. یک وایب‌کدر حرفه‌ای همیشه از مدل می‌خواهد کدهای جدید را در Child Theme پیاده کند.',
    goldenPrompt: 'یک پوسته فرزند استاندارد برای قالب [نام قالب] ایجاد کن. هدر فایل style.css باید Template را به درستی به والد ارجاع دهد و functions.php استایل والد را به صورت اصولی ان‌کیو کند.',
    codeSnippet: {
      language: 'css',
      description: 'هدر استاندارد فایل style.css برای ساخت پوسته فرزند',
      runContext: 'child-theme/style.css',
      code: `/*\n Theme Name:   HasanShah Child Theme\n Theme URI:    https://hasanshah.ir\n Description:  پوسته فرزند اختصاصی برای کدهای وایب‌کدینگ\n Template:     parent-theme-folder-name\n Version:      1.0.0\n*/`
    },
    relatedTermIds: ['theme-hierarchy', 'action-hooks', 'asset-enqueue'],
    seoKeywords: ['چایلد تم', 'child theme', 'پوسته فرزند وردپرس', 'ساخت چایلد تم']
  },
  {
    id: 'custom-post-types',
    termEn: 'Custom Post Types (CPT)',
    termFa: 'انواع پست سفارشی در وردپرس',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'کاستوم پست تایپ',
    tags: ['cpt', 'data-modeling', 'backend', 'cms'],
    shortDefinition: 'ساختار محتوایی جدید فراتر از نوشته‌ها و برگه‌های پیش‌فرض وردپرس؛ مانند ساخت بخش پروژه‌ها، فیلم‌ها، دوره‌ها یا پزشکان.',
    deepExplanation: 'با تابع `register_post_type` به وردپرس اعلام می‌کنید که یک نوع دیتای جدید با منوی مستقل در پنل ادمین، فیلدهای خاص و سیستم آدرس‌دهی اختصاصی برای شما بسازد. این قابلیت هسته، وردپرس را به یک فریم‌ورک اپلیکیشن کامل تبدیل می‌کند.',
    vibeCodingImpact: 'اگر آرگومان‌های CPT (به خصوص `has_archive`, `public`, `show_in_rest`) را دقیق به هوش مصنوعی ندهید، محتوا در پنل گوتنبرگ لود نمی‌شود یا پیوندهای یکتا خطای ۴۰۴ می‌دهند.',
    goldenPrompt: 'یک Custom Post Type با نام hs_portfolio بساز: 1) قابلیت show_in_rest: true برای گوتنبرگ 2) پشتیبانی از عنوان، ادیتور، تصویر شاخص و متادیتا 3) اسلاگ آرشیو portfolio 4) آیکون مناسب Dashicons.',
    codeSnippet: {
      language: 'php',
      description: 'ثبت اصولی یک CPT مدرن با پشتیبانی کامل از گوتنبرگ و REST API',
      runContext: 'functions.php',
      code: `add_action( 'init', function() {\n    register_post_type( 'hs_portfolio', [\n        'labels'      => [ 'name' => 'نمونه‌کارها', 'singular_name' => 'نمونه‌کار' ],\n        'public'      => true,\n        'has_archive' => true,\n        'menu_icon'   => 'dashicons-portfolio',\n        'supports'    => [ 'title', 'editor', 'thumbnail', 'excerpt' ],\n        'show_in_rest'=> true,\n    ]);\n});`
    },
    relatedTermIds: ['theme-hierarchy', 'action-hooks', 'filter-hooks'],
    seoKeywords: ['کاستوم پست تایپ', 'cpt وردپرس', 'register_post_type', 'انواع پست اختصاصی']
  },
  {
    id: 'nonces',
    termEn: 'Nonces (Number Used Once)',
    termFa: 'توکن‌های امنیتی یکبارمصرف وردپرس',
    category: 'wp-core',
    level: 'advanced',
    phonetic: 'نانسز',
    tags: ['security', 'csrf', 'forms', 'validation'],
    shortDefinition: 'رشته‌های رمزنگاری‌شده موقت برای اعتبارسنجی اینکه آیا درخواستی که به سرور ارسال شده، توسط همان کاربر و از همان فرم معتبر سایت صادر شده است یا خیر.',
    deepExplanation: 'نانس‌ها سلاح اصلی وردپرس برای خنثی‌سازی حملات خطرناک CSRF (جعل درخواست میان‌سایتی) هستند. با توابع `wp_create_nonce()` توکن تولید شده و در سرور با `wp_verify_nonce()` یا `check_ajax_referer()` صحت آن سنجیده می‌شود.',
    vibeCodingImpact: 'هوش مصنوعی برای ساده کردن کار، فرم‌ها و درخواست‌های Ajax را اغلب بدون نانس تولید می‌کند. چنین کدهایی به شدت آسیب‌پذیر بوده و هر هکری می‌تواند به راحتی با لینک مخرب، به جای ادمین اطلاعات را تغییر دهد.',
    goldenPrompt: 'یک فرم تماس سریع ایجکس با PHP و جاوااسکریپت بساز. الزامات امنیتی سفت‌وسخت: 1) حتماً در فرم یک نانس با wp_create_nonce تعبیه کن 2) در سمت سرور با check_ajax_referer صحت توکن را بسنج و در صورت نامعتبر بودن بلافاصله با wp_send_json_error متوقف کن.',
    codeSnippet: {
      language: 'php',
      description: 'بررسی صحت نانس در زمان دریافت اطلاعات ایجکس فرم',
      runContext: 'Ajax Handler',
      code: `add_action( 'wp_ajax_hs_save_lead', function() {\n    check_ajax_referer( 'hs_lead_security_nonce', 'security' );\n    // ادامه پردازش امن داده‌ها...\n    wp_send_json_success( [ 'message' => 'اطلاعات با موفقیت ثبت شد' ] );\n});`
    },
    relatedTermIds: ['action-hooks', 'transients-api', 'filter-hooks'],
    seoKeywords: ['نانس وردپرس', 'nonces security', 'امنیت فرم های وردپرس', 'مقابله با csrf']
  },
  {
    id: 'transients-api',
    termEn: 'Transients API',
    termFa: 'کش موقت دیتابیس با زمان انقضا',
    category: 'wp-core',
    level: 'advanced',
    phonetic: 'ترنزینت ای پی آی',
    tags: ['caching', 'performance', 'database', 'optimization'],
    shortDefinition: 'مکانیزم رسمی کش داده‌های سنگین، پاسخ‌های وب‌سرویس و کوئری‌های پرمصرف در دیتابیس وردپرس به همراه تعیین دقیق زمان انقضا.',
    deepExplanation: 'اگر هر بار که کاربر صفحه‌ای را باز می‌کند، یک کوئری سنگین دیتابیس یا یک درخواست به API اینستاگرام بفرستید، سرور ظرف چند دقیقه از پا درمی‌آید. با توابع `set_transient()` و `get_transient()` داده را مثلاً به مدت ۶ ساعت ذخیره می‌کنید تا درخواست بعدی از دیتابیس لحظه‌ای خوانده شود.',
    vibeCodingImpact: 'هوش مصنوعی وقتی کدی برای دریافت اطلاعات آب‌وهوا، نرخ ارز یا پست‌های خاص می‌نویسد، ترنزینت نمی‌گذارد. وایب‌کدر هوشمند با اضافه کردن کلمه Transient، سرعت لود را تا ۱۰ برابر افزایش می‌دهد.',
    goldenPrompt: 'یک تابع در functions.php بنویس که داده‌های یک وب‌سرویس خارجی را دریافت کند و با استفاده از Transients API وردپرس به مدت ۴ ساعت (HOUR_IN_SECONDS * 4) در دیتابیس کش کند تا در درخواست‌های بعدی به سرور خارجی فشار نیاید.',
    codeSnippet: {
      language: 'php',
      description: 'الگوی بهینه کش موقت با Transients API وردپرس',
      runContext: 'functions.php',
      code: `$cached_data = get_transient( 'hs_cached_weather' );\nif ( false === $cached_data ) {\n    $response = wp_remote_get( 'https://api.example.com/weather' );\n    $cached_data = wp_remote_retrieve_body( $response );\n    set_transient( 'hs_cached_weather', $cached_data, 4 * HOUR_IN_SECONDS );\n}`
    },
    relatedTermIds: ['nonces', 'action-hooks', 'theme-hierarchy'],
    seoKeywords: ['ترنزینت وردپرس', 'transients api', 'کش دیتابیس وردپرس', 'بهینه سازی کوئری های سنگین']
  }
];
