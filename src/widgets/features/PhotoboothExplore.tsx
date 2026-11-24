import Phone from '@/shared/ui/Phone';
import FeatureTabs from '@/widgets/features/FeatureTabs';

// Figma: 기능 소개 / 포토부스 탐색 — Desktop 4363:16807 (= 4556:14052) / Tablet 4783:16103 / Mobile 4783:16382
const ASSET_DIR = '/assets/service';

// Decorative brand logos; positions are offsets from the section's center line, per breakpoint.
const MARKERS = [
  {
    n: 1,
    c: 'hidden size-[42px] border-3 md:block md:top-[2079px] md:ml-[-278px] lg:top-[1122px] lg:ml-[484px]',
  },
  {
    n: 2,
    c: 'top-[1189px] ml-[138px] size-[42px] -rotate-[34.78deg] border-3 md:top-[1562px] md:ml-[322px] lg:top-[1176px] lg:ml-[-335px]',
  },
  {
    n: 3,
    c: 'top-[1614px] ml-[133px] size-[89.6px] -rotate-[21.81deg] border-[6.4px] md:top-[1929px] md:ml-[198px] lg:top-[1543px] lg:ml-[-459px]',
  },
  {
    n: 4,
    c: 'top-[1343px] ml-[-202px] size-14 rotate-[23.84deg] border-4 md:top-[2189px] md:ml-[-368px] md:size-28 md:border-8 lg:top-[1309px] lg:ml-[-588px]',
  },
];

const TAG_CLASS =
  'inline-flex rounded-full bg-pink-100 py-2 pr-4 pl-3 font-round text-sm leading-[1.5] font-extrabold text-brand md:px-6 md:text-base';
const TITLE_CLASS =
  'font-square text-2xl leading-[1.4] font-extrabold md:text-[32px] lg:text-[40px]';
const BODY_CLASS = 'mt-6 font-square text-base leading-[1.4] md:text-xl';

