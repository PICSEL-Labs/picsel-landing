// Figma: Section 3 — Desktop 4278:41469 / Tablet 4687:15010 / Mobile 4359:12840
export default function WishSection() {
  const big = 'text-2xl font-bold text-white md:text-[40px] md:font-extrabold';

  return (
    <section className="bg-brand px-4 py-20 md:px-10 md:py-40">
      <h2 className="flex flex-col items-center gap-1 text-center font-square text-base leading-[1.4] font-extrabold whitespace-nowrap text-pink-200 md:text-[40px]">
        <span className="relative flex items-center">
          원하는 포토부스<span className={big}>&nbsp;쉽게 찾고</span>
          <span className="text-pink-300">,</span>
          <img
            loading="lazy"
            src="/assets/home/wish-burst.webp"
            alt=""
            className="absolute -top-3 left-[calc(100%-11px)] h-[25px] w-[26px] max-w-none md:-top-4 md:left-[calc(100%-14px)] md:size-[35px]"
          />
        </span>
        <span className="flex items-center">
          <span className={`relative ${big}`}>
            편하게 추억
            <img
              loading="lazy"
              src="/assets/home/wish-underline.webp"
              alt=""
              className="absolute top-[calc(100%-2px)] left-0 h-1 w-[120px] max-w-none -scale-x-100 rotate-[0.3deg] md:top-[calc(100%+1.5px)] md:h-2 md:w-[194px]"
            />
          </span>
          하고 싶지 않으신가요?
        </span>
      </h2>
    </section>
  );
}
