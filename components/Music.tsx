import { useMemo, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import isYesterday from 'date-fns/isYesterday';
import { useLatestSong } from 'hooks/useLatestSong';
import Skeleton from './Skeleton';

const Music = () => {
  const { title, artist, album, date, cover, url, playing } = useLatestSong();

  const [isLoading, setLoading] = useState<boolean>(true);

  const absoluteDate = useMemo(
    () => (date ? new Date(date * 1000) : null),
    [date]
  );

  const relativeDate = useMemo(
    () =>
      absoluteDate
        ? isYesterday(absoluteDate)
          ? 'yesterday'
          : formatDistanceToNow(absoluteDate, { addSuffix: true })
        : null,
    [absoluteDate]
  );

  return (
    <div className="my-8 flex w-full flex-col space-y-2 rounded-lg bg-neutral-200 p-2 dark:bg-neutral-800">
      <div className="flex w-full items-center gap-x-3 rounded-md bg-neutral-100 p-2 shadow transition-all dark:bg-neutral-700">
        <div className="flex aspect-square h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-neutral-200 transition-all duration-300 ease-in-out hover:scale-105 dark:bg-neutral-800">
          {cover && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Image
                src={cover}
                alt={title}
                width={500}
                height={500}
                objectFit="cover"
                onLoadingComplete={() => setLoading(false)}
                className={cn(isLoading ? 'blur-lg' : 'blur-0')}
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
            <span className="truncate text-sm text-neutral-700 dark:text-neutral-300">
              {title}
            </span>
          ) : (
            <Skeleton className="w-60" />
          )}
          {artist ? (
            <span className="truncate text-sm text-neutral-600 dark:text-neutral-400">{`${artist} – ${album}`}</span>
          ) : (
            <Skeleton className="w-40" />
          )}
        </div>
      </div>

      <div className="ml-1 flex h-4 truncate pb-px">
        {absoluteDate || playing ? (
          <div className="flex min-w-0 items-center gap-x-2">
            <div
              className={cn('flex h-2 w-2 flex-shrink-0 rounded-full', {
                'animate-pulse bg-red-500': playing,
                'bg-neutral-300 dark:bg-neutral-600': absoluteDate,
              })}
            />
            {absoluteDate && (
              <h2 className="truncate text-xs text-neutral-500 dark:text-neutral-400">{`Last played ${relativeDate}`}</h2>
            )}
            {playing && (
              <h2 className="truncate text-xs text-red-500 dark:text-red-400">
                Now playing
              </h2>
            )}
          </div>
        ) : (
          <Skeleton className="w-40 self-center" />
        )}
      </div>
    </div>
  );
};

export default Music;
