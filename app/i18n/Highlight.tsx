import { Fragment } from "react";

/**
 * Renders a string where segments wrapped in *asterisks* are shown in the gold
 * accent color. Lets headings be authored per-locale with the accent inline,
 * e.g. "We build your brand a *free* website".
 */
export function Highlight({ text }: { text: string }) {
  const parts = text.split("*");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-gold">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
