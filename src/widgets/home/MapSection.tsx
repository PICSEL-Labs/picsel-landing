// Figma: Section 5 — Desktop 4278:41488 / Tablet 4687:15029 / Mobile 4359:12859
const SEARCH_SCREEN = '/assets/home/map-screen-search.webp';
const MAP_SCREEN = '/assets/home/map-screen-map.webp';

interface PhoneProps {
  screen: string;
  mdScreen: string;
}

// [Mockup] iPhone 13 template: Figma's export bakes the pink section background in,
// so the body/holes/screen layers are composed here instead.
function Phone({ screen, mdScreen }: PhoneProps) {
  return (
    <div className="relative h-[493px] w-[240px] shrink-0 drop-shadow-[-19.2px_32px_32px_rgba(0,0,0,0.1)] md:h-[682px] md:w-[332px]">
      <img
        loading="lazy"
        src="/assets/home/phone-body.svg"
        alt=""
        className="absolute top-0 left-[-0.48%] h-full w-[101.44%] max-w-none"
      />
      <img
        loading="lazy"
        src="/assets/home/phone-speaker.svg"
        alt=""
        className="absolute top-[0.7%] left-[41.69%] h-[0.7%] w-[17.11%] opacity-20"
      />
      <img
        loading="lazy"
        src="/assets/home/phone-camera.svg"
        alt=""
        className="absolute top-[2.93%] left-[35.66%] h-[1.2%] w-[2.49%] opacity-20"
      />
      <picture>
        <source media="(min-width: 48rem)" srcSet={mdScreen} />
        <img
          loading="lazy"
          src={screen}
          alt="PICSEL 앱 화면"
          className="absolute top-[2.35%] left-[4.82%] h-[95.3%] w-[90.36%] mask-size-[100%_100%] mask-no-repeat object-cover"
          style={{ maskImage: 'url(/assets/home/phone-screen-mask.svg)' }}
        />
      </picture>
    </div>
  );
}

export default function MapSection() {
  return (
    <section className="relative flex flex-col items-center gap-4 bg-pink-100 px-4 pt-[100px] pb-20 font-square text-text-high md:gap-20 md:px-10 md:pt-20 md:pb-40 lg:flex-row lg:justify-center lg:gap-[120px] lg:px-[100px] lg:pb-[294px]">
      {/* White card; starts above the section so it overlaps the previous one */}
      <div className="absolute inset-x-6 -top-10 bottom-0 mx-auto hidden max-w-[1200px] rounded-3xl bg-white shadow-[-16px_-16px_40px_rgba(0,0,0,0.05)] md:block lg:inset-x-10 lg:-top-16 lg:bottom-10 lg:rounded-[40px]" />

      <div className="relative flex flex-col items-center gap-6 md:w-[332px] md:items-start md:gap-10 lg:gap-20">
        <h2 className="text-xl leading-[1.5] font-bold whitespace-nowrap md:pl-2 md:text-[32px]">
          인생네컷,하루필름 등
          <br />
          한눈에 찾고 취향대로 탐색하는
          <br />
          <span className="font-extrabold text-brand-high">
            포토부스 통합 지도
          </span>
        </h2>
        <Phone screen={MAP_SCREEN} mdScreen={SEARCH_SCREEN} />
      </div>

      <div className="relative flex w-full flex-col items-center gap-6 pt-6 md:w-auto md:items-start md:gap-20 lg:flex-col-reverse">
        <p className="w-full max-w-[287px] text-sm leading-[1.5] md:w-[347px] md:max-w-none md:pl-2 md:text-xl md:whitespace-nowrap">
          모노맨션, 플랜비스튜디오, 픽닷을 포함한{' '}
          <br className="hidden md:inline" />
          약 200개의 포토부스 브랜드를 한데 모은
          <br />
          포토부스 통합 지도!
          <br />
          지도 위 포토부스만 빠르게 찾을 수 있어요
        </p>
        <Phone screen={SEARCH_SCREEN} mdScreen={MAP_SCREEN} />
      </div>
    </section>
  );
}
