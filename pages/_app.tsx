import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

async function json(url: string) {
  return fetch(url).then((response) => response.json());
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const meta = {
    title: 'Kevin H. Chung',
    description: 'Software engineer based in Los Angeles, California.',
    type: 'website',
  };

  return (
    <SWRConfig
      value={{
        fetcher: json,
      }}
    >
      <ThemeProvider attribute="class">
        <Head>
          <title>{meta.title}</title>
          <meta content={meta.title} name="title" />
          <meta content={meta.title} name="author" />
          <meta content="initial-scale=1, viewport-fit=cover" name="viewport" />
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <link href="/favicon.ico" rel="icon" sizes="any" type="image" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}
