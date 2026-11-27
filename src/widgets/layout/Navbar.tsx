'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Figma: Navigation_Bar (4232:45711) — Desktop / Tablet / Mobile / Mobile_menu
const LINKS = [
  { to: '/', label: '홈' },
  { to: '/service', label: '서비스 소개' },
  { to: '/features/map', label: '주요 기능' },
  { to: '/team', label: '팀원소개' },
  { to: '/contact', label: '문의하기' },
];

// Compare top-level sections, so '주요 기능' stays highlighted on every /features/* tab.
const section = (path: string) => path.split('/')[1];

const linkClass = (isActive: boolean) =>
  `p-4 text-center text-base leading-[1.5] whitespace-nowrap ${isActive ? 'font-extrabold text-brand' : 'font-bold text-white'}`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-ink p-4 md:px-6 lg:px-16">
      <Link href="/" aria-label="PICSEL 홈">
        <img
          src="/assets/common/logo.webp"
          alt="PICSEL"
          className="h-[42px] w-auto"
        />
      </Link>

      <nav className="hidden items-center gap-2 md:flex lg:gap-4">
        {LINKS.map(l => (
          <Link
            key={l.to}
            href={l.to}
            className={linkClass(section(pathname) === section(l.to))}>
            {l.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="size-8 md:hidden"
        aria-label="메뉴"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(v => !v)}>
        <img
          src={
            isOpen
              ? '/assets/common/icon-menu-active.svg'
              : '/assets/common/icon-menu.svg'
          }
          alt=""
          className="size-8"
        />
      </button>

      {isOpen && (
        <nav className="absolute top-full right-0 flex flex-col gap-4 rounded-2xl bg-ink px-4 pt-4 pb-6 shadow-[inset_-2px_-2px_8px_0_rgba(0,0,0,0.2),inset_4px_-2px_8px_0_rgba(255,255,255,0.15),0_2px_2px_rgba(0,0,0,0.2)] motion-safe:animate-pop-in md:hidden">
          {LINKS.map(l => (
            <Link
              key={l.to}
              href={l.to}
              className={linkClass(section(pathname) === section(l.to))}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
