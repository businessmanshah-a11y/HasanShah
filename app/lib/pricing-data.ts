export type PricingCategoryKey = "personal" | "corporate" | "service" | "shop" | "app";

export interface PricingTier {
  id: string;
  name: string;
  nameEn: string;
  nameAr: string;
  priceFormatted: string;
  priceFormattedEn: string;
  priceFormattedAr: string;
  subtitle: string;
  subtitleEn: string;
  subtitleAr: string;
  target: string;
  targetEn: string;
  targetAr: string;
  highlight?: boolean;
  features: string[];
  featuresEn: string[];
  featuresAr: string[];
  sampleName?: string;
  sampleNameEn?: string;
  sampleNameAr?: string;
  sampleLink?: string;
  consultationType: "personal" | "landing" | "service" | "shop" | "app" | "startup";
  budgetTier: "tier1" | "tier2" | "tier3" | "tier4";
}

export interface PricingCategory {
  id: PricingCategoryKey;
  title: string;
  titleEn: string;
  titleAr: string;
  badge: string;
  badgeEn: string;
  badgeAr: string;
  description: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: "User" | "Building2" | "CalendarCheck" | "ShoppingBag" | "Cpu";
  tiers: PricingTier[];
}

export interface AddonItem {
  id: string;
  title: string;
  titleEn: string;
  titleAr: string;
  price: string;
  priceEn: string;
  priceAr: string;
  desc: string;
  descEn: string;
  descAr: string;
  badge: string;
  badgeEn: string;
  badgeAr: string;
}

export interface ComparisonDimension {
  dimension: string;
  dimensionEn: string;
  dimensionAr: string;
  customCode: string;
  customCodeEn: string;
  customCodeAr: string;
  templateTheme: string;
  templateThemeEn: string;
  templateThemeAr: string;
  winner: "custom";
}

export interface FaqItem {
  q: string;
  qEn: string;
  qAr: string;
  a: string;
  aEn: string;
  aAr: string;
}

export interface SupportFeatureItem {
  title: string;
  titleEn: string;
  titleAr: string;
  desc: string;
  descEn: string;
  descAr: string;
}

export interface SupportMaintenanceData {
  badge: string;
  badgeEn: string;
  badgeAr: string;
  title: string;
  titleEn: string;
  titleAr: string;
  freeBadge: string;
  freeBadgeEn: string;
  freeBadgeAr: string;
  externalTitle: string;
  externalTitleEn: string;
  externalTitleAr: string;
  priceRange: string;
  priceRangeEn: string;
  priceRangeAr: string;
  priceNote: string;
  priceNoteEn: string;
  priceNoteAr: string;
  features: SupportFeatureItem[];
  outOfScopeNotice: string;
  outOfScopeNoticeEn: string;
  outOfScopeNoticeAr: string;
}

