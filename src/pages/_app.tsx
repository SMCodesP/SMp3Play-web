import { GlobalStyle } from '@/styles/Global';
import { themes } from '@/utils/themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={themes[`dark`]}>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ThemeProvider>
    </>
  );
}
