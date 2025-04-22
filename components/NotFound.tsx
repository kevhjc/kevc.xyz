import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-lg text-black dark:text-neutral-200">
        <div className="flex items-center gap-x-4 font-mono">
          <span className="font-bold">404</span>
          <span className="text-neutral-400 dark:text-neutral-400">
            Page not found
          </span>
        </div>
      </h2>
      <p className="text-neutral-800 dark:text-neutral-200">
        All those hyperlinks will be lost in time… like tears in rain.
      </p>
      <Link href="/">
        <button className="my-8 flex w-fit cursor-pointer items-center gap-2 rounded bg-neutral-200 p-2 px-4 text-sm text-black transition-all duration-300 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
          Go back home
        </button>
      </Link>
    </div>
  );
}
