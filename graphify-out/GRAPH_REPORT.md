# Graph Report - .  (2026-06-03)

## Corpus Check
- 11 files · ~37,600 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 296 nodes · 482 edges · 23 communities (20 shown, 3 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 72 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Main UI Components|Main UI Components]]
- [[_COMMUNITY_Rubifo Portfolio|Rubifo Portfolio]]
- [[_COMMUNITY_Layout & Locale System|Layout & Locale System]]
- [[_COMMUNITY_AutoMarketing Portfolio|AutoMarketing Portfolio]]
- [[_COMMUNITY_Lead Form & API|Lead Form & API]]
- [[_COMMUNITY_SEO & Static Export|SEO & Static Export]]
- [[_COMMUNITY_Product Design Principles|Product Design Principles]]
- [[_COMMUNITY_Dependencies & Build|Dependencies & Build]]
- [[_COMMUNITY_Portfolio Data Layer|Portfolio Data Layer]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_LuxCounter Portfolio|LuxCounter Portfolio]]
- [[_COMMUNITY_i18n Dictionaries|i18n Dictionaries]]
- [[_COMMUNITY_NadaHair Portfolio|NadaHair Portfolio]]
- [[_COMMUNITY_LoosiPet Portfolio|LoosiPet Portfolio]]
- [[_COMMUNITY_Particle Effects|Particle Effects]]
- [[_COMMUNITY_Brand Identity|Brand Identity]]
- [[_COMMUNITY_Placeholder Projects|Placeholder Projects]]
- [[_COMMUNITY_Spotlight Card UI|Spotlight Card UI]]
- [[_COMMUNITY_File SVG Icon|File SVG Icon]]
- [[_COMMUNITY_Globe SVG Icon|Globe SVG Icon]]
- [[_COMMUNITY_Window SVG Icon|Window SVG Icon]]

