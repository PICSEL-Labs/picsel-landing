import { APP_STORE_URL } from '@/shared/constants/links';
import PhotoboothExplore from '@/widgets/features/PhotoboothExplore';
import Footer from '@/widgets/layout/Footer';

// Figma: 서비스 소개 — Desktop 3541:40086 / Tablet 4783:15455 / Mobile 4783:16373
const ASSET_DIR = '/assets/service';

const FADE_GRADIENT =
  'linear-gradient(180deg, #111114 0%, rgba(17,17,20,0.9) 20.252%, rgba(17,17,20,0.8) 36.387%, rgba(17,17,20,0.7) 48.077%, rgba(17,17,20,0.6) 56.813%, rgba(17,17,20,0.45) 66.576%, rgba(17,17,20,0.204) 82.885%, rgba(17,17,20,0.1) 91.213%, rgba(17,17,20,0) 99.99%)';
const HIGHLIGHT_GRADIENT =
  'linear-gradient(159deg, rgba(255,255,255,0.72) 15.564%, rgba(255,108,154,0.72) 10.202%, rgba(255,108,154,0.9) 48.237%, rgba(255,108,154,0.72) 86.517%, rgba(255,255,255,0.9) 112.04%)';

// Positions along the curve: d = tablet/desktop (one curve), m = mobile (two curves, two steps each).
const STEPS = [
  {
    icon: 'icon-map.svg',
    label: '포토부스 검색',
    d: ['15.66%', '65.66%'],
    m: ['27.33%', '53.15%'],
  },
  {
    icon: 'icon-picsels.svg',
    label: '사진 촬영',
    d: ['39.96%', '55.11%'],
    m: ['74.93%', '36.36%'],
  },
  {
    icon: 'icon-qr.svg',
    label: 'QR 업로드',
    d: ['64.84%', '26.97%'],
    m: ['30.8%', '17.39%'],
  },
  {
    icon: 'icon-picselbook.svg',
    label: '추억 기록',
    d: ['84.1%', '75.04%'],
    m: ['74.67%', '58.7%'],
  },
];

interface StepProps {
  icon: string;
  label: string;
  pos: string[];
}

function Step({ icon, label, pos: [left, top] }: StepProps) {
  return (
    <div
      className="absolute flex -translate-x-1/2 flex-col items-center gap-[2.5px] lg:gap-1"
      style={{ left, top }}>
      <img
        loading="lazy"
        src={`${ASSET_DIR}/journey-glow.svg`}
        alt=""
        className="absolute top-[-20px] left-1/2 size-[65px] max-w-none -translate-x-1/2 lg:top-[-32px] lg:size-[104px]"
      />
      <img
        loading="lazy"
        src={`${ASSET_DIR}/${icon}`}
        alt=""
        className="relative size-[25px] lg:size-10"
      />
      <span className="relative font-square text-[11.25px] leading-[1.4] font-bold whitespace-nowrap text-brand lg:text-lg">
        {label}
      </span>
    </div>
  );
}

