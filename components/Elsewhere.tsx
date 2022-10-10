import StandardLink from './StandardLink';
import { GITHUB, LINKEDIN, INSTAGRAM, READCV } from 'lib/contants';

export default function Elsewhere() {
  return (
    <div className="leading-loose">
      <h2 className="mt-12 font-medium text-black dark:text-neutral-200">
        Elsewhere
      </h2>
      <div className="flex mt-2 space-x-2 sm:space-x-6">
        <StandardLink {...GITHUB} />
        <StandardLink {...LINKEDIN} />
        <StandardLink {...INSTAGRAM} />
        <StandardLink {...READCV} />
      </div>
    </div>
  );
}
