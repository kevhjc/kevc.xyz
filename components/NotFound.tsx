import Link from 'next/link';

function ArrowLeft() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default function NotFound() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-black dark:text-neutral-200">
        {'404'}
        <span className="font-mono text-lg text-neutral-400 dark:text-neutral-400">
          {' – Page not found'}
        </span>
      </h2>
      <p className="mb-6 text-neutral-800 dark:text-neutral-200">
        {"Hmm, it looks like the page you're looking for doesn't exist."}
      </p>
      <Link href="/">
        <button className="flex cursor-pointer items-center gap-2 rounded bg-neutral-200 p-2 px-4 text-sm text-black transition-all duration-300 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
          <ArrowLeft />
          Go back home
        </button>
      </Link>
    </div>
  );
}
