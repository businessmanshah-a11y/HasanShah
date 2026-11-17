import { EncyclopediaTerm } from './types';

export const vibeAiTerms: EncyclopediaTerm[] = [
  {
    id: 'context-window',
    termEn: 'Context Window',
    termFa: 'پنجره بافت / حافظه فعال مدل هوش مصنوعی',
    category: 'vibe-ai',
    level: 'beginner',
    phonetic: 'کانتکست ویندو',
    tags: ['ai-core', 'cursor', 'claude', 'token-budget'],
    shortDefinition: 'حداکثر حجم متن (توکن) که یک مدل هوش مصنوعی می‌تواند در یک لحظه به عنوان حافظه ورودی و خروجی نگه دارد.',
    deepExplanation: 'در پروژه‌های وردپرس با صدها فایل PHP، استایل‌های تیل‌ویند و اسکریپت‌های جاوااسکریپت، اگر کل پروژه را بدون فیلتر به مدل پاس دهید، پنجره بافت پر شده و مدل کدهای ابتدایی یا دستورات ریشه‌ای را فراموش می‌کند. مدیریت بافت به معنای انتخاب دقیق فایل‌های مرتبط است.',
    vibeCodingImpact: 'اگر مفهوم پنجره بافت را ندانید، تمام فایل‌های تمپلیت را با @ به Cursor اضافه می‌کنید. نتیجه این کار این است که هوش مصنوعی خروجی‌های نصفه‌کاره می‌دهد، توابع را با اسامی اشتباه بازنویسی می‌کند و دقتش به شدت افت می‌کند.',
    goldenPrompt: 'من در حال توسعه قالب اختصاصی وردپرس هستم. فایل‌های ضروری من فقط شامل [فایل‌های مشخص مثلاً functions.php و single.php] است. فقط و فقط با ارجاع به منطق موجود در این دو فایل پاسخ بده و از ارائه فرضیات برای سایر فایل‌های پروژه خودداری کن. تغییرات را محدود به همین بخش نگه دار.',
    codeSnippet: {
      language: 'json',
      description: 'نحوه نادیده گرفتن فایل‌های سنگین وردپرس در Cursor برای محافظت از حافظه بافت',
      runContext: '.cursorignore',
      code: `wp-admin/\nwp-includes/\nnode_modules/\n*.sql\n*.tar.gz\nvendor/`
    },
    relatedTermIds: ['cursorrules-file', 'composer-mode', 'token-budget'],
    seoKeywords: ['کانتکست ویندو', 'context window', 'حافظه هوش مصنوعی', 'توکن در پرامپت']
  },
  {
    id: 'cursorrules-file',
    termEn: '.cursorrules Configuration',
    termFa: 'فایل قوانین اختصاصی هوش مصنوعی در ادیتور',
    category: 'vibe-ai',
    level: 'intermediate',
    phonetic: 'کرسر رولز',
    tags: ['cursor', 'system-prompt', 'standards', 'automation'],
    shortDefinition: 'یک فایل راهنما در ریشه پروژه که قوانین معماری، استانداردهای کدنویسی و خطوط قرمز شما را در هر پرامپت به هوش مصنوعی تحمیل می‌کند.',
    deepExplanation: 'با قرار دادن یک فایل با نام `.cursorrules` (یا `AGENTS.md`) در ریشه پوشه قالب یا پلاگین، ادیتور پیش از پاسخ‌گویی به هر سوال، قوانین اختصاصی شما (مانند نسخه‌ استاندارد PHP 8.2، استفاده اجباری از Tailwind v4، عدم استفاده از jQuery و رعایت توابع امنیتی Nonce) را در پرامپت سیستمی مدل تزریق می‌کند.',
    vibeCodingImpact: 'بدون این فایل، هوش مصنوعی در هر پرامپت فرض می‌کند شما یک توسعه‌دهنده مبتدی هستید و ممکن است کدهای منسوخ‌شده وردپرس ۵ را با جی‌کوئری و استایل‌های درون‌خطی به شما تحویل دهد که اصلاح دستی آن‌ها ساعت‌ها وقت می‌گیرد.',
    goldenPrompt: 'یک فایل .cursorrules جامع برای یک قالب مدرن وردپرس بنویس. قوانین الزامی: 1) عدم استفاده از جی‌کوئری و فقط JS مدرن 2) استایل‌ها با Tailwind CSS 3) تمام توابع با پیشوند hs_ 4) رعایت اجباری sanitize و esc در تمام ورودی‌ها و خروجی‌ها 5) استفاده از هوک‌های استاندارد.',
    codeSnippet: {
      language: 'bash',
      description: 'نمونه ساختار فایل قوانین برای مهار هوش مصنوعی در توسعه وردپرس',
      runContext: '.cursorrules',
      code: `# قوانین اختصاصی وایب‌کدینگ وردپرس\n- هر تابع جدید باید با پیشوند hs_ نام‌گذاری شود.\n- هیچ استایل درون‌خطی مجاز نیست؛ فقط کلاس‌های تیل‌ویند.\n- قبل از اجرای هر کوئری دیتابیس، استفاده از wpdb->prepare الزامی است.\n- برای ذخیره فرم‌ها توکن wp_create_nonce الزامی است.`
    },
    relatedTermIds: ['context-window', 'hallucination-guard', 'prd-workflow'],
    seoKeywords: ['فایل cursorrules', 'cursorrules وردپرس', 'قوانین پرامپت ادیتور', 'تنظیمات cursor']
  },
  {
    id: 'composer-mode',
    termEn: 'Composer & Agentic Mode',
    termFa: 'حالت کامپوزر و عامل مستقل کدنویسی',
    category: 'vibe-ai',
    level: 'intermediate',
    phonetic: 'کامپوزر مود',
    tags: ['cursor', 'agent', 'multi-file', 'automation'],
    shortDefinition: 'محیط اجرای دستورات چندفایلی در ادیتور هوش مصنوعی که می‌تواند به صورت همزمان چندین فایل را ساخته، ویرایش و متصل کند.',
    deepExplanation: 'برخلاف چت معمولی که فقط در یک پنجره متنی کد تولید می‌کند، Composer در ادیتورهایی مثل Cursor دسترسی مستقیم به سیستم فایل پروژه دارد. شما می‌توانید یک فیچر کامل (مثلاً ساخت یک Custom Post Type همراه با تمپلیت آرشیو و استایل‌های متناظر) را با یک فرمان پیاده‌سازی کنید.',
    vibeCodingImpact: 'اگر ندانید کامپوزر چگونه فایل‌ها را تغییر می‌دهد، ممکن است با فشردن نسنجیده دکمه "Accept All"، کدهای حیاتی قبلی در `functions.php` یا فایل‌های تمپلیت را بازنویسی و پاک کند. کنترل Diff در کامپوزر حیاتی‌ترین مهارت یک وایب‌کدر است.',
    goldenPrompt: 'با دسترسی به کامپوزر، یک پلاگین اختصاصی کوچک برای ثبت نظرات صوتی بساز. 1) فایل اصلی پلاگین با هدر استاندارد وردپرس 2) اسکریپت جاوااسکریپت برای ضبط صدا 3) روت REST API برای دریافت فایل صوتی در دایرکتوری wp-content/uploads/audio. هیچ فایل موجودی را ویرایش نکن، فقط فایل‌های جدید بساز.',
    codeSnippet: {
      language: 'bash',
      description: 'دستور باز کردن مستقیم محیط کامپوزر در ادیتور',
      runContext: 'شورتکات کیبورد',
      code: `# در مک: Cmd + I\n# در ویندوز/لینوکس: Ctrl + I`
    },
    relatedTermIds: ['context-window', 'cursorrules-file', 'diff-review'],
    seoKeywords: ['کامپوزر کرسر', 'composer cursor', 'کدنویسی چندفایلی', 'عامل هوش مصنوعی']
  },
  {
    id: 'hallucination-guard',
    termEn: 'Hallucination Guard',
    termFa: 'مهار توهم مدل در توابع وردپرس',
    category: 'vibe-ai',
    level: 'advanced',
    phonetic: 'هالوسینیشن گارد',
    tags: ['safety', 'prompt-engineering', 'debugging'],
    shortDefinition: 'مجموعه تدابیر مهندسی پرامپت برای جلوگیری از اختراع توابع غیرواقعی، هوک‌های ساختگی یا پارامترهای منسوخ‌شده توسط هوش مصنوعی.',
    deepExplanation: 'مدل‌های زبان طبیعی تمایل دارند در صورت عدم اطمینان، نام توابع را حدس بزنند؛ مثلاً تابعی مثل `wp_get_current_user_avatar_url()` که اصلاً در وردپرس وجود ندارد! با تکنیک‌های گارد توهم، مدل را محدود می‌کنید که فقط از مستندات رسمی Developer.wordpress.org کد تولید کند.',
    vibeCodingImpact: 'کدی که حاوی تابع توهمی است ممکن است ظاهراً بسیار تمیز به نظر برسد، اما به محض اجرا سایت را با خطای Fatal Error: Call to undefined function متوقف می‌کند. توسعه‌دهنده ناآگاه ساعت‌ها وقت صرف عیب‌یابی چنین خطای بی‌پایه‌ای می‌کند.',
    goldenPrompt: 'قبل از نوشتن هر تابع در این قالب، صحت امضای تابع (Function Signature) و نام هوک را صرفاً بر اساس مستندات رسمی وردپرس ۶.۵+ تایید کن. اگر تابعی در هسته وردپرس وجود ندارد، صراحتاً اعلام کن و یک تابع کمکی سفارشی در کادر جداگانه برای آن تعریف کن.',
    codeSnippet: {
      language: 'php',
      description: 'الگوی دفاعی در کدنویسی وردپرس جهت بررسی وجود توابع قبل از فراخوانی',
      runContext: 'functions.php',
      code: `if ( function_exists( 'wp_get_theme' ) ) {\n    $theme_version = wp_get_theme()->get( 'Version' );\n} else {\n    $theme_version = '1.0.0';\n}`
    },
    relatedTermIds: ['cursorrules-file', 'chain-of-thought', 'diff-review'],
    seoKeywords: ['توهم هوش مصنوعی', 'hallucination ai', 'توابع اشتباه وردپرس', 'پرامپت ضد خطا']
  },
  {
    id: 'prd-workflow',
    termEn: 'PRD-Driven Development',
    termFa: 'توسعه مبتنی بر سند مشخصات محصول',
    category: 'vibe-ai',
    level: 'intermediate',
    phonetic: 'پی آر دی ورک فلو',
    tags: ['planning', 'spec', 'software-engineering'],
    shortDefinition: 'نوشتن یک سند کامل الزامات قبل از پرامپت زدن، تا هوش مصنوعی بر اساس نقشه از پیش‌تعیین‌شده و بدون حدس و گمان کد بنویسد.',
    deepExplanation: 'در متدولوژی وایب‌کدینگ حرفه‌ای، هرگز به هوش مصنوعی نمی‌گوییم «یک فروشگاه وردپرس بساز». ابتدا یک فایل `SPEC.md` یا `PRD.md` با جزئیات انواع پست‌ها، فیلدهای مورد نیاز، متدهای دیتابیس و اعتبارسنجی‌ها ایجاد می‌کنیم و از مدل می‌خواهیم تسک‌ها را گام‌به‌گام بر اساس آن پیاده کند.',
    vibeCodingImpact: 'بدون PRD، هوش مصنوعی در هر مرحله تصمیمات متناقض می‌گیرد؛ یک بار نام فیلد قیمت را `product_price` می‌گذارد و در تمپلیت بعدی آن را `price` صدا می‌زند که منجر به باگ‌های پنهان داده می‌شود.',
    goldenPrompt: 'من می‌خواهم یک ماژول دوره‌های آموزشی در قالب وردپرس بسازم. هنوز کدی ننویس. ابتدا یک فایل PRD کوتاه شامل: 1) نام CPT و تاکسونومی‌ها 2) فیلدهای مورد نیاز در postmeta 3) هوک‌های اکشن و فیلتر لازم 4) تمپلیت‌های مورد نیاز فایل‌های PHP برای من ترسیم کن تا تایید کنم.',
    codeSnippet: {
      language: 'json',
      description: 'نمونه ساختار فایل الزامات برای تحویل به هوش مصنوعی',
      runContext: 'spec.json',
      code: `{\n  "feature": "Course Catalog",\n  "cpt": "hs_course",\n  "fields": ["duration", "instructor_id", "price"],\n  "templates": ["single-hs_course.php", "archive-hs_course.php"]\n}`
    },
    relatedTermIds: ['cursorrules-file', 'composer-mode', 'chain-of-thought'],
    seoKeywords: ['سند prd', 'مشخصات محصول برای ai', 'پرامپت نویسی حرفه‌ای', 'مهندسی پرامپت']
  },
  {
    id: 'chain-of-thought',
    termEn: 'Chain-of-Thought (CoT)',
    termFa: 'زنجیره استدلال قبل از کدنویسی',
    category: 'vibe-ai',
    level: 'advanced',
    phonetic: 'چین آو ثات',
    tags: ['reasoning', 'complex-logic', 'queries'],
    shortDefinition: 'واداشتن هوش مصنوعی به تشریح منطق قدم‌به‌قدم خود قبل از تولید کد واقعی، برای جلوگیری از خطاهای معماری در مسائل پیچیده.',
    deepExplanation: 'وقتی با کوئری‌های چندجدولی دیتابیس وردپرس یا فیلترهای تودرتو روبه‌رو هستید، مدل‌های زبانی اگر مستقیماً شروع به کدنویسی کنند معمولاً شروط منطقی (مانند `meta_query` با عملگر `AND` و `OR`) را خراب می‌کنند. وادار کردن مدل به فکر کردن پیش از نوشتن، خطاهای محاسباتی را تا ۷۰ درصد کاهش می‌دهد.',
    vibeCodingImpact: 'در تسک‌های پیچیده مثل مهاجرت داده‌های دیتابیس یا سیستم تخفیف ووکامرس، پاسخ فوری هوش مصنوعی مساوی با باگ است. استفاده از CoT کد باکیفیت و مهندسی‌شده تحویل می‌دهد.',
    goldenPrompt: 'من نیاز به یک کوئری سفارشی با WP_Query دارم که پست‌های [نوع محتوا] را بر اساس دو فیلد متای مختلف و یک تاکسونومی فیلتر کند. قبل از اینکه کد PHP بنویسی، گام‌به‌گام منطق آرایه args، نحوه ارتباط شرط‌ها و نحوه جلوگیری از کندی دیتابیس را برایم توضیح بده. بعد از تایید من کد نهایی را بنویس.',
    codeSnippet: {
      language: 'bash',
      description: 'عبارت کلیدی جادویی برای فعال‌سازی زنجیره استدلال در پرامپت',
      runContext: 'Prompt Keyword',
      code: `"Think step by step and verify database index usage before generating the query."`
    },
    relatedTermIds: ['hallucination-guard', 'prd-workflow', 'diff-review'],
    seoKeywords: ['زنجیره استدلال', 'chain of thought', 'پرامپت استدلالی', 'کاهش خطای مدل']
  }
];
