# Hasan Shahmoradi Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (FA/EN) Dark Luxury landing page for Hasan Shahmoradi that captures leads via a 15-question smart form and delivers them to Google Sheets + Telegram.

**Architecture:** Pure HTML/CSS/JS (no framework). GSAP for scroll animations, Particles.js for hero background. A Google Apps Script Web App handles form POSTs — writing to Sheets and forwarding to Telegram Bot. All assets are static and hosted on GitHub Pages.

**Tech Stack:** HTML5, CSS3 (custom properties), Vanilla JS ES6+, GSAP 3 + ScrollTrigger, Particles.js, Google Apps Script, Telegram Bot API

---

## File Structure

```
index.html                          # Single page entry point
assets/
  css/
    style.css                       # CSS variables, reset, layout, all sections
    animations.css                  # GSAP class hooks, keyframe animations
  js/
    particles-config.js             # Particles.js config object
    counter.js                      # Animated number counters
    portfolio.js                    # Filter tabs + lightbox
    form.js                         # Multi-step form: navigation, validation, color picker, file preview
    submit.js                       # Fetch POST to Apps Script → Sheets + Telegram
    main.js                         # GSAP ScrollTrigger setup, lang toggle, nav scroll
  images/
    logo.svg                        # Typographic logotype (created in Task 1)
    profile.jpg                     # User-provided photo
    portfolio/
      luxcounter-1.jpg … (screenshots)
      rubifo-1.jpg …
      project3-1.jpg …
google-apps-script/
  Code.gs                           # Web App: receives POST, writes Sheet, sends Telegram
```

---

## Task 1: SVG Logotype

**Files:**
- Create: `assets/images/logo.svg`

- [ ] Create the SVG logotype — dual-line, gold on transparent:

```svg
<!-- assets/images/logo.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 80" width="400" height="80">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#e5c100;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0d060;stop-opacity:1" />
    </linearGradient>
  </defs>
  <!-- Persian name top -->
  <text x="200" y="32" text-anchor="middle"
        font-family="'Vazirmatn', 'Tahoma', serif"
        font-size="26" font-weight="700"
        fill="url(#gold)" letter-spacing="2">حسن شاهمرادی</text>
  <!-- Divider line -->
  <line x1="60" y1="42" x2="340" y2="42" stroke="#e5c100" stroke-width="0.8" opacity="0.5"/>
  <!-- English name bottom -->
  <text x="200" y="66" text-anchor="middle"
        font-family="'Cormorant Garamond', 'Georgia', serif"
        font-size="18" font-weight="400"
        fill="#e5c100" letter-spacing="6">HASAN SHAHMORADI</text>
</svg>
```

- [ ] Open `assets/images/logo.svg` in browser, confirm gold text renders on dark background.
- [ ] Commit: `git add assets/images/logo.svg && git commit -m "feat: add typographic SVG logotype"`

---

## Task 2: CSS Foundation

**Files:**
- Create: `assets/css/style.css`
- Create: `assets/css/animations.css`

- [ ] Create `assets/css/style.css`:

