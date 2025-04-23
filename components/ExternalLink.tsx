import { useState } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { ExternalLinkProps } from 'lib/interfaces';

const ArrowIcon = () => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ExternalLink = ({ name, href, src, showArrow }: ExternalLinkProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <Popover className="relative inline-block">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-1 text-neutral-500 underline underline-offset-4 transition-all hover:text-neutral-900 hover:no-underline dark:text-neutral-300 dark:hover:text-neutral-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {name}
        {showArrow && <ArrowIcon />}
      </a>

      {src && (
        <Transition
          as="div"
          show={isHovered}
          enter="transition-opacity duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Panel className="absolute z-10 mt-1 w-[60px]">
            <div className="overflow-hidden rounded-md">
              <Image
                src={src}
                alt={name}
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
          </Popover.Panel>
        </Transition>
      )}
    </Popover>
  );
};

export default ExternalLink;
