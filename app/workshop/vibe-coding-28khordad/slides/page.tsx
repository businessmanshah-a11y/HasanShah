import type { Metadata } from 'next';
import { SlideShell } from '../../components/SlideShell';

export const metadata: Metadata = {
  title: 'پرزنتیشن کارگاه وایب‌کدینگ ۲۸ خرداد',
  description: 'اسلایدهای کارگاه وایب‌کدینگ — حسن شاه‌مرادی · خرداد ۱۴۰۴',
  robots: { index: false },
};

export default function SlidesPage() {
  return <SlideShell />;
}
