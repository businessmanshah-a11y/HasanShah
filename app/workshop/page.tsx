// app/workshop/page.tsx
import type { Metadata } from 'next'
import { SlideShell } from './components/SlideShell'

export const metadata: Metadata = {
  title: 'وایب‌کدینگ: از ایده تا محصول | Workshop',
  description: 'پرزنتیشن کارگاه وایب‌کدینگ — حسن شاه‌مرادی ۱۴۰۴',
  robots: { index: false },
}

export default function WorkshopPage() {
  return <SlideShell />
}
