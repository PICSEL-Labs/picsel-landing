import Phone from '@/shared/ui/Phone';

// Figma: Section 6 — Desktop 4278:41509 / Tablet 4687:15062 / Mobile 4359:12892

export default function ArchiveSection() {
  return (
    <section className="relative overflow-hidden bg-pink-100 px-4 pt-10 pb-[100px] font-square text-text-high md:pt-[120px] md:pb-[240px] lg:pt-40">
      <img
        loading="lazy"
        src="/assets/home2/archive-bg.webp"
        alt=""
        className="pointer-events-none absolute top-6 left-[calc(50%-298px)] hidden w-[1126px] max-w-none lg:block"
      />

      <div className="relative flex flex-col items-center gap-4 md:gap-20 lg:flex-row-reverse lg:justify-center lg:gap-[120px]">
        <div className="flex flex-col gap-6 md:w-[332px] md:gap-12">
          <h2 className="text-center text-xl leading-[1.5] font-bold md:pl-2 md:text-left md:text-[32px]">
            모으고 기록해 <br className="hidden md:inline" />
            다시 꺼내보는
            <br />
            <span className="font-extrabold text-brand-high">
              나만의 네컷 보관함
            </span>
          </h2>
          <Phone
            src="/assets/home2/archive-pixelbook.webp"
            alt="픽셀북 화면"
            className="relative self-center"
          />
        </div>

        <div className="flex flex-col gap-6 pt-6 md:w-[332px] md:gap-20 lg:flex-col-reverse">
          <p className="text-center text-sm leading-[1.5] md:pl-4 md:text-left md:text-xl">
            “이 사진 언제 어디서 찍었더라?”
            <br />
            찍은 날짜와 장소를 함께 기록해
            <br />
            언제든 쉽게 꺼내 추억할 수 있어요
          </p>
          <Phone
            src="/assets/home2/archive-mypixel.webp"
            alt="내 픽셀 화면"
            className="relative self-center"
          />
        </div>
      </div>
    </section>
  );
}
