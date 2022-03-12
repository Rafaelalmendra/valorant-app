import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Aos from 'aos';
import 'aos/dist/aos.css';

import GlobalStyle from '../styles/global';
import Navbar from '../components/Navbar';
import { Layout } from '../styles/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 700, offset: 120 })
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;