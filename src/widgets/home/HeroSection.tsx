import { APP_STORE_URL } from '@/shared/constants/links';

// Figma: Hero — Desktop 4278:41419 / Tablet 4687:14960 / Mobile 4359:12790
export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 bg-ink px-4 pb-20 md:gap-0 md:px-10 md:pb-0 lg:flex-row lg:justify-center lg:gap-10 lg:px-10 lg:pb-20 xl:px-[100px]">
      {/* Below 1280 the phones image shrinks instead of overflowing */}
      <div className="relative shrink-0 lg:shrink">
        {/* Ellipse 418: soft glow behind the phones */}
        <div className="absolute top-[49px] left-1/2 size-[287px] -translate-x-1/2 rounded-full bg-white/10 blur-[60px] md:top-[166px] md:size-[480px] md:blur-[100px] lg:top-[98px] lg:left-0 lg:translate-x-0" />
        <img
          src="/assets/home/hero-phones.webp"
          alt="PICSEL 앱의 픽셀북과 포토부스 지도 화면"
          className="relative h-[328px] w-[287px] object-cover md:h-[640px] md:w-[560px] lg:aspect-[7/8] lg:h-auto"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-10 md:h-[640px] md:w-auto md:shrink-0 md:justify-center md:pb-10 lg:items-end">
        <div className="flex w-full flex-col items-center gap-4 md:w-[450px] md:items-end md:gap-8">
          <h1 className="relative w-full max-w-[287px] leading-[1.4] font-bold whitespace-nowrap text-pink-100 md:max-w-none">
            <span className="flex items-center gap-2.5 text-xl md:h-[84px] md:items-end md:text-[40px]">
              포토부스{' '}
              <strong className="text-[32px] font-extrabold text-brand md:text-[56px]">
                검색
              </strong>{' '}
              부터
            </span>
            <span className="flex items-center justify-end gap-2.5 text-xl md:h-[84px] md:items-end md:text-[40px]">
              네컷사진{' '}
              <strong className="text-[32px] font-extrabold text-brand md:text-[56px]">
                보관
              </strong>{' '}
              까지
            </span>
            <img
              src="/assets/home/hero-sparkle.webp"
              alt=""
              className="absolute -top-[18px] left-[57px] h-9 w-8 md:top-[-16.5px] md:left-[82px] md:h-[72px] md:w-16 lg:-top-9 lg:left-[99px]"
            />
            <img
              src="/assets/home/hero-sparkle-single.webp"
              alt=""
              className="absolute top-[29.5px] left-[233px] size-6 md:top-[66px] md:left-[358px] md:size-12 lg:top-[62px] lg:left-[352.5px]"
            />
          </h1>
          <p className="w-full text-center text-sm leading-[1.5] font-bold text-pink-300 md:text-base lg:text-right">
            포토이즘, 포토시그니처, 하루필름 등
            <br />
            <span className="text-brand">PICSEL</span>에서 다양한 포토부스
            위치를 <br className="md:hidden" />
            한번에 찾고 <br className="hidden md:inline" />
            네컷사진을 더 쉽게 꺼내보세요!
          </p>
        </div>

        <div className="flex flex-col items-center gap-[23px] lg:flex-row lg:items-start">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-[40px] bg-brand px-6 py-3 text-base leading-[1.5] font-extrabold whitespace-nowrap text-white shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_-2px_-4px_12px_rgba(255,255,255,0.1),inset_-2px_-2px_8px_rgba(0,0,0,0.2),inset_2px_4px_8px_rgba(255,255,255,0.25)] md:h-14 md:w-60 md:py-4 md:text-xl">
            <img src="/assets/home/icon-apple.svg" alt="" className="h-6 w-5" />
            App 다운로드
          </a>
          <img
            src="/assets/home/hero-qr.webp"
            alt="앱 다운로드 QR 코드"
            className="hidden size-20 md:block"
          />
        </div>
      </div>
    </section>
  );
}
