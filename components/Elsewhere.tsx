import StandardLink from './StandardLink';
import { GITHUB, LINKEDIN, INSTAGRAM, READCV } from 'lib/contants';

export default function Elsewhere() {
  return (
    <div className="mt-14 leading-loose">
      <h2 className="text-black dark:text-neutral-200">Elsewhere</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        <StandardLink {...GITHUB} />
        <StandardLink {...LINKEDIN} />
        <StandardLink {...INSTAGRAM} />
        <StandardLink {...READCV} />
      </div>
    </div>
  );
}