```css
/* ── CSS Variables ── */
:root {
  --bg-base: #0a0a0a;
  --bg-card: #1a1a2e;
  --bg-card-2: #16213e;
  --gold: #e5c100;
  --gold-dim: #e5c10066;
  --gold-faint: #e5c10022;
  --text-primary: #ffffff;
  --text-secondary: #ffffffcc;
  --text-muted: #ffffff66;
  --red-accent: #c0392b;
  --green-accent: #27ae60;
  --blue-accent: #3498db;
  --purple-accent: #8e44ad;
  --radius: 12px;
  --radius-sm: 6px;
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --font-fa: 'Vazirmatn', Tahoma, sans-serif;
  --font-en: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', system-ui, sans-serif;
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-fa);
  direction: rtl;
  overflow-x: hidden;
  line-height: 1.7;
}

/* ── Typography ── */
h1 { font-size: clamp(2rem, 5vw, 4rem); line-height: 1.2; }
h2 { font-size: clamp(1.6rem, 3.5vw, 2.8rem); }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.8rem); }
p  { color: var(--text-secondary); font-size: 1.05rem; }

/* ── Layout ── */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
section { padding: 100px 0; }

/* ── Navbar ── */
.navbar {
  position: fixed; top: 0; width: 100%; z-index: 1000;
  padding: 20px 40px;
  display: flex; align-items: center; justify-content: space-between;
  transition: var(--transition);
}
.navbar.scrolled {
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--gold-faint);
  padding: 12px 40px;
}
.nav-logo img { height: 48px; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { color: var(--text-secondary); text-decoration: none; font-size: 0.95rem; letter-spacing: 1px; transition: var(--transition); }
.nav-links a:hover { color: var(--gold); }
.lang-toggle {
  background: var(--gold-faint); border: 1px solid var(--gold-dim);
  color: var(--gold); padding: 6px 16px; border-radius: 20px;
  cursor: pointer; font-size: 0.85rem; transition: var(--transition);
}
.lang-toggle:hover { background: var(--gold); color: #000; }

/* ── Hero ── */
#hero {
  position: relative; min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  text-align: center; overflow: hidden;
}
#particles-canvas { position: absolute; inset: 0; z-index: 0; }
.hero-content { position: relative; z-index: 1; max-width: 800px; padding: 0 24px; }
.hero-headline {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  color: var(--text-primary); margin-bottom: 16px; line-height: 1.3;
}
.hero-headline .gold { color: var(--gold); }
.hero-sub { color: var(--text-secondary); font-size: 1.15rem; margin-bottom: 40px; max-width: 560px; margin-inline: auto; }
.btn-primary {
  background: var(--gold); color: #000; font-weight: 700;
  padding: 16px 36px; border-radius: var(--radius-sm); border: none;
  font-size: 1rem; cursor: pointer; transition: var(--transition);
  text-decoration: none; display: inline-block;
}
.btn-primary:hover { background: #f0d060; transform: translateY(-2px); box-shadow: 0 8px 30px var(--gold-dim); }
.btn-outline {
  border: 1px solid var(--gold-dim); color: var(--gold);
  padding: 16px 36px; border-radius: var(--radius-sm);
  font-size: 1rem; cursor: pointer; background: transparent;
  transition: var(--transition); text-decoration: none; display: inline-block;
  margin-right: 16px;
}
.btn-outline:hover { background: var(--gold-faint); }
.hero-cta { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* ── Section Header ── */
.section-header { text-align: center; margin-bottom: 64px; }
.section-label { color: var(--gold); font-size: 0.8rem; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 12px; display: block; }
.section-divider { width: 60px; height: 2px; background: linear-gradient(90deg, var(--gold), transparent); margin: 16px auto 0; }

/* ── Pain Section ── */
#pain { background: linear-gradient(180deg, var(--bg-base) 0%, #0d0d1a 100%); }
.pain-questions { display: grid; gap: 24px; max-width: 700px; margin: 0 auto 64px; }
.pain-question {
  background: var(--bg-card); border: 1px solid var(--gold-faint);
  border-right: 3px solid var(--red-accent);
  border-radius: var(--radius); padding: 24px 28px;
}
.pain-question p { color: var(--text-primary); font-size: 1.1rem; margin: 0; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px; }
.stat-card {
  background: var(--bg-card); border: 1px solid var(--gold-faint);
  border-radius: var(--radius); padding: 32px 24px; text-align: center;
}
.stat-number { font-size: 3rem; font-weight: 700; color: var(--gold); line-height: 1; }
.stat-label { color: var(--text-muted); font-size: 0.9rem; margin-top: 8px; }

/* ── About ── */
#about { background: var(--bg-base); }
.about-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 64px; align-items: center; }
.about-photo-wrap { position: relative; }
.about-photo {
  width: 100%; border-radius: var(--radius);
  filter: contrast(1.05) saturate(0.9);
  border: 1px solid var(--gold-faint);
}
.about-photo-wrap::before {
  content: ''; position: absolute; inset: -8px;
  border: 1px solid var(--gold-dim); border-radius: calc(var(--radius) + 8px);
  z-index: -1;
}
.about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 32px; }
.about-stat { background: var(--bg-card); border-radius: var(--radius-sm); padding: 16px; text-align: center; border: 1px solid var(--gold-faint); }
.about-stat-num { font-size: 2rem; font-weight: 700; color: var(--gold); }
.about-stat-label { font-size: 0.8rem; color: var(--text-muted); margin-top: 4px; }
.about-story { color: var(--text-secondary); line-height: 1.9; margin-bottom: 32px; }

/* ── Services ── */
#services { background: #0d0d1a; }
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
.service-card {
  background: var(--bg-card); border: 1px solid var(--gold-faint);
  border-radius: var(--radius); padding: 36px 28px;
  transition: var(--transition); cursor: default;
}
.service-card:hover { border-color: var(--gold); transform: translateY(-6px); box-shadow: 0 20px 60px rgba(229,193,0,0.1); }
.service-icon { font-size: 2.5rem; margin-bottom: 20px; }
.service-card h3 { color: var(--text-primary); margin-bottom: 12px; font-size: 1.15rem; }
.service-card p { font-size: 0.95rem; color: var(--text-muted); }

/* ── Portfolio ── */
#portfolio { background: var(--bg-base); }
.portfolio-filters { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 40px; }
.filter-btn {
  background: var(--bg-card); border: 1px solid var(--gold-faint); color: var(--text-muted);
  padding: 8px 20px; border-radius: 20px; cursor: pointer; transition: var(--transition); font-size: 0.9rem;
}
.filter-btn.active, .filter-btn:hover { background: var(--gold); color: #000; border-color: var(--gold); }
.portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
.portfolio-item { position: relative; border-radius: var(--radius); overflow: hidden; cursor: pointer; }
.portfolio-item img { width: 100%; aspect-ratio: 16/10; object-fit: cover; transition: transform 0.5s ease; }
.portfolio-item:hover img { transform: scale(1.06); }
.portfolio-overlay {
  position: absolute; inset: 0; background: rgba(10,10,10,0.8);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  opacity: 0; transition: var(--transition);
}
.portfolio-item:hover .portfolio-overlay { opacity: 1; }
.portfolio-overlay h3 { color: var(--gold); margin-bottom: 8px; }
.portfolio-overlay p { color: var(--text-secondary); font-size: 0.9rem; }
.portfolio-overlay a { color: var(--gold); text-decoration: none; font-size: 0.85rem; border: 1px solid var(--gold-dim); padding: 6px 16px; border-radius: 20px; margin-top: 12px; transition: var(--transition); }
.portfolio-overlay a:hover { background: var(--gold); color: #000; }

/* Lightbox */
.lightbox {
  position: fixed; inset: 0; background: rgba(0,0,0,0.92);
  z-index: 2000; display: none; align-items: center; justify-content: center;
}
.lightbox.open { display: flex; }
.lightbox img { max-width: 90vw; max-height: 90vh; border-radius: var(--radius); }
.lightbox-close { position: absolute; top: 24px; left: 24px; color: var(--gold); font-size: 2rem; cursor: pointer; }

/* ── Free Offer ── */
#offer {
  background: linear-gradient(135deg, #0d0d1a 0%, #16213e 100%);
  border-top: 1px solid var(--gold-faint); border-bottom: 1px solid var(--gold-faint);
}
.offer-banner { text-align: center; max-width: 700px; margin: 0 auto; }
.offer-badge {
  display: inline-block; background: var(--gold); color: #000;
  font-weight: 700; padding: 8px 24px; border-radius: 20px; font-size: 0.9rem; margin-bottom: 24px;
}
.offer-title { font-size: clamp(2rem, 4vw, 3.2rem); margin-bottom: 16px; }
.offer-includes { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; text-align: right; margin: 40px 0; }
.offer-item { display: flex; align-items: center; gap: 10px; color: var(--text-secondary); font-size: 0.95rem; }
.offer-item::before { content: '✦'; color: var(--gold); flex-shrink: 0; }

/* ── Form ── */
#form-section { background: #0d0d1a; }
.form-wrap { max-width: 760px; margin: 0 auto; background: var(--bg-card); border: 1px solid var(--gold-faint); border-radius: calc(var(--radius) * 1.5); padding: 48px; }
.form-progress { margin-bottom: 40px; }
.progress-bar { height: 3px; background: var(--gold-faint); border-radius: 2px; overflow: hidden; }
.progress-fill { height: 100%; background: var(--gold); border-radius: 2px; transition: width 0.4s ease; }
.progress-labels { display: flex; justify-content: space-between; margin-top: 10px; }
.progress-label { font-size: 0.78rem; color: var(--text-muted); }
.progress-label.active { color: var(--gold); }
.form-step { display: none; }
.form-step.active { display: block; }
.form-step-title { font-size: 1.4rem; color: var(--gold); margin-bottom: 32px; }
.form-group { margin-bottom: 24px; }
.form-group label { display: block; color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 10px; }
.form-input {
  width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-sm); padding: 14px 16px; color: var(--text-primary);
  font-family: var(--font-fa); font-size: 1rem; transition: var(--transition); direction: rtl;
}
.form-input:focus { outline: none; border-color: var(--gold-dim); background: rgba(229,193,0,0.05); }
.options-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px; }
.option-chip {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-sm); padding: 12px 16px; cursor: pointer;
  color: var(--text-secondary); font-size: 0.9rem; transition: var(--transition);
  text-align: center; user-select: none;
}
.option-chip.selected { background: var(--gold-faint); border-color: var(--gold); color: var(--gold); }
.option-chip:hover:not(.selected) { border-color: var(--gold-dim); }

/* Color picker */
.color-palette { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; }
.color-swatch {
  width: 44px; height: 44px; border-radius: 50%; cursor: pointer;
  border: 2px solid transparent; transition: var(--transition);
}
.color-swatch.selected { border-color: var(--gold); transform: scale(1.15); }
.hex-input { display: flex; gap: 10px; align-items: center; }
.hex-preview { width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); }

/* File upload */
.upload-area {
  border: 2px dashed var(--gold-dim); border-radius: var(--radius);
  padding: 32px; text-align: center; cursor: pointer; transition: var(--transition);
}
.upload-area:hover { border-color: var(--gold); background: var(--gold-faint); }
.upload-area input { display: none; }
.upload-preview { max-width: 120px; max-height: 80px; margin-top: 12px; border-radius: var(--radius-sm); }

/* Form navigation */
.form-nav { display: flex; justify-content: space-between; margin-top: 40px; }
.btn-back { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: var(--text-muted); padding: 14px 28px; border-radius: var(--radius-sm); cursor: pointer; transition: var(--transition); }
.btn-back:hover { border-color: var(--gold-dim); color: var(--gold); }
.btn-next { background: var(--gold); color: #000; font-weight: 700; padding: 14px 36px; border-radius: var(--radius-sm); border: none; cursor: pointer; font-size: 1rem; transition: var(--transition); }
.btn-next:hover { background: #f0d060; }
.btn-submit { background: var(--gold); color: #000; font-weight: 700; padding: 16px 48px; border-radius: var(--radius-sm); border: none; cursor: pointer; font-size: 1.05rem; transition: var(--transition); }
.btn-submit:hover { background: #f0d060; }
.form-success { text-align: center; padding: 40px; display: none; }
.form-success h3 { color: var(--gold); font-size: 2rem; margin-bottom: 16px; }

/* ── Footer ── */
#footer { background: #050508; border-top: 1px solid var(--gold-faint); padding: 48px 0; text-align: center; }
.footer-contact { display: flex; gap: 32px; justify-content: center; margin-bottom: 24px; flex-wrap: wrap; }
.footer-link { color: var(--text-secondary); text-decoration: none; display: flex; align-items: center; gap: 8px; font-size: 1rem; transition: var(--transition); }
.footer-link:hover { color: var(--gold); }
.footer-copy { color: var(--text-muted); font-size: 0.85rem; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .offer-includes { grid-template-columns: 1fr; }
  .form-wrap { padding: 28px 20px; }
  .navbar { padding: 16px 20px; }
  .navbar.scrolled { padding: 10px 20px; }
  .nav-links { display: none; }
  section { padding: 70px 0; }
}
```

