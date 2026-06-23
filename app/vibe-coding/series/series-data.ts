// app/vibe-coding/series/series-data.ts

export type SeriesMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "prompt"; content: string }

export type TimelineStep = {
  time: string
  title: string
  story: string
  media?: SeriesMedia[]
  lesson: string
  isEnd?: boolean
}

export type Series = {
  slug: string
  number: string
  tag: string
  title: string
  summary: string
  date: string
  duration: string
  tools: string[]
  coverImage: string
  audioSrc?: string
  steps: TimelineStep[]
  takeaways: string[]
}

export const allSeries: Series[] = [
  {
    slug: "faktor-dadash",
    number: "۰۱",
    tag: "فاکتورساز",
    title: "از پیام داداشم تا سیستم فاکتور کامل",
    summary: "یه شب با Claude Code یه سیستم فاکتور کامل ساختیم که از گوشی کار می‌کنه — از ساعت ۸ شب تا ۳ صبح.",
    date: "۲۳ خرداد ۱۴۰۵",
    duration: "۷ ساعت",
    tools: ["Claude Code", "Google Sheets", "Apps Script"],
    coverImage: "/series/faktor-dadash/cover.webp",
    audioSrc: "/series/faktor-dadash/audio.mp3",
    steps: [
      {
        time: "۲۰:۰۰",
        title: "پیام اول از داداشم",
        story:
          "ساعت ۸ شب داداشم پیام داد: «یه فاکتور می‌خوام». قبلاً پیشش حسابدار بودم و اینجور خواسته‌ها طبیعیه. ولی به جای فرستادن یه فایل Word، تصمیم گرفتم یه سیستم بسازم که هرچقدر دلش خواست ازش استفاده کنه — بدون اینکه دیگه نیازی به من داشته باشه.",
        media: [
          {
            type: "image",
            src: "/series/faktor-dadash/images/whatsapp.jpg",
            alt: "اسکرین‌شات پیام واتساپ داداشم",
          },
        ],
        lesson:
          "وقتی یه نفر یه چیز کوچیک می‌خواد، فرصته یه چیز بزرگ بسازی. بپرس «آیا این مشکل دوباره تکرار می‌شه؟» اگه آره، سیستم بساز — نه راه‌حل یه‌باره.",
      },
      {
        time: "۲۱:۰۰",
        title: "پرامپت اولیه به Claude",
        story:
          "نشستم و مشخصات سیستم رو نوشتم. مهم‌ترین چیز: باید از گوشی موبایل راحت کار کنه. Claude Code شروع کرد و توی اولین iteration یه ساختار پایه برگرداند.",
        media: [
          {
            type: "prompt",
            content:
              "یه سیستم فاکتورساز برای داداشم بساز که:\n- از موبایل راحت بشه باهاش کار کرد\n- فاکتورها ذخیره بشن و قابل ویرایش باشن\n- خروجی PDF برای چاپ و خروجی عکس برای ارسال داشته باشه\n- بدون نیاز به نصب اپ — مستقیم از مرورگر",
          },
        ],
        lesson:
          "پرامپت خوب با «کاربر نهایی کیه؟» شروع می‌شه، نه با «چی بسازیم؟». وقتی می‌دونی کاربرت داداشته که از گوشی کار می‌کنه، ابزار درست رو انتخاب می‌کنی.",
      },
      {
        time: "۰۰:۰۰",
        title: "چالش‌های ظاهری — پیش وحید خاتمی",
        story:
          "دوازده شب کار تموم نشده بود. رفتم پیش وحید خاتمی شام بخوریم. چند تا چیز ظاهری توی خروجی درست نبود — لی‌اوت موبایل، رنگ‌ها، فاصله‌ها. تا ۱ شب اونجا بودیم و Claude داشت تغییرات رو اعمال می‌کرد.",
        media: [
          {
            type: "image",
            src: "/series/faktor-dadash/images/vahid.jpg",
            alt: "عکس با وحید خاتمی",
          },
        ],
        lesson:
          "وقتی Claude جواب دقیق نمی‌ده، مشکل رو دقیق‌تر توصیف کن. «این باکس باید ۱۶px فاصله از لبه داشته باشه» بهتر از «ظاهرش خوب نیست».",
      },
      {
        time: "۰۳:۰۰",
        title: "سیستم آنلاین شد",
        story:
          "اومدم خونه و تا ۳ صبح کار ادامه داشت. در نهایت سیستم روی سرور بالا اومد. داداشم از گوشیش فاکتور می‌زنه، خروجی PDF می‌گیره، خروجی عکس می‌گیره. خیالش راحته.",
        media: [
          {
            type: "video",
            src: "/series/faktor-dadash/demo.mp4",
            poster: "/series/faktor-dadash/demo-poster.jpg",
          },
          {
            type: "image",
            src: "/series/faktor-dadash/images/invoice-result.jpg",
            alt: "اسکرین‌شات فاکتور نهایی",
          },
        ],
        lesson:
          "خروجی خوب یعنی کاربر بتونه بدون توضیح ازش استفاده کنه. تست واقعی: بده به کسی که ازش هیچی نمی‌دونه، ببین گیر می‌کنه یا نه.",
        isEnd: true,
      },
    ],
    takeaways: [
      "به جای یه کار یه‌باره، یه سیستم بساز که تکرارپذیر باشه",
      "پرامپت خوب = نیمی از کار Claude",
      "Claude Code + Google Sheets = قدرتمندترین ترکیب رایگان برای ابزارهای داخلی",
      "وقتی ظاهر کار نمی‌کنه، مشکل رو با جزئیات pixel-level توصیف کن",
    ],
  },
]

export function getSeriesBySlug(slug: string): Series | undefined {
  return allSeries.find((s) => s.slug === slug)
}
