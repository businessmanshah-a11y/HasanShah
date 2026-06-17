'use client'

interface Props { current: number; total: number }

export function ProgressBar({ current, total }: Props) {
  const pct = ((current + 1) / total) * 100

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '3px',
        background: 'oklch(0.83 0.105 72 / 0.15)',
        zIndex: 50,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${pct}%`,
          background: 'var(--gold)',
          boxShadow: '0 0 12px var(--gold)',
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  )
}
