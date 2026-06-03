# Graph Report - .  (2026-06-03)

## Corpus Check
- Corpus is ~33,791 words - fits in a single context window. You may not need a graph.

## Summary
- 282 nodes · 483 edges · 21 communities (18 shown, 3 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 63 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Page Composition & UI Sections|Page Composition & UI Sections]]
- [[_COMMUNITY_Dependencies & Build Config|Dependencies & Build Config]]
- [[_COMMUNITY_Lead Capture & Form Submission|Lead Capture & Form Submission]]
- [[_COMMUNITY_Rubifo Portfolio Project|Rubifo Portfolio Project]]
- [[_COMMUNITY_AutoMarketing Portfolio Project|AutoMarketing Portfolio Project]]
- [[_COMMUNITY_Layout & Internationalization|Layout & Internationalization]]
- [[_COMMUNITY_Brand Identity & Design Principles|Brand Identity & Design Principles]]
- [[_COMMUNITY_TypeScript & Build Settings|TypeScript & Build Settings]]
- [[_COMMUNITY_LuxCounter Portfolio Project|LuxCounter Portfolio Project]]
- [[_COMMUNITY_SEO & Dev Tooling|SEO & Dev Tooling]]
- [[_COMMUNITY_Portfolio Showcase Logic|Portfolio Showcase Logic]]
- [[_COMMUNITY_Trilingual Dictionary System|Trilingual Dictionary System]]
- [[_COMMUNITY_Particle Animation Engine|Particle Animation Engine]]
- [[_COMMUNITY_Placeholder Portfolio Items|Placeholder Portfolio Items]]
- [[_COMMUNITY_Personal Brand Assets|Personal Brand Assets]]
- [[_COMMUNITY_Spotlight Glow Card UI|Spotlight Glow Card UI]]
- [[_COMMUNITY_File Icon Asset|File Icon Asset]]
- [[_COMMUNITY_Globe Icon Asset|Globe Icon Asset]]
- [[_COMMUNITY_Window Icon Asset|Window Icon Asset]]

