// Figma: Section 7 — Desktop 4278:41540 / Tablet 4687:15192 ("Section 10"; its "Section 7" 4687:15093 is hidden) / Mobile 4359:12923
const STEPS = [
  { label: '사진 업로드', img: 'upload-step1.webp', alt: '사진 등록 화면' },
  {
    label: '날짜, 위치 저장',
    img: 'upload-step2.webp',
    alt: '날짜와 위치 선택 화면',
  },
  {
    label: '보관할 픽셀북 선택',
    img: 'upload-step3.webp',
    alt: '픽셀북 선택 화면',
  },
];

export default function UploadSection() {
  return (
    <section className="px-4 pt-[100px] pb-[140px] font-square lg:px-0 lg:pt-40 lg:pb-[54px]">
      <h2 className="text-center text-xl leading-[1.5] font-bold text-text-high md:text-[32px]">
        복잡한 과정 없이
        <br />
        <span className="font-extrabold text-brand-high">쉽고 빠른 업로드</span>
      </h2>

      {/* Mobile/tablet: label → phone → dashed line, stacked. Desktop: labels in a row above one combined mockup image. */}
      <ol className="mt-12 flex flex-col items-center gap-12 lg:mt-[84px] lg:flex-row lg:justify-center lg:gap-7">
        {STEPS.map((s, i) => (
          <li
            key={s.label}
            className="flex flex-col items-center gap-6 lg:flex-row lg:gap-7">
            <p className="relative z-10 flex w-40 items-center justify-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-brand font-round text-sm leading-[1.5] font-extrabold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                {i + 1}
              </span>
              <span className="text-base leading-[1.4] font-bold whitespace-nowrap text-brand-high">
                {s.label}
              </span>
            </p>
            {/* Export includes the drop shadow and a white backdrop; offset so the phone body fills the 332×682 box. */}
            <div className="relative aspect-[332/682] w-60 md:w-[332px] lg:hidden">
              <img
                loading="lazy"
                src={`/assets/home2/${s.img}`}
                alt={s.alt}
                className="absolute top-[-4.69%] left-[-25.63%] w-[140.06%] max-w-none"
              />
            </div>
            {i < STEPS.length - 1 && (
              <>
                <img
                  loading="lazy"
                  src="/assets/home2/upload-line-v.svg"
                  alt=""
                  className="relative z-10 my-[19px] h-0.5 w-10 rotate-90 lg:hidden"
                />
                <img
                  loading="lazy"
                  src="/assets/home2/upload-line-h.svg"
                  alt=""
                  className="hidden h-0.5 w-[140px] lg:block"
                />
              </>
            )}
          </li>
        ))}
      </ol>

      <img
        loading="lazy"
        src="/assets/home2/upload-phones.webp"
        width={2560}
        height={1652}
        alt="사진 업로드, 날짜·위치 저장, 픽셀북 선택 화면"
        className="mx-auto hidden w-full max-w-[1280px] lg:block"
      />
    </section>
  );
}
