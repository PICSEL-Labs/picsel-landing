import { NavLink } from 'react-router';

const TABS = [
  { to: '/features/map', label: '포토부스 탐색' },
  { to: '/features/qr', label: '사진 업로드' },
  { to: '/features/pixelbook', label: '픽셀북' },
];

interface FeatureTabsProps {
  /** Pins the highlighted tab when the bar is shown outside /features (the 서비스 소개 page). */
  active?: string;
}

// Figma: Tab Bar Container (3619:8595 / 4771:61692 / 4777:54663) — sticky right under the Navbar (74px / 88px).
// Figma strokes are inside, so the bottom padding shrinks by the border width to keep the bar 48 / 70px tall.
export default function FeatureTabs({ active }: FeatureTabsProps) {
  return (
    <nav className="sticky top-[74px] z-40 bg-white px-4 pt-6 md:top-[88px] md:px-[94px] lg:px-6">
      <div className="mx-auto flex max-w-[1080px]">
        {TABS.map(t => (
          <NavLink
            key={t.to}
            to={t.to}
            className={({ isActive }) =>
              `flex min-w-0 flex-1 justify-center px-4 pt-3 font-square text-base leading-[1.5] font-extrabold whitespace-nowrap md:pt-5 md:text-xl ${
                (active ? active === t.to : isActive)
                  ? 'border-b-4 border-brand pb-2 text-brand-high md:pb-4'
                  : 'border-b-2 border-[#e5e6e9] pb-2.5 text-[#7e8392] md:pb-[18px]'
              }`
            }>
            {t.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
