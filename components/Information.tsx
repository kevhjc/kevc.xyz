import Image from 'next/image';
import FadeIn from 'react-fade-in';

import { REACTRIX, CLEMENTINE, BOOKMARKR, VAVLT } from 'lib/contants';
import ProjectLink from './ProjectLink';

export default function Information() {
  return (
    <FadeIn delay={200} transitionDuration={800}>
      <div className="leading-loose">
        <div className="flex">
          <div className="relative w-24 h-24 duration-500 ease-in-out hover:scale-105">
            <Image
              priority={true}
              className="rounded-full dark:invert"
              alt="Avatar"
              src="/avatar.png"
              layout="fill"
            />
            <span className="absolute w-8 h-8 m-auto my-1 text-center rounded-full pointer-events-none z-2 -top-2 -right-1 animate-gradient bg-gradient-to-r from-emerald-400 via-sky-400 to-rose-400">
              ✌️
            </span>
          </div>
        </div>
        <h2 className="mt-6 text-lg font-semibold text-black dark:text-neutral-200">
          Kevin H. Chung
        </h2>
        <div className="mt-4 text-neutral-800 dark:text-neutral-300">
          Software engineer based in{' '}
          <span className="font-serif text-lg italic">
            Los Angeles, California
          </span>
          .
        </div>
        <div className="mt-4 text-neutral-800 dark:text-neutral-300">
          Prototyping React applications at <ProjectLink {...REACTRIX} />,
          saving thoughts & ideas at <ProjectLink {...CLEMENTINE} />, collecting
          links at <ProjectLink {...BOOKMARKR} />, and occasionally posting
          outfits at <ProjectLink {...VAVLT} />.
        </div>
        <div className="mt-4 text-neutral-800 dark:text-neutral-300">
          Building projects and experimenting with new tools & libraries in the
          open.
        </div>
      </div>
    </FadeIn>
  );
}
