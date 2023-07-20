import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import P from 'prop-types';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
};

export default MyApp;
