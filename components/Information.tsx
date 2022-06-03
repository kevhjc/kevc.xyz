import FadeIn from 'react-fade-in';

export default function Information() {
  return (
    <FadeIn delay={200} transitionDuration={800}>
      <div className="leading-loose">
        <h2 className="mb-4 text-lg font-semibold text-black dark:text-neutral-200">
          Kevin H. Chung
        </h2>
        <p className="mb-4 text-neutral-800 dark:text-neutral-300">
          Software engineer based in{' '}
          <span className="font-serif text-lg italic">
            Los Angeles, California
          </span>
          .
        </p>
        <p className="text-neutral-800 dark:text-neutral-300">
          Prototyping React applications at{' '}
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-rose-500 decoration-2 underline-offset-2 hover:text-rose-500 hover:decoration-rose-500/30 focus:text-rose-500 focus:ring-rose-500/40 dark:text-white dark:decoration-rose-400 dark:hover:text-rose-400 dark:hover:decoration-rose-400/30 dark:focus:text-rose-400 dark:focus:ring-rose-400/40"
            href="https://www.reactrix.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Reactrix
          </a>
          , saving thoughts & ideas at{' '}
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-amber-500 decoration-2 underline-offset-2 hover:text-amber-500 hover:decoration-amber-500/30 focus:text-amber-500 focus:ring-amber-500/40 dark:text-white dark:decoration-amber-400 dark:hover:text-amber-400 dark:hover:decoration-amber-400/30 dark:focus:text-amber-400 dark:focus:ring-amber-400/40"
            href="https://www.clementine.today/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Clementine
          </a>
          , collecting links at{' '}
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-blue-500 decoration-2 underline-offset-2 hover:text-blue-500 hover:decoration-blue-500/30 focus:text-blue-500 focus:ring-blue-500/40 dark:text-white dark:decoration-blue-400 dark:hover:text-blue-400 dark:hover:decoration-blue-400/30 dark:focus:text-blue-400 dark:focus:ring-blue-400/40"
            href="https://www.bookmarkr.link/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Bookmarkr
          </a>
          , and occasionally posting outfits at{' '}
          <a
            className="font-medium underline transition duration-100 rounded-sm focusable decoration-emerald-500 decoration-2 underline-offset-2 hover:text-emerald-500 hover:decoration-emerald-500/30 focus:text-emerald-500 focus:ring-emerald-500/40 dark:text-white dark:decoration-emerald-400 dark:hover:text-emerald-400 dark:hover:decoration-emerald-400/30 dark:focus:text-emerald-400 dark:focus:ring-emerald-400/40"
            href="https://vavlt.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vavlt
          </a>
          .
        </p>
        <p className="mt-4 text-neutral-800 dark:text-neutral-300">
          Building projects and experimenting with new tools and libraries in
          the open.
        </p>
      </div>
    </FadeIn>
  );
}
