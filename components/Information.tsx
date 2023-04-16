import { Fragment } from 'react';
import { KEVIN, AVOMA } from 'lib/contants';
import ExternalLink from './ExternalLink';

export default function Information() {
  return (
    <Fragment>
      <div className="p-4 text-neutral-800 dark:text-neutral-200">
        {"I'm "}
        <ExternalLink {...KEVIN} />
        {', a software engineer based out of Los Angeles, CA. '}
        {'Currently helping to make meetings more productive at '}
        <ExternalLink {...AVOMA} />
        {'.'}
      </div>
    </Fragment>
  );
}
