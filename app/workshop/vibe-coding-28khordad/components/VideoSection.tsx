"use client";
import { Play } from "lucide-react";
import { EVENT } from "../config";

export default function VideoSection() {
  return (
    <section id="video" className="py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-black md:text-3xl">ویدیو کارگاه</h2>
        <div className="mx-auto max-w-3xl rounded-2xl overflow-hidden border border-gold/15 bg-surface shadow-elegant">
          {EVENT.aparatEmbedUrl && !EVENT.aparatEmbedUrl.includes("YOUR_VIDEO_ID") ? (
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={EVENT.aparatEmbedUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title={EVENT.title}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 h-48 text-muted-foreground">
              <Play className="w-10 h-10" />
              <span className="text-sm">ویدیو به‌زودی اضافه می‌شود</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
