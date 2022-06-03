import Head from 'next/head';

import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  const meta = {
    title: 'Kevin H. Chung',
    description: 'Software engineer based in Los Angeles, California.',
    type: 'website',
  };

  return (
    <div className="flex items-center justify-center mx-auto md:pt-28">
      <div className="max-w-2xl p-10">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
        </Head>
        <main>{children}</main>
      </div>
    </div>
  );
}
