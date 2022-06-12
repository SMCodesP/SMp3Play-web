import { GlobalStyle } from '@/styles/Global';
import { themes } from '@/utils/themes';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes[`dark`]}>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeProvider>
  );
}
