import FadeIn from 'react-fade-in';

import ElsewhereLink from './ElsewhereLink';

export default function Elsewhere() {
  return (
    <FadeIn delay={400} transitionDuration={800}>
      <div className="leading-loose">
        <h2 className="mt-12 font-medium text-black dark:text-neutral-200">
          Elsewhere
        </h2>
        <p className="mt-2 space-x-4">
          <ElsewhereLink name="GitHub" href="https://github.com/kevhjc/" />
          <ElsewhereLink
            name="LinkedIn"
            href="https://www.linkedin.com/in/kevc/"
          />
          <ElsewhereLink name="Resumé" href="https://read.cv/kevc/" />
          <ElsewhereLink
            name="Instagram"
            href="https://instagram.com/kevhjc/"
          />
        </p>
      </div>
    </FadeIn>
  );
}
