interface Props { current: number; total: number }

export function SlideNumber({ current, total }: Props) {
  return (
    <div
      aria-label={`اسلاید ${current + 1} از ${total}`}
      style={{
        position: 'absolute',
        bottom: '20px',
        left: '28px',
        fontSize: '11px',
        color: 'oklch(0.65 0.012 230)',
        fontVariantNumeric: 'tabular-nums',
        direction: 'ltr',
        letterSpacing: '0.05em',
      }}
    >
      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  )
}
