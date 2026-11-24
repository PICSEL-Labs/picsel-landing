import type { ReactNode } from 'react';

interface TagProps {
  className: string;
  children: ReactNode;
}

export default function Tag({ className, children }: TagProps) {
  return (
    <p
      className={`w-fit rounded-full py-2 font-round leading-[1.5] font-extrabold text-brand ${className}`}>
      {children}
    </p>
  );
}
