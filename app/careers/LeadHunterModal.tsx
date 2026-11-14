"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Globe2,
  DollarSign,
  Flame,
  ShieldCheck,
  Brain,
  MessageSquare,
  Smartphone,
  Send,
  Target,
  Award,
  Clock,
  Compass,
  AlertTriangle,
  UserCheck,
  Zap,
} from "lucide-react";

interface LeadHunterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadHunterModal({ isOpen, onClose }: LeadHunterModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl border border-gold/40 bg-[#090d16] text-foreground shadow-[0_0_50px_rgba(212,175,55,0.2)] overflow-hidden z-10"
          >
            {/* ── Sticky Top Bar ── */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#090d16]/95 backdrop-blur-md px-5 py-4 sm:px-8">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-gold animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-gold">
                  شناسنامه جامع و استانداردهای جایگاه شغلی (SHRM & Korn Ferry)
                </span>
              </div>
              <button
                onClick={onClose}
                className="h-9 w-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                aria-label="بستن"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* ── Scrollable Body ── */}
            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 space-y-10 text-right leading-relaxed">

              {/* 1. Candidate Persona & Profile Header */}
              <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-surface/60 to-surface/40 p-6 sm:p-8">
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  {/* Photo Column */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-gold/40 shadow-2xl shadow-gold/20">
                      <Image
                        src="/images/careers/lead-hunter-persona.jpg"
                        alt="کارشناس فروش و رشد برند (Lead Hunter Persona)"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 320px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 right-3 left-3 text-center">
                        <span className="inline-block rounded-full bg-black/70 backdrop-blur-sm border border-gold/40 px-3 py-1 text-[11px] font-bold text-gold">
                          همکار ایده‌آل ما: هوشمند، پرانرژی و متین
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Profile Info Column */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>پروفایل اختصاصی همکار</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                      کارشناس فروش، رشد برند و شکارچی لید
                    </h3>
                    <p className="text-sm text-gold font-bold">
                      Lead Hunter & Client Relationship Specialist
                    </p>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      این جایگاه، خط مقدم ارتباطات و بازوی رشد تجاری استودیو حسن شاهمرادی است. هدف این نقش، کشف سرنخ‌های ارزشمند، تعامل با صاحبان کسب‌وکارها، پرستیژبخشی به برند در استوری‌ها و نشاندن کارفرمایان بالقوه پشت میز جلسه رسمی دمو با بنیان‌گذار است.
                    </p>

                    {/* Quick Profile Specs */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
                      <div className="rounded-xl border border-white/10 bg-black/40 p-3 space-y-1">
                        <span className="text-muted-foreground">جنسیت و رده سنی:</span>
                        <p className="font-bold text-foreground">خانم | ۲۲ الی ۳۰ سال</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/40 p-3 space-y-1">
                        <span className="text-muted-foreground">محل استقرار:</span>
                        <p className="font-bold text-foreground">مرکز نوآوری زی‌تک (واحد ۱۰۴)</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/40 p-3 space-y-1">
                        <span className="text-muted-foreground">تجهیزات الزامی:</span>
                        <p className="font-bold text-foreground">آیفون شخصی ۱۳ به بالا</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/40 p-3 space-y-1">
                        <span className="text-muted-foreground">گزارش‌دهی مستقیم:</span>
                        <p className="font-bold text-gold">حسن شاهمرادی (بدون واسطه)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Weighting & Time Split (تقسیم زمان) */}
              <div className="space-y-4">
                <h4 className="text-lg font-black text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  وزن‌دهی زمانی به وظایف و مأموریت‌ها (Time Split)
                </h4>

                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-muted-foreground">مأموریت اصلی</span>
                      <span className="text-lg font-black text-gold">۴۵٪</span>
                    </div>
                    <p className="text-sm font-bold text-foreground">شکار لید و پر کردن تقویم دمو</p>
                    <p className="text-xs text-muted-foreground">
                      پیام‌رسانی فعال در لینکدین، تلگرام و دایرکت، معرفی خدمات و ست کردن ۳ تا ۵ جلسه رسمی در هفته.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-muted-foreground">مدیریت مشتریان</span>
                      <span className="text-lg font-black text-emerald-400">۳۰٪</span>
                    </div>
                    <p className="text-sm font-bold text-foreground">اکانت منیجری و بازارهای خارجی</p>
                    <p className="text-xs text-muted-foreground">
                      پاسخگویی به کارفرمایان در گروه‌های تلگرام، پیگیری پرداخت‌ها و ارسال پیشنهاد در پلتفرم‌های بین‌المللی.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-muted-foreground">رشد برند و تصویر</span>
                      <span className="text-lg font-black text-blue-400">۲۵٪</span>
                    </div>
                    <p className="text-sm font-bold text-foreground">تصویربرداری و انتشار استوری</p>
                    <p className="text-xs text-muted-foreground">
                      ضبط استوری با آیفون، سناریونویسی با ChatGPT و آپلود منظم پست‌های تدوین‌شده بدون وقفه.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Personality & Behavioral Profile (ویژگی‌های شخصیتی) */}
              <div className="space-y-4">
                <h4 className="text-lg font-black text-foreground flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-gold" />
                  ویژگی‌های شخصیتی، رفتاری و تیپولوژی (Personality Profile)
                </h4>

                <div className="overflow-x-auto rounded-2xl border border-white/10">
                  <table className="w-full text-right text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-gold">
                        <th className="p-3.5 font-bold">مؤلفه شخصیتی</th>
                        <th className="p-3.5 font-bold">ویژگی‌های مطلوب در استودیو</th>
                        <th className="p-3.5 font-bold">رفتار نامناسب (خط قرمز)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="p-3.5 font-bold text-foreground whitespace-nowrap">تیپ شخصیتی ایده‌آل</td>
                        <td className="p-3.5 text-muted-foreground">
                          <strong className="text-gold">ENFP / ENTP / ESTP / ENTJ:</strong> برون‌گرا، پرانرژی، کنجکاو، خوش‌صحبت و دارای هوش کلامی بالا.
                        </td>
                        <td className="p-3.5 text-rose-400/80">درون‌گرای شدید که از تعامل با افراد یا قرار گرفتن در معرض دید فراری باشد.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-foreground whitespace-nowrap">تاب‌آوری در ریجکت</td>
                        <td className="p-3.5 text-muted-foreground">
                          درک اینکه «نه» شنیدن بخشی از قیف فروش است؛ شنیدن ۱۰ پاسخ منفی، انگیزه او را برای یافتن پاسخ مثبت بعدی کم نمی‌کند.
                        </td>
                        <td className="p-3.5 text-rose-400/80">سرخورده شدن و از دست دادن روحیه با اولین بی‌محلی یا جواب سرد مشتری.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-foreground whitespace-nowrap">پیگیری باوقار</td>
                        <td className="p-3.5 text-muted-foreground">
                          پیگیری هوشمندانه با خلق ارزش، یادآوری مؤدبانه و ارسال نمونه‌کارها بدون افتادن در ورطه التماس یا مزاحمت بازاریابی.
                        </td>
                        <td className="p-3.5 text-rose-400/80">تماس‌های مکرر آزاردهنده یا رها کردن لید پس از یک بار پیام دادن.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-foreground whitespace-nowrap">انگیزه شدید مالی</td>
                        <td className="p-3.5 text-muted-foreground">
                          عطش واقعی برای کسب درآمدهای بالا (پورسانت‌های چند ده میلیونی و دلاری)؛ باور به اینکه سقف درآمد دست خود اوست.
                        </td>
                        <td className="p-3.5 text-rose-400/80">رضایت دادن به حداقل حقوق کارمندی و بی‌میلی به بستن قراردادهای بیشتر.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4. Emotional Intelligence (هوش هیجانی) */}
              <div className="space-y-4">
                <h4 className="text-lg font-black text-foreground flex items-center gap-2">
                  <Brain className="h-5 w-5 text-gold" />
                  هوش هیجانی و روان‌شناختی در صحنه مذاکره (EQ Matrix)
                </h4>

                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl border border-white/10 bg-surface/40 p-4 space-y-1.5">
                    <p className="font-bold text-foreground flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gold" />
                      گوش دادن فعال و همدلی تجاری
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      توانایی درک درد واقعی کارفرما (مثل: افت فروش، دیده نشدن برند، بدقولی طراح قبلی) و بازتاب دادن آن برای جلب اعتماد عمیق.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-surface/40 p-4 space-y-1.5">
                    <p className="font-bold text-foreground flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gold" />
                      حس ششم تشخیص کیفیت لید (Qualification)
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      غربالگری سریع خریداران واقعی و دست‌به‌نقد از افراد صرفاً کنجکاو یا اتلاف‌کننده وقت، و هدایت هوشمندانه مشتریان باارزش به جلسه دمو.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-surface/40 p-4 space-y-1.5">
                    <p className="font-bold text-foreground flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gold" />
                      ثبات روانی در زمان اعتراض به قیمت
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      حفظ آرامش کامل در مواجهه با چانه‌زنی مشتری؛ پاسخ‌دهی منطقی و محکم با اتکا به کیفیت خروجی، بدون تدافعی شدن یا باج‌دهی احساسی.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-surface/40 p-4 space-y-1.5">
                    <p className="font-bold text-foreground flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gold" />
                      تنظیم پرستیژ و فاصله اجتماعی لوکس
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      حفظ مرز باریک میان صمیمیت دوستانه و احترام رسمی؛ ایجاد این باور در ذهن کارفرما که با یک استودیوی طراز اول و معتبر همکاری می‌کند.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Hard & Soft Skills Matrix */}
              <div className="space-y-4">
                <h4 className="text-lg font-black text-foreground flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold" />
                  ماتریس مهارت‌های سخت و نرم
                </h4>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Hard Skills */}
                  <div className="rounded-2xl border border-white/10 bg-surface/30 p-4 space-y-3">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider">مهارت‌های سخت (الزامی)</span>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span><strong>پرامپت‌نویسی با ChatGPT:</strong> نگارش متون استوری، پیام‌های ارتباطی و ایده سناریوها.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span><strong>تصویربرداری تمیز با آیفون:</strong> کادربندی تمیز، نورسنجی و ضبط ویدیوهای بدون لرزش (ادیت با استودیو است).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span><strong>پلتفرم‌های بین‌المللی:</strong> جستجو و ارسال پیشنهاد در Upwork، LinkedIn و پلتفرم‌های فریلنسری.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span><strong>مدیریت تسک و لیدها:</strong> ثبت منظم وضعیت مکالمات و پیگیری‌ها در سیستم استودیو.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Soft Skills */}
                  <div className="rounded-2xl border border-white/10 bg-surface/30 p-4 space-y-3">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">مهارت‌های نرم (حیاتی)</span>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>مذاکره اقناعی و فن بیان:</strong> انتقال انرژی، وقار و اطمینان در صدای ویس‌ها و تماس‌ها.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>کپی‌رایتینگ ترغیب‌کننده:</strong> نوشتن پیام‌های کوتاه، خوش‌خوان و ضربتی که مخاطب را مشتاق به پاسخ کند.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>سبک‌سازی بار بنیان‌گذار:</strong> بستن تمام سوالات پیش‌پاافتاده در تلگرام بدون انتقال به تیم فنی.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>سرعت و چابکی:</strong> پاسخگویی سریع به لیدها زیر ۱۵ دقیقه در ساعات کاری.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 6. Verbal Scripts & Pricing Formula (اسکریپت‌های مذاکره) */}
              <div className="space-y-4">
                <h4 className="text-lg font-black text-foreground flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-gold" />
                  فرمول طلایی پاسخ به قیمت در تلگرام
                </h4>

                <div className="rounded-2xl border border-gold/40 bg-gold/5 p-5 space-y-3 text-xs sm:text-sm">
                  <p className="font-bold text-foreground">
                    هنگامی که مشتری می‌پرسد: <span className="text-gold">«هزینه طراحی سایت چقدره؟»</span>
                  </p>
                  <div className="space-y-2 rounded-xl bg-black/60 p-4 border border-white/5 font-mono text-xs leading-relaxed text-slate-300">
                    <p className="text-amber-300 font-bold">«درود بر شما وقتتون بخیر 🌱»</p>
                    <p>در استودیوی ما تمام سیستم‌ها به صورت مهندسی‌شده، اختصاصی و با آخرین استانداردهای هوش مصنوعی و کدنویسی روز دنیا توسعه پیدا می‌کنند و ما به هیچ وجه از قالب‌های آماده یا پلتفرم‌های کند استفاده نمی‌کنیم.</p>
                    <p>برای اینکه دقیقاً بررسی کنیم چه معماری و راهکاری بیشترین فروش و اعتبار رو برای برند شما خلق می‌کنه، پیشنهاد می‌کنم یک جلسه آنلاین کوتاه ۱۰ دقیقه‌ای با مهندس شاهمرادی داشته باشید تا نقشه راه فنی و پلن سرمایه‌گذاری رو با هم مرور کنید.</p>
                    <p className="text-gold font-bold">فردا عصر ساعت ۱۷ براتون مناسب‌تره یا ۱۸:۳۰؟»</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    💡 با این فرمول ۳ مرحله‌ای، ارزش خلق می‌شود، تمایز روشن می‌گردد و مشتری بدون چانه‌زنی پشت میز جلسه دمو می‌نشیند.
                  </p>
                </div>
              </div>

              {/* 7. Compensation & Tiered Commissions (بسته مالی دقیق) */}
              <div className="space-y-4">
                <h4 className="text-lg font-black text-foreground flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-gold" />
                  بسته مالی، حقوق پایه و کمیسیون‌های پلکانی مصوب
                </h4>

                <div className="grid sm:grid-cols-4 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl border border-white/10 bg-surface/40 p-4 space-y-2">
                    <span className="text-[11px] font-bold text-muted-foreground">حقوق پایه تضمینی</span>
                    <p className="text-lg font-black text-foreground">۱۵ الی ۲۰ م</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      ماه بدون قرارداد: ۱۵ م<br />
                      <strong>با بستن حداقل ۱ قرارداد: پرش فوری به ۲۰ م</strong>
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gold/40 bg-gold/5 p-4 space-y-2">
                    <span className="text-[11px] font-bold text-gold">پروژه‌های وب (میانگین ۱۰۰ م)</span>
                    <p className="text-lg font-black text-gold">۱۰٪ تا ۲۰٪</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      ۱ قرارداد: ۱۰٪ (۱۰ م)<br />
                      ۲ تا ۴ قرارداد: ۱۵٪ (۱۵ م/پروژه)<br />
                      ۵ قرارداد به بالا: ۲۰٪ (۲۰ م/پروژه)
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4 space-y-2">
                    <span className="text-[11px] font-bold text-emerald-400">خدمات سئو (تعرفه ۵۰ م)</span>
                    <p className="text-lg font-black text-emerald-400">۱۵٪ سپس ۵٪</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      ماه اول قرارداد: ۱۵٪ (۷.۵ م)<br />
                      <strong>ماه‌های تمدید بعدی: ۵٪ مستمر (۲.۵ م تا زمان تمدید)</strong>
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-500/40 bg-blue-500/5 p-4 space-y-2">
                    <span className="text-[11px] font-bold text-blue-400">پروژه‌های دلاری ($1,500 = ۴۰۵ م)</span>
                    <p className="text-lg font-black text-blue-400">۲۰٪ تا ۳۰٪</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      ۱ پروژه: ۲۰٪ (۸۱ م)<br />
                      ۲ تا ۵ پروژه: ۲۵٪ (۱۰۱.۲۵ م/پروژه)<br />
                      ۶ به بالا: ۳۰٪ (۱۲۱.۵ م/پروژه)
                    </p>
                  </div>
                </div>

                {/* Hunter Earnings Table Across 4 Scenarios */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-gold">
                    📊 جدول پیش‌بینی درآمد ماهانه و ۶ ماهه خود کارشناس فروش (در ۴ سناریو):
                  </p>
                  <div className="overflow-x-auto rounded-2xl border border-white/10">
                    <table className="w-full text-right text-xs">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/5 text-muted-foreground">
                          <th className="p-3">سناریوی عملکردی</th>
                          <th className="p-3">حجم قرارداد ماهانه</th>
                          <th className="p-3">دریافتی ماهانه هانتر</th>
                          <th className="p-3">مجموع درآمد ۶ ماهه هانتر</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr>
                          <td className="p-3 font-bold text-foreground">۱. فاجعه‌بار (بدون قرارداد)</td>
                          <td className="p-3 text-muted-foreground">۰ قرارداد</td>
                          <td className="p-3 text-muted-foreground">۱۵,۰۰۰,۰۰۰ تومان (فقط پایه)</td>
                          <td className="p-3 text-rose-400">۹۰ م (قطع در ماه ۲)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-foreground">۲. محافظه‌کارانه (حداقل حیات)</td>
                          <td className="p-3 text-muted-foreground">۱ وب/ماه + ۱ سئو هر ۲ ماه</td>
                          <td className="p-3 text-foreground font-bold">۳۰ الی ۴۲.۵ میلیون تومان</td>
                          <td className="p-3 text-emerald-400 font-bold">۲۱۷,۵۰۰,۰۰۰ تومان</td>
                        </tr>
                        <tr className="bg-gold/10">
                          <td className="p-3 font-bold text-gold">۳. هدف (عملکرد واقع‌بینانه)</td>
                          <td className="p-3 text-foreground font-bold">۲ وب/ماه + ۱ سئو/ماه + ۲ دلاری</td>
                          <td className="p-3 text-gold font-bold">۵۷.۵ الی ۱۴۸.۵ میلیون تومان</td>
                          <td className="p-3 text-gold font-extrabold text-sm">۵۴۴,۵۰۰,۰۰۰ تومان</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-foreground">۴. رویایی (فروش سازمانی و دلاری)</td>
                          <td className="p-3 text-muted-foreground">۳ تا ۵ وب + سئوی سازمانی + دلاری مداوم</td>
                          <td className="p-3 text-foreground font-bold">۱۵۰ الی ۲۰۰+ میلیون تومان</td>
                          <td className="p-3 text-blue-400 font-extrabold text-sm">۱,۰۰۰,۰۰۰,۰۰۰+ تومان</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 8. The Zero-Excuse Standard (فرهنگ صفر-بهانه) */}
              <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertTriangle className="h-4 w-4" />
                  <span>خط قرمز قطعی فرهنگ استودیو: «نشد، نمی‌تونم، بلد نیستم نداریم!»</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  کارهایی که در این جایگاه انجام می‌شود نیازمند شکافتن اتم نیست؛ کار با گوگل، یوتیوب، اینستاگرام، پلتفرم‌ها و ChatGPT است. اگر در مسیر کاری به مانعی برخورد کردید، حق ندارید بگویید «نشد»؛ باید ریسرچ کنید و هنگام مراجعه به بنیان‌گذار بگویید: <strong>«من با این چالش مواجه شدم و این ۳ تا راه‌حل مشخص رو براش پیدا کردم؛ نظرتون چیه تا اجرا کنم؟»</strong>
                </p>
              </div>

              {/* 9. Final CTA Inside Modal */}
              <div className="text-center pt-4 pb-2 space-y-3">
                <a
                  href="https://t.me/shahbusinessman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm sm:text-base font-black text-gold-foreground shadow-gold hover:opacity-95 transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>من این ویژگی‌ها را دارم (ارسال ویدیوی ۳۰ ثانیه‌ای در تلگرام)</span>
                </a>
                <p className="text-[11px] text-muted-foreground">
                  ارتباط مستقیم تلگرام: @shahbusinessman | دفتر کار: تهران، مرکز نوآوری زی‌تک
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
