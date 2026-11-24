import { APP_STORE_URL } from '@/shared/constants/links';

// Figma: Section 9 — Desktop 4278:41594 / Tablet 4687:15310 / Mobile 4359:13039
export default function CtaSection() {
  return (
    <section className="flex flex-col items-center bg-ink px-4 pt-10 pb-20 md:pt-20 md:pb-40">
      <div className="flex size-64 items-center justify-center md:size-128">
        {/* twinkle.webp = Twinkle-L + 2 twinkle-S; the corner brackets sit on top at the design's offsets */}
        <div className="relative w-[170px] md:w-[340px]">
          <img
            loading="lazy"
            src="/assets/common/twinkle.webp"
            width={340}
            height={418}
            alt=""
            className="w-full"
          />
          <img
            loading="lazy"
            src="/assets/home2/cta-bracket-tr.svg"
            alt=""
            className="absolute top-[12.56%] left-[80.44%] w-[14.12%] -scale-x-100"
          />
          <img
            loading="lazy"
            src="/assets/home2/cta-bracket-bl.svg"
            alt=""
            className="absolute top-[73.56%] left-[5.44%] w-[14.12%] -scale-y-100"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <h2 className="text-center text-2xl leading-[1.5] font-extrabold text-pink-100 md:text-[40px]">
          지금 바로 <span className="text-brand">픽셀</span>에서
          <br />
          포토부스를 찾고
          <br />
          네컷사진을 정리해보세요!
        </h2>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-60 items-center justify-center gap-2.5 rounded-[40px] bg-brand px-6 py-4 text-base leading-[1.5] font-extrabold text-white md:text-xl">
          <img
            loading="lazy"
            src="/assets/home2/icon-apple.svg"
            alt=""
            className="h-6 w-5"
          />
          App 다운로드
        </a>
      </div>
    </section>
  );
}
