// scripts/generate-category-banners.mjs
import sharp from "sharp";
import fs from "fs";
import path from "path";

const categories = [
  {
    num: "02",
    slug: "ai-video-cat-02-billboard.webp",
    themeColor: "#38bdf8",
    secondaryColor: "#e5c158",
    tagline: "ANAMORPHIC 3D OUTDOOR DISPLAY",
    mainTitle: "TIMES SQUARE 3D REVEAL",
    subTitle: "Optical Illusion Commercials &amp; Giant Street Displays",
    primaryCmd: "/TimesSquare3DReveal",
    subCmds: "/BillboardReveal • /HologramBillboard • /LEDWallAd • /CityScreenTakeover • /MallDisplay",
    titleFa: "تبدیل عکس محصول به بیلبوردهای سه‌بعدی و نمایشگرهای غول‌پیکر شهری",
    centerGraphic: `
      <!-- 3D Curved LED Screen Wireframe -->
      <polygon points="120,40 500,70 500,360 120,400" fill="#0f172a" stroke="#38bdf8" stroke-width="2" stroke-opacity="0.5"/>
      <polygon points="500,70 880,30 880,390 500,360" fill="#0b111e" stroke="#38bdf8" stroke-width="2" stroke-opacity="0.5"/>
      <line x1="500" y1="70" x2="500" y2="360" stroke="#67e8f9" stroke-width="3" opacity="0.9"/>
      <circle cx="500" cy="210" r="70" fill="#e5c158" fill-opacity="0.15" stroke="#e5c158" stroke-width="2"/>
      <text x="500" y="217" text-anchor="middle" fill="#FCEBA4" font-family="monospace" font-size="22" font-weight="900">3D OUT</text>
    `
  },
  {
    num: "03",
    slug: "ai-video-cat-03-cinematic.webp",
    themeColor: "#e5c158",
    secondaryColor: "#f59e0b",
    tagline: "HOLLYWOOD PRODUCTION PACING",
    mainTitle: "CINEMATIC MASTERCLASS",
    subTitle: "2.39:1 Anamorphic Framing, 35mm Film Grain &amp; Director Pacing",
    primaryCmd: "/Cinematic",
    subCmds: "/MovieScene • /HollywoodShot • /NetflixStyle • /SciFiMovie • /EpicFinale",
    titleFa: "روایت سینمایی، نسبت‌های هالیوودی و گرید رنگی فیلم‌های بلاک‌باستر",
    centerGraphic: `
      <!-- Camera Aperture &amp; Film Frame -->
      <rect x="250" y="60" width="500" height="280" rx="12" fill="#090d16" stroke="#e5c158" stroke-width="2" stroke-opacity="0.6"/>
      <circle cx="500" cy="200" r="85" fill="none" stroke="#e5c158" stroke-width="2" stroke-dasharray="8 6"/>
      <circle cx="500" cy="200" r="50" fill="#e5c158" fill-opacity="0.12" stroke="#fceba4" stroke-width="2"/>
      <polygon points="480,180 535,200 480,220" fill="#e5c158"/>
      <!-- Anamorphic Scope crop bars -->
      <line x1="250" y1="95" x2="750" y2="95" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
      <line x1="250" y1="305" x2="750" y2="305" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1"/>
      <text x="500" y="85" text-anchor="middle" fill="#94A3B8" font-family="monospace" font-size="11" letter-spacing="2">2.39:1 ANAMORPHIC SCOPE</text>
    `
  },
  {
    num: "04",
    slug: "ai-video-cat-04-lighting-weather.webp",
    themeColor: "#f59e0b",
    secondaryColor: "#38bdf8",
    tagline: "ATMOSPHERIC LIGHTING SPECTRUM",
    mainTitle: "GOLDEN HOUR &amp; VOLUMETRICS",
    subTitle: "Kelvin Color Calibration, Cyberpunk Rain Slicks &amp; God Rays",
    primaryCmd: "/GoldenHour",
    subCmds: "/BlueHour • /SunsetGlow • /RainMood • /VolumetricFog • /CloudBreak",
    titleFa: "نورپردازی طلایی، اتمسفر بارانی، مه حجمی و شرایط آب‌وهوایی دراماتیک",
    centerGraphic: `
      <!-- Sun Rays &amp; Prism Flare -->
      <circle cx="500" cy="200" r="70" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="2.5"/>
      <circle cx="500" cy="200" r="40" fill="#fceba4" fill-opacity="0.4"/>
      <!-- Volumetric light cones -->
      <polygon points="500,200 200,380 320,400" fill="#e5c158" fill-opacity="0.15"/>
      <polygon points="500,200 380,410 500,420" fill="#f59e0b" fill-opacity="0.18"/>
      <polygon points="500,200 680,410 800,380" fill="#38bdf8" fill-opacity="0.12"/>
      <text x="500" y="270" text-anchor="middle" fill="#FCEBA4" font-family="monospace" font-size="12" font-weight="700">3200K - 5600K KELVIN</text>
    `
  },
  {
    num: "05",
    slug: "ai-video-cat-05-camera-movement.webp",
    themeColor: "#22c55e",
    secondaryColor: "#e5c158",
    tagline: "MECHANICAL KINEMATICS RIG",
    mainTitle: "360° ORBIT &amp; DRONE PATHS",
    subTitle: "Robotic Arm Control, Dolly Zooms &amp; High-Velocity FPV Dives",
    primaryCmd: "/OrbitShot",
    subCmds: "/DroneReveal • /PushIn • /PullBack • /TrackingShot • /DollyZoom",
    titleFa: "حرکات مکانیکی و پایدار دوربین: چرخش‌های ۳۶۰ درجه و شات‌های هوایی پهپاد",
    centerGraphic: `
      <!-- Orbit 3D Path -->
      <ellipse cx="500" cy="200" rx="220" ry="80" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="10 6" stroke-opacity="0.8"/>
      <!-- Central product anchor -->
      <circle cx="500" cy="200" r="30" fill="#142018" stroke="#22c55e" stroke-width="2"/>
      <circle cx="500" cy="200" r="10" fill="#4ade80"/>
      <!-- Orbital camera markers -->
      <circle cx="715" cy="200" r="12" fill="#e5c158" stroke="#ffffff" stroke-width="2"/>
      <circle cx="285" cy="200" r="10" fill="#22c55e"/>
      <circle cx="500" cy="120" r="10" fill="#22c55e"/>
      <circle cx="500" cy="280" r="10" fill="#22c55e"/>
      <text x="500" y="315" text-anchor="middle" fill="#4ade80" font-family="monospace" font-size="12" font-weight="700">3-AXIS GIMBAL STABILIZATION</text>
    `
  },
  {
    num: "07",
    slug: "ai-video-cat-07-product-commercial.webp",
    themeColor: "#e5c158",
    secondaryColor: "#a855f7",
    tagline: "HIGH-CONVERSION PACKSHOTS",
    mainTitle: "COMMERCIAL PRODUCT SHOWCASE",
    subTitle: "Zero-Gravity Floating Pedestals, Macro Textures &amp; 360 Turntables",
    primaryCmd: "/ProductLaunch",
    subCmds: "/LuxuryProduct • /MacroShot • /360Spin • /FloatingProduct • /WatchCommercial",
    titleFa: "تیزرهای تجاری محصول: پک‌شات‌های لوکس، پایه‌های چرخان و ماکروعکاسی صنعتی",
    centerGraphic: `
      <!-- Basalt Pedestal &amp; Floating Product -->
      <ellipse cx="500" cy="310" rx="160" ry="30" fill="#141a24" stroke="#e5c158" stroke-width="2"/>
      <ellipse cx="500" cy="300" rx="150" ry="25" fill="#1e293b" stroke="#e5c158" stroke-width="1" stroke-dasharray="6 4"/>
      <!-- Levitating Hero Object -->
      <polygon points="500,100 580,180 500,260 420,180" fill="#0a0e17" stroke="#fceba4" stroke-width="2.5"/>
      <circle cx="500" cy="180" r="28" fill="#e5c158" fill-opacity="0.3"/>
      <!-- Upward energy beams -->
      <line x1="450" y1="280" x2="450" y2="210" stroke="#e5c158" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="550" y1="280" x2="550" y2="210" stroke="#e5c158" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="500" y="350" text-anchor="middle" fill="#FCEBA4" font-family="monospace" font-size="12" font-weight="700">ZERO GRAVITY TURNTABLE</text>
    `
  },
  {
    num: "08",
    slug: "ai-video-cat-08-workspace-aesthetic.webp",
    themeColor: "#f97316",
    secondaryColor: "#e5c158",
    tagline: "CREATOR DESK &amp; LIFESTYLE",
    mainTitle: "WORKSPACE AESTHETIC",
    subTitle: "Cozy Coffee Steam, Minimalist Oak Desks &amp; Modern Focus Vibes",
    primaryCmd: "/CoffeeAesthetic",
    subCmds: "/DeskSetup • /CreatorDesk • /StudyVibes • /MinimalRoom • /Productivity",
    titleFa: "محیط‌های کاری مینیمال، بخار قهوه صبحگاهی و زیبایی‌شناسی میز کار کریتورها",
    centerGraphic: `
      <!-- Monitor &amp; Coffee Mug Silhouette -->
      <rect x="360" y="90" width="280" height="170" rx="10" fill="#0d1420" stroke="#f97316" stroke-width="2"/>
      <line x1="500" y1="260" x2="500" y2="300" stroke="#f97316" stroke-width="4"/>
      <line x1="440" y1="300" x2="560" y2="300" stroke="#f97316" stroke-width="3"/>
      <!-- Coffee mug with steam -->
      <rect x="680" y="230" width="45" height="55" rx="6" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="1.5"/>
      <path d="M 695 210 Q 705 180 695 160" stroke="#fceba4" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M 710 215 Q 720 185 710 165" stroke="#fceba4" stroke-width="2" fill="none" opacity="0.8"/>
      <text x="500" y="180" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="13" font-weight="700">FOCUS MODE ACTIVE</text>
    `
  },
  {
    num: "09",
    slug: "ai-video-cat-09-futuristic-scifi.webp",
    themeColor: "#06b6d4",
    secondaryColor: "#ec4899",
    tagline: "NEURAL NETWORK &amp; CYBERPUNK",
    mainTitle: "FUTURISTIC &amp; SCI-FI WORLDS",
    subTitle: "Holographic Glass UI, Quantum Lattices &amp; Megacity Flights",
    primaryCmd: "/Cyberpunk",
    subCmds: "/NeonCity • /AIWorld • /HolographicUI • /MatrixMode • /SpaceStation",
    titleFa: "جهان‌های آینده‌نگرانه: سایبرپانک، رابط‌های کاربری هولوگرافیک و شهرهای نئونی",
    centerGraphic: `
      <!-- Hologram HUD Nodes -->
      <polygon points="500,80 680,180 680,280 500,380 320,280 320,180" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="10 5"/>
      <circle cx="500" cy="230" r="50" fill="#083344" stroke="#ec4899" stroke-width="2"/>
      <line x1="320" y1="180" x2="680" y2="280" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/>
      <line x1="320" y1="280" x2="680" y2="180" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.4"/>
      <!-- Glowing data points -->
      <circle cx="500" cy="80" r="7" fill="#06b6d4"/>
      <circle cx="680" cy="180" r="7" fill="#ec4899"/>
      <circle cx="680" cy="280" r="7" fill="#06b6d4"/>
      <circle cx="500" cy="380" r="7" fill="#ec4899"/>
      <circle cx="320" cy="280" r="7" fill="#06b6d4"/>
      <circle cx="320" cy="180" r="7" fill="#ec4899"/>
      <text x="500" y="235" text-anchor="middle" fill="#67e8f9" font-family="monospace" font-size="14" font-weight="900">HUD 2099</text>
    `
  },
  {
    num: "10",
    slug: "ai-video-cat-10-fantasy-dream.webp",
    themeColor: "#a855f7",
    secondaryColor: "#e5c158",
    tagline: "ETHEREAL DIMENSIONS &amp; PORTALS",
    mainTitle: "FANTASY &amp; DREAMSCAPES",
    subTitle: "Floating Islands, Mythical Enchanted Flora &amp; Celestial Realms",
    primaryCmd: "/Dreamscape",
    subCmds: "/MagicPortal • /FloatingIslands • /CloudKingdom • /UnderwaterDream • /AuroraSky",
    titleFa: "قلمروهای فانتزی و رویایی: پورتال‌های جادویی، جزایر معلق و شفق‌های قطبی",
    centerGraphic: `
      <!-- Magic Dimensional Portal -->
      <circle cx="500" cy="220" r="110" fill="#1e1035" stroke="#a855f7" stroke-width="3" stroke-dasharray="12 6"/>
      <circle cx="500" cy="220" r="85" fill="#2e1065" stroke="#e5c158" stroke-width="2"/>
      <circle cx="500" cy="220" r="60" fill="#3b0764" stroke="#c084fc" stroke-width="1.5"/>
      <!-- Stardust sparkle stars -->
      <polygon points="500,170 504,185 520,185 506,195 512,210 500,200 488,210 494,195 480,185 496,185" fill="#fceba4"/>
      <polygon points="440,250 442,257 450,257 443,262 446,270 440,265 434,270 437,262 430,257 438,257" fill="#a855f7"/>
      <polygon points="560,240 562,247 570,247 563,252 566,260 560,255 554,260 557,252 550,247 558,247" fill="#c084fc"/>
      <text x="500" y="360" text-anchor="middle" fill="#d8b4fe" font-family="monospace" font-size="12" font-weight="700">DIMENSIONAL RIFT</text>
    `
  }
];

