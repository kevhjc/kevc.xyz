import NextLink from 'next/link';

export default function NotFound() {
  return (
    <div className="leading-loose">
      <h2 className="mb-4 text-lg font-semibold text-black dark:text-neutral-200">
        {'404'}
        <span className="font-serif text-xl italic font-medium text-neutral-500 dark:text-neutral-400">
          {' — Page not found'}
        </span>
      </h2>
      <p className="mb-6 text-neutral-800 dark:text-neutral-300">
        Looks like the page you're looking for doesn't exist.
      </p>
      <NextLink href="/">
        <button className="p-2 px-4 text-sm font-medium text-black transition-all duration-300 rounded cursor-pointer bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
          Go home &rarr;
        </button>
      </NextLink>
    </div>
  );
}
