import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';

import { ProjectProps } from 'lib/interfaces';

export default function ProjectLink({ name, href, src, style }: ProjectProps) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="z-10 inline-block">
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button
              className={style}
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => setIsShowing(false)}
            >
              <a href={href} rel="noopener noreferrer" target="_blank">
                {name}
              </a>
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transition ease-out duration-200"
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
                      priority={true}
                      alt={name}
                      src={src}
                      width={200}
                      height={200}
                    />
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
