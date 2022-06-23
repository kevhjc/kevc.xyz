import Image from 'next/image';
import Link from 'next/link';
import FadeIn from 'react-fade-in';

import { REACTRIX, CLEMENTINE, BOOKMARKR, VAVLT } from 'lib/contants';
import ProjectLink from './ProjectLink';

export default function Information() {
  return (
    <FadeIn delay={200} transitionDuration={800}>
      <div className="leading-loose">
        <div className="flex">
          <div className="relative w-24 h-24 duration-300 ease-in-out hover:scale-105">
            <Link href="/">
              <Image
                className="rounded-full dark:invert"
                priority={true}
                alt="Avatar"
                src="/avatar.png"
                layout="fill"
              />
            </Link>
            <span className="absolute flex items-center justify-center w-8 h-8 m-auto text-center rounded-full pointer-events-none z-2 -top-1 -right-1 animate-gradient bg-gradient-to-r from-violet-400 via-emerald-400 to-rose-400">
              ✌️
            </span>
          </div>
        </div>
        <h2 className="mt-5 text-lg font-semibold text-black dark:text-neutral-200">
          Kevin H. Chung
        </h2>
        <div className="mt-3 text-neutral-800 dark:text-neutral-200">
          Software engineer based in{' '}
          <span className="font-serif text-lg italic">
            Los Angeles, California.
          </span>
        </div>
        <div className="mt-3 text-neutral-800 dark:text-neutral-200">
          Prototyping React applications at <ProjectLink {...REACTRIX} />,
          saving thoughts & ideas at <ProjectLink {...CLEMENTINE} />, and
          collecting links at <ProjectLink {...BOOKMARKR} />.
        </div>
      </div>
    </FadeIn>
  );
}
