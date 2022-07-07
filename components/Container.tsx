import Head from 'next/head';

import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="mx-auto flex max-w-[600px] items-center justify-center p-10 md:pt-28">
      <main>{children}</main>
    </div>
  );
}
