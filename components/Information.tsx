import Image from 'next/image';
import { REACTRIX, CLEMENTINE, BOOKMARKR } from 'lib/contants';
import ProjectLink from './ProjectLink';

export default function Information() {
  return (
    <div className="leading-loose">
      <div className="grid items-center grid-rows-2 duration-300 ease-in-out md:grid-cols-4 md:grid-rows-1">
        <div className="relative w-24 h-24 col-span-1">
          <Image
            className="rounded-full"
            alt="Avatar"
            src="/avatar.png"
            width={200}
            height={200}
          />
          <span className="absolute flex items-center justify-center w-8 h-8 m-auto text-center rounded-full pointer-events-none z-2 -top-1 -right-1 animate-gradient bg-gradient-to-r from-violet-400 via-emerald-400 to-rose-400">
            ✌️
          </span>
        </div>
        <div className="grid col-span-3 pt-2 md:pt-0">
          <h2 className="font-bold text-black dark:text-neutral-200">
            Kevin H. Chung
          </h2>
          {'Software engineer based in Los Angeles, CA.'}
        </div>
      </div>
      <div className="mt-2 text-neutral-800 md:mt-12 dark:text-neutral-200">
        {'Currently prototyping applications at '}
        <ProjectLink {...REACTRIX} />
        {', saving thoughts & ideas at '}
        <ProjectLink {...CLEMENTINE} />
        {', and collecting hyperlinks at '}
        <ProjectLink {...BOOKMARKR} />
        {'.'}
      </div>
      <div className="mt-6 text-neutral-800 dark:text-neutral-200">
        {'Building ideas and experimenting with new tools in the open.'}
      </div>
    </div>
  );
}
