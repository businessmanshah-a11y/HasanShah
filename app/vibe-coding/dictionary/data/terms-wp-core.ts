import { EncyclopediaTerm } from './types';

export const wpCoreTerms: EncyclopediaTerm[] = [
  {
    id: 'action-hooks',
    termEn: 'Action Hooks (do_action / add_action)',
    termFa: 'قلاب‌های اکشن و چرخه حیات وردپرس',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'اَک-شِن هوکس',
    tags: ['php', 'hooks', 'architecture', 'lifecycle'],
    sequenceOrder: 19,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'beginner', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'پریزهای برق استاندارد وردپرس؛ تا بدون شکستن دیوارهای اصلی، دوشاخه امکانات خود را در لحظه مشخص به برق بزنید.',
    beginnerTrap: 'رها کردن کدهای اجرایی مستقیماً در ریشه فایل functions.php بدون هوک؛ کدهایتان قبل از آماده شدن سیستم وردپرس اجرا شده و سایت با خطای Fatal Error قفل می‌شود!',
    analogy: 'دقیقاً مثل پریز برق است! وردپرس در نقاط مختلف اجرای صفحه، پریزهایی تعبیه کرده تا تو بدون شکستن دیوارها، دوشاخه کد دلخواهت را بزنی به پریز و چراغت روشن شود!',
    humanQuestion: 'چطور بدون اینکه به کدهای اصلی وردپرس دست بزنیم، امکانات و رفتارهای دلخواه را به سایت اضافه کنیم؟',
    realPain: 'اگر کدت را مستقیم بدون هوک در فایل functions.php رها کنی، کدهایت قبل از اینکه سیستم کاربران وردپرس لود شود اجرا شده و کل سایت با صفحه سفید مرگبار قفل می‌شود!',
    commonAiError: {
      errorSnippet: 'Fatal error: Call to undefined function wp_get_current_user() in functions.php:4',
      explanationFa: 'هوش مصنوعی کد رو مستقیم گذاشته توی فایل بدون اینکه داخل اکشن هوک مناسب مثل init قرار بده!'
    },
    freelanceTip: 'به کارفرما اطمینان بده که هیچ فایل اصلی وردپرس ویرایش نشده و تمام امکانات با هوک‌های استاندارد پیاده‌سازی شده‌اند تا سایت با آپدیت‌های بعدی هرگز خراب نشود.',
    asciiDiagram: `[چرخه لود وردپرس: wp_loaded ──> init ──> wp_head ──> wp_footer]
                                   │
                                   ▼
                [پریز هوک شما: add_action('init', 'hs_func')]
                                   │
                                   ▼
                    اجرای مطمئن و بدون باگ در زمان صحیح`,
    injectionTarget: 'فایل functions.php یا پوشه mu-plugins/hs-features.php',
    cursorPrompt: `[نقش]: مهندس ارشد بک‌اند و معماری وردپرس (WordPress Core Architect).
[زمینه]: چرخه حیات لود وردپرس در @functions.php.
[وظیفه]: قابلیت [نام قابلیت مثلاً ثبت خودکار لاگ ورود کاربران] را با اتصال به یک اکشن هوک مناسب پیاده کن.
[شروط سلبی الزامی]:
- هرگز کدهای پردازشی را خارج از قلاب‌های وردپرس رها نکن.
- برای کدهای بعد از لود سیستم کاربری از هوک init یا template_redirect استفاده کن.
- تابع اجرایی باید با پیشوند اختصاصی hs_ نام‌گذاری شده و دارای تقدم مشخص (Priority) باشد.
[خروجی]: قطعه کد تمیز PHP با کامنت توضیح چرخه لود.`,
    claudePrompt: `من می‌خواهم تابعی را به اکشن هوک wp_head متصل کنم که یک متاتگ امنیتی اختصاصی چاپ کند. کد کامل را با رعایت استانداردهای PHP CS و پیشوند اختصاصی بنویس.`,
    debugPrompt: `کدی که نوشتی خطای Call to undefined function wp_get_current_user داد. مطمئن شو که تابع به جای اجرای مستقیم، درون اکشن هوک init ثبت شده است.`,
    howToTest: {
      steps: [
        'کد را ذخیره کرده و صفحه اصلی سایت را رفرش کنید.',
        'سورس صفحه (View Source) را باز کرده و محل مورد نظر (مثلاً تگ head) را جستجو کنید.',
        'مطمئن شوید خروجی در همان نقطه و بدون هیچ اخطاری در لاگ دیباگ ظاهر شده است.'
      ],
      expectedResult: 'عملیات در لحظه مشخص اجرا شده و هیچ خطای Fatal رخ نمی‌دهد.',
      redFlags: ['اجرای کد قبل از لود توابع احراز هویت وردپرس']
    },
    shortDefinition: 'نقاط تزریق مشخص در چرخه اجرای وردپرس که به شما اجازه می‌دهند بدون تغییر فایل‌های هسته، کدهای اختصاصی خود را در لحظه مشخص اجرا کنید.',
    deepExplanation: 'هنگام بارگذاری هر صفحه در وردپرس، صدها قلاب اکشن به ترتیب زمانی صدا زده می‌شوند. با تابع add_action مشخص می‌کنید کد شما دقیقاً در کدام مرحله وارد عمل شود.',
    vibeCodingImpact: 'هوش مصنوعی اغلب کدهای شما را مستقیماً در functions.php بدون هوک قرار می‌دهد که باعث ارورهای مهلک زمان لود می‌شود.',
    goldenPrompt: 'قابلیت [نام قابلیت] را در قالب وردپرس بنویس. حتماً از یک اکشن هوک مناسب با چرخه حیات وردپرس (مثل wp_enqueue_scripts یا init) استفاده کن. تابع باید دارای پیشوند اختصاصی hs_ باشد.',
    codeSnippet: {
      language: 'php',
      description: 'ثبت اصولی اکشن هوک برای اضافه کردن متاتگ اختصاصی به هدر وردپرس',
      runContext: 'functions.php',
      code: "function hs_add_custom_meta_tags() {\n    echo '<meta name=\"theme-creator\" content=\"Hasan Shah\">';\n}\nadd_action( 'wp_head', 'hs_add_custom_meta_tags', 5 );"
    },
    seriesEpisodeUrl: '/vibe-coding/series/faktor-dadash',
    seriesEpisodeLabel: 'قسمت ۱ سریال وایب‌کدینگ (فاکتور داداش) - دقیقه ۲۷:۱۵',
    relatedTermIds: ['filter-hooks', 'child-theme'],
    seoKeywords: ['اکشن هوک', 'action hooks', 'add_action در وردپرس', 'هوک های وردپرس']
  },
  {
    id: 'filter-hooks',
    termEn: 'Filter Hooks (apply_filters / add_filter)',
    termFa: 'قلاب‌های فیلتر و اصلاح خروجی داده‌ها',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'فیل-تِر هوکس',
    tags: ['php', 'hooks', 'data-manipulation', 'filters'],
    sequenceOrder: 20,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'beginner'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'دستگاه تصفیه داده‌ها؛ متغیرها را سر راه عبور تحویل می‌گیرد، تغییر می‌دهد و نسخه تمیز را برمی‌گرداند.',
    beginnerTrap: 'فراموش کردن دستور return در انتهای تابع فیلتر؛ نتیجه این خطای رایج، غیب شدن کامل متن مقالات یا قیمت محصولات در سایت است!',
    analogy: 'مثل دستگاه تصفیه آب است؛ آب (متن یا دیتا) از لوله رد می‌شود، تو سر راهش یک فیلتر می‌گذاری تا مواد مورد نظرت را اضافه یا کم کنی و آب زلال‌تر را به لوله بازگردانی!',
    humanQuestion: 'چطور متن نوشته‌ها، قیمت محصولات، یا خروجی افزونه‌ها را قبل از نمایش دستکاری کنم؟',
    realPain: 'بزرگ‌ترین سوتی هوش مصنوعی این است که داخل فیلتر فراموش می‌کند متغیر را return کند؛ نتیجه؟ کل متن مقاله در سایت غیب می‌شود و یک صفحه خالی نشان داده می‌شود!',
    commonAiError: {
      errorSnippet: 'Warning: the_content filter must return a string value, none returned',
      explanationFa: 'هوش مصنوعی یادش رفته دستور return $content رو در انتهای تابع بنویسه و کل متن پاک شده!'
    },
    freelanceTip: 'تفاوت کلیدی اکشن و فیلتر را یاد بگیر: اکشن کار انجام می‌دهد (فعل است)، اما فیلتر دیتا را دستکاری کرده و برمی‌گرداند.',
    asciiDiagram: `[داده ورودی: متن مقاله $content]
                 │
                 ▼
[فیلتر شما: افزودن باکس طلایی CTA به انتهای متن]
                 │
                 ▼
[حتماً و الزاماً: return $content_modified;] ──> نمایش بی‌نقص در سایت`,
    injectionTarget: 'فایل functions.php قالب یا پلاگین اختصاصی',
    cursorPrompt: `[نقش]: توسعه‌دهنده پیشرفته وردپرس و متخصص فیلترهای هسته (WordPress Filter Specialist).
[زمینه]: تغییر خروجی در @functions.php.
[وظیفه]: با استفاده از فیلتر استاندارد [نام فیلتر مثلاً the_content یا woocommerce_get_price_html] خروجی را ویرایش کن.
[شروط سلبی بسیار مهم]:
- هرگز فراموش نکن متغیر دستکاری‌شده را در انتهای تابع return کنی.
- فقط در شرایط خاص (مثلاً if (is_singular('post'))) فیلتر را اعمال کن و در غیر این صورت متغیر دست‌نخورده را برگردان.
- کدهای HTML الحاقی حتماً با توابع امنیتی پاکسازی شوند.
[خروجی]: تابع فیلتر با رعایت پیشوند hs_.`,
    claudePrompt: `من می‌خواهم خلاصه مقالات (the_excerpt) را فیلتر کنم و طول آن را به ۳۰ کلمه کاهش دهم و سه نقطه (...) اضافه کنم. کد فیلتر وردپرس را با رعایت برگشت حتمی متغیر بنویس.`,
    debugPrompt: `متن مقالات پس از اعمال فیلتر کاملاً ناپدید شده است! فوراً بررسی کن که آیا متغیر ورودی در تمام انشعاب‌های if و else برگشت داده شده است یا خیر.`,
    howToTest: {
      steps: [
        'کد فیلتر را ذخیره کرده و یکی از مقالات سایت را باز کنید.',
        'آیا تغییر مورد نظر (مثلاً اضافه شدن کادر در انتهای متن) نمایان شده است؟',
        'یک صفحه دیگر را باز کنید و چک کنید مبادا محتوای صفحات نامربوط آسیب دیده باشد.'
      ],
      expectedResult: 'محتوا دقیقاً در صفحات هدف تغییر کرده و سایر صفحات سالم باقی مانده‌اند.',
      redFlags: ['سفید شدن صفحه یا پاک شدن کامل متن نوشته']
    },
    shortDefinition: 'توابعی که مقادیر خروجی متون، محتوا یا آرایه‌ها را دریافت کرده، آن‌ها را ویرایش می‌کنند و مقدار اصلاح‌شده را بازمی‌گردانند.',
    deepExplanation: 'معروف‌ترین فیلتر وردپرس the_content است که محتوای نوشته را قبل از چاپ در مرورگر اصلاح می‌کند.',
    vibeCodingImpact: 'یکی از متداول‌ترین خطاهای هوش مصنوعی این است که داخل تابع متصل به فیلتر، فراموش می‌کند مقدار متغیر را return کند.',
    goldenPrompt: 'یک فیلتر وردپرس با add_filter برای the_content بنویس که در انتهای هر مقاله یک باکس CTA درج کند. حتماً مقدار $content ویرایش‌شده را در پایان return کن.',
    codeSnippet: {
      language: 'php',
      description: 'فیلتر کردن محتوای پست وردپرس برای تزریق کادر دعوت اختصاصی',
      runContext: 'functions.php',
      code: "add_filter( 'the_content', function( $content ) {\n    if ( is_singular( 'post' ) ) {\n        $cta = '<div class=\"my-8 p-6 rounded-2xl bg-gold/10 border border-gold/30 text-gold font-bold\">برای یادگیری وایب‌کدینگ به دوره‌های حسن شاهمرادی بپیوندید.</div>';\n        return $content . $cta;\n    }\n    return $content;\n});"
    },
    prerequisiteTermIds: ['action-hooks'],
    seriesEpisodeUrl: '/vibe-coding/series/faktor-dadash',
    seriesEpisodeLabel: 'قسمت ۱ سریال وایب‌کدینگ (فاکتور داداش) - دقیقه ۳۴:۱۰',
    relatedTermIds: ['action-hooks', 'custom-post-types'],
    seoKeywords: ['فیلتر هوک', 'filter hooks', 'add_filter در وردپرس', 'تغییر خروجی با فیلتر']
  },
  {
    id: 'theme-hierarchy',
    termEn: 'WordPress Theme Hierarchy',
    termFa: 'سلسله‌مراتب و تقدم لود فایل‌های پوسته',
    category: 'wp-core',
    level: 'beginner',
    phonetic: 'تیم های-رار-کی',
    tags: ['templates', 'php', 'hierarchy', 'routing'],
    sequenceOrder: 21,
    learningStation: 'station-3',
    readingTimeMinutes: 1,
    targetPersonas: ['developer', 'designer', 'beginner'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: true,
    elevatorPitch: 'نقشه راه‌های هوشمند وردپرس؛ که مشخص می‌کند برای باز کردن هر صفحه کدام فایل PHP باید اجرا شود.',
    beginnerTrap: 'ریختن تمام کدهای سایت در یک فایل شلوغ index.php با ده‌ها شرط if(is_page())؛ که بعد از یک ماه هیچ‌کس نمی‌تواند آن را ویرایش کند!',
    analogy: 'مثل یک بازرس وظیفه‌شناس است؛ وقتی کاربر صفحه یک نمونه‌کار را باز می‌کند، اول پوشه single-portfolio را چک می‌کند، اگر نبود می‌رود سراغ single.php، و در آخر اگر هیچی نبود index.php را نشان می‌دهد.',
    humanQuestion: 'وردپرس از کجا می‌فهمد برای نمایش صفحه یک محصول خاص، باید کدام فایل PHP را اجرا کند؟',
    realPain: 'اگر این درخت را نشناسی، هوش مصنوعی کل کدهای سایت را در یک فایل شلوغ index.php می‌ریزد و ۳ ماه بعد هیچ‌کس نمی‌تواند آن را ویرایش کند!',
    commonAiError: {
      errorSnippet: 'Putting 15 different if(is_page()) conditions inside single index.php file',
      explanationFa: 'هوش مصنوعی تنبلی کرده و به جای ساخت فایل اختصاصی، کل سایت رو ریخته تو index.php!'
    },
    freelanceTip: 'تسلط بر نام‌گذاری فایل‌ها بر اساس چارت رسمی وراثت قالب، نشانه اصلی یک توسعه‌دهنده با تجربه وردپرس است.',
    asciiDiagram: `[درخواست کاربر: صفحه یک نمونه‌کار portfolio]
                        │
                        ▼
            آیا single-portfolio.php هست؟
           ├── بله  ──> ✅ اجرای سریع همین فایل
           └── خیر ──> آیا single.php هست؟
                        ├── بله  ──> ✅ اجرا
                        └── خیر ──> برگشت به index.php`,
    injectionTarget: 'نام‌گذاری دقیق فایل‌های تمپلیت در ریشه پوشه قالب',
    cursorPrompt: `[نقش]: معمار ساختار قالب وردپرس (Theme Structure Specialist).
[زمینه]: ساختار تمپلیت‌های قالب وردپرس بر اساس وراثت رسمی WPHierarchy.
[وظیفه]: برای نوع محتوای [مثلاً محصولات یا دوره‌های آموزشی] فایل‌های تمپلیت استاندارد را نام‌گذاری و اسکلت‌بندی کن.
[شروط سلبی الزامی]:
- از تجمیع کدهای صفحات ناهمگون در index.php پرهیز کن.
- برای صفحه تکی از single-{post_type}.php و برای لیست از archive-{post_type}.php استفاده کن.
- بخش‌های مشترک مثل هدر، فوتر و کامنت‌ها را با get_template_part فراخوانی کن.
[خروجی]: ساختار تمیز و استاندارد تمپلیت‌ها.`,
    claudePrompt: `لیست فایل‌های مورد نیاز طبق سلسله‌مراتب وردپرس برای ساخت بخش مقالات و بخش خدمات را به همراه نام دقیق فایل‌ها و وظیفه هر کدام مشخص کن.`,
    debugPrompt: `وردپرس به جای اجرای فایل اختصاصی، همچنان فایل عمومی index.php را نشان می‌دهد. مطمئن شو که نام اسلاگ در اسم فایل single-{slug}.php دقیقاً با شناسه رجیستر شده مطابقت دارد.`,
    howToTest: {
      steps: [
        'یک فایل تستی به نام single-portfolio.php در قالب بسازید و متنی ساده در آن اکو کنید.',
        'صفحه یکی از نمونه‌کارها را در مرورگر باز کنید.',
        'اگر متن تستی ظاهر شد، یعنی وردپرس این فایل را بر اساس وراثت قالب به درستی شناسایی کرده است.'
      ],
      expectedResult: 'وردپرس با اولویت بالاتر فایل اختصاصی را اجرا می‌کند.',
      redFlags: ['اجرای صفحه پیش‌فرض وبلاگ برای محتواهای سفارشی']
    },
    shortDefinition: 'قانون رسمی وردپرس که مشخص می‌کند برای نمایش هر صفحه کدام فایل تمپلیت تقدم بالاتر دارد.',
    deepExplanation: 'درک این درخت وراثت مانع از ایجاد فایل‌های اضافه و بی‌نظمی در پوسته می‌شود.',
    vibeCodingImpact: 'اگر به هوش مصنوعی نام صفحه را نگویید، تمایل دارد کل سایت را در یک فایل شلوغ با ده‌ها دستور شرطی بسازد.',
    goldenPrompt: 'من یک CPT به نام hs_project دارم. با رعایت قوانین Theme Hierarchy وردپرس، نام دقیق تمپلیت برای صفحه تکی و صفحه آرشیو را مشخص کن.',
    codeSnippet: {
      language: 'bash',
      description: 'نام‌گذاری استاندارد فایل‌های پوسته برای Custom Post Type اختصاصی',
      runContext: 'Theme Directory',
      code: "# برای صفحه نمایش تک‌پروژه:\nsingle-hs_project.php\n\n# برای صفحه آرشیو و لیست کل پروژه‌ها:\narchive-hs_project.php"
    },
    prerequisiteTermIds: ['child-theme'],
    relatedTermIds: ['child-theme', 'action-hooks'],
    seoKeywords: ['سلسله مراتب قالب وردپرس', 'theme hierarchy', 'ساختار فایل های پوسته', 'تمپلیت های وردپرس']
  },
  {
    id: 'child-theme',
    termEn: 'Child Theme Architecture',
    termFa: 'معماری پوسته فرزند برای حفظ تغییرات',
    category: 'wp-core',
    level: 'beginner',
    phonetic: 'چایلد تیم',
    tags: ['theme', 'updates', 'stability', 'best-practices'],
    sequenceOrder: 22,
    learningStation: 'station-3',
    readingTimeMinutes: 1,
    targetPersonas: ['beginner', 'founder', 'developer'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: true,
    elevatorPitch: 'سپر محافظ تغییرات اختصاصی شما؛ تا با آپدیت قالب والد، حتی یک کلمه از زحماتتان پاک نشود.',
    beginnerTrap: 'کد زدن مستقیم در قالب والد؛ با اولین آپدیت تم، تمام کدهای سفارشی شما پاک شده و صدها ساعت زحمت بر باد می‌رود!',
    analogy: 'مثل یک نایلون محافظ روی فرش گران‌قیمت است؛ هر چه رویش بنویسی یا رنگ بریزی به فرش اصلی آسیب نمی‌زند و با شستن از بین نمی‌رود!',
    humanQuestion: 'چرا وقتی قالب وردپرس را آپدیت کردم، تمام تغییرات و کدهایی که نوشته بودم پاک شدند؟',
    realPain: 'تغییر دادن مستقیم فایل‌های قالب والد، بزرگ‌ترین اشتباهی است که باعث پاک شدن صدها ساعت زحمت پس از زدن یک دکمه آپدیت می‌شود!',
    commonAiError: {
      errorSnippet: 'Editing parent style.css directly without creating child theme structure',
      explanationFa: 'هوش مصنوعی کدهای سفارشی رو مستقیم ریخته تو قالب اصلی و با آپدیت بعدی همه چی پاک میشه!'
    },
    freelanceTip: 'همیشه تحویل پروژه با چایلدتم را در پیش‌فاکتور قید کن؛ این نشانه وجدان کاری و حرفه‌ای بودن شماست.',
    asciiDiagram: `[قالب والد: فایل‌های اصلی ──(دریافت آپدیت‌ها)──> بازنویسی امن]
                        │
                        ▼ (به ارث بردن تمام امکانات)
[پوسته فرزند (Child Theme): کدهای اختصاصی شما همیشه محفوظ می‌مانند]`,
    injectionTarget: 'پوشه wp-content/themes/your-theme-child/',
    cursorPrompt: `[نقش]: معمار قالب‌های استاندارد و امن وردپرس.
[زمینه]: ساخت پوسته فرزند برای قالب والد [نام قالب مثلاً Hello Elementor یا Astra].
[وظیفه]: فایل‌های پایه چایلدتم شامل @style.css و @functions.php را ایجاد کن.
[شروط سلبی الزامی]:
- در هدر style.css مقدار Template باید دقیقاً نام پوشه والد با حروف کوچک باشد.
- در functions.php استایل والد را با wp_enqueue_style اصولی به ارث ببر، نه با دستور منسوخ @import در CSS.
[خروجی]: ساختار استاندارد پوسته فرزند.`,
    claudePrompt: `دستورالعمل و کدهای ساخت یک چایلدتم بی‌نقص برای وردپرس را بنویس که کدهای سفارشی را از گزند آپدیت‌ها حفظ کند.`,
    debugPrompt: `چایلدتم در پیشخوان وردپرس خطای Broken Theme می‌دهد. مطمئن شو نام پوشه والد در جلوی فیلد Template فایل style.css مو به مو درست تایپ شده است.`,
    howToTest: {
      steps: [
        'پوسته فرزند را در منوی نمایش > پوسته‌ها فعال کنید.',
        'یک کد تستی در functions.php چایلدتم اضافه کنید.',
        'یک به‌روزرسانی روی قالب والد انجام دهید؛ بررسی کنید که کدهای شما بعد از آپدیت دست‌نخورده باقی مانده‌اند.'
      ],
      expectedResult: 'قالب والد به روز می‌شود اما تمام استایل‌ها و توابع چایلدتم کاملاً فعال می‌مانند.',
      redFlags: ['غیرفعال شدن تغییرات پس از فشردن دکمه آپدیت قالب والد']
    },
    shortDefinition: 'پوسته‌ای که تمام امکانات پوسته والد را به ارث می‌برد و تغییرات سفارشی شما را بعد از آپدیت پوسته اصلی محفوظ نگه می‌دارد.',
    deepExplanation: 'پوسته فرزند فقط با داشتن یک فایل style.css و functions.php به سادگی فعال می‌شود.',
    vibeCodingImpact: 'هوش مصنوعی همیشه سریع‌ترین راه را انتخاب می‌کند و مستقیماً فایل‌های تم والد را دستکاری می‌کند مگر اینکه از او چایلدتم بخواهید.',
    goldenPrompt: 'یک پوسته فرزند استاندارد برای قالب [نام قالب] ایجاد کن. هدر فایل style.css باید Template را به درستی به والد ارجاع دهد.',
    codeSnippet: {
      language: 'css',
      description: 'هدر استاندارد فایل style.css برای ساخت پوسته فرزند',
      runContext: 'child-theme/style.css',
      code: "/*\n Theme Name:   HasanShah Child Theme\n Theme URI:    https://hasanshah.ir\n Description:  پوسته فرزند اختصاصی برای کدهای وایب‌کدینگ\n Template:     parent-theme-folder-name\n Version:      1.0.0\n*/"
    },
    prerequisiteTermIds: ['theme-hierarchy'],
    seriesEpisodeUrl: '/vibe-coding/series/faktor-dadash',
    seriesEpisodeLabel: 'قسمت ۲ سریال وایب‌کدینگ (فاکتور داداش) - ساخت CPT فاکتور',
    relatedTermIds: ['theme-hierarchy', 'action-hooks'],
    seoKeywords: ['چایلد تم', 'child theme', 'پوسته فرزند وردپرس', 'ساخت چایلد تم']
  },
  {
    id: 'custom-post-types',
    termEn: 'Custom Post Types (CPT)',
    termFa: 'انواع پست سفارشی در وردپرس',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'کاس-توم پست تایپ (CPT)',
    tags: ['cpt', 'data-modeling', 'backend', 'cms'],
    sequenceOrder: 23,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder', 'designer'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'کشوهای بایگانی اختصاصی در پیشخوان وردپرس؛ تا دوره‌ها، پروژه‌ها و املاک با نوشته‌های وبلاگ قاطی نشوند.',
    beginnerTrap: 'فراموش کردن بازنشانی پیوندهای یکتا (Permalinks) بعد از ثبت CPT؛ صفحه تک‌پست با ارور ۴۰۴ مواجه می‌شود و فکر می‌کنید کدها خراب است!',
    analogy: 'مثل این است که علاوه بر پرونده مشتریان عادی در یک شرکت، کشوهای بایگانی مخصوص پروژه‌ها، قراردادها و اساتید هم اضافه کنی تا همه چیز تمیز تفکیک شود.',
    humanQuestion: 'چطور بخش‌هایی مثل دوره‌ها، نمونه‌کارها یا املاک را بدون مخلوط شدن با نوشته‌های وبلاگ بسازیم؟',
    realPain: 'اگر CPT نسازی، مجبوری نمونه‌کارها را لابلای مقالات وبلاگ بگذاری که پنل ادمین را شلوغ و غیرقابل مدیریت می‌کند.',
    commonAiError: {
      errorSnippet: 'Custom Post Type registered but returns 404 on single post URL',
      explanationFa: 'هوش مصنوعی CPT رو ساخته ولی یادش رفته بگه پیوندهای یکتا (Permalinks) رو بازنشانی کنی!'
    },
    freelanceTip: 'با ساخت CPTهای اختصاصی، سایت کارفرما را از یک وبلاگ ساده به یک نرم‌افزار تحت وب حرفه‌ای تبدیل می‌کنی.',
    asciiDiagram: `[پیشخوان وردپرس]
       ├── نوشته‌ها (وبلاگ)
       ├── برگه‌ها (لندینگ‌ها)
       └── کشوی جدید: [نمونه‌کارها / دوره‌ها] ──> منوی مستقل، فیلدهای اختصاصی`,
    injectionTarget: 'فایل functions.php یا فایل inc/cpt.php با هوک init',
    cursorPrompt: `[نقش]: معمار ساختار داده وردپرس (Data Modeling Engineer).
[زمینه]: ثبت پست‌تایپ اختصاصی در @functions.php.
[وظیفه]: تابع رجیستر CPT را برای [نام موجودیت مثلاً دوره‌های آموزشی] بنویس.
[شروط سلبی الزامی]:
- پارامتر show_in_rest حتماً true باشد تا ادیتور بلوک گوتنبرگ فعال شود.
- نام پست‌تایپ نباید بیشتر از ۲۰ کاراکتر باشد و پیشوند hs_ داشته باشد.
- پشتیبانی از thumbnail، title، editor و excerpt قید شود.
[خروجی]: کدهای استاندارد متصل به هوک init.`,
    claudePrompt: `کد استاندارد ساخت یک Custom Post Type به نام hs_course را با تمام برچسب‌های فارسی و منوی داشبورد مناسب بنویس. یادآوری برای رفرش پرمالینک هم قرار بده.`,
    debugPrompt: `پس از ثبت CPT، با کلیک روی مشاهده پست ارور ۴۰۴ نمایان می‌شود. لطفاً راهنمای بازنشانی قوانین Rewrite Rules را توضیح بده.`,
    howToTest: {
      steps: [
        'کد را ذخیره کرده و به تنظیمات > پیوندهای یکتا بروید و فقط یکبار دکمه "ذخیره تغییرات" را بزنید (بدون تغییر تنظیمات).',
        'در منوی پیشخوان، کشوی جدید (مثلاً نمونه‌کارها) را باز کرده و یک آیتم جدید منتشر کنید.',
        'روی دکمه مشاهده پست کلیک کنید؛ آیا صفحه بدون خطای ۴۰۴ لود می‌شود؟'
      ],
      expectedResult: 'منوی جدید در پیشخوان ظاهر شده و صفحات اختصاصی بدون مشکل ۴۰۴ باز می‌شوند.',
      redFlags: ['بروز خطای ۴۰۴ در لینک تکی پست تایپ جدید']
    },
    shortDefinition: 'ساختار محتوایی جدید فراتر از نوشته‌ها و برگه‌های پیش‌فرض وردپرس؛ مانند ساخت بخش پروژه‌ها یا دوره‌ها.',
    deepExplanation: 'با تابع register_post_type به وردپرس اعلام می‌کنید که یک نوع دیتای جدید با منوی مستقل در پنل ادمین برای شما بسازد.',
    vibeCodingImpact: 'اگر آرگومان‌های CPT (به خصوص show_in_rest) را به هوش مصنوعی ندهید، محتوا در پنل گوتنبرگ لود نمی‌شود.',
    goldenPrompt: 'یک Custom Post Type با نام hs_portfolio بساز: قابلیت show_in_rest: true، پشتیبانی از تصویر شاخص و اسلاگ آرشیو portfolio.',
    codeSnippet: {
      language: 'php',
      description: 'ثبت اصولی یک CPT مدرن با پشتیبانی کامل از گوتنبرگ و REST API',
      runContext: 'functions.php',
      code: "add_action( 'init', function() {\n    register_post_type( 'hs_portfolio', [\n        'labels'      => [ 'name' => 'نمونه‌کارها', 'singular_name' => 'نمونه‌کار' ],\n        'public'      => true,\n        'has_archive' => true,\n        'menu_icon'   => 'dashicons-portfolio',\n        'supports'    => [ 'title', 'editor', 'thumbnail', 'excerpt' ],\n        'show_in_rest'=> true,\n    ]);\n});"
    },
    prerequisiteTermIds: ['theme-hierarchy'],
    seriesEpisodeUrl: '/vibe-coding/series/faktor-dadash',
    seriesEpisodeLabel: 'قسمت ۲ سریال وایب‌کدینگ (فاکتور داداش) - ساخت CPT فاکتور',
    relatedTermIds: ['theme-hierarchy', 'action-hooks'],
    seoKeywords: ['کاستوم پست تایپ', 'cpt وردپرس', 'register_post_type', 'انواع پست اختصاصی']
  },
  {
    id: 'nonces',
    termEn: 'Nonces (Number Used Once)',
    termFa: 'توکن‌های امنیتی یکبارمصرف وردپرس',
    category: 'wp-core',
    level: 'advanced',
    phonetic: 'نان-سِز (Nonce)',
    tags: ['security', 'csrf', 'forms', 'validation'],
    sequenceOrder: 24,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'رمز پویای یک‌بارمصرف فرم‌های وردپرس؛ تا هکرها نتوانند با لینک‌های تقلبی و ربات به سایت آسیب بزنند.',
    beginnerTrap: 'ارسال فرم‌ها بدون فیلد نانس؛ سایت شما در برابر حملات فیشینگ و جعل درخواست (CSRF) کاملاً بی‌دفاع می‌ماند!',
    analogy: 'مثل رمز پویای پیامکی بانک است؛ فقط برای همین یک درخواست و برای چند دقیقه مشخص اعتبار دارد تا دزد نتواند از روی لینک جعلی پول برداشت کند!',
    humanQuestion: 'چطور مطمئن شوم فرم‌هایی که در سایتم پر می‌شوند از سایت خودمان ارسال شده‌اند نه از طریق ربات‌های هکر؟',
    realPain: 'اگر فرم‌هایت نانس نداشته باشند، یک هکر می‌تواند با ارسال یک لینک مخرب، تنظیمات سایت یا قیمت محصولات را به راحتی عوض کند!',
    commonAiError: {
      errorSnippet: 'Form processing without wp_verify_nonce or check_ajax_referer',
      explanationFa: 'هوش مصنوعی فرم رو ساخته اما هیچ توکن امنیتی نذاشته و فرم در برابر حملات جعل هویت بی دفاعه!'
    },
    freelanceTip: 'به کارفرما اثبات کن که تمام فرم‌های سایت دارای لایه امنیتی Nonce هستند تا دغدغه هک شدن نداشته باشد.',
    asciiDiagram: `[کاربر فرم را باز می‌کند] ──> ساخت توکن موقت: wp_create_nonce('action_key')
                                              │
                                              ▼ (ارسال فرم با دکمه سابمیت)
[بررسی در سرور: check_ajax_referer]
   ├── توکن معتبر است ──> ✅ ذخیره داده‌ها
   └── توکن نامعتبر است ──> ❌ رد درخواست (حمله هکر)`,
    injectionTarget: 'داخل فرم‌های HTML با wp_nonce_field و در هندلر سرور با check_ajax_referer',
    cursorPrompt: `[نقش]: حسابرس امنیت وب و متخصص ضدحمله وردپرس (WordPress Security Auditor).
[زمینه]: پردازش امن فرم‌های ایجکس در @functions.php.
[وظیفه]: یک فرم لید سریع با تاییدیه امنیتی کامل بنویس.
[شروط سلبی الزامی]:
- در فرانت‌اند با wp_create_nonce توکن اختصاصی بساز.
- در سرور با check_ajax_referer یا wp_verify_nonce توکن را بسنج و در صورت عدم تطابق با wp_die( -1, 403 ) پایان بده.
- ورودی‌ها را با sanitize_text_field تمیز کن.
[خروجی]: کدهای امن و نفوذناپذیر PHP.`,
    claudePrompt: `معماری امنیتی یک فرم دریافت شماره موبایل با توکن Nonce در وردپرس را پیاده‌سازی کن تا از هرگونه اسپم و ربات‌های مخرب جلوگیری شود.`,
    debugPrompt: `هنگام سابمیت فرم خطای -1 یا ۴۰۳ بازگردانده می‌شود. نام کلید action در تابع ساخت نانس و بررسی سرور را تطبیق بده تا یکسان باشند.`,
    howToTest: {
      steps: [
        'فرم را به صورت عادی پر کرده و ارسال کنید؛ باید پیغام موفقیت دریافت کنید.',
        'در ابزار Inspect مرورگر، مقدار فیلد امنیتی _wpnonce را به یک عدد رندوم تغییر دهید.',
        'دکمه ارسال را بزنید؛ آیا سیستم خطای امنیتی ۴۰۳ داد؟ اگر بله، سیستم نانس سایتتان ۱۰۰٪ نفوذناپذیر است.'
      ],
      expectedResult: 'درخواست‌های دستکاری‌شده بلافاصله با خطای دسترسی غیرمجاز مسدود می‌شوند.',
      redFlags: ['پذیرفته شدن فرم حتی در صورت خالی بودن یا غلط بودن توکن']
    },
    shortDefinition: 'رشته‌های رمزنگاری‌شده موقت برای اعتبارسنجی اینکه آیا درخواستی توسط همان کاربر و از همان فرم معتبر سایت صادر شده است.',
    deepExplanation: 'نانس‌ها سلاح اصلی وردپرس برای خنثی‌سازی حملات خطرناک CSRF هستند.',
    vibeCodingImpact: 'هوش مصنوعی برای ساده کردن کار، فرم‌ها را اغلب بدون نانس تولید می‌کند. چنین کدهایی به شدت آسیب‌پذیرند.',
    goldenPrompt: 'یک فرم تماس سریع ایجکس با PHP بنویس. الزامات امنیتی: حتماً از wp_create_nonce استفاده کن و در سرور با check_ajax_referer صحت توکن را بسنج.',
    codeSnippet: {
      language: 'php',
      description: 'بررسی صحت نانس در زمان دریافت اطلاعات ایجکس فرم',
      runContext: 'Ajax Handler',
      code: "add_action( 'wp_ajax_hs_save_lead', function() {\n    check_ajax_referer( 'hs_lead_security_nonce', 'security' );\n    wp_send_json_success( [ 'message' => 'اطلاعات با موفقیت ثبت شد' ] );\n});"
    },
    prerequisiteTermIds: ['action-hooks'],
    seriesEpisodeUrl: '/vibe-coding/series/faktor-dadash',
    seriesEpisodeLabel: 'قسمت ۳ سریال وایب‌کدینگ (فاکتور داداش) - امنیت و اعتبارسنجی نانس',
    relatedTermIds: ['action-hooks', 'transients-api'],
    seoKeywords: ['نانس وردپرس', 'nonces security', 'امنیت فرم های وردپرس', 'مقابله با csrf']
  },
  {
    id: 'transients-api',
    termEn: 'Transients API',
    termFa: 'کش موقت دیتابیس با زمان انقضا',
    category: 'wp-core',
    level: 'advanced',
    phonetic: 'تِرَن-زی-یِنتس اِی-پی-آی',
    tags: ['caching', 'performance', 'database', 'optimization'],
    sequenceOrder: 25,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'چرک‌نویس هوشمند روی میز سرور؛ محاسبات سنگین و خروجی وب‌سرویس‌ها را کش می‌کند تا با افزایش بازدید، سایت داون نشود.',
    beginnerTrap: 'فراخوانی وب‌سرویس‌های خارجی در هر بار لود صفحه بدون ترنزینت؛ سایت به شدت کند شده و با پایان سقف مجاز API مسدود می‌شود!',
    analogy: 'مثل نان تازه در فریزر است؛ نان را برای چند روز ذخیره می‌کنی تا هر بار که گرسنه شدی مجبور نباشی تا نانوایی بروی و در صف بایستی!',
    humanQuestion: 'چرا سایتم با افزایش تعداد بازدیدکنندگان به شدت کند می‌شود و خطای دیتابیس می‌دهد؟',
    realPain: 'بدون ترنزینت، با ورود ۵۰ کاربر همزمان، سرور در ثانیه ۵۰۰ کوئری تکراری اجرا می‌کند و رم سرور پر شده و سایت خاموش می‌شود!',
    commonAiError: {
      errorSnippet: 'Executing heavy external API call on every single page load',
      explanationFa: 'هوش مصنوعی هر بار که کاربر صفحه رو باز می‌کنه، یه درخواست سنگین به اینترنت می‌فرسته و سایت معطل می‌مونه!'
    },
    freelanceTip: 'با استفاده از ترنزینت، سرعت پاسخ‌دهی بخش‌های سنگین سایت کارفرما را تا ۱۰ برابر افزایش می‌دهی و هزینه هاست را به حداقل می‌رسانی.',
    asciiDiagram: `[کاربر صفحه را باز می‌کند]
             │
             ▼
      آیا داده در کش هست؟ get_transient()
     ├── بله  ──> ⚡ تحویل آنی در ۲ میلی‌ثانیه
     └── خیر ──> اجرای کوئری + ذخیره با set_transient(..., 4*HOUR)`,
    injectionTarget: 'فایل functions.php یا کدهای فراخوانی وب‌سرویس‌های خارجی',
    cursorPrompt: `[نقش]: مهندس پرفورمنس پایگاه داده وردپرس (Database Performance Engineer).
[زمینه]: بهینه‌سازی سرعت با کش موقت در @functions.php.
[وظیفه]: تابعی بنویس که نرخ لحظه‌ای ارز یا آب‌وهوا را دریافت کرده و با Transients API به مدت ۶ ساعت کش کند.
[شروط سلبی الزامی]:
- در صورت در دسترس نبودن کش، کوئری اجرا شود و داده جدید ذخیره گردد.
- در صورت بروز خطای اتصال به API، داده‌های کش قدیمی حفظ شوند تا صفحه سفید نشود.
- کلید ترنزینت حداکثر ۴۰ کاراکتر باشد و پیشوند hs_ داشته باشد.
[خروجی]: قطعه کد PHP دفاعی و بهینه‌شده.`,
    claudePrompt: `الگوی کامل پیاده‌سازی کش موقت با get_transient و set_transient را برای کوئری سنگین محصولات پرفروش ووکامرس به همراه قابلیت حذف کش هنگام ثبت سفارش جدید پیاده‌سازی کن.`,
    debugPrompt: `داده‌ها پس از آپدیت در پیشخوان همچنان مقدار قدیمی را نشان می‌دهند. یک هوک با delete_transient بنویس که با ذخیره هر پست، کش به صورت خودکار باطل شود.`,
    howToTest: {
      steps: [
        'کد را اجرا کرده و افزونه Query Monitor را باز کنید.',
        'بار اول تعداد کوئری‌ها را یادداشت کنید؛ بار دوم صفحه را رفرش کنید.',
        'آیا تعداد کوئری‌ها به شدت کاهش یافت و زمان لود نصف شد؟'
      ],
      expectedResult: 'داده‌ها بدون اجرای کوئری سنگین و در کسری از ثانیه از حافظه کش خوانده می‌شوند.',
      redFlags: ['اجرای مکرر درخواست شبکه در هر رفرش صفحه']
    },
    shortDefinition: 'مکانیزم رسمی کش داده‌های سنگین و کوئری‌های پرمصرف در دیتابیس وردپرس به همراه تعیین دقیق زمان انقضا.',
    deepExplanation: 'با توابع set_transient و get_transient داده را مثلاً به مدت ۴ ساعت ذخیره می‌کنید تا درخواست بعدی لحظه‌ای خوانده شود.',
    vibeCodingImpact: 'وایب‌کدر هوشمند با اضافه کردن کلمه Transient، سرعت لود بخش‌های سنگین را به شکل چشمگیری ارتقا می‌دهد.',
    goldenPrompt: 'یک تابع بنویس که داده‌ها را با استفاده از Transients API وردپرس به مدت ۴ ساعت کش کند تا به سرور فشار نیاید.',
    codeSnippet: {
      language: 'php',
      description: 'الگوی بهینه کش موقت با Transients API وردپرس',
      runContext: 'functions.php',
      code: "$cached_data = get_transient( 'hs_cached_weather' );\nif ( false === $cached_data ) {\n    $response = wp_remote_get( 'https://api.example.com/weather' );\n    $cached_data = wp_remote_retrieve_body( $response );\n    set_transient( 'hs_cached_weather', $cached_data, 4 * HOUR_IN_SECONDS );\n}"
    },
    prerequisiteTermIds: ['nonces'],
    relatedTermIds: ['nonces', 'action-hooks'],
    seoKeywords: ['ترنزینت وردپرس', 'transients api', 'کش دیتابیس وردپرس', 'بهینه سازی کوئری های سنگین']
  },
  {
    id: 'must-use-plugins',
    termEn: 'Must-Use Plugins (mu-plugins)',
    termFa: 'افزونه‌های ضروری و همیشه فعال (mu-plugins)',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'ماست-یوز پلاگینز (mu-plugins)',
    tags: ['mu-plugins', 'architecture', 'stability', 'core-safety'],
    sequenceOrder: 26,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: true,
    elevatorPitch: 'پوشه مخفی و جادویی وردپرس در wp-content/mu-plugins/ که کدهای داخل آن قبل از تمام افزونه‌ها لود می‌شوند، هرگز با تغییر قالب پاک نمی‌شوند و هیچ ادمینی نمی‌تواند تصادفاً آن‌ها را غیرفعال کند!',
    beginnerTrap: 'ریختن تمام کدهای سفارشی در فایل functions.php قالب؛ که با یک آپدیت یا تغییر قالب توسط کارفرما تمام زحمات شما در یک لحظه دود می‌شود!',
    analogy: 'مثل ستون‌های بتنی فونداسیون ساختمان است؛ شما می‌توانید رنگ دیوارها (قالب) را عوض کنید، اما ستون‌ها دست‌نخورده و استوار سر جایشان می‌مانند.',
    humanQuestion: 'کجا کدهای PHP سفارشم را بگذارم که حتی با پاک شدن قالب سایت هم کار کنند و از بین نروند؟',
    realPain: 'کارفرما قالب سایت را عوض می‌کند یا دکمه آپدیت را می‌زند؛ ناگهان تمام قابلیت‌های اختصاصی، فرم‌ها و وب‌سرویس‌هایی که ساختی پاک می‌شوند و سایت می‌خوابد!',
    commonAiError: {
      errorSnippet: 'Custom logic disappeared after theme switch / update',
      explanationFa: 'هوش مصنوعی کدها را در functions.php گذاشته بود و با تغییر قالب همه چیز پاک شده!'
    },
    freelanceTip: 'به کارفرما بگو قابلیت‌های کلیدی بیزنس او را در mu-plugins قرار داده‌ای تا هیچ ادمین یا طراح دیگری نتواند کدهای حیاتی سایت را غیرفعال یا حذف کند.',
    asciiDiagram: `[چرخه لود وردپرس]
       │
       ▼
[۱. بارگذاری خودکار فایلهای wp-content/mu-plugins/] ──> 🛡️ پایدار و غیرقابل حذف
       │
       ▼
[۲. بارگذاری افزونه‌های عادی]
       │
       ▼
[۳. بارگذاری functions.php قالب] (با آپدیت قالب ممکنه پاک بشه ⚠️)`,
    injectionTarget: 'مسیر /wp-content/mu-plugins/hs-features.php',
    universalPrompt: `[ROLE]: Senior WordPress Core Architect.
[CONTEXT]: All custom business logic must be encapsulated inside a single file in "wp-content/mu-plugins/hs-core-system.php".
[TASK]: Implement the required hook logic for [FEATURE NAME].
[NEGATIVE CONSTRAINTS]:
- Do NOT place this code inside functions.php.
- Wrap all functions in "if (!function_exists('...'))".
- Use safe hooks (plugins_loaded or init).
[OUTPUT]: Production-ready standalone mu-plugin file.`,
    agentsMdRule: `# قانون پوشه mu-plugins در AGENTS.md:
تمامی منطق‌های حیاتی، اندپوینت‌های REST اختصاصی و قابلیت‌های بیزنس مشتری باید حتماً در مسیر wp-content/mu-plugins/ ایجاد شوند تا با تغییر یا آپدیت پوسته حذف نشوند.`,
    cursorPrompt: `Generate this feature as a standalone mu-plugin in @wp-content/mu-plugins/hs-feature.php with proper namespace checks.`,
    claudePrompt: `Package this logic strictly as a Must-Use Plugin (mu-plugin). Explain why this protects the client's business logic from theme updates.`,
    debugPrompt: `کدی که نوشتی در فایل قالب قرار گرفته است. آن را به یک افزونه مستقل mu-plugins با ساختار امنیتی استاندارد تبدیل کن.`,
    howToTest: {
      steps: [
        'فایل خود را در پوشه wp-content/mu-plugins/ قرار دهید.',
        'به بخش «افزونه‌ها» در پیشخوان وردپرس بروید؛ تب جدیدی به نام «ضروری» (Must-Use) ظاهر می‌شود.',
        'قالب فعال سایت را عوض کنید؛ مشاهده می‌کنید که قابلیت شما همچنان بدون هیچ نقصی فعال است.'
      ],
      expectedResult: 'فعالیت مداوم و بدون وابستگی به قالب.',
      redFlags: ['امکان غیرفعال کردن افزونه توسط دکمه Deactivate در پیشخوان']
    },
    shortDefinition: 'پوشه‌ای در وردپرس برای افزونه‌های همیشه فعال که توسط هسته به صورت خودکار اجرا شده و قابلیت غیرفعال‌سازی دستی ندارند.',
    deepExplanation: 'افزونه‌های ضروری (Must-Use Plugins) امن‌ترین روش برای پیاده‌سازی لاجیک‌های سازمانی و کدهای سفارشی در وردپرس هستند و چرخه عمر مستقل از قالب دارند.',
    vibeCodingImpact: 'وایب‌کدر حرفه‌ای هرگز کدهای اختصاصی بیزنس را در قالب رها نمی‌کند؛ همه چیز در mu-plugins سازمان‌دهی می‌شود.',
    goldenPrompt: 'این قابلیت را در قالب یک فایل افزونه مستقل در پوشه mu-plugins بنویس تا با تغییر پوسته از بین نرود.',
    codeSnippet: {
      language: 'php',
      description: 'هدر استاندارد یک افزونه ضروری در پوشه mu-plugins',
      runContext: 'wp-content/mu-plugins/hs-banner.php',
      code: "<?php\n/**\n * Plugin Name: HS Enterprise Core Logic\n * Description: ماژول‌های حیاتی بیزنس با لود در لایه mu-plugins\n * Version: 1.0.0\n */\nif ( ! defined( 'ABSPATH' ) ) exit;\n// کدهای شما با خیال آسوده در اینجا قرار می‌گیرند"
    },
    prerequisiteTermIds: ['child-theme'],
    relatedTermIds: ['child-theme', 'action-hooks'],
    seoKeywords: ['mu-plugins', 'must use plugins', 'افزونه های ضروری وردپرس', 'کدهای پایدار وردپرس']
  },
  {
    id: 'wp-cron-scheduler',
    termEn: 'WP-Cron & Task Scheduling',
    termFa: 'زمان‌بندی و وظایف خودکار پس‌زمینه (WP-Cron)',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'دابلیو-پی کران اِسکجولر',
    tags: ['cron', 'automation', 'background-tasks', 'performance'],
    sequenceOrder: 27,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    elevatorPitch: 'سیستم ساعت کوکی وردپرس برای اجرای اتوماتیک کارهای سنگین (مثل ارسال ایمیل‌های دوره‌ای، به‌روزرسانی قیمت‌ها، و پاکسازی دیتابیس) در نیمه‌شب بدون اینکه سرعت بازدید کاربران کند شود.',
    beginnerTrap: 'اجرای کارهای سنگین (مثل همگام‌سازی ۱۰۰۰ محصول) مستقیماً هنگام باز کردن صفحه توسط کاربر؛ که باعث لود ۱۰ ثانیه‌ای و پرش بازدیدکننده می‌شود!',
    analogy: 'مثل نظافتچی شبانه فروشگاه است؛ وقتی مشتری‌ها رفتند و فروشگاه بسته شد، او می‌آید و کارها را در سکوت انجام می‌دهد.',
    humanQuestion: 'چطور کارهای سنگین را بدون کند شدن سرعت سایت به صورت خودکار در زمان مشخص اجرا کنم؟',
    realPain: 'اگر یک کرون‌جاب خراب بسازی، با هر بازدید از سایت، وردپرس دوباره آن کار سنگین را اجرا می‌کند و مصرف CPU سرور به ۱۰۰٪ می‌رسد و هاست قفل می‌شود!',
    commonAiError: {
      errorSnippet: 'Cron task ran repeatedly on every request / wp_schedule_event loop',
      explanationFa: 'هوش مصنوعی فراموش کرده بررسی کند آیا تسک قبلاً ثبت شده یا نه، و با هر لود یک کرون جدید ساخته!'
    },
    freelanceTip: 'با غیرفعال‌سازی WP-Cron مجازی و اتصال آن به Crontab واقعی لینوکس، سرعت سایت کارفرما تا ۳۰ درصد بالاتر می‌رود.',
    asciiDiagram: `[ثبت وظیفه با wp_schedule_event] ──> آیا قبلاً ثبت شده؟ (wp_next_scheduled)
                                            ├── بله ──> دست نزن ✓
                                            └── خیر ──> زمان‌بندی کن برای نیمه‌شب ⏰`,
    injectionTarget: 'فایل mu-plugins برای ثبت زمان‌بندی و هوک بازگشتی',
    universalPrompt: `[ROLE]: Senior WordPress Systems Engineer.
[TASK]: Schedule a recurring daily cron task to prune old transients using "wp_schedule_event".
[NEGATIVE CONSTRAINTS]:
- Always check "!wp_next_scheduled()" before scheduling to avoid duplicate cron loops.
- Do NOT perform intensive queries inside user-facing hooks.
[OUTPUT]: Safe, self-registering cron hook.`,
    agentsMdRule: `# زمان‌بندی تسک‌ها در AGENTS.md:
قبل از اجرای هرگونه wp_schedule_event، حتماً بررسی وجود با wp_next_scheduled الزامی است تا از حلقه‌های تکراری خطرناک جلوگیری شود.`,
    cursorPrompt: `Write a robust WP-Cron task to sync external inventory every hour, checking for prior registration first.`,
    claudePrompt: `Implement a background cleanup cron in WordPress. Include the custom schedule interval definition via cron_schedules filter.`,
    debugPrompt: `این تسک با هر رفرش صفحه تکرار می‌شود. شرط wp_next_scheduled را به کد اضافه کن تا فقط یک بار زمان‌بندی گردد.`,
    howToTest: {
      steps: [
        'کد ثبت کرون را در سایت تست کنید.',
        'افزونه رایگان WP Crontrol را نصب کنید و لیست تسک‌های زمان‌بندی‌شده را ببینید.',
        'روی Run Now کلیک کنید و فایل debug.log را چک کنید تا اجرای صحیح را تایید نمایید.'
      ],
      expectedResult: 'اجرای دقیق در فواصل زمانی مشخص بدون تکرار بی‌رویه.',
      redFlags: ['تکثیر ده‌ها تسک هم‌نام در لیست کرون‌ها']
    },
    shortDefinition: 'مکانیزم زمان‌بندی وظایف دوره‌ای در وردپرس برای انجام خودکار عملیات در پس‌زمینه.',
    deepExplanation: 'کرون وردپرس به صورت پیش‌فرض با ورود کاربر تریگر می‌شود (Pseudo-Cron). در پروژه‌های حرفه‌ای با DISABLE_WP_CRON و اتصال به کرون سیستم‌عامل، پرفورمنس به حداکثر می‌رسد.',
    vibeCodingImpact: 'انتقال کارهای سنگین به پس‌زمینه و حفظ تجربه کاربری روان با سرعت لود لحظه‌ای.',
    goldenPrompt: 'یک تسک زمان‌بندی روزانه با WP-Cron بنویس که فایل‌های کش منقضی‌شده را پاکسازی کند. حتماً شرط جلوگیری از تکرار را بگذار.',
    codeSnippet: {
      language: 'php',
      description: 'الگوی استاندارد ثبت تسک زمان‌بندی‌شده در وردپرس',
      runContext: 'cron-task.php',
      code: "if ( ! wp_next_scheduled( 'hs_daily_cleanup_event' ) ) {\n    wp_schedule_event( time(), 'daily', 'hs_daily_cleanup_event' );\n}\nadd_action( 'hs_daily_cleanup_event', function() {\n    // اجرای عملیات سنگین در آرامش شبانه\n});"
    },
    prerequisiteTermIds: ['action-hooks'],
    relatedTermIds: ['action-hooks', 'transients-api'],
    seoKeywords: ['wp-cron', 'کرون وردپرس', 'زمان بندی وظایف در وردپرس', 'wp_schedule_event']
  },
  {
    id: 'wp-options-autoload',
    termEn: 'wp_options & Autoload Optimization',
    termFa: 'بهینه‌سازی دیتای سراسری جدول آپشن‌ها (Autoload)',
    category: 'wp-core',
    level: 'advanced',
    phonetic: 'آپشنز اند اتولود',
    tags: ['database', 'performance', 'wp_options', 'autoload-size'],
    sequenceOrder: 28,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    elevatorPitch: 'کوله پشتی وردپرس! تمام اطلاعاتی که با تگ autoload=yes ذخیره می‌شوند، در هر بار باز شدن هر صفحه از سایت مستقیماً در حافظه رم لود می‌شوند؛ اگر این کوله‌پشتی سنگین شود، کل سایت به گل می‌نشیند!',
    beginnerTrap: 'استفاده از add_option بدون مشخص کردن آرگومان چهارم (autoload = no)؛ وردپرس به صورت پیش‌فرض تمام داده‌ها را autoload می‌کند و حجم دیتابیس در هر ریکوئست سر به فلک می‌کشد!',
    analogy: 'مثل این است که برای رفتن به نانوایی سر کوچه، چادر مسافرتی و جعبه ابزارت را هم توی کوله‌پشتی بگذاری و با خودت حمل کنی!',
    humanQuestion: 'چرا سایتم با اینکه بازدید کمی دارد، مدام خطای Memory Exhausted می‌دهد؟',
    realPain: 'اگر حجم دیتای autoload از ۱ مگابایت بیشتر شود، زمان پاسخ اولیه سرور (TTFB) به بالای ۳ ثانیه می‌رسد و لایت‌هاوس قرمز می‌شود!',
    commonAiError: {
      errorSnippet: 'Option added with default autoload=yes, bloating server RAM',
      explanationFa: 'هوش مصنوعی داده‌های چند مگابایتی را به اشتباه به صورت اتولود ذخیره کرده و رم سرور را ترکانده!'
    },
    freelanceTip: 'با پاکسازی دیتای اتولود افزونه‌های حذف‌شده در جدول wp_options، زمان TTFB سایت کارفرما را از ۲ ثانیه به ۳۰۰ میلی‌ثانیه می‌رسانی.',
    asciiDiagram: `[هر درخواست کاربر به هر صفحه سایت]
                 │
                 ▼
[سلکت خودکار کل رکوردهای autoload='yes' از جدول wp_options]
  ├── زیر ۵۰۰ کیلوبایت ──> ⚡ سرعت موشکی
  └── بالای ۲ مگابایت   ──> 🐌 کرش سرور و خطای ۵۰۴ Timeout`,
    injectionTarget: 'هنگام ذخیره تنظیمات سنگین یا دیتای وب‌سرویس‌ها با update_option',
    universalPrompt: `[ROLE]: WordPress Database Performance Specialist.
[TASK]: Save a large configuration array to "wp_options".
[NEGATIVE CONSTRAINTS]:
- Explicitly set "autoload = 'no'" (or false) in add_option() to avoid bloating server memory on global page requests.
- Never store session payloads or temporary cache in options; use Transients instead.
[OUTPUT]: Memory-conscious option storage.`,
    agentsMdRule: `# قانون Autoload در AGENTS.md:
داده‌های ذخیره‌شده در جدول wp_options که در تمامی صفحات مورد نیاز نیستند، باید الزاماً با مقدار autoload='no' ایجاد شوند تا از مصرف بیهوده حافظه رم جلوگیری گردد.`,
    cursorPrompt: `Store this large plugin config in wp_options ensuring autoload is strictly disabled.`,
    claudePrompt: `Review option storage in this snippet. Ensure no transient-like payloads pollute the autoloaded options footprint.`,
    debugPrompt: `حجم دیتای اتولود این آپشن بیش از حد مجاز است. کوئری تغییر وضعیت autoload آن به no را بنویس.`,
    howToTest: {
      steps: [
        'افزونه Query Monitor را نصب کنید و تب Database Queries را باز نمایید.',
        'کوئری SELECT ... WHERE autoload = \'yes\' را پیدا کنید.',
        'حجم کل دیتای بارگذاری شده را بررسی کنید؛ باید حتماً زیر ۱ مگابایت باشد.'
      ],
      expectedResult: 'حجم اتولود بهینه و لود سریع تمام صفحات سایت.',
      redFlags: ['حجم اتولود بالای ۲ مگابایت در پیشخوان']
    },
    shortDefinition: 'سازوکار لود خودکار تنظیمات جدول wp_options در تمامی درخواست‌های سایت و کنترل حجم آن برای پیشگیری از کندی سرور.',
    deepExplanation: 'هر بار که وردپرس لود می‌شود، رکوردهای اتولود در یک کوئری خوانده می‌شوند. مهار این حجم مهم‌ترین فاکتور کاهش TTFB در سایت‌های بزرگ است.',
    vibeCodingImpact: 'جلوگیری از خطاهای پر شدن حافظه رم و تضمین سرعت زیر ۱ ثانیه برای لود صفحات.',
    goldenPrompt: 'تنظیمات این ماژول را در wp_options ذخیره کن، اما حتماً پارامتر autoload را روی no بگذار تا در همه صفحات لود نشود.',
    codeSnippet: {
      language: 'php',
      description: 'ذخیره اصولی داده سنگین با غیرفعال کردن Autoload',
      runContext: 'options-handler.php',
      code: "// ذخیره داده حجیم بدون بارگذاری در تمام صفحات سایت\nadd_option( 'hs_heavy_plugin_settings', $large_data, '', 'no' );"
    },
    prerequisiteTermIds: ['wpdb-class'],
    relatedTermIds: ['wpdb-class', 'transients-api'],
    seoKeywords: ['autoload وردپرس', 'wp_options autoload', 'کاهش ttfb وردپرس', 'بهینه سازی دیتابیس wp_options']
  },
  {
    id: 'wp-error-handling',
    termEn: 'WP_Error Class & Defensive Coding',
    termFa: 'مدیریت استاندارد خطاها با کلاس WP_Error',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'دابلیو-پی ارور کلس',
    tags: ['error-handling', 'defensive-programming', 'wp_error', 'php-standards'],
    sequenceOrder: 29,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    elevatorPitch: 'کیسه هوای وردپرس! کلاسی استاندارد برای بسته‌بندی پیام‌های خطا و ارسال محترمانه آن‌ها به کاربر، به جای اینکه سایت با خطای ۵۰۰ یا صفحه سفید کرش کند.',
    beginnerTrap: 'استفاده از die() یا exit() در وسط توابع پردازش داده؛ که خروجی سایت را ناگهان قطع کرده و صفحه ناقص و وحشتناک به کاربر نشان می‌دهد!',
    analogy: 'مثل چراغ چک خودرو است؛ به جای اینکه ماشین وسط بزرگراه ناگهان خاموش شود، چراغ زرد روشن می‌شود و به راننده می‌گوید چه مشکلی پیش آمده است.',
    humanQuestion: 'چطور کدهایی بنویسم که اگر ورودی اشتباه بود، سایت کرش نکند و پیام مودبانه بدهد؟',
    realPain: 'وقتی هوش مصنوعی کدی بدون WP_Error می‌نویسد، با اولین ورودی نامعتبر کاربر، یک استک‌تریس زشت و خطای ۵۰۰ روی سایت مشتری نمایش داده می‌شود!',
    commonAiError: {
      errorSnippet: 'Fatal error: Uncaught Exception / used die() inside REST callback',
      explanationFa: 'هوش مصنوعی به جای برگرداندن WP_Error، تابع die اجرا کرده و فرانت‌اند ارور ۵۰۰ خورده!'
    },
    freelanceTip: 'کدهای دارای کلاس WP_Error به راحتی به REST API وصل می‌شوند و اپلیکیشن موبایل یا فرانت نکست‌جی‌اس پیام خطای شفاف به فارسی دریافت می‌کند.',
    asciiDiagram: `[دریافت داده از کاربر]
           │
           ▼
     آیا داده معتبر است؟
    ├── بله ──> ادامه پردازش و خروجی موفقیت
    └── خیر ──> return new WP_Error( 'hs_invalid_phone', 'شماره موبایل اشتباه است.' )`,
    injectionTarget: 'توابع اعتبارسنجی فرم‌ها، وب‌سرویس‌ها و کنترلرهای ماژول‌ها',
    universalPrompt: `[ROLE]: Senior Defensive WordPress Developer.
[TASK]: Validate an incoming user payment payload.
[NEGATIVE CONSTRAINTS]:
- Never use die() or exit().
- Return a "new WP_Error(code, message, data)" on any validation failure.
- Always check "is_wp_error($result)" before proceeding with business logic.
[OUTPUT]: Production-grade defensive error handling.`,
    agentsMdRule: `# مدیریت خطا در AGENTS.md:
هیچ تابعی نباید از die() یا exit() استفاده کند. تمامی خطاهای بیزنس و اعتبارسنجی باید در قالب شیء رسمی WP_Error بازگردانده شوند.`,
    cursorPrompt: `Refactor this validation routine to return structured WP_Error objects with status codes.`,
    claudePrompt: `Ensure full defensive coding using is_wp_error() checks after remote HTTP and database operations.`,
    debugPrompt: `این کد با ورودی خالی کرش می‌کند. یک بررسی WP_Error دفاعی به ابتدای تابع اضافه کن.`,
    howToTest: {
      steps: [
        'یک ورودی نامعتبر (مثلاً ایمیل اشتباه) به تابع بفرستید.',
        'بررسی کنید که آیا خروجی با تابع is_wp_error() قابل شناسایی است یا خیر.',
        'آیا پیام خطای تمیز فارسی به کاربر نمایش داده شد بدون اینکه صفحه سفید شود؟'
      ],
      expectedResult: 'مدیریت متمدنانه خطا بدون خطای ۵۰۰ یا کرش سرور.',
      redFlags: ['استفاده از exit() یا echo ارور وسط منطق بک‌اند']
    },
    shortDefinition: 'کلاس استاندارد هسته وردپرس برای مدیریت، ردیابی و بازگرداندن خطاهای منطقی بدون توقف اجرای سیستم.',
    deepExplanation: 'کلاس WP_Error امکان ذخیره کدهای خطای یکتا و دیتای خطا را فراهم کرده و هسته وردپرس به صورت پیش‌فرض در تمام توابع رسمی از آن استفاده می‌کند.',
    vibeCodingImpact: 'خلق سیستم‌های مقاوم و دفاعی که در برابر ورودی‌های نامعتبر کاربران، باوقار رفتار می‌کنند.',
    goldenPrompt: 'یک تابع ثبت سفارش بنویس که در صورت نبود موجودی، به جای کرش یک آبجکت استاندارد WP_Error با پیام واضح فارسی برگرداند.',
    codeSnippet: {
      language: 'php',
      description: 'الگوی تولید و بررسی شیء استاندارد WP_Error',
      runContext: 'validator.php',
      code: "function hs_verify_coupon( $code ) {\n    if ( empty( $code ) ) {\n        return new WP_Error( 'empty_coupon', 'کد تخفیف نمی‌تواند خالی باشد.', ['status' => 400] );\n    }\n    return true;\n}\n\n$check = hs_verify_coupon( '' );\nif ( is_wp_error( $check ) ) {\n    echo esc_html( $check->get_error_message() );\n}"
    },
    prerequisiteTermIds: ['action-hooks'],
    relatedTermIds: ['rest-api-endpoints', 'action-hooks'],
    seoKeywords: ['wp_error', 'کلاس wp_error', 'مدیریت خطا در وردپرس', 'کدنویسی دفاعی در وردپرس']
  },
  {
    id: 'shortcodes-vs-blocks',
    termEn: 'Shortcodes vs Modern Gutenberg Blocks',
    termFa: 'شورت‌کدها در برابر بلاک‌های نوین گوتنبرگ',
    category: 'wp-core',
    level: 'beginner',
    phonetic: 'شورت-کدز ورسز بلاکس',
    tags: ['shortcode', 'gutenberg', 'blocks', 'modernization'],
    sequenceOrder: 30,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'designer', 'beginner'],
    isNoCodeFriendly: true,
    elevatorPitch: 'شورت‌کدها ([my_form]) مثل پیامک‌های متنی قدیمی هستند؛ کار می‌کنند اما پیش‌نمایش ندارند. در مقابل، بلاک‌های گوتنبرگ مثل برنامه‌های لمسی هستند که کاربر درجا تغییرات را روی صفحه می‌بیند.',
    beginnerTrap: 'استفاده از شورت‌کد برای ساخت صفحات لندینگ پیچیده؛ کارفرما در پیشخوان فقط یک کد عجیب داخل براکت می‌بیند و نمی‌تواند استایل‌ها را بصری ویرایش کند!',
    analogy: 'شورت‌کد مثل کارت‌پستال متنی است؛ بلاک گوتنبرگ مثل تماس تصویری زنده با کیفیت 4K است!',
    humanQuestion: 'کجا باید از شورت‌کد استفاده کنم و کجا باید بلاک اختصاصی بسازم؟',
    realPain: 'اگر برای فیچرهای تعاملی شورت‌کد بسازی، کاربر نمی‌تواند رنگ‌ها و متن‌ها را به راحتی عوض کند و مدام برای کوچک‌ترین تغییر با شما تماس می‌گیرد.',
    commonAiError: {
      errorSnippet: 'Used add_shortcode for full page layout instead of Block API',
      explanationFa: 'هوش مصنوعی برای تنبلی به جای بلاک مدرن، شورت‌کد قدیمی نوشته!'
    },
    freelanceTip: 'وقتی به کارفرما بلاک بومی با سایدبار تنظیمات زنده تحویل می‌دهی، ارزش پروژه شما ۳ برابر یک شورت‌کد خشک قدیمی قیمت‌گذاری می‌شود.',
    asciiDiagram: `[روش سنتی] ──> add_shortcode() ──> [hs_button] در پیشخوان بدون پیش‌نمایش
[روش مدرن]  ──> register_block_type() ──> ویرایش بصری زنده با تنظیمات طلایی در گوتنبرگ`,
    injectionTarget: 'فایل functions.php یا پوشه اختصاصی بلاک‌ها در بلوک‌های بومی',
    universalPrompt: `[ROLE]: Modern WordPress Full-Site Editing Specialist.
[TASK]: When creating content modules, prefer Native Gutenberg Blocks (Block API v3) with block.json. Only fallback to add_shortcode() if legacy compatibility is strictly requested.
[OUTPUT]: Modern block architecture with clean attributes.`,
    agentsMdRule: `# اولویت بلاک‌های مدرن در AGENTS.md:
برای المان‌های بصری جدید، اولویت مطلق با بلاک‌های استاندارد گوتنبرگ است. شورت‌کدها صرفاً در صورت نیاز به تزریق سریع درون متون مقالات مجاز هستند.`,
    cursorPrompt: `Convert this legacy shortcode into a clean Block Pattern or modern Gutenberg block.`,
    claudePrompt: `Explain the migration path from this add_shortcode implementation to a server-side rendered Gutenberg block.`,
    debugPrompt: `شورت‌کد خروجی را در بالای صفحه می‌اندازد چون از echo استفاده شده. با ob_start() و ob_get_clean() آن را تصحیح کن.`,
    howToTest: {
      steps: [
        'شورت‌کد را در یک نوشته پیست کنید.',
        'مطمئن شوید خروجی در محل قرارگیری تگ چاپ می‌شود و به بالای سایت نمی‌پرد (رعایت return به جای echo).',
        'سپس معادل بلاک آن را در ویرایشگر گوتنبرگ بررسی کنید.'
      ],
      expectedResult: 'رندر دقیق بدون شکستن صفحه و تداخل با محتوای اطراف.',
      redFlags: ['چاپ مستقیم با echo درون تابع شورت‌کد']
    },
    shortDefinition: 'مقایسه سازوکار سنتی شورت‌کدها با معماری نوین بلاک‌های گوتنبرگ و انتخاب الگوی صحیح برای پروژه.',
    deepExplanation: 'شورت‌کدها ابزاری سریع برای تزریق محتوا هستند اما فاقد ادیتور بصری‌اند. بلاک‌های گوتنبرگ استاندارد آینده وردپرس برای طراحی بصری و FSE هستند.',
    vibeCodingImpact: 'توانایی انتخاب ابزار مناسب: شورت‌کد برای ویجت‌های سریع، بلاک برای تجربه کاربری خیره‌کننده مشتری.',
    goldenPrompt: 'یک تابع شورت‌کد بنویس که بافر خروجی را با ob_start مدیریت کرده و حتماً با return تحویل دهد نه با echo.',
    codeSnippet: {
      language: 'php',
      description: 'الگوی صحیح نوشتن شورت‌کد با بافر خروجی',
      runContext: 'shortcode.php',
      code: "add_shortcode( 'hs_cta_button', function( $atts ) {\n    $args = shortcode_atts( ['text' => 'ثبت‌نام', 'url' => '#'], $atts );\n    ob_start(); ?>\n    <a href=\"<?php echo esc_url( $args['url'] ); ?>\" class=\"hs-gold-btn\">\n        <?php echo esc_html( $args['text'] ); ?>\n    </a>\n    <?php return ob_get_clean();\n});"
    },
    prerequisiteTermIds: ['theme-hierarchy'],
    relatedTermIds: ['gutenberg-blocks', 'theme-json'],
    seoKeywords: ['شورت کد وردپرس', 'شورتکد یا بلاک', 'add_shortcode', 'بلاک گوتنبرگ']
  },
  {
    id: 'plugin-lifecycle-cleanup',
    termEn: 'Plugin Lifecycle & Uninstall Cleanup',
    termFa: 'چرخه عمر افزونه و هوک‌های پاکسازی دیتابیس (uninstall.php)',
    category: 'wp-core',
    level: 'intermediate',
    phonetic: 'پلاگین لایف-سایکل اند آن-اینستال',
    tags: ['plugin-lifecycle', 'uninstall', 'cleanup', 'clean-code'],
    sequenceOrder: 31,
    learningStation: 'station-3',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    elevatorPitch: 'ادب مهندسی افزونه! وقتی کارفرما افزونه شما را حذف می‌کند، تمام جدول‌ها و آپشن‌های اضافه را از دیتابیس پاک کند تا زباله الکترونیکی روی هاست باقی نماند.',
    beginnerTrap: 'پاک کردن دیتای دیتابیس هنگام Deactivate شدن افزونه! با غیرفعال‌سازی موقت نباید داده‌ها پاک شوند، بلکه فقط هنگام Delete نهایی در فایل uninstall.php باید پاکسازی انجام شود.',
    analogy: 'مثل مستأجری است که هنگام تخلیه نهایی خانه، تمام زباله‌ها را با خود بیرون می‌برد و خانه را تمیز تحویل می‌دهد، نه اینکه با هر بار بیرون رفتن از خانه وسایل را دور بریزد!',
    humanQuestion: 'چطور افزونه‌ای بسازم که اگر مشتری آن را پاک کرد، دیتابیس را شلوغ و کند رها نکند؟',
    realPain: 'بیشتر از ۸۰ درصد افزونه‌های غیرحرفه‌ای بعد از حذف، ده‌ها مگابایت دیتای زباله در جدول wp_options جا می‌گذارند که تا ابد سرعت سایت را کم می‌کند.',
    commonAiError: {
      errorSnippet: 'Deleted database tables on register_deactivation_hook instead of uninstall.php',
      explanationFa: 'هوش مصنوعی داده‌های مشتری را با یک خاموش و روشن کردن ساده افزونه نابود کرده است!'
    },
    freelanceTip: 'به کارفرما بگو افزونه اختصاصی شما دارای پاک‌کننده هوشمند است و در صورت عدم نیاز، بدون کوچک‌ترین اثری از دیتابیس محو می‌شود.',
    asciiDiagram: `[فعال‌سازی: register_activation_hook] ──> ساخت جدول و آپشن‌ها
[غیرفعال‌سازی: register_deactivation_hook] ──> توقف کرون‌ها (داده‌ها حفظ شوند!)
[حذف نهایی: uninstall.php] ──> 🧹 پاکسازی کامل دیتابیس`,
    injectionTarget: 'فایل مجزای /uninstall.php در ریشه پوشه افزونه',
    universalPrompt: `[ROLE]: Senior WordPress Plugin Architect.
[TASK]: Create a secure "uninstall.php" file.
[NEGATIVE CONSTRAINTS]:
- Check "defined('WP_UNINSTALL_PLUGIN')" at the very top.
- Do NOT delete user data on deactivation. Only delete on final uninstall.
- Clean up custom tables using $wpdb and drop transients.
[OUTPUT]: Safe uninstall routine.`,
    agentsMdRule: `# چرخه عمر افزونه در AGENTS.md:
حذف جداول سفارشی و آپشن‌ها فقط و فقط در فایل uninstall.php مجاز است و در هوک register_deactivation_hook اکیداً ممنوع می‌باشد.`,
    cursorPrompt: `Write a clean uninstall.php file that removes the hs_smart_banner options and custom tables safely.`,
    claudePrompt: `Review this plugin lifecycle logic to ensure it complies with WordPress.org guidelines for data cleanup.`,
    debugPrompt: `بررسی WP_UNINSTALL_PLUGIN در ابتدای فایل جا افتاده است. این خط امنیتی حیاتی را اضافه کن.`,
    howToTest: {
      steps: [
        'افزونه را نصب و فعال کنید؛ دیتای تستی در wp_options ذخیره شود.',
        'افزونه را غیرفعال کنید؛ مطمئن شوید داده‌ها هنوز در دیتابیس هستند.',
        'افزونه را پاک (Delete) کنید؛ مطمئن شوید رکوردها کاملاً از جدول حذف شده‌اند.'
      ],
      expectedResult: 'دیتابیس کاملاً تمیز پس از حذف افزونه.',
      redFlags: ['پاک شدن داده‌ها با غیرفعال‌سازی موقت افزونه']
    },
    shortDefinition: 'مدیریت استاندارد ۳ مرحله فعال‌سازی، غیرفعال‌سازی و حذف نهایی افزونه همراه با نظافت دیتابیس.',
    deepExplanation: 'استفاده از فایل uninstall.php روش رسمی و استاندارد مخزن وردپرس است که بدون لود شدن خود افزونه، عملیات پاکسازی را انجام می‌دهد.',
    vibeCodingImpact: 'ارائه محصولات حرفه‌ای و پاکیزه که اعتبار تیم فنی شما را تضمین می‌کنند.',
    goldenPrompt: 'یک فایل استاندارد uninstall.php بنویس که بررسی امنیتی WP_UNINSTALL_PLUGIN را داشته باشد و آپشن‌های این پلاگین را پاک کند.',
    codeSnippet: {
      language: 'php',
      description: 'ساختار استاندارد فایل uninstall.php در افزونه وردپرس',
      runContext: 'uninstall.php',
      code: "<?php\n// اگر از طریق خود وردپرس فراخوانی نشده باشد، خارج شو\nif ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {\n    exit;\n}\n\ndelete_option( 'hs_smart_banner_settings' );\ndelete_transient( 'hs_cached_banner_data' );"
    },
    prerequisiteTermIds: ['must-use-plugins'],
    relatedTermIds: ['must-use-plugins', 'wp-options-autoload'],
    seoKeywords: ['uninstall.php', 'چرخه عمر افزونه وردپرس', 'پاکسازی دیتابیس افزونه', 'register_activation_hook']
  }
];