## God Nodes (most connected - your core abstractions)
1. `useI18n()` - 24 edges
2. `compilerOptions` - 16 edges
3. `Highlight()` - 15 edges
4. `useReveal()` - 13 edges
5. `Rubifo Smart Investment Bot Platform` - 12 edges
6. `Rubifo E-Commerce Platform` - 11 edges
7. `LeadForm()` - 10 edges
8. `Portfolio()` - 10 edges
9. `Locale` - 10 edges
10. `Home Page Component` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Next.js Logo (SVG)` --conceptually_related_to--> `HasanShah Landing Page`  [INFERRED]
  public/next.svg → README.md
- `Vercel Logo/Triangle (SVG)` --conceptually_related_to--> `HasanShah Landing Page`  [INFERRED]
  public/vercel.svg → README.md
- `Favicon: Arabic letter Ha (ح) on dark background in gold` --conceptually_related_to--> `Brand Personality: Confident, Direct, Premium`  [INFERRED]
  public/images/favicon.svg → PRODUCT.md
- `Favicon: Arabic letter Ha (ح) on dark background in gold` --conceptually_related_to--> `Hasan Shahmoradi`  [INFERRED]
  public/images/favicon.svg → PRODUCT.md
- `LeadForm()` --semantically_similar_to--> `POST /api/submit Route Handler`  [INFERRED] [semantically similar]
  app/components/LeadForm.tsx → app/api/submit/route.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Components consuming useI18n for localized rendering** — components_about_about, components_footer_footer, components_hero_hero, components_nav_nav, components_offer_offer, components_pain_pain, components_portfolio_portfolio, components_services_services, components_leadform_leadform, components_localizedtoaster_localizedtoaster, components_languageswitcher_languageswitcher, i18n_languageprovider_usei18n [EXTRACTED 1.00]
- **Intersection Observer scroll-reveal animation pattern** — hooks_usereveal_usereveal, components_about_about, components_leadform_leadform, components_offer_offer, components_pain_pain, components_portfolio_portfolio, components_services_services [EXTRACTED 1.00]
- **Multi-step lead form submission flow to Google Apps Script** — components_leadform_leadform, api_submit_route, api_submit_google_script_url [INFERRED 0.85]
- **Trilingual Dictionary System** — dictionaries_fa_fa, dictionaries_en_en, dictionaries_ar_ar, dictionaries_index_dictionaries_map [EXTRACTED 1.00]
- **Form Validation + i18n Integration** — lib_form_schema_getstepschemas, lib_form_schema_formerrors_type, dictionaries_index_dictionaries_map, components_leadform [INFERRED 0.90]
- **Single-Page Section Composition** — page_home, components_nav, components_hero, components_pain, components_about, components_services, components_portfolio, components_offer, components_leadform, components_footer [EXTRACTED 1.00]

## Communities (21 total, 3 thin omitted)

### Community 0 - "Page Composition & UI Sections"
Cohesion: 0.20
Nodes (20): About(), StatBlock(), Footer(), Hero(), Nav(), Offer(), icons, Pain() (+12 more)

### Community 1 - "Dependencies & Build Config"
Cohesion: 0.07
Nodes (27): dependencies, clsx, framer-motion, lucide-react, next, react, react-dom, sonner (+19 more)

### Community 2 - "Lead Capture & Form Submission"
Cohesion: 0.13
Nodes (24): Google Apps Script Webhook URL, POST /api/submit Route Handler, Data, Field(), LeadForm(), Option, Select(), LocalizedToaster() (+16 more)

### Community 3 - "Rubifo Portfolio Project"
Cohesion: 0.09
Nodes (26): Rubifo Brand Identity, Dark Background (#1a1a1a), Gold Color Palette, Rubifo Brand Splash Screen, Red Primary Color (#E53935), White Background, E-Commerce Marketplace, Persian (Farsi) RTL Language (+18 more)

### Community 4 - "AutoMarketing Portfolio Project"
Cohesion: 0.09
Nodes (25): Dark Theme Design, Analytics Feature, Content Pipeline Feature, SEO Module Feature, Team Management Feature, AutoMarketing SaaS Platform, Farsi/Persian Language UI, AutoMarketing Dashboard UI (+17 more)

### Community 5 - "Layout & Internationalization"
Cohesion: 0.17
Nodes (18): inter, metadata, RootLayout(), LanguageSwitcher(), dirOf(), isLocale(), Locale, localeNames (+10 more)

### Community 6 - "Brand Identity & Design Principles"
Cohesion: 0.13
Nodes (20): Favicon: Arabic letter Ha (ح) on dark background in gold, Accessibility: WCAG AA, RTL, Reduced Motion, Anti-References (Design Avoidances), Farsi/English Bilingual Toggle, Brand Personality: Confident, Direct, Premium, Design Principles, Free Landing Page Offer, Hasan Shahmoradi (+12 more)

### Community 7 - "TypeScript & Build Settings"
Cohesion: 0.12
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 8 - "LuxCounter Portfolio Project"
Cohesion: 0.17
Nodes (16): LuxCounter Brand Identity, Dark Background Gold Typography Color Scheme, LuxCounter Brand Logo Screen, Iranian Luxury Goods Consumers, Dark Luxury Dark Gold UI Theme, Luxury Watch Retail Industry, Persian Farsi RTL Language, LuxCounter Watch E-Commerce Website (+8 more)

### Community 9 - "SEO & Dev Tooling"
Cohesion: 0.15
Nodes (6): eslintConfig, Package Dependencies, nextConfig, config, exclude, include

### Community 10 - "Portfolio Showcase Logic"
Cohesion: 0.28
Nodes (10): Category, filters, getVisibleProjects(), Project, projects, Portfolio(), Category Type, filters Array (+2 more)

### Community 11 - "Trilingual Dictionary System"
Cohesion: 0.35
Nodes (8): ar, en, Dictionary, Dictionary Type, fa, dictionaries, Dictionaries Map (Locale→Dictionary), Palette Presets

### Community 12 - "Particle Animation Engine"
Cohesion: 0.76
Nodes (4): createHeroSparkles(), HeroSparkle, moveHeroSparkle(), ParticlesBackground()

### Community 13 - "Placeholder Portfolio Items"
Cohesion: 0.43
Nodes (7): Portfolio Placeholder Theme - Dark/Gold, Dark Background with Gold Text Design, Project 3 Placeholder Image, Dark Background with Gold Text Design, Project 4 Placeholder Image, Dark Background with Gold Text Design, Project 5 Placeholder Image

### Community 14 - "Personal Brand Assets"
Cohesion: 0.90
Nodes (5): Hasan Shahmoradi Brand Identity, Logo - Hasan Shahmoradi Brand Mark, Profile Photo - Hasan Shah (black and white headshot), Profile Photo - Hasan Shah (dramatic lit), Hasan Shahmoradi

### Community 15 - "Spotlight Glow Card UI"
Cohesion: 0.40
Nodes (4): GlowCard(), GlowCardProps, glowColorMap, sizeMap

## Knowledge Gaps
- **97 isolated node(s):** `Data`, `Option`, `icons`, `icons`, `GlowCardProps` (+92 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useI18n()` connect `Page Composition & UI Sections` to `Lead Capture & Form Submission`, `Portfolio Showcase Logic`, `Layout & Internationalization`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `Portfolio()` connect `Portfolio Showcase Logic` to `Page Composition & UI Sections`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `Highlight()` connect `Page Composition & UI Sections` to `Lead Capture & Form Submission`, `Portfolio Showcase Logic`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Rubifo Smart Investment Bot Platform` (e.g. with `Rubifo Brand Splash Screen` and `Rubifo E-Commerce Platform`) actually correct?**
  _`Rubifo Smart Investment Bot Platform` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Data`, `Option`, `icons` to the rest of the system?**
  _98 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dependencies & Build Config` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `Lead Capture & Form Submission` be split into smaller, more focused modules?**
  _Cohesion score 0.12923076923076923 - nodes in this community are weakly interconnected._