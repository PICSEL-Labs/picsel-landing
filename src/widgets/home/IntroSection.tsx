// Figma: Section 4 — Desktop 4278:41483 / Tablet 4687:15024 / Mobile 4359:12854
export default function IntroSection() {
  return (
    <section className="flex flex-col items-center gap-10 px-4 py-[100px] text-center font-square md:px-10 md:py-40 lg:px-[100px] lg:pb-60">
      <h2 className="text-2xl leading-[1.4] font-extrabold whitespace-nowrap text-brand md:text-[40px]">
        픽셀에서는 누구나 쉽게 찾고
        <br />
        다시 꺼내볼 수 있어요
      </h2>
      <p className="text-sm leading-[1.5] font-bold text-text-mid md:text-xl">
        지도 기반 탐색, 날짜와 장소 기록, 보관함 기반 정리로
        <br />
        포토이즘, 포토그레이, BYTP, 돈룩업 등 <br className="md:hidden" />
        원하는 포토부스 매장을 쉽게 찾고 <br className="hidden md:inline" />
        픽셀과 함께 <br className="md:hidden" />
        편하게 추억해보세요!
      </p>
    </section>
  );
}
