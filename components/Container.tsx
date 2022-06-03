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
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-3xl p-10">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
        </Head>
        <main>{children}</main>
      </div>
    </div>
  );
}
