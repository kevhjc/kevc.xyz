import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';

import { ExternalLinkProps } from 'lib/interfaces';

export default function ExternalLink({ name, href, src }: ExternalLinkProps) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover className="relative inline-block">
      {() => (
        <Fragment>
          <a
            className="text-neutral-700 underline decoration-neutral-400 decoration-1 underline-offset-2 transition duration-100 hover:text-neutral-900 hover:decoration-neutral-900 focus:text-neutral-500 focus:ring-neutral-500 dark:text-neutral-300 dark:decoration-neutral-500 dark:hover:text-neutral-200 dark:hover:decoration-neutral-200 dark:focus:text-neutral-400 dark:focus:ring-neutral-400/40"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
          >
            {name}
          </a>
          {src && (
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
                    <Image
                      className="rounded-md"
                      alt={name}
                      src={src}
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          )}
        </Fragment>
      )}
    </Popover>
  );
}
