import Head from 'next/head';

import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="flex items-center justify-center max-w-2xl p-10 mx-auto md:pt-20">
      <main>{children}</main>
    </div>
  );
}
