import Image from "next/image";
import { Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-gold/15 bg-surface/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Image
              src="/images/logo.png"
              alt="HSH"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="font-bold text-foreground">حسن شاهمرادی</div>
              <div className="text-xs text-muted-foreground">طراح سایت و استراتژیست دیجیتال</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:09120870095"
              dir="ltr"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/5 px-5 py-2.5 text-sm font-semibold hover:bg-gold/10 hover:border-gold transition"
            >
              <Phone className="h-4 w-4 text-gold" />
              0912 087 0095
            </a>
            <a
              href="https://t.me/shahbusinessman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-gold hover:-translate-y-0.5 transition"
            >
              <Send className="h-4 w-4" />
              تلگرام
            </a>
          </div>

          <div className="text-center md:text-left text-xs text-muted-foreground">
            © ۱۴۰۴ — تمامی حقوق محفوظ است.
            <br />
            ساخته شده با ❤️ توسط حسن شاهمرادی
          </div>
        </div>
      </div>
    </footer>
  );
}
