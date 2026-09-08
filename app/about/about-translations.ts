export interface MilestoneTranslation {
  id: string;
  year: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
    caption: string;
    tag: string;
    externalLink?: string;
    externalLinkLabel?: string;
  };
}

export interface PhilosophyCardTranslation {
  iconType: "trending" | "shield" | "terminal";
  number: string;
  title: string;
  description: string;
}

export interface AboutPageDictionary {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    heading: string;
    highlightRole: string;
    p1: string;
    p2: string;
    p3: string;
    consultBtn: string;
    consultBadge: string;
    vibeBtn: string;
    socialLinkedin: string;
    socialInstagram: string;
    socialTelegram: string;
    profileRole: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
  };
  timeline: {
    badge: string;
    heading: string;
    description: string;
    imageDocPrefix: string;
  };
  milestones: MilestoneTranslation[];
  philosophy: {
    badge: string;
    heading: string;
    description: string;
    cards: PhilosophyCardTranslation[];
  };
  cta: {
    heading: string;
    description: string;
    waitlistBadge: string;
    primaryBtn: string;
    secondaryBtn: string;
    secondarySub: string;
  };
}

export const ABOUT_DICTIONARIES: Record<"fa" | "en" | "ar", AboutPageDictionary> = {
  fa: {
    meta: {
      title: "درباره حسن شاهمرادی | داستان مسیر، آلبوم مستند و پرچمداری وایب‌کدینگ",
      description:
        "روایت واقعی و مستند مسیر حرفه‌ای حسن شاهمرادی از استارتاپ ۳ سوت در سال ۹۷ و ۵ سال ویدیو مارکتینگ صنعتی تا توسعه وب اختصاصی و آموزش پیشگام وایب‌کدینگ در ایران.",
    },
    hero: {
      badge: "داستان واقعی، آلبوم مستند و چشم‌انداز من",
      heading: "سلام، من حسن شاهمرادی هستم؛",
      highlightRole: "معمار محصول دیجیتال و مدرس پیشگام Vibe Coding در ایران",
      p1: "بیش از ۸ سال است که در تقاطع «فهم عمیق کسب‌وکار»، «روانشناسی فروش و توجه» و «مهندسی نرم‌افزار» فعالیت می‌کنم. کار من از شکست‌های سخت در استارتاپ‌های عملیاتی تا مدیریت ویدیو مارکتینگ صنعتی و ثبت رکوردهای میلیاردی فروش روزانه گسترش یافته است.",
      p2: "در دورانی که بیشتر برنامه‌نویسان درگیر کدنویسی خط به خط سنتی بودند، متوجه شدم که آینده متعلق به کسانی است که بتوانند با تسلط بر هوش مصنوعی (Cursor, Claude, Codex)، سرعت خلق محصول را ده‌ها برابر کنند؛ مفهومی که امروز به نام Vibe Coding شناخته می‌شود.",
      p3: "ما ظرفیت پذیرش پروژه‌هایمان را به دلیل وسواس شدید بر کیفیت، به ۲ الی ۳ بیزینس منتخب در ماه محدود کرده‌ایم. اگر به دنبال طراحی لندینگ‌پیج یا پلتفرمی اختصاصی با نرخ تبدیل بالا هستید، می‌توانید وارد صف بررسی مشاوره استراتژیک شوید.",
      consultBtn: "درخواست مشاوره استراتژیک ۳۰ دقیقه‌ای",
      consultBadge: "ظرفیت محدود | صف بررسی ماهانه",
      vibeBtn: "مشاهده آموزش‌های وایب‌کدینگ",
      socialLinkedin: "لینکدین رسمی",
      socialInstagram: "اینستاگرام (@shahbusinessman)",
      socialTelegram: "تلگرام",
      profileRole: "طراح سایت، معمار محصول و مدرس Vibe Coding",
      stat1Value: "۸+ سال",
      stat1Label: "تجربه در بازار دیجیتال",
      stat2Value: "۵ سال",
      stat2Label: "ویدیو مارکتینگ و سناریو",
      stat3Value: "۲-۳ پروژه",
      stat3Label: "ظرفیت ماهانه (کیفیت لوکس)",
      stat4Value: "تهران، ایران",
      stat4Label: "رویدادها و جلسات حضوری",
    },
    timeline: {
      badge: "ایستگاه به ایستگاه",
      heading: "آلبوم تصویری و خط زمانی مسیر حرفه‌ای",
      description:
        "هر ایستگاه، سنگی از بنای نگرش و تخصص امروز من است. بدون رتوش و شفاف، با جزئیات این مسیر آشنا شوید:",
      imageDocPrefix: "مستند تصویری ایستگاه",
    },
    milestones: [
      {
        id: "startup-3soot",
        year: "۱۳۹۷ — ۱۳۹۸",
        badge: "جرقه کارآفرینی",
        title: "استارتاپ «۳ سوت» (3soot.app)؛ سفارش آنلاین نان داغ",
        subtitle: "اولین ورود جدی به دنیای استارتاپ‌ها، ساخت محصول دیجیتال و بازار سنتی",
        description:
          "همه چیز از عطش ساختن یک راهکار واقعی برای مردم شروع شد. استارتاپ ۳ سوت با هدف تحویل نان گرم سه سوته به درب منازل در سن ۲۰ سالگی متولد شد؛ همراه با اپلیکیشن اختصاصی، ویدیوی پروموشن در آپارات و ایجاد شبکه تحویل لجستیکی. اینجا اولین میدان نبرد واقعی من با چالش‌های بیزینس، کشش بازار و مدیریت محصول بود.",
        quote:
          "اولین تجربه بیزینسی من بود. فهمیدم داشتن یک ایده نو، فقط ۵ درصد کاره و ۹۵ درصد بقیه به اجرای دقیق و درک روانشناسی رفتار مشتری وابسته است.",
        tags: ["استارتاپ", "کارآفرینی", "مدیریت محصول", "لجستیک شهری"],
        image: {
          src: "/images/about/milestone-1-3soot.jpg",
          alt: "کاور ویدیوی معرفی استارتاپ ۳ سوت در آپارات",
          caption: "کاور رسمی ویدیوی رونمایی استارتاپ ۳ سوت (3soot.app) در آپارات — ارسال آنلاین نان داغ درب منازل",
          tag: "مستندات ویدیویی آپارات ۱۳۹۷",
          externalLink: "https://www.aparat.com/v/z702f4r",
          externalLinkLabel: "مشاهده ویدیو در آپارات",
        },
      },
      {
        id: "corona-pivot",
        year: "۱۳۹۸ — ۱۳۹۹",
        badge: "نقطه عطف و بازسازی",
        title: "توقف استارتاپ، ورود کرونا و یک سال بازبینی استراتژی",
        subtitle: "درس‌های عمیق شکست، پرورش تاب‌آوری و بازتعریف تفکر تجاری",
        description:
          "بعد از ۸ ماه دوندگی نفس‌گیر و درست ۲ ماه قبل از ورود ناگهانی همه‌گیری کرونا به ایران، بیزینس متوقف شد. یک سال بازبینی و بازسازی شخصی گذشت تا فهمیدم هیچ شکستی قطعی نیست مگر اینکه از آن یاد نگیری. متوجه شدم قبل از هر خط کدنویسی و توسعه فنی، باید بازاریابی، جذب توجه و مهندسی ارزش را با گوشت و پوست لمس کرد.",
        quote:
          "یه جا دیدم هیچ‌وقت تو این بازار به اون چیزی که می‌خوام نمی‌رسم... یه ۱ سالی رفتم تو در و دیوار زندگی! ولی دقیقاً همون نقطه تاریک، سرآغاز ۵ سال تسلط من بر محتوا و فروش شد.",
        tags: ["تاب‌آوری", "تحلیل شکست", "تفکر بیزینسی", "نقطه عطف"],
        image: {
          src: "/images/about/milestone-2-resilience.jpg",
          alt: "دوران بازسازی، سکوت و تحلیل استراتژی بیزینس",
          caption: "ایستگاه بازسازی و تحلیل تاب‌آوری؛ شب‌های بازطراحی بیزینس مدل و روانشناسی بازار",
          tag: "تحلیل و بازسازی استراتژی ۱۳۹۸",
        },
      },
      {
        id: "video-marketing-era",
        year: "۱۳۹۹ — ۱۴۰۲",
        badge: "۵ سال تجربه محتوایی",
        title: "حضور سنگین در ویدیو مارکتینگ و سناریونویسی صنعتی",
        subtitle: "خلق محتواهای وایرال، همکاری با کارخانجات و کشف قلاب‌های فروش",
        description:
          "ورود تخصصی و تمام‌وقت به عنوان مشاور، سناریونویس و مجری کمپین‌های ویدیویی برای برندهای سنگین صنعتی و دکوراسیون لوکس (مانند مرجع سنگ صفحه کابینت mr_countertop.ir). تسلط بر اصول روانشناسی جلب توجه (Hook)، حفظ مخاطب در ثانیه‌های طلایی و هدایت ترافیک به قراردادهای میلیاردی روزانه؛ کیفیتی که تا امروز در این صنایع ماندگار است.",
        quote:
          "بهترین و فنی‌ترین سایت دنیا هم اگر نتونه در ثانیه‌های اول توجه مخاطب رو قلاب کنه و نیاز واقعیش رو برطرف کنه، یک بیابان سوت و کوره.",
        tags: ["ویدیو مارکتینگ", "سناریونویسی", "روانشناسی فروش", "برندینگ B2B"],
        image: {
          src: "/images/about/milestone-3-videomarketing.jpg",
          alt: "حسن شاهمرادی در شو روم مستر کانترتاپ",
          caption: "اجرا و سناریونویسی محتوای برند مستر کانترتاپ (mr_countertop.ir)؛ جذب مشتریان B2B و فروش میلیاردی با ویدیو",
          tag: "کمپین‌های اینستاگرامی ۱۳۹۹",
          externalLink: "https://www.instagram.com/mr_countertop.ir/",
          externalLinkLabel: "مشاهده پیج مستر کانترتاپ",
        },
      },
      {
        id: "web-dev-conversion",
        year: "۱۴۰۲ — ۱۴۰۳",
        badge: "مهندسی فرانت‌اند و تبدیل",
        title: "تلفیق محتوا با کد؛ لندینگ‌پیج‌های اختصاصی و پلتفرم‌های پرسرعت",
        subtitle: "طراحی وب پیشرفته با React, Next.js, وردپرس و معماری ماشین فروش",
        description:
          "تصمیم گرفتم فاصله بین «تیم مارکتینگ» و «تیم فنی» را برای همیشه از بین ببرم. با تسلط بر اکوسیستم مدرن فرانت‌اند (Next.js, React, Tailwind, TypeScript)، وب‌سایت‌ها و سیستم‌هایی خلق کردم که به جای قالب‌های تکراری و سنگین، بر مبنای سرعت موشکی، طراحی اختصاصی لوکس و روانشناسی تبدیل مستقیم ساخته شدند.",
        quote:
          "من سایت رو یک کاتالوگ شیک نمی‌بینم؛ یک سایت باید ماشین تبدیل ۲۴ ساعته باشد که حتی وقتی شما خوابید، برای کسب‌وکارتان مشتری وفادار بسازد.",
        tags: ["React & Next.js", "لندینگ‌پیج پرفروش", "طراحی UI/UX", "معماری تبدیل"],
        image: {
          src: "/images/about/milestone-4-frontend.jpg",
          alt: "میز کار مهندسی فرانت‌اند و لندینگ‌پیج‌های پرسرعت",
          caption: "توسعه وب‌سایت‌های مدرن و لندینگ‌پیج‌های اختصاصی بدون قالب آماده با استک Next.js",
          tag: "توسعه وب و مهندسی فرانت‌اند ۱۴۰۲",
        },
      },
      {
        id: "vibe-coding-era",
        year: "۱۴۰۳ تا کنون",
        badge: "عصر هوش مصنوعی",
        title: "پرچمدار و مدرس «وایب‌کدینگ (Vibe Coding)» در ایران",
        subtitle: "خلق نرم‌افزار، وب‌اپلیکیشن و سیستم‌های اختصاصی با هدایت هوش مصنوعی",
        description:
          "با پیدایش مدل‌های پیشرفته زبانی و ابزارهای توسعه هوشمند (Cursor, Claude, Codex)، برنامه‌نویسی سنتی بازتعریف شد. من به عنوان اولین مروج ساختارمند مفهوم وایب‌کدینگ در ایران، روشی را پایه‌گذاری کردم که در آن هر فرد دارای ایده و بینش تجاری، می‌تواند بدون درگیر شدن با خطاهای فرسایشی سینتکس و صرفاً با شفاف‌سازی ذهنی و پرامپت‌نویسی دقیق فارسی و انگلیسی، محصولات نرم‌افزاری کامل بسازد. برگزاری دورهمی‌های حضوری تهران گام بعدی این تحول است.",
        quote:
          "دوران ماه‌های طولانی کد زدن دستی به سر آمده؛ امروز برنده کسی است که چشم‌انداز محصول و سواد بیزینس داشته باشد و بتواند تفکرش را با پرامپت دقیق به واقعیت تبدیل کند.",
        tags: ["وایب‌کدینگ", "هوش مصنوعی مولد", "Cursor & Claude", "کارگاه‌های حضوری"],
        image: {
          src: "/images/about/milestone-5-vibecoding.jpg",
          alt: "حسن شاهمرادی در حال تدریس وایب‌کدینگ روی صحنه در تهران",
          caption: "آموزش و ترویج عملی Vibe Coding در کارگاه‌های حضوری و آنلاین تهران؛ هدایت هوش مصنوعی برای خلق محصولات دیجیتال",
          tag: "رویدادها و ورکشاپ‌های تهران ۱۴۰۳",
          externalLink: "/vibe-coding",
          externalLinkLabel: "مشاهده صفحه وایب‌کدینگ",
        },
      },
    ],
    philosophy: {
      badge: "فلسفه کاری و رویکرد اجرایی",
      heading: "اصولی که اعتبار برند مرا تعریف می‌کنند",
      description: "ما بر خلاف آژانس‌های سنتی، کارخانه‌ای برای تولید وب‌سایت‌های بی‌کیفیت نیستیم. این ۳ اصل هویت ماست:",
      cards: [
        {
          iconType: "trending",
          number: "۰۱",
          title: "اولویت ارزش تجاری بر ادعاهای فنی",
          description:
            "پیچیده‌ترین کدهای جهان اگر به لید، فروش یا حل مشکل کسب‌وکار ختم نشوند، بی‌ارزشند. ما هر سایت و لندینگ را مثل یک بیزینس مستقل با تمرکز بر بازگشت سرمایه (ROI) معماری می‌کنیم.",
        },
        {
          iconType: "shield",
          number: "۰۲",
          title: "ظرفیت محدود ماهانه و صف بررسی گزینشی",
          description:
            "برای حفظ بالاترین سطح کیفیت، در هر ماه صرفاً پذیرش ۲ الی ۳ بیزینس منتخب را قبول می‌کنیم. برای بررسی هماهنگی دیدگاه‌ها، یک جلسه ارزیابی استراتژیک ۳۰ دقیقه‌ای رایگان برگزار می‌کنیم تا در صورت مواءمت، وارد فاز اجرا شویم.",
        },
        {
          iconType: "terminal",
          number: "۰۳",
          title: "خلق محصول ۱۰ برابری با Vibe Coding",
          description:
            "در متدولوژی وایب‌کدینگ، ما زمان فرسایشی کدنویسی دستی را با هدایت هوشمند هوش مصنوعی جایگزین کرده‌ایم. نتیجه: تحویل سیستم‌های باکیفیت و تست‌شده در کسری از زمان مرسوم بازار.",
        },
      ],
    },
    cta: {
      heading: "می‌خواهید در کجای این مسیر همراه من باشید؟",
      description:
        "چه برای اجرای یک پلتفرم یا لندینگ‌پیج با نرخ تبدیل استثنایی و چه برای یادگیری عمیق و تسلط بر وایب‌کدینگ، مسیر آماده است.",
      waitlistBadge: "ظرفیت پذیرش این ماه: در حال تکمیل",
      primaryBtn: "رزرو مشاوره استراتژیک ۳۰ دقیقه‌ای (ورود به صف بررسی)",
      secondaryBtn: "مشاهده دوره‌ها و آموزش وایب‌کدینگ",
      secondarySub: "از صفر تا خلق اولین محصول وب با AI",
    },
  },
  en: {
    meta: {
      title: "About Hasan Shahmoradi | Career Journey, Visual Album & Vibe Coding Pioneer",
      description:
        "Authentic career roadmap and visual documentary of Hasan Shahmoradi: from founding the 3soot logistics startup in 2018 and 5 years in industrial video marketing to modern front-end architecture and pioneering Vibe Coding in Iran.",
    },
    hero: {
      badge: "Authentic Story, Documentary Album & Vision",
      heading: "Hi, I am Hasan Shahmoradi;",
      highlightRole: "Digital Product Architect & Pioneer Vibe Coding Educator in Iran",
      p1: "For over 8 years, I have worked at the exact intersection of deep business strategy, consumer attention psychology, and modern software engineering. My journey spans from operational battlegrounds in urban logistics to directing industrial video campaigns that drove billions in daily sales.",
      p2: "While conventional developers remained confined to manual syntax, I realized the future belongs to architects who direct advanced AI models (Cursor, Claude, Codex) to build products at 10x speed — the paradigm now celebrated worldwide as Vibe Coding.",
      p3: "To preserve uncompromising excellence, client intake is strictly capped at 2 to 3 selective projects per month. If you are building a high-converting web platform, apply for our 30-minute strategic consultation.",
      consultBtn: "Request 30-Min Strategic Consultation",
      consultBadge: "Strict Capacity | Selective Monthly Intake",
      vibeBtn: "Explore Vibe Coding Masterclass",
      socialLinkedin: "Official LinkedIn",
      socialInstagram: "Instagram (@shahbusinessman)",
      socialTelegram: "Telegram Channel",
      profileRole: "Web Architect, Product Strategist & Vibe Coding Educator",
      stat1Value: "8+ Years",
      stat1Label: "Digital Market Experience",
      stat2Value: "5 Years",
      stat2Label: "Industrial Video Marketing",
      stat3Value: "2-3 Projects",
      stat3Label: "Monthly Intake Cap",
      stat4Value: "Tehran, Iran",
      stat4Label: "Workshops & Keynotes",
    },
    timeline: {
      badge: "Milestone by Milestone",
      heading: "Visual Album & Career Roadmap",
      description:
        "Every chapter established a core pillar of my current philosophy. Transparent and grounded, explore the real story below:",
      imageDocPrefix: "Visual Evidence Station",
    },
    milestones: [
      {
        id: "startup-3soot",
        year: "2018 — 2019",
        badge: "Entrepreneurial Spark",
        title: "3soot Logistics Startup (3soot.app); On-Demand Bread Delivery",
        subtitle: "First major venture into startups, mobile product creation, and traditional markets",
        description:
          "It all started with an obsession to build real utility for people. At age 20, 3soot was launched to deliver fresh, warm artisan bread to doorsteps across Tehran, complete with a proprietary mobile app, launch campaign on Aparat, and a motorcycle logistics fleet. This was my first true arena dealing with unit economics, market traction, and product-market fit.",
        quote:
          "It was my foundational business trial. I learned that an idea is only 5% of success — the remaining 95% is relentless execution and understanding consumer psychology.",
        tags: ["Startup", "Entrepreneurship", "Product Management", "Urban Logistics"],
        image: {
          src: "/images/about/milestone-1-3soot.jpg",
          alt: "3soot startup launch video cover on Aparat",
          caption: "Official Aparat video launch cover for 3soot.app — on-demand warm bread doorstep logistics",
          tag: "Aparat Video Archive 2018",
          externalLink: "https://www.aparat.com/v/z702f4r",
          externalLinkLabel: "Watch on Aparat",
        },
      },
      {
        id: "corona-pivot",
        year: "2019 — 2020",
        badge: "Turning Point & Rebuilding",
        title: "Startup Shutdown, COVID-19 Era & The Year of Strategic Reflection",
        subtitle: "Hard lessons from failure, building resilience, and redefining business acumen",
        description:
          "After 8 months of intense operational hustle and exactly two months before COVID-19 hit Iran, the startup was shuttered. A quiet year of deep personal and strategic recalibration followed. I learned that failure is only fatal if you fail to extract wisdom. I realized that before writing any code, one must deeply master marketing, attention capture, and value engineering.",
        quote:
          "I hit an absolute dead end and spent a full year rethinking everything. But that exact dark period became the catalyst for five years of mastering copywriting, video storytelling, and sales.",
        tags: ["Resilience", "Failure Analysis", "Business Mindset", "Pivot"],
        image: {
          src: "/images/about/milestone-2-resilience.jpg",
          alt: "Rebuilding era, strategic analysis and business blueprints",
          caption: "The resilience station: late nights redesigning business models and market psychology blueprints",
          tag: "Strategic Reconstruction 2019",
        },
      },
      {
        id: "video-marketing-era",
        year: "2020 — 2023",
        badge: "5 Years Content Leadership",
        title: "Heavyweight Industrial Video Marketing & Commercial Scriptwriting",
        subtitle: "Engineering viral retention hooks, factory collaborations, and B2B conversion",
        description:
          "Transitioned full-time into consulting, scripting, and executing high-ticket video campaigns for premium industrial and architectural brands (such as countertop authority mr_countertop.ir). Mastered 3-second visual hooks, retention pacing, and turning digital attention into high-ticket sales contracts — standards that remain industry benchmarks to this day.",
        quote:
          "The most sophisticated website in the world is an empty desert if it fails to hook attention in the first three seconds and resolve the visitor's core pain.",
        tags: ["Video Marketing", "Direct Response", "Sales Psychology", "B2B Branding"],
        image: {
          src: "/images/about/milestone-3-videomarketing.jpg",
          alt: "Hasan Shahmoradi in the Mr Countertop showroom",
          caption: "Content production and script execution for mr_countertop.ir; driving high-ticket B2B conversions with video",
          tag: "Instagram Campaigns 2020",
          externalLink: "https://www.instagram.com/mr_countertop.ir/",
          externalLinkLabel: "View Mr Countertop Page",
        },
      },
      {
        id: "web-dev-conversion",
        year: "2023 — 2024",
        badge: "Frontend Architecture",
        title: "Uniting Content with Code: High-Converting Custom Web Platforms",
        subtitle: "Bespoke web engineering with React, Next.js, and high-conversion architecture",
        description:
          "Determined to eliminate the friction between marketing vision and software execution. Leveraging the modern front-end stack (Next.js, React, Tailwind CSS, TypeScript), I engineered web platforms built for speed, bespoke luxury visuals, and conversion optimization, abandoning sluggish pre-made templates for good.",
        quote:
          "A website is not a static digital brochure; it must be a 24/7 conversion engine that turns visitors into loyal advocates even while you sleep.",
        tags: ["React & Next.js", "High-Converting UI", "Frontend Engineering", "CRO"],
        image: {
          src: "/images/about/milestone-4-frontend.jpg",
          alt: "Developer workspace with ultrawide curved monitor",
          caption: "Developing modern custom web applications and bespoke landing platforms using the Next.js stack",
          tag: "Frontend Engineering 2023",
        },
      },
      {
        id: "vibe-coding-era",
        year: "2024 — Present",
        badge: "The AI Era",
        title: "Pioneering & Teaching Vibe Coding in Iran",
        subtitle: "Building software and digital platforms by directing AI models through natural language",
        description:
          "The advent of reasoning LLMs and intelligent IDEs (Cursor, Claude, Codex) revolutionized software creation. As the premier evangelist of structured Vibe Coding in Iran, I introduced a methodology where domain experts and entrepreneurs can ship production-ready web apps simply by directing AI with clear thinking and structured prompts. In-person workshops in Tehran are leading this movement.",
        quote:
          "The era of tedious manual coding is fading. The winners are those with sharp business vision and product clarity who can prompt and orchestrate AI to build reality.",
        tags: ["Vibe Coding", "Generative AI", "Cursor & Claude", "Live Workshops"],
        image: {
          src: "/images/about/milestone-5-vibecoding.jpg",
          alt: "Hasan Shahmoradi teaching Vibe Coding on stage in Tehran",
          caption: "Teaching and establishing Vibe Coding in live workshops and tech keynotes across Tehran",
          tag: "Tehran Workshops 2024",
          externalLink: "/vibe-coding",
          externalLinkLabel: "Explore Vibe Coding",
        },
      },
    ],
    philosophy: {
      badge: "Core Philosophy & Approach",
      heading: "Principles Defining Our Brand Standard",
      description: "Unlike high-volume digital sweatshops, our work is defined by bespoke craftsmanship and three unyielding rules:",
      cards: [
        {
          iconType: "trending",
          number: "01",
          title: "Business ROI Over Technical Vanity",
          description:
            "The cleanest code is worthless if it doesn't generate leads, revenue, or solve a tangible bottleneck. We architect every landing page and app as an autonomous business engine with clear commercial ROI.",
        },
        {
          iconType: "shield",
          number: "02",
          title: "Strict Monthly Cap & Selective Waitlist",
          description:
            "To guarantee undivided focus and bespoke quality, we accept only 2 to 3 selective projects per month. We begin with a complimentary 30-minute strategic qualification session to confirm mutual alignment before onboarding.",
        },
        {
          iconType: "terminal",
          number: "03",
          title: "10x Development Speed with Vibe Coding",
          description:
            "Through our proven Vibe Coding workflows, weeks of manual development are compressed into days through intelligent AI orchestration — producing hardened, production-grade applications at unmatched velocity.",
        },
      ],
    },
    cta: {
      heading: "Where Would You Like to Connect on This Journey?",
      description:
        "Whether you are building a mission-critical web platform or seeking mastery in Vibe Coding, your roadmap begins here.",
      waitlistBadge: "Current Monthly Capacity: Limited Availability",
      primaryBtn: "Book 30-Min Strategic Session (Join Waitlist)",
      secondaryBtn: "Explore Vibe Coding Masterclass",
      secondarySub: "From zero to shipping your first AI-built web product",
    },
  },
  ar: {
    meta: {
      title: "من أنا - حسن شهمرادي | مسيرتي المهنية، ألبوم وثائقي ورائد فايب كودينغ",
      description:
        "المسيرة المهنية الحقيقية والوثائقية لحسن شهمرادي: من تأسيس شركة 3soot اللوجستية عام 2018 و5 سنوات في تسويق الفيديو الصناعي إلى تطوير واجهات الويب وهندسة Vibe Coding في إيران.",
    },
    hero: {
      badge: "قصة واقعية، ألبوم وثائقي ورؤية مستقبلية",
      heading: "مرحباً، أنا حسن شهمرادي؛",
      highlightRole: "مهندس منتجات رقمية ورائد تعليم Vibe Coding في الشرق الأوسط",
      p1: "على مدار أكثر من ۸ سنوات، أعمل عند نقطة التقاء الرؤية التجارية العميقة، سيكولوجية جذب الانتباه والمبيعات، وهندسة البرمجيات الحديثة. تمتد مسيرتي من الميدان اللوجستي الصعب إلى قيادة حملات الفيديو الصناعية التي حققت مبيعات قياسية يومية.",
      p2: "في الوقت الذي انشغل فيه المبرمجون التقليديون بكتابة الكود سطراً بسطر، أدركت أن المستقبل هو لمن يتقن توجيه الذكاء الاصطناعي (Cursor, Claude, Codex) لبناء البرمجيات بسرعة مضاعفة بعشرات المرات؛ وهو المفهوم المعروف عالمياً بـ Vibe Coding.",
      p3: "حرصاً منا على أعلى مستويات الجودة الفاخرة، نحدد طاقتنا الاستيعابية الصارمة بـ ۲ إلى ۳ مشاريع فقط شهرياً. إذا كنت تطمح لتطوير منصة رقمية ذات معدل تحويل استثنائي، يمكنك حجز جلسة استشارية استراتيجية.",
      consultBtn: "طلب استشارة استراتيجية مدتها ۳۰ دقيقة",
      consultBadge: "طاقة محدودة | قائمة انتظار شهرية",
      vibeBtn: "استكشاف دورات فايب كودينغ",
      socialLinkedin: "لينكد إن الرسمي",
      socialInstagram: "إنستغرام (@shahbusinessman)",
      socialTelegram: "قناة تلغرام",
      profileRole: "مصمم مواقع، مهندس منتجات ومحاضر Vibe Coding",
      stat1Value: "+۸ سنوات",
      stat1Label: "خبرة في السوق الرقمي",
      stat2Value: "۵ سنوات",
      stat2Label: "تسويق الفيديو والسيناريو",
      stat3Value: "۲-۳ مشاريع",
      stat3Label: "الحد الأقصى شهرياً",
      stat4Value: "طهران، إيران",
      stat4Label: "ورش وندوات حضورية",
    },
    timeline: {
      badge: "محطة تلو الأخرى",
      heading: "الألبوم المرئي والخط الزمني للمسيرة المهنية",
      description:
        "كل محطة شكلت ركناً أساسياً في فلسفة عملي اليوم. تعرف على تفاصيل الرحلة دون تزييف وبكل شفافية:",
      imageDocPrefix: "وثيقة مرئية للمحطة",
    },
    milestones: [
      {
        id: "startup-3soot",
        year: "۲۰۱۸ — ۲۰۱۹",
        badge: "شرارة ريادة الأعمال",
        title: "الشركة الناشئة «3soot» (3soot.app)؛ توصيل الخبز الطازج فورياً",
        subtitle: "أول خوض جاد في عالم الشركات الناشئة وبناء المنتجات الرقمية واللوجستية",
        description:
          "بدأ كل شيء من الرغبة في حل مشكلة يومية حقيقية للناس. في سن العشرين، تأسست 3soot لتوصيل الخبز الساخن فورياً إلى المنازل في طهران، مدعومة بتطبيق خاص وحملات فيديو عبر منصة أبارات وشبكة توزيع لوجستية. كانت هذه ساحتي الأولى لمواجهة تحديات السوق وسيكولوجية المستهلك.",
        quote:
          "كانت تجربتي التجارية الأولى. أدركت أن الفكرة لا تمثل سوى ۵٪ من النجاح، بينما ۹۵٪ تعتمد على التنفيذ الصارم وفهم سيكولوجية العميل.",
        tags: ["شركة ناشئة", "ريادة أعمال", "إدارة المنتجات", "لوجستيات المدن"],
        image: {
          src: "/images/about/milestone-1-3soot.jpg",
          alt: "غلاف فيديو إطلاق 3soot على أبارات",
          caption: "الغلاف الرسمي لفيديو إطلاق تطبيق 3soot.app على أبارات — توصيل الخبز الساخن للمنازل",
          tag: "أرشيف فيديو أبارات ۲۰۱۸",
          externalLink: "https://www.aparat.com/v/z702f4r",
          externalLinkLabel: "مشاهدة الفيديو على أبارات",
        },
      },
      {
        id: "corona-pivot",
        year: "۲۰۱۹ — ۲۰۲۰",
        badge: "نقطة التحول وإعادة البناء",
        title: "توقف الشركة الناشئة، دخول كورونا وعام من إعادة التقييم الاستراتيجي",
        subtitle: "دروس الإخفاق العميقة، بناء المرونة وإعادة صياغة الفكر التجاري",
        description:
          "بعد ۸ أشهر من العمل المتواصل وقبل شهرين فقط من انتشار جائحة كورونا، توقفت العمليات. مر عام كامل من الصمت والتأمل وبناء الذات، لأدرك أن الفشل لا يصبح نهائياً إلا إذا عجزت عن التعلم منه. تيقنت أنه قبل كتابة أي سطر برمجي، يجب إتقان التسويق وجذب الانتباه وهندسة القيمة.",
        quote:
          "وصلت إلى طريق مسدود وقضيت عاماً كاملاً في مراجعة كل شيء. لكن تلك النقطة المعتمة تحديداً كانت البوابة لخمس سنوات من احتراف كتابة المحتوى والبيع.",
        tags: ["المرونة المؤسسية", "تحليل الأخطاء", "الفكر التجاري", "نقطة التحول"],
        image: {
          src: "/images/about/milestone-2-resilience.jpg",
          alt: "فترة إعادة البناء وتحليل استراتيجية الأعمال",
          caption: "محطة المرونة والتعافي؛ ليالي إعادة رسم نماذج الأعمال ومخططات سيكولوجية السوق",
          tag: "إعادة الهيكلة الاستراتيجية ۲۰۱۹",
        },
      },
      {
        id: "video-marketing-era",
        year: "۲۰۲۰ — ۲۰۲۳",
        badge: "۵ سنوات في صدارة المحتوى",
        title: "الريادة في تسويق الفيديو الصناعي وكتابة السيناريو الإعلاني",
        subtitle: "هندسة المحتوى الفيروسي، التعاون مع المصانع وتحقيق صفقات المبيعات الضخمة",
        description:
          "الانتقال إلى العمل الاستشاري الكامل في إعداد وتنفيذ حملات الفيديو لكبرى العلامات الصناعية ومصنعي الديكور الفاخر (مثل مرجع أسطح المطابخ mr_countertop.ir). إتقان خطافات الانتباه خلال الثواني الثلاث الأولى، والحفاظ على تدفق المشاهدة وتحويلها إلى عقود تجارية كبرى بمليارات التومانات.",
        quote:
          "أحدث موقع في العالم لا قيمة له إذا عجز في الثواني الأولى عن لفت انتباه العميل وحل مشكلته الحقيقية.",
        tags: ["تسويق الفيديو", "كتابة السيناريو", "سيكولوجية البيع", "براندينغ B2B"],
        image: {
          src: "/images/about/milestone-3-videomarketing.jpg",
          alt: "حسن شهمرادي في صالة عرض مستر كانترتوب",
          caption: "تنفيذ وإعداد محتوى العلامة التجارية mr_countertop.ir؛ جذب صفقات B2B ومبيعات كبرى عبر الفيديو",
          tag: "حملات إنستغرام ۲۰۲۰",
          externalLink: "https://www.instagram.com/mr_countertop.ir/",
          externalLinkLabel: "زيارة صفحة مستر كانترتوب",
        },
      },
      {
        id: "web-dev-conversion",
        year: "۲۰۲۳ — ۲۰۲۴",
        badge: "هندسة الواجهات والتحويل",
        title: "دمج التسويق بالكود: صفحات هبوط مخصصة ومنصات فائقة السرعة",
        subtitle: "تطوير مواقع متقدمة بـ React و Next.js وبنية هندسية تضاعف المبيعات",
        description:
          "قررت إلغاء الفجوة نهائياً بين رؤية التسويق والتنفيذ البرمجي. بالاعتماد على أحدث بيئات الواجهات الأمامية (Next.js, React, Tailwind, TypeScript)، طوّرت منصات وصفحات هبوط تعتمد على السرعة الفائقة والتصميم الفاخر وسيكولوجية الإقناع بدلاً من القوالب الجاهزة البطيئة.",
        quote:
          "الموقع ليس مجرد كتالوج رقمي ثابت؛ بل هو ماكينة مبيعات تعمل على مدار الساعة وتجلب لك العملاء الأوفياء حتى أثناء نومك.",
        tags: ["React & Next.js", "صفحات هبوط ذات تحويل عالٍ", "تصميم UI/UX", "هندسة التحويل"],
        image: {
          src: "/images/about/milestone-4-frontend.jpg",
          alt: "بيئة عمل المطور مع شاشة بانورامية عريضة",
          caption: "تطوير مواقع الويب الحديثة وصفحات الهبوط الحصرية دون قوالب جاهزة باستخدام Next.js",
          tag: "تطوير الويب وهندسة الفرونت إند ۲۰۲۳",
        },
      },
      {
        id: "vibe-coding-era",
        year: "۲۰۲۴ — حتى الآن",
        badge: "عصر الذكاء الاصطناعي",
        title: "ريادة وتعليم منهجية «Vibe Coding» في المنطقة",
        subtitle: "بناء البرمجيات والمنصات المتكاملة بتوجيه الذكاء الاصطناعي باللغة الطبيعية",
        description:
          "مع ظهور النماذج اللغوية المتقدمة وأدوات التطوير التوليدية (Cursor, Claude, Codex)، تم تجديد مفهوم البرمجة بالكامل. أطلقت أول برنامج تدريبي منهجي لـ Vibe Coding، حيث يمكن لأي شخص يمتلك رؤية تجارية واضحة أن يطور تطبيقات ويب متكاملة ببساطة من خلال التفكير المنطقي والهندسة الدقيقة للأوامر. تنظيم الورش الحضورية في طهران هو الخطوة التالية في هذه الثورة.",
        quote:
          "عصر قضاء شهور طويلة في كتابة الأكواد اليدوية قد انتهى؛ الفائز اليوم هو من يمتلك بصيرة السوق والقدرة على توجيه الذكاء الاصطناعي لتحويل الفكرة إلى واقع.",
        tags: ["فايب كودينغ", "ذكاء اصطناعي توليدي", "Cursor & Claude", "ورش عمل حضورية"],
        image: {
          src: "/images/about/milestone-5-vibecoding.jpg",
          alt: "حسن شهمرادي يلقي محاضرة حول Vibe Coding في طهران",
          caption: "تعليم وترسيخ منهجية Vibe Coding في الورش المباشرة واللقاءات التقنية في طهران",
          tag: "ورش طهران المباشرة ۲۰۲۴",
          externalLink: "/vibe-coding",
          externalLinkLabel: "استكشاف صفحة Vibe Coding",
        },
      },
    ],
    philosophy: {
      badge: "فلسفة العمل والنهج التنفيذي",
      heading: "المبادئ التي تحدد معيار علامتنا التجارية",
      description: "لسنا مصنعاً لإنتاج المواقع الرديئة المتكررة، بل نلتزم بثلاثة مبادئ حاسمة تضمن التميز المطلق:",
      cards: [
        {
          iconType: "trending",
          number: "۰۱",
          title: "أولوية العائد التجاري على التباهي التقني",
          description:
            "أعقد الأكواد البرمجية تصبح عديمة القيمة إن لم تثمر عن مبيعات أو تحل مشكلة حقيقية. نحن نبني كل صفحة ومنصة ككيان استثماري مستقل يركز على سرعة استرداد رأس المال (ROI).",
        },
        {
          iconType: "shield",
          number: "۰۲",
          title: "طاقة شهرية محدودة وقائمة انتظار انتقائية",
          description:
            "لضمان أقصى درجات الإتقان والاهتمام الشخصي، نقبل ۲ إلى ۳ مشاريع مختارة فقط في الشهر. نبدأ بجلسة تقييم استراتيجي مدتها ۳۰ دقيقة مجاناً للتأكد من التوافق قبل الشروع في التنفيذ.",
        },
        {
          iconType: "terminal",
          number: "۰۳",
          title: "سرعة مضاعفة ۱۰ مرات عبر Vibe Coding",
          description:
            "من خلال منهجية فايب كودينغ، اختصرنا أسابيع التطوير التقليدي إلى أيام معدودة بفضل التوجيه الذكي للذكاء الاصطناعي، لنقدم أنظمة عالية المتانة والأمان في وقت قياسي.",
        },
      ],
    },
    cta: {
      heading: "أين ترغب في الانضمام إليّ في هذه الرحلة؟",
      description:
        "سواء كنت تطمح لبناء منصة رقمية ذات معدل تحويل فائق، أو ترغب في إتقان منهجية Vibe Coding، الطريق ممهد أمامك.",
      waitlistBadge: "الطاقة الاستيعابية لهذا الشهر: أوشكت على الاكتمال",
      primaryBtn: "حجز جلسة استشارية استراتيجية (۳۰ دقيقة)",
      secondaryBtn: "استكشاف دورات ومنهج Vibe Coding",
      secondarySub: "من الصفر حتى إطلاق أول تطبيق ويب بالذكاء الاصطناعي",
    },
  },
};
