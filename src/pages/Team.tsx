import { Fragment } from 'react';

import Footer from '@/widgets/layout/Footer';

// Figma: 팀원소개 — Desktop 4120:46944 / Tablet 4783:17306 / Mobile 4783:18191
// Content follows the newer Tablet/Mobile frames; Desktop still has the old role, tags, order and a 60%-faded last card.
const MEMBERS = [
  {
    role: 'Product Manager',
    en: 'Kim Kyeongjin',
    ko: '김경진',
    tags: ['#서비스기획', '#ENTP'],
    img: 'kyeongjin',
  },
  {
    role: 'Product Designer',
    en: 'Jeong Daeun',
    ko: '정다은',
    tags: ['#UXUI디자인', '#INFP'],
    img: 'daeun',
  },
  // No GitHub URL in the design yet
  {
    role: 'Frontend Developer',
    en: 'Kim Hyunjung',
    ko: '김현중',
    tags: ['#프론트엔드', '#ENTJ'],
    img: 'hyunjung',
    github: '#',
  },
  {
    role: 'Frontend Developer',
    en: 'Chae Surin',
    ko: '채수린',
    tags: ['#프론트엔드', '#ESTP'],
    img: 'surin',
  },
  {
    role: 'Backend Developer',
    en: 'Cho Junhee',
    ko: '조준희',
    tags: ['#백엔드', '#ENFP'],
    img: 'junhee',
  },
];

// Figma stroke: 2px linear gradient (pink-300 → brand) at 50% paint opacity; the padding-box layer masks the inside.
const CARD_BORDER_STYLE = {
  background:
    'linear-gradient(#111114, #111114) padding-box, linear-gradient(117deg, rgba(254,205,221,0.05), rgba(254,205,221,0.5) 13.46%, rgba(255,179,202,0.5) 64.9%, rgba(255,108,154,0.5)) border-box',
};

export default function Team() {
  return (
    <main className="bg-ink">
      <section className="flex flex-col items-center gap-[120px] py-10 md:py-20 lg:pb-40">
        <div className="flex w-full flex-col items-center gap-4">
          <h1 className="p-2.5 text-2xl leading-[1.5] font-extrabold text-pink-300 md:text-[40px]">
            Team <span className="text-brand">PICSEL</span>
          </h1>
          <div className="flex h-[222px] w-full items-center justify-center px-4 pt-8 pb-10">
            <p className="text-center leading-[1.5] text-white md:text-xl">
              안녕하세요.
              <br />
              포토부스에서 찍은 특별한 순간을
              <br className="md:hidden" /> 더 오래 남길 수 있도록
              <br />
              Picsel을 함께 만들어가는
              <br className="md:hidden" /> Team Picsel입니다.
              <br />
              <br />
              앞으로의 Picsel의
              <br className="md:hidden" /> 꾸준한 성장을 응원해주세요💗
            </p>
          </div>
          {/* The button has no link in the design; it goes to the Instagram account shown in the Footer. */}
          <a
            href="https://www.instagram.com/picsel_kr"
            target="_blank"
            rel="noreferrer"
            className="flex h-[50px] items-center gap-1 rounded-3xl bg-brand px-6 leading-[1.5] font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
            <img
              src="/assets/common/icon-instagram-dark.svg"
              alt=""
              className="size-6 p-[2.2px]"
            />
            Instagram 구경가기
          </a>
        </div>

        <div className="flex w-full flex-col items-center gap-16 px-4 md:px-6 lg:gap-20 lg:px-[100px]">
          {MEMBERS.map(m => (
            <article
              key={m.en}
              style={CARD_BORDER_STYLE}
              className="relative w-full max-w-[400px] rounded-[40px] border-2 border-transparent px-4 pt-8 pb-6 md:w-auto md:max-w-none md:rounded-[64px] md:px-12 md:pt-10 md:pb-12 lg:px-20 lg:pt-14 lg:pb-16">
              <h2 className="absolute top-[-22px] left-[14px] bg-ink px-4 py-2 font-square leading-[1.5] font-bold whitespace-nowrap text-pink-300 md:top-[-39px] md:left-[45px] md:px-6 md:py-4 md:text-xl lg:text-[28px]">
                {m.role.split(' ').map((w, i) => (
                  <Fragment key={w}>
                    {i > 0 && ' '}
                    <span className="text-brand">{w[0]}</span>
                    {w.slice(1)}
                  </Fragment>
                ))}
              </h2>
              <div className="flex items-center justify-center gap-6 md:gap-16">
                <img
                  src={`/assets/team/avatar-${m.img}.webp`}
                  alt=""
                  className="size-20 md:size-60"
                />
                <div className="flex flex-col gap-6 md:w-64 md:gap-10">
                  <div className="flex flex-col gap-3 font-square leading-[1.4] font-extrabold">
                    <p className="text-xl text-brand-high md:text-2xl lg:text-[32px]">
                      {m.en}
                    </p>
                    <p className="flex items-center text-white md:text-xl lg:text-2xl">
                      {m.ko}
                      {m.github && (
                        <a
                          href={m.github}
                          aria-label={`${m.ko} GitHub`}
                          className="p-3">
                          <img
                            loading="lazy"
                            src="/assets/team/icon-github.svg"
                            alt=""
                            className="size-6"
                          />
                        </a>
                      )}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {m.tags.map((t, i) => (
                      <span
                        key={t}
                        className={`rounded-[27px] px-3 py-1 text-sm leading-[1.5] font-extrabold whitespace-nowrap text-brand md:px-4 md:py-2 md:text-base ${i ? 'bg-pink-300' : 'bg-pink-100'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer isDark />
    </main>
  );
}
