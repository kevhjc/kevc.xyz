import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

async function json(url: string) {
  return fetch(url).then((response) => response.json());
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: json,
      }}
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}
