// app/components/SeriesTimeline.tsx
import Image from "next/image";
import type { TimelineStep } from "../vibe-coding/series/series-data";

function MediaBlock({ media }: { media: NonNullable<TimelineStep["media"]>[number] }) {
  if (media.type === "prompt") {
    return (
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
        <div className="border-b border-white/10 px-4 py-2 text-xs font-bold text-gold">
          پرامپت اولیه به Claude
        </div>
        <pre className="whitespace-pre-wrap p-4 text-xs leading-loose text-[#7ee787] font-mono">
          {media.content}
        </pre>
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        className="w-full rounded-xl border border-white/10"
      />
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10">
      <Image
        src={media.src}
        alt={media.alt}
        width={800}
        height={450}
        className="h-auto w-full object-contain"
      />
    </div>
  );
}

export default function SeriesTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <div key={step.time} className="flex gap-5">
            {/* خط زمانی عمودی */}
            <div className="flex flex-col items-center">
              <div
                className={`rounded-lg px-2.5 py-1 text-xs font-black whitespace-nowrap ${
                  step.isEnd
                    ? "border border-green-800 bg-green-950 text-green-400"
                    : index === 0
                    ? "bg-gradient-gold text-gold-foreground shadow-gold"
                    : "border border-white/10 bg-surface text-muted-foreground"
                }`}
              >
                {step.time}
                {step.isEnd && " ✅"}
              </div>
              {!isLast && (
                <div
                  className="mt-2 w-px flex-1"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(to bottom, oklch(0.83 0.105 72), oklch(0.2 0 0))"
                        : "oklch(0.25 0 0)",
                    minHeight: "2rem",
                  }}
                />
              )}
            </div>

            {/* محتوای مرحله */}
            <div className={isLast ? "flex-1" : "flex-1 pb-10"}>
              <h3 className="mb-3 text-xl font-black leading-snug">{step.title}</h3>
              <p className="mb-5 leading-loose text-muted-foreground">{step.story}</p>

              {step.media && step.media.length > 0 && (
                <div className="mb-5 flex flex-col gap-3">
                  {step.media.map((m, i) => (
                    <MediaBlock key={i} media={m} />
                  ))}
                </div>
              )}

              {/* باکس درس این لحظه */}
              <div className="rounded-xl border border-[oklch(0.50_0.10_72_/_0.25)] bg-[oklch(0.14_0.04_72_/_0.60)] p-4">
                <p className="mb-1.5 text-xs font-black text-gold">🧠 درس این لحظه</p>
                <p className="text-sm leading-loose text-[oklch(0.85_0.08_72)]">
                  {step.lesson}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
