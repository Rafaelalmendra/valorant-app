import type { NextPage } from "next";
import Head from "next/head";

//styles
import { Container } from "../styles/home";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Valorant Guide | Home</title>
    </Head>

    <Container>
      <img src="/images/logo.svg" alt="Logo" />
      <img src="/images/jett.svg" alt="Imagem da Jett" />
    </Container>
  </>
);

export default Home;
