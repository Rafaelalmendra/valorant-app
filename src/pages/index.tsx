import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

//components
import { Card } from "components/Card";

const Home: NextPage = () => (
  <Card>
    <Head>
      <title>Valorant Guide | Home</title>
    </Head>
    <Image
      data-aos="fade-up"
      src={"/images/logo.svg"}
      alt={"Logo"}
      width={466}
      height={466}
    />
    <Image
      data-aos="fade-left"
      src={"/images/jett.svg"}
      alt={"Jett imagem"}
      width={466}
      height={600}
    />
  </Card>
);

export default Home;
