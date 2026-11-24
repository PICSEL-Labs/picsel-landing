interface FooterProps {
  isDark?: boolean;
}

// Figma: Footer (4231:11729) — Light / Dark × Web / Mobile
export default function Footer({ isDark = false }: FooterProps) {
  const text = isDark ? 'text-white' : 'text-text-high';
  const icon = (name: string) =>
    `/assets/common/icon-${name}${isDark ? '-dark' : ''}.svg`;

  return (
    <footer
      className={`${isDark ? 'bg-ink' : 'bg-white'} px-4 pt-6 pb-20 md:px-[100px]`}>
      <div className="mx-auto flex max-w-[1080px] flex-col gap-6 md:gap-0">
        <div
          className={`flex gap-4 border-t pt-4 text-sm font-bold md:justify-end md:gap-6 md:text-base ${isDark ? 'border-text-high text-text-low' : 'border-line text-text-high'}`}>
          {/* No targets in the design yet */}
          <a href="#" className="px-2 py-3 leading-[1.5]">
            서비스 이용약관
          </a>
          <a href="#" className="px-2 py-3 leading-[1.5]">
            개인정보 처리방침
          </a>
        </div>

        <div className="flex flex-col gap-2 md:h-32">
          <p
            className={`text-base leading-[1.5] font-extrabold ${isDark ? 'text-brand' : 'text-brand-high'}`}>
            Contact
          </p>
          <div>
            <a
              href="mailto:picsel.team@gmail.com"
              className={`flex items-center gap-2 py-3 ${text}`}>
              <img
                loading="lazy"
                src={icon('mail')}
                alt=""
                className="size-6"
              />
              <span className="leading-6 underline">picsel.team@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/picsel_kr"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 py-3 ${text}`}>
              <img
                loading="lazy"
                src={icon('instagram')}
                alt=""
                className="size-6 p-[3px]"
              />
              <span className="leading-6 underline">picsel_kr</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
