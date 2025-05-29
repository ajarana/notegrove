import Link from "next/link";

export default function Notes() {
  return (
    <div className="dark bg-gray-950 grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="dark:invert flex flex-col gap-[32px] row-start-2 items-start">
        <h1 className="text-3xl">Notes</h1>
        <Link
          className="rounded-full border border-solid border-black/[.2] transition-colors flex items-center justify-center hover:bg-[#ddd] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          href="/"
        >
          Home
        </Link>
      </main>
    </div>
  );
}
