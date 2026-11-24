import type { ReactNode } from 'react';

interface PhoneProps {
  src: string;
  alt: string;
  /** Pass `absolute …` to position it, else it's `relative`. */
  className?: string;
  children?: ReactNode;
}

// Phone mockup box (240 / 332 wide). The export bakes in the drop shadow: the 332×682 phone sits at
// (84.8, 32) inside the 465px-wide image.
export default function Phone({
  src,
  alt,
  className = 'relative',
  children,
}: PhoneProps) {
  return (
    <div
      className={`aspect-[332/682] w-[240px] shrink-0 md:w-[332px] ${className}`}>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="absolute top-[-4.69%] left-[-25.54%] w-[140.06%] max-w-none"
      />
      {children}
    </div>
  );
}
