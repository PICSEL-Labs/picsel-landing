import { useState, type ReactNode } from 'react';

// Figma: Section 8 — Desktop 4278:41577 / Tablet 4687:15293 / Mobile 4359:13022 (rows: HOME_FAQ 4219:11247)
const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeOS7QXWvUK8rH0vhHy8xt2Nz3FFWjuSs10sSscdo1i_SfBSg/viewform';

// Answers copied from the file: HOME_FAQ "A" variant 4219:11246 and the FAQ page's Dropdown Tab_1 / Tab_3 items.
// The last question has no answer anywhere in the file, so its row stays closed.
const FAQS: { q: string; a?: ReactNode }[] = [
  {
    q: '픽셀에서 탐색과 기록이 가능한 포토부스 브랜드는 어떤 것들이 있나요?',
    a: (
      <>
        현재{' '}
        <b>
          인생네컷, 포토이즘, 하루필름, 포토그레이, 포토시그니처, 비비드뮤지엄,
          포토랩플러스, 플랜비스튜디오
        </b>{' '}
        등
        <br />
        국내 주요 포토부스 브랜드를 포함해{' '}
        <b>가장 다양한 브랜드를 한 번에 탐색하고 기록</b>할 수 있어요.
        <br />
        <br />
        또한, 픽셀에 없는 브랜드가 있다면 <b>브랜드 제보</b>를 통해 언제든지
        추가 요청이 가능하며, 빠르게 반영되고 있어요!
        <br />
        하나의 앱에서 다양한 포토부스를 찾고, 찍고, 기록까지 이어지는 경험을
        픽셀에서 함께해요🥰
      </>
    ),
  },
  {
    q: '내 주변 포토부스 위치를 어떻게 찾을 수 있나요?',
    a: (
      <>
        픽셀에서는 <b>지도 검색 기능</b>을 통해{' '}
        <b>내 주변 포토부스를 쉽게 찾을 수 있어요</b>.
        <br />
        <b>국내 주요 포토부스 브랜드 매장을 한눈에 확인</b>할 수 있어서, 원하는
        장소나 브랜드를 <b>빠르게 탐색</b>할 수 있어요.
        <br />
        특히 <b>찜한 브랜드를 설정</b>해두면 <b>지도 탐색 시 필터</b>처럼 활용할
        수 있어,{' '}
        <b>
          내가 선호하는 포토부스만 더 편하게 찾아볼 수 있어요
          <span role="img" aria-label="웃는 얼굴">
            😊
          </span>
        </b>
        <br />
        <br />
        다만 매장 정보는 정기적으로 업데이트되고 있어, 새로 생긴 매장이나 운영이
        종료된 매장은 바로 반영되지 않을 수 있어요.
        <br />
        혹시 <b>포토부스 매장 검색 결과에 나오지 않거나 수정이 필요한 정보</b>가
        있다면,{' '}
        <a
          href={FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="underline">
          해당 링크
        </a>
        로 제보해주시면 빠르게 확인해서 지도에 반영해둘게요!
        <br />
        <a
          href={FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="break-all underline">
          {FORM_URL}
        </a>
        <br />
        <br />더 정확한 포토부스 위치 정보를 드릴 수 있도록 계속 개선해나갈게요
        💗
      </>
    ),
  },
  {
    q: '찜한 브랜드는 어디서 관리할 수 있나요?',
    a: (
      <>
        찜한 포토부스 브랜드는 “<b>마이페이지 &gt; 찜한 브랜드 설정</b>” 에서
        관리할 수 있어요.
        <br />
        <br />
        해당 화면에서 새로운 브랜드를 추가하거나 더 이상 보지 않을 브랜드를
        삭제할 수 있어요.
        <br />
        <br />
        설정한 찜 브랜드는 <b>포토부스 위치 검색 및 지도 탐색 시 필터로 활용</b>
        할 수 있어,
        <br />
        <b>
          내가 선호하는 포토부스 브랜드만 빠르게 찾을 수 있어요{' '}
          <span role="img" aria-label="웃는 얼굴">
            😊
          </span>
        </b>
      </>
    ),
  },
  { q: '찍은 네컷사진은 어떻게 가져오나요?' },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-ink px-4 pt-[100px] pb-10 font-square md:px-10 md:pt-[120px] md:pb-20 lg:px-[100px]">
      <div className="flex flex-col items-center gap-10">
        <img
          loading="lazy"
          src="/assets/home2/faq-question.webp"
          width={835}
          height={518}
          alt=""
          className="-m-1 hidden w-[417.5px] max-w-none md:block"
        />
        <h2 className="text-2xl leading-[1.4] font-extrabold text-brand md:text-[40px]">
          더 궁금한 점이 있나요?
        </h2>
      </div>

      <ul className="mx-auto flex max-w-[1080px] flex-col gap-5 pt-10 md:pt-20">
        {FAQS.map((f, i) => {
          const isOpen = open === i;

          return (
            <li
              key={f.q}
              className={
                isOpen
                  ? 'rounded-[48px] bg-ink shadow-[inset_2px_4px_16px_rgba(255,255,255,0.2)] drop-shadow-[0_4px_20px_rgba(255,255,255,0.1)]'
                  : 'rounded-full bg-ink shadow-[inset_-2px_-4px_12px_rgba(255,255,255,0.1),inset_-2px_-2px_8px_rgba(0,0,0,0.2),inset_2px_4px_8px_rgba(255,255,255,0.25)] drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]'
              }>
              <button
                type="button"
                disabled={!f.a}
                aria-expanded={f.a ? isOpen : undefined}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center gap-6 px-6 py-4 text-left disabled:cursor-default md:items-start md:px-10 md:py-6 lg:px-20 lg:py-8">
                <span
                  className={`flex-1 text-sm leading-[1.4] font-bold md:truncate md:text-xl ${isOpen ? 'text-brand' : 'text-white'}`}>
                  {f.q}
                </span>
                <img
                  loading="lazy"
                  src={`/assets/home2/icon-chevron-${isOpen ? 'up' : 'down'}.svg`}
                  alt=""
                  className="size-6 shrink-0"
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm leading-[1.5] text-white motion-safe:animate-pop-in md:px-10 md:pb-8 md:text-xl lg:pt-4 lg:pr-10 lg:pb-12 lg:pl-20 [&_b]:font-bold">
                  {f.a}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
