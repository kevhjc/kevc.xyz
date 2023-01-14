import { Fragment } from 'react';
import { KEVIN, AVOMA, INSTAGRAM, GITHUB } from 'lib/contants';
import ExternalLink from './ExternalLink';

export default function Information() {
  return (
    <Fragment>
      <div className="p-4 text-neutral-800 dark:text-neutral-200">
        {"Hey there, I'm "}
        <ExternalLink {...KEVIN} />
        {', a software engineer based in Los Angeles, California. '}
        {'Currently at '}
        <ExternalLink {...AVOMA} />
        {', helping to make meetings more productive. '}
      </div>
    </Fragment>
  );
}
