import { useMemo } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import isYesterday from 'date-fns/isYesterday';
import { useLatestSong } from 'hooks/useLatestSong';

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
      ? 'yesterday'
      : formatDistanceToNow(absoluteDate, { addSuffix: true });
  }, [absoluteDate]);

  return (
    <div className="my-8 flex w-full flex-col space-y-2 rounded-lg bg-neutral-200 p-1 dark:bg-neutral-800">
      <div className="flex w-full items-center gap-x-3 rounded-md bg-neutral-100 p-2 drop-shadow transition-all dark:bg-neutral-700">
        <div className="flex aspect-square h-12 w-12 flex-shrink-0 overflow-hidden rounded-sm bg-neutral-200 transition-all duration-300 ease-in-out hover:scale-105 dark:bg-neutral-800">
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

        <div
          className={cn(
            'flex w-full max-w-sm flex-col truncate',
            !(title || artist) && 'gap-y-2'
          )}
        >
          {title ? (
            <span className="truncate text-sm text-neutral-800 dark:text-neutral-200">
              {title}
            </span>
          ) : (
            <Skeleton className="h-3 w-60" />
          )}

          {artist ? (
            <span className="truncate text-sm text-neutral-500 dark:text-neutral-300">
              {`${artist} – ${album}`}
            </span>
          ) : (
            <Skeleton className="h-3 w-40" />
          )}
        </div>
      </div>

      <div className="ml-1 flex h-4 truncate pb-1">
        {absoluteDate || playing ? (
          <div className="flex min-w-0 items-center justify-start gap-x-2">
            <div
              className={cn(
                'flex h-2 w-2 flex-shrink-0 rounded-full',
                playing && 'animate-pulse bg-red-500',
                absoluteDate && 'bg-neutral-400 dark:bg-neutral-500'
              )}
            />

            {absoluteDate && (
              <h2 className="overflow-hidden truncate whitespace-nowrap text-xs text-neutral-500 dark:text-neutral-400">
                Last played {relativeDate}
              </h2>
            )}

            {playing && (
              <h2 className="overflow-hidden truncate whitespace-nowrap text-xs text-red-500 dark:text-red-400">
                Now playing
              </h2>
            )}
          </div>
        ) : (
          <Skeleton className="h-3 w-40" />
        )}
      </div>
    </div>
  );
}
