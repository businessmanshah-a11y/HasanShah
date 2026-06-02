import type { Dictionary } from "./fa";

// English (en) — natural, humanized copy. Matches the shape of fa.ts.

const en: Dictionary = {
  brand: {
    name: "Hasan Shahmoradi",
    role: "Web designer & digital growth strategist",
  },

  nav: {
    about: "About",
    services: "Services",
    portfolio: "Work",
    contact: "Contact",
    cta: "Free site",
    menu: "Menu",
  },

  hero: {
    badge: "Free one-page website campaign",
    title: "We'll build your brand a *free* one-page website",
    desc: "No strings, no deposit. Our team delivers a custom, well-designed one-page site on a staging domain in 72 hours or less. You get a full month to look it over and decide where we go next.",
    ctaPrimary: "Get my free site",
    ctaSecondary: "See the work",
    trustDelivery: "Delivered on a staging domain",
    trustTime: "72 hours max",
  },

  pain: {
    title: "Without a site, you're missing more than just *one page*",
    desc: "A big part of your brand's trust, story, and sales stays outside your control. A good website isn't here to replace Instagram — it's here to be the steadier pillar standing next to it.",
    stats: [
      { suffix: " path", label: "A sales channel that stands on its own, beside Instagram" },
      { suffix: " page", label: "A professional intro for serious customers" },
      { suffix: " form", label: "Lead capture that won't get lost in your DMs" },
      { suffix: " brand", label: "An identity people can trust and actually find" },
    ],
    questions: [
      "When a serious customer asks for your website, what do you send them?",
      "Are your sales tied entirely to DMs and the mood of the algorithm?",
      "How clear is the path from discovery to trust to order for your customer?",
      "Does your brand look just as professional outside of Instagram?",
    ],
  },

  about: {
    title: "I don't just *build websites* — I help your brand *get taken seriously*",
    p1: "For seven years I've worked with businesses across digital, social media, and online sales. My experience goes beyond designing a page: from building trust journeys to helping two well-known Instagram brands hit billions in daily sales alongside their teams.",
    p2: "To me, a website earns its keep when it matches the reality of the business: it says the right thing, runs fast and clean, and moves the customer to their next decision without friction.",
    nameEyebrow: "Hasan Shahmoradi",
    roleTitle: "Designer, developer & strategist",
    numbers: [
      { value: 7, suffix: " yrs", label: "In digital & social media marketing" },
      { value: 2, suffix: " brands", label: "Hit billion-toman daily sales on Instagram" },
      { value: 20, suffix: " teams", label: "Successful collaborations with brands" },
      { value: 5, suffix: " projects", label: "Full builds with custom features" },
    ],
    expertise: [
      { name: "UX design", note: "A simpler path to trust and purchase" },
      { name: "Modern web development", note: "React · Next.js · TypeScript" },
      { name: "Marketing & growth", note: "Social, content, and the sales journey" },
      { name: "Brand positioning", note: "A clearer voice, identity, and offer" },
    ],
  },

  services: {
    title: "Everything your business *actually needs*",
    desc: "From design to launch, with an eye on both the user experience and the reality of sales.",
    items: [
      { title: "E-commerce websites", desc: "A store that makes browsing, trust, checkout, and order tracking simple and clean for your customer." },
      { title: "Service websites", desc: "A site that explains your services clearly, builds trust, and turns scattered calls into trackable requests." },
      { title: "Startup & landing sites", desc: "A one-page or intro site for when you need to present your idea, product, or edge fast and clearly." },
      { title: "Personal branding", desc: "A personal website for experts and public figures who want their identity, experience, and way of working to be clear." },
      { title: "Digital marketing", desc: "Help shaping your content, social, SEO, and lead-gen path — so the site isn't just built, it enters a growth cycle." },
    ],
  },

  portfolio: {
    title: "Projects that *actually shipped*",
    desc: "Five complete projects with different needs, custom features, and a focus on the real user experience.",
    filters: { all: "All", shop: "Shop", service: "Service", personal: "Personal" },
    view: "Visit",
    openPrefix: "Open",
    fallbackCategory: "Project",
    projects: {
      "Lux Counter": "Luxury watch store — bilingual with two themes",
      "Rubifo": "Multi-purpose online store — Persian with two themes",
      "Startup MVP": "Startup one-pager with a product-intro structure",
      "Personal Brand": "Personal branding website for an expert",
      "Service Business": "A professional services showcase site",
    },
  },

  offer: {
    badge: "Special campaign — free one-page website",
    title: "Get a real website first, *then decide* whether you want to keep working together",
    desc: "Fill out the form and our team will design and build a custom one-page site around your brand, audience, and goal. In 72 hours or less, a ready version lands on a staging domain — no deposit, no contract, no strings attached.",
    afterTitle: "What happens after delivery?",
    afterDesc: "The site stays on a staging domain for up to a month for you to review. If the quality, the speed, and the direction work for you, we'll talk about a longer partnership or building out a fuller version. If not, you're under no obligation at all.",
    cta: "Open the free-site form",
    featuresTitle: "What's included in this campaign?",
    features: [
      "Design and build of a custom one-page website",
      "Delivered in 72 hours or less on a staging domain",
      "Responsive across mobile, tablet, and desktop",
      "Custom design shaped around your brand, audience, and sales goal",
      "A contact form or the right channel to capture leads",
      "A full month to review and decide on working together",
    ],
  },

  footer: {
    telegram: "Telegram",
    phone: "+98 912 087 0095",
    rights: "© 2025 — All rights reserved.",
    credit: "Designed & built by Hasan Shahmoradi",
  },

  form: {
    title: "Claim your *free website*",
    subtitle: "A few quick questions so our team can have your custom one-page site ready on a staging domain within 72 hours.",
    steps: ["Basics", "Mindset", "Audience & market", "Visual identity"],
    selectPlaceholder: "Choose one...",
    done: {
      title: "Your answers are in!",
      desc: "Thanks for taking the time to answer. Your details are saved and we're starting on the design. We'll reach out through the channel you gave us to coordinate the staging version and the timeline.",
      again: "Submit another form",
    },
    buttons: {
      prev: "Back",
      next: "Next step",
      submit: "Submit",
      submitting: "Submitting...",
    },
    toasts: {
      incomplete: "Please complete the required fields",
      error: "Something went wrong. Please try again or reach out directly.",
    },
    labels: {
      fullName: "Full name",
      contact: "Phone number / Telegram ID",
      businessType: "What kind of business do you run?",
      businessDescription: "Describe your business in a sentence or two — what do you sell or what service do you offer?",
      hasSite: "Do you have a website right now?",
      instagramLoss: "If Instagram were down for a few days, how much would your sales take a hit?",
      competitorIncome: "What role do you think a website plays for your serious competitors?",
      whyNow: "Why haven't you had a site until now (or what brought you here)?",
      ageRange: "What age range are most of your customers?",
      audienceLocation: "Where is your ideal customer?",
      expectedIncome: "Which sales range do you expect the site to move the most?",
      hasLogo: "Do you have a logo?",
      brandColor: "Brand color palette",
      vibes: "What vibe should your site have? (up to 4)",
      mainGoal: "Your most important goal for having a site?",
      firstAction: "Once your free site is live on a staging domain, where's the first place you'll use the link?",
    },
    placeholders: {
      fullName: "e.g. Ali Mohammadi",
      contact: "09120000000 or @username",
      businessDescription: "e.g. Online women's fashion | Skin & beauty clinic | Private math tutoring...",
      siteUrl: "Website URL (optional) — e.g. mysite.com",
      customColor: "Color code or description — e.g. #2563eb or deep blue and gold",
      firstAction: "e.g. I'll put the link in my Instagram bio, or send it to serious customers...",
    },
    logo: {
      choose: "Choose your logo file...",
      pick: "Browse",
    },
    color: {
      otherTitle: "Other (custom color)",
      otherShort: "Other",
    },
    errors: {
      required: "Please pick an option",
      fullName: "Enter your full name",
      contact: "Enter a valid phone number or Telegram ID",
      businessDescription: "Write a short description",
      brandColor: "Pick a palette",
      vibes: "Choose at least one vibe",
      firstAction: "Write a short sentence",
    },
    options: {
      businessType: {
        shop: "Shop",
        service: "Service-based",
        startup: "Startup",
        personal: "Personal brand",
        restaurant: "Restaurant",
        education: "Education",
        other: "Other",
      },
      hasSite: {
        yes: "Yes, I do",
        no: "No, I don't",
        inactive: "I had one, but it's not active",
      },
      instagramLoss: {
        low: "Not much impact",
        some: "Sales and contact slow down a little",
        major: "A big part of my sales falls behind",
        critical: "My main sales channel basically breaks down",
      },
      competitorIncome: {
        brand: "Mostly to introduce the brand",
        leads: "To attract leads and inquiries",
        directSales: "For direct sales",
        trust: "To build trust alongside Instagram",
      },
      whyNow: {
        justStarted: "I just got started",
        tiredOfInsta: "I'm tired of depending on Instagram",
        professional: "I want a professional brand",
        organized: "I want my sales and leads to be more organized",
      },
      ageRange: {
        under25: "Under 25",
        from25to35: "25 to 35",
        from35to50: "35 to 50",
        over50: "Over 50",
        mixed: "Mixed",
      },
      audienceLocation: {
        local: "Local (one city)",
        iran: "All across Iran",
        abroad: "Outside the country",
        everywhere: "Everywhere",
      },
      expectedIncome: {
        small: "Small, steady sales",
        leads: "More serious leads to follow up",
        orders: "More direct orders",
        big: "Bigger contracts or sales",
      },
      hasLogo: {
        yes: "Yes, I do",
        no: "No, I don't",
        redesign: "I have one, but it needs a redesign",
      },
      vibes: {
        luxury: "Luxurious",
        modern: "Modern",
        friendly: "Friendly",
        bold: "Bold",
        simple: "Simple",
        trust: "Trustworthy",
      },
      mainGoal: {
        sales: "Increase sales",
        leads: "Capture leads",
        brand: "Introduce the brand",
        trust: "Build trust",
        booking: "Take bookings / reservations",
      },
      palettes: {
        luxGoldBlack: "Luxe gold & black",
        blueWhite: "Trustworthy blue & white",
        greenCream: "Natural green & cream",
        redBlack: "Bold red & black",
        purplePink: "Modern purple & pink",
        grayOrange: "Warm gray & orange",
      },
    },
  },
};

export default en;
