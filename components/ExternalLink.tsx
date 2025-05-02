import { useState } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { ExternalLinkProps } from 'lib/interfaces';

const ArrowIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className="-mt-1"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const ExternalLink = ({ name, href, src, showArrow }: ExternalLinkProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Popover className="relative inline-block">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-1 text-neutral-600 underline underline-offset-4 transition-all hover:text-neutral-900 hover:no-underline dark:text-neutral-300 dark:hover:text-neutral-100"
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
