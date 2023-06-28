import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import P from 'prop-types';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
};

export default MyApp;
