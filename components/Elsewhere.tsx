import FadeIn from 'react-fade-in';

export default function Elsewhere() {
  return (
    <FadeIn delay={500} transitionDuration={800}>
      <div className="leading-loose">
        <h2 className="mt-10 text-lg font-semibold text-black dark:text-neutral-200">
          Elsewhere
        </h2>
        <p className="mt-4 space-x-4 text-neutral-500 dark:text-neutral-300">
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-neutral-500/30 decoration-2 underline-offset-2 hover:text-neutral-700 hover:decoration-neutral-700 focus:text-neutral-500 focus:ring-neutral-500/40 dark:text-neutral-200 dark:decoration-neutral-400 dark:hover:text-neutral-400 dark:hover:decoration-neutral-500/60 dark:focus:text-neutral-400 dark:focus:ring-neutral-400/40"
            href="https://github.com/kevhjc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-neutral-500/30 decoration-2 underline-offset-2 hover:text-neutral-700 hover:decoration-neutral-700 focus:text-neutral-500 focus:ring-neutral-500/40 dark:text-neutral-200 dark:decoration-neutral-400 dark:hover:text-neutral-400 dark:hover:decoration-neutral-500/60 dark:focus:text-neutral-400 dark:focus:ring-neutral-400/40"
            href="https://www.linkedin.com/in/kevc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-neutral-500/30 decoration-2 underline-offset-2 hover:text-neutral-700 hover:decoration-neutral-700 focus:text-neutral-500 focus:ring-neutral-500/40 dark:text-neutral-200 dark:decoration-neutral-400 dark:hover:text-neutral-400 dark:hover:decoration-neutral-500/60 dark:focus:text-neutral-400 dark:focus:ring-neutral-400/40"
            href="https://instagram.com/kevhjc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-neutral-500/30 decoration-2 underline-offset-2 hover:text-neutral-700 hover:decoration-neutral-700 focus:text-neutral-500 focus:ring-neutral-500/40 dark:text-neutral-200 dark:decoration-neutral-400 dark:hover:text-neutral-400 dark:hover:decoration-neutral-500/60 dark:focus:text-neutral-400 dark:focus:ring-neutral-400/40"
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
