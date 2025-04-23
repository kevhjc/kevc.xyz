import { GITHUB, CV, LINKEDIN } from 'lib/contants';
import ExternalLink from './ExternalLink';

const Elsewhere = () => {
  return (
    <div className="flex w-full flex-col space-y-1 text-neutral-800 dark:text-neutral-300">
      <span>Elsewhere</span>

      <div className="flex flex-wrap gap-x-4 gap-y-2">
        <ExternalLink {...GITHUB} />
        <ExternalLink {...LINKEDIN} />
        <ExternalLink {...CV} />
      </div>
    </div>
  );
};

export default Elsewhere;
