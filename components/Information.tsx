import { KEVIN, AVOMA } from 'lib/contants';
import ExternalLink from './ExternalLink';

export default function Information() {
  return (
    <div className="p-4 text-neutral-800 dark:text-neutral-200">
      {"Hey there, I'm "}
      <ExternalLink {...KEVIN} />
      {
        ", a software engineer based in Los Angeles, California. Currently, I'm helping to build "
      }
      <ExternalLink {...AVOMA} />
      {' to make meetings more productive.'}
    </div>
  );
}
