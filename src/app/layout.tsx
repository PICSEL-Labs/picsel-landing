import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import '@/index.css';
import {
  pageMetadata,
  SEO_KEYWORDS,
  SITE_JSON_LD,
  SITE_URL,
} from '@/shared/constants/seo';
import { RevealOnScroll } from '@/shared/lib/reveal';
import JsonLd from '@/shared/ui/JsonLd';
import Navbar from '@/widgets/layout/Navbar';

// Icons come from the files next to this layout (favicon.ico, icon.png, apple-icon.png); Next adds their
// tags to every page.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata('/'),
  keywords: SEO_KEYWORDS,
  twitter: { card: 'summary_large_image' },
  // Search engine ownership: Google Search Console (picsel.team@gmail.com) / Naver 웹마스터도구
  verification: {
    google: 'OWbWnR3SDLBR5jRi2ZkceRTlhXCfx1S0gFgk19Qvadc',
    other: {
      'naver-site-verification': 'a8dfc0574b62684001c582c7df8c9f588e898f5e',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <JsonLd data={SITE_JSON_LD} />
        <Navbar />
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
