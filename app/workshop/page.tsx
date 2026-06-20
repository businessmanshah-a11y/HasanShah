import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { isLocale, defaultLocale } from '../i18n/config';
import { dictionaries } from '../i18n/dictionaries';
import WorkshopsPageContent from './WorkshopsPageContent';

export async function generateMetadata(): Promise<Metadata> {
  const store = await cookies();
  const lang = store.get('lang')?.value;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const wp = dictionaries[locale].workshopsPage;

  return {
    title: wp.metaTitle,
    description: wp.metaDesc,
    robots: { index: true },
  };
}

export default function WorkshopsPage() {
  return <WorkshopsPageContent />;
}
