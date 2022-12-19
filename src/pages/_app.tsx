import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { theme } from '../config/theme';
import { Footer } from '../layouts';
import '../styles/globals.css';
import '../styles/styles.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