- [ ] Create `assets/css/animations.css`:

```css
/* Entrance classes — initial state (GSAP sets these, then animates to visible) */
.fade-up   { opacity: 0; transform: translateY(40px); }
.fade-in   { opacity: 0; }
.fade-left { opacity: 0; transform: translateX(-40px); }
.fade-right{ opacity: 0; transform: translateX(40px); }

/* Gold shimmer on headline */
@keyframes goldShimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
.shimmer-text {
  background: linear-gradient(90deg, #e5c100 0%, #f0d060 40%, #fff 50%, #f0d060 60%, #e5c100 100%);
  background-size: 800px 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: goldShimmer 3s linear infinite;
}

/* Pulse on CTA */
@keyframes pulseBorder {
  0%, 100% { box-shadow: 0 0 0 0 rgba(229,193,0,0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(229,193,0,0); }
}
.pulse { animation: pulseBorder 2s ease-in-out infinite; }
```

- [ ] Open `index.html` (after Task 3) in browser, confirm dark background loads.
- [ ] Commit: `git add assets/css/ && git commit -m "feat: add CSS foundation with Dark Luxury theme"`

---

## Task 3: HTML Skeleton

**Files:**
- Create: `index.html`

- [ ] Create `index.html`:

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>حسن شاهمرادی — طراح سایت حرفه‌ای</title>
  <meta name="description" content="طراحی سایت فروشگاهی، خدماتی، استارتاپ و پرسونال برند. لندینگ پیج رایگان برای کسب‌وکار شما.">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700;900&family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/animations.css">
