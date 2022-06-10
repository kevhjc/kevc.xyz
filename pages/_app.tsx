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
          <meta name="title" content={meta.title} />
          <meta name="author" content={meta.title} />
          <meta name="description" content={meta.description} />
          <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
          <meta name="robots" content="follow, index" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}