export const ANNUAL_SUPPORT_DATA: SupportMaintenanceData = {
  badge: "خدمات پشتیبانی فنی و پایش سالانه",
  badgeEn: "Annual Technical Support & Maintenance",
  badgeAr: "خدمات الدعم الفني والصيانة السنوية",
  title: "پشتیبانی، مانیتورینگ و نگهداری تخصصی وب‌سایت",
  titleEn: "Specialized Website Care, Uptime & Performance Retainer",
  titleAr: "رعاية ومتابعة فنية متخصصة للموقع على مدار العام",
  freeBadge: "برای پروژه‌های اختصاصی استودیو حسن شاهمرادی: ۱ سال کامل رایگان",
  freeBadgeEn: "For Hasan Shahmoradi Studio clients: 1 Full Year Included Free",
  freeBadgeAr: "لمشاريع استوديو حسن شهمرادي: سنة كاملة مجاناً بالكامل",
  externalTitle: "تعرفه برای سال دوم به بعد یا وب‌سایت‌های بیرونی",
  externalTitleEn: "Annual Retainer for Year 2+ or External Web Platforms",
  externalTitleAr: "التكلفة السنوية بعد العام الأول أو للمواقع الخارجية",
  priceRange: "سالانه ۵۰ تا ۱۰۰ میلیون تومان",
  priceRangeEn: "$1,650 – $3,300 / Year",
  priceRangeAr: "$1,650 – $3,300 سنوياً",
  priceNote: "بسته به تعداد محصولات، گستردگی خدمات و حجم ترافیک ماهانه سایت",
  priceNoteEn: "Priced dynamically according to catalog size, monthly traffic, and operational load",
  priceNoteAr: "تحدد القيمة حسب عدد المنتجات، نطاق الخدمات وحجم الزيارات الشهرية",
  features: [
    {
      title: "بهینه‌سازی مستمر سرعت و پرفورمنس",
      titleEn: "Continuous Speed & Performance Tuning",
      titleAr: "تحسين مستمر لسرعة وكفاءة الموقع",
      desc: "تنظیم کشینگ، بهینه‌سازی دیتابیس و حفظ سرعت لود لایتنینگ در تمام طول سال.",
      descEn: "Caching optimization, database query tuning, and preserving sub-second speed all year.",
      descAr: "ضبط التخزين المؤقت، تحسين قواعد البيانات والحفاظ على سرعة التحميل الفائقة.",
    },
    {
      title: "پایش بلادرنگ و مراقبت در ترافیک بالا",
      titleEn: "Real-Time Monitoring & Peak Traffic Care",
      titleAr: "مراقبة حية وحماية خلال فترات الضغط العالي",
      desc: "مانیتورینگ ۲۴/۷ سرور و مراقبت اختصاصی از پایداری سایت در حراج‌ها و کمپین‌ها.",
      descEn: "24/7 server health tracking and dedicated stability assurance during peak sales and marketing campaigns.",
      descAr: "مراقبة مستمرة على مدار الساعة لحماية استقرار الموقع في أوقات التخفيضات والإعلانات.",
    },
    {
      title: "به‌روزرسانی‌های فنی هسته و پچ‌های امنیتی",
      titleEn: "Core Tech Updates & Security Patching",
      titleAr: "تحديثات برمجية ورقع أمان دورية",
      desc: "ارتقای مداوم پکیج‌ها، ایمن‌سازی ضد باگ و مقابله فعال با نفوذ و حملات سایبری.",
      descEn: "Regular security patches, software library upgrades, and proactive hardening against vulnerabilities.",
      descAr: "ترقية دورية للحزم البرمجية، إغلاق الثغرات ومكافحة محاولات الاختراق بفعالية.",
    },
    {
      title: "رفع فوری باگ‌ها، خطاها و عیب‌یابی",
      titleEn: "Rapid Incident Response & Bug Fixes",
      titleAr: "معالجة فورية للأخطاء والأعطال الطارئة",
      desc: "اولویت فوری در تیکت‌های پشتیبانی و برطرف کردن سریع هرگونه اشکال کارکردی.",
      descEn: "High-priority support ticketing to immediately isolate and resolve any technical anomalies.",
      descAr: "أولوية قصوى لتذاكر الدعم الفني لحل أي خلل وظيفي أو مشكلة برمجية فوراً.",
    },
    {
      title: "مدیریت و به‌روزرسانی محصولات و محتوا",
      titleEn: "Ongoing Content & Product Management",
      titleAr: "إدارة وتحديث المنتجات والمحتوى الدوري",
      desc: "انجام تغییرات مداوم متون، بارگذاری کاتالوگ جدید کالاها و اصلاح قیمت‌ها.",
      descEn: "Assisting with catalog updates, product uploads, rate adjustments, and editorial additions.",
      descAr: "مساعدة مستمرة في رفع المنتجات الجديدة، تحديث الأسعار وإضافة المحتوى المطلوب.",
    },
  ],
  outOfScopeNotice: "توجه شفاف: اضافه کردن قابلیت‌ها و فیچرهای جدید نرم‌افزاری جزو این پکیج پشتیبانی نیست و برآورد فنی و مالی مجزا دارد.",
  outOfScopeNoticeEn: "Scope Note: Developing brand-new software features, standalone modules, or major redesigns is outside this maintenance retainer and scoped separately.",
  outOfScopeNoticeAr: "تنويه شفاف: إضافة ميزات برمجية جديدة كلياً أو وحدات إضافية ليست مشمولة في هذا العقد وتتطلب اتفاقاً مستقلاً.",
};

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "personal",
    title: "پورتفولیو و برند شخصی",
    titleEn: "Portfolio & Personal Brand",
    titleAr: "الملف التعريفي والعلامة الشخصية",
    badge: "شوکیس آنلاین و اعتبار فردی",
    badgeEn: "Online Showcase & Authority",
    badgeAr: "العرض الشخصي والموثوقية",
    description: "طراحی پرستیژ دیجیتال، رزومه تعاملی و شوکیس تخصصی برای مدیران، پزشکان، هنرمندان و متخصصان.",
    descriptionEn: "Bespoke personal platforms, interactive CVs, and authority hubs for executives and creators.",
    descriptionAr: "مواقع شخصية مخصصة، ملفات أعمال تفاعلية وواجهات رقمية فاخرة للقادة والمبدعين.",
    icon: "User",
    tiers: [
      {
        id: "personal-essential",
        name: "پورتفولیو اختصاصی پایه",
        nameEn: "Essential Bespoke Portfolio",
        nameAr: "الملف المخصص الأساسي",
        priceFormatted: "۳۵ تا ۵۰ میلیون تومان",
        priceFormattedEn: "$1,600 – $2,500",
        priceFormattedAr: "$1,600 – $2,500",
        subtitle: "تحویل ۱۴ الی ۲۱ روز کاری",
        subtitleEn: "14 – 21 business days",
        subtitleAr: "١٤ إلى ٢١ يوم عمل",
        target: "متخصصان و مدیران مستقل نیازمند معرفی استاندارد.",
        targetEn: "Independent professionals seeking a clean, fast profile.",
        targetAr: "للمحترفين الباحثين عن حضور شخصي أنيق وسريع.",
        features: [
          "دیزاین ۱۰۰٪ اختصاصی و هویت بصری یکتا",
          "کدنویسی سبک PHP (بدون المنتور)",
          "شوکیس نمونه‌کارها با دسته‌بندی هوشمند",
          "رزومه تعاملی با دانلود PDF استاندارد",
          "سرعت بارگذاری لایتنینگ و سازگاری موبایل",
          "فرم ارتباطی امن متصل به تلگرام و پیامک",
        ],
        featuresEn: [
          "100% custom UI/UX tailored to your persona",
          "Lightweight PHP codebase (Zero Elementor)",
          "Interactive portfolio with smart category filtering",
          "Integrated CV with dynamic PDF export",
          "Sub-second load times & mobile perfection",
          "Secure contact form synced with Telegram/SMS",
        ],
        featuresAr: [
          "تصميم مخصص بالكامل لهويتك المستقلة",
          "برمجة خفيفة بتقنية PHP (بلا إضافات ثقيلة)",
          "معرض أعمال تفاعلي بتصنيف ذكي",
          "سيرة ذاتية تفاعلية مع تحميل PDF",
          "سرعة تحميل فائقة وتوافق تام للهواتف",
          "نموذج تواصل آمن مرتبط بتيليغرام والرسائل",
        ],
        sampleName: "مشاهده نمونه‌های زنده در پورتفولیو",
        sampleNameEn: "View Live Work in Portfolio",
        sampleNameAr: "معاينة النماذج الحية في المعرض",
        sampleLink: "/portfolio/",
        consultationType: "personal",
        budgetTier: "tier1",
      },
      {
        id: "personal-pro",
        name: "برند شخصی لوکس و تعاملی",
        nameEn: "Luxury Interactive Brand Hub",
        nameAr: "العلامة الشخصية الفاخرة التفاعلية",
        priceFormatted: "۵۰ تا ۷۵ میلیون تومان",
        priceFormattedEn: "$3,200 – $4,800",
        priceFormattedAr: "$3,200 – $4,800",
        subtitle: "تحویل ۲۱ الی ۳۰ روز کاری",
        subtitleEn: "21 – 30 business days",
        subtitleAr: "٢١ إلى ٣٠ يوم عمل",
        target: "مدیران ارشد، پزشکان و مشاوران پیشرو.",
        targetEn: "Top executives, surgeons, and thought leaders.",
        targetAr: "للشخصيات البارزة، كبار الأطباء والمستشارين.",
        features: [
          "تمامی امکانات پایه با هویت بصری لوکس‌تر",
          "تایپوگرافی سینمایی و اینترکشن‌های سفارشی",
          "موتور وبلاگ سبک اختصاصی سئومحور",
          "رزرو آنلاین نوبت مشاوره با درگاه پرداخت بیعانه",
          "اتصال به خبرنامه و سیستم لیدجنریشن",
          "۳ ماه گارانتی و پشتیبانی فنی مستقیم",
        ],
        featuresEn: [
          "All Essential features with elevated visual identity",
          "Cinematic typography & custom micro-interactions",
          "Dedicated lightweight SEO blog engine",
          "Online consultation booking & deposit payment",
          "Automated newsletter and lead capture funnels",
          "3 months direct technical warranty",
        ],
        featuresAr: [
          "جميع مزايا الأساسية مع هوية فاخرة",
          "تنسيق سينمائي وتفاعلات دقيقة متطورة",
          "محرك مقالات خفيف مهيأ لمحركات البحث",
          "حجز استشارات إلكتروني مع دفع العربون",
          "ربط بنشرات البريد وأدوات جذب العملاء",
          "٣ أشهر ضمان فني ومتابعة مباشرة",
        ],
        sampleName: "مشاهده نمونه‌های زنده در پورتفولیو",
        sampleNameEn: "View Live Work in Portfolio",
        sampleNameAr: "معاينة النماذج الحية في المعرض",
        sampleLink: "/portfolio/",
        consultationType: "personal",
        budgetTier: "tier2",
      },
      {
        id: "personal-3d",
        name: "پورتفولیو کریتیو با المان ۳D",
        nameEn: "Creative Dev & 3D WebGL Portfolio",
        nameAr: "الملف الإبداعي ثلاثي الأبعاد (WebGL)",
        priceFormatted: "۷۵ تا ۱۱۰ میلیون تومان",
        priceFormattedEn: "$5,500 – $8,800",
        priceFormattedAr: "$5,500 – $8,800",
        subtitle: "تحویل ۳۰ الی ۴۵ روز کاری",
        subtitleEn: "30 – 45 business days",
        subtitleAr: "٣٠ إلى ٤٥ يوم عمل",
        target: "آرتیست‌ها، معماران و برندهای لوکس.",
        targetEn: "Creative technologists, architects, and luxury makers.",
        targetAr: "للمعماريين والفنانين الباحثين عن إبهار بصري.",
        highlight: true,
        features: [
          "تمامی امکانات پلن لوکس با جلوه‌های ویژه وب",
          "ادغام آبجکت ۳D تعاملی (Three.js / WebGL)",
          "انیمیشن‌های اسکرول‌محور سینمایی (Scrollytelling)",
          "ترنزیشن‌های بدون رفرش شبیه وب‌اپلیکیشن",
          "طراحی صدا و اینترکشن‌های صوتی ملایم",
          "۶ ماه پشتیبانی فنی و بهینه‌سازی GPU",
        ],
        featuresEn: [
          "All Luxury features plus cutting-edge web visual FX",
          "Interactive 3D model viewport (Three.js / WebGL)",
          "Cinematic scrollytelling timelines",
          "Zero-reload seamless page transitions",
          "Subtle spatial audio triggers (optional)",
          "6 months dedicated support & GPU optimization",
        ],
        featuresAr: [
          "مزايا الفاخرة مع مؤثرات ويب بصرية متقدمة",
          "مجسم ثلاثي الأبعاد تفاعلي (Three.js / WebGL)",
          "حركات سينمائية متزامنة مع التمرير",
          "انتقالات فائقة السلاسة بدون إعادة تحميل",
          "مؤثرات صوتية هادئة وتفاعلية",
          "٦ أشهر دعم فني وضبط كفاءة معالجة الرسوم",
        ],
        sampleName: "مشاهده نمونه‌های زنده در پورتفولیو",
        sampleNameEn: "View Live 3D Work in Portfolio",
        sampleNameAr: "معاينة نماذج 3D في المعرض",
        sampleLink: "/portfolio/",
        consultationType: "personal",
        budgetTier: "tier2",
      },
    ],
  },
  {
    id: "corporate",
    title: "شرکتی و معرفی برند",
    titleEn: "Corporate & Enterprise Brand",
    titleAr: "المواقع المؤسسية والشركات",
    badge: "پرستیژ بین‌المللی و جذب سازمان‌ها",
    badgeEn: "Global Prestige & B2B Trust",
    badgeAr: "الهيبة المؤسسية وبناء الثقة",
    description: "طراحی وب‌سایت‌های سازمانی، هلدینگ‌ها، صنایع و کارخانجات با رعایت استانداردهای جهانی سئو و پرستیژ برند.",
    descriptionEn: "High-credibility corporate platforms for industrial enterprises, holding firms, and export businesses.",
    descriptionAr: "مواقع شركات ومؤسسات كبرى، شركات صناعية ومجموعات تجارية بأعلى معايير التصميم والسيو.",
    icon: "Building2",
    tiers: [
      {
        id: "corp-standard",
        name: "شرکتی اختصاصی استاندارد",
        nameEn: "Standard Bespoke Corporate",
        nameAr: "الموقع المؤسسي المخصص",
        priceFormatted: "۴۵ تا ۶۵ میلیون تومان",
        priceFormattedEn: "$2,600 – $4,000",
        priceFormattedAr: "$2,600 – $4,000",
        subtitle: "تحویل ۲۰ الی ۳۰ روز کاری",
        subtitleEn: "20 – 30 business days",
        subtitleAr: "٢٠ إلى ٣٠ يوم عمل",
        target: "شرکت‌های صنعتی، بازرگانی و خدماتی در حال رشد.",
        targetEn: "Growing trading, consulting, and manufacturing firms.",
        targetAr: "للشركات التجارية، الخدمية والمصانع المتنامية.",
        features: [
          "طراحی قالب ۱۰۰٪ اختصاصی و منطبق با برند",
          "کدنویسی ماژولار PHP بدون پلاگین‌های سنگین",
          "کاتالوگ آنلاین خدمات با فیلترینگ سریع",
          "فرم هوشمند استعلام پیش‌فاکتور با پیوست فایل",
          "معرفی کامل تاریخچه، دستاوردها و ساختار سازمانی",
          "رعایت کامل استانداردهای سئوی تکنیکال",
        ],
        featuresEn: [
          "100% bespoke design matching brand guide",
          "Modular PHP codebase free of plugin bloat",
          "Online catalog with instant attribute filtering",
          "Smart RFQ quote inquiry form with file upload",
          "Corporate milestones, governance & credentials",
          "Technical SEO foundation & schema architecture",
        ],
        featuresAr: [
          "تصميم مخصص ١٠٠٪ متوافق مع الهوية المؤسسية",
          "هندسة برمجية خفيفة وقائمة على المكونات (PHP)",
          "كتالوج إلكتروني للمنتجات والخدمات بتصفية سريعة",
          "نموذج طلب عروض أسعار ذكي مع إرفاق ملفات",
          "عرض الهيكل التنظيمي، الإنجازات والشهادات",
          "تطبيق أساسيات السيو التقني وهيكلة البيانات",
        ],
        sampleName: "مشاهده نمونه‌های شرکتی در پورتفولیو",
        sampleNameEn: "View Corporate Work in Portfolio",
        sampleNameAr: "معاينة مواقع الشركات في المعرض",
        sampleLink: "/portfolio/",
        consultationType: "landing",
        budgetTier: "tier1",
      },
      {
        id: "corp-premium",
        name: "سازمانی پیشرفته و چندزبانه",
        nameEn: "Multi-Language Enterprise Hub",
        nameAr: "المنصة المؤسسية المتقدمة متعددة اللغات",
        priceFormatted: "۶۵ تا ۹۵ میلیون تومان",
        priceFormattedEn: "$4,800 – $7,500",
        priceFormattedAr: "$4,800 – $7,500",
        subtitle: "تحویل ۳۰ الی ۴۵ روز کاری",
        subtitleEn: "30 – 45 business days",
        subtitleAr: "٣٠ إلى ٤٥ يوم عمل",
        target: "هلدینگ‌ها، صنایع و شرکت‌های صادراتی.",
        targetEn: "Export conglomerates, industrial groups, and enterprise brands.",
        targetAr: "للشركات المصدرة، المجموعات القابضة والشركات الدولية.",
        features: [
          "معماری چندزبانه بومی (فارسی، انگلیسی، عربی)",
          "مگامنوی تعاملی و پرتال جامع محصولات صنعتی",
          "پرتال فرصت‌های شغلی با سیستم غربالگری رزومه",
          "اتاق خبر، گزارشات سالانه و روابط سرمایه‌گذاران",
          "بهینه‌سازی دیتابیس برای ترافیک سازمانی بالا",
          "۶ ماه پشتیبانی فنی، تضمین آپ‌تایم و بکاپ",
        ],
        featuresEn: [
          "Native multi-language engine (FA, EN, AR)",
          "Interactive mega-menu & industrial catalog",
          "Careers portal with dynamic resume screening",
          "Press room, investor relations & annual reports",
          "Database query tuning for enterprise concurrency",
          "6 months maintenance, uptime guarantee & backups",
        ],
        featuresAr: [
          "محرك لغات متعددة أصلي (فارسي، إنجليزي، عربي)",
          "قائمة علوية عملاقة وتصنيف عميق للمنتجات",
          "بوابة توظيف إلكترونية ونظام تصنيف السير الذاتية",
          "غرفة أخبار وتقارير سنوية وعلاقات المستثمرين",
          "تحسين قواعد البيانات لتحمل الزيارات العالية",
          "٦ أشهر صيانة فنية وضمان استقرار وسرعة الموقع",
        ],
        sampleName: "مشاهده نمونه‌های شرکتی و صادراتی",
        sampleNameEn: "View Export & Global Portals",
        sampleNameAr: "معاينة المنصات التصديرية الدولية",
        sampleLink: "/portfolio/",
        consultationType: "landing",
        budgetTier: "tier2",
      },
      {
        id: "corp-3d",
        name: "هلدینگ فاخر با ویژوالایزیشن ۳D",
        nameEn: "Flagship 3D Industrial Holding",
        nameAr: "الموقع القيادي الفاخر بتقنية 3D",
        priceFormatted: "۹۵ تا ۱۵۰ میلیون تومان",
        priceFormattedEn: "$8,800 – $13,000",
        priceFormattedAr: "$8,800 – $13,000",
        subtitle: "تحویل ۴۵ الی ۶۰ روز کاری",
        subtitleEn: "45 – 60 business days",
        subtitleAr: "٤٥ إلى ٦٠ يوم عمل",
        target: "برندهای لوکس و پرچمداران بازار.",
        targetEn: "Flagship industry leaders and luxury conglomerates.",
        targetAr: "للشركات الرائدة والمجموعات الكبرى الراغبة بالريادة.",
        highlight: true,
        features: [
          "ویژوالایزیشن سه‌بعدی محصول یا کارخانه در مرورگر",
          "ترنزیشن‌های ویدیویی سینمایی با اسکرول",
          "داشبورد مدیریت محتوای اختصاصی فوق‌ساده",
          "یکپارچه‌سازی با CRM و اتوماسیون سازمانی",
          "امنیت در سطح استانداردهای بانکی",
          "۱ سال گارانتی فنی کامل و مانیتورینگ بلادرنگ",
        ],
        featuresEn: [
          "In-browser 3D model of flagship line/campus",
          "Cinematic scroll-synchronized video transitions",
          "Ultra-clean bespoke CMS dashboard",
          "Deep integration with CRM & enterprise suites",
          "Bank-grade security hardening & DDoS shield",
          "1 full year comprehensive warranty & monitoring",
        ],
        featuresAr: [
          "نمذجة ثلاثية الأبعاد لخطوط الإنتاج في المتصفح",
          "انتقالات بصرية وسرد قصصي سينمائي مع التمرير",
          "لوحة تحكم إدارية مخصصة وسهلة الاستخدام",
          "ربط كامل مع أنظمة إدارة علاقات العملاء (CRM)",
          "معايير حماية وأمان متقدمة ضد الهجمات",
          "سنة كاملة ضمان فني ومتابعة أداء مستمرة",
        ],
        sampleName: "مشاهده نمونه‌های سازمانی در پورتفولیو",
        sampleNameEn: "View 3D Flagship Holding Portals",
        sampleNameAr: "معاينة المنصات المؤسسية ثلاثية الأبعاد",
        sampleLink: "/portfolio/",
        consultationType: "landing",
        budgetTier: "tier3",
      },
    ],
  },
  {
    id: "service",
    title: "خدماتی و رزرواسیون",
    titleEn: "Service & Booking Engine",
    titleAr: "المواقع الخدمية والحجوزات",
    badge: "تبدیل بازدیدکننده به مشتری نقد",
    badgeEn: "Visitor to Paying Customer Engine",
    badgeAr: "تحويل الزوار إلى عملاء فعليين",
    description: "طراحی وب‌سایت‌های متمرکز بر رزرواسیون آنلاین، کلینیک‌ها، دفاتر حقوقی، مشاوره‌ای و خدمات تخصصی با بالاترین نرخ تبدیل لید.",
    descriptionEn: "High-conversion web engines for private clinics, legal practices, advisory firms, and booking services.",
    descriptionAr: "مواقع متخصصة في حجز المواعيد والخدمات للعيادات، المكاتب القانونية والاستشارات بأعلى معدل تحويل.",
    icon: "CalendarCheck",
    tiers: [
      {
        id: "service-leadgen",
        name: "خدماتی جذب لید پرسرعت",
        nameEn: "High-Speed Lead Gen Site",
        nameAr: "الموقع الخدمي لتوليد العملاء",
        priceFormatted: "۵۰ تا ۷۵ میلیون تومان",
        priceFormattedEn: "$2,400 – $3,600",
        priceFormattedAr: "$2,400 – $3,600",
        subtitle: "تحویل ۲۰ الی ۳۰ روز کاری",
        subtitleEn: "20 – 30 business days",
        subtitleAr: "٢٠ إلى ٣٠ يوم عمل",
        target: "کسب‌وکارهای وابسته به تبلیغات گوگل (Google Ads).",
        targetEn: "Service businesses driving traffic from Google Ads demanding peak conversion.",
        targetAr: "للشركات الخدمية المعتمدة على إعلانات غوغل.",
        features: [
          "طراحی متمرکز بر روان‌شناسی فروش و جذب لید",
          "سرعت لود زیر ۸۰۰ میلی‌ثانیه برای Google Ads",
          "فرم‌های تعاملی چندمرحله‌ای با اعتبارسنجی آنی",
          "جدول شفاف تعرفه خدمات و محاسبه‌گر هوشمند",
          "گالری مقایسه قبل و بعد (Before / After)",
          "دکمه‌های تماس هوشمند و چت متصل به آنالیتیکس",
        ],
        featuresEn: [
          "Psychology-driven landing architecture",
          "Sub-800ms load speed engineered for Google Ads",
          "Multi-step lead forms with instant validation",
          "Clear pricing calculator & rate tables",
          "Interactive Before/After treatment slider",
          "Floating call triggers synced to GA4 tracking",
        ],
        featuresAr: [
          "هندسة صفحات هبوط قائمة على سيكولوجية البيع",
          "سرعة تحميل أقل من ٨٠٠ ميلي ثانية لإعلانات غوغل",
          "نماذج تفاعلية متعددة الخطوات بتحقق فوري",
          "جدول شفاف للأسعار وحاسبة تقديرية ذكية",
          "معرض مقارنة النتائج (قبل وبعد) تفاعلي",
          "أزرار اتصال وواتساب مرتبطة بإحصائيات غوغل",
        ],
        sampleName: "مشاهده لندینگ‌های خدماتی در پورتفولیو",
        sampleNameEn: "View High-Converting Service Landings",
        sampleNameAr: "معاينة صفحات الهبوط الخدمية الفاخرة",
        sampleLink: "/portfolio/",
        consultationType: "service",
        budgetTier: "tier1",
      },
      {
        id: "service-booking",
        name: "سیستم رزرواسیون و وقت‌دهی هوشمند",
        nameEn: "Smart Booking & Scheduling Hub",
        nameAr: "منظومة الحجز والمواعيد الذكية",
        priceFormatted: "۷۵ تا ۱۱۰ میلیون تومان",
        priceFormattedEn: "$4,000 – $6,200",
        priceFormattedAr: "$4,000 – $6,200",
        subtitle: "تحویل ۳۰ الی ۴۵ روز کاری",
        subtitleEn: "30 – 45 business days",
        subtitleAr: "٣٠ إلى ٤٥ يوم عمل",
        target: "کلینیک‌ها، دفاتر حقوقی و آکادمی‌های تخصصی.",
        targetEn: "Medical clinics, law practices, and advisory academies.",
        targetAr: "للعيادات الطبية، مكاتب المحاماة والمراكز الاستشارية.",
        features: [
          "موتور تقویم و رزرواسیون اختصاصی بدون تداخل",
          "درگاه پرداخت آنلاین بیعانه یا تسویه کامل جلسه",
          "پیامک خودکار یادآوری نوبت و ارسال لینک موقعیت",
          "پنل اختصاصی برای هر پزشک/مشاور جهت دیدن نوبت‌ها",
          "سیستم امن آپلود پرونده و شرح وضعیت مشتری",
          "۴ ماه پشتیبانی فنی و مانیتورینگ تراکنش‌ها",
        ],
        featuresEn: [
          "Custom calendar engine with zero booking collisions",
          "Payment gateway for deposits or full appointment fees",
          "Automated SMS appointment reminders & links",
          "Dedicated specialist agenda portal for doctors",
          "Secure client intake funnel & file uploads",
          "4 months technical maintenance & transaction monitoring",
        ],
        featuresAr: [
          "محرك تقويم وحجز مخصص بدون أي تضارب",
          "ربط ببوابة دفع لسداد العربون أو تكلفة الموعد",
          "تذكير تلقائي عبر الرسائل القصيرة برابط الموعد",
          "لوحة خاصة للأطباء لمتابعة مواعيدهم اليومية",
          "نظام آمن لرفع الملفات والتقارير الطبية",
          "٤ أشهر دعم فني ومتابعة مستمرة لبوابة الحجز",
        ],
        sampleName: "مشاهده نمونه‌های خدماتی و منوهای دیجیتال",
        sampleNameEn: "View Booking & Scheduling Engines",
        sampleNameAr: "معاينة أنظمة الحجز والخدمات الرقمية",
        sampleLink: "/portfolio/",
        consultationType: "service",
        budgetTier: "tier2",
      },
      {
        id: "service-portal",
        name: "پورتال جامع مشتریان و اتوماسیون خدمات",
        nameEn: "Comprehensive Client Portal & CRM",
        nameAr: "بوابة العملاء الشاملة والأتمتة",
        priceFormatted: "۱۱۰ تا ۱۷۰ میلیون تومان",
        priceFormattedEn: "$6,800 – $10,800",
        priceFormattedAr: "$6,800 – $10,800",
        subtitle: "تحویل ۴۵ الی ۶۰ روز کاری",
        subtitleEn: "45 – 60 business days",
        subtitleAr: "٤٥ إلى ٦٠ يوم عمل",
        target: "مراکز خدماتی بزرگ و شرکت‌های زنجیره‌ای.",
        targetEn: "Multi-branch clinics, service enterprises, and chains.",
        targetAr: "للمؤسسات الخدمية الكبرى والمراكز المتعددة الفروع.",
        highlight: true,
        features: [
          "پورتال کاربری با ورود پیامکی (OTP)",
          "داشبورد پیگیری پرونده و صدور فاکتور رسمی",
          "سیستم تیکتینگ با اولویت‌بندی هوشمند",
          "یکپارچه‌سازی با CRM و نرم‌افزار حسابداری",
          "گزارش‌های آماری و تحلیل رفتار مشتریان",
          "۶ ماه پشتیبانی فنی و پایش دیتابیس",
        ],
        featuresEn: [
          "Dedicated user portal with mobile OTP login",
          "Case tracking dashboard & automated invoices",
          "Smart customer ticketing desk with priority routing",
          "Deep integration with internal CRM & accounting",
          "Executive analytics dashboards on retention & revenue",
          "6 months dedicated enterprise engineering support",
        ],
        featuresAr: [
          "بوابة عملاء خاصة بتسجيل دخول برمز التحقق (OTP)",
          "لوحة متابعة المعاملات وإصدار فواتير آلية",
          "نظام تذاكر دعم فني ذكي مع تصنيف الأولويات",
          "ربط برمجي مع برامج المحاسبة وإدارة العملاء (CRM)",
          "تقارير وإحصائيات مالية وسلوكية دقيقة للإدارة",
          "٦ أشهر دعم فني متواصل وضمان أداء قواعد البيانات",
        ],
        sampleName: "مشاهده نمونه‌های پورتال خدماتی در پورتفولیو",
        sampleNameEn: "View Enterprise Client Portals",
        sampleNameAr: "معاينة بوابات العملاء الشاملة",
        sampleLink: "/portfolio/",
        consultationType: "service",
        budgetTier: "tier3",
      },
    ],
  },
  {
    id: "shop",
    title: "فروشگاه آنلاین سفارشی",
    titleEn: "Custom E-Commerce Engine",
    titleAr: "المتجر الإلكتروني المخصص",
    badge: "فروش بی‌وقفه با سرعت لود زیر ۱ ثانیه",
    badgeEn: "Frictionless Sales at Sub-Second Speed",
    badgeAr: "مبيعات سريعة وبدون توقف",
    description: "مهندسی فروشگاه‌های اینترنتی با معماری اختصاصی، بدون باگ قالب‌های متفرقه، با چک‌اوت یک‌مرحله‌ای و سیستم انبارداری هماهنگ.",
    descriptionEn: "Bespoke high-performance online retail engines engineered for zero plugin bloat, instant checkout, and extreme reliability.",
    descriptionAr: "متاجر إلكترونية عالية الأداء بدون إضافات ثقيلة، مع دفع فوري في خطوة واحدة وإدارة دقيقة للمخزون.",
    icon: "ShoppingBag",
    tiers: [
      {
        id: "shop-speed",
        name: "فروشگاه اختصاصی پرسرعت و بهینه",
        nameEn: "High-Performance Bespoke Shop",
        nameAr: "المتجر المخصص فائق السرعة",
        priceFormatted: "۸۰ تا ۱۲۰ میلیون تومان",
        priceFormattedEn: "$4,000 – $5,900",
        priceFormattedAr: "$4,000 – $5,900",
        subtitle: "تحویل ۳۰ الی ۴۰ روز کاری",
        subtitleEn: "30 – 40 business days",
        subtitleAr: "٣٠ إلى ٤٠ يوم عمل",
        target: "برندهای خرده‌فروشی، بوتیک‌ها، طلا و کالاهای لوکس.",
        targetEn: "Boutiques, jewelry, luxury apparel, and niche brands.",
        targetAr: "للمتاجر الفاخرة، المجوهرات، الأزياء والمنتجات المميزة.",
        features: [
          "طراحی رابط کاربری لوکس و اختصاصی فروشگاهی",
          "چک‌اوت یک‌مرحله‌ای (کاهش ریزش سبد خرید)",
          "اتصال مستقیم به شاپرک و پنل پیامک خودکار",
          "فیلتر آنی ویژگی‌ها (سایز، رنگ، قیمت) بدون رفرش",
          "کد تخفیف پیشرفته و محاسبه خودکار هزینه ارسال",
          "سازگاری ۱۰۰٪ با موبایل و تبلت با سرعت لود موشکی",
        ],
        featuresEn: [
          "Luxury bespoke UI/UX crafted for high conversions",
          "Frictionless single-page checkout minimizing drops",
          "Reliable gateway integration & automated SMS",
          "Instant AJAX filtering with zero page reloads",
          "Dynamic coupon logic & automated courier rates",
          "100% mobile-optimized with rocket speed",
        ],
        featuresAr: [
          "تصميم واجهات تسوق فاخرة ومخصصة",
          "صفحة دفع سريعة بخطوة واحدة تمنع التراجع",
          "ربط آمن بمعالجات الدفع وإشعارات الرسائل",
          "تصفية فورية للمنتجات دون إعادة تحميل الصفحة",
          "محرك أكواد خصم وحساب تلقائي للشحن",
          "توافق كامل مع الهواتف الذكية بسرعة فائقة",
        ],
        sampleName: "کیس‌استادی فروشگاهی لیدی‌کوین و فرش دهقانی",
        sampleNameEn: "Explore LadyCoin & Dehghani Rug Case Studies",
        sampleNameAr: "دراسة حالة متجر LadyCoin وسجاد دهقاني",
        sampleLink: "/portfolio/",
        consultationType: "shop",
        budgetTier: "tier2",
      },
      {
        id: "shop-scale",
        name: "فروشگاه مقیاس‌پذیر و اتوماسیون مالی",
        nameEn: "Scalable Omnichannel Retail Engine",
        nameAr: "المتجر المتطور المتكامل محاسبياً",
        priceFormatted: "۱۲۰ تا ۱۸۰ میلیون تومان",
        priceFormattedEn: "$6,600 – $10,400",
        priceFormattedAr: "$6,600 – $10,400",
        subtitle: "تحویل ۴۰ الی ۶۰ روز کاری",
        subtitleEn: "40 – 60 business days",
        subtitleAr: "٤٠ إلى ٦٠ يوم عمل",
        target: "فروشگاه‌های پرفروش، واردکنندگان و برندهای بزرگ.",
        targetEn: "High-volume retailers, distributors, and established brands.",
        targetAr: "للمتاجر ذات المبيعات العالية، المستوردين والشركات الكبرى.",
        features: [
          "زیرساخت دیتابیس برای بالای ۵۰ هزار کالا",
          "سینک لحظه‌ای با نرم‌افزارهای حسابداری (سپیدار، هلو و...)",
          "باشگاه مشتریان، کیف پول و سیستم وفاداری",
          "قیمت‌گذاری عمده‌فروشی و پنل همکاران (B2B)",
          "سیستم چندانباری و اتصال به پست و تیپاکس",
          "۶ ماه پشتیبانی فنی حراج‌ها و Black Friday",
        ],
        featuresEn: [
          "Tuned database architecture supporting 50,000+ SKUs",
          "Bi-directional real-time sync with accounting/ERP",
          "Customer loyalty club, wallet & reward points",
          "Tiered wholesale & dealer B2B pricing engine",
          "Multi-warehouse logistics with tracking integration",
          "6 months dedicated support, Black Friday tuned",
        ],
        featuresAr: [
          "بنية قواعد بيانات مهيأة لأكثر من ٥٠ ألف منتج",
          "ربط متزامن مباشر مع برامج المحاسبة والمستودعات",
          "نادي ولاء العملاء، محفظة إلكترونية ونقاط مكافآت",
          "نظام أسعار الجملة للشركات والتجار (B2B)",
          "إدارة مستودعات متعددة وتتبع الشحنات البريدية",
          "٦ أشهر دعم فني مخصص لمواسم التخفيضات الكبرى",
        ],
        sampleName: "مشاهده نمونه‌های زنده فروشگاهی",
        sampleNameEn: "View Omnichannel Commerce Stores",
        sampleNameAr: "معاينة المتاجر الرقمية متعددة القنوات",
        sampleLink: "/portfolio/",
        consultationType: "shop",
        budgetTier: "tier3",
      },
      {
        id: "shop-3d",
        name: "فروشگاه لوکس سه‌بعدی و مارکتینگ مدرن",
        nameEn: "Luxury 3D Commerce & Interactive Flagship",
        nameAr: "المتجر الفاخر ثلاثي الأبعاد وتجربة 3D",
        priceFormatted: "۱۸۰ تا ۳۰۰+ میلیون تومان",
        priceFormattedEn: "$11,500 – $18,000+",
        priceFormattedAr: "$11,500 – $18,000+",
        subtitle: "تحویل ۶۰ الی ۹۰ روز کاری",
        subtitleEn: "60 – 90 business days",
        subtitleAr: "٦٠ إلى ٩٠ يوم عمل",
        target: "برندهای لوکس طلا، مد، ساعت، جواهرات و مبلمان.",
        targetEn: "Flagship luxury brands, fine jewelry, watches, and luxury decor.",
        targetAr: "للعلامات الفاخرة، المجوهرات، الساعات الراقية والأثاث.",
        highlight: true,
        features: [
          "نمایشگر ۳۶۰ درجه سه‌بعدی محصولات (WebGL)",
          "تغییر زنده متریال و رنگ محصول توسط خریدار",
          "ترنزیشن‌های انیمیشنی بی‌وقفه و هایپر-مدرن",
          "هوش مصنوعی توصیه‌گر محصولات مشابه",
          "سرور ابری کانفیگ‌شده با کشینگ Redis",
          "۱ سال گارانتی فنی کامل و بدون باگ",
        ],
        featuresEn: [
          "Interactive 360° 3D product visualizer in-browser",
          "Real-time product configurator (materials/colors)",
          "Cinematic fluid page animations & micro-motion",
          "AI recommendation engine based on browsing patterns",
          "Dedicated cloud server configured with Redis caching",
          "1 full year complete enterprise maintenance",
        ],
        featuresAr: [
          "عرض المنتجات بزاوية ٣٦٠ درجة وتفاعل 3D مباشر",
          "مخصص منتجات حي (تغيير الخامات والألوان لحظياً)",
          "واجهات فائقة التطور مع انتقالات حركية خيالية",
          "ذكاء اصطناعي لاقتراح المنتجات وفق اهتمامات المشتري",
          "خوادم سحابية مضبوطة بتخزين مؤقت عالي السرعة",
          "سنة كاملة صيانة مؤسسية وضمان تشغيل مستمر",
        ],
        sampleName: "مشاهده نمونه‌های فروشگاهی لوکس در پورتفولیو",
        sampleNameEn: "View Luxury 3D Product Configurator Stores",
        sampleNameAr: "معاينة المتاجر الفاخرة بنماذج 3D",
        sampleLink: "/portfolio/",
        consultationType: "shop",
        budgetTier: "tier3",
      },
    ],
  },
  {
    id: "app",
    title: "وب‌اپلیکیشن، پلتفرم و استارتاپ",
    titleEn: "Web App, Platform & Startup",
    titleAr: "تطبيقات الويب والشركات الناشئة",
    badge: "معماری نرم‌افزاری اختصاصی بدون سقف",
    badgeEn: "Unconstrained Custom Software Architecture",
    badgeAr: "بنية برمجية مخصصة بلا حدود",
    description: "توسعه نرم‌افزارهای تحت وب، محصولات SaaS، سامانه‌های هوشمند و MVPهای مقیاس‌پذیر با فریم‌ورک‌های مدرن مهندسی.",
    descriptionEn: "Custom web applications, complex SaaS architectures, internal portals, and scalable MVP engineering with modern stacks.",
    descriptionAr: "تطوير تطبيقات الويب، منصات السحاب (SaaS)، الأنظمة الذكية والنماذج الأولية القابلة للتوسع بأحدث التقنيات.",
    icon: "Cpu",
    tiers: [
      {
        id: "app-custom",
        name: "توسعه پلتفرم و سامانه اختصاصی",
        nameEn: "Bespoke Platform & Custom SaaS",
        nameAr: "تطوير المنصات والأنظمة السحابية المخصصة",
        priceFormatted: "شروع از ۱۰۰ میلیون تومان به بالا",
        priceFormattedEn: "Starting from $6,800+",
        priceFormattedAr: "يبدأ من $6,800+",
        subtitle: "تعیین قیمت نهایی در جلسه نیازسنجی و تدوین RFP",
        subtitleEn: "Final estimate following discovery & technical RFP",
        subtitleAr: "يحدد السعر النهائي بعد جلسة تحليل المتطلبات ووثيقة RFP",
        target: "استارتاپ‌ها، سامانه‌ها و فرایندهای اختصاصی بیزینس.",
        targetEn: "Founders, enterprise teams, and businesses with custom workflows.",
        targetAr: "لمؤسسي الشركات الناشئة، المؤسسات والأنشطة ذات المنطق الخاص.",
        highlight: true,
        features: [
          "جلسه عمیق نیازسنجی، معماری سیستم و نقشه راه فنی (RFP)",
          "طراحی کامل سیستم دیزاین و پروتوتایپ اختصاصی قبل از شروع کد",
          "کدنویسی اختصاصی فول‌استک با فریم‌ورک‌های مدرن مقیاس‌پذیر",
          "معماری دیتابیس بهینه برای میلیون‌ها رکورد و کوئری سنگین",
          "احراز هویت پیامکی امن و کنترل سطوح دسترسی (RBAC)",
          "ای‌پی‌آی‌های استاندارد REST/GraphQL آماده اتصال به اپ موبایل",
          "داشبورد تحلیلی و گزارش‌گیری اختصاصی برای مدیریت و عملیات",
          "یکپارچه‌سازی ابزارهای هوش مصنوعی (LLMs, OCR, AI Vision)",
        ],
        featuresEn: [
          "Discovery workshop, software architecture blueprint & technical RFP",
          "Complete bespoke Design System and interactive prototype",
          "Full-stack custom engineering with scalable modern frameworks",
          "Database modeling tuned for high concurrency and heavy queries",
          "Robust OTP authentication & granular Role-Based Access Control",
          "Production-ready RESTful/GraphQL APIs for mobile apps",
          "Real-time executive analytics dashboard for operations",
          "Native AI integrations (Large Language Models & vision models)",
        ],
        featuresAr: [
          "جلسة عمل متعمقة، إعداد وثيقة المعمارية البرمجية (RFP)",
          "تصميم نظام متكامل ومخطط تفاعلي مخصص قبل البرمجة",
          "تطوير برمجي كامل (Full-Stack) بأطر عمل حديثة قابلة للتوسع",
          "هندسة قواعد بيانات محسنة لملايين السجلات والعمليات المعقدة",
          "نظام مصادقة آمن برموز التحقق وإدارة صلاحيات متقدمة (RBAC)",
          "واجهات برمجية معيارية (APIs) جاهزة للربط بتطبيقات الهواتف",
          "لوحة تحكم إحصائية وإدارية متكاملة لمتابعة الأداء",
          "دمج قدرات الذكاء الاصطناعي التوليدي ومعالجة البيانات",
        ],
        sampleName: "بررسی سامانه ۵ ستاره و پلتفرم‌های اختصاصی",
        sampleNameEn: "Explore 5Setare Platform Architecture",
        sampleNameAr: "معاينة معمارية منصة 5Setare المخصصة",
        sampleLink: "/portfolio/",
        consultationType: "startup",
        budgetTier: "tier4",
      },
    ],
  },
];

