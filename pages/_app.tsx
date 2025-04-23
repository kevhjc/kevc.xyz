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
    description: 'Software engineer based in Los Angeles, CA.',
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

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="author" content={meta.title} />
          <meta name="description" content={meta.description} />

          <meta name="robots" content="follow, index" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}
