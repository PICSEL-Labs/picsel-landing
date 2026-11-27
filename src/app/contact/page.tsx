import type { Metadata } from 'next';

import { FAQ, type Seg } from '@/shared/constants/faq';
import { pageMetadata } from '@/shared/constants/seo';
import JsonLd from '@/shared/ui/JsonLd';
import Contact from '@/views/Contact';

export const metadata: Metadata = pageMetadata('/contact');

const toText = (answer: Seg[]) =>
  answer.map(s => (typeof s === 'string' ? s : s[0])).join('');

// FAQ structured data lives on this page only: Google wants a repeated FAQ marked up once.
const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.flatMap(t => t.items).map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: toText(a) },
  })),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={FAQ_JSON_LD} />
      <Contact />
    </>
  );
}
