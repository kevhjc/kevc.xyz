import Image from 'next/image';
import Link from 'next/link';
import FadeIn from 'react-fade-in';

import { REACTRIX, CLEMENTINE, BOOKMARKR } from 'lib/contants';
import ProjectLink from './ProjectLink';

export default function Information() {
  return (
    <FadeIn delay={200} transitionDuration={800}>
      <div className="leading-loose">
        <div className="grid items-center grid-rows-2 duration-300 ease-in-out md:grid-cols-4 md:grid-rows-1">
          <div className="relative w-24 h-24 col-span-1">
            <Image
              className="rounded-full dark:invert"
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
            <h2 className="font-black text-black dark:text-neutral-200">
              Kevin H. Chung
            </h2>
            Software engineer based in Los Angeles, California.
          </div>
        </div>
        <div className="mt-8 text-neutral-800 dark:text-neutral-200">
          Currently prototyping React applications at{' '}
          <ProjectLink {...REACTRIX} />, saving thoughts &#38; ideas at{' '}
          <ProjectLink {...CLEMENTINE} />, and collecting links at{' '}
          <ProjectLink {...BOOKMARKR} />.
        </div>
      </div>
    </FadeIn>
  );
}
