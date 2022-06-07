import NextLink from 'next/link';

export default function NotFound() {
  return (
    <div className="leading-loose">
      <h2 className="mb-4 text-lg font-bold text-black dark:text-neutral-200">
        {'404'}
        <span className="font-serif text-xl font-medium italic text-neutral-500 dark:text-neutral-400">
          {' — Page not found'}
        </span>
      </h2>
      <p className="mb-6 text-neutral-800 dark:text-neutral-200">
        {`Looks like the page you're looking for doesn't exist.`}
      </p>
      <NextLink href="/">
        <button className="cursor-pointer rounded bg-neutral-200 p-2 px-4 text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
          Go home &rarr;
        </button>
      </NextLink>
    </div>
  );
}
