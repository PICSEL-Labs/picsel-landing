import Headline from '@/shared/ui/Headline';
import Phone from '@/shared/ui/Phone';
import Tag from '@/shared/ui/Tag';
import FeatureBanner from '@/widgets/features/FeatureBanner';
import FeatureTabs from '@/widgets/features/FeatureTabs';
import Footer from '@/widgets/layout/Footer';

// Figma: 주요 기능_3. 픽셀북 — Desktop 3613:46901 / Tablet 4777:55641 / Mobile 4777:55739
// A collage: phones and handwritten notes are positioned relative to the phone they point at, per breakpoint.
const ASSET_DIR = '/assets/features';

interface NoteProps {
  src: [string, string, string];
  alt: string;
  className: string;
}

// Handwritten captions (Nanum NeuRisNeuRisCe isn't in the project), exported per breakpoint: [mobile, tablet, desktop].
function Note({ src, alt, className }: NoteProps) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={`${ASSET_DIR}/${src[2]}`} />
      <source media="(min-width: 768px)" srcSet={`${ASSET_DIR}/${src[1]}`} />
      <img
        loading="lazy"
        src={`${ASSET_DIR}/${src[0]}`}
        alt={alt}
        className={`absolute max-w-none ${className}`}
      />
    </picture>
  );
}

// Background film strips (two rotated groups). Each group sits on its big strip's center and is scaled down on mobile.
const RECT_CLASS = 'absolute -translate-1/2 rounded-[20px] bg-pink-100';
function Decor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[409.8px] left-[calc(50%+90.1px)] scale-[0.552] *:-rotate-30 *:opacity-50 md:top-[646.8px] md:left-[calc(50%+400.2px)] md:scale-100 md:max-lg:z-10 lg:left-[calc(50%+413.2px)]">
        <div className="absolute h-[720px] w-[520px] -translate-1/2 rounded-[34px] bg-pink-200" />
        <div
          className={`${RECT_CLASS} top-[129.3px] left-[-64px] h-[240px] w-[200px]`}
        />
        <div
          className={`${RECT_CLASS} top-[9.3px] left-[143.9px] h-[240px] w-[200px]`}
        />
        <div
          className={`${RECT_CLASS} top-[-113.2px] left-[-204px] h-[240px] w-[200px]`}
        />
        <div
          className={`${RECT_CLASS} top-[-233.2px] left-[3.9px] h-[240px] w-[200px]`}
        />
      </div>
      <div className="absolute top-[929.1px] left-[calc(50%+12px)] scale-[0.897] *:rotate-30 md:top-[960.2px] md:left-[calc(50%+421.1px)] md:scale-100 lg:left-[calc(50%+434.1px)]">
        <div className="absolute h-[982px] w-[320px] -translate-1/2 rounded-[40px] bg-pink-200" />
        <div
          className={`${RECT_CLASS} top-[-286.6px] left-[165.5px] h-[160px] w-[240px]`}
        />
        <div
          className={`${RECT_CLASS} top-[-116.9px] left-[67.5px] h-[160px] w-[240px]`}
        />
        <div
          className={`${RECT_CLASS} top-[52.8px] left-[-30.5px] h-[160px] w-[240px]`}
        />
        <div
          className={`${RECT_CLASS} top-[222.6px] left-[-128.5px] h-[160px] w-[240px]`}
        />
      </div>
    </div>
  );
}

