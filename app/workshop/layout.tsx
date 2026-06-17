// app/workshop/layout.tsx
export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <style>{`
          @font-face { font-family: 'Peyda'; src: url('/fonts/PeydaWebFaNum-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
          @font-face { font-family: 'Peyda'; src: url('/fonts/PeydaWebFaNum-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
          @font-face { font-family: 'Peyda'; src: url('/fonts/PeydaWebFaNum-SemiBold.woff2') format('woff2'); font-weight: 600; font-display: swap; }
          @font-face { font-family: 'Peyda'; src: url('/fonts/PeydaWebFaNum-Bold.woff2') format('woff2'); font-weight: 700; font-display: swap; }
          @font-face { font-family: 'Peyda'; src: url('/fonts/PeydaWebFaNum-ExtraBold.woff2') format('woff2'); font-weight: 800; font-display: swap; }
          * { box-sizing: border-box; }
          :root {
            --background: oklch(0.13 0.022 272);
            --surface: oklch(0.17 0.040 258);
            --surface-elevated: oklch(0.23 0.055 252);
            --gold: oklch(0.83 0.105 72);
            --gold-bright: oklch(0.89 0.095 72);
            --gold-muted: oklch(0.70 0.090 72);
            --gold-foreground: oklch(0.13 0.022 272);
            --foreground: oklch(0.96 0.004 72);
            --muted-foreground: oklch(0.65 0.012 230);
            --border: oklch(0.83 0.105 72 / 0.14);
            --navy: oklch(0.27 0.080 248);
            --font-sans: 'Peyda', Tahoma, ui-sans-serif, system-ui, sans-serif;
          }
        `}</style>
      </head>
      <body style={{ margin: 0, overflow: 'hidden', background: 'oklch(0.13 0.022 272)', fontFamily: "'Peyda', Tahoma, ui-sans-serif, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
