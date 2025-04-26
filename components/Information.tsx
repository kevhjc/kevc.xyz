import { KEVIN, AVOMA } from 'lib/contants';
import ExternalLink from './ExternalLink';

const Information = () => {
  return (
    <div className="inline-block leading-8 text-neutral-800 dark:text-neutral-400">
      {"I'm "}
      <ExternalLink {...KEVIN} />
      {', a frontend developer based in Los Angeles. '}
      {"These days, I'm at "}
      <ExternalLink {...AVOMA} />
      {' helping teams run more productive and insightful meetings.'}
    </div>
  );
};

export default Information;
