// app/blog/articles/ai-video-creation-google-flow-guide.ts
import { authors } from "../authors";
import type { RawArticle } from "../types";

export const aiVideoCreationGoogleFlowArticle: RawArticle = {
  slug: "ai-video-creation-google-flow-guide",
  dateIso: "2026-10-02T00:00:00.000Z",
  coverImage: "/images/blog/ai-video-google-flow-cover.webp",
  featured: true,
  relatedSlugs: [
    "google-flow-region-error-fix-iran-guide",
    "replicate-viral-reels-with-ai-google-flow",
    "ai-image-to-video-cinematic-prompts",
    "chatgpt-slash-commands-handbook-2026",
  ],
  locales: {
    fa: {
      title: "آموزش صفر تا صد ساخت ویدیو با هوش مصنوعی Google Flow و ChatGPT (بدون نیاز به دوره‌های میلیونی)",
      summary:
        "راهنمای عملی و کاملاً تجربی برای ساخت ویدیوهای حرفه‌ای و سینمایی با گوگل فلو و چت‌جی‌پی‌تی؛ آموزش استوری‌بورد تک‌تصویری، فرمول زمان‌بندی سکانس‌ها و ترفند تهیه اکانت ۱۸ ماهه پرو با ۵۰۰ هزار تومان.",
      category: "هوش مصنوعی ویدیوساز",
      readTime: "۱۶ دقیقه مطالعه",
      publishedDate: "۱۱ مهر ۱۴۰۵",
      tags: [
        "Google Flow",
        "ساخت ویدیو با هوش مصنوعی",
        "آموزش گوگل فلو",
        "ChatGPT",
        "Google Vids",
        "Veo 3.1",
        "استوری بورد هوش مصنوعی",
        "اکانت ارزان گوگل پرو",
        "BuyAiPro",
        "وایب‌کدینگ",
        "حسن شاهمرادی",
      ],
      author: authors.fa,
      takeaways: [
        "برای یادگیری ساخت ویدیو با هوش مصنوعی هرگز نیازی به پرداخت ۱۵ میلیون تومان برای دوره‌های پکیج‌فروشان ندارید؛ تمام پروسه در ۵ گام ساده خلاصه می‌شود.",
        "تکنیک شاهکار «استوری‌بورد تک‌تصویری» در ChatGPT مشکل پرش چهره و ناهماهنگی کاراکتر در هوش مصنوعی را برای همیشه حل می‌کند.",
        "ریاضی زمان‌بندی سکانس‌ها برگ برنده شماست: ویدیوی ۴۰ ثانیه‌ای با ۴ پلان ۱۰ ثانیه‌ای، ۳۰ ثانیه‌ای با ۳ پلان ۱۰ ثانیه‌ای و ۲۴ ثانیه‌ای با ۳ پلان ۸ ثانیه‌ای بهترین کیفیت را بدون ذوب شدن سوژه رندر می‌کنند.",
        "اشتراک رسمی ۱۸ ماهه Google AI Pro با ۱۰۰۰ کردیت ماهانه Flow و ۵ ترابایت فضای ابری، از طریق پلتفرم BuyAiPro فقط با ۴۹۹ هزار تومان (به‌جای ۳۶۰ دلار) روی اکانت شخصی شما قابل فعال‌سازی است.",
      ],
      toc: [
        {
          id: "quick-access-tools",
          title: "۰. جعبه‌ابزار و لینک‌های مستقیم",
        },
        {
          id: "the-15m-myth-and-reality",
          title: "۱. داستان دوره ۱۵ میلیونی و پرده‌برداری از واقعیت ویدیوسازی با AI",
        },
        {
          id: "step1-chatgpt-narrative-ideation",
          title: "۲. گام اول: پختن ایده و طراحی سناریو در ChatGPT",
        },
        {
          id: "step2-single-image-storyboard-master",
          title: "۳. گام دوم: معجزه استوری‌بورد تک‌تصویری (Storyboard Master Sheet)",
        },
        {
          id: "step3-scene-timing-math",
          title: "۴. گام سوم: فرمول ریاضی و خرد کردن زمان‌بندی سکانس‌ها",
        },
        {
          id: "step4-google-flow-and-vids",
          title: "۵. گام چهارم: رندر در Google Flow و تدوین سریع در Google Vids",
        },
        {
          id: "step5-the-cost-and-account-hack",
          title: "۶. گام پنجم: هک هزینه؛ اشتراک ۵۰۰ هزار تومانی در برابر پکیج‌های گران",
        },
        {
          id: "step6-bypassing-region-lock",
          title: "۷. گام ششم: حل دائمی خطای ریجن و تحریم گوگل فلو",
        },
        {
          id: "faq-section",
          title: "۸. پرسش‌های متداول و چک‌لیست خروجی",
        },
      ],
      quickLinks: [
        {
          title: "استودیو هوش مصنوعی Google Flow",
          url: "https://labs.google/fx/tools/flow",
          description: "محیط اصلی متحرک‌سازی فریم‌های استوری‌بورد با مدل‌های سینمایی Veo 3.1 و Veo Fast",
          badge: "استودیو ویدیوساز",
          icon: "flow",
        },
        {
          title: "فعال‌سازی اشتراک ۱۸ ماهه Google AI Pro",
          url: "https://buyaipro.ir/",
          description: "دریافت پلن رسمی پرو گوگل با ۱۰۰۰ کردیت فلو و ۵ ترابایت فضا فقط با ۴۹۹ هزار تومان در BuyAiPro",
          badge: "هک هزینه ۵۰۰ هزار تومانی",
          icon: "sparkles",
        },
        {
          title: "استودیو تدوین و مونتاژ Google Vids",
          url: "https://vids.google.com",
          description: "پلتفرم ابری گوگل برای تدوین، چیدمان سکانس‌ها، زیرنویس خودکار و صداگذاری",
          badge: "تدوین رایگان ابری",
          icon: "external",
        },
        {
          title: "راهنمای حل خطای ریجن گوگل فلو در ایران",
          url: "/blog/google-flow-region-error-fix-iran-guide/",
          description: "آموزش تغییر رسمی کشور اکانت گوگل به آلمان یا آمریکا برای رفع کامل خطای تحریم",
          badge: "آموزش اختصاصی",
          icon: "shield",
        },
        {
          title: "استودیو ChatGPT برای سناریونویسی و استوری‌بورد",
          url: "https://chatgpt.com",
          description: "طوفان فکری، استخراج پرامپت‌های حرکتی و تولید تصویر مادر برای حفظ ثبات چهره",
          badge: "طراحی سناریو",
          icon: "terminal",
        },
        {
          title: "نقشه راه یادگیری وایب‌کدینگ بدون کدنویسی",
          url: "/vibe-coding/",
          description: "چگونه با هوش مصنوعی وب‌سایت‌ها و اپلیکیشن‌های کامل تولید کنیم",
          badge: "اکوسیستم وایب‌کدینگ",
          icon: "flow",
        },
      ],
      sections: [
        {
          id: "the-15m-myth-and-reality",
          title: "۱. داستان دوره ۱۵ میلیونی و پرده‌برداری از واقعیت ویدیوسازی با AI",
          lead: "چرا افراد برای یادگیری ساخت ویدیو با هوش مصنوعی مبالغ نجومی می‌پردازند در حالی که تمام فرآیند در ۵ گام منطقی و شفاف خلاصه می‌شود؟",
          paragraphs: [
            "همین دیروز بود که یکی از دوستان پیش من آمد و با ذوق و شوق گفت: «دارم ثبت‌نام می‌کنم در یک دوره جامع ساخت ویدیوی هوش مصنوعی به قیمت ۱۵ میلیون تومان!» بلافاصله به او گفتم: دست نگه دار! این چه کار عجیبی است؟ چرا باید برای کاری که ساختار و منطقش در عرض ۲۰ دقیقه کاملاً روشن می‌شود، ۱۵ میلیون تومان از سرمایه‌ات را به جیب پکیج‌فروشان بریزی؟",
            "واقعیت ماجرا این است که هوش مصنوعی هیچ شعبده‌بازی پنهانی ندارد. این ابزارها برای ساده کردن زندگی ما ساخته شده‌اند، نه پیچیده‌تر کردن آن. قانون طلایی من همیشه این بوده است: اول از همه باید به مخاطب کمک واقعی و فوری برسانیم. اگر راهکار شفاف را بی‌پرده در اختیار مردم بگذاریم، دیگر نیازی به پرداخت مبالغ گزاف برای دوره‌های کپی‌شده نخواهد بود.",
            "امروز می‌خواهم همان مسیری را که خودم برای تولید ویدیوهای خیره‌کننده با [Google Flow](https://labs.google/fx/tools/flow)، هوش مصنوعی [ChatGPT](https://chatgpt.com) و [Google Vids](https://vids.google.com) استفاده می‌کنم، صفر تا صد و با تمام ترفندهای عملی جلویت باز کنم. فرقی نمی‌کند بخواهی یک تیزر تبلیغاتی بسازی، ریلز اینستاگرامی با میلیونی بازدید خلق کنی، یا برای برند شخصی‌ات محتوای ویدیویی پریمیوم آماده کنی؛ این نقشه راه دقیقاً همان چیزی است که نیاز داری.",
          ],
          callout: {
            type: "quote",
            title: "قانون اول: نجات سرمایه و وقت",
            text: "«هیچ ابزار هوش مصنوعی ارزش پرداخت هزینه‌های سنگین آموزشی ندارد؛ آنچه مهم است منطق چیدمان پلان‌ها، ثبات بصری سوژه و شناخت دقیق زمان‌بندی موتورهای ویدیوساز است.»",
          },
        },
        {
          id: "step1-chatgpt-narrative-ideation",
          title: "۲. گام اول: پختن ایده و طراحی سناریو در ChatGPT",
          lead: "قبل از اینکه دکمه Generate را در هر ابزار ویدیویی بزنید، باید داستان و چارچوب روایی دقیقی داشته باشید.",
          paragraphs: [
            "بسیاری از افراد مستقیماً وارد موتورهای ویدیویی می‌شوند و یک پرامپت کلی مثل «یک مرد در حال کار در دفتر مدرن» تایپ می‌کنند؛ نتیجه خروجی معمولاً کلیشه‌ای، آشفته و بدون حس و حال درمی‌آید. گام اول همیشه گفتگو با [ChatGPT](https://chatgpt.com) است تا ایده خام شما را بپزد و به یک فیلم‌نامه مهندسی‌شده تبدیل کند.",
            "در این مرحله شما با چت‌جی‌پی‌تی مثل یک دستیار کارگردان صحبت می‌کنید. موضوع اصلی را به او می‌گویید و از او می‌خواهید سناریو را به پلان‌های دقیق با تفکیک زاویه دوربین (Camera Angle)، نورپردازی (Lighting)، حس صحنه (Atmosphere) و دیالوگ یا نریشن خرد کند.",
          ],
          image: {
            src: "/images/blog/chatgpt-storyboard-brainstorm.webp",
            alt: "سناریونویسی هوشمند و تفکیک پلان‌های ویدیویی در محیط چت‌جی‌پی‌تی",
            caption: "رابط کاربری ChatGPT در حال تفکیک ایده روایی به سکانس‌های سینمایی با مشخصات دقیق دوربین و نورپردازی",
          },
          codeSnippets: [
            {
              title: "پرامپت استخراج فیلم‌نامه سینمایی در ChatGPT",
              language: "text",
              code: `من یک ایده ویدیویی درباره [موضوع شما مثلاً: رونمایی از یک نرم‌افزار جدید و مدرن] دارم.
می‌خواهم این ایده را به یک سناریوی ۴ سکانسی (مجموعاً ۴۰ ثانیه) تبدیل کنی.
برای هر سکانس موارد زیر را در یک جدول منظم مشخص کن:
۱. شماره سکانس و زمان دقیق (مثلاً Scene 01: 10 Seconds)
۲. شرح اتفاقات بصری و زاویه دوربین (Close-up, Medium Shot, Tracking Shot)
۳. نورپردازی و تم رنگی (مثلاً Warm cinematic rim light, Neo-noir tones)
۴. پرامپت انگلیسی بسیار دقیق برای وارد کردن به موتور ویدیوساز (Google Flow)`,
            },
          ],
        },
        {
          id: "step2-single-image-storyboard-master",
          title: "۳. گام دوم: معجزه استوری‌بورد تک‌تصویری (Storyboard Master Sheet)",
          lead: "چگونه بزرگ‌ترین کابوس هوش مصنوعی یعنی تغییر چهره و به هم ریختن استایل کاراکتر را در ۳ دقیقه حل کنیم؟",
          paragraphs: [
            "اگر تا به حال سعی کرده باشید دو پلان پشت سر هم با هوش مصنوعی بسازید، متوجه این فاجعه شده‌اید: در پلان اول کاراکتر موهای مشکی با کت چرم دارد، اما در پلان دوم ناگهان صورتش عوض می‌شود یا مدل موهایش تغییر می‌کند! پکیج‌فروشان این موضوع را بسیار پیچیده جلوه می‌دهند، اما راه‌حل فوق‌العاده هوشمندانه‌ای وجود دارد: **استوری‌بورد تک‌تصویری (Storyboard Master Sheet)**.",
            "به جای اینکه ۴ تصویر جداگانه تولید کنید، از همان [ChatGPT](https://chatgpt.com) یا ابزارهای تولید تصویر می‌خواهید یک تصویر واحد با چیدمان گرید (مثلاً ۲ در ۲) تولید کند که دقیقاً شامل همان ۴ پلان سناریوی شما باشد. چون همه این فریم‌ها درون یک عکس واحد خلق می‌شوند، هوش مصنوعی موظف است چهره، لباس، اتمسفر و نورپردازی را در تمام قاب‌ها ۱۰۰٪ یکسان نگه دارد.",
            "سپس شما هم شیت کامل را به عنوان مرجع اصلی در دست دارید، و هم پرامپت حرکتی هر فریم را برای متحرک‌سازی در استودیوی ویدیویی استفاده خواهید کرد.",
          ],
          image: {
            src: "/images/blog/ai-storyboard-master-sheet.webp",
            alt: "شیت استوری‌بورد تک‌تصویری ۴ پلانه با ثبات کامل چهره و زوایای دوربین",
            caption: "استوری‌بورد تک‌تصویری: تمام ۴ فریم کلیدی در یک تصویر واحد رندر شده‌اند تا پیوستگی چهره و نور ۱۰۰٪ تضمین شود",
          },
          callout: {
            type: "tip",
            title: "شاه‌کلید پرامپت استوری‌بورد",
            text: "همیشه در انتهای پرامپت تصویری خود در چت‌جی‌پی‌تی این عبارت را قید کنید: «Create a single 2x2 grid image displaying all 4 storyboard panels together, keeping the exact same character facial structure, hairstyle, and wardrobe across all panels.»",
          },
        },
        {
          id: "step3-scene-timing-math",
          title: "۴. گام سوم: فرمول ریاضی و خرد کردن زمان‌بندی سکانس‌ها",
          lead: "چرا نباید از هوش مصنوعی یک ویدیوی ۴۰ ثانیه‌ای یک‌تکه بخواهید و فرمول زمان‌بندی طلایی چیست؟",
          paragraphs: [
            "موتورهای ویدیوساز پیشرفته دنیا مانند Google Veo یا Runway روی قطعات چند ثانیه‌ای آموزش دیده‌اند. اگر به هوش مصنوعی بگویید «برای من یک ویدیوی ۴۰ ثانیه‌ای بساز»، بعد از ثانیه ۵ یا ۶ تصویر شروع به دفورمه شدن می‌کند، دست‌ها ذوب می‌شوند و دوربین سرگیجه می‌گیرد.",
            "فرمول استاندارد تدوین ویدیوی مدرن مبتنی بر سکانس‌های ۸ تا ۱۰ ثانیه‌ای است. وقتی زمان کل ویدیو را به قطعات کوچک تقسیم می‌کنید، کنترل کامل روی کات‌ها، زوایای دوربین و جذابیت بصری خواهید داشت.",
          ],
          image: {
            src: "/images/blog/video-duration-breakdown-timeline.webp",
            alt: "دیاگرام زمان‌بندی و فرمول خرد کردن سکانس‌های هوش مصنوعی",
            caption: "فرمول طلایی خرد کردن تایم‌لاین: ویدیوی ۴۰ ثانیه‌ای (۴ پلان ۱۰ ثانیه‌ای)، ویدیوی ۳۰ ثانیه‌ای (۳ پلان ۱۰ ثانیه‌ای) و ویدیوی ۲۴ ثانیه‌ای (۳ پلان ۸ ثانیه‌ای)",
          },
          table: {
            headers: ["طول کل ویدیو", "تعداد پلان‌ها", "طول هر پلان", "بهترین کاربرد"],
            rows: [
              ["۴۰ ثانیه", "۴ پلان", "۱۰ ثانیه", "تیزر تبلیغاتی، استوری‌تلینگ و معرفی محصول"],
              ["۳۰ ثانیه", "۳ پلان", "۱۰ ثانیه", "ریلزهای اینستاگرام، ویدیوهای آموزشی و یوتیوب شورتز"],
              ["۲۴ ثانیه", "۳ پلان", "۸ ثانیه", "تیزرهای مینیمال با ضرب‌آهنگ تند سینمایی"],
            ],
          },
        },
        {
          id: "step4-google-flow-and-vids",
          title: "۵. گام چهارم: رندر در Google Flow و تدوین سریع در Google Vids",
          lead: "ورود به زمین بازی گوگل: تبدیل فریم‌های ثابت به ویدیوهای روان ۴K با مدل Veo 3.1 و اسمبل نهایی.",
          paragraphs: [
            "حالا که استوری‌بورد و پرامپت‌ها را آماده دارید، وارد استودیوی شگفت‌انگیز [Google Flow](https://labs.google/fx/tools/flow) می‌شوید. در گوگل فلو قابلیت فوق‌العاده‌ای به نام Image to Video وجود دارد. شما هر فریم از استوری‌بورد خود را به عنوان عکس رفرنس آپلود می‌کنید و سپس پرامپت حرکتی اختصاصی همان پلان را وارد می‌نمایید.",
            "در بخش تنظیمات گوگل فلو می‌توانید مدل **Veo 3.1 Fast** یا **Veo 3.1 Quality** را انتخاب کنید. مدت زمان را روی ۱۰ ثانیه (یا ۸ ثانیه) تنظیم کرده و نوع حرکت دوربین (مثلاً Pan Left یا Push In) را مشخص کنید. در عرض چند ثانیه، یک ویدیوی سینمایی با نورپردازی طبیعی و رزولوشن بالا تحویل می‌گیرید.",
            "برای به هم چسباندن سکانس‌ها، اضافه کردن موسیقی و زیرنویس خودکار، نیازی به نرم‌افزارهای سنگین تدوین ندارید؛ می‌توانید مستقیماً از [Google Vids](https://vids.google.com) استفاده کنید که یک استودیوی تدوین هوش مصنوعی ابری و بسیار سریع است و تمام این سکانس‌ها را در یک تایم‌لاین شیک کنار هم می‌چیند.",
          ],
          image: {
            src: "/images/blog/google-flow-video-generation-studio.webp",
            alt: "رابط کاربری استودیو ویدیوساز گوگل فلو با تنظیمات مدل Veo 3.1",
            caption: "محیط کاربری استودیو Google Flow: آپلود فریم استوری‌بورد، تنظیم مدل روی Veo 3.1 Fast، زمان ۱۰ ثانیه و رندر خروجی سینمایی",
          },
          bulletPoints: [
            "استفاده از حالت Image-to-Video برای حفظ حداکثری پرسپکتیو و جزئیات فریم مرجع",
            "انتخاب مدل Veo 3.1 Fast برای مصرف بهینه کردیت (حدود ۲۰ کردیت برای هر جنریشن ۱۰ ثانیه‌ای)",
            "تنظیم حرکت‌های روان دوربین (Pan, Tilt, Tracking) به جای حرکات اغراق‌آمیز ناگهانی",
            "انتقال مستقیم کلیپ‌ها به [Google Vids](https://vids.google.com) برای هماهنگ‌سازی ضرب‌آهنگ با موسیقی متن",
          ],
        },
        {
          id: "step5-the-cost-and-account-hack",
          title: "۶. گام پنجم: هک هزینه؛ اشتراک ۵۰۰ هزار تومانی در برابر پکیج‌های گران",
          lead: "چگونه بدون پرداخت مبالغ دلاری سنگین یا خرید دوره‌های ۱۵ میلیونی، ابزارهای پریمیوم گوگل را با کمترین هزینه فعال کنیم؟",
          paragraphs: [
            "برای اینکه بتوانید در [Google Flow](https://labs.google/fx/tools/flow) ویدیوهای طولانی ۱۰ ثانیه‌ای و کیفیت بالا بسازید، به اکانت Google AI Pro نیاز دارید. قیمت رسمی این اشتراک در وب‌سایت گوگل ماهانه ۲۰ دلار است که برای یک سال و نیم (۱۸ ماه) معادل ۳۶۰ دلار (بیش از ۷۵ میلیون تومان در بازار ارز) هزینه دارد! فروشگاه‌های خارجی و برخی پلتفرم‌های واسطه ایرانی نیز همین اشتراک را بین ۳ تا ۸ میلیون تومان می‌فروشند.",
            "اما اینجا همان نقطه‌ای است که دست پکیج‌فروشان رو می‌شود. پلتفرم ایرانی [BuyAiPro](https://buyaipro.ir/) در حال حاضر امکان فعال‌سازی اشتراک ۱۸ ماهه Google AI Pro را مستقیماً روی اکانت شخصی جیمیل شما با مبلغ باورنکردنی **۴۹۹,۰۰۰ تومان** فراهم کرده است؛ آن هم بدون اینکه نیاز باشد پسورد جیمیلتان را در اختیار کسی بگذارید!",
            "با فعال‌سازی این اشتراک، ماهانه **۱,۰۰۰ کردیت اختصاصی Google Flow** دریافت می‌کنید (که برای تولید حدود ۵۰ خروجی باکیفیت در ماه کافی است)، به مدل‌های Gemini 3.1 Pro با ظرفیت ۱ میلیون توکن دسترسی پیدا می‌کنید و **۵ ترابایت حافظه ابری Google One** نیز دریافت خواهید کرد.",
          ],
          image: {
            src: "/images/blog/google-ai-pro-cost-hack.webp",
            alt: "مقایسه هوشمندانه هزینه دوره ۱۵ میلیونی در برابر اشتراک ۴۹۹ هزار تومانی BuyAiPro",
            caption: "مقایسه شفاف: به جای ۱۵ میلیون تومان برای آموزش‌های تکراری، با ۴۹۹ هزار تومان اشتراک ۱۸ ماهه گوگل پرو روی جیمیل شخصی خودتان فعال می‌شود",
          },
          table: {
            headers: ["گزینه انتخابی", "هزینه پرداختی", "کردیت و امکانات", "مالکیت اکانت"],
            rows: [
              ["دوره‌های پکیجی بازار", "۱۵,۰۰۰,۰۰۰ تومان", "هیچ! فقط چند ویدیوی ضبط‌شده", "کاربر باید خودش هزینه ابزارها را جداگانه بدهد"],
              ["خرید دلاری مستقیم از گوگل", "۳۶۰ دلار (~۷۵ میلیون تومن)", "پلن ۱۸ ماهه با ۵ ترابایت و ۱۰۰۰ کردیت فلو", "اکانت شخصی شما"],
              ["واسطه‌های متفرقه بازار", "۳,۰۰۰,۰۰۰ تا ۸,۰۰۰,۰۰۰ تومان", "اکانت‌های اشتراکی با ریسک پریدن", "اغلب اکانت‌های آماده و مشترک"],
              ["پیشنهاد پلتفرم BuyAiPro", "۴۹۹,۰۰۰ تومان", "۱۸ ماه کامل + ۱۰۰۰ کردیت فلو ماهانه + ۵TB فضا", "فعال‌سازی روی جیمیل شخصی بدون نیاز به پسورد"],
            ],
          },
        },
        {
          id: "step6-bypassing-region-lock",
          title: "۷. گام ششم: حل دائمی خطای ریجن و تحریم گوگل فلو",
          lead: "اگر با ارور ۴۰۴ یا «Flow is not available in your country yet» مواجه شدید، این راهکار قطعی مشکل را حل می‌کند.",
          paragraphs: [
            "تنها چالشی که کاربران ایرانی ممکن است با آن روبرو شوند، خطای ریجن و تحریم گوگل است. برخی کاربران بعد از تهیه اشتراک، وقتی آدرس Google Flow را باز می‌کنند با پیام «این سرویس در کشور شما در دسترس نیست» مواجه می‌شوند و فکر می‌کنند اکانتشان مشکل دارد.",
            "همان‌طور که در مقاله جامع قبلی با عنوان [راهنمای جامع رفع خطای ریجن Google Flow در ایران](/blog/google-flow-region-error-fix-iran-guide/) با جزئیات فنی اثبات کردیم، گوگل مبنای تحریم را موقعیت ثبت‌شده اکانت در شروط خدمات (Terms of Service) قرار می‌دهد، نه صرفاً آی‌پی لحظه‌ای شما.",
            "کافی است فرم رسمی Country Association گوگل را تکمیل کنید و با استفاده از ترفند «I travel often» کشور اکانت خود را به آلمان یا انگلستان منتقل کنید. با این کار تمام محدودیت‌های منطقه‌ای برداشته شده و استودیوهای فلو و ویدز بدون هیچ اروری در دسترس شما خواهند بود.",
          ],
          callout: {
            type: "warning",
            title: "لینک مطالعه راهنمای تکمیلی",
            text: "برای آموزش گام‌به‌گام بستن نشت‌های DNS و WebRTC و ارسال فرم رسمی تغییر کشور گوگل، حتماً مقاله [حل مشکل ریجن Google Flow](/blog/google-flow-region-error-fix-iran-guide/) را در تب جدید مطالعه فرمایید.",
          },
        },
        {
          id: "faq-section",
          title: "۸. پرسش‌های متداول و چک‌لیست خروجی",
          lead: "پاسخ به پرتکرارترین سؤالات درباره ساخت ویدیو با هوش مصنوعی و اشتراک Google Flow.",
          paragraphs: [
            "پیش از اینکه اولین ویدیوی خود را رندر کنید، این نکات کلیدی و سوالات متداول را مرور کنید تا بیشترین بازدهی را از کردیت‌های ماهانه خود بگیرید.",
          ],
        },
      ],
      faqs: [
        {
          question: "آیا برای ساخت ویدیو با Google Flow نیاز به کارت گرافیک یا کامپیوتر قدرتمند است؟",
          answer:
            "خیر، به هیچ وجه. تمامی محاسبات و رندرهای ویدیویی در سرورهای ابری قدرتمند Google Cloud پردازش می‌شوند. شما حتی با یک گوشی هوشمند یا لپ‌تاپ معمولی نیز می‌توانید با بالاترین کیفیت خروجی بگیرید.",
        },
        {
          question: "با ۱۰۰۰ کردیت ماهانه Google AI Pro چه تعداد ویدیو می‌توان ساخت؟",
          answer:
            "مدل Veo 3.1 Fast برای هر خروجی حدود ۲۰ کردیت مصرف می‌کند؛ این یعنی ماهانه می‌توانید حدود ۵۰ سکانس باکیفیت و سینمایی رندر بگیرید که برای تولید چندین تیزر یا ریلز کامل کاملاً کافی است.",
        },
        {
          question: "تفاوت Google Flow با ابزارهایی مانند Runway Gen-3 یا Luma چیست؟",
          answer:
            "گوگل فلو از موتور پیشرفته Veo 3.1 استفاده می‌کند که در درک پرامپت‌های فیزیکی، بازتاب نور، حرکت سیالات و ثبات چهره برتری محسوسی دارد؛ علاوه بر اینکه ادغام آن با Google Vids و فضای ابری ۵ ترابایتی یک اکوسیستم کاری یکپارچه ایجاد می‌کند.",
        },
        {
          question: "آیا پسورد جیمیل برای فعال‌سازی در BuyAiPro نیاز است؟",
          answer:
            "خیر؛ فعال‌سازی از طریق لینک اختصاصی انجام می‌شود و شما در حالی که وارد حساب شخصی خودتان هستید روی لینک کلیک می‌کنید تا اشتراک روی جیمیلتان متصل گردد.",
        },
      ],
      leadMagnet: {
        badge: "پایپ‌لاین حرفه‌ای هوش مصنوعی",
        title: "می‌خواهی ساخت نرم‌افزار و وب‌سایت با هوش مصنوعی را هم یاد بگیری؟",
        description:
          "همان‌طور که ساخت ویدیو را بدون دوره‌های گران‌قیمت یاد گرفتی، در دنیای وایب‌کدینگ یاد می‌گیری چطور ایده‌های محصول و لندینگ پیج‌های لوکس را بدون یک خط کدنویسی دستی خلق کنی.",
        primaryAction: {
          label: "ورود به نقشه راه وایب‌کدینگ",
          href: "/vibe-coding/",
        },
        secondaryAction: {
          label: "مشاوره و ارزیابی پروژه",
          href: "/contact?service=vibecoding",
        },
        perks: [
          "آموزش کامل کار با هوش مصنوعی برای تولید محصول",
          "مشاوره ۳۰ دقیقه‌ای اختصاصی با حسن شاهمرادی",
          "بدون نیاز به پیش‌نیازهای سنتی برنامه‌نویسی",
        ],
      },
    },
    en: {
      title: "Zero to Hero AI Video Creation with Google Flow & ChatGPT (Without Expensive Courses)",
      summary:
        "The definitive, hands-on masterclass for producing cinema-grade AI videos using Google Flow, ChatGPT, and Google Vids; single-image storyboard formulas, scene breakdown math, and the $15 Pro account secret.",
      category: "AI Video Production",
      readTime: "16 min read",
      publishedDate: "October 2, 2026",
      tags: [
        "Google Flow",
        "AI Video Generation",
        "Google Flow Tutorial",
        "ChatGPT",
        "Google Vids",
        "Veo 3.1",
        "AI Storyboard",
        "Affordable Google AI Pro",
        "BuyAiPro",
        "Vibe Coding",
        "Hasan Shahmoradi",
      ],
      author: authors.en,
      takeaways: [
        "You never need to pay thousands of dollars for generic AI video courses; the entire production pipeline consists of 5 clear, logical steps.",
        "The single-image storyboard method in ChatGPT completely resolves facial inconsistency and character warping between AI scenes.",
        "Scene timing math is your secret weapon: 40s video with 4x 10s cuts, 30s video with 3x 10s cuts, and 24s video with 3x 8s cuts deliver pristine visual fidelity without object melting.",
        "An 18-month official Google AI Pro subscription with 1,000 monthly Flow credits and 5TB cloud storage is accessible via BuyAiPro for ~$15 without sharing your account password.",
      ],
      toc: [
        {
          id: "quick-access-tools",
          title: "0. Quick Access Tools & Direct Links",
        },
        {
          id: "the-15m-myth-and-reality",
          title: "1. The High-Ticket Course Myth vs. Real AI Video Production",
        },
        {
          id: "step1-chatgpt-narrative-ideation",
          title: "2. Step 1: Scriptwriting & Narrative Ideation in ChatGPT",
        },
        {
          id: "step2-single-image-storyboard-master",
          title: "3. Step 2: The Single-Image Storyboard Master Sheet Formula",
        },
        {
          id: "step3-scene-timing-math",
          title: "4. Step 3: Scene Duration Breakdown & Math",
        },
        {
          id: "step4-google-flow-and-vids",
          title: "5. Step 4: Video Rendering in Google Flow & Assembly in Google Vids",
        },
        {
          id: "step5-the-cost-and-account-hack",
          title: "6. Step 5: The Cost Hack — 18-Month Pro Tier vs Overpriced Courses",
        },
        {
          id: "step6-bypassing-region-lock",
          title: "7. Step 6: Overcoming Google Flow Regional Restrictions",
        },
        {
          id: "faq-section",
          title: "8. Frequently Asked Questions & Production Checklist",
        },
      ],
      quickLinks: [
        {
          title: "Google Flow AI Video Studio",
          url: "https://labs.google/fx/tools/flow",
          description: "Google's premier creative studio for animating storyboard frames with Veo 3.1 & Veo Fast",
          badge: "Video Studio",
          icon: "flow",
        },
        {
          title: "Google AI Pro 18-Month Activation",
          url: "https://buyaipro.ir/",
          description: "Get 18 months of Google AI Pro with 1,000 Flow credits/mo and 5TB cloud storage on your personal account",
          badge: "Affordable Pro Hack",
          icon: "sparkles",
        },
        {
          title: "Google Vids Video Editor",
          url: "https://vids.google.com",
          description: "Cloud-native video editing workspace for assembling shots, adding audio, and auto-captioning",
          badge: "Cloud Editor",
          icon: "external",
        },
        {
          title: "Google Flow Region Error Fix Guide",
          url: "/blog/google-flow-region-error-fix-iran-guide/",
          description: "Step-by-step technical guide to changing your Google account region to eliminate embargo errors",
          badge: "Technical Guide",
          icon: "shield",
        },
        {
          title: "ChatGPT for Ideation & Storyboarding",
          url: "https://chatgpt.com",
          description: "Brainstorming cinematic scenes, camera movements, and generating 4-panel master storyboards",
          badge: "Ideation Studio",
          icon: "terminal",
        },
        {
          title: "Vibe Coding Masterclass by Hasan Shahmoradi",
          url: "/vibe-coding/",
          description: "Comprehensive roadmap for building production web applications with AI without traditional coding",
          badge: "Ecosystem",
          icon: "flow",
        },
      ],
      sections: [
        {
          id: "the-15m-myth-and-reality",
          title: "1. The High-Ticket Course Myth vs. Real AI Video Production",
          lead: "Why do creators pay extortionate fees for generic video courses when the real pipeline takes only 5 transparent steps?",
          paragraphs: [
            "Just yesterday, an ambitious colleague came to me excited: 'I'm about to enroll in an AI video masterclass for $300!' I told him immediately: Stop right there. Why burn your capital on a course when the entire mechanical logic can be mastered in 20 minutes?",
            "The truth is simple: frontier AI models are built to democratize creation, not complicate it. My golden philosophy has always been 'Help the User First.' When creators receive direct, unvarnished value without paywalls, true long-term trust is forged.",
            "Today, I'm revealing the exact pipeline I use to produce cinematic, viral videos using [Google Flow](https://labs.google/fx/tools/flow), [ChatGPT](https://chatgpt.com), and [Google Vids](https://vids.google.com). Whether you are crafting commercial ads, viral short-form reels, or luxury brand narratives, this playbook is all you will ever need.",
          ],
          callout: {
            type: "quote",
            title: "Rule #1: Protect Your Capital & Focus",
            text: "No AI tool warrants high course fees. What matters is camera blocking, character consistency, and mastering video model timing limits.",
          },
        },
        {
          id: "step1-chatgpt-narrative-ideation",
          title: "2. Step 1: Scriptwriting & Narrative Ideation in ChatGPT",
          lead: "Never hit generate without a structured narrative spine and granular camera cues.",
          paragraphs: [
            "Amateur creators jump straight into video generators with vague prompts like 'a man in an office.' The result is inevitably generic and disconnected. Step 1 is always an architectural dialogue with [ChatGPT](https://chatgpt.com) to flesh out your narrative.",
            "Treat ChatGPT as your virtual director of photography. Break down your concept into scene-by-scene beats, specifying camera angles, volumetric lighting, and emotional pacing.",
          ],
          image: {
            src: "/images/blog/chatgpt-storyboard-brainstorm.webp",
            alt: "Intelligent script breakdown and scene planning inside ChatGPT dark mode",
            caption: "ChatGPT workspace structuring raw narrative ideas into cinema-grade scene breakdowns with lighting and camera parameters",
          },
          codeSnippets: [
            {
              title: "Cinematic Script Prompt for ChatGPT",
              language: "text",
              code: `I have a video concept about [Your Topic, e.g.: Introducing an ultra-minimalist SaaS workspace].
I want you to act as a Director of Photography and structure this into a 4-scene narrative (40 seconds total).
For each scene, output a structured table with:
1. Scene number & exact duration (e.g. Scene 01: 10 Seconds)
2. Visual action & camera framing (Close-up, Medium Shot, Dolly Zoom)
3. Studio lighting & aesthetic tones (e.g. Warm amber rim lighting, cinematic 35mm grain)
4. Highly specific English prompt for Google Flow image-to-video generation.`,
            },
          ],
        },
        {
          id: "step2-single-image-storyboard-master",
          title: "3. Step 2: The Single-Image Storyboard Master Sheet Formula",
          lead: "Solving the biggest challenge in AI filmmaking: 100% character and environmental consistency across every cut.",
          paragraphs: [
            "If you generate scenes individually, your character's facial structure and clothing will morph uncontrollably between cuts. Course sellers pretend this requires complex LoRA training, but there is an elegant solution: **The Single-Image Storyboard Master Sheet**.",
            "Ask [ChatGPT](https://chatgpt.com) or your image generation model to render a single 2x2 grid composite image that displays all 4 key scenes of your video together. Because all panels are rendered in a single generation pass, the model enforces identical face geometry, lighting mood, and wardrobe across every shot.",
          ],
          image: {
            src: "/images/blog/ai-storyboard-master-sheet.webp",
            alt: "Cinema-grade 4-frame master storyboard grid with consistent protagonist features",
            caption: "Single-image master storyboard: All 4 key scenes rendered in a single grid, locking character consistency and studio lighting across angles",
          },
          callout: {
            type: "tip",
            title: "Pro Storyboard Prompt Constraint",
            text: "Always append this constraint to your prompt: 'Generate a single 2x2 grid image displaying all 4 storyboard panels together, keeping the exact same character facial structure, hairstyle, and wardrobe across all panels.'",
          },
        },
        {
          id: "step3-scene-timing-math",
          title: "4. Step 3: Scene Duration Breakdown & Math",
          lead: "Why you should never request a continuous 40-second generation from AI video engines.",
          paragraphs: [
            "State-of-the-art video models like Google Veo are engineered for short burst generations. Pushing a model beyond 8 to 10 seconds in a single pass causes severe temporal drift: objects melt, anatomy warps, and the camera loses orientation.",
            "Professional AI video relies on the modular timing formula: chunking long videos into 8-second or 10-second scenes that cut together seamlessly.",
          ],
          image: {
            src: "/images/blog/video-duration-breakdown-timeline.webp",
            alt: "Timeline diagram displaying optimal AI video duration formulas",
            caption: "Golden scene timing formulas: 40s video (4x 10s cuts), 30s video (3x 10s cuts), and 24s video (3x 8s cuts)",
          },
          table: {
            headers: ["Total Duration", "Shot Count", "Shot Length", "Ideal Use Case"],
            rows: [
              ["40 Seconds", "4 Shots", "10s each", "Commercials, brand narratives, and product launches"],
              ["30 Seconds", "3 Shots", "10s each", "Instagram Reels, TikToks, and YouTube Shorts"],
              ["24 Seconds", "3 Shots", "8s each", "Fast-paced cinematic teasers with rapid camera motion"],
            ],
          },
        },
        {
          id: "step4-google-flow-and-vids",
          title: "5. Step 4: Video Rendering in Google Flow & Assembly in Google Vids",
          lead: "Animating your static storyboard into 4K fluid video with Veo 3.1 and rapid cloud editing.",
          paragraphs: [
            "Now you enter [Google Flow](https://labs.google/fx/tools/flow). In Flow, use the Image-to-Video feature: upload your corresponding storyboard frame as the visual anchor and input your motion prompt.",
            "Select **Veo 3.1 Fast** for rapid, credit-efficient rendering (~20 credits per 10-second clip) or **Veo 3.1 Quality** for maximum photorealism. In seconds, you receive smooth cinematic movement with natural depth of field.",
            "To assemble the final cut, transfer the clips directly into [Google Vids](https://vids.google.com). It provides automatic transcriptions, subtitle styles, and background audio synchronization in an intuitive cloud interface.",
          ],
          image: {
            src: "/images/blog/google-flow-video-generation-studio.webp",
            alt: "Google Flow web application interface with Veo 3.1 generation settings",
            caption: "Google Flow studio interface: Storyboard frame reference loaded, Veo 3.1 Fast model selected, 10-second duration set, and cinematic prompt injected",
          },
          bulletPoints: [
            "Leverage Image-to-Video to anchor perspective and prevent hallucinated backgrounds",
            "Use Veo 3.1 Fast to generate ~50 high-definition shots per month on standard pro allocations",
            "Specify intentional camera moves (Slow Dolly In, Gentle Pan Left) rather than chaotic multi-axis rotations",
            "Assemble, subtitle, and score directly inside [Google Vids](https://vids.google.com) without heavy local editing suites",
          ],
        },
        {
          id: "step5-the-cost-and-account-hack",
          title: "6. Step 5: The Cost Hack — 18-Month Pro Tier vs Overpriced Courses",
          lead: "How to access Google AI Pro features and 1,000 monthly Flow credits for a fraction of official rates.",
          paragraphs: [
            "Accessing Google Flow with extended 10-second generations requires a Google AI Pro subscription. The official Google store charges $20/month, totaling $360 for an 18-month cycle.",
            "Rather than overpaying or buying dubious course bundles, specialized platforms like [BuyAiPro](https://buyaipro.ir/) offer 18-month Google AI Pro activations directly on your personal Google account for approximately **499,000 Tomans (~$15)** — completely password-free.",
            "This provides **1,000 Flow credits every month**, 5TB of Google One cloud storage, and full access to Gemini 3.1 Pro with 1 million token context.",
          ],
          image: {
            src: "/images/blog/google-ai-pro-cost-hack.webp",
            alt: "Visual comparison between overpriced courses and affordable Google AI Pro subscription",
            caption: "Cost comparison: Avoid $300 course fees; activate 18 months of Google AI Pro on your personal account for under $15",
          },
          table: {
            headers: ["Option", "Cost", "Allocations", "Account Ownership"],
            rows: [
              ["High-Ticket Course Bundles", "$300+", "Zero credits; pre-recorded videos only", "User must purchase tools separately"],
              ["Direct Google US Subscription", "$360 (18 Months)", "5TB Storage, 1,000 Flow Credits/Mo", "Personal Google Account"],
              ["BuyAiPro Platform Offer", "499,000 Tomans (~$15)", "Full 18 Months + 1,000 Flow Credits/Mo + 5TB", "Personal account activation without sharing passwords"],
            ],
          },
        },
        {
          id: "step6-bypassing-region-lock",
          title: "7. Step 6: Overcoming Google Flow Regional Restrictions",
          lead: "How to fix the 'Flow is not available in your country yet' error permanently.",
          paragraphs: [
            "If you receive a region error when opening Google Flow, it is not simply due to your VPN IP; Google checks the permanent country associated with your account Terms of Service.",
            "As detailed in our dedicated guide [Fixing Google Flow Region & Country Errors](/blog/google-flow-region-error-fix-iran-guide/), you can submit Google's official Country Association form with the 'I travel often' option to migrate your account to Germany or the UK.",
          ],
          callout: {
            type: "warning",
            title: "Read the Region Fix Guide",
            text: "For the complete zero-leak protocol and country association walkthrough, see our companion article: [Google Flow Region Error Fix Guide](/blog/google-flow-region-error-fix-iran-guide/).",
          },
        },
        {
          id: "faq-section",
          title: "8. Frequently Asked Questions & Production Checklist",
          lead: "Everything you need to know before rendering your first production video.",
          paragraphs: [
            "Review these practical answers to maximize your monthly credits and achieve flawless video continuity.",
          ],
        },
      ],
      faqs: [
        {
          question: "Do I need a high-end GPU or workstation for Google Flow?",
          answer:
            "No. All video synthesis and neural rendering occur entirely on Google Cloud infrastructure. You can direct and render high-fidelity 4K clips from an ultrabook or smartphone.",
        },
        {
          question: "How many videos can I create with 1,000 monthly credits?",
          answer:
            "Veo 3.1 Fast consumes approximately 20 credits per 10-second shot. That equals roughly 50 cinematic shots per month, enough for several complete commercial videos.",
        },
        {
          question: "Is Google Vids completely free to use?",
          answer:
            "Yes, Google Vids is included within modern Google Workspace and AI Pro environments for timeline assembly and auto-subtitling.",
        },
      ],
      leadMagnet: {
        badge: "Vibe Coding Ecosystem",
        title: "Ready to build full web applications with AI as well?",
        description:
          "Just like you mastered video production without expensive courses, learn how to build luxury web applications and landing pages with AI reasoning models without manual syntax.",
        primaryAction: {
          label: "Explore Vibe Coding Roadmap",
          href: "/vibe-coding/",
        },
        secondaryAction: {
          label: "Book Strategic Consultation",
          href: "/contact?service=vibecoding",
        },
        perks: [
          "Complete AI product creation methodology",
          "Direct 30-minute consultation with Hasan Shahmoradi",
          "No legacy programming prerequisites required",
        ],
      },
    },
    ar: {
      title: "دليل صناعة الفيديو بالذكاء الاصطناعي مع Google Flow و ChatGPT من الصفر (بدون دورات باهظة)",
      summary:
        "دليل عملي وتطبيقي شامل لإنتاج فيديوهات سينمائية واحترافية باستخدام Google Flow و ChatGPT و Google Vids؛ مع لوحة القصة أحادية الصورة وهندسة توقيت المشاهد وحيلة الاشتراك المخفض.",
      category: "صناعة الفيديو بالذكاء الاصطناعي",
      readTime: "۱۶ دقيقة قراءة",
      publishedDate: "٢ أكتوبر ٢٠٢٦",
      tags: [
        "Google Flow",
        "صناعة الفيديو بالذكاء الاصطناعي",
        "شرح غوغل فلو",
        "ChatGPT",
        "Google Vids",
        "Veo 3.1",
        "لوحة القصة",
        "اشتراك غوغل برو رخيص",
        "BuyAiPro",
        "فايب كودينغ",
        "حسن شهمرادي",
      ],
      author: authors.ar,
      takeaways: [
        "لا تحتاج لدفع مبالغ طائلة لدورات إنتاج الفيديو بالذكاء الاصطناعي؛ فالمسار بالكامل يتلخص في ۵ خطوات واضحة ومدروسة.",
        "تقنية «لوحة القصة أحادية الصورة» في ChatGPT تحل مشكلة تشوه الوجه وعدم اتساق الشخصية بين المشاهد نهائياً.",
        "تفكيك المشاهد إلى مقاطع من ۸ إلى ۱۰ ثوانٍ يضمن ثبات جودة الفيديو ومنع ذوبان الأشكال في محركات Veo 3.1.",
        "يمكن تفعيل اشتراك Google AI Pro الرسمي لمدة ۱۸ شهراً عبر BuyAiPro على حسابك الشخصي بدون الحاجة لمشاركة كلمة المرور.",
      ],
      toc: [
        {
          id: "quick-access-tools",
          title: "۰. صندوق الأدوات والروابط المباشرة",
        },
        {
          id: "the-15m-myth-and-reality",
          title: "١. أسطورة الدورات باهظة الثمن وحقيقة صناعة الفيديو",
        },
        {
          id: "step1-chatgpt-narrative-ideation",
          title: "٢. الخطوة الأولى: كتابة السيناريو وبناء القصة في ChatGPT",
        },
        {
          id: "step2-single-image-storyboard-master",
          title: "٣. الخطوة الثانية: سحر لوحة القصة أحادية الصورة (Storyboard Master Sheet)",
        },
        {
          id: "step3-scene-timing-math",
          title: "٤. الخطوة الثالثة: معادلة توقيت المشاهد وتجزئة المقاطع",
        },
        {
          id: "step4-google-flow-and-vids",
          title: "٥. الخطوة الرابعة: التوليد في Google Flow والمونتاج في Google Vids",
        },
        {
          id: "step5-the-cost-and-account-hack",
          title: "٦. الخطوة الخامسة: حيلة التكلفة؛ اشتراك ۱۸ شهراً بأسعار مخفضة",
        },
        {
          id: "step6-bypassing-region-lock",
          title: "٧. الخطوة السادسة: حل قيود المنطقة وحظر Google Flow",
        },
        {
          id: "faq-section",
          title: "٨. الأسئلة الشائعة وقائمة التدقيق النهائية",
        },
      ],
      quickLinks: [
        {
          title: "استوديو Google Flow لتوليد الفيديو",
          url: "https://labs.google/fx/tools/flow",
          description: "الاستوديو المتقدم لتحريك لقطات لوحة القصة باستخدام نماذج Veo 3.1 و Veo Fast",
          badge: "استوديو الفيديو",
          icon: "flow",
        },
        {
          title: "تفعيل اشتراك Google AI Pro لمدة ۱۸ شهراً",
          url: "https://buyaipro.ir/",
          description: "الحصول على ۱۰۰۰ رصيد شهري في Flow و ۵ تيرابايت تخزين سحابي على حسابك الشخصي عبر BuyAiPro",
          badge: "حيلة الاشتراك المخفض",
          icon: "sparkles",
        },
        {
          title: "محرر الفيديو السحابي Google Vids",
          url: "https://vids.google.com",
          description: "أداة غوغل السحابية لدمج المشاهد وإضافة التعليق الصوتي والترجمة التلقائية",
          badge: "مونتاج سحابي",
          icon: "external",
        },
        {
          title: "دليل حل خطأ المنطقة في Google Flow",
          url: "/blog/google-flow-region-error-fix-iran-guide/",
          description: "خطوات تغيير دولة الحساب رسمياً إلى ألمانيا أو أمريكا لتجاوز الحظر",
          badge: "دليل فني",
          icon: "shield",
        },
        {
          title: "استوديو ChatGPT لكتابة السيناريو ولوحة القصة",
          url: "https://chatgpt.com",
          description: "تطوير الحبكة الدرامية واستخراج برومبتات الإخراج وتوليد لوحة القصة الموحدة",
          badge: "كتابة السيناريو",
          icon: "terminal",
        },
        {
          title: "خارطة طريق الفايب كودينغ مع حسن شهمرادي",
          url: "/vibe-coding/",
          description: "بناء مواقع وتطبيقات حقيقية بالذكاء الاصطناعي دون الحاجة للبرمجة التقليدية",
          badge: "بيئة الفايب كودينغ",
          icon: "flow",
        },
      ],
      sections: [
        {
          id: "the-15m-myth-and-reality",
          title: "١. أسطورة الدورات باهظة الثمن وحقيقة صناعة الفيديو",
          lead: "لماذا يدفع البعض أموالاً طائلة لدورات مكررة بينما عملية الإنتاج تتكون من ۵ خطوات واضحة؟",
          paragraphs: [
            "بالأمس فقط، جاءني أحد الأصدقاء متحمساً للتسجيل في دورة لصناعة الفيديو بالذكاء الاصطناعي بمبلغ خيالي! فقلت له مباشرة: توقف فوراً، لماذا تهدر أموالك بينما يمكنك إتقان المنطق بأكمله في ۲۰ دقيقة؟",
            "فلسفتنا الدائمة هي «مساعدة المستخدم أولاً». تقديم القيمة الحقيقية والمباشرة للجمهور هو ما يبني الثقة المستدامة، واليوم نكشف المسار الكامل الذي نستخدمه شخصياً مع [Google Flow](https://labs.google/fx/tools/flow) و [ChatGPT](https://chatgpt.com) و [Google Vids](https://vids.google.com).",
          ],
        },
        {
          id: "step1-chatgpt-narrative-ideation",
          title: "٢. الخطوة الأولى: كتابة السيناريو وبناء القصة في ChatGPT",
          lead: "البداية دائماً بنص محكم وتوزيع زوايا الكاميرا والإضاءة.",
          paragraphs: [
            "استخدم ChatGPT كمساعد مخرج؛ اطلب منه تقسيم فكرتك إلى ۴ مشاهد محددة مع زوايا التصوير وإضاءة المشهد وبرومبتات دقيقة باللغة الإنجليزية.",
          ],
          image: {
            src: "/images/blog/chatgpt-storyboard-brainstorm.webp",
            alt: "تخطيط السيناريو وتوزيع المشاهد في ChatGPT",
            caption: "استوديو ChatGPT أثناء تحويل الفكرة إلى سيناريو احترافي مقسم حسب زوايا الكاميرا والإضاءة",
          },
        },
        {
          id: "step2-single-image-storyboard-master",
          title: "٣. الخطوة الثانية: سحر لوحة القصة أحادية الصورة (Storyboard Master Sheet)",
          lead: "الحل الجذري لتشوه الوجه وتغير ملامح الشخصية بين المشاهد.",
          paragraphs: [
            "بدلاً من توليد صور منفصلة، نطلب توليد شبكة ۲x۲ تجمع المشاهد الأربعة في صورة واحدة. هذا يضمن تطابق ملامح الشخصية والملابس والإضاءة بنسبة ۱۰۰٪.",
          ],
          image: {
            src: "/images/blog/ai-storyboard-master-sheet.webp",
            alt: "لوحة قصة موحدة تضم المشاهد الأربعة مع ثبات الملامح",
            caption: "لوحة القصة أحادية الصورة: جميع اللقطات مدمجة في صورة واحدة لضمان اتساق الملامح والملابس تماماً",
          },
        },
        {
          id: "step3-scene-timing-math",
          title: "٤. الخطوة الثالثة: معادلة توقيت المشاهد وتجزئة المقاطع",
          lead: "تجنب طلب مقاطع طويلة دفعة واحدة لتفادي تشوه الحركة.",
          paragraphs: [
            "محركات الفيديو مثل Veo 3.1 تبدع في المقاطع القصيرة (۸ إلى ۱۰ ثوانٍ). قسّم الفيديو ۴۰ ثانية إلى ۴ لقطات، أو ۳۰ ثانية إلى ۳ لقطات للحصول على أعلى سلاسة وجودة.",
          ],
          image: {
            src: "/images/blog/video-duration-breakdown-timeline.webp",
            alt: "مخطط توقيت المشاهد ومعادلات التجزئة",
            caption: "معادلات التوقيت الذهبية: مقاطع من ۸ إلى ۱۰ ثوانٍ تضمن حركة سلسة وخالية من التشوهات",
          },
        },
        {
          id: "step4-google-flow-and-vids",
          title: "٥. الخطوة الرابعة: التوليد في Google Flow والمونتاج في Google Vids",
          lead: "تحويل الصور الثابتة إلى حركة بدقة 4K والمونتاج السحابي السريع.",
          paragraphs: [
            "ارفع لقطة لوحة القصة كمرجع بصري (Image-to-Video) في [Google Flow](https://labs.google/fx/tools/flow)، ثم اختر نموذج Veo 3.1 Fast وأدخل برومبت الحركة. بعد اكتمال المقاطع، استخدم [Google Vids](https://vids.google.com) لدمج المشاهد وإضافة الموسيقى والترجمة التلقائية.",
          ],
          image: {
            src: "/images/blog/google-flow-video-generation-studio.webp",
            alt: "واجهة استوديو Google Flow مع إعدادات نموذج Veo 3.1",
            caption: "بيئة العمل في Google Flow: إدخال لقطة المرجع واختيار نموذج Veo 3.1 وتوليد اللقطة السينمائية",
          },
        },
        {
          id: "step5-the-cost-and-account-hack",
          title: "٦. الخطوة الخامسة: حيلة التكلفة؛ اشتراك ۱۸ شهراً بأسعار مخفضة",
          lead: "الوصول إلى مزايا Google AI Pro دون دفع مئات الدولارات.",
          paragraphs: [
            "بدلاً من دفع ۳۶۰ دولاراً أو شراء دورات باهظة، تقدم منصة [BuyAiPro](https://buyaipro.ir/) تفعيل اشتراك ۱۸ شهراً في Google AI Pro مباشرة على حسابك الشخصي بدون الحاجة لإرسال كلمة المرور، مما يمنحك ۱۰۰۰ رصيد شهري في Flow و ۵ تيرابايت مساحة سحابية.",
          ],
          image: {
            src: "/images/blog/google-ai-pro-cost-hack.webp",
            alt: "مقارنة تكلفة الدورات باهظة الثمن مع اشتراك غوغل برو المخفض",
            caption: "مقارنة عملية: وفر أموالك وفعل اشتراك ۱۸ شهراً على حسابك الشخصي بتكلفة رمزية",
          },
        },
        {
          id: "step6-bypassing-region-lock",
          title: "٧. الخطوة السادسة: حل قيود المنطقة وحظر Google Flow",
          lead: "تجاوز رسالة عدم توفر الخدمة في بلدك بطريقة رسمية وقانونية.",
          paragraphs: [
            "إذا واجهتك مشكلة قيود المنطقة، راجع دليلنا المفصل [حل مشكلة ريجن Google Flow](/blog/google-flow-region-error-fix-iran-guide/) لتقديم نموذج ربط الدولة الرسمي وتحديث دولة الحساب إلى ألمانيا أو أمريكا.",
          ],
        },
        {
          id: "faq-section",
          title: "٨. الأسئلة الشائعة وقائمة التدقيق النهائية",
          lead: "إجابات على أبرز التساؤلات لضمان تجربة إنتاج سلسة واحترافية.",
          paragraphs: [
            "كل ما تحتاجه لبدء إخراج أول فيديو بالذكاء الاصطناعي دون تعقيدات تقنية.",
          ],
        },
      ],
      faqs: [
        {
          question: "هل أحتاج لجهاز حاسوب قوي لإنتاج الفيديو في Google Flow؟",
          answer:
            "كلا على الإطلاق، فجميع عمليات المعالجة العصبية تتم بالكامل على خوادم غوغل السحابية، ويمكنك العمل حتى من هاتفك الذكي.",
        },
        {
          question: "كم مقطع فيديو يمكن إنتاجه باستخدام ۱۰۰۰ رصيد شهرياً؟",
          answer:
            "يستهلك نموذج Veo 3.1 Fast حوالي ۲۰ رصيداً لكل مقطع من ۱۰ ثوانٍ، مما يتيح لك إنتاج حوالي ۵۰ مشهداً شهرياً.",
        },
      ],
      leadMagnet: {
        badge: "منظومة الفايب كودينغ",
        title: "هل ترغب في تعلم بناء التطبيقات والمواقع أيضاً بالذكاء الاصطناعي؟",
        description:
          "كما تعلمت إنتاج الفيديو الاحترافي بأبسط الطرق، يمكنك تعلم بناء منتجات الويب الفاخرة وصفحات الهبوط دون كتابة سطر برمجي واحد.",
        primaryAction: {
          label: "استكشف خارطة طريق الفايب كودينغ",
          href: "/vibe-coding/",
        },
        secondaryAction: {
          label: "طلب استشارة مع حسن شهمرادي",
          href: "/contact?service=vibecoding",
        },
        perks: [
          "منهجية متكاملة لابتكار المنتجات بالذكاء الاصطناعي",
          "استشارة مباشرة لمدة ۳۰ دقيقة",
          "لا تشترط أي خلفية برمجية سابقة",
        ],
      },
    },
  },
};
