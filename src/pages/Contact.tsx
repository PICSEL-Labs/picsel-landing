import { useState } from 'react';

import { FAQ, type Seg } from '@/shared/constants/faq';
import Footer from '@/widgets/layout/Footer';

// Figma: 문의하기 — Desktop 3836:38555 / Tablet 4783:18414 / Mobile 4783:18562
const CHIPS = ['FAQ', '공지사항', '1:1 문의'];
// Tag States Selected / Default / Hover; shadow = Figma effect style "Tooltip,Tag"
const CHIP_ON_CLASS =
  'bg-ink text-white shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_-2px_-4px_12px_rgba(255,255,255,0.1),inset_-2px_-2px_8px_rgba(0,0,0,0.2),inset_2px_4px_8px_rgba(255,255,255,0.25)]';
const CHIP_OFF_CLASS =
  'text-text-mid hover:bg-pink-100 hover:text-brand hover:shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_-2px_-4px_12px_rgba(255,255,255,0.1),inset_-2px_-2px_8px_rgba(0,0,0,0.2),inset_2px_4px_8px_rgba(255,255,255,0.25)]';
const INQUIRY_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSezN0wQN6FBcdOC5Qps-6yEY4YBglGg35dooJhCKk3GwCAwLA/viewform?usp=dialog';

const segment = (s: Seg, i: number) => {
  if (typeof s === 'string') return s;
  const [text, kind] = s;
  if (kind === 'b' || kind === 'eb')
    return (
      <b key={i} className={kind === 'b' ? 'font-bold' : 'font-extrabold'}>
        {text}
      </b>
    );

  return (
    <a
      key={i}
      href={kind}
      target="_blank"
      rel="noreferrer"
      className="underline">
      {text}
    </a>
  );
};

export default function Contact() {
  // The design's chips only swap their own Selected/Default state (no content behind 공지사항 / 1:1 문의).
  const [chip, setChip] = useState(CHIPS[0]);
  const [tab, setTab] = useState(0);

  return (
    <main>
      <section className="flex flex-col items-center justify-center bg-ink px-4 pt-10 pb-20 md:h-[538px]">
        {/* The export carries ~4px of blur bleed on each side; negative margins keep the 409×251 layout box. */}
        <img
          src="/assets/contact/question-banner.webp"
          width={418}
          height={259}
          alt=""
          className="-my-0.5 w-[209px] md:-my-1 md:w-[418px]"
        />
        <h1 className="text-2xl leading-[1.4] font-extrabold text-brand md:text-[40px]">
          PICSEL 문의
        </h1>
      </section>

      <div className="flex justify-center gap-2 px-4 pt-10 pb-6 md:gap-4 md:pt-16 md:pb-10">
        {CHIPS.map(c => (
          <button
            key={c}
            type="button"
            aria-pressed={chip === c}
            onClick={() => setChip(c)}
            className={`rounded-full px-6 py-3 leading-[1.5] font-extrabold whitespace-nowrap ${chip === c ? CHIP_ON_CLASS : CHIP_OFF_CLASS}`}>
            {c}
          </button>
        ))}
      </div>

      <section className="font-square">
        {/* Sticky in the design; offset = Navbar height (74 mobile / 88 md+) */}
        <div className="sticky top-[74px] z-10 bg-white px-4 pt-4 md:top-[88px] md:px-6 md:pt-6 lg:px-[100px]">
          <div
            role="tablist"
            className="mx-auto flex max-w-[1026px] [scrollbar-width:none] overflow-x-auto">
            {FAQ.map((c, i) => (
              <button
                key={c.tab}
                type="button"
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
                className={`shrink-0 px-3 py-4 leading-[1.5] font-extrabold whitespace-nowrap md:flex-1 md:px-4 md:py-5 md:text-xl ${tab === i ? 'text-brand-high shadow-[inset_0_-4px_0_var(--color-brand)]' : 'text-[#7e8392] shadow-[inset_0_-2px_0_#e5e6e9]'}`}>
                {c.tab}
              </button>
            ))}
          </div>
        </div>

        {/* key resets every <details> to closed when the category changes */}
        <div
          key={tab}
          className="px-4 pt-6 pb-10 md:px-6 md:pt-10 md:pb-16 lg:px-[100px]">
          <div className="mx-auto max-w-[1080px]">
            {FAQ[tab].items.map(({ q, a }) => (
              <details key={q} className="group border-b-2 border-[#e5e6e9]">
                <summary className="flex cursor-pointer list-none items-start gap-2 px-2 py-6 group-open:bg-pink-100 group-open:shadow-[inset_0_2px_0_#3b3e46] md:gap-6 md:py-8 md:pr-2 md:pl-6 [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 flex-1 leading-[1.4] group-open:font-bold md:truncate md:text-xl">
                    {q}
                  </span>
                  <span className="shrink-0 group-open:hidden">
                    <img
                      src="/assets/contact/icon-dropdown-sm.svg"
                      alt=""
                      className="size-6 md:hidden"
                    />
                    <img
                      src="/assets/contact/icon-dropdown.svg"
                      alt=""
                      className="hidden size-6 md:block"
                    />
                  </span>
                  <img
                    src="/assets/contact/icon-dropdown-open.svg"
                    alt=""
                    className="hidden size-6 shrink-0 group-open:block"
                  />
                </summary>
                <p className="px-2 py-6 leading-[1.5] [overflow-wrap:anywhere] whitespace-pre-wrap group-open:motion-safe:animate-pop-in md:py-8 md:pr-2 md:pl-6 md:text-xl">
                  {a.map(segment)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink-100 px-4 py-6 md:px-6 md:py-10 lg:px-[100px] lg:pb-16">
        <p className="mx-auto max-w-[1080px] px-2 py-7 leading-[1.5] [overflow-wrap:anywhere] md:px-10">
          픽셀 이용 중 불편한 점이나 궁금한 사항이 있다면 아래 구글폼을
          작성하시거나,{' '}
          {/* Figma's hyperlink here points to picsel.support@gmail.com; the visible text and Footer use picsel.team */}
          <a href="mailto:picsel.team@gmail.com" className="underline">
            picsel.team@gmail.com
          </a>{' '}
          으로 언제든지 문의주세요.
          <br />
          확인 후 빠르게 답변드리겠습니다.
          <br />
          <a
            href={INQUIRY_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="underline">
            {INQUIRY_FORM_URL}
          </a>
          <br />
          <br />
          보내주신 의견을 바탕으로 더 나은 픽셀을 만들어가겠습니다!
          <br />
          <br />
          픽셀이 도움이 되셨다면 앱스토어에서 평점과 후기를 남겨주세요.
          <br />
          여러분의 관심과 응원이 픽셀에게 큰 힘이 됩니다. 감사합니다💗
        </p>
      </section>

      <Footer />
    </main>
  );
}