export const ADDONS_3D: AddonItem[] = [
  {
    id: "addon-model",
    title: "مدل سه‌بعدی تعاملی محصول / آبجکت",
    titleEn: "Interactive 3D Product Viewport",
    titleAr: "نموذج ثلاثي الأبعاد تفاعلي للمنتج",
    price: "۱۵ تا ۲۵ میلیون تومان",
    priceEn: "$850 – $1,300",
    priceAr: "$850 – $1,300",
    desc: "مدل‌سازی بهینه و نمایش چرخش ۳۶۰ درجه و زوم محصول با ماوس یا لمس بدون افت سرعت لود.",
    descEn: "Optimized 360-degree orbit and zoom in-browser without hurting page load performance.",
    descAr: "عرض ثلاثي الأبعاد ودوران ٣٦٠ درجة للمنتج بسلاسة تامة دون التأثير على سرعة الموقع.",
    badge: "محبوب فروشگاه‌ها و برندها",
    badgeEn: "Popular for Retail & Tech",
    badgeAr: "مفضل للمتاجر والعلامات الراقية",
  },
  {
    id: "addon-scrollytelling",
    title: "روایت‌گری تعاملی با اسکرول (Scrollytelling)",
    titleEn: "Cinematic 3D Scrollytelling Timeline",
    titleAr: "سرد قصصي تفاعلي متزامن مع التمرير",
    price: "۳۵ تا ۶۰ میلیون تومان",
    priceEn: "$1,750 – $2,900",
    priceAr: "$1,750 – $2,900",
    desc: "حرکت هوشمند دوربین و تغییر زاویه اجزا متناسب با اسکرول کاربر، مشابه وب‌سایت‌های اپل و تسلا.",
    descEn: "Smooth camera path transitions and component choreography bound to user scroll, Apple-grade.",
    descAr: "حركة كاميرا سينمائية تفاعلية تتغير مع تمرير المستخدم على غرار مواقع أبل وتسلا.",
    badge: "مناسب لندینگ‌های پرچمدار",
    badgeEn: "Ideal for Flagship Landings",
    badgeAr: "مثالي لصفحات الهبوط المرموقة",
  },
  {
    id: "addon-showroom",
    title: "شوروم یا فضای تعاملی کامل سه‌بعدی",
    titleEn: "Full 3D Virtual Showroom / WebGL Canvas",
    titleAr: "معرض أو بيئة تفاعلية كاملة 3D",
    price: "۶۰ تا ۱۱۰+ میلیون تومان",
    priceEn: "$3,800 – $6,800+",
    priceAr: "$3,800 – $6,800+",
    desc: "خلق یک جهان بصری کامل، چرخش محیطی، افکت‌های نوری بلادرنگ و قابلیت حرکت در فضای اختصاصی برند.",
    descEn: "A complete virtual spatial environment with real-time shaders, dynamic lighting, and spatial navigation.",
    descAr: "إنشاء بيئة افتراضية متكاملة ثلاثية الأبعاد مع إضاءة حية وحرية تنقل كاملة لعلامتك.",
    badge: "سطح جهانی و جشنواره‌ای",
    badgeEn: "Awwwards-Level Showcase",
    badgeAr: "مستوى عالمي حاصد للجوائز",
  },
];

