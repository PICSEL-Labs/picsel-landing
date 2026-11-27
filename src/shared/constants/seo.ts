import type { Metadata } from 'next';

import { APP_STORE_URL } from '@/shared/constants/links';

export const SITE_URL = 'https://picsel-landing.pages.dev';

interface PageMeta {
  title: string;
  description: string;
}

// Per-page <title> / description. Each app/**/page.tsx exports pageMetadata(path), and app/sitemap.ts lists
// these paths, so a new page only needs an entry here.
export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: '픽셀 Picsel | 포토부스 검색 & 네컷사진 보관 앱',
    description:
      '포토이즘, 인생네컷, 포토그레이 위치 등 전국 포토부스 통합 지도에서 한 번에 검색하고 네컷사진을 쉽게 보관하세요. 포토부스 검색 & 네컷사진 보관 앱, 픽셀.',
  },
  '/service': {
    title: '서비스 소개 | PICSEL',
    description:
      '찍고 잊어버리는 네컷사진을 다시 꺼내볼 수 있는 나만의 포토부스 아카이브, 픽셀. 날짜와 장소로 정리하고 언제든 다시 꺼내보세요.',
  },
  '/features/map': {
    title: '포토부스 통합 지도 | PICSEL',
    description:
      '전국 포토부스 매장만 모아보는 포토부스 통합 지도. 좋아하는 브랜드를 찜하고 필터링해서 내 주변 포토부스를 바로 찾아보세요.',
  },
  '/features/qr': {
    title: 'QR 사진 업로드 | PICSEL',
    description:
      '번거로운 과정 없이 QR 스캔 한번으로 네컷사진을 빠르고 간편하게 업로드하세요. 갤러리에서 잊혀진 네컷사진도 픽셀북에 모아볼 수 있어요.',
  },
  '/features/pixelbook': {
    title: '픽셀북 · 네컷사진 보관함 | PICSEL',
    description:
      '날짜와 장소로 모아보는 나만의 네컷 피드와 주제별로 정리하는 픽셀북. 카테고리별로 네컷사진을 보관하고 함께 일기를 쓸 수 있어요.',
  },
  '/team': {
    title: '팀원 소개 | PICSEL',
    description:
      '포토부스에서 찍은 특별한 순간을 더 오래 남길 수 있도록 Picsel을 함께 만들어가는 Team PICSEL을 소개합니다.',
  },
  '/contact': {
    title: '문의하기 | PICSEL',
    description:
      'PICSEL 서비스 이용에 관한 FAQ, 공지사항, 1:1 문의를 확인하세요.',
  },
};

// Next replaces a parent's openGraph object instead of merging it, so every page repeats these
// (the share image too: public/opengraph-image.png, 1200x630).
const OPEN_GRAPH_BASE = {
  type: 'website' as const,
  locale: 'ko_KR',
  siteName: 'PICSEL',
  images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
};

export function pageMetadata(path: string): Metadata {
  const { title, description } = PAGE_META[path];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...OPEN_GRAPH_BASE, url: path, title, description },
  };
}

export const SEO_KEYWORDS = [
  '인생네컷 보관',
  '인생네컷 저장',
  '인생네컷 앨범',
  '인생네컷 정리',
  '네컷사진 보관',
  '네컷사진 저장',
  '네컷사진 앨범',
  '내 주변 포토부스',
  '포토부스 지도',
  '5분 거리 인생네컷',
  '인생네컷 사진 보관',
  '인생네컷 사진 저장',
  '인생네컷 사진 정리',
  '인생네컷 사진 앨범',
  '네컷사진 기록',
  '네컷사진 정리',
  '포토부스 위치 찾기',
  '포토부스 지도 검색',
  '포토부스 통합지도',
  '포토부스 매장 찾기',
  '내 주변 인생네컷',
  '내 주변 포토이즘 위치 찾기',
  '내 주변 하루필름 위치 찾기',
  '근처 포토그레이 위치 찾기',
  '근처 포토시그니처 위치 찾기',
  '근처 포토이즘 위치',
  '근처 하루필름 위치',
  '포토이즘 사진 보관',
  '하루필름 사진 보관',
  '포토그레이 사진 보관',
];

// Structured data on every page: the app (Google can show it as an app result) and the team.
export const SITE_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PICSEL',
    description: PAGE_META['/'].description,
    applicationCategory: 'PhotographyApplication',
    operatingSystem: 'iOS',
    url: SITE_URL,
    installUrl: APP_STORE_URL,
    downloadUrl: APP_STORE_URL,
    sameAs: [APP_STORE_URL],
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Team PICSEL',
    url: SITE_URL,
    email: 'picsel.team@gmail.com',
    sameAs: ['https://www.instagram.com/picsel_kr'],
  },
];
