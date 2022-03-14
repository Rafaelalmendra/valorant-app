/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Container,

} from '../styles/index';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Valorant Guide | Home</title>
      </Head>

      <Container className="margin">
        <div data-aos="fade-up">
          <img src="/images/logo.svg" alt="Logo principal" className="logo" />
        </div>
        <div data-aos="fade-left">
          <img src="/images/jett.svg" alt="Jett imagem" className="jett" />
        </div>
      </Container>
    </>
  );
};

export default Home;