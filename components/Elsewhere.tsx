import FadeIn from 'react-fade-in';

import ElsewhereLink from './ElsewhereLink';

export default function Elsewhere() {
  return (
    <FadeIn delay={500} transitionDuration={800}>
      <div className="leading-loose">
        <h2 className="mt-12 text-lg font-semibold text-black dark:text-neutral-200">
          Elsewhere
        </h2>
        <p className="mt-3 space-x-4">
          <ElsewhereLink name="GitHub" href="https://github.com/kevhjc/" />
          <ElsewhereLink
            name="LinkedIn"
            href="https://www.linkedin.com/in/kevc/"
          />
          <ElsewhereLink
            name="Instagram"
            href="https://instagram.com/kevhjc/"
          />
          <ElsewhereLink name="Resumé" href="https://read.cv/kevc/" />
        </p>
      </div>
    </FadeIn>
  );
}
