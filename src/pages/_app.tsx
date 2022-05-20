import { useEffect } from "react";
import type { AppProps } from "next/app";

import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";

//components
import Navbar from "components/Navbar";
import { Layout } from "components/Layout";

//styles
import GlobalStyle from "styles/global";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Aos.init({ duration: 700, offset: 120 });
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
