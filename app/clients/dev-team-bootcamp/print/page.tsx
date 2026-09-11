import { Metadata } from "next";
import QRCode from "qrcode";
import {
  TerminalSquare,
  Cpu,
  Sparkles,
  Clock,
  Users,
  CheckCircle2,
  ShieldCheck,
  Zap,
  PhoneCall,
  MessageSquare,
  Flame,
  Target,
  FileCheck,
  FolderCode,
  Layers,
  Award,
  ArrowRight,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "نسخه چاپی و PDF پروپوزال کارگاه مهندسی ایجنتیک | حسن شاهمرادی",
  robots: { index: false, follow: false },
};

export default async function DevTeamBootcampPrintPage() {
  const qrWebsite = await QRCode.toDataURL("https://hasanshah.ir/clients/dev-team-bootcamp/", {
    margin: 1,
    width: 200,
    color: { dark: "#f59e0b", light: "#00000000" },
  });

  const qrWhatsApp = await QRCode.toDataURL("https://wa.me/989120870095", {
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
            <span className="toolbar-title">نسخه ارائه و چاپ پروپوزال بوت‌کمپ تیم‌های نرم‌افزاری</span>
            <span className="toolbar-badge">A4 افقی (Landscape)</span>
          </div>
          <div className="toolbar-actions">
            <button type="button" className="btn-print" id="print-btn">
              <span>چاپ / ذخیره PDF</span>
              <kbd>⌘P</kbd>
            </button>
            <a href="/clients/dev-team-bootcamp/" className="btn-back">
              بازگشت به صفحه سایت
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
          SLIDE 1: COVER PAGE
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide slide-cover">
        <div className="slide-mesh-glow" />
        
        {/* Top bar */}
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">پروپوزال رسمی کارگاه B2B</span>
          </div>
          <div className="slide-counter">اسلاید ۰۱ / ۰۶</div>
        </div>

        {/* Hero Content */}
        <div className="cover-center">
          <div className="pill-badge">
            <TerminalSquare className="w-4 h-4 text-amber-400" />
            <span>پروپوزال و مسیر آموزشی اختصاصی مهندسی ایجنتیک و وایب‌کدینگ</span>
            <span className="pill-dot" />
            <span className="text-amber-200/80">ویژه تیم‌های فنی ۴ تا ۵ نفره</span>
          </div>

          <h1 className="cover-title">
            از کدنویسی دستی و فرسایشی
            <br />
            <span className="gold-gradient-text">تا رهبری و ارکستراسیون ایجنت‌ها</span>
          </h1>

          <p className="cover-desc">
            کارگاه فشرده ۴ ساعته (۲ جلسه ۲ ساعته + ۱ هفته اسپرینت عملیاتی) برای تیم توسعه نرم‌افزار.
            <br />
            تمرکز بر <strong className="text-white">کدیفای کردن استانداردهای سینیور</strong>، تسلط بر ساخت Custom Skills،
            کدنویسی با گفتگوی طبیعی، و ۵ برابر کردن راندمان تیم بدون افت معماری.
          </p>

          {/* Quick Specs Grid */}
          <div className="cover-specs-grid">
            <div className="spec-card">
              <div className="spec-icon-box">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="spec-val">۴ ساعت + ۱ هفته اسپرینت</div>
                <div className="spec-lbl">۲ جلسه ۲ ساعته همراه با تمرین روی تسک‌های واقعی</div>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon-box">
                <Users className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="spec-val">ظرفیت اختصاصی ۴ تا ۵ نفر</div>
                <div className="spec-lbl">تمرکز ۱ به ۱ و رفع چالش‌های اختصاصی استک فنی شما</div>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon-box">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="spec-val">تضمین معماری Clean</div>
                <div className="spec-lbl">تزریق قوانین و لینت‌ها بدون ورود بدهی فنی به پروژه</div>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon-box">
                <FolderCode className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="spec-val">تحویل Custom Skills</div>
                <div className="spec-lbl">ریپازیتوری پرامپت‌ها و اسکیل‌های اتوماسیون تیم شما</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="slide-footer">
          <div className="footer-instructor">
            <div className="inst-avatar">HS</div>
            <div>
              <div className="inst-name">مدرس و هدایت‌کننده: حسن شاهمرادی</div>
              <div className="inst-role">طراح سیستم، توسعه‌دهنده فول‌استک و پرچمدار وایب‌کدینگ در ایران</div>
            </div>
          </div>

          <div className="footer-qr-block">
            <div className="qr-text">
              <span>مشاهده و اعتبارسنجی آنلاین</span>
              <small>اسکن با دوربین موبایل</small>
            </div>
            <img src={qrWebsite} alt="QR Code" className="qr-img" />
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 2: THE PARADIGM SHIFT & ROI
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">تحول پارادایم و بازگشت سرمایه (ROI)</span>
          </div>
          <div className="slide-counter">اسلاید ۰۲ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">PARADIGM SHIFT</span>
            <h2 className="section-title">چرا تیم‌های پیشرو به سمت مهندسی ایجنتیک مهاجرت می‌کنند؟</h2>
            <p className="section-desc">
              تفاوت میان کدنویسی سنتی خط به خط با هدایت هوشمند ایجنت‌ها؛ جایی که مهندس از یک تایپیست کد به معمار و ناظر ارشد سیستم تبدیل می‌شود.
            </p>
          </div>

          {/* Comparison table */}
          <div className="comparison-grid">
            {/* Old Way */}
            <div className="comp-card comp-card-old">
              <div className="comp-header">
                <div className="comp-tag-old">کدنویسی سنتی (Manual Fatigue)</div>
                <h3 className="comp-title-old">فرسودگی در کارهای تکراری و افت شتاب</h3>
              </div>
              <ul className="comp-list">
                <li>
                  <span className="bullet-old">✕</span>
                  <span><strong>اتلاف زمان روی بویلرپلیت‌ها:</strong> ساعت‌ها صرف نوشتن تایپ‌ها، اعتبارسنجی‌ها، CRUD و تست‌های تکراری.</span>
                </li>
                <li>
                  <span className="bullet-old">✕</span>
                  <span><strong>وابستگی شدید به حافظه سینیور:</strong> قوانین معماری و استانداردهای نام‌گذاری فقط در ذهن اعضای ارشد ذخیره شده است.</span>
                </li>
                <li>
                  <span className="bullet-old">✕</span>
                  <span><strong>زمان تحویل (Lead Time) طولانی:</strong> فاصله‌ی میان ایده پروداکت تا کد آماده تست پروداکشن چندین روز طول می‌کشد.</span>
                </li>
                <li>
                  <span className="bullet-old">✕</span>
                  <span><strong>خستگی ذهنی و کداسلوپ:</strong> مهندسان بعد از چند ساعت کدنویسی خطی، انرژی تفکر عمیق معماری را از دست می‌دهند.</span>
                </li>
              </ul>
            </div>

            {/* Agentic Way */}
            <div className="comp-card comp-card-new">
              <div className="comp-header">
                <div className="comp-tag-new">مهندسی ایجنتیک (Vibe Coding)</div>
                <h3 className="comp-title-new">ارکستراسیون، تمرکز بر منطق و جهش ۵ برابری</h3>
              </div>
              <ul className="comp-list">
                <li>
                  <span className="bullet-new">✓</span>
                  <span><strong>کدیفای کردن قوانین سینیور (Codified Standards):</strong> استانداردهای مهندسی در قالب Rules به رفتار پیش‌فرض ایجنت تبدیل می‌شود.</span>
                </li>
                <li>
                  <span className="bullet-new">✓</span>
                  <span><strong>۵ برابر سرعت توسعه بدون باگ:</strong> پیاده‌سازی همزمان فرانت، بک، تایپ‌ها و تست‌ها با هدایت پرامپت‌های ساختاریافته.</span>
                </li>
                <li>
                  <span className="bullet-new">✓</span>
                  <span><strong>کدنویسی با زبان طبیعی فارسی:</strong> تحلیل نیازمندی‌ها و حل مسائل پیچیده به زبان روزمره بدون اصطکاک سینتکسی.</span>
                </li>
                <li>
                  <span className="bullet-new">✓</span>
                  <span><strong>یادگیری عمیق تفکر ساختاریافته:</strong> تیم به جای حفظ سینتکس‌ها، نحوه معمار بودن و تفکیک تسک‌ها را یاد می‌گیرد.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4 Metrics Strip */}
          <div className="metrics-strip">
            <div className="metric-box">
              <span className="metric-number">+۵۰۰٪</span>
              <span className="metric-label">سرعت تحویل فیچرهای جدید</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">۰٪</span>
              <span className="metric-label">افت معماری به کمک Clean Rules</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">۱ هفته</span>
              <span className="metric-label">اسپرینت واقعی در دل پروژه شما</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">۱۰۰٪</span>
              <span className="metric-label">گارانتی رضایت مدیر فنی تیم</span>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">بوت‌کمپ مهندسی ایجنتیک — حسن شاهمرادی</span>
          <span className="footer-url">hasanshah.ir/clients/dev-team-bootcamp</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 3: METHODOLOGY & PHASES
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">متدولوژی و ساختار فرآیند</span>
          </div>
          <div className="slide-counter">اسلاید ۰۳ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">WORKSHOP METHODOLOGY</span>
            <h2 className="section-title">۳ گام پیوسته: آموزش عمیق، اسپرینت عملی و تثبیت مهارت</h2>
            <p className="section-desc">
              این دوره یک وبینار تئوری نیست؛ یک تجربه کارگاهی در دل کدبیس واقعی شماست تا تیم از فردا با راندمان جدید کار کند.
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="methodology-grid">
            <div className="method-card">
              <div className="method-step-badge">فاز اول · ۲ ساعت</div>
              <h3 className="method-title">جلسه اول: فاندامنتال، مدل ذهنی و تسک‌بریکینگ</h3>
              <p className="method-desc">
                پایه‌ریزی مدل ذهنی تفکر ایجنتیک، راه‌اندازی ابزارهای تراز اول (Cursor, Claude Code, Antigravity) و تمرین عملی وایت‌بوردینگ فیچرها.
              </p>
              <div className="method-highlights">
                <div className="m-item">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>تفاوت ریشه‌ای چت با AI در مقابل ایجنت خودمختار</span>
                </div>
                <div className="m-item">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>کانفیگ و ساختار فایل‌های Rules اختصاصی</span>
                </div>
                <div className="m-item">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>تکنیک‌های پرامپت‌نویسی بدون سردرگمی ایجنت</span>
                </div>
              </div>
            </div>

            <div className="method-card method-card-highlight">
              <div className="method-step-badge badge-gold">فاز دوم · ۱ هفته</div>
              <h3 className="method-title">اسپرینت عملیاتی: تمرین در دل پروژه واقعی تیم</h3>
              <p className="method-desc">
                یک هفته اسپرینت واقعی؛ اعضای تیم تسک‌های بک‌لاگ واقعی خود را با متدهای آموخته‌شده پیاده‌سازی می‌کنند و مدرس همراه آنهاست.
              </p>
              <div className="method-highlights">
                <div className="m-item">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>گروه پشتیبانی و منتورشیپ مستقیم آنلاین</span>
                </div>
                <div className="m-item">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>کدریویو و اصلاح پرامپت‌های تیم به صورت زنده</span>
                </div>
                <div className="m-item">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>استخراج اصطکاک‌ها و آماده‌سازی برای جلسه دوم</span>
                </div>
              </div>
            </div>

            <div className="method-card">
              <div className="method-step-badge">فاز سوم · ۲ ساعت</div>
              <h3 className="method-title">جلسه دوم: اسکیل‌سازی سفارشی و ارکستراسیون</h3>
              <p className="method-desc">
                ساخت Custom Skills و MCPهای اختصاصی برای نیازهای منحصربه‌فرد کدبیس شرکت، ارکستراسیون چند ایجنت و پایپ‌لاین CI/CD.
              </p>
              <div className="method-highlights">
                <div className="m-item">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>طراحی و ساخت مهارت‌های سفارشی (Agent Skills)</span>
                </div>
                <div className="m-item">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>اتصال ایجنت‌ها به پایگاه داده و APIهای سازمان</span>
                </div>
                <div className="m-item">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>تست‌نویسی و بازبینی کیفیت خودکار در گیت</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">همراهی گام‌به‌گام تا تسلط کامل اعضای تیم</span>
          <span className="footer-url">hasanshah.ir/clients/dev-team-bootcamp</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 4: 4-HOUR COMPREHENSIVE SYLLABUS
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">سرفصل‌های تفکیکی ۴ ساعت کارگاه</span>
          </div>
          <div className="slide-counter">اسلاید ۰۴ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">CURRICULUM BREAKDOWN</span>
            <h2 className="section-title">سرفصل‌های دقیق ساعت‌به‌ساعت آموزش</h2>
            <p className="section-desc">
              سرفصل‌ها بر مبنای آخرین تکنولوژی‌های ۲۰۲۶ تدوین شده و مستقیماً روی حل چالش‌های روزمره برنامه‌نویسان متمرکز است.
            </p>
          </div>

          {/* 4 Hour Cards Grid */}
          <div className="syllabus-grid">
            <div className="syl-card">
              <div className="syl-hour">ساعت ۱ · جلسه اول</div>
              <h4 className="syl-title">زیرساخت، ابزارها و مدل ذهنی</h4>
              <ul className="syl-items">
                <li>معماری ابزارهای مدرن: Claude Code, Antigravity, Cursor</li>
                <li>تغذیه کانتکست با فایل‌های `AGENTS.md` و معماری تمیز</li>
                <li>جلوگیری از رفتارهای توهمی (Hallucination) مدل‌ها</li>
                <li>مدیریت کانتکست و جلوگیری از انفجار هزینه توکن</li>
              </ul>
            </div>

            <div className="syl-card">
              <div className="syl-hour">ساعت ۲ · جلسه اول</div>
              <h4 className="syl-title">تسک‌بریکینگ و پیاده‌سازی زنده فیچر</h4>
              <ul className="syl-items">
                <li>شکستن User Story پیچیده به تسک‌های قابل‌اجرا توسط ایجنت</li>
                <li>وایت‌بوردینگ و کدنویسی به زبان طبیعی فارسی</li>
                <li>تکنیک‌های Pair Programming و بازخورد بلادرنگ به ایجنت</li>
                <li>ایجاد یک فیچر کامل (فرانت + استیت + تایپ‌ها) در چند دقیقه</li>
              </ul>
            </div>

            <div className="syl-card">
              <div className="syl-hour">ساعت ۳ · جلسه دوم</div>
              <h4 className="syl-title">ساخت Custom Skills و اتوماسیون</h4>
              <ul className="syl-items">
                <li>آناتومی و ساختار فایل‌های `SKILL.md` اختصاصی</li>
                <li>اتصال ابزارهای خط فرمان و اسکریپت‌های شرکت به ایجنت</li>
                <li>کدیفای کردن تجربیات سینیور در قالب گایدلاین‌های خودکار</li>
                <li>حل مسائل پروداکشن تیم که در اسپرینت استخراج شدند</li>
              </ul>
            </div>

            <div className="syl-card">
              <div className="syl-hour">ساعت ۴ · جلسه دوم</div>
              <h4 className="syl-title">ارکستراسیون چند ایجنتی و استقرار</h4>
              <ul className="syl-items">
                <li>ارکستراسیون موازی ایجنت‌ها برای پروژه‌های بزرگ</li>
                <li>تست خودکار، لینتینگ و بررسی امنیتی کد قبل از کامیت</li>
                <li>پایپ‌لاین مستندسازی خودکار و تولید داکیومنت با ابزارهای AI</li>
                <li>نقشه راه ادامه مسیر و توسعه فرهنگ ایجنتیک در کل سازمان</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">سرفصل‌های کاربردی بدون ثانیه‌ای حاشیه‌گویی</span>
          <span className="footer-url">hasanshah.ir/clients/dev-team-bootcamp</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 5: DELIVERABLES & GUARANTEE
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">دستاوردهای ملموس و تضمین کیفیت</span>
          </div>
          <div className="slide-counter">اسلاید ۰۵ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">TEAM TAKEAWAYS</span>
            <h2 className="section-title">خروجی‌های ملموسی که تیم تحویل می‌گیرد</h2>
            <p className="section-desc">
              در پایان دوره، دارایی‌های نرم‌افزاری و مهارت‌هایی در اختیار تیم قرار می‌گیرد که سال‌ها در سازمان باقی خواهد ماند.
            </p>
          </div>

          <div className="deliverables-grid">
            <div className="deliv-card">
              <div className="deliv-icon"><FolderCode className="w-6 h-6 text-amber-400" /></div>
              <h4 className="deliv-title">ریپازیتوری Custom Skills شرکت</h4>
              <p className="deliv-desc">
                مجموعه‌ای از اسکیل‌ها و ابزارهای سفارشی که در طول کارگاه برای استک اختصاصی شرکت شما ساخته و تست شده است.
              </p>
            </div>

            <div className="deliv-card">
              <div className="deliv-icon"><ShieldCheck className="w-6 h-6 text-amber-400" /></div>
              <h4 className="deliv-title">قوانین کدیفای‌شده سینیور</h4>
              <p className="deliv-desc">
                پیکربندی استانداردهای معماری و کدهای مرجع در قالب فایل‌های کانفیگ که کیفیت کد اعضای تیم را یکدست و بالا نگه می‌دارد.
              </p>
            </div>

            <div className="deliv-card">
              <div className="deliv-icon"><FileCheck className="w-6 h-6 text-amber-400" /></div>
              <h4 className="deliv-title">چیت‌شیت و ورک‌فلوهای عملیاتی</h4>
              <p className="deliv-desc">
                دستورالعمل‌های مدون نحوه برخورد با باگ‌ها، ریفکتورینگ کدهای قدیمی و تست‌نویسی خودکار بدون از دست رفتن کانتکست.
              </p>
            </div>

            <div className="deliv-card">
              <div className="deliv-icon"><Award className="w-6 h-6 text-amber-400" /></div>
              <h4 className="deliv-title">ضبط جلسات و دسترسی دائمی</h4>
              <p className="deliv-desc">
                ویدیوهای کامل جلسات با کیفیت بالا برای آموزش نیروهای جدیدی که در آینده به تیم نرم‌افزاری شما اضافه می‌شوند.
              </p>
            </div>
          </div>

          {/* Guarantee Banner */}
          <div className="guarantee-banner">
            <div className="guar-icon-box">
              <Sparkles className="w-7 h-7 text-amber-400" />
            </div>
            <div className="guar-text">
              <h4>گارانتی ۱۰۰٪ رضایت مدیر فنی</h4>
              <p>
                اگر پس از جلسه اول احساس کردید رویکرد و کیفیت دوره در سطح انتظارات تیم شما نیست، کل مبلغ بدون هیچ قید و شرطی عودت داده می‌شود.
              </p>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">دارایی‌هایی دائمی برای رشد بلندمدت تیم فنی شما</span>
          <span className="footer-url">hasanshah.ir/clients/dev-team-bootcamp</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 6: INVESTMENT & CONTACT
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-mesh-glow" />
        
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">HASAN SHAHMORADI</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">سرمایه‌گذاری و ارتباط مستقیم</span>
          </div>
          <div className="slide-counter">اسلاید ۰۶ / ۰۶</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <span className="section-subtitle">INVESTMENT & BOOKING</span>
            <h2 className="section-title">شروع مسیر تحول ایجنتیک در تیم نرم‌افزاری شما</h2>
            <p className="section-desc">
              ظرفیت ماهانه برگزاری کارگاه برای حفظ بالاترین سطح تمرکز و کیفیت، به حداکثر ۲ تیم محدود است.
            </p>
          </div>

          <div className="booking-grid">
            {/* Package Summary Card */}
            <div className="package-card">
              <div className="pkg-badge">بسته کامل اختصاصی تیم ۴ تا ۵ نفره</div>
              <h3 className="pkg-title">کارگاه مهندسی ایجنتیک و وایب‌کدینگ</h3>
              
              <ul className="pkg-features">
                <li><CheckCircle2 className="w-4 h-4 text-amber-400" /> ۲ جلسه اختصاصی ۲ ساعته (آنلاین یا در محل شرکت)</li>
                <li><CheckCircle2 className="w-4 h-4 text-amber-400" /> ۱ هفته اسپرینت تمرین عملیاتی روی کدبیس واقعی شما</li>
                <li><CheckCircle2 className="w-4 h-4 text-amber-400" /> کانال پشتیبانی و منتورشیپ مستقیم با حسن شاهمرادی</li>
                <li><CheckCircle2 className="w-4 h-4 text-amber-400" /> تدوین فایل‌های استانداردهای سینیور و Custom Skills</li>
                <li><CheckCircle2 className="w-4 h-4 text-amber-400" /> تحویل ضبط کامل جلسات با کیفیت بالا</li>
                <li><CheckCircle2 className="w-4 h-4 text-amber-400" /> تضمین بازگشت وجه کامل در صورت عدم رضایت مدیر فنی</li>
              </ul>

              <div className="pkg-footer">
                <div>
                  <span className="pkg-status-dot" />
                  <span className="pkg-status-text">پذیرش فعال برای ماه جاری</span>
                </div>
                <div className="pkg-callout">هماهنگی تاریخ با تقویم تیم شما</div>
              </div>
            </div>

            {/* Direct Channels Card */}
            <div className="channels-card">
              <h4 className="channels-title">ارتباط مستقیم جهت هماهنگی و مشاوره اولیه</h4>
              
              <div className="channels-list">
                <a href="tel:09120870095" className="channel-item">
                  <div className="ch-icon"><PhoneCall className="w-5 h-5 text-amber-400" /></div>
                  <div className="ch-info">
                    <span className="ch-label">تماس تلفنی مستقیم</span>
                    <span className="ch-val" dir="ltr">0912 087 0095</span>
                  </div>
                </a>

                <a href="https://t.me/shahbusinessman" target="_blank" rel="noreferrer" className="channel-item">
                  <div className="ch-icon"><MessageSquare className="w-5 h-5 text-amber-400" /></div>
                  <div className="ch-info">
                    <span className="ch-label">تلگرام مستقیم</span>
                    <span className="ch-val" dir="ltr">@shahbusinessman</span>
                  </div>
                  <img src={qrTelegram} alt="Telegram QR" className="ch-qr" />
                </a>

                <a href="https://wa.me/989120870095" target="_blank" rel="noreferrer" className="channel-item">
                  <div className="ch-icon"><Zap className="w-5 h-5 text-amber-400" /></div>
                  <div className="ch-info">
                    <span className="ch-label">واتساپ و پیام‌رسان بله</span>
                    <span className="ch-val" dir="ltr">wa.me/989120870095</span>
                  </div>
                  <img src={qrWhatsApp} alt="WhatsApp QR" className="ch-qr" />
                </a>
              </div>

              <div className="channels-website-box">
                <img src={qrWebsite} alt="Website QR" className="cw-qr" />
                <div>
                  <div className="cw-title">hasanshah.ir/clients/dev-team-bootcamp</div>
                  <div className="cw-desc">اسکن کنید و پروپوزال آنلاین را همراه با تیم بررسی نمایید.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">پروپوزال رسمی کارگاه مهندسی ایجنتیک — حسن شاهمرادی</span>
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
        .slide-cover .cover-center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
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
          margin-bottom: 14px;
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
          line-height: 1.35;
          color: #ffffff;
          margin: 0 0 14px 0;
        }

        .gold-gradient-text {
          color: #f59e0b;
        }

        .cover-desc {
          font-size: 14px;
          line-height: 1.8;
          color: #94a3b8;
          max-width: 220mm;
          margin: 0 0 20px 0;
        }

        .cover-specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          width: 100%;
          max-width: 255mm;
        }

        .spec-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: right;
        }

        .spec-icon-box {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.25);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          shrink: 0;
        }

        .spec-val {
          font-size: 12px;
          font-weight: 800;
          color: #f8fafc;
        }

        .spec-lbl {
          font-size: 10px;
          color: #64748b;
          line-height: 1.3;
        }

        .slide-cover .slide-footer {
          border-top: 1px solid rgba(245, 158, 11, 0.2);
          padding-top: 12px;
        }

        .footer-instructor {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .inst-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #b45309);
          color: #000;
          font-weight: 900;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .inst-name {
          font-size: 13px;
          font-weight: 800;
          color: #f8fafc;
        }

        .inst-role {
          font-size: 11px;
          color: #94a3b8;
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

        /* ── Comparison Slide ── */
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 12px;
        }

        .comp-card {
          border-radius: 12px;
          padding: 14px 16px;
          border: 1px solid;
        }

        .comp-card-old {
          background: rgba(239, 68, 68, 0.03);
          border-color: rgba(239, 68, 68, 0.2);
        }

        .comp-card-new {
          background: rgba(245, 158, 11, 0.05);
          border-color: rgba(245, 158, 11, 0.45);
        }

        .comp-header {
          margin-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 8px;
        }

        .comp-tag-old {
          font-size: 10px;
          font-weight: 800;
          color: #f87171;
          text-transform: uppercase;
        }

        .comp-title-old {
          font-size: 14px;
          font-weight: 800;
          color: #fecaca;
          margin: 2px 0 0 0;
        }

        .comp-tag-new {
          font-size: 10px;
          font-weight: 800;
          color: #f59e0b;
          text-transform: uppercase;
        }

        .comp-title-new {
          font-size: 14px;
          font-weight: 800;
          color: #fef08a;
          margin: 2px 0 0 0;
        }

        .comp-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 12px;
          line-height: 1.5;
        }

        .comp-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #cbd5e1;
        }

        .bullet-old {
          color: #ef4444;
          font-weight: 900;
          shrink: 0;
        }

        .bullet-new {
          color: #10b981;
          font-weight: 900;
          shrink: 0;
        }

        .metrics-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 10px;
          padding: 10px 14px;
        }

        .metric-box {
          text-align: center;
        }

        .metric-number {
          display: block;
          font-size: 18px;
          font-weight: 900;
          color: #f59e0b;
        }

        .metric-label {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 600;
        }

        /* ── Methodology Grid ── */
        .methodology-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .method-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .method-card-highlight {
          background: rgba(245, 158, 11, 0.05);
          border-color: rgba(245, 158, 11, 0.5);
        }

        .method-step-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          background: rgba(255, 255, 255, 0.06);
          color: #94a3b8;
          padding: 3px 8px;
          border-radius: 6px;
          margin-bottom: 10px;
          align-self: flex-start;
        }

        .method-step-badge.badge-gold {
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .method-title {
          font-size: 14px;
          font-weight: 800;
          color: #f8fafc;
          margin: 0 0 8px 0;
          line-height: 1.4;
        }

        .method-desc {
          font-size: 11.5px;
          color: #94a3b8;
          line-height: 1.6;
          margin: 0 0 12px 0;
        }

        .method-highlights {
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 10px;
        }

        .m-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #cbd5e1;
        }

        /* ── Syllabus Grid ── */
        .syllabus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .syl-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(245, 158, 11, 0.15);
          border-radius: 10px;
          padding: 12px 14px;
        }

        .syl-hour {
          font-size: 10px;
          font-weight: 800;
          color: #f59e0b;
          text-transform: uppercase;
        }

        .syl-title {
          font-size: 13.5px;
          font-weight: 800;
          color: #f8fafc;
          margin: 2px 0 8px 0;
        }

        .syl-items {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 11.5px;
          color: #94a3b8;
        }

        .syl-items li::before {
          content: "•";
          color: #f59e0b;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-right: -1em;
        }

        /* ── Deliverables Grid ── */
        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 12px;
        }

        .deliv-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 12px;
        }

        .deliv-icon {
          margin-bottom: 8px;
        }

        .deliv-title {
          font-size: 13px;
          font-weight: 800;
          color: #f8fafc;
          margin: 0 0 6px 0;
        }

        .deliv-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0;
        }

        .guarantee-banner {
          display: flex;
          align-items: center;
          gap: 14px;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(217, 119, 6, 0.06));
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: 12px;
          padding: 12px 18px;
        }

        .guar-icon-box {
          background: rgba(245, 158, 11, 0.2);
          border: 1px solid rgba(245, 158, 11, 0.4);
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          shrink: 0;
        }

        .guar-text h4 {
          font-size: 13.5px;
          font-weight: 900;
          color: #fef08a;
          margin: 0 0 2px 0;
        }

        .guar-text p {
          font-size: 11.5px;
          color: #e2e8f0;
          margin: 0;
          line-height: 1.5;
        }

        /* ── Booking Slide ── */
        .booking-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
        }

        .package-card {
          background: rgba(245, 158, 11, 0.04);
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: 12px;
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .pkg-badge {
          font-size: 10px;
          font-weight: 800;
          color: #f59e0b;
          text-transform: uppercase;
        }

        .pkg-title {
          font-size: 17px;
          font-weight: 900;
          color: #ffffff;
          margin: 4px 0 10px 0;
        }

        .pkg-features {
          list-style: none;
          padding: 0;
          margin: 0 0 14px 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 11.5px;
          color: #cbd5e1;
        }

        .pkg-features li {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pkg-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(245, 158, 11, 0.2);
          padding-top: 10px;
          font-size: 11px;
        }

        .pkg-status-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          margin-left: 6px;
        }

        .pkg-status-text {
          font-weight: 700;
          color: #10b981;
        }

        .pkg-callout {
          color: #f59e0b;
          font-weight: 700;
        }

        .channels-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .channels-title {
          font-size: 13.5px;
          font-weight: 800;
          color: #f8fafc;
          margin: 0 0 10px 0;
        }

        .channels-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .channel-item {
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

        .ch-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: rgba(245, 158, 11, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          shrink: 0;
        }

        .ch-info {
          flex: 1;
        }

        .ch-label {
          display: block;
          font-size: 10px;
          color: #94a3b8;
        }

        .ch-val {
          font-size: 12px;
          font-weight: 800;
          color: #f8fafc;
        }

        .ch-qr {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          background: rgba(255,255,255,0.05);
        }

        .channels-website-box {
          margin-top: 10px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cw-qr {
          width: 36px;
          height: 36px;
          border-radius: 4px;
        }

        .cw-title {
          font-size: 11.5px;
          font-weight: 800;
          color: #f59e0b;
          direction: ltr;
        }

        .cw-desc {
          font-size: 10px;
          color: #94a3b8;
        }
      `}} />
    </div>
  );
}