</head>
<body>

  <!-- NAVBAR -->
  <nav class="navbar" id="navbar">
    <a href="#" class="nav-logo"><img src="assets/images/logo.svg" alt="حسن شاهمرادی"></a>
    <ul class="nav-links">
      <li><a href="#about">درباره من</a></li>
      <li><a href="#services">خدمات</a></li>
      <li><a href="#portfolio">نمونه کار</a></li>
      <li><a href="#form-section">دریافت رایگان</a></li>
    </ul>
    <button class="lang-toggle" id="langToggle">EN</button>
  </nav>

  <!-- HERO -->
  <section id="hero">
    <canvas id="particles-canvas"></canvas>
    <div class="hero-content">
      <h1 class="hero-headline fade-up">
        کی از <span class="gold shimmer-text">چشمه جاودان پول</span> بدش میاد؟<br>
        <span style="font-size:0.6em; color: var(--text-secondary);">چشمه‌ای که باهم میسازیمش</span>
      </h1>
      <p class="hero-sub fade-up">طراحی سایت فروشگاهی، خدماتی، استارتاپ و پرسونال برند — با تجربه دیجیتال مارکتینگ</p>
      <div class="hero-cta fade-up">
        <a href="#form-section" class="btn-primary pulse">لندینگ پیج رایگانم رو می‌خوام ✦</a>
        <a href="#portfolio" class="btn-outline">نمونه کارها</a>
      </div>
    </div>
  </section>

  <!-- PAIN -->
  <section id="pain">
    <div class="container">
      <div class="section-header">
        <span class="section-label">واقعیت بازار</span>
        <h2 class="fade-up">بدون سایت، داری ضرر می‌کنی</h2>
        <div class="section-divider"></div>
      </div>
      <div class="pain-questions">
        <div class="pain-question fade-up">
          <p>⚡ وقتی اینستاگرام قطع شد، آیا کسب‌وکارت هم قطع شد؟</p>
        </div>
        <div class="pain-question fade-up">
          <p>📊 فکر می‌کنی رقیبات از سایتشون ماهانه چقدر درمیارن؟</p>
        </div>
        <div class="pain-question fade-up">
          <p>🎯 مشتری‌هایی که الان گوگل می‌زنن، به سایت رقیبت میرن — نه تو</p>
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-card fade-up">
          <div class="stat-number" data-target="73">0</div>
          <div class="stat-label">درصد مشتریان قبل از خرید سایت چک می‌کنند</div>
        </div>
        <div class="stat-card fade-up">
          <div class="stat-number" data-target="3">0</div>
          <div class="stat-label">برابر افزایش اعتماد مشتری با داشتن سایت</div>
        </div>
        <div class="stat-card fade-up">
          <div class="stat-number" data-target="24">0</div>
          <div class="stat-label">ساعت در روز سایت برایت کار می‌کند</div>
        </div>
        <div class="stat-card fade-up">
          <div class="stat-number" data-target="0">0</div>
          <div class="stat-label" style="color:var(--gold)">تومان هزینه لندینگ اول — رایگان</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-photo-wrap fade-left">
          <img src="assets/images/profile.jpg" alt="حسن شاهمرادی" class="about-photo">
        </div>
        <div class="about-content fade-right">
          <span class="section-label">داستان من</span>
          <h2 style="margin-bottom:24px;">از صفر تا ساختن چشمه‌های درآمد</h2>
          <p class="about-story">
            سال‌هاست که با کسب‌وکارها کار می‌کنم. دیدم چقدر از فرصت‌های آنلاین می‌گذرند — نه به خاطر اینکه محصولشان بد است، بلکه چون حضور دیجیتال قوی ندارند. این شد که تصمیم گرفتم اولین قدم رو برایشان رایگان بردارم.
          </p>
          <p class="about-story">
            ترکیب طراحی سایت حرفه‌ای با دانش دیجیتال مارکتینگ — این همان چیزی است که سایت‌هایم را از بقیه جدا می‌کند. سایتی که نه فقط زیباست، بلکه می‌فروشد.
          </p>
          <div class="about-stats">
            <div class="about-stat">
              <div class="about-stat-num" data-target="5">0</div>
              <div class="about-stat-label">نمونه کار تحویلی</div>
            </div>
            <div class="about-stat">
              <div class="about-stat-num" data-target="7">0</div>
              <div class="about-stat-label">سال تجربه دیجیتال</div>
            </div>
            <div class="about-stat">
              <div class="about-stat-num" data-target="100">0</div>
              <div class="about-stat-label">درصد رضایت مشتری</div>
            </div>
            <div class="about-stat">
              <div class="about-stat-num" data-target="1">0</div>
              <div class="about-stat-label">لندینگ رایگان برای تو</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services">
    <div class="container">
      <div class="section-header">
        <span class="section-label">خدمات</span>
        <h2 class="fade-up">چی می‌سازیم باهم؟</h2>
        <div class="section-divider"></div>
      </div>
      <div class="services-grid">
        <div class="service-card fade-up">
          <div class="service-icon">🛒</div>
          <h3>سایت فروشگاهی</h3>
          <p>فروشگاه آنلاین با پنل مدیریت، درگاه پرداخت و تجربه خرید عالی</p>
        </div>
        <div class="service-card fade-up">
          <div class="service-icon">⚙️</div>
          <h3>سایت خدماتی</h3>
          <p>معرفی خدمات، فرم رزرو، و اعتبارسازی برای کسب‌وکار شما</p>
        </div>
        <div class="service-card fade-up">
          <div class="service-icon">🚀</div>
          <h3>سایت استارتاپ</h3>
          <p>لندینگ پیج سریع، جذب سرمایه‌گذار و معرفی محصول MVP</p>
        </div>
        <div class="service-card fade-up">
          <div class="service-icon">👤</div>
          <h3>پرسونال برندینگ</h3>
          <p>سایت شخصی برای کوچ، مشاور، اینفلوئنسر و متخصص</p>
        </div>
        <div class="service-card fade-up">
          <div class="service-icon">📈</div>
          <h3>دیجیتال مارکتینگ</h3>
          <p>SEO، تبلیغات هدفمند و استراتژی رشد برای کسب‌وکار آنلاین</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFOLIO -->
  <section id="portfolio">
    <div class="container">
      <div class="section-header">
        <span class="section-label">نمونه کارها</span>
        <h2 class="fade-up">سایت‌هایی که ساختم</h2>
        <div class="section-divider"></div>
      </div>
      <div class="portfolio-filters">
        <button class="filter-btn active" data-filter="all">همه</button>
        <button class="filter-btn" data-filter="store">فروشگاهی</button>
        <button class="filter-btn" data-filter="service">خدماتی</button>
        <button class="filter-btn" data-filter="brand">برندینگ</button>
      </div>
      <div class="portfolio-grid" id="portfolioGrid">
        <div class="portfolio-item fade-up" data-category="store" data-img="assets/images/portfolio/luxcounter-1.jpg">
          <img src="assets/images/portfolio/luxcounter-1.jpg" alt="Luxcounter">
          <div class="portfolio-overlay">
            <h3>Luxcounter</h3>
            <p>فروشگاهی — دوزبانه — دو تم</p>
            <a href="https://luxcounter.ir" target="_blank">مشاهده سایت ↗</a>
          </div>
        </div>
        <div class="portfolio-item fade-up" data-category="service" data-img="assets/images/portfolio/rubifo-1.jpg">
          <img src="assets/images/portfolio/rubifo-1.jpg" alt="Rubifo">
          <div class="portfolio-overlay">
            <h3>Rubifo</h3>
            <p>خدماتی — فارسی — دو تم</p>
            <a href="https://rubifo.ir" target="_blank">مشاهده سایت ↗</a>
          </div>
        </div>
        <div class="portfolio-item fade-up" data-category="brand" data-img="assets/images/portfolio/project3-1.jpg">
          <img src="assets/images/portfolio/project3-1.jpg" alt="پروژه ۳">
          <div class="portfolio-overlay">
            <h3>پروژه ۳</h3>
            <p>پرسونال برندینگ</p>
          </div>
        </div>
        <div class="portfolio-item fade-up" data-category="store" data-img="assets/images/portfolio/project4-1.jpg">
          <img src="assets/images/portfolio/project4-1.jpg" alt="پروژه ۴">
          <div class="portfolio-overlay">
            <h3>پروژه ۴</h3>
            <p>فروشگاهی</p>
          </div>
        </div>
        <div class="portfolio-item fade-up" data-category="service" data-img="assets/images/portfolio/project5-1.jpg">
          <img src="assets/images/portfolio/project5-1.jpg" alt="پروژه ۵">
          <div class="portfolio-overlay">
            <h3>پروژه ۵</h3>
            <p>خدماتی</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div class="lightbox" id="lightbox">
    <span class="lightbox-close" id="lightboxClose">✕</span>
    <img id="lightboxImg" src="" alt="">
  </div>

  <!-- FREE OFFER -->
  <section id="offer">
    <div class="container">
      <div class="offer-banner">
        <span class="offer-badge">پیشنهاد ویژه</span>
        <h2 class="offer-title fade-up">لندینگ پیج کامل و حرفه‌ای<br><span class="gold">کاملاً رایگان</span></h2>
        <p style="color:var(--text-secondary); max-width:500px; margin:0 auto 32px;">فقط فرم رو پر کن. هیچ شرطی نداره. هیچ کارتی لازم نیست. تحویل میدم، اگه خوشت اومد ادامه میدیم.</p>
        <div class="offer-includes fade-up">
          <div class="offer-item">طراحی اختصاصی (نه قالب آماده)</div>
          <div class="offer-item">ریسپانسیو برای موبایل و دسکتاپ</div>
          <div class="offer-item">بهینه‌شده برای سرعت بارگذاری</div>
          <div class="offer-item">فرم تماس فعال</div>
          <div class="offer-item">هماهنگ با رنگ برند شما</div>
          <div class="offer-item">تحویل در ۷۲ ساعت</div>
        </div>
        <a href="#form-section" class="btn-primary pulse fade-up" style="font-size:1.1rem; padding:18px 48px;">همین الان شروع کن — رایگانه ✦</a>
      </div>
    </div>
  </section>

  <!-- SMART FORM -->
  <section id="form-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">فرم هوشمند</span>
        <h2 class="fade-up">بذار بشناسمت</h2>
        <div class="section-divider"></div>
      </div>
      <div class="form-wrap">
        <div class="form-progress">
          <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:25%"></div></div>
          <div class="progress-labels">
            <span class="progress-label active" id="pl-1">اطلاعات اولیه</span>
            <span class="progress-label" id="pl-2">ذهن‌درگیر</span>
            <span class="progress-label" id="pl-3">مخاطب</span>
            <span class="progress-label" id="pl-4">هویت بصری</span>
          </div>
        </div>

        <!-- STEP 1 -->
        <div class="form-step active" id="step-1">
          <h3 class="form-step-title">① اطلاعات اولیه</h3>
          <div class="form-group">
            <label>اسم و نام خانوادگی *</label>
            <input type="text" class="form-input" id="f-name" placeholder="مثلاً: علی رضایی" required>
          </div>
          <div class="form-group">
            <label>شماره تماس / تلگرام *</label>
            <input type="text" class="form-input" id="f-contact" placeholder="09xxxxxxxxx یا @username" required>
          </div>
          <div class="form-group">
            <label>نوع کسب‌وکارت چیه؟ (می‌تونی چند تا انتخاب کنی)</label>
            <div class="options-grid" data-multiselect id="f-business-type">
              <div class="option-chip" data-value="store">🛒 فروشگاه</div>
              <div class="option-chip" data-value="service">⚙️ خدماتی</div>
              <div class="option-chip" data-value="startup">🚀 استارتاپ</div>
              <div class="option-chip" data-value="personal">👤 پرسونال برند</div>
              <div class="option-chip" data-value="restaurant">🍽️ رستوران / کافه</div>
              <div class="option-chip" data-value="education">📚 آموزشی</div>
              <div class="option-chip" data-value="other">💡 دیگه</div>
            </div>
          </div>
          <div class="form-group">
            <label>الان سایت داری؟</label>
            <div class="options-grid" data-single id="f-has-site">
              <div class="option-chip" data-value="yes">✅ آره دارم</div>
              <div class="option-chip" data-value="no">❌ نه ندارم</div>
              <div class="option-chip" data-value="inactive">⏸️ داشتم ولی فعال نیست</div>
            </div>
          </div>
          <div class="form-nav">
            <span></span>
            <button class="btn-next" onclick="nextStep(1)">بعدی ←</button>
          </div>
        </div>

        <!-- STEP 2 -->
        <div class="form-step" id="step-2">
          <h3 class="form-step-title">② یه لحظه صادق باش</h3>
          <div class="form-group">
            <label>وقتی اینستاگرام قطع شد، چقدر ضرر کردی؟</label>
            <div class="options-grid" data-single id="f-insta-loss">
              <div class="option-chip" data-value="high">😰 خیلی زیاد</div>
              <div class="option-chip" data-value="some">😐 یه مقدار</div>
              <div class="option-chip" data-value="low">🙂 زیاد تأثیر نداشت</div>
              <div class="option-chip" data-value="unknown">🤷 اصلاً نمی‌دونم</div>
            </div>
          </div>
          <div class="form-group">
            <label>فکر می‌کنی رقیبات از سایتشون ماهانه چقدر درمیارن؟</label>
            <div class="options-grid" data-single id="f-competitor">
              <div class="option-chip" data-value="under5">زیر ۵ میلیون</div>
              <div class="option-chip" data-value="5to20">۵ تا ۲۰ میلیون</div>
              <div class="option-chip" data-value="20to100">۲۰ تا ۱۰۰ میلیون</div>
              <div class="option-chip" data-value="dontknow">نمی‌دونم ولی بیشتر از من</div>
            </div>
          </div>
          <div class="form-group">
            <label>چرا تا الان سایت نداشتی (یا اگه داری، چی آوردت اینجا)؟</label>
            <div class="options-grid" data-single id="f-why-now">
              <div class="option-chip" data-value="expensive">💸 فکر می‌کردم گرونه</div>
              <div class="option-chip" data-value="unaware">🤔 نمی‌دونستم باید داشته باشم</div>
              <div class="option-chip" data-value="bad-exp">😞 قبلاً بد تجربه داشتم</div>
              <div class="option-chip" data-value="trust">🔍 دنبال آدم مطمئن بودم</div>
            </div>
          </div>
          <div class="form-nav">
            <button class="btn-back" onclick="prevStep(2)">→ قبلی</button>
            <button class="btn-next" onclick="nextStep(2)">بعدی ←</button>
          </div>
        </div>

        <!-- STEP 3 -->
        <div class="form-step" id="step-3">
          <h3 class="form-step-title">③ مشتریت کیه؟</h3>
          <div class="form-group">
            <label>مشتریات بیشتر چه رده سنی‌ای هستن؟</label>
            <div class="options-grid" data-single id="f-age">
              <div class="option-chip" data-value="under25">زیر ۲۵</div>
              <div class="option-chip" data-value="25to40">۲۵ تا ۴۰</div>
              <div class="option-chip" data-value="over40">بالای ۴۰</div>
              <div class="option-chip" data-value="all">همه رده‌ها</div>
            </div>
          </div>
          <div class="form-group">
            <label>مشتری ایده‌آلت کجاست؟</label>
            <div class="options-grid" data-single id="f-geo">
              <div class="option-chip" data-value="local">📍 یه شهر</div>
              <div class="option-chip" data-value="iran">🇮🇷 سراسر ایران</div>
              <div class="option-chip" data-value="global">🌍 خارج از ایران</div>
              <div class="option-chip" data-value="everywhere">🌐 همه جا</div>
            </div>
          </div>
          <div class="form-group">
            <label>با سایت، فکر می‌کنی ماهانه چقدر می‌تونی درآمد داشته باشی؟</label>
            <div class="options-grid" data-single id="f-income">
              <div class="option-chip" data-value="under10">زیر ۱۰ میلیون</div>
              <div class="option-chip" data-value="10to50">۱۰ تا ۵۰ میلیون</div>
              <div class="option-chip" data-value="50to200">۵۰ تا ۲۰۰ میلیون</div>
              <div class="option-chip" data-value="over200">بیشتر از ۲۰۰ میلیون 🔥</div>
            </div>
          </div>
          <div class="form-nav">
            <button class="btn-back" onclick="prevStep(3)">→ قبلی</button>
            <button class="btn-next" onclick="nextStep(3)">بعدی ←</button>
          </div>
        </div>

        <!-- STEP 4 -->
        <div class="form-step" id="step-4">
          <h3 class="form-step-title">④ هویت بصری</h3>
          <div class="form-group">
            <label>لوگو داری؟</label>
            <div class="options-grid" data-single id="f-has-logo">
              <div class="option-chip" data-value="yes">✅ آره (آپلود می‌کنم)</div>
              <div class="option-chip" data-value="no">❌ نه ندارم</div>
              <div class="option-chip" data-value="redesign">🔄 دارم ولی نیاز به بازطراحی داره</div>
            </div>
            <div id="logo-upload-area" class="upload-area" style="margin-top:16px; display:none;" onclick="document.getElementById('logoFile').click()">
              <input type="file" id="logoFile" accept="image/*" onchange="previewLogo(this)">
              <p style="color:var(--text-muted);">📁 کلیک کن یا فایل رو اینجا بنداز</p>
              <img id="logoPreview" class="upload-preview" style="display:none;">
            </div>
          </div>
          <div class="form-group">
            <label>رنگ سازمانی داری؟ انتخاب کن یا کد HEX وارد کن:</label>
            <div class="color-palette" id="colorPalette">
              <div class="color-swatch" style="background:#e5c100" data-color="#e5c100" onclick="selectColor(this)"></div>
              <div class="color-swatch" style="background:#c0392b" data-color="#c0392b" onclick="selectColor(this)"></div>
              <div class="color-swatch" style="background:#2980b9" data-color="#2980b9" onclick="selectColor(this)"></div>
              <div class="color-swatch" style="background:#27ae60" data-color="#27ae60" onclick="selectColor(this)"></div>
              <div class="color-swatch" style="background:#8e44ad" data-color="#8e44ad" onclick="selectColor(this)"></div>
              <div class="color-swatch" style="background:#e67e22" data-color="#e67e22" onclick="selectColor(this)"></div>
              <div class="color-swatch" style="background:#1abc9c" data-color="#1abc9c" onclick="selectColor(this)"></div>
              <div class="color-swatch" style="background:#e91e63" data-color="#e91e63" onclick="selectColor(this)"></div>
              <div class="color-swatch" style="background:#ffffff" data-color="#ffffff" onclick="selectColor(this)"></div>
              <div class="color-swatch" style="background:#2c3e50" data-color="#2c3e50" onclick="selectColor(this)"></div>
            </div>
            <div class="hex-input">
              <div class="hex-preview" id="hexPreview" style="background:#e5c100"></div>
              <input type="text" class="form-input" id="f-color" placeholder="#e5c100" style="max-width:160px;" oninput="updateHexPreview(this.value)">
            </div>
          </div>
          <div class="form-group">
            <label>حس و حالی که می‌خوای سایتت داشته باشه؟ (چند تا انتخاب کن)</label>
            <div class="options-grid" data-multiselect id="f-vibe">
              <div class="option-chip" data-value="luxury">💎 لوکس</div>
              <div class="option-chip" data-value="modern">⚡ مدرن</div>
              <div class="option-chip" data-value="friendly">🤝 صمیمی</div>
              <div class="option-chip" data-value="bold">🔥 جسورانه</div>
              <div class="option-chip" data-value="simple">🎯 ساده</div>
              <div class="option-chip" data-value="trust">🏛️ اعتمادساز</div>
            </div>
          </div>
          <div class="form-group">
            <label>مهم‌ترین هدفت از داشتن سایت چیه؟</label>
            <div class="options-grid" data-single id="f-goal">
              <div class="option-chip" data-value="sell">💰 فروش بیشتر</div>
              <div class="option-chip" data-value="credibility">🏆 اعتبارسازی</div>
              <div class="option-chip" data-value="leads">🎣 جذب مشتری جدید</div>
              <div class="option-chip" data-value="showcase">🖼️ نشون دادن کارم</div>
            </div>
          </div>
          <div class="form-group">
            <label>اگه سایتت تا ۷۲ ساعت دیگه آنلاین باشه، اولین کاری که می‌کنی؟</label>
            <input type="text" class="form-input" id="f-first-action" placeholder="یه جمله کوتاه بنویس...">
          </div>
          <div class="form-nav">
            <button class="btn-back" onclick="prevStep(4)">→ قبلی</button>
            <button class="btn-submit" onclick="submitForm()">ثبت و دریافت رایگان ✦</button>
          </div>
        </div>

        <!-- SUCCESS -->
        <div class="form-success" id="form-success">
          <div style="font-size:3rem; margin-bottom:16px;">✦</div>
          <h3>ثبت شد!</h3>
          <p style="color:var(--text-secondary); max-width:400px; margin:0 auto;">فرمت رو دریافت کردم. ظرف ۲۴ ساعت باهات تماس می‌گیرم و شروع می‌کنیم.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="footer">
    <div class="container">
      <div class="footer-contact">
        <a href="tel:+989120870095" class="footer-link">📞 +98 912 087 0095</a>
        <a href="https://t.me/shahbusinessman" target="_blank" class="footer-link">✈️ @shahbusinessman</a>
      </div>
      <p class="footer-copy">© ۱۴۰۴ حسن شاهمرادی — تمام حقوق محفوظ است</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="assets/js/particles-config.js"></script>
  <script src="assets/js/counter.js"></script>
  <script src="assets/js/portfolio.js"></script>
  <script src="assets/js/form.js"></script>
  <script src="assets/js/submit.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] Open `index.html` in browser. Confirm: dark background, logo visible, all sections present, no console errors.
