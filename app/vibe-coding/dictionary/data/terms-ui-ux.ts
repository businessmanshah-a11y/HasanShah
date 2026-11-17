import { EncyclopediaTerm } from './types';

export const uiUxTerms: EncyclopediaTerm[] = [
  {
    id: 'design-tokens',
    termEn: 'Design Tokens',
    termFa: 'توکن‌های دیزاین / متغیرهای طراحی',
    category: 'ui-ux',
    level: 'beginner',
    phonetic: 'دی-زاین تو-کِنز',
    tags: ['figma', 'tailwind', 'design-system', 'variables'],
    sequenceOrder: 7,
    learningStation: 'station-2',
    readingTimeMinutes: 1,
    targetPersonas: ['designer', 'beginner', 'founder', 'developer'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: true,
    elevatorPitch: 'کدهای نام‌گذاری‌شده برای رنگ‌ها، فونت‌ها و فاصله‌ها، تا با تغییر یک خط، کل سایت یکجا تغییر رنگ دهد.',
    beginnerTrap: 'نوشتن کدهای رنگی رندوم و هاردکد شده مثل #d4af37 در فایل‌های مختلف؛ وقتی کارفرما رنگ طلایی را کمی تغییر دهد، باید ۳ روز ۲۰۰ فایل را دستی ویرایش کنید!',
    analogy: 'مثل قوطی‌های برچسب‌خورده ادویه در آشپزخانه است؛ وقتی نمک می‌خواهی از قوطی نمک برمی‌داری، نه اینکه هر بار یک مدل نمک جدید از کوچه بخری!',
    humanQuestion: 'چطور رنگ‌ها و فونت‌های سایتم را یکجا تعریف کنم تا اگر فردا خواستم تغییر دهم، در یک ثانیه عوض شود؟',
    realPain: 'اگر توکن نسازی، باید در ۲۰۰ جای مختلف کدها رنگ طلایی را دانه دانه عوض کنی؛ اگر یکی جا بماند سایتت شبیه دفتر نقاشی مهدکودک می‌شود!',
    commonAiError: {
      errorSnippet: 'Hardcoded arbitrary hex colors: #d4af37, #1a1a2e everywhere in template',
      explanationFa: 'هوش مصنوعی تنبلی کرده و به جای استفاده از متغیر، رنگ‌های متفرقه تو کد ریخته!'
    },
    freelanceTip: 'به کارفرما بگو سایتت سیستم طراحی (Design System) اختصاصی دارد؛ این توجیه اصلی پروژه‌های لوکس با قیمت بالاست.',
    asciiDiagram: `Figma Design Tokens (Primary Gold)
             │
             ▼
[globals.css: --color-gold: oklch(...)]
             │
   ┌─────────┴─────────┐
   ▼                   ▼
کارت‌ها و دکمه‌ها    تیترها و آیکون‌ها
(همه با یک تغییر در ثانیه عوض می‌شوند)`,
    injectionTarget: 'فایل globals.css در :root یا تنظیمات theme.json قالب',
    cursorPrompt: `[نقش]: طراح ارشد سیستم دیزاین فرانت‌اند وردپرس.
[زمینه]: پروژه از متغیرهای CSS توکن در @globals.css استفاده می‌کند.
[وظیفه]: کامپوننت کارت [نام کامپوننت] را با کلاس‌های Tailwind بنویس.
[شروط سلبی الزامی]:
- هرگز هیچ رنگ هگزادسیمال متفرقه (مثل #ff0000 یا #123456) در کد قرار نده.
- فقط از کلاس‌های توکن سراسری مانند text-gold، bg-surface یا var(--color-gold) استفاده کن.
- فواصل (Padding / Margin) فقط از ضریب‌های استاندارد ۴ پیکسلی تبعیت کنند.
[خروجی]: کدهای تمیز HTML/PHP کامپوننت.`,
    claudePrompt: `شما مهندس دیزاین سیستم هستید.
من این توکن‌های رنگی و فاصله‌ای را در فایل استایل سراسری دارم:
\`\`\`css
:root {
  --color-gold: oklch(0.83 0.105 72);
  --color-surface: oklch(0.18 0.025 270);
  --radius-card: 1rem;
}
\`\`\`
لطفاً کامپوننت [نام المان] را صرفاً بر پایه همین توکن‌ها بساز. هیچ استایل اختصاصی خارج از سیستم تولید نکن.`,
    debugPrompt: `هوش مصنوعی در کد خروجی رنگ هگزادسیمال تصادفی قرار داده است. لطفاً فوراً تمام رنگ‌های هاردکد شده را حذف کن و آن‌ها را با متغیرهای توکن تعریف‌شده در globals.css جایگزین کن.`,
    howToTest: {
      steps: [
        'در فایل globals.css مقدار --color-gold را به طور موقت از طلایی به رنگ دیگر تغییر دهید.',
        'صفحه را رفرش کنید و ببینید آیا تمام دکمه‌ها و کادرهای مرتبط درجا تغییر رنگ می‌دهند یا خیر.',
        'اگر المانی بدون تغییر ماند، کدهای آن را بررسی کنید تا مطمئن شوید رنگ هگزادسیمال مستقیم در آن نمانده باشد.'
      ],
      expectedResult: 'تغییر یک متغیر باعث دگرگونی یکپارچه کل استایل بدون حتی یک خطای دیداری می‌شود.',
      redFlags: ['وجود کدهای رنگی مانند #333 یا #fff در فایل تمپلیت']
    },
    shortDefinition: 'کوچک‌ترین واحدهای تصمیم‌گیری در طراحی که در قالب متغیر تعریف شده و بین فیگما و کد مشترک هستند.',
    deepExplanation: 'به جای نوشتن رنگ‌های هگزادسیمال متفرقه در سراسر کدهای قالب وردپرس، آن‌ها را در قالب توکن‌های معنادار مانند var(--color-gold) تعریف می‌کنیم.',
    vibeCodingImpact: 'هنگام وایب‌کدینگ با هوش مصنوعی، اگر توکن‌های دیزاین را مشخص نکنید، AI برای هر کامپوننت یک رنگ یا سایز جدید اختراع می‌کند.',
    goldenPrompt: 'در تمامی فایل‌های CSS و کلاس‌های Tailwind فقط از توکن‌های موجود در متغیرهای CSS ریشه (مانند var(--color-gold)) استفاده کن و هرگز رنگ هگزادسیمال تصادفی تولید نکن.',
    codeSnippet: {
      language: 'css',
      description: 'تعریف توکن‌های پایه دیزاین در متغیرهای CSS سراسری',
      runContext: 'globals.css',
      code: ":root {\n  --color-gold: oklch(0.83 0.105 72);\n  --color-surface: oklch(0.18 0.025 270);\n  --color-background: oklch(0.13 0.022 272);\n  --radius-card: 1rem;\n}"
    },
    seriesEpisodeUrl: '/vibe-coding/series/faktor-dadash',
    seriesEpisodeLabel: 'قسمت ۱ سریال وایب‌کدینگ (فاکتور داداش) - دقیقه ۲۲:۱۰',
    relatedTermIds: ['visual-hierarchy', 'wcag-contrast'],
    seoKeywords: ['دیزاین توکن', 'design tokens', 'طراحی سیستم وردپرس', 'متغیرهای استایل']
  },
  {
    id: 'visual-hierarchy',
    termEn: 'Visual Hierarchy',
    termFa: 'سلسله‌مراتب بصری چیدمان المان‌ها',
    category: 'ui-ux',
    level: 'beginner',
    phonetic: 'وی-ژو-آل های-رار-کی',
    tags: ['typography', 'layout', 'landing-page', 'ui'],
    sequenceOrder: 8,
    learningStation: 'station-2',
    readingTimeMinutes: 1,
    targetPersonas: ['designer', 'founder', 'beginner'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: true,
    elevatorPitch: 'هدایت ناخودآگاه چشم کاربر از تیتر بزرگ، به توضیح کوتاه و نهایتاً به دکمه طلایی خرید.',
    beginnerTrap: 'یکدست کردن سایز و وزن فونت‌ها؛ وقتی همه چیز بزرگ یا همه چیز خاکستری باشد، چشم کاربر گم می‌شود و دکمه خرید را نادیده می‌گیرد!',
    analogy: 'مثل تیتر روزنامه‌ست؛ تیتر یک باید بزرگ‌ترین باشه تا از ده متری بخونیش، نه اینکه کل روزنامه با یک فونت یکنواخت چاپ بشه!',
    humanQuestion: 'چرا وقتی مشتری وارد سایتم می‌شود نمی‌داند اول باید به کجای صفحه نگاه کند و دکمه خرید کجاست؟',
    realPain: 'سایتی که سلسله‌مراتب بصری ندارد، نرخ تبدیل (Conversion Rate) نزدیک به صفر دارد؛ چون کاربر سرگیجه می‌گیرد و بدون کلیک صفحه را می‌بندد.',
    commonAiError: {
      errorSnippet: 'All text nodes have uniform font-size and color: text-base text-gray-400',
      explanationFa: 'هوش مصنوعی همه تیترها و متون رو یکدست و خاکستری رها کرده و هیچ کانون توجهی نساخته!'
    },
    freelanceTip: 'به کارفرما اثبات کن که با چیدمان F-Shape و دکمه CTA کانون توجه، فروش لندینگ تا ۳ برابر رشد می‌کند.',
    asciiDiagram: `[۱. تیتر غول‌آسا H1]  <── در ۳ ثانیه اول دیده می‌شود
        │
[۲. توضیح تک‌خطی آرام] <── رفع ابهام سریع
        │
[۳. دکمه طلایی خرید (CTA)] <── اقدام نهایی`,
    injectionTarget: 'تمپلیت هدر، لندینگ‌پیج‌ها و بخش Hero Section',
    cursorPrompt: `[نقش]: طراح ارشد UX و متخصص نرخ تبدیل (Conversion Rate Specialist).
[زمینه]: بخش Hero Section قالب وردپرس.
[وظیفه]: چیدمان بخش عنوان را با رعایت اکید سلسله‌مراتب بصری بازنویسی کن:
۱. برچسب کوچک طلایی (Eyebrow Tag) در بالا
۲. تیتر اصلی H1 فوق‌العاده بولد و گیرا با فونت درشت
۳. متن توضیح ثانویه با کنتراست ملایم‌تر
۴. دکمه اقدام اصلی (Primary CTA) با افکت درخشان و اندازه بزرگ.
[شروط سلبی]: از متون خاکستری یکنواخت یا دکمه‌های هم‌وزن که کاربر را سردرگم می‌کند پرهیز کن.`,
    claudePrompt: `برای بخش هدر لندینگ، ساختار HTML و کلاس‌های تیل‌ویند را بر اساس الگوی F-Pattern طراحی کن به طوری که اولین چیزی که چشم می‌بیند تیتر و آخرین نقطه توقف دکمه ثبت‌نام باشد.`,
    debugPrompt: `طراحی تولید شده فاقد کانون توجه است و دکمه اصلی در پس‌زمینه محو شده است. لطفاً وزن دکمه CTA را به Primary تغییر بده و تیتر اصلی را حداقل ۳۰٪ بزرگ‌تر کن.`,
    howToTest: {
      steps: [
        'صفحه را باز کنید و چشم‌هایتان را کمی نیمه‌باز (Squint Test) کنید.',
        'آیا اولین چیزی که بدون خواندن کلمات جلب توجه می‌کند دکمه طلایی و تیتر اصلی است؟',
        'اگر بله، سلسله‌مراتب بصری بی‌نقص پیاده‌سازی شده است.'
      ],
      expectedResult: 'نگاه در کمتر از ۱ ثانیه بدون هیچ تلاشی مستقیماً روی دکمه اقدام قفل می‌شود.',
      redFlags: ['چندین دکمه با رنگ‌های تند یکسان در کنار یکدیگر']
    },
    shortDefinition: 'تنظیم اندازه، وزن فونت، رنگ و موقعیت المان‌ها به گونه‌ای که چشم مخاطب مهم‌ترین اطلاعات را اول بخواند.',
    deepExplanation: 'در صفحات فرود وردپرسی، چشم کاربر با یک سلسله‌مراتب استاندارد از تیتر اصلی به توضیح کوتاه و سپس به دکمه طلایی هدایت می‌شود.',
    vibeCodingImpact: 'هوش مصنوعی به طور پیش‌فرض تیترها و متون را در اندازه‌های یکدست رها می‌کند. وایب‌کدر با دیکته کردن مقیاس تایپوگرافی تعادل بصری می‌سازد.',
    goldenPrompt: 'سلسله‌مراتب بصری شفاف ایجاد کن: تیتر H1 فوق‌العاده بزرگ و بولد (text-4xl تا text-6xl)، پاراگراف توضیحی خوانا، و دکمه CTA اصلی با گرادیان طلایی درخشان.',
    codeSnippet: {
      language: 'html',
      description: 'ساختار استاندارد سلسله‌مراتب بصری با کلاس‌های تیل‌ویند',
      runContext: 'Header Component',
      code: "<div class=\"space-y-4 text-center\">\n  <span class=\"text-xs font-semibold text-gold uppercase\">نسل جدید</span>\n  <h1 class=\"text-4xl md:text-6xl font-black text-foreground\">عنوان اصلی کانون توجه</h1>\n  <p class=\"text-lg text-muted-foreground max-w-xl mx-auto\">توضیح ثانویه</p>\n</div>"
    },
    prerequisiteTermIds: ['design-tokens'],
    relatedTermIds: ['design-tokens', 'micro-interactions'],
    seoKeywords: ['سلسله مراتب بصری', 'visual hierarchy', 'طراحی لندینگ پیج', 'چیدمان صفحات وب']
  },
  {
    id: 'micro-interactions',
    termEn: 'Micro-interactions',
    termFa: 'ریزتعاملات و انیمیشن‌های ظریف کاربری',
    category: 'ui-ux',
    level: 'intermediate',
    phonetic: 'مای-کرو این-تِر-اَک-شِنز',
    tags: ['animation', 'delight', 'framer-motion', 'css-transitions'],
    sequenceOrder: 9,
    learningStation: 'station-2',
    readingTimeMinutes: 1,
    targetPersonas: ['designer', 'developer'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: true,
    elevatorPitch: 'حرکات چندمیلی‌ثانیه‌ای دکمه‌ها و کارت‌ها در هاور که حس یک محصول ۱۰۰ میلیونی زنده را به سایت می‌دهند.',
    beginnerTrap: 'انیمیشن‌های سنگین و طولانی بالای ۱ ثانیه؛ کاربر برای کلیک معطل می‌شود و سرعت سایت به شدت افت می‌کند!',
    analogy: 'مثل دست دادن محکم و لبخند زدن یک فروشنده خوش‌برخورد است؛ وقتی دکمه را لمس می‌کنی، به تو حس زنده بودن و پاسخگویی می‌دهد!',
    humanQuestion: 'چرا سایتم خشک، مرده و شبیه وبلاگ‌های عهد بوق به نظر می‌رسد؟',
    realPain: 'تفاوت یک سایت معمولی با یک وب‌سایت پرمیوم صد میلیون تومانی در همین انیمیشن‌های چند میلی‌ثانیه‌ای است؛ بدون این‌ها سایت ارزان به نظر می‌رسد.',
    commonAiError: {
      errorSnippet: 'Instant jumpy hover without transition: hover:bg-gold',
      explanationFa: 'هوش مصنوعی ترنزیشن نرم نذاشته و دکمه با هاور موس چشمک وحشتناک می‌زنه!'
    },
    freelanceTip: 'ریزتعاملات روان و هاورهای طلایی همان چیزی است که مشتری بلافاصله می‌بیند و با اشتیاق پول پرداخت می‌کند.',
    asciiDiagram: `[موس روی دکمه قرار می‌گیرد]
            │
            ▼
- بالا آمدن ۲ پیکسلی نرم (translate-y-0.5)
- درخشش سایه طلایی (shadow-gold)
- زمان ترنزیشن: ۲۰۰ تا ۳۰۰ میلی‌ثانیه`,
    injectionTarget: 'کلاس‌های دکمه‌ها، کارت‌ها، اینپوت‌های فرم و لینک‌های ناوبری',
    cursorPrompt: `[نقش]: توسعه‌دهنده تعاملات کاربری و انیمیشن (UI Interaction Engineer).
[زمینه]: رابط کاربری مدرن با Tailwind v4.
[وظیفه]: به دکمه‌ها و لینک‌های @template-parts/header.php ریزتعاملات ظریف اضافه کن.
[شروط سلبی الزامی]:
- مدت زمان انیمیشن هرگز از ۳۰۰ میلی‌ثانیه بیشتر نشود.
- از تکان دادن شدید صفحه (Layout Jitter) اجتناب کن؛ فقط از transform و opacity برای شتاب‌دهی سخت‌افزاری GPU استفاده کن.
- برای کاربران دارای حساسیت حرکتی، شرط motion-reduce:transition-none را لحاظ کن.
[خروجی]: کلاس‌های تیل‌ویند تست شده و فشرده.`,
    claudePrompt: `کلاس‌های هاور و اکتیو دکمه‌های فرم را به نحوی بنویس که با فشردن کلیک حس فشرده شدن دکمه (scale-95) و در زمان هاور حس شناور شدن (hover:-translate-y-0.5) با ترنزیشن نرم ۲۰۰ میلی‌ثانیه القا شود.`,
    debugPrompt: `انیمیشن‌ها باعث لگ زدن اسکرول و پرش المان‌ها شده‌اند. ترنزیشن را فقط به opacity و transform محدود کن و خصوصیات سنگینی مثل width یا height را از لیست ترنزیشن خارج کن.`,
    howToTest: {
      steps: [
        'نشانگر موس را روی دکمه‌ها حرکت دهید؛ تغییر حالت باید آنی و بسیار نرم (بدون جهش پیکسلی) باشد.',
        'یکبار دکمه را فشار دهید؛ بازخورد کلیک باید مثل دکمه واقعی در دنیای فیزیکی حس شود.',
        'در تنظیمات ویندوز یا مک گزینه Reduce Motion را فعال کنید و بررسی کنید آیا انیمیشن برای افراد حساس غیرفعال می‌شود یا خیر.'
      ],
      expectedResult: 'حرکت نرم در ۶۰ فریم بر ثانیه بدون افت فریم حتی روی گوشی‌های اقتصادی.',
      redFlags: ['چشمک زدن ناگهانی رنگ بدون ترنزیشن', 'انیمیشن‌های کش‌دار و طولانی که دست کاربر را معطل می‌کنند']
    },
    shortDefinition: 'انیمیشن‌ها و بازخوردهای حرکتی ظریف در زمان هاور، کلیک یا کپی که به رابط کاربری حس زنده بودن می‌بخشند.',
    deepExplanation: 'تغییر نرم موقعیت دکمه در زمان هاور (-translate-y-0.5)، درخشش کادرها، و بازخورد تیک سبز حس محصول لوکس را ایجاد می‌کنند.',
    vibeCodingImpact: 'هوش مصنوعی اگر به حال خود رها شود، دکمه‌های خشک و بدون ترنزیشن تحویل می‌دهد. وایب‌کدر با درخواست کلاس‌های transition محصول را لوکس می‌کند.',
    goldenPrompt: 'به تمامی دکمه‌ها و کارت‌ها ریزتعاملات ظریف اضافه کن: در هاور ۳ پیکسل بالا بروند، سایه طلایی ملایم پیدا کنند و ترنزیشن در ۳۰۰ میلی‌ثانیه باشد.',
    codeSnippet: {
      language: 'css',
      description: 'کلاس‌های کاربردی تیل‌ویند برای ساخت هاور و انیمیشن روان',
      runContext: 'Tailwind classes',
      code: "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(212,175,55,0.3)]"
    },
    prerequisiteTermIds: ['design-tokens'],
    relatedTermIds: ['visual-hierarchy', 'design-tokens'],
    seoKeywords: ['ریزتعاملات', 'micro interactions', 'انیمیشن هاور', 'طراحی رابط کاربری لوکس']
  },
  {
    id: 'wcag-contrast',
    termEn: 'WCAG Color Contrast',
    termFa: 'کنتراست استاندارد رنگی دسترسی‌پذیری',
    category: 'ui-ux',
    level: 'intermediate',
    phonetic: 'دَبلیو-سی-اِی-جی کان-ترَست',
    tags: ['accessibility', 'a11y', 'compliance', 'readability'],
    sequenceOrder: 10,
    learningStation: 'station-2',
    readingTimeMinutes: 1,
    targetPersonas: ['designer', 'founder', 'beginner'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    elevatorPitch: 'تضمین تضاد نوری متن و پس‌زمینه، تا کاربران مسن یا افراد در زیر نور آفتاب هم کلمات را مثل بلور بخوانند.',
    beginnerTrap: 'استفاده از متن‌های خاکستری کم‌رنگ روی پس‌زمینه تیره؛ که گوگل سایت را به خاطر نمره پایین دسترسی‌پذیری جریمه می‌کند!',
    analogy: 'مثل نوشتن با گچ سفید روی تخته‌سیاه است؛ اگر با گچ خاکستری روی دیوار طوسی بنویسی هیچ‌کس در ردیف آخر کلاس نمی‌تواند متنت را بخواند!',
    humanQuestion: 'چرا نوشته‌های سایتم روی گوشی و زیر نور آفتاب خوانده نمی‌شوند و چشم را اذیت می‌کنند؟',
    realPain: 'گوگل سایت‌هایی که متون ناخوانا و خاکستری کم‌رنگ دارند را جریمه می‌کند و رتبه سئوی شما در صفحه نتایج سقوط می‌کند.',
    commonAiError: {
      errorSnippet: 'Lighthouse Accessibility Audit: Elements must have sufficient color contrast (ratio < 4.5:1)',
      explanationFa: 'هوش مصنوعی از رنگ خاکستری فوق‌العاده کم‌رنگ استفاده کرده که خوانایی نداره و لایت‌هاوس قرمز شده!'
    },
    freelanceTip: 'نمره ۱۰۰ دسترسی‌پذیری (Accessibility) در گزارش لایت‌هاوس، برگ برنده شما در دفاع از کیفیت فنی در برابر کارفرماست.',
    asciiDiagram: `[پس‌زمینه تیره #090D16] ─── تضاد نوری استاندارد ───> [متن سفید/طلایی با کنتراست بالای ۵:۱]
                                                      │
                                                      ▼
                                       تاییدیه لایت‌هاوس: ۱۰۰٪ سبز`,
    injectionTarget: 'پالت رنگی در globals.css و کلاس‌های رنگی Tailwind',
    cursorPrompt: `[نقش]: حسابرس دسترسی‌پذیری وب و استانداردهای WCAG 2.1 AAA.
[زمینه]: پالت دارک‌مود سایت وردپرسی.
[وظیفه]: رنگ متون کامپوننت @template-parts/card.php را با پس‌زمینه تیره تطبیق بده.
[شروط سلبی الزامی]:
- نسبت کنتراست متن اصلی هرگز نباید کمتر از ۴.۵ به ۱ (سطح AA) باشد.
- برای المان‌های کلیدی و اعداد مهم، کنتراست بالای ۷ به ۱ (سطح AAA) الزامی است.
- از خاکستری‌های محو مانند text-zinc-600 روی پس‌زمینه مشکی استفاده نکن.
[خروجی]: کدهای بهینه‌شده رنگی به همراه عدد نسبت کنتراست محاسبه‌شده.`,
    claudePrompt: `رنگ‌های کامپوننت را مطابق استاندارد WCAG 2.1 AA بازبینی کن. مطمئن شو رنگ متن روی تمام پس‌زمینه‌ها خوانایی کامل دارد و در ابزار Lighthouse نمره ۱۰۰ می‌گیرد.`,
    debugPrompt: `ابزار لایت‌هاوس خطای کنتراست رنگی داده است. لطفاً کدهای رنگی متون ثانویه را یک درجه روشن‌تر کن تا نسبت کنتراست به حداقل ۵ به ۱ برسد.`,
    howToTest: {
      steps: [
        'در مرورگر کروم کلید F12 را بزنید و تب Lighthouse را باز کنید.',
        'تست Accessibility را اجرا کنید.',
        'مطمئن شوید در بخش "Contrast" هیچ خطای قرمزی ثبت نشده و نمره بالای ۹۵ است.'
      ],
      expectedResult: 'چک‌لیست دسترسی‌پذیری کاملاً سبز و بدون خطا است.',
      redFlags: ['هشدار Elements must have sufficient color contrast در گزارش گوگل']
    },
    shortDefinition: 'نسبت تضاد روشنایی میان رنگ متن و پس‌زمینه بر اساس استاندارد بین‌المللی برای خوانایی کامل روی همه نمایشگرها.',
    deepExplanation: 'بر اساس سطح AA استاندارد WCAG، حداقل نسبت کنتراست برای متون عادی باید ۴.۵ به ۱ باشد.',
    vibeCodingImpact: 'هوش مصنوعی علاقه زیادی به متون خاکستری کم‌رنگ دارد که توسط گوگل جریمه می‌شود.',
    goldenPrompt: 'رنگ‌های کامپوننت را مطابق استاندارد WCAG 2.1 AA بررسی کن. کنتراست متن اصلی و رنگ طلایی با پس‌زمینه تاریک باید حداقل ۵ به ۱ باشد.',
    codeSnippet: {
      language: 'css',
      description: 'استفاده از مقادیر رنگی با تضاد نوری تضمین‌شده در فضای oklch',
      runContext: 'colors.css',
      code: "/* متن روشن روی پس‌زمینه فوق‌تیره */\n--bg-dark: oklch(0.12 0.02 270);\n--text-bright: oklch(0.96 0.01 70);"
    },
    prerequisiteTermIds: ['design-tokens'],
    relatedTermIds: ['design-tokens', 'cls-prevention'],
    seoKeywords: ['کنتراست رنگی', 'wcag contrast', 'دسترسی پذیری وب', 'a11y وردپرس']
  },
  {
    id: 'cls-prevention',
    termEn: 'CLS Prevention',
    termFa: 'مهار پرش چیدمان صفحه (Cumulative Layout Shift)',
    category: 'ui-ux',
    level: 'advanced',
    phonetic: 'سی-اِل-اِس پری-وِن-شِن',
    tags: ['performance', 'core-web-vitals', 'layout', 'seo'],
    sequenceOrder: 11,
    learningStation: 'station-2',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'designer', 'founder'],
    isNoCodeFriendly: true,
    isCritical5: true,
    isLanding24h: true,
    elevatorPitch: 'قفل کردن جای عکس‌ها و بنرها قبل از لود شدن، تا صفحه هنگام باز شدن بالا و پایین نپرد.',
    beginnerTrap: 'گذاشتن عکس بدون مشخص کردن طول و عرض یا aspect-ratio؛ وقتی عکس بعد از ۲ ثانیه لود می‌شود، تمام صفحه پرش می‌کند و رتبه سئو نابود می‌شود!',
    analogy: 'حتماً برایت پیش آمده که خواسته‌ای روی یک دکمه کلیک کنی، ناگهان عکسی لود شده، صفحه پریده پایین و دستت به جای دیگری خورده! به این پرش آزاردهنده CLS می‌گویند.',
    humanQuestion: 'چرا وقتی صفحه لود می‌شود، المان‌ها بالا و پایین می‌پرند و گوگل امتیازم را قرمز می‌کند؟',
    realPain: 'پرش صفحه باعث عصبانیت کاربر می‌شود و گوگل سایت‌هایی با CLS بالای ۰.۱ را به راحتی از رتبه‌های اول حذف می‌کند.',
    commonAiError: {
      errorSnippet: 'Cumulative Layout Shift: 0.35 (Poor) due to unsized images and dynamic banners',
      explanationFa: 'هوش مصنوعی تگ عکس رو بدون اندازه گذاشته و وقتی عکس لود میشه، کل صفحه رو هل میده پایین!'
    },
    freelanceTip: 'به کارفرما بگو تضمین می‌کنی CLS سایت روی عدد صفر بماند؛ این یک امتیاز رقابتی است که ۹۰٪ طراحان وردپرس بلد نیستند.',
    asciiDiagram: `[رزرو باکس با aspect-video از همان ثانیه صفر]
                    │
                    ▼
[عکس با خیال راحت لود می‌شود ──> هیچ متنی جابجا نمی‌شود (CLS = 0.00)]`,
    injectionTarget: 'تمپلیت تگ‌های تصویر، بنرها، ویدیوها و اسلایدرها',
    cursorPrompt: `[نقش]: مهندس بهینه‌سازی سرعت هسته وب (Core Web Vitals Specialist).
[زمینه]: تمپلیت تصاویر وردپرس در @single.php.
[وظیفه]: تگ‌های تصاویر شاخص را به نحوی بازنویسی کن که مقدار CLS دقیقاً ۰.۰۰۰ شود.
[شروط سلبی الزامی]:
- هیچ تگ img نباید بدون صفات width و height صریح یا کلاس aspect-ratio باشد.
- برای فونت‌های محلی حتماً font-display: swap را در نظر بگیر تا پرش متن رخ ندهد.
- محفظه تصاویر باید دارای پس‌زمینه نگهدارنده موقت (Placeholder) باشد.
[خروجی]: ساختار استاندارد HTML/Tailwind برای نمایش عکس امن.`,
    claudePrompt: `تمام تگ‌های تصویر این صفحه را بازنویسی کن به طوری که حتی اگر اتصال اینترنت بسیار کند باشد، ساختار و ابعاد المان‌ها از ثانیه اول قفل شده باشند و هیچ پرش چیدمانی رخ ندهد.`,
    debugPrompt: `تست سرعت نشان می‌دهد بنر بالای سایت باعث جابه‌جایی ۵۰ پیکسلی محتوا می‌شود. لطفاً یک کانتینر با ابعاد ثابت یا min-height رزرو شده برای بنر در نظر بگیر تا جابجایی صفر شود.`,
    howToTest: {
      steps: [
        'در تب Network مرورگر سرعت اینترنت را روی "Slow 4G" بگذارید.',
        'صفحه را رفرش کنید و به دقت متن زیر تصاویر را تماشا کنید.',
        'آیا پس از ظاهر شدن عکس، موقعیت متون تکان خورد؟ اگر ثابت ماند، تست با موفقیت پاس شده است.'
      ],
      expectedResult: 'عدد Cumulative Layout Shift در تست لایت‌هاوس کمتر از ۰.۰۵ و سبز باشد.',
      redFlags: ['مشاهده پرش متن‌ها به سمت پایین هنگام ظاهر شدن تصاویر']
    },
    shortDefinition: 'تکنیک‌های جلوگیری از جابه‌جایی ناگهانی المان‌های صفحه هنگام لود شدن تصاویر و فونت‌ها.',
    deepExplanation: 'با تعریف مقادیر دقیق width و height برای تصاویر و استفاده از aspect-ratio در CSS از این خطا به طور کامل جلوگیری می‌شود.',
    vibeCodingImpact: 'هوش مصنوعی تگ‌های img را معمولاً بدون ابعاد تولید می‌کند که مستقیماً وب‌ویتالز را خراب می‌کند.',
    goldenPrompt: 'برای تمام تصاویر و باکس‌های محتوایی، نسبت ابعاد دقیق (aspect-ratio) رزرو کن تا مقدار CLS سایت در لایت‌هاوس روی عدد صفر باقی بماند.',
    codeSnippet: {
      language: 'html',
      description: 'رزرو فضای تصویر با aspect-ratio در تیل‌ویند',
      runContext: 'Image wrapper',
      code: "<div class=\"relative w-full aspect-video overflow-hidden rounded-2xl bg-surface\">\n  <img src=\"banner.webp\" width=\"1280\" height=\"720\" alt=\"...\" class=\"object-cover w-full h-full\" loading=\"lazy\" />\n</div>"
    },
    prerequisiteTermIds: ['design-tokens'],
    relatedTermIds: ['skeleton-loading', 'wcag-contrast'],
    seoKeywords: ['پرش چیدمان', 'cls وردپرس', 'core web vitals cls', 'بهینه سازی لایت هاوس']
  },
  {
    id: 'skeleton-loading',
    termEn: 'Skeleton Screen Loading',
    termFa: 'بارگذاری با اسکلت خاکستری المان‌ها',
    category: 'ui-ux',
    level: 'intermediate',
    phonetic: 'اِسکِلِـتون سکرین لو-دینگ',
    tags: ['ux', 'perceived-performance', 'animation', 'async'],
    sequenceOrder: 12,
    learningStation: 'station-2',
    readingTimeMinutes: 1,
    targetPersonas: ['designer', 'developer', 'beginner'],
    isNoCodeFriendly: true,
    isCritical5: false,
    isLanding24h: false,
    elevatorPitch: 'شبیه‌سازی فرم محتوا با کادرهای محو در حال پالس، تا کاربر بداند چه اطلاعاتی در راه است و معطل نشود.',
    beginnerTrap: 'استفاده از دایره‌های چرخان اسپینر تمام‌صفحه؛ این کار حس کندی سایت را ۲ برابر می‌کند و باعث فرار کاربر می‌شود!',
    analogy: 'مثل مانکن پشت ویترین مغازه است که فرم لباس را نشان می‌دهد تا متوجه شوی چه جنسی در راه است، نه اینکه یک پرده سیاه بکشی و بگویی صبر کن!',
    humanQuestion: 'چطور به جای لودینگ‌های چرخان خسته‌کننده، حس سرعت بالا به کاربر منتقل کنم؟',
    realPain: 'اسپینرهای دایره‌ای حس معطلی را ۲ برابر می‌کنند و باعث خروج کاربران کم‌حوصله از سایت می‌شوند.',
    commonAiError: {
      errorSnippet: 'Using full-screen spinner overlay blocking entire interaction',
      explanationFa: 'هوش مصنوعی کل صفحه رو قفل کرده و یه لودینگ قدیمی گذاشته که حوصله کاربر سر میره!'
    },
    freelanceTip: 'طراحی اسکلتون اختصاصی، سایت وردپرسی شما را هم‌سطح محصولاتی مثل یوتیوب و لینکدین جلوه می‌دهد.',
    asciiDiagram: `[درخواست داده از دیتابیس / REST API]
                 │
  ┌──────────────┴──────────────┐
  ▼                             ▼
[نمایش اسکلتون پالس‌زننده]     [لود کامل داده‌ها]
(کاربر حس معطلی نمی‌کند)      (جایگزینی نرم بدون پرش)`,
    injectionTarget: 'کامپوننت‌های ایجکسی، لیست محصولات، و کارت‌های پست در فرانت‌اند',
    cursorPrompt: `[نقش]: طراح تجربه کاربری مدرن فرانت‌اند (Frontend UX Engineer).
[زمینه]: کارت‌های مقالات وردپرس با دریافت ایجکس داده‌ها.
[وظیفه]: برای کامپوننت کارت مقاله، یک نسخه Skeleton Loading تمیز با انیمیشن پالس بنویس.
[شروط سلبی الزامی]:
- ابعاد اسکلتون (ارتفاع تصویر، خطوط تیتر و پاراگراف) باید مو به مو مطابق کارت واقعی باشد تا جایگزینی بدون پرش چیدمان انجام شود.
- از پس‌زمینه‌های تیره ملایم متناسب با تم تاریک (bg-white/5 و animate-pulse) استفاده کن.
[خروجی]: کامپوننت سبک سازگار با فرانت‌اند قالب.`,
    claudePrompt: `یک ماژول اسکلتون لودینگ برای لیست محصولات ووکامرس بساز که دقیقاً شکل ۳ ستونه محصولات را با انیمیشن پالس شبیه‌سازی کند.`,
    debugPrompt: `وقتی داده‌ها لود می‌شوند کارت واقعی با اسکلتون اختلاف ارتفاع دارد و صفحه پرش می‌کند. ارتفاع باکس عکس و خطوط متنی اسکلتون را دقیقاً با اندازه کارت واقعی هماهنگ کن.`,
    howToTest: {
      steps: [
        'در تب Network مرورگر سرعت را به Slow 3G کاهش دهید.',
        'صفحه دسته‌بندی را رفرش کنید و به نمایش اسکلتون خاکستری قبل از آمدن متون دقت کنید.',
        'پس از آمدن داده‌ها، نباید هیچ جابه‌جایی یا پرشی در صفحه رخ دهد.'
      ],
      expectedResult: 'کارت‌های اسکلتون با پالس نوری ملایم ظاهر شده و محتوای اصلی به آرامی جایگزین آن می‌شود.',
      redFlags: ['اسکلتونی که ابعادش کوچکتر یا بزرگتر از کارت واقعی است']
    },
    shortDefinition: 'نمایش جعبه‌های خاکستری با انیمیشن پالس نوری در محل محتوا تا زمان دریافت کامل اطلاعات از سرور.',
    deepExplanation: 'اسکلتون حس معطلی کاربر را تا ۵۰ درصد کاهش می‌دهد و کاربر ساختار صفحه را پیش از لود حس می‌کند.',
    vibeCodingImpact: 'در سایت‌های متصل به API، پیاده‌سازی اسکلتون تمیز سایت شما را به کلاس شرکت‌های مطرح ارتقا می‌دهد.',
    goldenPrompt: 'یک کامپوننت Skeleton Loading با افکت پالس نوری (animate-pulse) برای کارت‌های پست با کلاس‌های Tailwind طراحی کن.',
    codeSnippet: {
      language: 'html',
      description: 'کامپوننت اسکلتون تمیز با انیمیشن پالس بومی تیل‌ویند',
      runContext: 'SkeletonCard.tsx',
      code: "<div class=\"p-6 rounded-2xl border border-white/10 bg-surface/50 animate-pulse space-y-4\">\n  <div class=\"h-44 bg-white/10 rounded-xl w-full\"></div>\n  <div class=\"h-6 bg-white/10 rounded w-3/4\"></div>\n  <div class=\"h-4 bg-white/10 rounded w-1/2\"></div>\n</div>"
    },
    prerequisiteTermIds: ['cls-prevention'],
    relatedTermIds: ['cls-prevention', 'micro-interactions'],
    seoKeywords: ['اسکلتون لودینگ', 'skeleton loading', 'انیمیشن لود صفحه', 'تجربه کاربری بارگذاری']
  },
  {
    id: 'interaction-to-next-paint',
    termEn: 'INP (Interaction to Next Paint)',
    termFa: 'شاخص پاسخگویی آنی رابط کاربری به کلیک (INP)',
    category: 'ui-ux',
    level: 'intermediate',
    phonetic: 'آی-اِن-پی (INP)',
    tags: ['core-web-vitals', 'performance', 'inp', 'responsiveness', 'javascript'],
    sequenceOrder: 17,
    learningStation: 'station-2',
    readingTimeMinutes: 2,
    targetPersonas: ['developer', 'designer'],
    isNoCodeFriendly: true,
    elevatorPitch: 'آزمون اعصاب کاربر! وقتی روی دکمه «افزودن به سبد خرید» یا منو کلیک می‌کنید، چقدر طول می‌کشد تا صفحه تکان بخورد و واکنش نشان دهد؟ شاخص رسمی گوگل برای جریمه کردن سایت‌های بی‌حس و فریز شده!',
    beginnerTrap: 'اجرای کارهای سنگین جاوااسکریپت مستقیماً روی رویداد onClick بدون دادن فیدبک بصری فوری؛ کاربر فکر می‌کند دکمه خراب است و ۵ بار پشت هم کلیک می‌کند!',
    analogy: 'مثل زدن زنگ در یک خانه است؛ اگر زنگ صدا ندهد، شما مدام دکمه را فشار می‌دهید. یک رابط خوب بلافاصله صدای دینگ (اسپینر یا انیمیشن کلیک) می‌دهد.',
    humanQuestion: 'چرا با اینکه سایتم سریع لود می‌شود، گوگل خطای پرفورمنس INP می‌دهد؟',
    realPain: 'گوگل در سال ۲۰۲۴ شاخص FID را با INP جایگزین کرد؛ سایت‌هایی که به کلیک کاربران دیرتر از ۲۰۰ میلی‌ثانیه واکنش نشان دهند، رتبه سئوی خود را از دست می‌دهند.',
    commonAiError: {
      errorSnippet: 'Long task blocked main thread for 340ms on click event',
      explanationFa: 'هوش مصنوعی عملیات سنگین را بدون requestAnimationFrame اجرا کرده و صفحه ۲۰۰ میلی‌ثانیه قفل شده!'
    },
    freelanceTip: 'به کارفرما بگو سایت او برای استاندارد رسمی Core Web Vitals سال ۲۰۲۴ گوگل (زیر ۲۰۰ میلی‌ثانیه) بهینه‌سازی شده است.',
    asciiDiagram: `[کاربر کلیک می‌کند]
        │
        ▼
[تغییر فوری ظاهر دکمه: حالت لودینگ در ۱۰ میلی‌ثانیه]  <── (پاسخگویی سبز INP < 200ms)
        │
        ▼
[انجام محاسبات در پس‌زمینه با setTimeout یا Worker]`,
    injectionTarget: 'رویدادهای کلیک، فرم‌ها و انیمیشن‌های تعاملی در جاوااسکریپت',
    universalPrompt: `[ROLE]: Google Core Web Vitals & INP Specialist.
[TASK]: Optimize this button click interaction to guarantee INP under 100ms.
[NEGATIVE CONSTRAINTS]:
- Do not block the main thread with synchronous loops.
- Yield execution using "setTimeout()" or "requestIdleCallback()" for non-critical logging.
- Show immediate visual feedback (active state or spinner) before firing network requests.
[OUTPUT]: High-responsiveness event handler.`,
    agentsMdRule: `# شاخص INP در AGENTS.md:
تمامی اکشن‌های کلیک، بستن مودال‌ها و ارسال فرم‌ها باید در کمتر از ۵۰ میلی‌ثانیه بازخورد بصری داشته باشند و ترید اصلی مرورگر نباید با تسک‌های طولانی مسدود شود.`,
    cursorPrompt: `Refactor this click handler to yield to the main thread and keep INP green.`,
    claudePrompt: `Explain how to diagnose and fix INP bottlenecks on this WooCommerce interactive cart drawer.`,
    debugPrompt: `شاخص INP در گزارش لایت‌هاوس قرمز است. توابع مسدودکننده داخل رویداد کلیک را به صورت غیرهمگام بازنویسی کن.`,
    howToTest: {
      steps: [
        'تب Performance را در ابزار DevTools مرورگر باز کنید.',
        'روی دکمه کلیک کنید و شاخص Interactions را بررسی نمایید.',
        'مدت زمان تاخیر باید حتماً زیر ۲۰۰ میلی‌ثانیه (حالت بهینه زیر ۱۰۰ میلی‌ثانیه) باشد.'
      ],
      expectedResult: 'واکنش فوق‌سریع و بدون فریز به کلیک کاربر.',
      redFlags: ['قفل شدن نشانگر ماوس یا تاخیر طولانی پس از کلیک']
    },
    shortDefinition: 'شاخص رسمی Core Web Vitals گوگل برای سنجش میزان تاخیر پاسخگویی رابط کاربری به کلیک‌ها و لمس‌های کاربر در کل طول حضور در صفحه.',
    deepExplanation: 'شاخص INP طولانی‌ترین تاخیر تعاملی در تمام مدت حضور کاربر در سایت را می‌سنجد و برخلاف FID، کل تعاملات صفحه را مانیتور می‌کند.',
    vibeCodingImpact: 'کسب اطمینان از سئوی عالی و حفظ رتبه‌های اول گوگل در به‌روزرسانی‌های جدید الگوریتم رتبه‌بندی.',
    goldenPrompt: 'یک دکمه تعاملی با جاوااسکریپت بنویس که بلافاصله با کلیک تغییر وضعیت دهد و درخواست سرور را در پس‌زمینه بدون مسدودسازی ترید اصلی بفرستد.',
    codeSnippet: {
      language: 'javascript',
      description: 'واکنش فوری به کلیک برای حفظ شاخص سبز INP',
      runContext: 'interactions.js',
      code: "btn.addEventListener('click', (e) => {\n  // بازخورد بصری آنی در ۵ میلی‌ثانیه\n  btn.classList.add('opacity-75', 'cursor-wait');\n  // واگذاری کار سنگین به ترید آزاد مرورگر\n  setTimeout(() => { processHeavyTask(); }, 0);\n});"
    },
    prerequisiteTermIds: ['cls-prevention'],
    relatedTermIds: ['cls-prevention', 'skeleton-loading'],
    seoKeywords: ['inp وردپرس', 'interaction to next paint', 'بهینه سازی core web vitals', 'رفع تاخیر کلیک']
  },
  {
    id: 'touch-target-mobile',
    termEn: 'Mobile Touch Targets (48x48px Standard)',
    termFa: 'استاندارد المان‌های لمسی در موبایل (حداقل ۴۸×۴۸ پیکسل)',
    category: 'ui-ux',
    level: 'beginner',
    phonetic: 'تاچ تارگت موبایل',
    tags: ['mobile-ux', 'touch-target', 'ergonomics', 'accessibility', 'wcag'],
    sequenceOrder: 18,
    learningStation: 'station-2',
    readingTimeMinutes: 2,
    targetPersonas: ['designer', 'developer', 'beginner'],
    isNoCodeFriendly: true,
    elevatorPitch: 'طراحی برای شست انسان، نه سوزن خیاطی! تمام دکمه‌ها و لینک‌های موبایل باید حداقل ابعاد ۴۸×۴۸ پیکسل داشته باشند تا کاربر بدون اعصاب‌خردی و اشتباهی لمس کردن دکمه بغلی، بتواند خرید کند.',
    beginnerTrap: 'گذاشتن دکمه‌های کوچک ۱۰ پیکسلی در کنار هم در فوتر یا منو؛ کاربر می‌خواهد روی سبد خرید بزند اما اشتباهی روی دکمه خروج کلیک می‌کند!',
    analogy: 'مثل کلیدهای آسانسور است؛ کلیدها باید آنقدر بزرگ باشند که حتی با دستکش هم به راحتی فشرده شوند، نه اینکه مثل شماره‌گیر ساعت مچی کوچک باشند!',
    humanQuestion: 'چرا نرخ تبدیل خریداران موبایلی سایت من پایین است و سبد را رها می‌کنند؟',
    realPain: 'بیش از ۷۰ درصد ترافیک وب موبایلی است؛ اگر انگشت شست کاربر نتواند دکمه نهایی پرداخت را راحت لمس کند، صفحه را می‌بندد و از رقیب خرید می‌کند.',
    commonAiError: {
      errorSnippet: 'Google Lighthouse audit failed: Tap targets are not sized appropriately',
      explanationFa: 'هوش مصنوعی دکمه‌ها را برای دسکتاپ کوچک طراحی کرده و در موبایل به سختی لمس می‌شوند!'
    },
    freelanceTip: 'به کارفرما گزارش بده که با اصلاح تاچ‌تارگت‌های موبایل، نرخ سبد خریدهای تکمیل‌شده تا ۲۵ درصد رشد می‌کند.',
    asciiDiagram: `[روش اشتباه: دکمه ۲۰ پیکسلی] ──> کلیک اشتباه روی لینک کناری ──> عصبانیت کاربر ❌
[استاندارد طلایی: ۴۸×۴۸ پیکسل] ──> لمس نرم و مقتدرانه با شست دست ──> تکمیل خرید ✓`,
    injectionTarget: 'استایل‌های کلاس‌های دکمه و لینک در فایل‌های CSS یا Tailwind',
    universalPrompt: `[ROLE]: Mobile UX Ergonomics & Accessibility Specialist.
[TASK]: Audit and style all interactive mobile controls (buttons, inputs, hamburger menu) to guarantee a minimum bounding box of 48x48px touch target.
[NEGATIVE CONSTRAINTS]:
- Maintain proper visual padding without disrupting the compact design.
- Comply strictly with WCAG 2.1 AAA touch target guidelines.
[OUTPUT]: Mobile-first ergonomic CSS classes.`,
    agentsMdRule: `# ارگونومی موبایل در AGENTS.md:
تمامی عناصر قابل کلیک و تعاملی در صفحات زیر ۷۶۸ پیکسل، باید دارای حداقل ابعاد ۴۴ تا ۴۸ پیکسل برای ناحیه لمس (Touch Target) باشند.`,
    cursorPrompt: `Ensure all icon buttons have an invisible padding or min-h-[48px] min-w-[48px] touch area in mobile view.`,
    claudePrompt: `Review this mobile navigation bar for WCAG touch target spacing compliance.`,
    debugPrompt: `گوگل هشدار تاچ‌تارگت کوچک داده است. ناحیه کلیک‌پذیر لینک‌ها را با padding یا pseudo-elements به ۴۸ پیکسل ارتقا بده.`,
    howToTest: {
      steps: [
        'سایت را در گوشی هوشمند واقعی باز کنید.',
        'سعی کنید با انگشت شست دست راست، روی منو و دکمه‌ها کلیک کنید.',
        'آیا بدون کوچک‌ترین زحمت و بدون لمس اشتباهی المان کناری، اکشن‌ها انجام می‌شوند؟'
      ],
      expectedResult: 'تجربه کاربری فوق‌العاده راحت با ارگونومی استاندارد موبایل.',
      redFlags: ['دکمه‌های فشرده و چسبیده به هم در رزولوشن‌های موبایل']
    },
    shortDefinition: 'استاندارد ارگونومی رابط کاربری برای تضمین اندازه مناسب المان‌های کلیک‌پذیر در نمایشگرهای لمسی.',
    deepExplanation: 'میانگین عرض نوک انگشت انسان بین ۱۰ تا ۱۴ میلی‌متر است. استاندارد ۴۸ پیکسلی این اطمینان را می‌دهد که لمس بدون خطای بصری ثبت می‌شود.',
    vibeCodingImpact: 'افزایش چشمگیر نرخ فروش و رضایت کاربران در پلتفرم‌های موبایلی.',
    goldenPrompt: 'کلاس‌های تیل‌ویند این دکمه را به نحوی بنویس که در موبایل حداقل اندازه ۴۸×۴۸ پیکسل با حاشیه کافی داشته باشد.',
    codeSnippet: {
      language: 'html',
      description: 'کلاس استاندارد تیل‌ویند برای تاچ‌تارگت ارگونومیک موبایل',
      runContext: 'button.html',
      code: "<button class=\"min-h-[48px] min-w-[48px] px-5 py-3 rounded-2xl bg-gradient-gold text-black font-bold flex items-center justify-center\">\n  <span>افزودن به سبد خرید</span>\n</button>"
    },
    prerequisiteTermIds: ['design-tokens'],
    relatedTermIds: ['design-tokens', 'fitts-law-cta'],
    seoKeywords: ['touch target mobile', 'ابعاد استاندارد دکمه در موبایل', 'ارگونومی طراحی سایت', 'سئو موبایل وردپرس']
  }
];
