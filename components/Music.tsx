import { useMemo, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import isYesterday from 'date-fns/isYesterday';
import { useLatestSong } from 'hooks/useLatestSong';
import Skeleton from './Skeleton';

import { MusicIconProps } from 'lib/interfaces';

const MusicIcon = ({ className }: MusicIconProps) => {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 1H5.5V1.75V9.40135C5.05874 9.14609 4.54643 9 4 9C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15C5.65685 15 7 13.6569 7 12C7 11.9158 6.99653 11.8324 6.98973 11.75H7V11V2.5H13.5V6.90135C13.0587 6.64609 12.5464 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 9.41581 14.9965 9.33243 14.9897 9.25H15V8.5V1.75V1H14.25H6.25ZM10.5 9.5C10.5 10.3284 11.1716 11 12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5ZM2.5 12C2.5 12.8284 3.17157 13.5 4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

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
    <div className="my-8 flex w-full flex-col space-y-2 rounded-lg bg-neutral-200 p-2 transition-all duration-300 hover:shadow dark:bg-neutral-800">
      <div className="flex h-4 truncate pb-px">
        {absoluteDate || playing ? (
          <div className="flex min-w-0 items-center gap-x-1.5">
            <MusicIcon
              className={cn(
                'mt-px',
                playing
                  ? 'animate-pulse text-red-500 dark:text-red-400'
                  : 'text-neutral-500 dark:text-neutral-400'
              )}
            />
            {absoluteDate && (
              <h2 className="truncate text-xs text-neutral-500 dark:text-neutral-400">{`Last played ${relativeDate}`}</h2>
            )}
            {playing && (
              <h2 className="truncate text-xs text-red-500 dark:text-red-400">
                Currently playing
              </h2>
            )}
          </div>
        ) : (
          <Skeleton className="w-40 self-center" />
        )}
      </div>

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
    </div>
  );
};

export default Music;