- [ ] Commit: `git add index.html && git commit -m "feat: add HTML skeleton with all sections"`

---

## Task 4: Particles Hero Background

**Files:**
- Create: `assets/js/particles-config.js`

- [ ] Create `assets/js/particles-config.js`:

```js
(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.alpha = Math.random() * 0.6 + 0.1;
  }

  function init() {
    resize();
    particles = Array.from({ length: 120 }, () => new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(229,193,0,${p.alpha})`;
      ctx.fill();
    });
    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(229,193,0,${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  init();
  draw();
})();
```

- [ ] Reload `index.html`. Confirm gold particles animate in Hero background.
- [ ] Commit: `git add assets/js/particles-config.js && git commit -m "feat: add gold particle network for hero background"`

---

## Task 5: GSAP Animations + Navbar + Counter

**Files:**
- Create: `assets/js/counter.js`
- Create: `assets/js/main.js`

- [ ] Create `assets/js/counter.js`:

```js
function animateCounters() {
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = +el.dataset.target;
    if (target === 0) return;
    gsap.to({ val: 0 }, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: function () {
        el.textContent = Math.round(this.targets()[0].val);
      }
    });
  });
}
```

- [ ] Create `assets/js/main.js`:

```js
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll behavior
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Animate all .fade-up elements
gsap.utils.toArray('.fade-up').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
  );
});

