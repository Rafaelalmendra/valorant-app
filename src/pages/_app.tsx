import type { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import Navbar from '../components/Navbar';
import { Layout } from '../styles/app';

function MyApp({ Component, pageProps }: AppProps) {
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