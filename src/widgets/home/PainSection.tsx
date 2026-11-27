'use client';

import { useEffect, useRef, type ReactNode } from 'react';

// Figma: Section 10 (desktop 4554:13674) / Section 2 (tablet 4687:14984, mobile 4359:12814)
const CARDS: { text: ReactNode; strong?: string; isDimmed?: boolean }[] = [
  {
    text: (
      <>
        현재 촬영 가능한 프레임이
        <br />
        무엇인지 모르겠어요
      </>
    ),
    isDimmed: true,
  },
  {
    text: (
      <>
        하루필름, 인생네컷, 포토그레이 등<br />
        내가 원하는 브랜드의 매장을
      </>
    ),
    strong: '한눈에 찾기 어려워요',
  },
  {
    // Mobile copy is shorter so the line fits the narrower card
    text: (
      <>
        포토시그니처에서 찍었던 <span className="md:hidden">네컷사진,</span>
        <span className="hidden md:inline">이 네컷사진··</span>
        <br />
        언제 어디서 찍었는지
      </>
    ),
    strong: '기억이 안 나요',
  },
  {
    text: (
      <>
        앨범에서 네컷사진을
        <br />
        찾기 번거로워서
      </>
    ),
    strong: '결국 다시 꺼내보지 않게 돼요',
  },
  {
    text: (
      <>
        보정이나 프레임 선택이
        <br />
        아쉬워요
      </>
    ),
    isDimmed: true,
  },
];

export default function PainSection() {
  const listRef = useRef<HTMLUListElement>(null);

  // Open on the middle card like the design; the dimmed edge cards stay reachable by swiping.
  useEffect(() => {
    const el = listRef.current!;
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);

  return (
    <section className="flex flex-col items-center gap-10 overflow-hidden bg-[linear-gradient(180deg,#111114_0%,rgba(17,17,20,0.9)_25.962%,rgba(17,17,20,0.8)_39.389%,rgba(17,17,20,0.652)_56.813%,rgba(17,17,20,0.5)_70.82%,rgba(17,17,20,0.204)_85.852%,rgba(17,17,20,0)_100%)] px-4 py-[120px] text-center font-square md:gap-16 md:px-10 lg:px-[100px] lg:pt-20 lg:pb-40">
      <h2 className="text-2xl leading-[1.4] font-extrabold whitespace-nowrap text-pink-100 md:text-[40px]">
        그때 찍은 네컷사진,
        <br />
        <span className="text-brand">왜 다시 찾기 힘들까요?</span>
      </h2>

      {/* Wider than the viewport on purpose: scrolls sideways edge to edge, hidden scrollbar */}
      <ul
        ref={listRef}
        tabIndex={0}
        className="-mx-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-2 self-stretch overflow-x-auto px-4 md:-mx-10 md:gap-12 md:px-10 lg:-mx-[100px] lg:px-[100px]">
        {CARDS.map((c, i) => (
          <li
            key={i}
            className={`flex w-[205px] shrink-0 snap-center flex-col items-center justify-center gap-2 rounded-2xl bg-white px-4 pt-2 pb-4 text-xs leading-[1.5] text-text-mid shadow-[0_-2px_8px_2px_rgba(0,0,0,0.1),inset_0_-2px_8px_rgba(0,0,0,0.05),inset_2px_4px_8px_rgba(255,255,255,0.25)] md:w-[305px] md:px-6 md:pt-8 md:pb-10 md:text-base ${c.isDimmed ? 'opacity-30' : ''}`}>
            <img
              loading="lazy"
              src={`/assets/home/pain-emoji-${i + 1}.webp`}
              alt=""
              className="size-6 md:size-10"
            />
            <p>
              {c.text}
              {c.strong && (
                <strong className="block font-extrabold text-brand">
                  {c.strong}
                </strong>
              )}
            </p>
          </li>
        ))}
      </ul>

      <p className="pt-6 text-sm leading-[1.5] font-bold text-white md:pt-0 md:text-xl">
        사진은 남겼지만 어디 있는지 몰라 다시 찾지 못하고,{' '}
        <br className="md:hidden" />
        정리되지 않은 기록은 결국 꺼내보지 않게 돼죠
      </p>
    </section>
  );
}
