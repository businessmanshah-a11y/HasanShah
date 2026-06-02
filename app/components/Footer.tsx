import Image from "next/image";
import { Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-gold/15 bg-surface/35">

      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid gap-6 md:grid-cols-3 md:items-center">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Image
              src="/images/logo.png"
              alt="HSH"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              style={{ filter: "drop-shadow(0 0 18px oklch(0.83 0.105 72 / 0.28))" }}
            />
            <div className="text-right">
              <h2 className="text-base font-bold tracking-tight text-foreground">
                حسن شاهمرادی
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                طراح سایت و استراتژیست رشد دیجیتال
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://t.me/shahbusinessman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-gold hover:-translate-y-0.5 active:translate-y-0 transition-transform"
            >
              <Send className="h-4 w-4" />
              تلگرام
            </a>
            <a
              href="tel:09120870095"
              dir="ltr"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Phone className="h-4 w-4" />
              ۰۹۱۲ ۰۸۷ ۰۰۹۵
            </a>
          </div>

          <p className="text-center text-xs leading-relaxed text-muted-foreground/55 md:text-left">
            © ۱۴۰۴ — تمامی حقوق محفوظ است.
            <br />
            طراحی و اجرا توسط حسن شاهمرادی
          </p>
        </div>
      </div>
    </footer>
  );
}
