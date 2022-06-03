import FadeIn from 'react-fade-in';

export default function Elsewhere() {
  return (
    <FadeIn delay={500} transitionDuration={800}>
      <div className="leading-loose">
        <h2 className="mt-10 text-lg font-semibold text-black dark:text-neutral-200">
          Elsewhere
        </h2>
        <p className="mt-4 space-x-4 text-neutral-800 dark:text-neutral-300">
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-zinc-500 decoration-2 underline-offset-2 hover:text-zinc-500 hover:decoration-zinc-500/30 focus:text-zinc-500 focus:ring-zinc-500/40 dark:text-white dark:decoration-zinc-400 dark:hover:text-zinc-300 dark:hover:decoration-zinc-400/30 dark:focus:text-zinc-400 dark:focus:ring-zinc-400/40"
            href="https://github.com/kevhjc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-zinc-500 decoration-2 underline-offset-2 hover:text-zinc-500 hover:decoration-zinc-500/30 focus:text-zinc-500 focus:ring-zinc-500/40 dark:text-white dark:decoration-zinc-400 dark:hover:text-zinc-300 dark:hover:decoration-zinc-400/30 dark:focus:text-zinc-400 dark:focus:ring-zinc-400/40"
            href="https://www.linkedin.com/in/kevc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-zinc-500 decoration-2 underline-offset-2 hover:text-zinc-500 hover:decoration-zinc-500/30 focus:text-zinc-500 focus:ring-zinc-500/40 dark:text-white dark:decoration-zinc-400 dark:hover:text-zinc-300 dark:hover:decoration-zinc-400/30 dark:focus:text-zinc-400 dark:focus:ring-zinc-400/40"
            href="https://instagram.com/kevhjc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-zinc-500 decoration-2 underline-offset-2 hover:text-zinc-500 hover:decoration-zinc-500/30 focus:text-zinc-500 focus:ring-zinc-500/40 dark:text-white dark:decoration-zinc-400 dark:hover:text-zinc-300 dark:hover:decoration-zinc-400/30 dark:focus:text-zinc-400 dark:focus:ring-zinc-400/40"
            href="https://read.cv/kevc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resumé
          </a>
        </p>
      </div>
    </FadeIn>
  );
}