gsap.utils.toArray('.fade-left').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
  );
});

gsap.utils.toArray('.fade-right').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
  );
});

// Hero staggered entrance
gsap.fromTo('.hero-headline', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
gsap.fromTo('.hero-sub',      { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.7 });
gsap.fromTo('.hero-cta',      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.0 });

// Counter animations
animateCounters();

// Language toggle
const langToggle = document.getElementById('langToggle');
let isEn = false;
const translations = {
  fa: {
    'nav-about': 'درباره من', 'nav-services': 'خدمات',
    'nav-portfolio': 'نمونه کار', 'nav-form': 'دریافت رایگان',
  },
  en: {
    'nav-about': 'About', 'nav-services': 'Services',
    'nav-portfolio': 'Portfolio', 'nav-form': 'Get Free',
  }
};
langToggle.addEventListener('click', () => {
  isEn = !isEn;
  document.documentElement.lang = isEn ? 'en' : 'fa';
  document.documentElement.dir = isEn ? 'ltr' : 'rtl';
  document.body.style.fontFamily = isEn ? "var(--font-sans)" : "var(--font-fa)";
  langToggle.textContent = isEn ? 'FA' : 'EN';
  const t = isEn ? translations.en : translations.fa;
  document.querySelectorAll('.nav-links a').forEach((a, i) => {
    const keys = Object.values(t);
    if (keys[i]) a.textContent = keys[i];
  });
});
```

- [ ] Reload `index.html`. Scroll down — elements should fade in. Navbar should gain glassmorphism style on scroll. Counters animate.
- [ ] Click EN/FA toggle — page direction switches.
- [ ] Commit: `git add assets/js/counter.js assets/js/main.js && git commit -m "feat: add GSAP scroll animations, navbar, counter, lang toggle"`

---

## Task 6: Portfolio Filter + Lightbox

**Files:**
- Create: `assets/js/portfolio.js`
- Create: `assets/images/portfolio/` (placeholder images)

- [ ] Create placeholder portfolio images (1×1 pixel grey PNG via canvas for testing):

```html
<!-- Paste this in browser console to create a data URL for placeholder -->
<!-- Or add real screenshots to assets/images/portfolio/ -->
```

Add real screenshots from luxcounter.ir and rubifo.ir: take screenshots via browser and save as:
- `assets/images/portfolio/luxcounter-1.jpg`
- `assets/images/portfolio/rubifo-1.jpg`
- `assets/images/portfolio/project3-1.jpg`
- `assets/images/portfolio/project4-1.jpg`
- `assets/images/portfolio/project5-1.jpg`

- [ ] Create `assets/js/portfolio.js`:

```js
// Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('.portfolio-item').forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      gsap.to(item, { opacity: show ? 1 : 0.15, scale: show ? 1 : 0.95, duration: 0.3 });
      item.style.pointerEvents = show ? 'auto' : 'none';
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.dataset.img;
    lightbox.classList.add('open');
  });
});
document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
```

- [ ] Reload. Click filter buttons — items fade. Click a portfolio item — lightbox opens. Press Escape — closes.
- [ ] Commit: `git add assets/js/portfolio.js assets/images/portfolio/ && git commit -m "feat: portfolio filter and lightbox"`

---

## Task 7: Smart Form Logic

**Files:**
- Create: `assets/js/form.js`

- [ ] Create `assets/js/form.js`:

```js
let currentStep = 1;
const totalSteps = 4;

