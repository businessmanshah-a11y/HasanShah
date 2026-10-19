import { Metadata } from "next";
import Image from "next/image";
import {
  Sparkles,
  Calendar,
  ChevronLeft,
  Check,
  Flame,
  Award,
  AlertCircle,
  Car,
  Truck,
  Mountain,
  Compass,
  Gauge,
  X,
  ShieldCheck,
  Zap,
  Printer,
  FileDown,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "نسخه چاپی و PDF پروپوزال اختصاصی شوگان گاراژ | حسن شاهمرادی",
  description:
    "نسخه آماده چاپ و PDF سند راهبردی، کاتالوگ مهندسی و شورووم اختصاصی شوگان گاراژ — شهرک صنعتی گلگون.",
  robots: { index: false, follow: false },
};

export default function ShogunPrintPage() {
  return (
    <div className="print-root" dir="rtl" style={{ fontFamily: "'Peyda', Tahoma, sans-serif" }}>
      {/* ── Screen-Only Interactive Toolbar ── */}
      <div className="no-print screen-toolbar">
        <div className="toolbar-inner">
          <div className="toolbar-info">
            <span className="toolbar-dot" />
            <span className="toolbar-title">نسخه ارائه و چاپ پروپوزال شوگان گاراژ</span>
            <span className="toolbar-badge">A4 افقی (Landscape) · ۸ اسلاید استاندارد</span>
          </div>
          <div className="toolbar-actions">
            <button type="button" className="btn-print" id="print-btn">
              <Printer className="w-4 h-4" />
              <span>چاپ / ذخیره PDF</span>
              <kbd>⌘P</kbd>
            </button>
            <a href="/downloads/shogun-garage-proposal.pdf" download className="btn-download">
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>دانلود فایل PDF</span>
            </a>
            <a href="/clients/shogun-garage/" className="btn-back">
              <ArrowRight className="w-4 h-4" />
              <span>بازگشت به سایت</span>
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

        {/* Top Header */}
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">SHOGUN 4X4 GARAGE</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">سند راهبردی شورووم مهندسی</span>
          </div>
          <div className="slide-counter">اسلاید ۰۱ / ۰۸</div>
        </div>

        {/* Hero Content */}
        <div className="cover-center">
          <div className="pill-badge">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>SHOGUN 4X4 ENGINEERING</span>
            <span className="pill-dot" />
            <span className="text-neutral-300">شهرک صنعتی گلگون · سند راهبردی اختصاصی</span>
          </div>

          <h1 className="cover-title">
            <span>مرجع مهندسی و تجهیز </span>
            <span className="red-gradient-text">خودروهای بیراهه‌نورد</span>
          </h1>

          <div className="kicker-text">THE GENESIS // ۰۱</div>

          <p className="cover-desc">
            پروپوزال اختصاصی شوگان گاراژ؛ شورووم قطعات، خدمات کارگاهی و کلوب ماجراجویی.
          </p>

          {/* Quick Metrics */}
          <div className="metrics-grid">
            <div className="metric-box">
              <div className="metric-val text-white">+۲۱K</div>
              <div className="metric-lbl">مخاطب وفادار اینستاگرام</div>
            </div>
            <div className="metric-box">
              <div className="metric-val text-red-500">۱ سال</div>
              <div className="metric-lbl">پشتیبانی فنی تضمینی</div>
            </div>
            <div className="metric-box">
              <div className="metric-val text-white">۱۰۰٪</div>
              <div className="metric-lbl">کدنویسی اختصاصی PHP</div>
            </div>
            <div className="metric-box">
              <div className="metric-val text-orange-400">۸ اسلاید</div>
              <div className="metric-lbl">شورووم تعاملی تمام‌صفحه</div>
            </div>
          </div>
        </div>

        {/* Slide Footer */}
        <div className="slide-footer">
          <span className="footer-note">آماده‌شده برای مدیریت محترم مجموعه شوگان گاراژ</span>
          <span className="footer-url">hasanshah.ir/clients/shogun-garage/</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 2: GAP ANALYSIS & PRESTIGE
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">SHOGUN 4X4 GARAGE</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">تحلیل شکاف بازار و تمایز برند</span>
          </div>
          <div className="slide-counter">اسلاید ۰۲ / ۰۸</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <h2 className="section-title">تمایز شورووم شوگان با سایت‌سازهای معمولی</h2>
            <div className="kicker-text">GAP ANALYSIS & BRAND PRESTIGE // ۰۲</div>
            <p className="section-desc">
              مقایسه رویکرد فروشگاه‌های قالبی متداول بازار با استانداردهای اختصاصی شوگان گاراژ.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comp-card comp-card-old">
              <div className="comp-header">
                <span className="comp-tag-old">GENERIC CMS · سایت‌سازهای قالبی</span>
                <div className="comp-title-old">الگوهای متداول و آماده بازار</div>
              </div>
              <ul className="comp-list">
                <li>
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>قالب‌های کند و سنگین آماده بدون هویت آفرود ژاپنی</span>
                </li>
                <li>
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>سردرگمی خریدار به دلیل عدم فیلتر بر اساس شاسی خودرو</span>
                </li>
                <li>
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>غفلت کامل از معرفی خدمات کارگاه مهندسی گلگون</span>
                </li>
                <li>
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>نبود بخش اختصاصی برای دورهمی‌ها و اعضای کلوب</span>
                </li>
              </ul>
            </div>

            <div className="comp-card comp-card-new">
              <div className="comp-header">
                <span className="comp-tag-new">HIGH PERFORMANCE · معماری شوگان</span>
                <div className="comp-title-new">کدنویسی اختصاصی PHP و وردپرس مهندسی‌شده</div>
              </div>
              <ul className="comp-list">
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>کدنویسی اختصاصی با PHP بدون قالب‌های آماده و سنگین</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>یکپارچه‌سازی با ووکامرس و فیلتر قطعات بر اساس شاسی خودرو</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>پنل ادمین اختصاصی، امن و پرسرعت برای مدیریت آسان</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>پورتال Shogun Adventure Club و شوکیس پروژه جیمشید</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">هدف کلیدی: تبدیل ۲۱ هزار دنبال‌کننده به مشتریان وفادار کارگاه</span>
          <span className="footer-url">hasanshah.ir/clients/shogun-garage/</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 3: PARTS & FITMENT
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">SHOGUN 4X4 GARAGE</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">کاتالوگ و سازگاری شاسی</span>
          </div>
          <div className="slide-counter">اسلاید ۰۳ / ۰۸</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <h2 className="section-title">کاتالوگ مهندسی و سازگاری قطعات با خودرو</h2>
            <div className="kicker-text">PARTS CATALOGUE & FITMENT VERIFICATION // ۰۳</div>
            <p className="section-desc">
              انتخاب دقیق بر اساس شاسی خودرو با تصاویر استودیویی و استعلام آنی.
            </p>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/clients/shogun/winch-detail.jpg"
                  alt="وینچ برقی ۱۲,۰۰۰ پوند"
                  className="product-img"
                  loading="eager"
                />
                <span className="product-badge">RECOVERY GEAR</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">وینچ برقی ۱۲,۰۰۰ پوند کابل قرمز</h3>
                <p className="product-desc">موتور ضدآب IP68، کابل سنتتیک، ریموت وایرلس و سینی فابریک</p>
                <div className="product-tag">نصب فابریک در گلگون</div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/clients/shogun/wheel-detail.jpg"
                  alt="رینگ بیدلاک ۱۶ اینچ"
                  className="product-img"
                  loading="eager"
                />
                <span className="product-badge">WHEEL & TIRE</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">رینگ سبک‌وزن بیدلاک ۱۶ اینچ</h3>
                <p className="product-desc">حلقه بیدلاک فورج قرمز؛ جلوگیری از دیس‌بید در رمل و صخره</p>
                <div className="product-tag text-amber-400">موجودی در انبار شوگان</div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/clients/shogun/parts-detail.jpg"
                  alt="کیت کمک‌فنر نیتروژنی شوگان"
                  className="product-img"
                  loading="eager"
                />
                <span className="product-badge">SUSPENSION KIT</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">کیت کمک‌فنر نیتروژنی شوگان</h3>
                <p className="product-desc">لیفت ۲.۵ اینچ، مخزن ریموت، تنظیم نرمی ۳۰ حالته مخصوص جیمنی</p>
                <div className="product-tag text-emerald-400">فیتمنت تضمینی شاسی</div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">حذف اصطکاک قیمت متغیر: مشتری مستقیماً به استعلام فنی وصل می‌شود</span>
          <span className="footer-url">hasanshah.ir/clients/shogun-garage/</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 4: WORKSHOP HUB
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">SHOGUN 4X4 GARAGE</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">هاب خدمات کارگاهی گلگون</span>
          </div>
          <div className="slide-counter">اسلاید ۰۴ / ۰۸</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <h2 className="section-title">هاب خدمات کارگاهی و مدیریت نوبت‌ها</h2>
            <div className="kicker-text">WORKSHOP HUB & TIME SLOT MANAGEMENT // ۰۴</div>
            <p className="section-desc">
              معرفی لاین‌های تخصصی شوگان در گلگون به همراه تقویم نوبت‌دهی.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-num">۰۱</div>
              <h3 className="service-title">سرویس‌های ادواری موتور و گیربکس</h3>
              <p className="service-desc">تست کیفیت روغن و سوخت، شستشوی انژکتور، سلامت موتور در شرایط سخت بیراهه‌نوردی.</p>
            </div>

            <div className="service-card">
              <div className="service-num">۰۲</div>
              <h3 className="service-title">نصب و کالیبراسیون زیربندی</h3>
              <p className="service-desc">تنظیم کمبر و کستر، لیفت استاندارد تعلیق بدون گیجی فرمان و افت پایداری خودرو.</p>
            </div>

            <div className="service-card">
              <div className="service-num">۰۳</div>
              <h3 className="service-title">تست درایو و چکاپ پیش از سفر</h3>
              <p className="service-desc">بازرسی کامل سیستم ۴ چرخ، دیفرانسیل‌ها، ترمزها و پلوس‌ها پیش از ورود به کویر یا کوهستان.</p>
            </div>

            <div className="service-card">
              <div className="service-num">۰۴</div>
              <h3 className="service-title">تجهیز و شخصی‌سازی کمپر</h3>
              <p className="service-desc">سیم‌کشی باتری دوم، اسنورکل، باک اضافه، پروژکتورهای دید در شب و امکانات رفاهی سفر.</p>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">سیستم رزرو هوشمند: ادمن گاراژ زمان‌های پر را مشخص می‌کند و مشتری نوبت می‌گیرد</span>
          <span className="footer-url">hasanshah.ir/clients/shogun-garage/</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 5: SMART ADVISOR
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">SHOGUN 4X4 GARAGE</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">سامانه مشاوره و استعلام هوشمند</span>
          </div>
          <div className="slide-counter">اسلاید ۰۵ / ۰۸</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <h2 className="section-title">سامانه هوشمند مشاوره انتخاب خودرو</h2>
            <div className="kicker-text">SMART ADVISOR & BUILD SIMULATOR // ۰۵</div>
            <p className="section-desc">
              انتخاب پلتفرم و سبک تیونینگ با برآورد فنی سریع.
            </p>
          </div>

          <div className="advisor-box">
            <div className="advisor-header">
              <span className="advisor-tag">مرحله ۱: انتخاب پلتفرم شاسی</span>
              <span className="advisor-tag">مرحله ۲: سبک تجهیز مورد نیاز</span>
            </div>

            <div className="advisor-grid">
              <div className="advisor-item active">
                <Car className="w-5 h-5 text-red-500" />
                <div>
                  <div className="adv-name">سوزوکی جیمنی</div>
                  <div className="adv-tag">پلتفرم تخصصی شوگان</div>
                </div>
              </div>

              <div className="advisor-item">
                <Truck className="w-5 h-5 text-neutral-400" />
                <div>
                  <div className="adv-name">تویوتا پرادو / هایلوکس</div>
                  <div className="adv-tag">آفرود سنگین و اورلندینگ</div>
                </div>
              </div>

              <div className="advisor-item">
                <Mountain className="w-5 h-5 text-neutral-400" />
                <div>
                  <div className="adv-name">میتسوبیشی پاجرو</div>
                  <div className="adv-tag">شاسی مستقل مسابقه‌ای</div>
                </div>
              </div>

              <div className="advisor-item">
                <Compass className="w-5 h-5 text-neutral-400" />
                <div>
                  <div className="adv-name">نیسان پاترول / رونیز</div>
                  <div className="adv-tag">کلاسیک و بازسازی کامل</div>
                </div>
              </div>
            </div>

            <div className="advisor-styles-grid">
              <div className="adv-style-item active">
                <Compass className="w-4 h-4 text-red-500" />
                <span className="adv-style-name">اورلندینگ و کمپینگ</span>
                <span className="adv-style-desc">سفرهای طولانی، باربند، روف‌تنت و پایداری در شیب</span>
              </div>
              <div className="adv-style-item">
                <Mountain className="w-4 h-4 text-neutral-400" />
                <span className="adv-style-name">آفرود سنگین و صخره</span>
                <span className="adv-style-desc">لیفت ۳ اینچ، وینچ ۱۲,۰۰۰، دف‌لاک و رینگ بیدلاک</span>
              </div>
              <div className="adv-style-item">
                <Gauge className="w-4 h-4 text-neutral-400" />
                <span className="adv-style-name">پرفورمنس و سواری شهری</span>
                <span className="adv-style-desc">سواری نرم، رینگ سبک فورج و ترمز تقویت‌شده</span>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">ابزار تعاملی اختصاصی برای ثبت و پردازش درخواست‌های تیونینگ کاربران</span>
          <span className="footer-url">hasanshah.ir/clients/shogun-garage/</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 6: COMMUNITY & JIMSHID
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">SHOGUN 4X4 GARAGE</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">جامعه مخاطبان و شوکیس جیمشید</span>
          </div>
          <div className="slide-counter">اسلاید ۰۶ / ۰۸</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <h2 className="section-title">کلوب ماجراجویی و پروژه جیمشید</h2>
            <div className="kicker-text">COMMUNITY HUB & HERO SHOWCASE // ۰۶</div>
            <p className="section-desc">
              پورتال اختصاصی ایونت‌ها و نمایش پروژه‌های شاخص شوگان.
            </p>
          </div>

          <div className="community-grid">
            <div className="comm-card comm-card-club">
              <div className="comm-img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/clients/shogun/adventure-club.jpg"
                  alt="کلوب ماجراجویی شوگان"
                  className="comm-img"
                  loading="eager"
                />
                <span className="comm-badge">EXCLUSIVE CLUB</span>
              </div>
              <div className="comm-info">
                <h3 className="comm-title">پورتال Shogun Adventure Club</h3>
                <p className="comm-desc">
                  تقویم دورهمی‌های آفرود، ثبت‌نام در پیمایش‌های کویری و کوهستانی، دستورالعمل‌های فنی ایمنی سفر و شبکه اعضای شوگان.
                </p>
              </div>
            </div>

            <div className="comm-card comm-card-jimshid">
              <div className="comm-img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/clients/shogun/hero-jimny.jpg"
                  alt="سوپرپروژه جیمشید"
                  className="comm-img"
                  loading="eager"
                />
                <span className="comm-badge text-orange-400">HERO PROJECT</span>
              </div>
              <div className="comm-info">
                <h3 className="comm-title">شوکیس اختصاصی جیمشید (جیمنی پرچمدار)</h3>
                <p className="comm-desc">
                  شناسنامه کامل تیونینگ، ریز مشخصات زیربندی، رینگ و تایر، ویدیوهای تست درایو در رمل‌های ورزنه و لینک قطعات به‌کاررفته.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">ایجاد وفاداری عمیق در مشتریان از طریق تولید محتوا و ایونت‌های دوره‌ای</span>
          <span className="footer-url">hasanshah.ir/clients/shogun-garage/</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 7: PROJECT ROADMAP
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">SHOGUN 4X4 GARAGE</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">نقشه راه اجرایی ۴ گام</span>
          </div>
          <div className="slide-counter">اسلاید ۰۷ / ۰۸</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <h2 className="section-title">نقشه راه ۴ گام تا راه‌اندازی شورووم</h2>
            <div className="kicker-text">IMPLEMENTATION PHASES & TIMELINE // ۰۷</div>
            <p className="section-desc">
              فازبندی شفاف پروژه با بررسی و تایید مداوم خروجی‌ها.
            </p>
          </div>

          <div className="roadmap-grid">
            <div className="roadmap-step">
              <div className="step-tag">گام اول · هفته ۱</div>
              <h3 className="step-title">هویت بصری و سناریو</h3>
              <ul className="step-list">
                <li>• دریافت تصاویر و ویدیوهای شوگان</li>
                <li>• تعیین رنگ، پالت و فونت اختصاصی پیدا</li>
                <li>• استراتژی محتوا و دسته‌بندی قطعات</li>
              </ul>
            </div>

            <div className="roadmap-step">
              <div className="step-tag">گام دوم · هفته ۲-۳</div>
              <h3 className="step-title">طراحی لندینگ و دیزاین</h3>
              <ul className="step-list">
                <li>• پیاده‌سازی پروتوتایپ زنده لندینگ</li>
                <li>• بررسی جزء به جزء دکمه‌ها و رنگ‌ها</li>
                <li>• تایید نهایی دیزاین سیستم (Sign-off)</li>
              </ul>
            </div>

            <div className="roadmap-step step-highlight">
              <div className="step-tag text-red-400">گام سوم · هفته ۴-۶</div>
              <h3 className="step-title">کدنویسی اختصاصی PHP</h3>
              <ul className="step-list">
                <li>• توسعه قالب اختصاصی و هسته ووکامرس</li>
                <li>• سامانه مشاوره هوشمند و تقویم نوبت‌دهی</li>
                <li>• پنل ادمین اختصاصی، امن و پرسرعت</li>
              </ul>
            </div>

            <div className="roadmap-step">
              <div className="step-tag">گام چهارم · هفته ۷</div>
              <h3 className="step-title">تست، استقرار و لانچ</h3>
              <ul className="step-list">
                <li>• بهینه‌سازی سرعت ۹۵+ روی موبایل</li>
                <li>• اتصال دامنه و سئو پایه محلی</li>
                <li>• آموزش پنل و آغاز ۱ سال پشتیبانی</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">تضمین تحویل به موقع همراه با گزارش‌دهی هفتگی در تمام مراحل</span>
          <span className="footer-url">hasanshah.ir/clients/shogun-garage/</span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SLIDE 8: PROPOSED PACKAGES
      ═════════════════════════════════════════════ */}
      <section className="slide">
        <div className="slide-header">
          <div className="brand-badge">
            <span className="brand-logo-text">SHOGUN 4X4 GARAGE</span>
            <span className="brand-sep">|</span>
            <span className="brand-sub">پلن‌های پیشنهادی توسعه</span>
          </div>
          <div className="slide-counter">اسلاید ۰۸ / ۰۸</div>
        </div>

        <div className="slide-body">
          <div className="section-title-wrap">
            <h2 className="section-title">پلن‌های پیشنهادی توسعه شوگان گاراژ</h2>
            <div className="kicker-text">PROPOSED EXECUTIVE PACKAGES // ۰۸</div>
            <p className="section-desc">
              هر دو پکیج شامل کدنویسی ۱۰۰٪ اختصاصی قالب با PHP تحت استاندارد وردپرس و ووکامرس همراه با ۱ سال پشتیبانی فنی کامل تضمینی می‌باشند.
            </p>
          </div>

          <div className="packages-grid">
            <div className="package-card">
              <div className="pkg-head">
                <div>
                  <span className="pkg-tag">PLAN 01</span>
                  <h3 className="pkg-title">کاتالوگ پرفورمنس شوگان</h3>
                </div>
                <span className="pkg-status">پکیج استاندارد</span>
              </div>
              <ul className="pkg-list">
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>کدنویسی ۱۰۰٪ اختصاصی قالب با PHP بر پایه وردپرس</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>کاتالوگ قطعات مهندسی هماهنگ با هسته ووکامرس</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>معرفی ۴ لاین خدمات کارگاهی گلگون و فرم نوبت</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>پنل ادمین اختصاصی، امن و پرسرعت برای مدیریت آسان</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>بهینه‌سازی کامل سرعت و رابط کاربری موبایل</span>
                </li>
                <li className="pt-1">
                  <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-bold text-white">۱ سال پشتیبانی فنی کامل و تضمینی</span>
                </li>
              </ul>
            </div>

            <div className="package-card pkg-card-recommended">
              <div className="rec-ribbon">RECOMMENDED · بالاترین بازدهی تجاری</div>
              <div className="pkg-head">
                <div>
                  <span className="pkg-tag text-red-400">PLAN 02</span>
                  <h3 className="pkg-title">شورووم جامع و تعاملی شوگان</h3>
                </div>
                <span className="pkg-status bg-red-950 text-red-400 border-red-500/30">پکیج جامع (پیشنهادی)</span>
              </div>
              <ul className="pkg-list">
                <li className="text-amber-300 font-bold">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>تمام امکانات پکیج اول + افزونه‌های اختصاصی زیر:</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>سامانه مشاوره هوشمند خودرو (Advisor Plugin اختصاصی)</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>سیستم نوبت‌دهی تقویمی با پنل اختصاصی در وردپرس</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>پورتال Shogun Adventure Club و شوکیس جیمشید</span>
                </li>
                <li>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>انیمیشن‌های تعاملی سبک کمبر (بدون افت سرعت)</span>
                </li>
                <li className="pt-1">
                  <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-bold text-white">۱ سال پشتیبانی فنی کامل و تضمینی</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="slide-footer">
          <span className="footer-note">پروپوزال آماده تایید نهایی و ورود به فاز اول تحقیقات و طراحی دیزاین سیستم</span>
          <span className="footer-url">SHOGUN 4X4 GARAGE · نسخه رسمی سند راهبردی</span>
        </div>
      </section>

      {/* ─── Stylesheet for Perfect A4 Landscape Print & Screen Preview ─── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          size: A4 landscape;
          margin: 0;
        }

        *, *::before, *::after {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: #060709;
          color: #f3f4f6;
          font-family: 'Peyda', Tahoma, sans-serif;
        }

        .print-root {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 40px;
        }

        .screen-toolbar {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: rgba(10, 10, 11, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 24px;
        }

        .toolbar-inner {
          max-width: 297mm;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .toolbar-info {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
        }

        .toolbar-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
        }

        .toolbar-title {
          font-weight: 800;
          color: #fff;
        }

        .toolbar-badge {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 2px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
        }

        .toolbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-print {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #dc2626;
          color: #fff;
          border: none;
          padding: 7px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s;
        }

        .btn-print:hover {
          background: #b91c1c;
        }

        .btn-print kbd {
          background: rgba(0,0,0,0.25);
          padding: 2px 5px;
          border-radius: 4px;
          font-size: 10px;
        }

        .btn-download {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
        }

        .btn-back {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12px;
          text-decoration: none;
        }

        /* ── Slide Canvas ── */
        .slide {
          width: 297mm;
          height: 210mm;
          max-height: 210mm;
          position: relative;
          background: #0a0a0b;
          border: 1px solid rgba(220, 38, 38, 0.25);
          margin: 16px 0;
          padding: 12mm 16mm 10mm 16mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          page-break-after: always;
          break-inside: avoid;
          box-shadow: 0 20px 40px rgba(0,0,0,0.7);
        }

        @media print {
          .no-print {
            display: none !important;
          }
          html, body, .print-root {
            background: #0a0a0b !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
          }
          .slide {
            width: 297mm !important;
            height: 209mm !important;
            max-height: 209mm !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            box-sizing: border-box !important;
          }
          .slide:last-of-type {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
        }

        .slide-mesh-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.12) 0%, transparent 45%);
          pointer-events: none;
        }

        .slide-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(220, 38, 38, 0.25);
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
          color: #ef4444;
        }

        .brand-sep {
          color: rgba(255, 255, 255, 0.2);
        }

        .brand-sub {
          font-size: 12px;
          font-weight: 600;
          color: #94a3b8;
        }

        .slide-counter {
          font-size: 11px;
          font-weight: 700;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 2px 10px;
          border-radius: 999px;
        }

        .slide-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 10;
          padding: 8px 0;
        }

        .section-title-wrap {
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 3px 0;
          letter-spacing: -0.02em;
        }

        .kicker-text {
          color: #ef4444;
          font-size: 11px;
          font-family: ui-monospace, monospace;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 3px;
        }

        .section-desc {
          font-size: 12px;
          color: #94a3b8;
          margin: 0;
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
          background: rgba(220, 38, 38, 0.12);
          border: 1px solid rgba(220, 38, 38, 0.3);
          padding: 4px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          color: #f87171;
          margin-bottom: 14px;
        }

        .pill-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .cover-title {
          font-size: 34px;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 8px 0;
          line-height: 1.25;
        }

        .red-gradient-text {
          background: linear-gradient(to left, #ef4444, #f97316, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cover-desc {
          font-size: 14px;
          color: #cbd5e1;
          max-width: 600px;
          margin: 6px 0 20px 0;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          width: 100%;
          max-width: 680px;
        }

        .metric-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 10px 14px;
          text-align: center;
        }

        .metric-val {
          font-size: 22px;
          font-weight: 900;
        }

        .metric-lbl {
          font-size: 10.5px;
          color: #94a3b8;
          margin-top: 2px;
        }

        /* ── Comparison Slide ── */
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .comp-card {
          border-radius: 12px;
          padding: 16px;
          border: 1px solid;
        }

        .comp-card-old {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.08);
        }

        .comp-card-new {
          background: linear-gradient(135deg, rgba(20, 20, 24, 0.9), rgba(50, 10, 15, 0.4));
          border-color: rgba(220, 38, 38, 0.4);
        }

        .comp-header {
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 10px;
        }

        .comp-tag-old {
          font-size: 10px;
          font-weight: 800;
          color: #94a3b8;
          font-family: ui-monospace, monospace;
        }

        .comp-tag-new {
          font-size: 10px;
          font-weight: 800;
          color: #ef4444;
          font-family: ui-monospace, monospace;
        }

        .comp-title-old {
          font-size: 14px;
          font-weight: 800;
          color: #cbd5e1;
          margin-top: 2px;
        }

        .comp-title-new {
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          margin-top: 2px;
        }

        .comp-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 12px;
          color: #cbd5e1;
        }

        .comp-list li {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ── Products Grid ── */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .product-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          overflow: hidden;
        }

        .product-img-box {
          position: relative;
          height: 120px;
          overflow: hidden;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-badge {
          position: absolute;
          top: 6px;
          left: 6px;
          background: rgba(0, 0, 0, 0.75);
          color: #ef4444;
          font-size: 9px;
          font-family: ui-monospace, monospace;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid rgba(220, 38, 38, 0.4);
        }

        .product-info {
          padding: 10px 12px;
        }

        .product-name {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .product-desc {
          font-size: 10.5px;
          color: #94a3b8;
          line-height: 1.4;
          margin: 0 0 6px 0;
        }

        .product-tag {
          font-size: 10px;
          font-weight: 700;
          color: #ef4444;
        }

        /* ── Services Grid ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px;
        }

        .service-num {
          font-family: ui-monospace, monospace;
          font-size: 14px;
          font-weight: 900;
          color: #ef4444;
          margin-bottom: 6px;
        }

        .service-title {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 6px 0;
          line-height: 1.35;
        }

        .service-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Advisor Box ── */
        .advisor-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 16px;
        }

        .advisor-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .advisor-tag {
          font-size: 11px;
          font-weight: 700;
          color: #ef4444;
        }

        .advisor-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 12px;
        }

        .advisor-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .advisor-item.active {
          border-color: rgba(220, 38, 38, 0.5);
          background: rgba(220, 38, 38, 0.08);
        }

        .adv-name {
          font-size: 11.5px;
          font-weight: 800;
          color: #ffffff;
        }

        .adv-tag {
          font-size: 9.5px;
          color: #94a3b8;
        }

        .advisor-styles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .adv-style-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .adv-style-item.active {
          border-color: rgba(220, 38, 38, 0.5);
          background: rgba(220, 38, 38, 0.08);
        }

        .adv-style-name {
          font-size: 11.5px;
          font-weight: 800;
          color: #ffffff;
        }

        .adv-style-desc {
          font-size: 9.5px;
          color: #94a3b8;
        }

        /* ── Community Grid ── */
        .community-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .comm-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          overflow: hidden;
        }

        .comm-img-box {
          position: relative;
          height: 130px;
          overflow: hidden;
        }

        .comm-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .comm-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          background: rgba(0, 0, 0, 0.75);
          color: #ef4444;
          font-size: 9.5px;
          font-family: ui-monospace, monospace;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid rgba(220, 38, 38, 0.4);
        }

        .comm-info {
          padding: 10px 14px;
        }

        .comm-title {
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .comm-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Roadmap Grid ── */
        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .roadmap-step {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 12px 14px;
        }

        .roadmap-step.step-highlight {
          border-color: rgba(220, 38, 38, 0.4);
          background: rgba(220, 38, 38, 0.06);
        }

        .step-tag {
          font-size: 10px;
          font-family: ui-monospace, monospace;
          font-weight: 700;
          color: #cbd5e1;
          margin-bottom: 4px;
        }

        .step-title {
          font-size: 13px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .step-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 10.5px;
          color: #94a3b8;
          line-height: 1.4;
        }

        /* ── Packages Grid ── */
        .packages-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .package-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 16px;
          position: relative;
        }

        .pkg-card-recommended {
          background: linear-gradient(135deg, rgba(20, 20, 24, 0.95), rgba(50, 10, 15, 0.45));
          border-color: rgba(220, 38, 38, 0.5);
        }

        .rec-ribbon {
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(to right, #dc2626, #ea580c);
          color: #fff;
          font-size: 9px;
          font-family: ui-monospace, monospace;
          font-weight: 800;
          padding: 2px 10px;
          border-bottom-right-radius: 8px;
        }

        .pkg-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 8px;
          padding-top: 4px;
        }

        .pkg-tag {
          font-size: 10px;
          font-family: ui-monospace, monospace;
          font-weight: 700;
          color: #94a3b8;
        }

        .pkg-title {
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          margin: 2px 0 0 0;
        }

        .pkg-status {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pkg-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 11px;
          color: #cbd5e1;
        }

        .pkg-list li {
          display: flex;
          align-items: center;
          gap: 7px;
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
      `}} />
    </div>
  );
}
