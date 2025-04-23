import Link from 'next/link';
import Image from 'next/image';

const ArrowIcon = () => {
  return (
    <svg width="12" height="12" strokeLinejoin="round" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 3V2.25H15V3V10C15 10.5523 14.5523 11 14 11H3.56068L5.53035 12.9697L6.06068 13.5L5.00002 14.5607L4.46969 14.0303L1.39647 10.9571C1.00595 10.5666 1.00595 9.93342 1.39647 9.54289L4.46969 6.46967L5.00002 5.93934L6.06068 7L5.53035 7.53033L3.56068 9.5H13.5V3Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const NotFound = () => {
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

      <Image
        src="/roy.gif"
        alt="roy"
        width={480}
        height={197}
        className="pointer-events-none rounded-lg"
      />

      <p className="text-neutral-800 dark:text-neutral-200">
        All those hyperlinks will be lost in time, like tears in rain.
      </p>

      <Link href="/">
        <button className="mt-4 flex w-fit cursor-pointer items-center gap-2 rounded bg-neutral-200 p-2 px-4 text-sm text-black transition-all duration-300 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
          <ArrowIcon />
          Go back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