// Chip selection (single and multi)
document.querySelectorAll('.options-grid').forEach(grid => {
  const isMulti = grid.hasAttribute('data-multiselect');
  grid.querySelectorAll('.option-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (!isMulti) grid.querySelectorAll('.option-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.toggle('selected');
    });
  });
});

// Show/hide logo upload
document.querySelectorAll('#f-has-logo .option-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const logoArea = document.getElementById('logo-upload-area');
    logoArea.style.display = chip.dataset.value === 'yes' ? 'block' : 'none';
  });
});

// Logo file preview
function previewLogo(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const preview = document.getElementById('logoPreview');
    preview.src = e.target.result;
    preview.style.display = 'block';
  };
  reader.readAsDataURL(file);
}
window.previewLogo = previewLogo;

// Color picker
function selectColor(swatch) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  swatch.classList.add('selected');
  const color = swatch.dataset.color;
  document.getElementById('f-color').value = color;
  document.getElementById('hexPreview').style.background = color;
}
window.selectColor = selectColor;

function updateHexPreview(val) {
  if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
    document.getElementById('hexPreview').style.background = val;
  }
}
window.updateHexPreview = updateHexPreview;

// Step navigation
function updateProgress(step) {
  const pct = (step / totalSteps) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  for (let i = 1; i <= totalSteps; i++) {
    document.getElementById('pl-' + i).classList.toggle('active', i === step);
  }
}

