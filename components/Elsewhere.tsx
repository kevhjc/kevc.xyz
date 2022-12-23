import StandardLink from './StandardLink';
import { GITHUB, INSTAGRAM, READCV, TUMBLR } from 'lib/contants';

export default function Elsewhere() {
  return (
    <div className="mt-6 leading-loose sm:mt-14">
      <h2 className="text-black dark:text-neutral-200">Elsewhere</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        <StandardLink {...INSTAGRAM} />
        <StandardLink {...TUMBLR} />
        <StandardLink {...GITHUB} />
        <StandardLink {...READCV} />
      </div>
    </div>
  );
}
