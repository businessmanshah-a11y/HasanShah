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
  }
];
