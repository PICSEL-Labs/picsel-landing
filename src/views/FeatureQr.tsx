import Headline from '@/shared/ui/Headline';
import Phone from '@/shared/ui/Phone';
import Tag from '@/shared/ui/Tag';
import FeatureBanner from '@/widgets/features/FeatureBanner';
import FeatureTabs from '@/widgets/features/FeatureTabs';
import Footer from '@/widgets/layout/Footer';

// Figma: 주요 기능_2. QR 업로드 — Desktop 3613:7904 / Tablet 4771:61681 / Mobile 4771:61778
const ASSET_DIR = '/assets/features';
const TITLE_CLASS =
  'font-square text-2xl leading-[1.4] font-extrabold md:text-[32px] lg:text-[40px]';
const BODY_CLASS = 'mt-6 font-square text-base leading-[1.4] md:text-xl';

const STEPS = [
  {
    label: '사진 업로드',
    src: `${ASSET_DIR}/qr-album-step1.webp`,
    alt: '저장할 사진을 등록하는 픽셀 업로드 화면',
  },
  {
    label: '날짜, 위치 저장',
    src: `${ASSET_DIR}/qr-album-step2.webp`,
    alt: '찍은 날짜와 위치를 선택하는 픽셀 업로드 화면',
  },
  {
    label: '보관할 픽셀북 선택',
    src: `${ASSET_DIR}/qr-album-step3.webp`,
    alt: '보관할 픽셀북을 선택하는 픽셀 업로드 화면',
  },
];

export default function FeatureQr() {
  return (
    <main>
      <FeatureBanner />
      <FeatureTabs />

      {/* 사진 업로드 / Section 1 — QR 업로드 */}
      <section className="flex flex-col items-center gap-20 px-4 py-[100px] md:gap-[135px] md:px-6 md:pb-40 lg:gap-[172px] lg:pt-40 lg:pb-60">
        <Headline
          lead="복잡한 과정 없이,"
          accent="쉽고 빠른 업로드"
          ul={[
            `${ASSET_DIR}/qr-underline-md.webp`,
            `${ASSET_DIR}/qr-underline-lg.webp`,
          ]}
          ulClass="md:top-[49px] md:left-[-77.5px] lg:top-[68px] lg:left-[21px]"
        />
        <div className="flex w-full flex-col items-center gap-10 md:w-[538px] lg:w-full lg:max-w-[1080px] lg:flex-row-reverse lg:items-start lg:gap-20 lg:px-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:flex-1">
            <Tag className="bg-pink-100 pr-4 pl-3 text-sm md:px-6 md:text-base">
              1. QR 업로드
            </Tag>
            <h3 className={`mt-4 ${TITLE_CLASS}`}>
              QR스캔 한번으로
              <br />
              빠르고 간편한 사진 업로드
            </h3>
            <p
              className={`${BODY_CLASS} md:whitespace-nowrap lg:whitespace-normal`}>
              번거로운 과정 없이 QR 스캔 한번으로
              <br className="md:hidden" /> 네컷사진을 바로 저장하세요
            </p>
            {/* Tablet centers this group; Desktop leaves it 17px left of center */}
            <img
              loading="lazy"
              src={`${ASSET_DIR}/qr-bottom-sheet.webp`}
              width={1076}
              height={624}
              alt="포토부스 매장 정보와 QR 사진 저장 버튼"
              className="mt-10 hidden w-[538px] max-w-full md:block md:translate-x-[17px] lg:mt-[60px] lg:translate-x-0"
            />
          </div>
          <Phone
            src={`${ASSET_DIR}/qr-phone-scan.webp`}
            alt="네컷사진의 QR코드를 찍는 QR 스캔 화면"
          />
        </div>
      </section>

      {/* Section 2 — 앨범에서 업로드 (white card on md+, plain pink on mobile) */}
      <section className="relative flex flex-col items-center overflow-x-clip bg-pink-100 px-4 pt-10 pb-[120px] md:px-6">
        <div className="absolute inset-x-6 top-[-40px] bottom-6 mx-auto hidden max-w-[1200px] rounded-3xl bg-white shadow-[-16px_-16px_40px_0_rgba(0,0,0,0.05)] md:block lg:inset-x-10 lg:top-[-64px] lg:bottom-10 lg:rounded-[40px]" />
        <div className="relative flex w-full flex-col items-center gap-10 md:max-w-[612px] md:gap-[120px] lg:max-w-none">
          <div className="flex flex-col items-center text-center md:px-[72px] lg:px-0">
            <Tag className="bg-white px-6 text-sm md:bg-pink-100 md:text-base">
              2. 앨범에서 업로드
            </Tag>
            <h3 className={`mt-4 ${TITLE_CLASS}`}>
              갤러리에서 잊혀진 네컷사진을
              <br />
              픽셀북에 모아보세요
            </h3>
            <p className={`${BODY_CLASS} break-keep`}>
              예전에 찍어두고 잊고 있던 사진도
              <br className="md:hidden" /> 앨범에서 선택해 간편하게 저장할 수
              있어요
            </p>
          </div>

          {/* Desktop row is 3×332 + 2×32; below 1108px the phones shrink to fit */}
          <ol className="relative flex flex-col items-center lg:w-full lg:max-w-[1060px] lg:flex-row lg:items-start lg:gap-8 lg:pb-[70px]">
            {STEPS.map((s, i) => (
              <li
                key={s.label}
                className="relative flex flex-col items-center gap-6 py-6 last-of-type:py-10 lg:min-w-0 lg:flex-1 lg:gap-12 lg:p-0 lg:last-of-type:p-0">
                <p className="flex w-40 items-center justify-center gap-2 font-square leading-[1.4] font-bold text-brand-high">
                  <span className="flex size-6 items-center justify-center rounded-full bg-brand font-round text-sm leading-[1.5] font-extrabold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                    {i + 1}
                  </span>
                  {s.label}
                </p>
                <Phone src={s.src} alt={s.alt} className="relative lg:w-full" />
                {i < STEPS.length - 1 && (
                  <>
                    <img
                      loading="lazy"
                      src={`${ASSET_DIR}/dashed-line-v.svg`}
                      width={2}
                      height={40}
                      alt=""
                      className="lg:hidden"
                    />
                    {/* centered in the 32px gap between steps */}
                    <img
                      loading="lazy"
                      src={`${ASSET_DIR}/dashed-line-h.svg`}
                      alt=""
                      className="absolute top-[11px] left-[calc(100%-54px)] hidden lg:block"
                    />
                  </>
                )}
              </li>
            ))}
            {/* Desktop fades the bottom of the three phones into the card */}
            <div className="absolute -right-14 -bottom-[15px] -left-[65px] hidden h-[287px] bg-linear-to-b from-white/0 via-white/60 via-[26.643%] to-white to-[54.654%] lg:block" />
          </ol>
        </div>
      </section>

      {/* Desktop frame has no Footer; Tablet/Mobile use the light one */}
      <Footer />
    </main>
  );
}
