import { useMemo } from 'react';
import Image from 'next/image';
import FadeIn from 'react-fade-in';
import cn from 'classnames';
import isYesterday from 'date-fns/isYesterday';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { useLatestSong } from '../hooks/useLatestSong';

export default function Activity() {
  const { title, artist, album, date, year, cover, playing } = useLatestSong();

  const absoluteDate = useMemo(() => {
    if (!date) return;

    return new Date(date * 1000);
  }, [date]);

  const relativeDate = useMemo(() => {
    if (!absoluteDate) return;

    return isYesterday(absoluteDate)
      ? 'Yesterday'
      : formatDistanceToNow(absoluteDate, { addSuffix: true });
  }, [absoluteDate]);

  return (
    <FadeIn delay={500} transitionDuration={800}>
      <div className="mt-16 font-medium leading-loose text-red-500 transition-all w-fit dark:text-red-400">
        <div className="flex justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              playing
                ? 'mr-2 mt-[8px] h-4 w-4 flex-none animate-pulse'
                : 'mr-2 mt-[8px] h-4 w-4 flex-none'
            )}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>

          {absoluteDate && (
            <time
              className="mb-2 font-semibold"
              dateTime={absoluteDate.toISOString()}
            >
              {relativeDate}
            </time>
          )}
          {playing && (
            <h2 className="mb-2 font-semibold">Currently listening to</h2>
          )}
        </div>

        <div className="grid items-center grid-flow-col gap-4 mt-4">
          <div className="h-20 overflow-hidden rounded aspect-square bg-neutral-200 dark:bg-neutral-800">
            {cover && (
              <Image
                priority={true}
                alt="Album artwork"
                src={cover}
                objectFit="cover"
                width={200}
                height={200}
              />
            )}
          </div>
          <div>
            <p className="text-lg font-semibold leading-snug text-neutral-800 dark:text-neutral-300">
              {title}
            </p>
            <p className="text-sm font-medium leading-snug text-neutral-500 dark:text-neutral-400">
              {artist}
              {' — '}
              {album}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
