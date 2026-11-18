import { EncyclopediaTerm } from './types';

export const devopsServerTerms: EncyclopediaTerm[] = [
  {
    id: 'wp-cli',
    termEn: 'WP-CLI (WordPress Command Line)',
    termFa: 'رابط خط فرمان مدیریت و ساخت وردپرس',
    category: 'devops-server',
    level: 'intermediate',
    phonetic: 'دابلیو-پی-سی-اِل-آی (WP-CLI)',
    tags: ['cli', 'terminal', 'devops', 'automation'],
    sequenceOrder: 32,
    learningStation: 'station-4',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'beginner', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'کابین خلبان خط فرمان وردپرس؛ تا کارهای ۲۰ دقیقه‌ای در پیشخوان را با یک دستور ۲ ثانیه‌ای در ترمینال حل کنید.',
    beginnerTrap: 'سفید شدن پیشخوان و نداشتن دسترسی SSH؛ بدون WP-CLI برای غیرفعال کردن یک افزونه مخرب ساعت‌ها در صف تیکت هاست معطل می‌شوید!',
    analogy: 'مثل خلبان اتوماتیک و دکمه‌های کنترل کابین هواپیما است؛ به جای اینکه ۲۰ اتاق را با پای پیاده سر بزنی، با تایپ یک دستور کل موتورهای سایت را روشن یا خاموش می‌کنی!',
    humanQuestion: 'چرا می‌گویند با ترمینال می‌توان در ۲ ثانیه کل افزونه‌ها را نصب کرد یا سایت قفل‌شده را نجات داد؟',
    realPain: 'وقتی یک افزونه مخرب سایتت را سفید می‌کند و پیشخوان وردپرس بالا نمی‌آید، اگر WP-CLI بلد نباشی ساعت‌ها دست به دامن پشتیبانی هاست می‌شوی؛ در حالی که با یک دستور ساده در ترمینال سایت زنده می‌شود!',
    commonAiError: {
      errorSnippet: 'wp: command not found on shared hosting',
      explanationFa: 'دستور WP-CLI روی هاست نصب نبوده یا دسترسی SSH فعال نشده!'
    },
    freelanceTip: 'به کارفرما بگو فرآیند مهاجرت و راه‌اندازی سایت با ابزارهای اتوماسیون خط فرمان انجام می‌شود تا هیچ قطعی پیش نیاید.',
    asciiDiagram: `[پیشخوان سایت قفل شده و بالا نمی‌آید]
                   │
                   ▼ (دستور نجات در ترمینال)
wp plugin deactivate --all ──> سایت در ۲ ثانیه زنده شد!`,
    injectionTarget: 'ترمینال سرور یا کنسول SSH هاست لینوکسی',
    cursorPrompt: `[نقش]: مهندس ارشد دوآپس وردپرس (WordPress DevOps Engineer).
[زمینه]: مدیریت سرور لینوکس با ابزار خط فرمان WP-CLI.
[وظیفه]: مجموعه دستورات خط فرمان برای پاکسازی تمام کش‌ها، بازسازی دیتابیس و نصب افزونه امنیتی [نام افزونه] را بنویس.
[شروط سلبی الزامی]:
- دستورات بدون نیاز به تایید دستی (--yes یا --quiet) باشند تا در اسکریپت‌های اتوماسیون قفل نشوند.
- از پرچم --allow-root در صورت نیاز یادآوری کن.
[خروجی]: دستورات تک‌خطی فشرده با کامنت راهنما.`,
    claudePrompt: `دستورات WP-CLI برای بکاپ‌گیری سریع از دیتابیس، غیرفعال کردن تمام افزونه‌ها و بررسی یکپارچگی فایل‌های هسته وردپرس با wp core verify-checksums را به همراه توضیح خروجی بنویس.`,
    debugPrompt: `دستور wp با خطای Error establishing a database connection مواجه شد. دستور تست اتصال دیتابیس با wp db check را بنویس تا مشخص شود تنظیمات کدام بخش مشکل دارد.`,
    howToTest: {
      steps: [
        'ترمینال را باز کرده و به پوشه وردپرس بروید.',
        'دستور wp core version را تایپ و اینتر بزنید.',
        'آیا شماره نسخه دقیق وردپرس (مثلاً 6.7.1) چاپ شد؟ اگر بله، WP-CLI فعال است.'
      ],
      expectedResult: 'اجرای دستور در کمتر از ۱ ثانیه و نمایش پیام سبز رنگ موفقیت Success:.',
      redFlags: ['پیام خطا: wp: command not found']
    },
    shortDefinition: 'ابزار خط فرمان رسمی لینوکس برای مدیریت کل وردپرس، ساخت دیتابیس، نصب پلاگین‌ها و رفع خطاهای سایت بدون باز کردن مرورگر.',
    deepExplanation: 'کارهایی که در پیشخوان وردپرس ۱۰ دقیقه زمان می‌برند، در WP-CLI با یک خط دستور در ۲ ثانیه انجام می‌شوند.',
    vibeCodingImpact: 'یک وایب‌کدر با دستورات WP-CLI در ترمینال فوراً پلاگین خراب را غیرفعال و سایت را احیا می‌کند.',
    goldenPrompt: 'مجموعه دستورات ترمینال WP-CLI برای رفع سریع خطای قفل شدن پیشخوان وردپرس و پاکسازی کش را بنویس.',
    codeSnippet: {
      language: 'bash',
      description: 'دستورات ضروری WP-CLI برای عیب‌یابی و پاکسازی کش',
      runContext: 'Server Terminal',
      code: "# پاکسازی تمام ترنزینت‌های منقضی‌شده:\nwp transient delete --expired\n\n# بررسی و ترمیم تمام جداول دیتابیس:\nwp db check && wp db repair"
    },
    seriesEpisodeUrl: '/vibe-coding/series/faktor-dadash',
    seriesEpisodeLabel: 'قسمت ۱ سریال وایب‌کدینگ (فاکتور داداش) - دقیقه ۳۱:۴۰',
    relatedTermIds: ['ssh-key-auth', 'db-search-replace'],
    seoKeywords: ['wp cli', 'خط فرمان وردپرس', 'ترمینال وردپرس', 'دستورات wp cli']
  },
  {
    id: 'ssh-key-auth',
    termEn: 'SSH Key Authentication',
    termFa: 'اتصال امن سرور با کلیدهای رمزنگاری',
    category: 'devops-server',
    level: 'intermediate',
    phonetic: 'اِس-اِس-اِچ کی آ-ثِن-تی-کِی-شِن',
    tags: ['ssh', 'security', 'server', 'terminal'],
    sequenceOrder: 33,
    learningStation: 'station-4',
    readingTimeMinutes: 1,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    isEcommerceEssential: false,
    elevatorPitch: 'ورود به سرور با کلید اثر انگشت رمزنگاری؛ تا بدون تایپ پسورد متنی، جلوی حملات ربات‌های هکر به پورت سرور گرفته شود.',
    beginnerTrap: 'استفاده از رمزهای ساده متنی برای سرور؛ ربات‌های هکر روزانه هزاران بار پسورد را تست می‌کنند تا سرور را قفل یا آلوده کنند!',
    analogy: 'مثل قفل اثر انگشت و چهره هوشمند است؛ به جای اینکه کلید فلزی دستت بگیری و نگران دزدیده شدن رمزش باشی، فقط سیستم خودت را به عنوان در معتبر می‌شناسد!',
    humanQuestion: 'چطور بدون تایپ پسورد متنی، با بالاترین امنیت از طریق ترمینال به هاست یا سرور متصل شوم؟',
    realPain: 'استفاده از رمزهای ساده متنی روی سرور باعث می‌شود ربات‌های هکر روزانه هزاران بار به پورت SSH حمله کنند و سرور را هک یا مسدود کنند.',
    commonAiError: {
      errorSnippet: 'Permission denied (publickey) when connecting to remote server',
      explanationFa: 'کلید عمومی شما روی فایل authorized_keys سرور ثبت نشده و اجازه ورود نداری!'
    },
    freelanceTip: 'اتصال با کلید SSH پیش‌نیاز دیپلوی خودکار کدهای هوش مصنوعی با GitHub Actions است.',
    asciiDiagram: `[کامپیوتر شما: کلید خصوصی id_ed25519]
                       │
                       ▼ (تطبیق ریاضی بدون افشای پسورد)
[سرور هاست: کلید عمومی در authorized_keys] ──> ورود آنی و ۱۰۰٪ امن`,
    injectionTarget: 'فایل ~/.ssh/authorized_keys روی سرور لینوکسی',
    cursorPrompt: `[نقش]: معمار امنیت زیرساخت ابری (Cloud Infrastructure Security Architect).
[زمینه]: تنظیم احراز هویت با کلیدهای مدرن SSH.
[وظیفه]: دستورات تولید جفت کلید Ed25519 و کپی امن آن به هاست لینوکسی را بنویس.
[شروط سلبی الزامی]:
- از الگوریتم‌های قدیمی و ضعیف مانند RSA 1024 یا DSA پرهیز کن.
- سطح دسترسی فایل‌ها (Permissions) حتماً ۶۰۰ برای کلیدها و ۷۰۰ برای پوشه .ssh قید شود.
[خروجی]: دستورات ترمینال برای مک و لینوکس.`,
    claudePrompt: `راهنمای گام‌به‌گام اتصال امن به هاست از طریق ترمینال با کلید SSH بدون نیاز به رمز عبور برای اتصال به GitHub Actions را به همراه کدهای مربوطه بنویس.`,
    debugPrompt: `دستور ssh خطای Permissions are too open بازمی‌گرداند. دستور اصلاح پرمیشن با chmod 600 را برای رفع خطا بنویس.`,
    howToTest: {
      steps: [
        'در ترمینال دستور ssh user@your-server-ip را بدون پسورد تایپ کنید.',
        'آیا بدون درخواست کلمه عبور، مستقیماً وارد خط فرمان سرور شدید؟',
        'اگر بله، کلید SSH با موفقیت روی سرور ثبت و فعال شده است.'
      ],
      expectedResult: 'ورود لحظه‌ای و امن به خط فرمان سرور در کمتر از نیم ثانیه.',
      redFlags: ['درخواست رمز متنی در هر بار اتصال به سرور']
    },
    shortDefinition: 'روش استاندارد ورود ایمن به ترمینال سرور هاست یا VPS با یک جفت کلید خصوصی و عمومی، بدون نیاز به تایپ کلمه عبور متنی.',
    deepExplanation: 'با تولید یک کلید رمزنگاری مدرن (مانند Ed25519) و ثبت کلید عمومی در سرور، اتصال ترمینال شما به بالاترین سطح امنیتی ارتقا می‌یابد.',
    vibeCodingImpact: 'ابزارهای خودکار وایب‌کدینگ برای آپلود خودکار کدهای قالب، الزاماً نیاز به کلیدهای SSH دارند.',
    goldenPrompt: 'نحوه تولید یک کلید مدرن SSH از نوع Ed25519 و مراحل کپی کردن آن به هاست لینوکسی برای لاگین بدون پسورد را توضیح بده.',
    codeSnippet: {
      language: 'bash',
      description: 'تولید کلید امن SSH و کپی به سرور هاست',
      runContext: 'Local Terminal',
      code: "ssh-keygen -t ed25519 -C \"admin@hasanshah.ir\"\nssh-copy-id -i ~/.ssh/id_ed25519.pub user@your-server-ip"
    },
    prerequisiteTermIds: ['wp-cli'],
    relatedTermIds: ['wp-cli', 'staging-environment'],
    seoKeywords: ['ورود با کلید ssh', 'ssh key وردپرس', 'امنیت سرور vps', 'اتصال امن به هاست']
  },
  {
    id: 'staging-environment',
    termEn: 'Staging Environment',
    termFa: 'محیط آزمایشی و شبیه‌ساز ایزوله سایت',
    category: 'devops-server',
    level: 'beginner',
    phonetic: 'اِستِی-جینگ اِن-وای-رون-مِنت',
    tags: ['devops', 'testing', 'deployment', 'workflow'],
    sequenceOrder: 34,
    learningStation: 'station-4',
    readingTimeMinutes: 1,
    targetPersonas: ['beginner', 'founder', 'developer', 'designer'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'اتاق گریم و پشت صحنه سایت؛ کدهای جدید هوش مصنوعی را با خیال راحت تست کنید بدون اینکه مشتریان متوجه خطایی شوند.',
    beginnerTrap: 'تست مستقیم کدهای هوش مصنوعی روی سایت زنده و فروشگاه در حال فروش؛ مشتری وسط پرداخت به ارور می‌خورد و خرید را برای همیشه لغو می‌کند!',
    analogy: 'مثل اتاق گریم و پشت صحنه تئاتر است؛ هر چقدر دلت می‌خواهد لباست را عوض می‌کنی و اشتباه می‌کنی، بدون اینکه تماشاچیان (مشتریان سایت) متوجه شوند!',
    humanQuestion: 'چطور کدهای جدید هوش مصنوعی را تست کنم بدون اینکه سایت زنده خراب شود و مشتریان متوجه شوند؟',
    realPain: 'تست مستقیم کدهای هوش مصنوعی روی سایت اصلی، فاجعه‌بارترین سناریو است؛ مشتری در حال پرداخت است که ناگهان با ارور مواجه می‌شود و خرید را رها می‌کند!',
    commonAiError: {
      errorSnippet: 'Staging site indexed by Google causing duplicate content penalty',
      explanationFa: 'هوش مصنوعی یادش رفته تگ noindex بذاره و سایت تستی توی نتایج گوگل رتبه سایت اصلی رو خراب کرده!'
    },
    freelanceTip: 'همیشه تغییرات را ابتدا روی استیجینگ به کارفرما نشان بده و بعد از تایید کتبی با یک کلیک به سایت اصلی منتقل کن.',
    asciiDiagram: `[محیط آزمایش: staging.yoursite.com (مخفی از گوگل)]
                         │
              تست کامل کدهای هوش مصنوعی
                         │
                         ▼ (تایید ۱۰۰٪ بدون باگ)
[سایت اصلی پروداکشن: yoursite.com (بدون ۱ ثانیه قطعی)]`,
    injectionTarget: 'ساب‌دامین اختصاصی مانند staging.site.com با رمز عبور HTTP Basic Auth',
    cursorPrompt: `[نقش]: مهندس استقرار نرم‌افزار و محیط‌های آزمایشی (DevOps Release Engineer).
[زمینه]: ساخت محیط استیجینگ وردپرس در ساب‌دامین.
[وظیفه]: دستورات کلون کردن سایت اصلی به پوشه استیجینگ همراه با مسدودسازی ایندکس گوگل را بنویس.
[شروط سلبی الزامی]:
- محیط استیجینگ حتماً باید دارای متا تگ noindex, nofollow باشد.
- ایمیل‌های تستی ووکامرس باید مسدود شوند تا ایمیل اشتباه به مشتریان ارسال نشود.
- رمزنگاری با htpasswd برای جلوگیری از دسترسی عموم لحاظ شود.
[خروجی]: چک‌لیست گام‌به‌گام و اسکریپت ترمینال.`,
    claudePrompt: `چک‌لیست ۱۰ ماده‌ای راه‌اندازی و انتقال ایمن از محیط استیجینگ به سایت زنده برای یک فروشگاه اینترنتی با ترافیک بالا را بنویس.`,
    debugPrompt: `گوگل صفحات سایت استیجینگ را ایندکس کرده است. فوراً دستور WP-CLI برای غیرفعال کردن دید موتورهای جستجو و فایل robots.txt مسدودکننده را بنویس.`,
    howToTest: {
      steps: [
        'آدرس سایت استیجینگ را در مرورگر ناشناس (Incognito) باز کنید.',
        'مطمئن شوید درخواست نام کاربری و رمز سرور (Basic Auth) نمایان می‌شود.',
        'سورس صفحه را چک کنید و تگ <meta name="robots" content="noindex, nofollow"> را بیابید.'
      ],
      expectedResult: 'محیط آزمایشی کاملاً محافظت‌شده و بدون خطر جریمه محتوای تکراری گوگل است.',
      redFlags: ['ایندکس شدن صفحات استیجینگ در نتایج جستجوی گوگل']
    },
    shortDefinition: 'یک کپی دقیق از سایت زنده روی یک ساب‌دامین اختصاصی و مخفی از گوگل، برای تست ویژگی‌های جدید و کدهای هوش مصنوعی.',
    deepExplanation: 'محیط استیجینگ به شما اجازه می‌دهد تغییرات قالب و کدهای جدید را در امنیت کامل تست کنید.',
    vibeCodingImpact: 'حرفه‌ای‌ترین تفاوت یک وایب‌کدر ارشد با یک کاربر معمولی، تست کدهای AI روی استیجینگ است.',
    goldenPrompt: 'چک‌لیست گام‌به‌گام راه‌اندازی یک محیط Staging برای یک فروشگاه با مسدودسازی ایندکس گوگل و رمزگذاری HTTP Basic Auth را بنویس.',
    codeSnippet: {
      language: 'bash',
      description: 'دستور مسدودسازی موقت موتورهای جستجو در محیط استیجینگ با WP-CLI',
      runContext: 'Staging Server',
      code: "wp option update blog_public 0"
    },
    prerequisiteTermIds: ['wp-cli'],
    relatedTermIds: ['wp-cli', 'db-search-replace'],
    seoKeywords: ['محیط استیجینگ', 'staging وردپرس', 'تست سایت قبل از انتشار', 'محیط آزمایشی سایت']
  },
  {
    id: 'db-search-replace',
    termEn: 'Database search-replace',
    termFa: 'تعویض ایمن دامنه‌ها در دیتابیس وردپرس',
    category: 'devops-server',
    level: 'advanced',
    phonetic: 'دی-بی سِرچ اَند ری-پلِیس',
    tags: ['database', 'serialization', 'migration', 'wp-cli'],
    sequenceOrder: 35,
    learningStation: 'station-4',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'تعویض هوشمند آدرس دامنه‌ها بدون خراب شدن تنظیمات قالب و داده‌های فشرده‌شده دیتابیس.',
    beginnerTrap: 'تعویض دامنه با کوئری ساده REPLACE در phpMyAdmin؛ طول کاراکترهای رشته‌های سریال‌شده به هم می‌ریزد و تمام چیدمان صفحه ریست می‌شود!',
    analogy: 'مثل جابه‌جایی اسباب‌کشی است؛ اگر اثاثیه شکستنی (داده‌های سریال‌شده) را با کارتن مناسب جابه‌جا نکنی، وسط راه می‌شکنند و سایتت به هم می‌ریزد!',
    humanQuestion: 'چرا وقتی سایتم را از هاست لوکال به دامنه اصلی منتقل کردم، تمام فونت‌ها و ویجت‌ها به هم ریختند؟',
    realPain: 'اگر با یک کوئری ساده SQL در phpMyAdmin دامنه را عوض کنی، وردپرس داده‌های ذخیره‌شده را فاسد می‌شناسد و تمام تنظیمات قالب ریست می‌شود!',
    commonAiError: {
      errorSnippet: 'Corrupted PHP serialized array detected in wp_options table',
      explanationFa: 'هوش مصنوعی طول کاراکترهای دامنه جدید رو حساب نکرده و کل تنظیمات سایت از بین رفته!'
    },
    freelanceTip: 'ابزار wp search-replace استانداردترین روش انتقال بدون باگ سایت‌های وردپرسی در دنیاست.',
    asciiDiagram: `[رشته سریال‌شده: s:16:"http://dev.local";]
                        │
                        ▼ (محاسبه خودکار تعداد حروف جدید)
[رشته اصلاح‌شده: s:20:"https://hasanshah.ir";] ──> بدون شکستن تنظیمات`,
    injectionTarget: 'ترمینال سرور با ابزار WP-CLI هنگام مهاجرت سایت',
    cursorPrompt: `[نقش]: مهندس ارشد پایگاه داده و مهاجرت وردپرس (WordPress Migration Specialist).
[زمینه]: تغییر دامنه سایت با حفظ یکپارچگی داده‌های سریال‌شده (Serialized Data).
[وظیفه]: دستور دقیق WP-CLI برای تغییر دامنه قدیمی [دامنه قدیم] به دامنه جدید [دامنه جدید] را بنویس.
[شروط سلبی الزامی]:
- اول دستور را با سوییچ --dry-run بنویس تا بدون تغییر واقعی تعداد ردیف‌ها را نشان دهد.
- برای اجرای قطعی سوییچ --all-tables را اضافه کن.
- از راهکارهای دستی و خطرناک SQL خام جداً پرهیز کن.
[خروجی]: دستور ترمینال تست‌شده.`,
    claudePrompt: `توضیح بده چرا اجرای دستور REPLACE ساده در SQL باعث شکستن داده‌های وردپرس می‌شود و چطور wp search-replace طول رشته‌ها را خودکار اصلاح می‌کند.`,
    debugPrompt: `پس از تغییر دامنه ویجت‌های صفحه اصلی پاک شده‌اند. دستور بازگردانی بکاپ و اجرای استاندارد با wp search-replace را بنویس.`,
    howToTest: {
      steps: [
        'ابتدا دستور را با پرچم --dry-run اجرا کنید.',
        'خروجی جدول را بررسی کنید که چند جایگزینی پیدا شده است.',
        'دستور اصلی را اجرا کنید و صفحه تنظیمات پوسته را باز کنید؛ چیدمان باید بدون تغییر باقی مانده باشد.'
      ],
      expectedResult: 'تغییر کامل آدرس‌ها در سراسر جداول دیتابیس بدون از دست رفتن تنظیمات قالب.',
      redFlags: ['خالی شدن بخش تنظیمات و برچسب‌های ویجت‌ها بعد از جابجایی']
    },
    shortDefinition: 'فرآیند جایگزینی آدرس دامنه‌ها و لینک‌ها در دیتابیس با در نظر گرفتن ساختار رشته‌های سریال‌شده پی‌اچ‌پی.',
    deepExplanation: 'ابزارهای رسمی مانند wp search-replace محاسبه طول رشته را به صورت خودکار اصلاح می‌کنند.',
    vibeCodingImpact: 'هوش مصنوعی اغلب فراموش می‌کند داده‌های وردپرس سریال هستند و کوئری خام SQL پیشنهاد می‌دهد که دیتابیس را خراب می‌کند.',
    goldenPrompt: 'دستور دقیق WP-CLI برای جایگزینی دامنه قدیمی با دامنه جدید همراه با سوییچ تست فرضی (--dry-run) را بنویس.',
    codeSnippet: {
      language: 'bash',
      description: 'تست فرضی و اجرای نهایی تغییر دامنه بدون خرابی داده‌های سریال‌شده',
      runContext: 'Server Terminal',
      code: "# گام اول: تست فرضی بدون اعمال تغییر:\nwp search-replace 'http://dev.local' 'https://hasanshah.ir' --dry-run\n\n# گام دوم: اجرای قطعی در کل دیتابیس:\nwp search-replace 'http://dev.local' 'https://hasanshah.ir' --all-tables"
    },
    prerequisiteTermIds: ['wp-cli'],
    relatedTermIds: ['wp-cli', 'staging-environment'],
    seoKeywords: ['سرچ ریپلیس دیتابیس', 'search-replace وردپرس', 'انتقال هاست وردپرس', 'خرابی داده های سریال شده']
  },
  {
    id: 'opcache-tuning',
    termEn: 'PHP OPcache and FastCGI',
    termFa: 'کامپایلر بایت‌کد پی‌اچ‌پی در حافظه رم سرور',
    category: 'devops-server',
    level: 'advanced',
    phonetic: 'او-پی-کَش اَند فست-سی-جی-آی',
    tags: ['performance', 'php', 'server', 'ttfb'],
    sequenceOrder: 36,
    learningStation: 'station-4',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: false,
    isEcommerceEssential: true,
    elevatorPitch: 'نگهداری کدهای کامپایل‌شده وردپرس در حافظه رم؛ تا زمان پاسخ اولیه سرور (TTFB) به زیر ۱۰۰ میلی‌ثانیه برسد.',
    beginnerTrap: 'فعال نبودن آپ‌کش در هاست؛ سرور در هر کلیک صدها فایل PHP را از هارددیسک می‌خواند و پردازنده به سقف ۱۰۰٪ می‌رسد!',
    analogy: 'مثل یک سرآشپز است که مواد اولیه غذا را از قبل خرد کرده و آماده گذاشته در یخچال؛ به جای اینکه برای هر مشتری از سر زمین گوجه بچیند، همان ثانیه غذا را تحویل می‌دهد!',
    humanQuestion: 'چرا سایتم با وجود قالب خوب، چند ثانیه طول می‌کشد تا اولین بایت صفحه را به کاربر برساند؟',
    realPain: 'بدون OPcache، سرور در هر بار بازدید باید صدها فایل PHP را از هارددیسک کند بخواند و از نو کامپایل کند که زمان پاسخ (TTFB) را تا ۳ ثانیه بالا می‌برد!',
    commonAiError: {
      errorSnippet: 'TTFB > 1800ms due to high CPU load during PHP file parsing',
      explanationFa: 'ماژول آپ‌کش روی هاست فعال نبوده و پردازنده سرور سر هر درخواست زیر فشار میره!'
    },
    freelanceTip: 'با فعال کردن OPcache در کنترل‌پنل سرور کارفرما، سرعت سایت را بدون یک خط کدنویسی چند برابر می‌کنی.',
    asciiDiagram: `[درخواست کاربر] ──> آیا کدهای کامپایل‌شده در رم هستند؟
                             ├── بله ──> 🚀 اجرای لحظه‌ای در رم (زیر ۵۰ میلی‌ثانیه)
                             └── خیر ──> خواندن کند از هارددیسک + کامپایل مجدد`,
    injectionTarget: 'فایل php.ini سرور یا تنظیمات PHP Selector در سی‌پنل / دایرکت‌ادمین',
    cursorPrompt: `[نقش]: مهندس بهینه‌سازی سرورهای لینوکسی و PHP Tuning.
[زمینه]: کانفیگ ماژول OPcache در @php.ini برای وردپرس پرسرعت.
[وظیفه]: تنظیمات بهینه پارامترهای opcache.memory_consumption و max_accelerated_files را برای سرور وردپرس بنویس.
[شروط سلبی الزامی]:
- حافظه اختصاصی نباید کمتر از ۱۲۸ مگابایت باشد (پیشنهاد ۲۵۶ مگابایت).
- تعداد فایل‌ها (max_accelerated_files) باید حداقل ۲۰ هزار فایل باشد.
[خروجی]: کدهای کانفیگ php.ini.`,
    claudePrompt: `بهترین مقادیر برای تنظیم ماژول‌های PHP-FPM و OPcache در سرور Nginx برای اجرای یک سایت ووکامرسی با ۱۰ هزار محصول را به همراه دستور ریست سرویس بنویس.`,
    debugPrompt: `پس از آپلود کدهای جدید قالب، تغییرات در سایت دیده نمی‌شود زیرا کدهای قدیمی در آپ‌کش قفل مانده‌اند. تابع opcache_reset() یا دستور ریست کش را بنویس.`,
    howToTest: {
      steps: [
        'یک فایل info.php حاوی phpinfo(); روی هاست بسازید و باز کنید.',
        'بخش Zend OPcache را جستجو کنید.',
        'آیا عبارت Opcode Caching => Up and Running درج شده است؟'
      ],
      expectedResult: 'زمان پاسخ اولیه سرور (Time to First Byte) در تست سرعت به زیر ۲۰۰ میلی‌ثانیه می‌رسد.',
      redFlags: ['غیرفعال بودن ماژول در صفحه phpinfo']
    },
    shortDefinition: 'موتور شتاب‌دهنده رسمی PHP که اسکریپت‌های کامپایل‌شده قالب وردپرس را در حافظه رم نگه می‌دارد.',
    deepExplanation: 'با فعال بودن OPcache کدهای بایت‌کد در رم ذخیره شده و زمان پاسخ اولیه سرور (TTFB) به زیر ۱۰۰ میلی‌ثانیه سقوط می‌کند.',
    vibeCodingImpact: 'یک وایب‌کدر که این تنظیمات را در هاست فعال کند، سایت را تحت ترافیک بالا کاملاً سبک و سریع نگه می‌دارد.',
    goldenPrompt: 'بهترین مقادیر پیکربندی فایل php.ini برای ماژول OPcache در یک سرور اختصاصی وردپرس را بنویس.',
    codeSnippet: {
      language: 'bash',
      description: 'تنظیمات طلایی ماژول OPcache در فایل php.ini سرور',
      runContext: 'php.ini',
      code: "opcache.enable=1\nopcache.memory_consumption=256\nopcache.max_accelerated_files=20000\nopcache.revalidate_freq=60\nopcache.validate_timestamps=1"
    },
    prerequisiteTermIds: ['wp-cli'],
    relatedTermIds: ['core-web-vitals', 'wp-cli'],
    seoKeywords: ['opcache وردپرس', 'کاهش ttfb', 'بهینه سازی php سرور', 'افزایش سرعت هاست وردپرس']
  },
  {
    id: 'core-web-vitals',
    termEn: 'Core Web Vitals (CWV)',
    termFa: 'سنجه‌های حیاتی سرعت و تجربه کاربری گوگل',
    category: 'devops-server',
    level: 'intermediate',
    phonetic: 'کور وب وای-تالز (CWV)',
    tags: ['seo', 'google', 'speed', 'lcp', 'inp', 'cls'],
    sequenceOrder: 37,
    learningStation: 'station-4',
    readingTimeMinutes: 2,
    targetPersonas: ['founder', 'designer', 'developer', 'beginner'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: true,
    isEcommerceEssential: true,
    elevatorPitch: 'چکاپ سلامت سه‌گانه گوگل برای سایت؛ سرعت لود بزرگترین عکس (LCP)، واکنش‌پذیری کلیک (INP) و پایداری صفحه (CLS).',
    beginnerTrap: 'توجه نکردن به گزارش Core Web Vitals در سرچ کنسول؛ گوگل سایت‌هایی که نمره ضعیف دارند را حتی با بهترین مقالات به صفحات پایین تبعید می‌کند!',
    analogy: 'مثل معاینه فنی خودرو یا چکاپ سلامت انسان است؛ گوگل با این ۳ آزمایش دقیق نبض سایتت را می‌گیرد و اگر سالم باشی، تابلوی تبلیغاتی سایتت را در بهترین ورودی اتوبان (لینک یک گوگل) می‌گذارد!',
    humanQuestion: 'گوگل سرعت واقعی و تجربه کاربران در سایت من را بر اساس چه معیارهایی می‌سنجد و رتبه می‌دهد؟',
    realPain: 'اگر این معیارها را رد نکنی، هر چقدر هم محتوای عالی بنویسی، گوگل سایت تو را در نتایج جستجو به صفحات ۲ و ۳ تنزل می‌دهد!',
    commonAiError: {
      errorSnippet: 'Failed Core Web Vitals assessment in Google Search Console: Poor LCP and CLS',
      explanationFa: 'گوگل گزارش داده که بنر اصلی دیر لود میشه و المان‌های صفحه هنگام لود جابه‌جا میشن!'
    },
    freelanceTip: 'ارائه گزارش سبز رنگ Core Web Vitals بعد از تحویل سایت، قطعی‌ترین سند برای اثبات تخصص تو به کارفرماست.',
    asciiDiagram: `[۳ آزمایش حیاتی گوگل]
   ├── LCP (سرعت لود عکس اصلی هدر) ──> هدف: زیر ۲.۵ ثانیه
   ├── INP (پاسخگویی به کلیک کاربر) ──> هدف: زیر ۲۰۰ میلی‌ثانیه
   └── CLS (پرش چیدمان صفحه)       ──> هدف: زیر ۰.۱ (صفر مطلق)`,
    injectionTarget: 'بهینه‌سازی هدر قالب با preload و کلاس‌های CSS پایداری',
    cursorPrompt: `[نقش]: متخصص ارشد بهینه‌سازی فنی Core Web Vitals گوگل (Google CWV Engineer).
[زمینه]: پاس کردن ۱۰۰٪ تست‌های گوگل لایت‌هاوس در @header.php.
[وظیفه]: تگ‌های پیش‌بارگذاری تصویر اصلی هدر با fetchpriority="high" و فونت‌های فارسی محلی را بنویس.
[شروط سلبی الزامی]:
- از پیش‌بارگذاری بیش از ۲ تصویر در هدر خودداری کن تا پهنای باند مسدود نشود.
- فونت‌ها حتماً با فرمت woff2 و font-display: swap تعریف شوند.
[خروجی]: کدهای بهینه‌سازی هدر HTML.`,
    claudePrompt: `چک‌لیست مهندسی سئوی تکنیکال برای سبز کردن کامل هر سه فاکتور LCP، INP و CLS در قالب وردپرس را با مثال‌های عملی بنویس.`,
    debugPrompt: `گزارش گوگل می‌گوید فاکتور LCP روی ۴.۲ ثانیه است. تگ‌های preload و تنظیمات فرمت WebP را برای کاهش زمان لود تصویر اصلی اعمال کن.`,
    howToTest: {
      steps: [
        'آدرس سایت را در سایت pagespeed.web.dev گوگل وارد کنید.',
        'بخش Core Web Vitals Assessment را بررسی کنید.',
        'آیا هر سه نشانگر LCP، INP و CLS با رنگ سبز و برچسب "Good" مشخص شده‌اند؟'
      ],
      expectedResult: 'گزارش گوگل وضعیت سایت را "Passed" اعلام می‌کند.',
      redFlags: ['نمایش برچسب قرمز یا نارنجی برای فاکتورهای سرعت']
    },
    shortDefinition: 'سه فاکتور رسمی گوگل برای سنجش سرعت، واکنش‌گرایی و ثبات بصری سایت: LCP، INP و CLS.',
    deepExplanation: 'گوگل در الگوریتم رتبه‌بندی سایت‌هایی که سنجه‌های وب ویتال را پاس کنند بالاتر از رقبا نشان می‌دهد.',
    vibeCodingImpact: 'وایب‌کدر ارشد با نظارت بر وب‌ویتالز تضمین می‌کند که سایت در صفحه یک گوگل بدرخشد.',
    goldenPrompt: 'راهنمای عملی برای بهینه‌سازی سنجه LCP در یک پوسته وردپرس با پیش‌بارگذاری تصویر اصلی هدر را بنویس.',
    codeSnippet: {
      language: 'html',
      description: 'پیش‌بارگذاری تصویر اصلی هدر (LCP Image) در بخش head سایت',
      runContext: 'header.php',
      code: "<link rel=\"preload\" as=\"image\" href=\"/assets/hero-banner.webp\" fetchpriority=\"high\" type=\"image/webp\">"
    },
    prerequisiteTermIds: ['cls-prevention', 'opcache-tuning'],
    relatedTermIds: ['opcache-tuning', 'cls-prevention'],
    seoKeywords: ['core web vitals', 'سنجه های وب ویتالز', 'lcp وردپرس', 'سرعت سایت گوگل']
  },
  {
    id: 'git-worktrees-agents',
    termEn: 'Git Worktrees for Parallel AI Agents',
    termFa: 'ورک‌تری‌های گیت برای توسعه موازی ایجنت‌ها (Git Worktrees)',
    category: 'devops-server',
    level: 'advanced',
    phonetic: 'گیت ورک-تریز',
    tags: ['git', 'worktrees', 'parallel-agents', 'devops', 'branching'],
    sequenceOrder: 48,
    learningStation: 'station-4',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: false,
    elevatorPitch: 'داشتن همزمان چند شاخه زنده از پروژه روی هارد بدون نیاز به کلون مجدد مخزن! با ورک‌تری، می‌توانید یک ایجنت هوش مصنوعی را روی شاخه فرانت‌اند و یک ایجنت دیگر را روی شاخه بک‌اند همزمان به کار بگیرید بدون اینکه فایل‌های هم را به هم بریزند.',
    beginnerTrap: 'سوییچ کردن مداوم با git checkout در حالی که ادیتور هوش مصنوعی باز است؛ این کار باعث خطاهای تداخل فایل و گیج شدن مدل می‌شود!',
    analogy: 'مثل این است که یک کتابخانه با چند میز مطالعه مجزا داشته باشی؛ به جای اینکه کتاب‌ها را مدام از روی میز جمع کنی و کتاب دیگری بگذاری، هر دستیار پشت میز خودش کارش را موازی پیش می‌برد.',
    humanQuestion: 'چطور چند قابلیت مختلف را همزمان با ایجنت‌های هوش مصنوعی توسعه دهم بدون اینکه کدهایم خراب شوند؟',
    realPain: 'وقتی هوش مصنوعی وسط ادیت یک فایل است و شما شاخه را عوض می‌کنید، فایل‌ها بازنویسی ناقص می‌شوند و مجبور می‌شوید ساعت‌ها برای حل conflict زمان تلف کنید!',
    commonAiError: {
      errorSnippet: 'Git merge conflict / working tree dirty error during agent execution',
      explanationFa: 'هوش مصنوعی و برنامه‌نویس همزمان روی یک شاخه فایل‌های مشترک را تغییر داده‌اند و تداخل خورده است!'
    },
    freelanceTip: 'به کارفرما بگو توسعه پروژه او با استراتژی برنچینگ موازی و ورک‌تری انجام می‌شود و سرعت تحویل فیچرها ۳ برابر متودولوژی سنتی است.',
    asciiDiagram: `[مخزن اصلی گیت: .git]
         ├── پوشه ۱: main (نسخه پایدار و پروداکشن)
         ├── پوشه ۲: worktree-feature-banner (ایجنت ۱ در حال کار)
         └── پوشه ۳: worktree-api-refactor  (ایجنت ۲ در حال کار)`,
    injectionTarget: 'خط فرمان ترمینال برای ایجاد شاخه‌های کاری مجزا',
    universalPrompt: `[نقش]: مهندس ارشد دواپس و استراتژی شاخه‌بندی گیت (Git Branching & Worktree).
[زمینه]: می‌خواهیم توسعه درگاه پرداخت جدید را در یک شاخه و پوشه کاری مجزا در مسیر "../worktrees/payment-v2" ایزوله کنیم تا با شاخه اصلی main تداخل نخورد.
[وظیفه]: توالی دستورات خط فرمان Git Worktree را برای ساخت، سوئیچ و مدیریت این ورک‌تری بنویس.
[شروط سلبی]:
- کل تاریخچه مخزن گیت را کپی نکن؛ از هسته مشترک .git استفاده کن.
- شاخه‌ها را مستقل نگه دار تا امکان دیپلوی سریع نسخه اصلی محفوظ باشد.
[خروجی]: دستورات اجرایی خط فرمان بش (Bash) آماده اجرا در ترمینال.`,
    agentsMdRule: `# توسعه موازی با ورک‌تری در AGENTS.md:
برای توسعه قابلیت‌های جدید و تسک‌های طولانی، ایجنت‌های هوش مصنوعی باید در یک Git Worktree مجزا فعالیت کنند تا شاخه main همواره آماده استقرار باقی بماند.`,
    cursorPrompt: `دستورات ترمینال برای افزودن یک ورک‌تری کاری جدید با گیت برای این شاخه آزمایشی را تولید کن.`,
    claudePrompt: `مزایای معماری استفاده از Git Worktree در برابر git stash سنتی را هنگام هماهنگی بین چند ایجنت هوش مصنوعی تشریح و کد آن را بنویس.`,
    debugPrompt: `ورک‌تری قفل شده است. دستور prune و حذف ایمن شاخه کاری را ارائه بده.`,
    howToTest: {
      steps: [
        'دستور git worktree add ../feature-branch feature-branch را در ترمینال بزنید.',
        'پوشه جدید را به عنوان یک پنجره مستقل در ادیتور باز کنید.',
        'مشاهده می‌کنید که دو شاخه کاملاً مستقل به صورت همزمان باز هستند و هیچ تداخلی با هم ندارند.'
      ],
      expectedResult: 'توسعه موازی بدون اصطکاک و حل راحت مرج‌ها.',
      redFlags: ['تغییر دستی فایل‌ها روی شاخه main در زمان کار ایجنت‌ها']
    },
    shortDefinition: 'قابلیت بومی سیستم گیت برای داشتن همزمان چندین پوشه کاری متصل به یک مخزن مشترک جهت توسعه موازی.',
    deepExplanation: 'ورک‌تری‌ها به جای کلون کردن مجدد، از دایرکتوری .git مشترک استفاده می‌کنند و بهترین بستر برای فعالیت ایجنت‌های خودمختار هوش مصنوعی هستند.',
    vibeCodingImpact: 'همکاری همزمان چند ایجنت بدون تداخل، بازنویسی ناخواسته یا خطاهای مرج.',
    goldenPrompt: 'دستورات گیت برای ساخت یک ورک‌تری مجزا برای توسعه بدون تداخل این ویژگی را بنویس.',
    codeSnippet: {
      language: 'bash',
      description: 'ایجاد یک ورک‌تری کاری مستقل در ترمینال گیت',
      runContext: 'Terminal Command',
      code: "git worktree add ../hs-feature-checkout -b feature/checkout-v2\ncd ../hs-feature-checkout"
    },
    prerequisiteTermIds: ['wp-cli'],
    relatedTermIds: ['wp-cli', 'subagents-delegation'],
    seoKeywords: ['git worktrees', 'ورک تری گیت', 'توسعه موازی با هوش مصنوعی', 'مدیریت شاخه های گیت']
  },
  {
    id: 'ci-cd-deployment',
    termEn: 'CI/CD Automated Deployment for WordPress',
    termFa: 'استقرار خودکار و بیلد پروداکشن (GitHub Actions CI/CD)',
    category: 'devops-server',
    level: 'advanced',
    phonetic: 'سی-آی سی-دی دیپلویمنت',
    tags: ['cicd', 'github-actions', 'deployment', 'devops', 'automation'],
    sequenceOrder: 49,
    learningStation: 'station-4',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'founder'],
    isNoCodeFriendly: true,
    elevatorPitch: 'خداحافظی با آپلود دستی فایل از طریق FileZilla و کنترل‌پنل cPanel! با هر بار git push، ربات‌های GitHub Actions کدهای شما را تست می‌کنند و در چند ثانیه سایت اصلی کارفرما را بدون حتی ۱ ثانیه قطعی به‌روز می‌کنند.',
    beginnerTrap: 'ویرایش مستقیم کدهای PHP در بخش ویرایشگر پوسته پیشخوان وردپرس روی سرور واقعی؛ یک نقطه‌ویرگول اشتباه کافیست تا کل سایت قطع شود و دیگر حتی پیشخوان هم باز نشود!',
    analogy: 'مثل قطار خط لوله خودکار کارخانه است؛ اتومبیل روی ریل می‌رود، تست کیفیت می‌شود، رنگ می‌خورد و آماده تحویل به مشتری از کارخانه خارج می‌شود.',
    humanQuestion: 'چطور تغییرات کدهایم را بدون خطر قطعی سایت مشتری به صورت خودکار روی هاست آپلود کنم؟',
    realPain: 'آپلود دستی فایل با FTP پر از اشتباه انسانی است؛ فایلی جا می‌ماند، ورژن‌های قدیمی بازنویسی می‌شوند و مشتری با عصبانیت تماس می‌گیرد!',
    commonAiError: {
      errorSnippet: 'Action failed: rsync exited with code 23 / SSH key unauthorized',
      explanationFa: 'هوش مصنوعی کلید دسترسی امنیتی SSH را در گیت‌هاب تنظیم نکرده و آپلود متوقف شده!'
    },
    freelanceTip: 'به کارفرما قرارداد با استقرار تمام‌اتوماتیک ارائه بده تا بداند برای هر تغییر کوچک نیاز به ورود دستی به هاست نیست و همه‌چیز استاندارد و ثبت‌شده است.',
    asciiDiagram: `[کدنویسی در لوکال] ──> git push origin main
                              │
                              ▼
           [ربات GitHub Actions: اجرای تست و بیلد]
                              │
                              ▼
   [انتقال امن با rsync/SSH به هاست کارفرما در ۱۰ ثانیه] ──> 🚀 سایت آپدیت شد`,
    injectionTarget: 'فایل /.github/workflows/deploy.yml در ریشه پروژه',
    universalPrompt: `[نقش]: مهندس ارشد استقرار خودکار و دواپس وردپرس (CI/CD Specialist).
[زمینه]: می‌خواهیم افزونه‌های ضروری پوشه mu-plugins و دارایی‌های قالب را با استفاده از GitHub Actions و پروتکل امن rsync روی هاست سرور منتشر کنیم.
[وظیفه]: فایل ورک‌فلو کامل و امن گیت‌هاب اکشنز (.github/workflows/deploy.yml) را بنویس.
[شروط سلبی]:
- اطلاعات حساس (هاست، یوزرنیم، پورت و کلید خصوصی SSH) را هرگز داخل فایل یمل قرار نده؛ از متغیرهای امن GitHub Secrets استفاده کن.
- دایرکتوری‌های توسعه شامل .git، node_modules و پوشه‌های تست را در زمان rsync مستثنی (exclude) نما.
[خروجی]: فایل پیکربندی کامل، امن و معتبر YAML آماده اجرا.`,
    agentsMdRule: `# استقرار خودکار در AGENTS.md:
تمامی انتشارات به محیط پروداکشن باید منحصراً از طریق خط لوله CI/CD انجام شود و هرگونه ویرایش مستقیم فایل‌ها در سرور لایو اکیداً ممنوع است.`,
    cursorPrompt: `فایل گردش‌کار استقرار deploy.yml در گیت‌هاب اکشنز را برای دیپلوی افزونه‌های این پروژه روی سرور SSH تولید کن.`,
    claudePrompt: `معماری استقرار بدون قطعی (Zero-Downtime Deployment) برای یک سایت پرترافیک وردپرسی با استفاده از GitHub Actions را طراحی و کد یمل آن را بنویس.`,
    debugPrompt: `فایل کانفیگ rsync به دلیل وجود پوشه .git حجم زیادی انتقال می‌دهد. خطوط exclude را اضافه کن.`,
    howToTest: {
      steps: [
        'فایل deploy.yml را در پوشه .github/workflows/ کامیت و پوش کنید.',
        'تب Actions را در مخزن گیت‌هاب باز نمایید.',
        'مشاهده کنید که تیک سبز موفقیت ثبت شده و تغییرات بلافاصله روی هاست پروداکشن منعکس گردیده است.'
      ],
      expectedResult: 'استقرار خودکار بدون دخالت دست در کمتر از ۳۰ ثانیه.',
      redFlags: ['ویرایش دستی فایل‌ها در هاست با ابزار File Manager کنترل‌پنل']
    },
    shortDefinition: 'فرآیند خودکارسازی تست، بیلد و انتقال ایمن کدهای پروژه به سرور نهایی به محض ثبت تغییرات در گیت.',
    deepExplanation: 'خط لوله‌های CI/CD خطای انسانی را در زمان انتشار حذف می‌کنند و با آرشیو کردن هر استقرار، امکان بازگشت فوری (Rollback) به نسخه سالم را فراهم می‌آورند.',
    vibeCodingImpact: 'رسیدن به بالاترین حد آرامش ذهنی؛ توسعه در لوکال، تست با هوش مصنوعی و انتشار خودکار در پروداکشن.',
    goldenPrompt: 'یک ورک‌فلو در گیت‌هاب اکشنز بنویس که با دستور rsync پوشه mu-plugins را روی هاست لینوکسی دیپلوی کند.',
    codeSnippet: {
      language: 'yaml',
      description: 'ورک‌فلو استقرار خودکار وردپرس با GitHub Actions',
      runContext: '.github/workflows/deploy.yml',
      code: "name: Deploy WordPress\non:\n  push:\n    branches: [ main ]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n    - name: Sync via SSH\n      uses: Burnett01/rsync-deployments@7.0.1\n      with:\n        SWITCHES: -avzr --delete --exclude='.git*'\n        REMOTE_HOST: ${{ secrets.HOST }}\n        REMOTE_USER: ${{ secrets.USER }}\n        TARGET: /var/www/html/wp-content/mu-plugins"
    },
    prerequisiteTermIds: ['wp-cli'],
    relatedTermIds: ['wp-cli', 'git-worktrees-agents'],
    seoKeywords: ['ci cd وردپرس', 'github actions wordpress', 'استقرار خودکار وردپرس', 'دیپلوی خودکار هاست']
  }
];
