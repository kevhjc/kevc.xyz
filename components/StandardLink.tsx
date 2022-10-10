import cn from 'classnames';
import { StandardLinkProps } from 'lib/interfaces';

export default function StandardLink({
  name,
  href,
  icon: Icon,
}: StandardLinkProps) {
  return (
    <a
      className="flex items-center justify-center px-2 transition duration-200 rounded-md w-fit bg-neutral-200/50 text-neutral-600 hover:bg-neutral-300/50 hover:text-black dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center gap-2 py-1 m-2 sm:m-0">
        <Icon />
        <span className="hidden sm:inline">{name}</span>
      </span>
    </a>
  );
}