export default function Service() {
  return (
    <main>
      {/* Section 7 */}
      <section className="bg-ink px-6 pb-20 lg:px-[100px]">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-6 md:gap-10 lg:flex-row-reverse lg:justify-between lg:gap-0">
          {/* Whole-pixel heights: a fractional section edge shows a hairline against the next section's gradient. */}
          <img
            src={`${ASSET_DIR}/logo-picsel.webp`}
            alt="PICSEL"
            className="h-[248px] w-[252px] object-contain md:h-[496px] md:w-[504px] lg:h-[616px] lg:w-[623px]"
          />
          <div className="flex flex-col items-center gap-10 text-center md:gap-16 lg:w-[457px] lg:items-start lg:text-left">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl leading-[1.5] font-extrabold whitespace-nowrap text-pink-100 md:text-[40px]">
                찍고 잊어버리는 <span className="text-[#ffb3ca]">네컷사진</span>
                을
                <br />
                다시 꺼내볼 수 있는
                <br />
                <span className="text-brand">나만의 포토부스 아카이브</span>
              </h1>
              <p className="leading-[1.5] font-bold text-pink-300">
                날짜와 장소로 정리하고,
                <br className="md:hidden" /> 언제든 다시 꺼내보고 싶다면
                <br />
                지금 바로 픽셀을 다운로드 해보세요!
              </p>
            </div>
            <div className="flex gap-[23px]">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-60 items-center justify-center gap-2.5 rounded-[40px] bg-brand px-6 text-lg leading-[1.5] font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_-2px_-4px_12px_rgba(255,255,255,0.1),inset_-2px_-2px_8px_rgba(0,0,0,0.2),inset_2px_4px_8px_rgba(255,255,255,0.25)] md:text-xl md:font-extrabold">
                <img
                  src={`${ASSET_DIR}/icon-apple.svg`}
                  alt=""
                  className="h-6 w-5"
                />
                App 다운로드
              </a>
              <img
                src={`${ASSET_DIR}/qr.webp`}
                alt="앱 다운로드 QR 코드"
                className="hidden size-20 rounded-lg bg-white md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="flex flex-col items-center px-4 py-[100px] text-white md:px-6 lg:pt-40 lg:pb-[200px]"
        style={{ backgroundImage: FADE_GRADIENT }}>
        <h2 className="pt-6 font-square text-2xl leading-[1.4] font-extrabold md:text-[32px] lg:text-[40px]">
          <span className="font-round text-brand">픽셀</span>은 어떤 의미인가요?
        </h2>
        <img
          loading="lazy"
          src={`${ASSET_DIR}/sparkle.webp`}
          alt=""
          className="h-[168px] w-[136px] object-contain"
        />
        <div className="pt-10 pb-2 text-center font-square text-base leading-[1.5] font-bold [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)] md:text-xl">
          <p>
            <span className="font-round font-extrabold text-brand [text-shadow:1px_1px_2px_rgba(236,169,190,0.4),-1px_-1px_2px_rgba(236,169,190,0.4)]">
              PICSEL
            </span>
            은 Picture와 Select의 합성어로,
          </p>
          <p>
            <span className="relative inline-block font-extrabold">
              <span
                aria-hidden
                className="absolute inset-x-0 top-[13px] h-3 rounded-full shadow-[inset_0_4px_12px_8px_rgba(255,255,255,0.1)] blur-[2px] md:top-[19px]"
                style={{ backgroundImage: HIGHLIGHT_GRADIENT }}
              />
              <span className="relative">
                포토부스에서 셔터가 눌리는 찰나의 순간
              </span>
            </span>
            <br className="md:hidden" />을 의미해요
          </p>
        </div>
      </section>

      {/* Frame 22 */}
      <section className="overflow-x-clip px-6 pt-[100px] pb-[62px] md:pb-[134px] lg:px-[100px] lg:pt-[120px] lg:pb-[189px]">
        <h2 className="text-center font-square text-2xl leading-[1.4] font-extrabold text-brand [text-shadow:2px_2px_4px_rgba(255,255,255,0.8),-2px_-2px_4px_rgba(255,255,255,0.4)] md:text-[40px]">
          순간을 더 잘 찾고,
          <br />더 잘 기억할 수 있도록
        </h2>
        <p className="mt-10 text-center font-square text-base leading-[1.5] font-bold lg:text-xl">
          디지털 최소 단위인 픽셀이 모여 한 장의
          <br className="md:hidden" /> 사진이 되는 것처럼,
          <br className="max-md:hidden" /> 수많은 특별한 순간을 모아
          <br className="md:hidden" />
          <strong className="font-round text-lg leading-[1.5] font-extrabold text-brand-high md:text-xl lg:text-2xl">
            {' '}
            나만의 포토부스 아카이브
          </strong>
          를 함께 만들어봐요!
        </p>

        <div className="relative -mx-6 mt-10 hidden aspect-[1280/170.57] md:block lg:-mx-[100px]">
          <img
            loading="lazy"
            src={`${ASSET_DIR}/journey-curve.svg`}
            alt=""
            className="absolute top-[-1.17%] left-[-0.16%] w-[100.31%] max-w-none"
          />
          {STEPS.map(s => (
            <Step key={s.label} icon={s.icon} label={s.label} pos={s.d} />
          ))}
        </div>
        <div className="relative -mx-6 mt-[17px] aspect-[375/143] md:hidden">
          <img
            loading="lazy"
            src={`${ASSET_DIR}/journey-curve-m1.svg`}
            alt=""
            className="absolute top-[-0.87%] left-[-15.53%] w-[131.33%] max-w-none"
          />
          {STEPS.slice(0, 2).map(s => (
            <Step key={s.label} icon={s.icon} label={s.label} pos={s.m} />
          ))}
        </div>
        <div className="relative -mx-6 mt-10 aspect-[375/138] md:hidden">
          <img
            loading="lazy"
            src={`${ASSET_DIR}/journey-curve-m2.svg`}
            alt=""
            className="absolute top-[27.55%] left-[-9.93%] w-[119.83%] max-w-none"
          />
          {STEPS.slice(2).map(s => (
            <Step key={s.label} icon={s.icon} label={s.label} pos={s.m} />
          ))}
        </div>
      </section>

      <PhotoboothExplore />
      <Footer />
    </main>
  );
}
