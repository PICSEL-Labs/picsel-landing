/* eslint-disable react-refresh/only-export-components -- build-time entry, never hot-reloaded */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from '@/App';
import { FAQ, type Seg } from '@/shared/constants/faq';

export { PAGE_META, SITE_URL } from '@/shared/constants/seo';

// Used only at build time by scripts/prerender.js.
export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}

const toText = (answer: Seg[]) =>
  answer.map(s => (typeof s === 'string' ? s : s[0])).join('');

// Extra structured data per page. The page only renders the open FAQ tab, so this hands crawlers
// and AI search all 13 Q&As. Home's FAQ repeats 3 of them; Google wants repeated FAQs marked up once.
export const JSON_LD: Record<string, object> = {
  '/contact': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.flatMap(t => t.items).map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: toText(a) },
    })),
  },
};
