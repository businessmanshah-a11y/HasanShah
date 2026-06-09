const BASE = "https://hasanshah.ir";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE}/#person`,
    name: "حسن شاهمرادی",
    alternateName: ["Hasan Shahmoradi", "Hassan Shahmoradi"],
    url: BASE,
    image: `${BASE}/images/Shah2.webp`,
    sameAs: [
      "https://linkedin.com/in/hasanshah",
      "https://github.com/hasanshah",
    ],
    jobTitle: "طراح، توسعه‌دهنده و استراتژیست دیجیتال",
    description:
      "حسن شاهمرادی طراح وب، توسعه‌دهنده فرانت‌اند و استراتژیست دیجیتال ایرانی است. بیش از ۸ سال تجربه در ساخت محصولات دیجیتال، فروشگاه‌های آنلاین، و آموزش وایب‌کدینگ با ابزارهای هوش مصنوعی.",
    knowsAbout: [
      "طراحی وب",
      "توسعه فرانت‌اند",
      "وایب‌کدینگ",
      "هوش مصنوعی",
      "استراتژی دیجیتال",
      "Next.js",
      "React",
      "Cursor",
      "Claude AI",
    ],
    inLanguage: "fa",
    worksFor: {
      "@type": "Organization",
      name: "HSH Studio",
      url: BASE,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IR",
    },
    offers: {
      "@type": "Offer",
      name: "سایت تک‌صفحه‌ای اختصاصی رایگان",
      description:
        "طراحی و تحویل سایت تک‌صفحه‌ای اختصاصی رایگان حداکثر ظرف ۷۲ ساعت روی دامنه آزمایشی، بدون پیش‌پرداخت.",
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
    name: "حسن شاهمرادی",
    description:
      "پورتفولیو، خدمات طراحی وب، و آموزش وایب‌کدینگ حسن شاهمرادی",
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
        name: "چطور با حسن شاهمرادی کار کنیم؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "از طریق فرم تماس در سایت hasanshah.ir می‌توانید درخواست خود را ثبت کنید. پس از بررسی، نمونه اولیه سایت را ظرف ۷۲ ساعت دریافت خواهید کرد.",
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
    description:
      "یاد بگیر با ابزارهای هوش مصنوعی مانند Cursor، Claude و Codex ایده‌ات را به محصول دیجیتال واقعی تبدیل کنی. از پیش‌تولید ایده تا پرامپت‌نویسی، تست و انتشار.",
    url: `${BASE}/vibe-coding`,
    inLanguage: "fa",
    provider: { "@id": `${BASE}/#person` },
    author: { "@id": `${BASE}/#person` },
    educationalLevel: "Beginner",
    teaches: [
      "وایب‌کدینگ با هوش مصنوعی",
      "پیش‌تولید ایده دیجیتال",
      "پرامپت‌نویسی دقیق",
      "استفاده از Cursor، Claude و Codex",
      "ساخت و انتشار محصول با GitHub و Vercel",
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      name: "دورهمی حضوری رایگان وایب‌کدینگ",
      description:
        "دورهمی آموزشی حضوری رایگان وایب‌کدینگ با حسن شاهمرادی. ظرفیت از شنبه ۲۳ خرداد باز می‌شود.",
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
    name: "دورهمی آموزشی حضوری رایگان وایب‌کدینگ",
    description:
      "یک دورهمی حضوری رایگان برای آموختن وایب‌کدینگ از صفر. از انتخاب ابزار تا تبدیل ایده خام به محصول قابل تست با کمک هوش مصنوعی.",
    url: `${BASE}/vibe-coding#workshop`,
    inLanguage: "fa",
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
      name: "تهران",
      address: {
        "@type": "PostalAddress",
        addressLocality: "تهران",
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
          text: "سه ابزار اصلی: Cursor (ادیتور AI-first برای کار روی پروژه)، Claude (برای طراحی ساختار و فکر کردن)، و Codex (برای اجرای تغییرات و تست). علاوه بر اینها GitHub برای نگهداری کد و Vercel برای انتشار سایت.",
        },
      },
      {
        "@type": "Question",
        name: "آیا برای وایب‌کدینگ باید برنامه‌نویسی بلد باشم؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "خیر. وایب‌کدینگ دقیقاً برای افرادی طراحی شده که می‌خواهند ایده‌هایشان را به محصول تبدیل کنند بدون اینکه کدنویسی حرفه‌ای بلد باشند. مهارت اصلی، توانایی توصیف دقیق مسئله و خروجی مطلوب است.",
        },
      },
      {
        "@type": "Question",
        name: "دورهمی وایب‌کدینگ چه زمانی و کجا برگزار می‌شود؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "دورهمی حضوری رایگان وایب‌کدینگ در تهران برگزار می‌شود. ظرفیت از شنبه ۲۳ خرداد باز می‌شود. با پیش‌ثبت‌نام در صفحه آموزش وایب‌کدینگ، اول به شما خبر می‌دهیم.",
        },
      },
      {
        "@type": "Question",
        name: "پیش‌تولید ایده در وایب‌کدینگ به چه معناست؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "پیش‌تولید یعنی قبل از اینکه به AI کد بزنی، ابتدا کاربر هدف، مشکل، اسکوپ نسخه اول و فلو کاربری را مشخص کنی. هر چقدر پیش‌تولید دقیق‌تر باشد، AI کمتر حدس می‌زند و خروجی بهتری تولید می‌کند.",
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
