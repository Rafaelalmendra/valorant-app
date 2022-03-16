import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

import GlobalStyle from '../styles/global';
import Navbar from '../components/Navbar';
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 700, offset: 120 })
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;