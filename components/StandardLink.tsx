import { StandardLinkProps } from 'lib/interfaces';

export default function StandardLink({ name, href }: StandardLinkProps) {
  return (
    <a
      className="font-medium underline transition duration-100 text-neutral-600 decoration-neutral-300 decoration-2 underline-offset-4 hover:text-black hover:decoration-neutral-700 dark:text-neutral-200 dark:decoration-neutral-400 dark:hover:text-neutral-400 dark:hover:decoration-neutral-600"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
}