export default function PhotoboothExplore() {
  return (
    <div className="overflow-x-clip text-text-high">
      <FeatureTabs active="/features/map" />

      <section className="relative flex flex-col items-center gap-16 px-4 py-[100px] md:gap-[120px] md:px-6 md:pb-40 lg:gap-40 lg:px-[100px] lg:pt-40 lg:pb-[280px]">
        {MARKERS.map(m => (
          <img
            loading="lazy"
            key={m.n}
            src={`${ASSET_DIR}/explore-marker-${m.n}.webp`}
            alt=""
            className={`pointer-events-none absolute left-1/2 rounded-full border-brand object-cover opacity-20 ${m.c}`}
          />
        ))}

        <div className="w-fit text-center">
          <h2 className="font-round text-2xl leading-[1.4] font-bold md:text-[32px] lg:text-5xl">
            한눈에 찾고 취향대로 탐색하는
            <br className="md:hidden" />{' '}
            <span className="font-extrabold text-brand-high">
              포토부스 통합 지도
            </span>
          </h2>
          <img
            loading="lazy"
            src={`${ASSET_DIR}/explore-underline.webp`}
            alt=""
            className="mt-1 -mb-1 ml-[4.6%] hidden h-[15px] w-[92.3%] md:block lg:mt-0.5"
          />
        </div>

        <div className="flex w-full max-w-[1080px] flex-col items-center gap-20 lg:gap-0">
          <div className="flex w-full flex-col items-center gap-6 md:gap-10 lg:-mb-40 lg:flex-row-reverse lg:items-start lg:gap-20 lg:px-10">
            <div className="relative w-full px-2 md:w-[477px] md:px-0 lg:w-auto lg:flex-1 lg:pb-20">
              <img
                loading="lazy"
                src={`${ASSET_DIR}/explore-list.webp`}
                alt=""
                className="absolute top-[31px] left-[-15px] hidden w-[300px] max-w-none lg:block"
              />
              <div className="relative">
                <p className={TAG_CLASS}>1. 지도 검색</p>
                <h3 className={`mt-4 ${TITLE_CLASS}`}>
                  전국 포토부스 매장만
                  <br />
                  모아볼 수 있어요
                </h3>
                <p className={`${BODY_CLASS} lg:whitespace-nowrap`}>
                  다른 검색 결과와 섞이지 않고 포토부스 위치를 정확하게 찾을 수
                  있어요
                </p>
              </div>
            </div>
            <Phone
              src={`${ASSET_DIR}/explore-phone-map.webp`}
              alt="픽셀 앱의 포토부스 지도 화면"
            />
          </div>

          <div className="relative flex w-full flex-col items-center gap-6 md:gap-10 lg:flex-row lg:items-end lg:justify-end lg:gap-20 lg:px-10">
            <div className="relative w-full px-2 md:w-[477px] md:px-0 lg:pb-20 lg:text-right">
              <img
                loading="lazy"
                src={`${ASSET_DIR}/explore-pin.webp`}
                alt=""
                className="hidden size-[169px] md:-ml-7 md:block lg:absolute lg:-top-[189px] lg:left-[362px] lg:ml-0"
              />
              <h3 className={TITLE_CLASS}>
                선호하는 브랜드 매장을
                <br className="md:max-lg:hidden" /> 필터링해서 바로 확인해요
              </h3>
              <p className={BODY_CLASS}>
                포토부스 브랜드를 하나하나 검색할 필요없이
                <br className="max-md:hidden" /> 좋아하는 브랜드를 골라서 찾아볼
                수 있어요
              </p>
            </div>
            <Phone
              src={`${ASSET_DIR}/explore-phone-brands.webp`}
              alt="픽셀 앱의 브랜드 찾기 필터 화면"
            />
          </div>
        </div>
      </section>

      <section className="relative px-4 pt-10 pb-20 md:bg-pink-100 md:px-6 md:pt-[47px] md:pb-[167px] lg:px-[100px] lg:pt-10 lg:pb-40">
        <div
          aria-hidden
          className="absolute inset-x-6 -top-9 bottom-6 hidden rounded-[20px] bg-white shadow-[-8.16px_-8.16px_20.4px_rgba(0,0,0,0.05)] md:block lg:inset-x-10 lg:-top-[72px] lg:bottom-10 lg:rounded-[40px] lg:shadow-[-16px_-16px_40px_rgba(0,0,0,0.05)]"
        />
        <div className="relative mx-auto flex flex-col items-center gap-6 md:gap-20 lg:grid lg:w-fit lg:grid-cols-[332px_603px] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-20 lg:gap-y-0 lg:pl-10">
          <div className="w-full px-2 md:w-[477px] md:px-0 lg:col-start-2 lg:w-auto">
            <p className={TAG_CLASS}>2. 브랜드 찜</p>
            <h3 className="mt-4 font-square text-xl leading-[1.4] font-extrabold md:text-[32px] lg:text-[40px]">
              좋아하는 브랜드는 <span className="text-brand-high">찜!</span>해서
              <br />
              한눈에 확인해요
            </h3>
            <p className={BODY_CLASS}>
              좋아하는 브랜드를 매번 검색할 필요없이
              <br className="max-md:hidden" /> 찜한 브랜드에 저장해서 쉽고
              편하게 찾아갈 수 있어요
            </p>
          </div>
          <Phone
            src={`${ASSET_DIR}/explore-phone-wish.webp`}
            alt="브랜드를 찜하면 '찜한 브랜드에 추가했어요' 알림이 뜨는 화면"
            className="relative lg:col-start-1 lg:row-span-2 lg:row-start-1"
          />
          <div className="relative mt-4 w-[375px] shrink-0 md:mt-0 md:w-[524px] lg:col-start-2 lg:mt-[13px] lg:-ml-[55px]">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${ASSET_DIR}/explore-mypage.webp`}
                width={1048}
                height={810}
              />
              <img
                loading="lazy"
                src={`${ASSET_DIR}/explore-mypage-m.webp`}
                width={750}
                height={810}
                alt="마이페이지의 찜한 브랜드 설정 메뉴"
                className="w-full"
              />
            </picture>
            <img
              loading="lazy"
              src={`${ASSET_DIR}/explore-note.webp`}
              alt="찜한 브랜드는 마이페이지에서 관리할 수 있어요!"
              className="absolute top-[203px] left-[129px] w-[188px] md:top-[254px] md:left-[293px] lg:top-[203px] lg:left-[465px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
