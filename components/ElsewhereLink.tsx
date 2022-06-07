import { ElsewhereProps } from 'lib/interfaces';

export default function ElsewhereLink({ name, href }: ElsewhereProps) {
  return (
    <a
      className="font-medium text-neutral-600 underline decoration-neutral-500/30 decoration-2 underline-offset-4 transition duration-100 hover:text-black hover:decoration-neutral-700 hover:decoration-2 dark:text-neutral-200 dark:decoration-neutral-400 dark:hover:text-neutral-400 dark:hover:decoration-neutral-500/60"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
}