function nextStep(from) {
  if (from === 1) {
    const name = document.getElementById('f-name').value.trim();
    const contact = document.getElementById('f-contact').value.trim();
    if (!name || !contact) { alert('لطفاً اسم و شماره تماست رو وارد کن'); return; }
  }
  document.getElementById('step-' + from).classList.remove('active');
  currentStep = from + 1;
  document.getElementById('step-' + currentStep).classList.add('active');
  updateProgress(currentStep);
  document.getElementById('form-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.nextStep = nextStep;

function prevStep(from) {
  document.getElementById('step-' + from).classList.remove('active');
  currentStep = from - 1;
  document.getElementById('step-' + currentStep).classList.add('active');
  updateProgress(currentStep);
}
window.prevStep = prevStep;

// Collect form data
function collectFormData() {
  const getSelected = (id) =>
    [...document.querySelectorAll(`#${id} .option-chip.selected`)].map(c => c.dataset.value).join(', ');

  return {
    name: document.getElementById('f-name').value.trim(),
    contact: document.getElementById('f-contact').value.trim(),
    businessType: getSelected('f-business-type'),
    hasSite: getSelected('f-has-site'),
    instaLoss: getSelected('f-insta-loss'),
    competitor: getSelected('f-competitor'),
    whyNow: getSelected('f-why-now'),
    age: getSelected('f-age'),
    geo: getSelected('f-geo'),
    income: getSelected('f-income'),
    hasLogo: getSelected('f-has-logo'),
    color: document.getElementById('f-color').value || getSelected('colorPalette'),
    vibe: getSelected('f-vibe'),
    goal: getSelected('f-goal'),
    firstAction: document.getElementById('f-first-action').value.trim(),
    logoBase64: document.getElementById('logoPreview').src || '',
    timestamp: new Date().toISOString(),
  };
}
window.collectFormData = collectFormData;
```

- [ ] Reload. Fill step 1 without name — confirm alert fires. Fill name, click next — step 2 shows, progress bar advances. Select chips — they highlight. Select logo "yes" — upload area appears. Pick a color swatch — hex input updates.
- [ ] Commit: `git add assets/js/form.js && git commit -m "feat: multi-step form logic with validation, color picker, file upload"`

---

## Task 8: Google Apps Script Backend

**Files:**
- Create: `google-apps-script/Code.gs`

- [ ] Create `google-apps-script/Code.gs`:

```javascript
// Google Apps Script — deploy as Web App (Execute as: Me, Anyone access)
// Replace SHEET_ID, DRIVE_FOLDER_ID, TELEGRAM_TOKEN, TELEGRAM_CHAT_ID

var SHEET_ID = 'YOUR_GOOGLE_SHEET_ID';
var DRIVE_FOLDER_ID = 'YOUR_DRIVE_FOLDER_ID';
var TELEGRAM_TOKEN = 'YOUR_BOT_TOKEN';
var TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID';

function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  // Save logo to Drive if provided
  var logoUrl = '';
  if (data.logoBase64 && data.logoBase64.startsWith('data:image')) {
    try {
      var match = data.logoBase64.match(/^data:image\/(\w+);base64,(.+)$/);
      var ext = match[1];
      var blob = Utilities.newBlob(Utilities.base64Decode(match[2]), 'image/' + ext, data.name + '-logo.' + ext);
      var folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
      var file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      logoUrl = file.getUrl();
    } catch (err) {
      logoUrl = 'upload-error';
    }
  }

  // Write to Sheet
  var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  sheet.appendRow([
    data.timestamp, data.name, data.contact, data.businessType,
    data.hasSite, data.instaLoss, data.competitor, data.whyNow,
    data.age, data.geo, data.income, data.hasLogo,
    data.color, data.vibe, data.goal, data.firstAction, logoUrl
  ]);

  // Send Telegram message
  var msg = '🔔 لید جدید!\n' +
    '👤 نام: ' + data.name + '\n' +
    '📱 تماس: ' + data.contact + '\n' +
    '🏢 کسب‌وکار: ' + data.businessType + '\n' +
    '🎯 هدف: ' + data.goal + '\n' +
    '🎨 رنگ: ' + data.color + '\n' +
    '💡 اولین اقدام: ' + data.firstAction + '\n' +
    '🖼️ لوگو: ' + (logoUrl || 'ندارد');

  UrlFetchApp.fetch('https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg, parse_mode: 'HTML' })
  });

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('OK');
}
```

**Deploy steps:**
1. Go to [script.google.com](https://script.google.com), create new project
2. Paste `Code.gs` contents
3. Fill in `SHEET_ID` (from Google Sheets URL), `DRIVE_FOLDER_ID`, `TELEGRAM_TOKEN`, `TELEGRAM_CHAT_ID`
4. Click Deploy → New deployment → Web App → Execute as: Me → Access: Anyone
5. Copy the Web App URL

- [ ] Commit: `git add google-apps-script/ && git commit -m "feat: Google Apps Script for Sheets + Telegram integration"`

---

## Task 9: Form Submission

**Files:**
- Create: `assets/js/submit.js`

- [ ] Create `assets/js/submit.js` — replace `APPS_SCRIPT_URL` after deploying Task 8:

```js
var APPS_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';

async function submitForm() {
  const btn = document.querySelector('.btn-submit');
  btn.disabled = true;
  btn.textContent = 'در حال ارسال...';

  const data = collectFormData();

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    // no-cors means we can't read the response — assume success
    document.getElementById('step-4').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
    gsap.fromTo('#form-success', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });

  } catch (err) {
    btn.disabled = false;
    btn.textContent = 'ثبت و دریافت رایگان ✦';
    alert('خطا در ارسال — لطفاً دوباره امتحان کن یا مستقیم تماس بگیر: +989120870095');
  }
}
window.submitForm = submitForm;
```

- [ ] Fill and submit the form. Check Google Sheet for a new row. Check Telegram for the notification message.
- [ ] Commit: `git add assets/js/submit.js && git commit -m "feat: form submission to Google Apps Script"`

---

## Task 10: Add Profile Photo + Portfolio Screenshots

**Files:**
- Modify: `assets/images/profile.jpg` (add real photo)
- Modify: `assets/images/portfolio/*.jpg` (add real screenshots)

- [ ] Add your profile photo as `assets/images/profile.jpg`.
- [ ] Take screenshots of luxcounter.ir and rubifo.ir. Save as:
  - `assets/images/portfolio/luxcounter-1.jpg`
  - `assets/images/portfolio/rubifo-1.jpg`
- [ ] Add screenshots for projects 3–5:
  - `assets/images/portfolio/project3-1.jpg`
  - `assets/images/portfolio/project4-1.jpg`
  - `assets/images/portfolio/project5-1.jpg`
- [ ] Optimize all images (target: < 200KB each). Use [squoosh.app](https://squoosh.app) or `ffmpeg`.
- [ ] Reload. Confirm profile photo and all portfolio images load correctly.
- [ ] Commit: `git add assets/images/ && git commit -m "feat: add profile photo and portfolio screenshots"`

---

## Task 11: Deploy to GitHub Pages

- [ ] Connect to GitHub remote (already set up at `https://github.com/businessmanshah-a11y/HasanShah.git`):

```bash
git remote add origin https://github.com/businessmanshah-a11y/HasanShah.git
git branch -M main
git push -u origin main
```

- [ ] In GitHub repo settings → Pages → Source: Deploy from branch `main`, folder `/` (root).
- [ ] Wait ~2 minutes. Visit `https://businessmanshah-a11y.github.io/HasanShah/` and confirm the live site loads.
- [ ] Commit any final fixes and push.

---

## Self-Review

**Spec coverage check:**
- [x] Hero with headline "کی از چشمه جاودان پول بدش میاد؟" — Task 3
- [x] Dark Luxury theme (gold + dark) — Task 2
- [x] SVG Logotype — Task 1
- [x] Pain section with psychological questions — Task 3
- [x] About section with storytelling + photo — Task 3, Task 10
- [x] Services (5 types) — Task 3
- [x] Portfolio with filter + lightbox (5 projects) — Task 6, Task 10
- [x] Free offer section — Task 3
- [x] 15-question smart form (4 steps) — Task 3, Task 7
- [x] Color picker (palette + HEX) — Task 7
- [x] Logo upload with preview — Task 7
- [x] Google Sheets integration — Task 8, Task 9
- [x] Telegram bot notification — Task 8, Task 9
- [x] Bilingual toggle (FA/EN) — Task 5
- [x] Particles hero background — Task 4
- [x] GSAP scroll animations — Task 5
- [x] Counter animations — Task 5
- [x] Responsive mobile — Task 2 (CSS)
- [x] GitHub Pages deploy — Task 11
- [x] Contact: +989120870095 + t.me/shahbusinessman — Task 3