export default function FeaturePixelBook() {
  return (
    <main>
      <FeatureBanner />
      <FeatureTabs />

      <div className="relative isolate overflow-x-clip bg-pink-100 md:pb-6 lg:pb-10">
        <Decor />

        {/* Section 1 — 내 픽셀 */}
        <section className="flex flex-col items-center px-4 pt-[100px] md:px-6 lg:pt-40">
          <Headline
            lead="모으고, 기록해 다시 보는"
            accent="나만의 네컷 보관함"
            ul={[
              `${ASSET_DIR}/pb-underline-md.webp`,
              `${ASSET_DIR}/pb-underline-lg.webp`,
            ]}
            ulClass="md:top-[48px] md:left-[-12.5px] lg:top-[68px] lg:left-[41.5px]"
          />
          <div className="mt-20 flex w-full flex-col items-center gap-10 md:mt-[120px] md:w-[612px] md:items-start lg:mt-[172px] lg:w-full lg:max-w-[1080px] lg:flex-row-reverse lg:gap-20 lg:px-10">
            <div className="flex flex-col items-center text-center md:items-start md:text-left lg:flex-1">
              <Tag className="bg-white pr-4 pl-3 text-sm md:px-6 md:text-base">
                1. 내 픽셀
              </Tag>
              <h3 className="mt-4 font-square text-2xl leading-[1.4] font-extrabold md:text-[32px] lg:text-[40px]">
                날짜와 장소로 모아보는
                <br />
                나만의 네컷 피드
              </h3>
              <p className="mt-6 font-square text-base leading-[1.4] md:text-xl">
                대표사진인 네컷사진을 기준으로
                <br className="md:hidden" /> 언제, 어디서 찍었는지
                <br />
                한눈에 확인할 수 있어요
              </p>
            </div>

            <Phone
              src={`${ASSET_DIR}/pb-phone-feed.webp`}
              alt="날짜별 네컷사진 피드가 보이는 내 픽셀 화면">
              {/* Post detail phone; its long screenshot runs down into section 2 and fades out */}
              <Phone
                src={`${ASSET_DIR}/pb-phone-post.webp`}
                alt="네컷사진, 일기, 추가 사진이 담긴 픽셀 게시물 화면"
                className="absolute top-[533px] left-0 md:top-[306px] md:left-[140px] lg:top-[287px] lg:left-[118px]">
                <div className="absolute top-[1009px] left-[7.5px] h-[326px] w-[224px] bg-linear-to-b from-pink-100/0 via-pink-100/60 via-[26.065%] to-pink-100 to-[51.202%] md:top-[1590px] md:left-4 md:h-[341px] md:w-[300px] md:from-white/0 md:via-white/60 md:to-white lg:top-[1443px] lg:left-5" />
                <Note
                  src={[
                    'pb-note-cover.webp',
                    'pb-note-cover-md.webp',
                    'pb-note-cover-lg.webp',
                  ]}
                  alt="포토부스에서 찍은 네컷사진을 대표사진으로 지정할 수 있어요"
                  className="top-[213px] left-[220.5px] w-[71px] md:top-[-187px] md:left-[157px] md:w-[253.5px] lg:top-[322px] lg:left-[333.5px] lg:w-[415px]"
                />
                <Note
                  src={[
                    'pb-note-diary.webp',
                    'pb-note-diary-md.webp',
                    'pb-note-diary-lg.webp',
                  ]}
                  alt="이 날의 기억을 글로 남겨 추억해보세요!"
                  className="top-[519px] left-[216.5px] w-[72px] md:top-[682px] md:left-[339px] md:w-[188px] lg:top-[674px] lg:left-[319.9px] lg:w-[296.5px]"
                />
                <img
                  loading="lazy"
                  src={`${ASSET_DIR}/pb-note-diary-arrow-md.webp`}
                  alt=""
                  className="absolute top-[719.5px] left-[311.1px] hidden w-[86.5px] max-w-none md:block lg:hidden"
                />
                <Note
                  src={[
                    'pb-note-extra.webp',
                    'pb-note-extra-md.webp',
                    'pb-note-extra-md.webp',
                  ]}
                  alt="추가 사진을 함께 업로드해서 나만의 픽셀 게시물로 저장해봐요"
                  className="top-[942.8px] left-[-52.5px] w-[65.5px] md:top-[1027.3px] md:left-[-180px] md:w-[196.5px] lg:top-[1107.3px] lg:left-[-176px]"
                />
              </Phone>
            </Phone>
          </div>
        </section>

        {/* Section 2 — 픽셀북 (white card on md+) */}
        <section className="relative flex flex-col items-center px-4 pt-[1273px] pb-[653px] md:px-6 md:pt-[1280px] md:pb-[416px] lg:pt-[440px] lg:pb-[411px]">
          <div className="absolute inset-x-6 top-[196px] bottom-0 -z-10 mx-auto hidden max-w-[1200px] rounded-3xl bg-white shadow-[-16px_-16px_40px_0_rgba(0,0,0,0.05)] md:block lg:inset-x-10 lg:top-[181px] lg:rounded-[40px]" />
          <div className="flex w-[287px] flex-col items-center gap-10 md:w-[612px] md:items-end md:gap-20 lg:w-full lg:max-w-[1080px]">
            <div className="flex flex-col items-center text-center md:items-end md:text-right">
              <Tag className="bg-white pr-4 pl-3 text-base md:bg-pink-100 md:px-6">
                2. 픽셀북
              </Tag>
              <h3 className="mt-4 font-square text-2xl leading-[1.4] font-extrabold md:text-[40px]">
                주제별로 모아 정리하는
                <br />
                나만의 픽셀북
              </h3>
              <p className="mt-6 font-square text-base leading-[1.4] md:text-xl">
                카테고리별로 사진을 정리하고,
                <br />
                <span className="hidden md:inline">그 안에서 </span>날짜, 위치와
                함께 일기를 쓸 수 있어요
              </p>
            </div>

            <Phone
              src={`${ASSET_DIR}/pb-phone-books.webp`}
              alt="카테고리별 픽셀북 목록 화면">
              <Phone
                src={`${ASSET_DIR}/pb-phone-list.webp`}
                alt="픽셀북 안의 게시물 목록 화면"
                className="absolute top-[533px] left-0 md:top-[240px] md:left-[-256px] lg:left-[-252px]">
                <Note
                  src={[
                    'pb-note-list.webp',
                    'pb-note-list-md.webp',
                    'pb-note-list-lg.webp',
                  ]}
                  alt="목록으로 사진, 날짜, 위치, 메모를 한눈에 보면서 추억할 수 있어요!"
                  className="top-[358.8px] left-[-40.5px] w-[100px] md:top-[-169px] md:left-0 md:w-[166px] lg:top-[386px] lg:left-[-290px] lg:w-[288px]"
                />
              </Phone>
            </Phone>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
