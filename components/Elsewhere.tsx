import StandardLink from './StandardLink';

export default function Elsewhere() {
  return (
    <div className="leading-loose">
      <h2 className="mt-12 font-medium text-black dark:text-neutral-200">
        Elsewhere
      </h2>
      <p className="mt-2 space-x-6">
        <StandardLink name="GitHub" href="https://github.com/kevhjc" />
        <StandardLink name="LinkedIn" href="https://www.linkedin.com/in/kevc" />
        <StandardLink name="Instagram" href="https://instagram.com/kevhjc" />
        <StandardLink name="Resume" href="https://read.cv/kevc" />
      </p>
    </div>
  );
}
