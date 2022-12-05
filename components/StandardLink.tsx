import { StandardLinkProps } from 'lib/interfaces';

export default function StandardLink({
  name,
  href,
  icon: Icon,
}: StandardLinkProps) {
  return (
    <a
      className="w-fit items-center justify-center rounded-md bg-neutral-200/50 px-2 transition duration-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="m-2 flex items-center gap-2 sm:m-0">
        <Icon />
        <span className="hidden sm:inline">{name}</span>
      </span>
    </a>
  );
}