export const COMPARISON_DIMENSIONS: ComparisonDimension[] = [
  {
    dimension: "هسته فنی و خطوط کد",
    dimensionEn: "Core Tech & Codebase",
    dimensionAr: "البنية البرمجية ونقاء الكود",
    customCode: "کدنویسی تمیز و سبک PHP بر پایه معماری کامپوننت‌ها",
    customCodeEn: "Ultra-clean, bespoke modular PHP code crafted component-by-component",
    customCodeAr: "برمجة نظيفة ومخصصة بتقنية PHP بدون أي كود زائد",
    templateTheme: "قالب‌های تجاری با ده‌ها هزار خط کد بی‌استفاده",
    templateThemeEn: "Generic commercial themes loaded with tens of thousands of unused lines",
    templateThemeAr: "قوالب تجارية محملة بآلاف أسطر الكود المهدرة",
    winner: "custom",
  },
  {
    dimension: "تعداد افزونه‌ها (Plugins)",
    dimensionEn: "Plugin Dependency",
    dimensionAr: "الاعتماد على الإضافات (Plugins)",
    customCode: "بدون پلاگین سنگین (Zero Bloatware)؛ تمام منطق در کدهای هسته است",
    customCodeEn: "Zero bloatware; core functionality is natively coded with zero dependency risk",
    customCodeAr: "استغناء تام عن الإضافات الثقيلة؛ كل المزايا مبرمجة في صلب النظام",
    templateTheme: "۳۵ تا ۶۰ پلاگین سنگین و مستعد باگ و تداخل",
    templateThemeEn: "35 to 60 bloated plugins prone to crashes, conflicts, and license lock-in",
    templateThemeAr: "٣٥ إلى ٦٠ إضافة ثقيلة ومعرضة للأعطال والتضارب المستمر عند التحديث",
    winner: "custom",
  },
  {
    dimension: "سرعت لود و امتیاز Google PageSpeed",
    dimensionEn: "PageSpeed & Core Web Vitals",
    dimensionAr: "سرعة التحميل ومؤشرات غوغل",
    customCode: "لود زیر ۱ ثانیه (زیر ۸۰۰ میلی‌ثانیه) و امتیاز ۹۵ تا ۱۰۰ گوگل",
    customCodeEn: "Sub-1s average load speed with 95+ performance score on Google Lighthouse",
    customCodeAr: "سرعة تحميل أقل من ثانية واحدة ودرجة تفوق ٩٥٪ في معايير غوغل",
    templateTheme: "لود ۴ تا ۱۰ ثانیه و ریزش ۵۳٪ نرخ تبدیل تبلیغات",
    templateThemeEn: "4 to 10s load times losing over half your ad clicks before page finishes rendering",
    templateThemeAr: "تحميل بطيء يستغرق ٤ إلى ١٠ ثوانٍ يسبب هروب نصف الزوار قبل فتح الصفحة",
    winner: "custom",
  },
  {
    dimension: "امنیت و مقاومت در برابر هک",
    dimensionEn: "Security & Exploit Resistance",
    dimensionAr: "الحماية ومقاومة الاختراق",
    customCode: "کدنویسی ایزوله بدون درهای پشتی و باگ‌های عمومی",
    customCodeEn: "Isolated custom codebase with zero known CVEs and zero automated exploit targets",
    customCodeAr: "كود برمجي معزول تماماً بلا ثغرات عامة أو بوابات خلفية مستهدفة",
    templateTheme: "آسیب‌پذیرترین رده وب به دلیل باگ‌های امنیتی قالب‌های متفرقه",
    templateThemeEn: "Top target for automated script-kiddies and botnet exploits via cracked themes",
    templateThemeAr: "أكثر عرضة للاختراق عالمياً بسبب ثغرات الإضافات المقرصنة والمتفرقة",
    winner: "custom",
  },
  {
    dimension: "طراحی رابط کاربری (UI/UX)",
    dimensionEn: "Visual Identity & Experience",
    dimensionAr: "الهوية وتجربة المستخدم (UI/UX)",
    customCode: "طراحی اختصاصی هویت بصری متناسب با پرسونای بیزینس شما (۱۰۰٪ یکتا)",
    customCodeEn: "Built from a blank canvas around your exact market positioning",
    customCodeAr: "تصميم متفرد من الصفر مخصص بدقة لهوية علامتك وجمهورك",
    templateTheme: "قالب‌های تکراری مشابه صدها سایت دیگر در بازار",
    templateThemeEn: "Cookie-cutter templated layouts identical to thousands of competitor domains",
    templateThemeAr: "تصاميم مكررة شائعة في آلاف المواقع بدون أي خصوصية أو لمسة فريدة",
    winner: "custom",
  },
  {
    dimension: "توسعه‌پذیری در آینده (Scalability)",
    dimensionEn: "Long-Term Scalability",
    dimensionAr: "القابلية للتوسع المستقبلي",
    customCode: "معماری کامپوننت‌محور با امکان پیاده‌سازی هر ایده بدون محدودیت",
    customCodeEn: "Infinite scaling; any custom logic or external API can be hooked natively",
    customCodeAr: "توسع غير محدود؛ إمكانية ربط أي ميزة أو نظام خارجي بسلاسة تامة",
    templateTheme: "بن‌بست فنی با اولین نیاز خارج از چارچوب قالب",
    templateThemeEn: "Technical dead-end requiring expensive full rebuilds when custom needs arise",
    templateThemeAr: "عجز تقني حتمي عند طلب أي ميزة خارجة عن إمكانيات القالب المحدودة",
    winner: "custom",
  },
  {
    dimension: "هزینه و استهلاک در طول سال",
    dimensionEn: "Total Cost of Ownership (TCO)",
    dimensionAr: "التكلفة الإجمالية والاستهلاك",
    customCode: "سرمایه‌گذاری ماندگار بدون هزینه‌های پنهان نگهداری",
    customCodeEn: "Sustainable enterprise asset requiring minimal maintenance overhead",
    customCodeAr: "استثمار ذكي ومستدام يدوم لسنوات دون تكاليف خفية أو صيانة متكررة",
    templateTheme: "هزینه‌های مداوم خرید لایسنس، تمدید افزونه‌ها و رفع باگ",
    templateThemeEn: "Endless hidden fees for annual plugin renewals, broken updates, and patch fees",
    templateThemeAr: "مصاريف خفية مستمرة لتجديد رخص الإضافات وإصلاح الأعطال الدورية",
    winner: "custom",
  },
];

