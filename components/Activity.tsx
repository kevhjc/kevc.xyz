import Image from 'next/image';
import { useLastFM } from 'use-last-fm';
import FadeIn from 'react-fade-in';

export default function Activity() {
  const lastFM = useLastFM(
    'kevhjc',
    process.env.NEXT_PUBLIC_LASTFM_API_KEY || '',
    undefined,
    'extralarge'
  );

  return (
    <>
      {lastFM.status === 'playing' && (
        <FadeIn delay={300}>
          <div className="mt-16 font-medium leading-loose text-red-500 transition-all w-fit dark:text-red-400">
            <div className="flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 mt-[8px] h-4 w-4 flex-none animate-pulse"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>

              <h2 className="mb-2 font-black text-red-500 dark:text-red-400">
                Currently Playing
              </h2>
            </div>

            <div className="grid items-center grid-flow-col gap-4 mt-4">
              <div className="h-20 overflow-hidden rounded aspect-square bg-neutral-100 dark:bg-neutral-800">
                <Image
                  priority={true}
                  alt="Album artwork"
                  src={lastFM.song.art}
                  objectFit="cover"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <p className="text-lg font-black leading-snug text-neutral-800 dark:text-neutral-300">
                  {lastFM.song.name}
                </p>
                <p className="text-sm font-semibold leading-snug text-neutral-500 dark:text-neutral-400">
                  {lastFM.song.artist}
                  {' — '}
                  {lastFM.song.album}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
}
