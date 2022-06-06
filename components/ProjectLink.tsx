import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import cn from 'classnames';

import { ProjectProps } from 'lib/interfaces';

export default function ProjectLink({ name, href, src }: ProjectProps) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="z-10 inline-block">
      <Popover className="relative">
        {() => (
          <>
            <a
              className={cn(
                name === 'Reactrix'
                  ? 'font-medium underline decoration-rose-500 decoration-2 underline-offset-4 transition duration-100 hover:text-rose-500 hover:decoration-rose-500/30 focus:text-rose-500 focus:ring-rose-500/40 dark:text-white dark:decoration-rose-400 dark:hover:text-rose-400 dark:hover:decoration-rose-400/30 dark:focus:text-rose-400 dark:focus:ring-rose-400/40'
                  : name === 'Clementine'
                  ? 'rounded-sm font-medium underline decoration-amber-500 decoration-2 underline-offset-4 transition duration-100 hover:text-amber-500 hover:decoration-amber-500/30 focus:text-amber-500 focus:ring-amber-500/40 dark:text-white dark:decoration-amber-400 dark:hover:text-amber-400 dark:hover:decoration-amber-400/30 dark:focus:text-amber-400 dark:focus:ring-amber-400/40'
                  : name === 'Bookmarkr'
                  ? 'rounded-sm font-medium underline decoration-blue-500 decoration-2 underline-offset-4 transition duration-100 hover:text-blue-500 hover:decoration-blue-500/30 focus:text-blue-500 focus:ring-blue-500/40 dark:text-white dark:decoration-blue-400 dark:hover:text-blue-400 dark:hover:decoration-blue-400/30 dark:focus:text-blue-400 dark:focus:ring-blue-400/40'
                  : name === 'Vavlt'
                  ? 'rounded-sm font-medium underline decoration-emerald-500 decoration-2 underline-offset-4 transition duration-100 hover:text-emerald-500 hover:decoration-emerald-500/30 focus:text-emerald-500 focus:ring-emerald-500/40 dark:text-white dark:decoration-emerald-400 dark:hover:text-emerald-400 dark:hover:decoration-emerald-400/30 dark:focus:text-emerald-400 dark:focus:ring-emerald-400/40'
                  : ''
              )}
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => setIsShowing(false)}
            >
              {name}
            </a>
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-1 w-[80px]">
                <div className="overflow-hidden">
                  <div className="relative">
                    <Image alt={name} src={src} width={80} height={80} />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
