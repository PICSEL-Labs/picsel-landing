import Link from 'next/link';

// Exported as out/404.html; Cloudflare Pages serves it with a 404 status for unknown paths.
export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100svh-74px)] flex-col items-center justify-center gap-6 bg-ink px-4 font-square text-white md:min-h-[calc(100svh-88px)]">
      <h1 className="text-2xl font-extrabold md:text-[40px]">
        페이지를 찾을 수 없어요
      </h1>
      <Link
        href="/"
        className="rounded-full bg-brand px-6 py-3 text-base font-bold text-white">
        홈으로 가기
      </Link>
    </main>
  );
}
