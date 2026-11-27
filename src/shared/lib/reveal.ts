'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

// Fades each section block up as it scrolls into view, like the old site's ScrollReveal (styles in index.css).
// Blocks already on screen are left alone so prerendered content never flashes, and people who ask for
// reduced motion get no animation.
function revealOnScroll() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    entries => {
      entries
        .filter(e => e.isIntersecting)
        .forEach((e, i) => {
          const el = e.target as HTMLElement;
          observer.unobserve(el);
          el.style.transitionDelay = `${i * 100}ms`; // stagger blocks that arrive together
          el.dataset.reveal = 'shown';
          el.addEventListener(
            'transitionend',
            () => {
              el.removeAttribute('data-reveal');
              el.style.transitionDelay = '';
            },
            { once: true },
          );
        });
    },
    { rootMargin: '0px 0px -10% 0px' },
  );

  for (const el of document.querySelectorAll<HTMLElement>('main section > *')) {
    const { position } = getComputedStyle(el);
    // skip absolute decorations and sticky bars, and anything already on screen
    if (position !== 'static' && position !== 'relative') continue;
    if (el.getBoundingClientRect().top < innerHeight) continue;
    el.dataset.reveal = 'hidden';
    observer.observe(el);
  }

  return () => observer.disconnect();
}

// Mounted once in the root layout; runs again after every client-side page change.
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => revealOnScroll(), [pathname]);

  return null;
}
