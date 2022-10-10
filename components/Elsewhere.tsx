import StandardLink from './StandardLink';
import { GITHUB, LINKEDIN, INSTAGRAM, READCV } from 'lib/contants';

export default function Elsewhere() {
  return (
    <div className="mt-12 leading-loose">
      <h2 className="text-black dark:text-neutral-200">Elsewhere</h2>
      <div className="flex flex-wrap gap-4 mt-2">
        <StandardLink {...GITHUB} />
        <StandardLink {...LINKEDIN} />
        <StandardLink {...INSTAGRAM} />
        <StandardLink {...READCV} />
      </div>
    </div>
  );
}
