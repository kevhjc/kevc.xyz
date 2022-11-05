import Image from 'next/image';
import { AVOMA, REACTRIX, CLEMENTINE, BOOKMARKR } from 'lib/contants';
import ProjectLink from './ProjectLink';

export default function Information() {
  return (
    <div className="leading-loose">
      <div className="grid grid-rows-2 items-center duration-300 ease-in-out sm:grid-cols-4 sm:grid-rows-1">
        <div className="relative col-span-1 h-24 w-24">
          <Image
            className="rounded-full"
            alt="Avatar"
            src="/avatar.png"
            width={200}
            height={200}
          />
          <span className="z-2 pointer-events-none absolute -top-1 -right-1 m-auto flex h-8 w-8 animate-gradient items-center justify-center rounded-full bg-gradient-to-tr from-lime-400 via-sky-400 to-rose-400 text-center">
            ✌️
          </span>
        </div>
        <div className="col-span-3 grid pt-2 sm:pt-0">
          <h2 className="font-bold text-neutral-800 dark:text-neutral-200">
            Kevin H. Chung
          </h2>
          <span>Software engineer based in Los Angeles, CA.</span>
        </div>
      </div>
      <div className="mt-2 text-neutral-800 sm:mt-12 dark:text-neutral-200">
        {'Currently making meetings more productive at '}
        <ProjectLink {...AVOMA} />
        {'. Previously optimized application performance at '}
        <ProjectLink {...REACTRIX} />
        {'.'}
      </div>
      <div className="mt-2 text-neutral-800 sm:mt-6 dark:text-neutral-200">
        {'Saving thoughts & ideas at '}
        <ProjectLink {...CLEMENTINE} />
        {' and collecting hyperlinks at '}
        <ProjectLink {...BOOKMARKR} />
        {' to explore new tools and libraries.'}
      </div>
    </div>
  );
}
