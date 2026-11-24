interface HeadlineProps {
  lead: string;
  accent: string;
  /** Brush underline images for [md, lg], exported at 2x so `2x` keeps them at design size. */
  ul: [string, string];
  /** Positions the underline. */
  ulClass: string;
}

// Big centered section title with the brush underline (md+).
export default function Headline({ lead, accent, ul, ulClass }: HeadlineProps) {
  return (
    <h2 className="relative w-fit text-center text-2xl leading-[1.4] font-bold md:text-[32px] lg:text-[48px]">
      {lead}
      <br className="md:hidden" />{' '}
      <span className="font-extrabold text-brand-high">{accent}</span>
      <picture>
        <source media="(min-width: 1024px)" srcSet={`${ul[1]} 2x`} />
        <source srcSet={`${ul[0]} 2x`} />
        <img
          loading="lazy"
          src={ul[0]}
          alt=""
          className={`absolute hidden max-w-none md:block ${ulClass}`}
        />
      </picture>
    </h2>
  );
}
