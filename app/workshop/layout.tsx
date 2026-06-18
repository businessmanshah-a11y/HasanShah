export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ overflow: 'hidden', minHeight: '100dvh' }}>
      {children}
    </div>
  )
}
