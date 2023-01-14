import { useMemo } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import isYesterday from 'date-fns/isYesterday';
import { useLatestSong } from 'hooks/useLatestSong';
import { capitalize } from 'lib/utils';

import Skeleton from './Skeleton';

export default function Music() {
  const { title, artist, album, date, cover, url, playing } = useLatestSong();

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
    <div className="p-4 sm:mb-4">
      <div className="grid w-fit grid-flow-col grid-rows-3 items-center gap-x-4 transition-all">
        <div className="row-span-3 aspect-square h-16 w-16 overflow-hidden rounded-sm bg-neutral-200 duration-300 ease-in-out hover:scale-105 dark:bg-neutral-800">
          {cover && (
            <a href={url} rel="noopener noreferrer" target="_blank">
              <Image
                alt={title}
                src={cover}
                objectFit="cover"
                width={500}
                height={500}
              />
            </a>
          )}
        </div>
        {absoluteDate || playing ? (
          <div className="flex items-center justify-start text-red-500 dark:text-red-400">
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
              <h2 className="font-mono text-xs font-bold">{relativeDate}</h2>
            )}
            {playing && (
              <h2 className="truncate font-mono text-xs font-bold">
                Currently listening
              </h2>
            )}
          </div>
        ) : (
          <Skeleton className="h-[0.75rem] w-40" />
        )}
        {title ? (
          <span className="truncate text-base text-neutral-800 dark:text-neutral-200">
            {title}
          </span>
        ) : (
          <Skeleton className="h-[1rem] w-28" />
        )}
        {artist ? (
          <span className="truncate text-sm text-neutral-500 dark:text-neutral-400">
            {artist}
          </span>
        ) : (
          <Skeleton className="h-[1rem] w-28" />
        )}
      </div>
    </div>
  );
}