export const PRICING_FAQS: FaqItem[] = [
  {
    q: "چرا تعرفه طراحی اختصاصی شما از سایت‌های ۱۰ میلیونی بازاری بالاتر است؟",
    qEn: "Why are bespoke engineering rates distinct from cheap templated solutions?",
    qAr: "لماذا تختلف أسعاركم الهندسية المخصصة عن العروض الرخيصة والقوالب الجاهزة؟",
    a: "سایت‌های ارزان‌قیمت، قالب‌های آماده و نال‌شده وردپرس با المنتور هستند که با ۴۰ تا ۶۰ پلاگین سنگین نصب می‌شوند. این سایت‌ها بسیار کندند (لود بالای ۵ ثانیه)، مداوم باگ می‌دهند و امنیت شکننده‌ای دارند. ما هیچ‌گاه از قالب آماده یا المنتور استفاده نمی‌کنیم؛ هر پروژه از صفر اختصاصی طراحی و با کدنویسی تمیز PHP اجرا می‌شود تا سرعت لود زیر ۱ ثانیه، امتیاز ۱۰۰ گوگل و پرستیژ برند شما تضمین شود.",
    aEn: "Cheap market offers deploy bloated cracked templates with 40+ plugins that take 5+ seconds to load and crash frequently. We never use templates or Elementor. Every project is designed from scratch and custom-coded in lightweight PHP to ensure sub-second speed, 95+ PageSpeed scores, and rock-solid security.",
    aAr: "المواقع الرخيصة تعتمد على قوالب جاهزة ومقرصنة مع عشرات الإضافات التي تسبب بطئاً شديداً وأعطالاً مستمرة. نحن لا نستخدم قوالب جاهزة إطلاقاً؛ كل مشروع يُصمم من الصفر مخصصاً ويُبرمج بكود PHP نظيف وسريع ليضمن سرعة فائقة وأماناً معتمداً.",
  },
  {
    q: "ردیف وب‌اپلیکیشن و استارتاپ به چه صورت محاسبه می‌شود و چرا قیمت ثابت ندارد؟",
    qEn: "How are Web App & Startup projects estimated, and why is there no fixed cap?",
    qAr: "كيف يتم تقدير تكلفة تطبيقات الويب والشركات الناشئة ولماذا لا يوجد سقف ثابت؟",
    a: "وب‌اپلیکیشن‌ها دارای منطق پردازشی، تعاملات بلادرنگ و دیتابیس اختصاصی هستند. پروژه‌ای در این حوزه می‌تواند از یک MVP تخصصی (حدود ۱۰۰ تا ۱۵۰ میلیون تومان) تا پلتفرم‌های کلان در ابعاد چند صد میلیونی متغیر باشد. به همین دلیل هزینه دقیق صرفاً پس از جلسه نیازسنجی، ارزیابی معماری و تدوین سند نیازمندی‌ها (RFP) برآورد می‌گردد.",
    aEn: "Web apps involve complex custom logic, real-time channels, and intricate database schemas. A project could range from a lean investor MVP ($6,800+) to massive multi-tenant platforms. Accurate financials are scoped exclusively after our technical discovery workshop and architectural RFP.",
    aAr: "تطبيقات الويب تتضمن منطقاً برمجياً معقداً وقواعد بيانات ضخمة. قد يتراوح المشروع بين نموذج أولي للاستثمار (MVP) يبدأ من $6,800+، وبين منصات متقدمة أكبر بكثير. لذلك يحدد السعر الدقيق حصراً بعد جلسة دراسة المتطلبات (RFP).",
  },
  {
    q: "آیا مالکیت سورس‌کد و دیتابیس پس از پایان پروژه با من خواهد بود؟",
    qEn: "Do I gain 100% intellectual property ownership of the source code and database?",
    qAr: "هل تعود ملكية الكود المصدري وقاعدة البيانات بالكامل لي بعد التسليم؟",
    a: "بله، ۱۰۰٪. بر خلاف شرکت‌های سایت‌ساز اشتراکی، کلیه سورس‌کدها، فایل‌های طراحی، دیتابیس و دسترسی‌های هاست و سرور بدون هیچ قید و شرطی تحویل شما می‌گردد و مالک دائمی دارایی دیجیتال خود هستید.",
    aEn: "Yes, 100%. Full source code repositories, design assets, databases, and server credentials are unconditionally transferred to your ownership upon launch.",
    aAr: "نعم، بنسبة ١٠٠٪. يتم تسليم كامل الكود المصدري، ملفات التصميم، قواعد البيانات وصلاحيات الخادم إليك بلا أي شروط لتكون المالك الدائم لمشروعك.",
  },
  {
    q: "آیا برای ویرایش مطالب و محصولات نیاز به برنامه‌نویس خواهم داشت؟",
    qEn: "Will I need an engineer to update text, upload products, or post articles?",
    qAr: "هل سأحتاج إلى مبرمج لتعديل النصوص، إضافة المنتجات أو نشر المقالات؟",
    a: "خیر. یک پنل مدیریت اختصاصی، بسیار تمیز و ساده برای شما طراحی می‌شود که بدون نیاز به هیچ دانش فنی، بتوانید در چند ثانیه محصولات، قیمت‌ها و مقالات را مدیریت کنید. همچنین ویدیوی آموزشی اختصاصی پنل تقدیمتان می‌شود.",
    aEn: "No. We provide an extraordinarily clean, intuitive admin dashboard allowing you to update rates, products, and articles in seconds without writing code. A personalized video tutorial is also included.",
    aAr: "كلا. نصمم لك لوحة تحكم سهلة وسلسة للغاية تمكنك من تعديل المنتجات، الأسعار والمقالات خلال ثوانٍ معدودة بدون أي خبرة برمجية، مع فيديو تعليمي مخصص.",
  },
  {
    q: "گارانتی و پشتیبانی فنی پروژه‌ها پس از تحویل چگونه انجام می‌شود؟",
    qEn: "How are post-launch warranty and technical support handled?",
    qAr: "كيف يتم تقديم الضمان والدعم الفني للمشروع بعد مرحلة الإطلاق؟",
    a: "تمامی پروژه‌ها دارای ۱ سال گارانتی سلامت عملکرد و پشتیبانی فنی رایگان کامل هستند که شامل رفع فوری باگ‌ها، بکاپ‌گیری منظم و مانیتورینگ آپ‌تایم و امنیت است. پس از آن نیز تمدید پشتیبانی سالانه با هزینه ۵۰ تا ۱۰۰ میلیون تومان قابل سفارش است.",
    aEn: "Every project includes 1 full year of guaranteed operational stability and complimentary technical support covering bug resolution, automated backups, and security monitoring, with annual retainers available thereafter.",
    aAr: "تحظى جميع مشاريعنا بضمان تشغيلي كامل ودعم فني مجاني لمدة سنة كاملة يشمل حل الأخطاء، النسخ الاحتياطي الدوري ومراقبة الأمان، مع إمكانية تجديد عقود الدعم السنوي بعد ذلك.",
  },
  {
    q: "شرایط و مراحل پرداخت هزینه در قرارداد به چه صورت است؟",
    qEn: "What are the contractual payment milestones and billing schedule?",
    qAr: "ما هي مراحل وجدول سداد الدفعات المالية في العقد؟",
    a: "پرداخت‌ها مرحله‌ای است: ۳۵٪ پیش‌پرداخت در ابتدای قرارداد، ۳۵٪ پس از تایید طرح دیزاین و آغاز کدنویسی، و ۳۰٪ باقی‌مانده پس از استقرار نهایی، تست و بازبینی کارفرما روی دامنه اصلی تسویه می‌شود.",
    aEn: "Billing follows milestone-based deliverables: 35% upfront at kick-off, 35% upon design sign-off when coding begins, and 30% upon live staging review and final launch.",
    aAr: "الدفعات مرحلية وشفافة: ٣٥٪ دفعة أولى عند بدء المشروع، ٣٥٪ بعد اعتماد التصاميم وبدء البرمجة، والـ ٣٠٪ الأخيرة بعد اكتمال المشروع وتجربته على النطاق الأساسي.",
  },
];
