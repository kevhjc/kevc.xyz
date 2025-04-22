import { Fragment } from 'react';
import { KEVIN, AVOMA } from 'lib/contants';
import ExternalLink from './ExternalLink';

export default function Information() {
  return (
    <Fragment>
      <div className="flex flex-col text-neutral-800 dark:text-neutral-300">
        <p>
          {"I'm "}
          <ExternalLink {...KEVIN} />
          {', a software engineer based in Los Angeles, CA. '}
          {"Currently, I'm at "}
          <ExternalLink {...AVOMA} />
          {' building a more productive way to have meetings. '}
        </p>
      </div>
    </Fragment>
  );
}