## God Nodes (most connected - your core abstractions)
1. `useI18n()` - 19 edges
2. `compilerOptions` - 16 edges
3. `Highlight()` - 12 edges
4. `Rubifo Smart Investment Bot Platform` - 12 edges
5. `Rubifo E-Commerce Platform` - 11 edges
6. `useReveal()` - 10 edges
7. `Locale` - 9 edges
8. `Home Page Component` - 9 edges
9. `LuxCounter Watch E-Commerce Website` - 8 edges
10. `LuxCounter Stone Countertop Service Website` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Next.js Logo (SVG)` --conceptually_related_to--> `HasanShah Landing Page`  [INFERRED]
  public/next.svg → README.md
- `Vercel Logo/Triangle (SVG)` --conceptually_related_to--> `HasanShah Landing Page`  [INFERRED]
  public/vercel.svg → README.md
- `Favicon: Arabic letter Ha (ح) on dark background in gold` --conceptually_related_to--> `Brand Personality: Confident, Direct, Premium`  [INFERRED]
  public/images/favicon.svg → PRODUCT.md
- `Favicon: Arabic letter Ha (ح) on dark background in gold` --conceptually_related_to--> `Hasan Shahmoradi`  [INFERRED]
  public/images/favicon.svg → PRODUCT.md
- `Next.js Static Export Strategy` --conceptually_related_to--> `robots()`  [INFERRED]
  next.config.ts → app/robots.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Trilingual Dictionary System (fa/en/ar all implement Dictionary)** — i18n_fa_translations, i18n_en_translations, i18n_ar_translations [EXTRACTED 1.00]
- **Portfolio Category Filter Data Pattern** — components_portfolio_data_category, components_portfolio_data_projects, components_portfolio_data_getvisibleprojects [EXTRACTED 1.00]
- **Root Layout Locale Provider Pattern** — app_layout_rootlayout, app_layout_languageprovider, app_layout_noflashshcript [EXTRACTED 1.00]

## Communities (23 total, 3 thin omitted)

### Community 0 - "Main UI Components"
Cohesion: 0.20
Nodes (20): About(), StatBlock(), Footer(), Hero(), Nav(), Offer(), icons, Pain() (+12 more)

### Community 1 - "Rubifo Portfolio"
Cohesion: 0.09
Nodes (26): Rubifo Brand Identity, Dark Background (#1a1a1a), Gold Color Palette, Rubifo Brand Splash Screen, Red Primary Color (#E53935), White Background, E-Commerce Marketplace, Persian (Farsi) RTL Language (+18 more)

### Community 2 - "Layout & Locale System"
Cohesion: 0.13
Nodes (19): inter, LanguageProvider Context, LocalizedToaster Component, metadata, NO_FLASH_SCRIPT Locale Hydration, RootLayout(), No-Flash Locale Detection Pattern, dirOf() (+11 more)

### Community 3 - "AutoMarketing Portfolio"
Cohesion: 0.09
Nodes (25): Dark Theme Design, Analytics Feature, Content Pipeline Feature, SEO Module Feature, Team Management Feature, AutoMarketing SaaS Platform, Farsi/Persian Language UI, AutoMarketing Dashboard UI (+17 more)

### Community 4 - "Lead Form & API"
Cohesion: 0.15
Nodes (19): Google Apps Script Webhook URL, POST /api/submit Route Handler, Data, Option, ageRangeKeys, audienceLocationKeys, businessTypeKeys, competitorIncomeKeys (+11 more)

### Community 5 - "SEO & Static Export"
Cohesion: 0.12
Nodes (14): robots(), sitemap(), Next.js Static Export Strategy, Package Dependencies, devDependencies, eslint, tailwindcss, @tailwindcss/postcss (+6 more)

### Community 6 - "Product Design Principles"
Cohesion: 0.13
Nodes (20): Favicon: Arabic letter Ha (ح) on dark background in gold, Accessibility: WCAG AA, RTL, Reduced Motion, Anti-References (Design Avoidances), Farsi/English Bilingual Toggle, Brand Personality: Confident, Direct, Premium, Design Principles, Free Landing Page Offer, Hasan Shahmoradi (+12 more)

### Community 7 - "Dependencies & Build"
Cohesion: 0.11
Nodes (18): dependencies, clsx, framer-motion, lucide-react, next, react, react-dom, sonner (+10 more)

### Community 8 - "Portfolio Data Layer"
Cohesion: 0.22
Nodes (14): Category, filters, getVisibleProjects(), Project, projects, Category Type, filters Array, getVisibleProjects Filter Function (+6 more)

### Community 9 - "TypeScript Config"
Cohesion: 0.12
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 10 - "LuxCounter Portfolio"
Cohesion: 0.17
Nodes (16): LuxCounter Brand Identity, Dark Background Gold Typography Color Scheme, LuxCounter Brand Logo Screen, Iranian Luxury Goods Consumers, Dark Luxury Dark Gold UI Theme, Luxury Watch Retail Industry, Persian Farsi RTL Language, LuxCounter Watch E-Commerce Website (+8 more)

### Community 11 - "i18n Dictionaries"
Cohesion: 0.35
Nodes (8): ar, en, Dictionary, Dictionary Type, fa, dictionaries, Dictionaries Map (Locale→Dictionary), FormErrors Type

### Community 12 - "NadaHair Portfolio"
Cohesion: 0.22
Nodes (10): NadaHair Brand (نداهیر), CTA Buttons (Consultation & Shop), E-commerce Web Application, Natural/Green Design Theme, Hair Care & Health Products, NadaHair Hero Section, NadaHair Portfolio Screenshot, Navigation Bar (+2 more)

### Community 13 - "LoosiPet Portfolio"
Cohesion: 0.29
Nodes (8): LoosiPet Design Language (Teal/Dark, Persian RTL), LoosiPet AI Smart Advisor Feature, LoosiPet QR Code Digital Identity Feature, LoosiPet Real-time Pet Tracking Feature, LoosiPet Hero Section UI, LoosiPet Navigation (Features, How It Works, Pricing, Shop), LoosiPet Product (AI Pet Companion Platform), LoosiPet Portfolio Screenshot

### Community 14 - "Particle Effects"
Cohesion: 0.80
Nodes (3): createHeroSparkles(), HeroSparkle, moveHeroSparkle()

### Community 15 - "Brand Identity"
Cohesion: 0.90
Nodes (5): Hasan Shahmoradi Brand Identity, Logo - Hasan Shahmoradi Brand Mark, Profile Photo - Hasan Shah (black and white headshot), Profile Photo - Hasan Shah (dramatic lit), Hasan Shahmoradi

### Community 16 - "Placeholder Projects"
Cohesion: 0.60
Nodes (5): Portfolio Placeholder Theme - Dark/Gold, Dark Background with Gold Text Design, Project 3 Placeholder Image, Dark Background with Gold Text Design, Dark Background with Gold Text Design

### Community 17 - "Spotlight Card UI"
Cohesion: 0.40
Nodes (4): GlowCard(), GlowCardProps, glowColorMap, sizeMap

## Knowledge Gaps
- **104 isolated node(s):** `Data`, `Option`, `icons`, `icons`, `GlowCardProps` (+99 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `SEO & Static Export` to `Dependencies & Build`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `TypeScript Config` to `SEO & Static Export`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Rubifo Smart Investment Bot Platform` (e.g. with `Rubifo Brand Splash Screen` and `Rubifo E-Commerce Platform`) actually correct?**
  _`Rubifo Smart Investment Bot Platform` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `Rubifo E-Commerce Platform` (e.g. with `Rubifo Brand Splash Screen` and `Consumer Electronics and Lifestyle Products`) actually correct?**
  _`Rubifo E-Commerce Platform` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Data`, `Option`, `icons` to the rest of the system?**
  _107 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Rubifo Portfolio` be split into smaller, more focused modules?**
  _Cohesion score 0.09230769230769231 - nodes in this community are weakly interconnected._
- **Should `Layout & Locale System` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._