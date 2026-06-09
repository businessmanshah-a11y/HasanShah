const BASE = "https://hasanshah.ir";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE}/#person`,
    name: "حسن شاهمرادی",
    alternateName: ["Hasan Shahmoradi", "Hassan Shahmoradi", "حسن شاهمرادي"],
    url: BASE,
    image: `${BASE}/images/Shah2.webp`,
    sameAs: [
      "https://linkedin.com/in/hasanshah",
      "https://github.com/hasanshah",
    ],
    jobTitle: [
      "طراح، توسعه‌دهنده و استراتژیست دیجیتال",
      "Web Designer, Developer & Digital Strategist",
      "مصمّم مواقع ومطوّر واستراتيجي رقمي",
    ],
    description:
      "Hasan Shahmoradi is an Iranian web designer, front-end developer, and digital strategist with over 8 years of experience building digital products, online stores, and teaching vibe coding with AI tools like Cursor, Claude, and Codex.",
    knowsAbout: [
      "Web Design",
      "طراحی وب",
      "Front-end Development",
      "توسعه فرانت‌اند",
      "Vibe Coding",
      "وایب‌کدینگ",
      "Artificial Intelligence",
      "هوش مصنوعی",
      "Digital Strategy",
      "Next.js",
      "React",
      "TypeScript",
      "Cursor",
      "Claude AI",
      "Codex",
    ],
    inLanguage: ["fa", "en", "ar"],
    worksFor: {
      "@type": "Organization",
      name: "HSH Studio",
      url: BASE,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IR",
      addressLocality: "Tehran",
    },
    offers: {
      "@type": "Offer",
      name: "Free one-page website",
      description:
        "Custom one-page website designed and delivered in 72 hours on a staging domain. No upfront payment, no strings attached.",
      price: "0",
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
      url: `${BASE}/#offer`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "Hasan Shahmoradi | حسن شاهمرادی",
    description:
      "Portfolio, web design services, and vibe coding education by Hasan Shahmoradi.",
    inLanguage: ["fa", "en", "ar"],
    author: { "@id": `${BASE}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MainPageFaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      // Persian
      {
        "@type": "Question",
        name: "حسن شاهمرادی کیست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "حسن شاهمرادی طراح وب، توسعه‌دهنده فرانت‌اند و استراتژیست دیجیتال ایرانی با بیش از ۸ سال تجربه است. او در حوزه ساخت محصولات دیجیتال، فروشگاه آنلاین و آموزش وایب‌کدینگ با هوش مصنوعی فعالیت می‌کند.",
        },
      },
      {
        "@type": "Question",
        name: "سایت رایگان حسن شاهمرادی چیست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "حسن شاهمرادی یک سایت تک‌صفحه‌ای اختصاصی رایگان طراحی و حداکثر ظرف ۷۲ ساعت روی دامنه آزمایشی تحویل می‌دهد. هیچ پیش‌پرداخت یا پیش‌شرطی لازم نیست.",
        },
      },
      {
        "@type": "Question",
        name: "وایب‌کدینگ چیست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "وایب‌کدینگ (Vibe Coding) روشی است که با کمک ابزارهای هوش مصنوعی مانند Cursor، Claude و Codex می‌توان بدون دانش عمیق برنامه‌نویسی ایده‌های دیجیتال را به محصول واقعی تبدیل کرد.",
        },
      },
      // English
      {
        "@type": "Question",
        name: "Who is Hasan Shahmoradi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hasan Shahmoradi is an Iranian web designer, front-end developer, and digital strategist with over 8 years of experience. He builds digital products and online stores, and teaches vibe coding — building products using AI tools like Cursor, Claude, and Codex.",
        },
      },
      {
        "@type": "Question",
        name: "What is Hasan Shahmoradi's free website offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hasan designs and delivers a custom one-page website in 72 hours on a staging domain. No deposit, no contract, no strings attached. You get a full month to review it before deciding on any further collaboration.",
        },
      },
      {
        "@type": "Question",
        name: "What is vibe coding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vibe coding means building digital products with AI tools like Cursor, Claude, and Codex without needing deep programming knowledge. You describe what you want, give the AI context, and iterate on the output.",
        },
      },
      // Arabic
      {
        "@type": "Question",
        name: "من هو حسن شاهمرادي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "حسن شاهمرادي مصمّم مواقع ومطوّر واجهات أمامية واستراتيجي رقمي إيراني بخبرة تتجاوز ثماني سنوات. يبني المنتجات الرقمية والمتاجر الإلكترونية، ويعلّم Vibe Coding — أي بناء المنتجات بمساعدة أدوات الذكاء الاصطناعي مثل Cursor وClaude وCodex.",
        },
      },
      {
        "@type": "Question",
        name: "ما Vibe Coding؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vibe Coding يعني بناء منتجات رقمية بمساعدة أدوات الذكاء الاصطناعي مثل Cursor وClaude وCodex دون الحاجة إلى خبرة برمجية عميقة. تصف ما تريد، تعطي الذكاء الاصطناعي السياق، وتكرّر حتى تصل إلى النتيجة.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VibeCodingBreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "حسن شاهمرادی",
        item: BASE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "آموزش وایب‌کدینگ",
        item: `${BASE}/vibe-coding`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VibeCodingCourseJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${BASE}/vibe-coding#course`,
    name: "آموزش وایب‌کدینگ از صفر تا ساخت محصول",
    alternateName: [
      "Vibe Coding Course — from zero to working product",
      "تعلّم Vibe Coding من الصفر إلى منتج حقيقي",
    ],
    description:
      "Learn to turn your ideas into real digital products using AI tools — Cursor, Claude, and Codex. Covers idea pre-production, prompt writing, testing, and publishing.",
    url: `${BASE}/vibe-coding`,
    inLanguage: ["fa", "en", "ar"],
    provider: { "@id": `${BASE}/#person` },
    author: { "@id": `${BASE}/#person` },
    educationalLevel: "Beginner",
    teaches: [
      "Vibe Coding with AI tools",
      "وایب‌کدینگ با هوش مصنوعی",
      "Idea pre-production",
      "پیش‌تولید ایده دیجیتال",
      "Prompt writing",
      "پرامپت‌نویسی دقیق",
      "Using Cursor, Claude, and Codex",
      "Publishing with GitHub and Vercel",
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      name: "Free in-person vibe coding meetup — Tehran",
      description:
        "Free in-person vibe coding meetup with Hasan Shahmoradi in Tehran. Capacity opens June 13.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IRR",
        availability: "https://schema.org/InStock",
        url: `${BASE}/vibe-coding#workshop`,
      },
    },
    isAccessibleForFree: true,
    image: `${BASE}/images/profile.webp`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VibeCodingEventJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${BASE}/vibe-coding#event`,
    name: "Free In-Person Vibe Coding Meetup — Tehran",
    alternateName: [
      "دورهمی آموزشی حضوری رایگان وایب‌کدینگ — تهران",
      "لقاء Vibe Coding الحضوري المجاني — طهران",
    ],
    description:
      "A free in-person meetup to learn vibe coding from scratch — from choosing tools to turning a raw idea into a testable product with AI.",
    url: `${BASE}/vibe-coding#workshop`,
    inLanguage: ["fa", "en", "ar"],
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    organizer: { "@id": `${BASE}/#person` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
      url: `${BASE}/vibe-coding#workshop`,
      validFrom: "2025-06-14",
    },
    location: {
      "@type": "Place",
      name: "Tehran",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tehran",
        addressCountry: "IR",
      },
    },
    image: `${BASE}/images/profile.webp`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VibeCodingFaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      // Persian
      {
        "@type": "Question",
        name: "وایب‌کدینگ چیست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "وایب‌کدینگ یعنی ساختن محصول دیجیتال با کمک ابزارهای هوش مصنوعی مثل Cursor، Claude و Codex بدون نیاز به دانش عمیق برنامه‌نویسی. ایده خام را در قالب پرامپت به AI می‌دهی و خروجی قابل استفاده می‌گیری.",
        },
      },
      {
        "@type": "Question",
        name: "برای وایب‌کدینگ به چه ابزارهایی نیاز دارم؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "سه ابزار اصلی: Cursor (ادیتور AI-first)، Claude (برای طراحی ساختار)، و Codex (برای اجرای تغییرات). علاوه بر اینها GitHub برای نگهداری کد و Vercel برای انتشار.",
        },
      },
      {
        "@type": "Question",
        name: "آیا برای وایب‌کدینگ باید برنامه‌نویسی بلد باشم؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "خیر. وایب‌کدینگ برای کسانی است که می‌خواهند ایده‌هایشان را به محصول تبدیل کنند بدون کدنویسی حرفه‌ای. مهارت اصلی توصیف دقیق مسئله و خروجی مطلوب است.",
        },
      },
      {
        "@type": "Question",
        name: "دورهمی وایب‌کدینگ کجاست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "دورهمی حضوری رایگان وایب‌کدینگ در تهران برگزار می‌شود. ظرفیت از شنبه ۲۳ خرداد باز می‌شود. با پیش‌ثبت‌نام اول خبر می‌گیری.",
        },
      },
      // English
      {
        "@type": "Question",
        name: "What is vibe coding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vibe coding means building digital products using AI tools like Cursor, Claude, and Codex without needing deep programming knowledge. You describe what you want, give the AI context, and iterate on the output until it works.",
        },
      },
      {
        "@type": "Question",
        name: "What tools do I need for vibe coding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The three main tools are Cursor (an AI-first editor for working inside a real project), Claude (for thinking through structure and writing), and Codex (for executing changes and running tests). You also need GitHub for version control and Vercel to publish.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to know programming to do vibe coding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Vibe coding is designed for people who want to turn ideas into products without professional programming skills. The main skill is describing the problem and the desired output clearly enough for the AI to act on it.",
        },
      },
      {
        "@type": "Question",
        name: "What is pre-production in vibe coding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pre-production means clarifying who the user is, what problem they have, what v1 should include, and how the user flow works — before asking AI to write any code. The clearer the pre-production, the less the AI has to guess.",
        },
      },
      // Arabic
      {
        "@type": "Question",
        name: "ما Vibe Coding؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vibe Coding يعني بناء منتجات رقمية بمساعدة أدوات الذكاء الاصطناعي مثل Cursor وClaude وCodex دون الحاجة إلى خبرة برمجية عميقة. تصف ما تريد، تعطي الذكاء الاصطناعي السياق، وتكرّر حتى تصل إلى النتيجة.",
        },
      },
      {
        "@type": "Question",
        name: "ما الأدوات التي أحتاجها لـVibe Coding؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ثلاثة أدوات رئيسية: Cursor (محرّر AI-first للعمل داخل المشروع)، Claude (للتفكير والكتابة)، وCodex (لتنفيذ التغييرات والاختبارات). بالإضافة إلى GitHub لحفظ الكود وVercel للنشر.",
        },
      },
      {
        "@type": "Question",
        name: "هل أحتاج إلى معرفة البرمجة لممارسة Vibe Coding؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "لا. Vibe Coding مصمَّم لمن يريد تحويل أفكاره إلى منتجات دون مهارات برمجية احترافية. المهارة الأساسية هي وصف المشكلة والناتج المطلوب بدقة كافية كي يتصرّف الذكاء الاصطناعي بناءً عليها.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
