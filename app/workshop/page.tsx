import type { Metadata } from 'next';
import WorkshopsPageContent from './WorkshopsPageContent';

export const metadata: Metadata = {
  title: 'ورکشاپ‌های وایب‌کدینگ',
  description: 'ورکشاپ‌های وایب‌کدینگ — از ایده تا محصول با هوش مصنوعی',
  robots: { index: true },
};

export default function WorkshopsPage() {
  return <WorkshopsPageContent />;
}
