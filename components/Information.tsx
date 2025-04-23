import { KEVIN, AVOMA } from 'lib/contants';
import ExternalLink from './ExternalLink';

const Information = () => {
  return (
    <div className="text-neutral-800 dark:text-neutral-400">
      {"I'm "}
      <ExternalLink {...KEVIN} />
      {', a software engineer based in Los Angeles, CA. '}
      {"Currently, I'm at "}
      <ExternalLink {...AVOMA} />
      {' building a more productive way to have meetings. '}
    </div>
  );
};

export default Information;
