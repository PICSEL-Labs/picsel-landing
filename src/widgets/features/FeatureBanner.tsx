// Figma: 주요 기능 상단베너 — Desktop 3602:58059 / Tablet 4687:14161 / Mobile 4687:14250
export default function FeatureBanner() {
  return (
    <section className="flex flex-col items-center gap-10 bg-ink px-4 pb-20 font-square text-white md:px-6 md:pt-10 lg:flex-row lg:justify-center lg:gap-[120px] lg:px-[100px]">
      <img
        src="/assets/common/twinkle.webp"
        alt=""
        className="h-[418px] w-[340px] opacity-80"
      />
      <div className="max-w-[287px] md:max-w-none">
        <h1 className="text-2xl leading-[1.4] font-bold whitespace-nowrap md:text-[40px]">
          포토부스를 찾고-찍고-정리까지
          <br />
          <span className="text-brand">픽셀에서 한번에!</span>
        </h1>
        <p className="pt-6 text-sm leading-[1.4] whitespace-nowrap md:text-xl">
          지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로
          <br />더 쉽고 편하게 포토부스를 찾고 사진을 보관하세요
        </p>
      </div>
    </section>
  );
}
