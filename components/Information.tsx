import { KEVIN, AVOMA } from 'lib/contants';
import ExternalLink from './ExternalLink';

export default function Information() {
  return (
    <div className="text-neutral-800 dark:text-neutral-300">
      {"I'm "}
      <ExternalLink {...KEVIN} />
      {', a software engineer based in Los Angeles, CA. '}
      {"Currently, I'm at "}
      <ExternalLink {...AVOMA} />
      {' building a more productive way to have meetings. '}
    </div>
  );
}
