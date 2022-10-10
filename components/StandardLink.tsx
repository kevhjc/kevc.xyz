import { StandardLinkProps } from 'lib/interfaces';

export default function StandardLink({
  name,
  href,
  icon: Icon,
}: StandardLinkProps) {
  return (
    <a
      className="flex items-center justify-center px-2 font-medium transition duration-100 rounded-md w-fit bg-neutral-200 text-neutral-600 hover:bg-neutral-300 hover:text-black dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center gap-2">
        <Icon />
        {name}
      </span>
    </a>
  );
}
