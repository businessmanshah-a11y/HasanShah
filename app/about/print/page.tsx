import { Metadata } from "next";
import QRCode from "qrcode";
import {
  Sparkles,
  Award,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  PhoneCall,
  MessageSquare,
  Calendar,
  Layers,
  Cpu,
  Workflow,
  Target,
  Code2,
  Compass,
} from "lucide-react";
import { LinkedInIcon } from "../../components/Icons";

export const metadata: Metadata = {
  title: "پروفایل اجرایی، سوابق و آلبوم مستند حسن شاهمرادی (نسخه PDF) | Hasan Shahmoradi",
  robots: { index: false, follow: false },
};

export default async function AboutPrintPage() {
  const qrWebsite = await QRCode.toDataURL("https://hasanshah.ir/about/", {
    margin: 1,
    width: 200,
    color: { dark: "#f59e0b", light: "#00000000" },
  });

  const qrLinkedIn = await QRCode.toDataURL("https://www.linkedin.com/in/hasanshahmoradi/", {
    margin: 1,
    width: 200,
    color: { dark: "#f59e0b", light: "#00000000" },
  });

  const qrTelegram = await QRCode.toDataURL("https://t.me/shahbusinessman", {
    margin: 1,
    width: 200,
    color: { dark: "#f59e0b", light: "#00000000" },
  });

  return (
    <div className="print-root" dir="rtl">
      {/* ── Toolbar for interactive browser viewing (Hidden in print) ── */}
      <div className="no-print screen-toolbar">
        <div className="toolbar-inner">
          <div className="toolbar-info">
            <span className="toolbar-dot" />
            <span className="toolbar-title">پروفایل رسمی و آلبوم مستند حسن شاهمرادی</span>
            <span className="toolbar-badge">A4 افقی (Executive Deck)</span>
          </div>
          <div className="toolbar-actions">
            <button type="button" className="btn-print" id="print-btn">
              <span>چاپ / ذخیره PDF</span>
              <kbd>⌘P</kbd>
            </button>
            <a href="/about/" className="btn-back">
              بازگشت به صفحه درباره من
            </a>
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              const btn = document.getElementById('print-btn');
              if (btn) btn.addEventListener('click', () => window.print());
            }
          `,
        }}
      />

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 1: COVER & EXECUTIVE IDENTITY
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide slide-cover">
        <div className="slide-mesh-glow" />
        
        {/* Top bar */}
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">پروفایل اجرایی و آلبوم مستند</span>
          </div>
          <div className="slide-counter">اسلاید ۰۱ / ۰۶</div>
        </div>

        {/* Hero Content with Photo */}
        <div className="cover-grid">
          <div className="cover-text-side">
            <div className="pill-badge">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>پیشگام وایب‌کدینگ در ایران</span>
              <span className="pill-dot" />
              <span className="text-amber-200/80">معمار محصول دیجیتال و مشاور هوش مصنوعی</span>
            </div>

            <h1 className="cover-title">
              حسن شاهمرادی
              <br />
              <span className="gold-text">Hasan Shahmoradi</span>
            </h1>

            <p className="cover-desc">
              توسعه‌دهنده نرم‌افزار، معمار محصول و پیشگام ترویج متدولوژی Vibe Coding و مهندسی ایجنتیک در ایران.
              روایت بیش از ۸ سال تجربه میدانی از کارآفرینی در استارتاپ لجستیک درون‌شهری ۳ سوت، ۵ سال ویدیو مارکتینگ صنعتی B2B،
              تا ساخت محصولات نرم‌افزاری مدرن و ارتقای شتاب تیم‌های فنی.
            </p>

            <div className="cover-stats-row">
              <div className="c-stat">
                <span className="c-stat-val">+۸ سال</span>
                <span className="c-stat-lbl">تجربه محصول و توسعه کسب‌وکار</span>
              </div>
              <div className="c-stat">
                <span className="c-stat-val">+۵۰</span>
                <span className="c-stat-lbl">پروژه موفق تجاری و نرم‌افزاری</span>
              </div>
              <div className="c-stat">
                <span className="c-stat-val">۱۰۰٪</span>
                <span className="c-stat-lbl">نرخ رضایت کارفرمایان و تیم‌ها</span>
              </div>
              <div className="c-stat">
                <span className="c-stat-val">۲۴/۷</span>
                <span className="c-stat-lbl">نوآوری در لبه هوش مصنوعی</span>
              </div>
            </div>
          </div>

          <div className="cover-photo-side">
            <div className="photo-wrapper">
              <img src="/images/Shah2.webp" alt="حسن شاهمرادی" className="profile-img" />
              <div className="photo-badge">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Vibe Coding Pioneer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="slide-footer">
          <div className="footer-left-info">
            <span>تهران، ایران · در دسترس برای پروژه‌های مقیاس‌پذیر و مشاوره‌های ارشد</span>
          </div>

          <div className="footer-qr-block">
            <div className="qr-text">
              <span>مشاهده آنلاین پروفایل و دستاوردها</span>
              <small>اسکن با دوربین موبایل</small>
            </div>
            <img src={qrWebsite} alt="QR Code" className="qr-img" />
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 2: VERIFIED CAREER MILESTONES
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">خط زمانی و مایلستون‌های مستند</span>
          </div>
          <div className="slide-counter">اسلاید ۰۲ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">CAREER ROADMAP</span>
            <h2 className="section-title">مسیر حرفه‌ای: از چالش‌های میدانی تا انقلاب ایجنتیک</h2>
            <p className="section-desc">
              مسیری که با شکست‌ها، یادگیری‌های بی‌رحمانه در میدان عمل و تسلط هم‌زمان بر محصول، بیزنس و کد ساخته شده است.
            </p>
          </div>

          {/* 4 Timeline Cards */}
          <div className="timeline-grid">
            <div className="time-card">
              <div className="time-year">۱۳۹۷</div>
              <div className="time-badge">کارآفرینی استارتاپی</div>
              <h4 className="time-title">استارتاپ ۳ سوت (لجستیک درون‌شهری)</h4>
              <p className="time-desc">
                بنیان‌گذاری و هدایت سامانه ارسال بار هوشمند. مواجهه بی‌واسطه با چالش‌های اسکیل، مدیریت ناوگان، نقدینگی و عملیات میدانی در پایتخت.
              </p>
              <div className="time-takeaway">آموزه کلیدی: سیستم بدون اتوماسیون شکننده است.</div>
            </div>

            <div className="time-card">
              <div className="time-year">۱۳۹۹ - ۱۴۰۲</div>
              <div className="time-badge">ویدیو مارکتینگ و B2B</div>
              <h4 className="time-title">مستر کانترتاپ و برندسازی تخصصی</h4>
              <p className="time-desc">
                تولید بیش از ۱۰۰ ساعت محتوای ویدیویی صنعتی B2B، خلق قیف‌های فروش با بازدهی بالا و تسلط بر هنر روایت‌گری، روانشناسی مخاطب و نرخ تبدیل.
              </p>
              <div className="time-takeaway">آموزه کلیدی: تکنولوژی بدون قدرت فروش بی‌فایده است.</div>
            </div>

            <div className="time-card">
              <div className="time-year">۱۴۰۲ - ۱۴۰۳</div>
              <div className="time-badge">توسعه وب مدرن</div>
              <h4 className="time-title">ورود به فرانت‌اند پیشرفته و وب اختصاصی</h4>
              <p className="time-desc">
                مهاجرت تمام‌عیار به اکوسیستم Next.js، React، تایپ‌اسکریپت و ساخت لندینگ‌پیج‌های پرفورمنس‌بالا با استانداردهای سخت‌گیرانه UI/UX.
              </p>
              <div className="time-takeaway">آموزه کلیدی: کیفیت تجربه کاربری، چهره اصلی برند است.</div>
            </div>

            <div className="time-card time-card-gold">
              <div className="time-year text-amber-400">۱۴۰۳ - اکنون</div>
              <div className="time-badge badge-gold">پرچمداری Vibe Coding</div>
              <h4 className="time-title">ارکستراسیون ایجنت‌ها و آموزش سازمانی</h4>
              <p className="time-desc">
                پیشگامی در متدولوژی وایب‌کدینگ با Cursor، Claude Code و Antigravity. برگزاری دوره‌ها و طراحی پایپ‌لاین‌های اتوماسیون برای تیم‌های مهندسی.
              </p>
              <div className="time-takeaway">آموزه کلیدی: ایجنت‌ها آینده توسعه نرم‌افزار را رقم می‌زنند.</div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">داستان کامل و آلبوم تصویری: hasanshah.ir/about</span>
          <span className="footer-url">hasanshah.ir/about</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 3: PHILOSOPHY & WORK ETHOS
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">فلسفه کاری و رویکرد مهندسی</span>
          </div>
          <div className="slide-counter">اسلاید ۰۳ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">WORK ETHOS & PHILOSOPHY</span>
            <h2 className="section-title">۳ اصل بنیادین در توسعه محصول و مهندسی نرم‌افزار</h2>
            <p className="section-desc">
              رویکرد من به توسعه نرم‌افزار حاصل سال‌ها مشاهده‌ی خطاهای رایج در صنعت و تعهد به خلق خروجی‌های بی‌نقص است.
            </p>
          </div>

          <div className="philosophy-grid">
            <div className="philo-card">
              <div className="philo-num">۰۱</div>
              <div className="philo-icon"><ShieldCheck className="w-6 h-6 text-amber-400" /></div>
              <h3 className="philo-title">معماری و استاندارد پیش از کدنویسی</h3>
              <p className="philo-desc">
                کد بدون معماری بدهی فنی است؛ حتی اگر با سرعت مافوق صوت توسط هوش مصنوعی نوشته شده باشد.
                ابتدا استخوان‌بندی، دامنه‌های سیستم و مرزهای لایه‌ها با دقت ریاضی طراحی می‌شوند، سپس ایجنت‌ها برای تولید قطعات فراخوانده می‌شوند.
              </p>
              <div className="philo-rule">شعار: Never Prompt Blindly; Always Architect First.</div>
            </div>

            <div className="philo-card">
              <div className="philo-num">۰۲</div>
              <div className="philo-icon"><Cpu className="w-6 h-6 text-amber-400" /></div>
              <h3 className="philo-title">ایجنت به عنوان اهرم ۱۰ برابری سینیور</h3>
              <p className="philo-desc">
                هوش مصنوعی برای تنبل‌ها ابزار تولید کد بی‌کیفیت است، اما در دست مهندس خوش‌ذوق و مسلط، یک تیم کامل از ۱۰ برنامه‌نویس خستگی‌ناپذیر است.
                ما وظایف مکانیکی را به ایجنت‌ها می‌سپاریم تا تمام تمرکز مهندس بر منطق بیزنس و تجربه کاربر متمرکز بماند.
              </p>
              <div className="philo-rule">شعار: Human in the Cockpit; Agents on the Engine.</div>
            </div>

            <div className="philo-card">
              <div className="philo-num">۰۳</div>
              <div className="philo-icon"><Target className="w-6 h-6 text-amber-400" /></div>
              <h3 className="philo-title">خروجی محصول‌محور با تمرکز بر بازگشت سرمایه (ROI)</h3>
              <p className="philo-desc">
                کدی که فروش ایجاد نکند یا مشکلی از انسان حل نکند ارزشی ندارد. تمام تکنولوژی‌ها، فریم‌ورک‌ها و وسواس‌های دیزاین در نهایت
                باید در خدمت جذب مشتری، کاهش اصطکاک کاربر و رشد سودآوری واقعی کسب‌وکار کارفرما قرار گیرند.
              </p>
              <div className="philo-rule">شعار: Code is an Asset, Only When it Moves the Needle.</div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">اصول غیرقابل‌مذاکره در هر پروژه و مشاوره فنی</span>
          <span className="footer-url">hasanshah.ir</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 4: TECH STACK & CAPABILITIES
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">اکوسیستم فنی و تسلط ابزاری</span>
          </div>
          <div className="slide-counter">اسلاید ۰۴ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">CAPABILITIES & TECH ECOSYSTEM</span>
            <h2 className="section-title">تسلط بر تلاقی سه حوزه: هوش مصنوعی، وب مدرن و رشد بیزنس</h2>
            <p className="section-desc">
              ترکیب کم‌نظیری از مهندسی ایجنتیک مدرن، توسعه فرانت‌اند تراز اول و درک عمیق از روانشناسی بازاریابی و فروش.
            </p>
          </div>

          <div className="stack-grid">
            <div className="stack-box">
              <div className="stack-header">
                <Cpu className="w-5 h-5 text-amber-400" />
                <h4>Agentic Engineering & AI</h4>
              </div>
              <ul className="stack-list">
                <li><strong>ابزارهای پیشگام:</strong> Claude Code, Google Antigravity, Cursor, OpenAI Codex</li>
                <li><strong>ارکستراسیون:</strong> Model Context Protocol (MCP), Multi-agent workflows</li>
                <li><strong>توسعه مهارت‌ها:</strong> Custom Skills design, Codified senior rules (`.agents/rules`)</li>
                <li><strong>مدیریت کانتکست:</strong> Context pruning, anti-hallucination guardrails</li>
              </ul>
            </div>

            <div className="stack-box">
              <div className="stack-header">
                <Code2 className="w-5 h-5 text-amber-400" />
                <h4>Modern Web & Frontend</h4>
              </div>
              <ul className="stack-list">
                <li><strong>اکوسیستم:</strong> Next.js (App Router, Server Components), React 19, TypeScript</li>
                <li><strong>استایل و دیزاین:</strong> TailwindCSS v4, Vanilla CSS, Framer Motion, GSAP</li>
                <li><strong>تایپوگرافی و A11y:</strong> استانداردهای دسترسی‌پذیری وب، فونت‌های فارسی هندسی (Peyda)</li>
                <li><strong>پرفورمنس:</strong> Core Web Vitals (LCP, INP, CLS), SSR/SSG caching</li>
              </ul>
            </div>

            <div className="stack-box">
              <div className="stack-header">
                <Target className="w-5 h-5 text-amber-400" />
                <h4>Product Growth & CRO</h4>
              </div>
              <ul className="stack-list">
                <li><strong>لندینگ‌پیج‌های پرتبدیل:</strong> فرمول‌های AIDA، معماری اطلاعات و حذف اصطکاک ثبت‌نام</li>
                <li><strong>سئو تکنیکال:</strong> Schema.org structured data, semantic HTML, robots & sitemaps</li>
                <li><strong>روایت‌گری برند:</strong> ویدیو مارکتینگ صنعتی B2B، تولید محتوای تخصصی، برندینگ اجرایی</li>
                <li><strong>مشاوره تیم‌ها:</strong> آموزش ماهیگیری و توانمندسازی برنامه‌نویسان جهت استقلال کامل</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">تسلط عمیق بر ابزارها برای ساخت راه‌حل‌های پایدار</span>
          <span className="footer-url">hasanshah.ir</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 5: FLAGSHIP PROJECTS & TESTED RESULTS
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">نمونه‌کارها و پروژه‌های شاخص</span>
          </div>
          <div className="slide-counter">اسلاید ۰۵ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">FLAGSHIP PORTFOLIO</span>
            <h2 className="section-title">پروژه‌های کلیدی و نمونه‌های زنده اجراشده</h2>
            <p className="section-desc">
              طراحی و توسعه پلتفرم‌های باکیفیت برای برندها، رهبران کسب‌وکار و شرکت‌های نوآور با جدیدترین استانداردهای روز.
            </p>
          </div>

          <div className="portfolio-cards-grid">
            <div className="p-card">
              <div className="p-card-badge">پلتفرم جامع مهاجرتی</div>
              <h4 className="p-card-title">ویزاکده (Visakade)</h4>
              <p className="p-card-desc">
                طراحی معماری اختصاصی و پیاده‌سازی بیش از ۸۰۰ صفحه اختصاصی با کدهای بهینه‌سازی‌شده برای موتورهای جستجو، سیستم پروپوزال آنلاین و نرخ تبدیل خیره‌کننده.
              </p>
              <div className="p-tags">
                <span>Next.js</span>
                <span>تولید محتوای ایجنتی</span>
                <span>سئو تکنیکال</span>
              </div>
            </div>

            <div className="p-card">
              <div className="p-card-badge">سرمایه‌گذاری استارتاپ‌ها</div>
              <h4 className="p-card-title">مرتضی دانش (مدیرعامل زی‌تک)</h4>
              <p className="p-card-desc">
                پلتفرم اختصاصی برندینگ و مشاوره سرمایه‌گذاری برای عضو کمیته سرمایه‌گذاری کارایا و مدیرعامل هلدینگ زی‌تک با استایل مینیمال لوکس و لودینگ فوق‌سریع.
              </p>
              <div className="p-tags">
                <span>Editorial Dark</span>
                <span>Personal Branding</span>
                <span>High Performance</span>
              </div>
            </div>

            <div className="p-card">
              <div className="p-card-badge">آموزش مالی و ترید</div>
              <h4 className="p-card-title">میلاد سجودی (Financial Markets)</h4>
              <p className="p-card-desc">
                سیستم پرپرزنتیشن و معرفی دوره‌های تخصصی بازارهای مالی، طراحی ساختار روانشناختی ترغیب دانشجو و معرفی جامع پکیج‌های معاملاتی.
              </p>
              <div className="p-tags">
                <span>Conversion Rate</span>
                <span>Framer Motion</span>
                <span>طراحی تعاملی</span>
              </div>
            </div>

            <div className="p-card p-card-highlight">
              <div className="p-card-badge badge-gold">بوت‌کمپ‌های شرکتی</div>
              <h4 className="p-card-title">مسیر آموزشی تیم‌های توسعه‌دهنده</h4>
              <p className="p-card-desc">
                کارگاه‌های فشرده ارتقای تیم‌های فنی از برنامه‌نویسی سنتی به ارکستراسیون ایجنت‌ها با همراهی مستقیم در اسپرینت‌های هفتگی و تدوین Custom Skills.
              </p>
              <div className="p-tags">
                <span>Agentic Engineering</span>
                <span>Vibe Coding</span>
                <span>Senior Rules</span>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">مشاهده تمام نمونه‌کارها: hasanshah.ir/portfolio</span>
          <span className="footer-url">hasanshah.ir/portfolio</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 6: CONNECT & DIRECT ACCESS
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">راه‌های ارتباط و اعتبارسنجی</span>
          </div>
          <div className="slide-counter">اسلاید ۰۶ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">CONNECT & COLLABORATE</span>
            <h2 className="section-title">کانال‌های ارتباطی مستقیم و شبکه‌های حرفه‌ای</h2>
            <p className="section-desc">
              برای هماهنگی پروژه‌های طراحی وب، مشاوره‌های ارشد هوش مصنوعی و برگزاری کارگاه‌های اختصاصی با من در تماس باشید.
            </p>
          </div>

          <div className="connect-grid">
            <div className="connect-card">
              <h4 className="con-title">کانال‌های گفتگو و مشاوره فوری</h4>
              
              <div className="con-links">
                <a href="tel:09120870095" className="con-row">
                  <div className="con-icon"><PhoneCall className="w-5 h-5 text-amber-400" /></div>
                  <div className="con-details">
                    <span className="con-label">تماس تلفنی مستقیم</span>
                    <span className="con-val" dir="ltr">0912 087 0095</span>
                  </div>
                </a>

                <a href="https://t.me/shahbusinessman" target="_blank" rel="noreferrer" className="con-row">
                  <div className="con-icon"><MessageSquare className="w-5 h-5 text-amber-400" /></div>
                  <div className="con-details">
                    <span className="con-label">ارتباط در تلگرام</span>
                    <span className="con-val" dir="ltr">@shahbusinessman</span>
                  </div>
                  <img src={qrTelegram} alt="Telegram QR" className="con-qr" />
                </a>

                <a href="https://www.linkedin.com/in/hasanshahmoradi/" target="_blank" rel="noreferrer" className="con-row">
                  <div className="con-icon"><LinkedInIcon className="w-5 h-5 text-amber-400" /></div>
                  <div className="con-details">
                    <span className="con-label">لینکدین حرفه‌ای</span>
                    <span className="con-val" dir="ltr">linkedin.com/in/hasanshahmoradi</span>
                  </div>
                  <img src={qrLinkedIn} alt="LinkedIn QR" className="con-qr" />
                </a>
              </div>
            </div>

            <div className="connect-card connect-card-verify">
              <h4 className="con-title">اعتبارسنجی آنلاین و مشاهده وب‌سایت</h4>
              
              <div className="verify-box">
                <img src={qrWebsite} alt="Website QR" className="verify-qr" />
                <div className="verify-info">
                  <div className="verify-domain">hasanshah.ir</div>
                  <p className="verify-desc">
                    دوربین گوشی خود را روی این کد بگیرید تا وب‌سایت رسمی، داستان کامل مسیر و تمام نمونه‌کارها باز شود.
                  </p>
                </div>
              </div>

              <div className="official-statement">
                <strong>تعهد حرفه‌ای:</strong>
                <span> تمام پروژه‌ها و مشاوره‌ها با بالاترین استاندارد معماری، تعهد به ددلاین و انتقال کامل دانش فنی ارائه می‌گردد.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">حسن شاهمرادی — پرچمدار وایب‌کدینگ در ایران</span>
          <span className="footer-url">hasanshah.ir</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          CUSTOM PRINT & PRESENTATION STYLES
      ═════════════════════════════════════════════════════════════════════ */}
      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          size: 297mm 210mm;
          margin: 0;
        }

        *, *::before, *::after {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        body {
          margin: 0;
          padding: 0;
          background: #07090e;
          font-family: 'Peyda', Tahoma, ui-sans-serif, sans-serif;
          color: #f1f5f9;
        }

        .print-root {
          background: #07090e;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Screen Toolbar */
        .screen-toolbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(11, 15, 25, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(245, 158, 11, 0.2);
          padding: 12px 24px;
        }

        .toolbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .toolbar-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .toolbar-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
        }

        .toolbar-title {
          font-size: 14px;
          font-weight: 700;
          color: #f8fafc;
        }

        .toolbar-badge {
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-size: 11px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 999px;
        }

        .toolbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-print {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: #000;
          font-weight: 800;
          font-size: 13px;
          padding: 8px 18px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);
          transition: transform 0.15s;
        }

        .btn-print:hover {
          transform: translateY(-1px);
        }

        .btn-print kbd {
          background: rgba(0,0,0,0.2);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 11px;
        }

        .btn-back {
          color: #94a3b8;
          font-size: 13px;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transition: color 0.15s;
        }

        .btn-back:hover {
          color: #fff;
        }

        /* ── Slide Canvas ── */
        .slide {
          width: 297mm;
          height: 210mm;
          max-height: 210mm;
          position: relative;
          background: #090d16;
          border: 1px solid rgba(245, 158, 11, 0.15);
          margin: 16px 0;
          padding: 14mm 18mm 12mm 18mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          page-break-after: always;
          break-inside: avoid;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }

        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: #090d16 !important;
          }
          .print-root {
            background: transparent !important;
          }
          .slide {
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
          }
          .slide:last-of-type {
            page-break-after: auto !important;
          }
        }

        .slide-mesh-glow {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 85% 15%, rgba(245, 158, 11, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 15% 85%, rgba(59, 130, 246, 0.05) 0%, transparent 40%);
          pointer-events: none;
        }

        /* ── Slide Header ── */
        .slide-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(245, 158, 11, 0.18);
          position: relative;
          z-index: 10;
        }

        .brand-badge {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-logo-text {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: #f59e0b;
        }

        .brand-sep {
          color: rgba(245, 158, 11, 0.3);
        }

        .brand-sub {
          font-size: 12px;
          font-weight: 600;
          color: #94a3b8;
        }

        .slide-counter {
          font-size: 11px;
          font-weight: 700;
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.25);
          padding: 2px 10px;
          border-radius: 999px;
        }

        /* ── Slide Footer ── */
        .slide-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 11px;
          color: #64748b;
          position: relative;
          z-index: 10;
        }

        .footer-note {
          font-weight: 500;
        }

        .footer-url {
          font-family: ui-monospace, monospace;
          color: #94a3b8;
          direction: ltr;
        }

        /* ── Slide Body ── */
        .slide-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 10;
          padding: 10px 0;
        }

        .section-title-wrap {
          margin-bottom: 14px;
        }

        .section-subtitle {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #f59e0b;
          text-transform: uppercase;
        }

        .section-title {
          font-size: 22px;
          font-weight: 900;
          color: #f8fafc;
          margin: 3px 0 4px 0;
          line-height: 1.3;
        }

        .section-desc {
          font-size: 12.5px;
          color: #94a3b8;
          margin: 0;
          line-height: 1.6;
        }

        /* ── Cover Specifics ── */
        .cover-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1.4fr 0.8fr;
          gap: 20px;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: #f59e0b;
          margin-bottom: 12px;
        }

        .pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.5);
        }

        .cover-title {
          font-size: 34px;
          font-weight: 900;
          line-height: 1.25;
          color: #ffffff;
          margin: 0 0 12px 0;
        }

        .gold-text {
          color: #f59e0b;
        }

        .cover-desc {
          font-size: 13px;
          line-height: 1.8;
          color: #94a3b8;
          margin: 0 0 16px 0;
        }

        .cover-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .c-stat {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 10px;
          text-align: center;
        }

        .c-stat-val {
          display: block;
          font-size: 15px;
          font-weight: 900;
          color: #f59e0b;
        }

        .c-stat-lbl {
          display: block;
          font-size: 9.5px;
          color: #94a3b8;
          margin-top: 2px;
        }

        .photo-wrapper {
          position: relative;
          width: 190px;
          height: 230px;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(245, 158, 11, 0.4);
          background: #111827;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photo-badge {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(11, 15, 25, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #f8fafc;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .footer-left-info {
          color: #94a3b8;
          font-size: 11px;
        }

        .footer-qr-block {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .qr-text {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          font-size: 11px;
          font-weight: 700;
          color: #f59e0b;
        }

        .qr-text small {
          font-size: 9px;
          font-weight: 500;
          color: #64748b;
        }

        .qr-img {
          width: 44px;
          height: 44px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 6px;
          padding: 2px;
        }

        /* ── Timeline Grid ── */
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .time-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .time-card-gold {
          background: rgba(245, 158, 11, 0.05);
          border-color: rgba(245, 158, 11, 0.5);
        }

        .time-year {
          font-size: 13px;
          font-weight: 900;
          color: #94a3b8;
        }

        .time-badge {
          display: inline-block;
          font-size: 9.5px;
          font-weight: 800;
          background: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          padding: 2px 6px;
          border-radius: 4px;
          margin: 4px 0 8px 0;
          align-self: flex-start;
        }

        .time-badge.badge-gold {
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
        }

        .time-title {
          font-size: 13px;
          font-weight: 800;
          color: #f8fafc;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .time-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0 0 10px 0;
          flex: 1;
        }

        .time-takeaway {
          font-size: 10px;
          font-weight: 700;
          color: #f59e0b;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 6px;
        }

        /* ── Philosophy Grid ── */
        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .philo-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .philo-num {
          font-size: 26px;
          font-weight: 900;
          color: rgba(245, 158, 11, 0.2);
          position: absolute;
          top: 12px;
          left: 14px;
        }

        .philo-icon {
          margin-bottom: 10px;
        }

        .philo-title {
          font-size: 14px;
          font-weight: 800;
          color: #f8fafc;
          margin: 0 0 8px 0;
          line-height: 1.35;
        }

        .philo-desc {
          font-size: 11.5px;
          color: #94a3b8;
          line-height: 1.6;
          margin: 0 0 12px 0;
          flex: 1;
        }

        .philo-rule {
          font-size: 10.5px;
          font-weight: 700;
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
          padding: 6px 8px;
          border-radius: 6px;
          direction: ltr;
          text-align: center;
        }

        /* ── Tech Stack Grid ── */
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .stack-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 16px;
        }

        .stack-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
        }

        .stack-header h4 {
          font-size: 13.5px;
          font-weight: 800;
          color: #f8fafc;
          margin: 0;
        }

        .stack-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 11.5px;
          color: #94a3b8;
          line-height: 1.5;
        }

        .stack-list strong {
          color: #f8fafc;
        }

        /* ── Portfolio Cards Grid ── */
        .portfolio-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .p-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .p-card-highlight {
          background: rgba(245, 158, 11, 0.05);
          border-color: rgba(245, 158, 11, 0.45);
        }

        .p-card-badge {
          font-size: 9.5px;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
        }

        .p-card-badge.badge-gold {
          color: #f59e0b;
        }

        .p-card-title {
          font-size: 14px;
          font-weight: 800;
          color: #f8fafc;
          margin: 4px 0 6px 0;
        }

        .p-card-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0 0 10px 0;
          flex: 1;
        }

        .p-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .p-tags span {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 9px;
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* ── Connect Grid ── */
        .connect-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
        }

        .connect-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .con-title {
          font-size: 13.5px;
          font-weight: 800;
          color: #f8fafc;
          margin: 0 0 10px 0;
        }

        .con-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .con-row {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 8px 12px;
          text-decoration: none;
          color: inherit;
        }

        .con-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: rgba(245, 158, 11, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          shrink: 0;
        }

        .con-details {
          flex: 1;
        }

        .con-label {
          display: block;
          font-size: 10px;
          color: #94a3b8;
        }

        .con-val {
          font-size: 12px;
          font-weight: 800;
          color: #f8fafc;
        }

        .con-qr {
          width: 32px;
          height: 32px;
          border-radius: 4px;
        }

        .verify-box {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 10px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .verify-qr {
          width: 50px;
          height: 50px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
        }

        .verify-domain {
          font-size: 15px;
          font-weight: 900;
          color: #f59e0b;
          direction: ltr;
          text-align: right;
        }

        .verify-desc {
          font-size: 10.5px;
          color: #94a3b8;
          margin: 4px 0 0 0;
          line-height: 1.4;
        }

        .official-statement {
          font-size: 11px;
          color: #cbd5e1;
          line-height: 1.6;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 10px;
        }

        .official-statement strong {
          color: #f59e0b;
        }
      `}} />
    </div>
  );
}
