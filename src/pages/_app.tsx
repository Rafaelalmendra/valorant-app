import { useEffect } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";

import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";

//components
import Navbar from "components/Navbar";
import { Layout } from "components/Layout";

//styles
import GlobalStyle from "styles/global";
import NavbarMobile from "@/components/NavbarMobile";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Aos.init({ duration: 700, offset: 120 });
  }, []);

  return (
    <>
      <Script
        id="hotjar"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3288324,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
        }}
      />
      <GlobalStyle />
      <Navbar />
      <NavbarMobile />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
