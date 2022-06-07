import { useMemo } from 'react';
import Image from 'next/image';
import FadeIn from 'react-fade-in';
import cn from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';

import { useLatestSong } from 'hooks/useLatestSong';
import { useLatestFilm } from 'hooks/useLatestFilm';
import { capitalize } from 'lib/utils';

export function Song() {
  const { title, artist, album, date, cover, playing } = useLatestSong();

  const absoluteDate = useMemo(() => {
    if (!date) return;

    return new Date(date * 1000);
  }, [date]);

  const relativeDate = useMemo(() => {
    if (!absoluteDate) return;

    return isYesterday(absoluteDate)
      ? 'Yesterday'
      : capitalize(formatDistanceToNow(absoluteDate, { addSuffix: true }));
  }, [absoluteDate]);

  return (
    <div className="mt-8 leading-snug text-red-500 transition-all w-fit dark:text-red-400">
      <div className="grid items-center grid-flow-col grid-rows-3 gap-x-4">
        <div className="h-20 row-span-3 overflow-hidden duration-300 ease-in-out rounded aspect-square bg-neutral-200 hover:rotate-3 hover:scale-105 dark:bg-neutral-800">
          {cover && (
            <Image
              className="pointer-events-none"
              alt={title}
              src={cover}
              objectFit="cover"
              width={80}
              height={80}
            />
          )}
        </div>
        <div className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              playing
                ? 'mr-2 h-4 w-4 flex-none animate-pulse'
                : 'mr-2 h-4 w-4 flex-none'
            )}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>

          {absoluteDate && (
            <time
              className="font-mono text-sm font-bold"
              dateTime={absoluteDate.toISOString()}
            >
              <h2 className="font-mono text-sm font-bold">{relativeDate}</h2>
            </time>
          )}
          {playing && (
            <h2 className="font-mono text-sm font-bold">Currently listening</h2>
          )}
        </div>
        <p className="font-bold truncate text-md md:text-md text-neutral-800 dark:text-neutral-300">
          {title}
        </p>
        <p className="text-sm font-medium truncate md:text-md text-neutral-500 dark:text-neutral-400">
          {artist}
          {' — '}
          {album}
        </p>
      </div>
    </div>
  );
}

export function Film() {
  const { date, poster, title, year } = useLatestFilm();

  const absoluteDate = useMemo(() => {
    if (!date) return;

    return new Date(date);
  }, [date]);
  const relativeDate = useMemo(() => {
    if (!absoluteDate) return;

    if (isToday(absoluteDate)) {
      return 'Today';
    } else if (isYesterday(absoluteDate)) {
      return 'Yesterday';
    } else {
      return capitalize(formatDistanceToNow(absoluteDate, { addSuffix: true }));
    }
  }, [absoluteDate]);

  return (
    <div className="mt-8 leading-snug text-green-500 transition-all w-fit dark:text-green-400">
      <div className="grid items-center grid-flow-col grid-rows-3 gap-x-4">
        <div className="relative row-span-3 aspect-[2/3] h-20 flex-none overflow-hidden rounded bg-neutral-200 duration-300 ease-in-out hover:-rotate-3 hover:scale-105 dark:bg-neutral-800">
          {poster && (
            <Image
              className="pointer-events-none"
              alt={title}
              src={poster}
              objectFit="cover"
              layout="fill"
            />
          )}
        </div>
        <div className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-none w-4 h-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>

          {absoluteDate && (
            <time
              className="font-mono text-sm font-bold"
              dateTime={absoluteDate.toISOString()}
            >
              <h2 className="font-mono text-sm font-bold">{relativeDate}</h2>
            </time>
          )}
        </div>
        <p className="font-bold truncate text-md md:text-md text-neutral-800 dark:text-neutral-300">
          {title}
        </p>
        <p className="text-sm font-medium truncate md:text-md text-neutral-500 dark:text-neutral-400">
          {year}
        </p>
      </div>
    </div>
  );
}

export default function Activity() {
  return (
    <FadeIn delay={800} transitionDuration={800}>
      <div className="mt-16 leading-snug">
        <h2 className="mt-10 mb-8 text-lg font-bold text-black dark:text-neutral-200">
          Activity
        </h2>
        <Song />
        <Film />
      </div>
    </FadeIn>
  );
}
