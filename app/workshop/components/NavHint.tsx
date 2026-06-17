export function NavHint() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: '20px',
        right: '28px',
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
        direction: 'ltr',
      }}
    >
      {(['↑', '↓', 'Space'] as const).map(k => (
        <span
          key={k}
          style={{
            border: '1px solid oklch(0.83 0.105 72 / 0.25)',
            borderRadius: '4px',
            padding: '2px 7px',
            fontSize: '10px',
            color: 'oklch(0.65 0.012 230)',
            background: 'oklch(0.83 0.105 72 / 0.06)',
          }}
        >
          {k}
        </span>
      ))}
    </div>
  )
}