async function generateAllBanners() {
  const outputDir = "public/images/blog";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const cat of categories) {
    const svg = `
    <svg width="1376" height="768" viewBox="0 0 1376 768" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="${cat.themeColor}" stop-opacity="0.16"/>
          <stop offset="50%" stop-color="${cat.secondaryColor}" stop-opacity="0.06"/>
          <stop offset="100%" stop-color="#05070a" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#141c28" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#090d14" stop-opacity="0.98"/>
        </linearGradient>
        <filter id="mainGlow">
          <feGaussianBlur stdDeviation="14" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Slate Background -->
      <rect width="1376" height="768" fill="#07090e"/>
      <rect width="1376" height="768" fill="url(#bgGlow)"/>

      <!-- Ambient Architectural Grid -->
      <g opacity="0.05" stroke="#ffffff" stroke-width="1">
        <line x1="0" y1="128" x2="1376" y2="128"/>
        <line x1="0" y1="256" x2="1376" y2="256"/>
        <line x1="0" y1="384" x2="1376" y2="384"/>
        <line x1="0" y1="512" x2="1376" y2="512"/>
        <line x1="0" y1="640" x2="1376" y2="640"/>
        <line x1="229" y1="0" x2="229" y2="768"/>
        <line x1="458" y1="0" x2="458" y2="768"/>
        <line x1="688" y1="0" x2="688" y2="768"/>
        <line x1="917" y1="0" x2="917" y2="768"/>
        <line x1="1146" y1="0" x2="1146" y2="768"/>
      </g>

      <!-- Center Feature Card Frame -->
      <g transform="translate(188, 110)">
        <rect x="0" y="0" width="1000" height="500" rx="24" fill="url(#cardGrad)" stroke="${cat.themeColor}" stroke-width="2" stroke-opacity="0.35" filter="url(#mainGlow)"/>
        <rect x="12" y="12" width="976" height="476" rx="16" fill="#070b12" stroke="#ffffff" stroke-opacity="0.05"/>

        <!-- Top Tagline -->
        <text x="500" y="55" text-anchor="middle" fill="${cat.themeColor}" font-family="monospace" font-size="13" font-weight="700" letter-spacing="3.5">${cat.tagline}</text>

        <!-- Center Graphic -->
        ${cat.centerGraphic}

        <!-- Main Title &amp; Subtitle -->
        <text x="500" y="415" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="900" letter-spacing="0.5">${cat.mainTitle}</text>
        <text x="500" y="445" text-anchor="middle" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="14">${cat.subTitle}</text>

        <!-- Sub Commands Ticker -->
        <text x="500" y="475" text-anchor="middle" fill="${cat.themeColor}" opacity="0.85" font-family="monospace" font-size="12" letter-spacing="1">
          ${cat.subCmds}
        </text>
      </g>

      <!-- Category Pill Top-Left -->
      <rect x="60" y="42" width="180" height="38" rx="8" fill="${cat.themeColor}" fill-opacity="0.12" stroke="${cat.themeColor}" stroke-width="1.2"/>
      <text x="150" y="66" text-anchor="middle" fill="${cat.themeColor}" font-family="monospace" font-size="13" font-weight="800" letter-spacing="1">CATEGORY ${cat.num}</text>

      <!-- Primary Command Pill Top-Right -->
      <rect x="1080" y="42" width="236" height="38" rx="8" fill="#e5c158" fill-opacity="0.12" stroke="#e5c158" stroke-width="1.2"/>
      <text x="1198" y="66" text-anchor="middle" fill="#FCEBA4" font-family="monospace" font-size="14" font-weight="800">${cat.primaryCmd}</text>

      <!-- Persian Title Bottom -->
      <text x="688" y="685" text-anchor="middle" fill="#F1F5F9" font-family="system-ui, sans-serif" font-size="19" font-weight="700">
        ${cat.titleFa}
      </text>
    </svg>
    `;

    const outPath = path.join(outputDir, cat.slug);
    await sharp(Buffer.from(svg))
      .webp({ quality: 90 })
      .toFile(outPath);
    console.log(`Generated: ${outPath}`);
  }
}

generateAllBanners().then(() => console.log("All category banners generated successfully!"));
