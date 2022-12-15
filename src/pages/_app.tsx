import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../config/theme';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { Footer } from '../layouts';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
