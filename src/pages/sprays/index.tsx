import { useEffect, useState } from "react";
import Head from "next/head";
import api from "lib/api";
import Loading from "@/components/Loading";

const Sprays = () => {
  const [sprays, setSprays] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    api
      .get("/sprays", {
        params: {
          language: "pt-BR",
        },
      })
      .then((reponse) => {
        setSprays(reponse.data.data);
        console.log(reponse.data.data);
      })
      .catch((response) => {
        console.log(response.error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Valorant Guide | Sprays</title>
      </Head>
      {isFetching && <Loading />}
      <h1>hello</h1>
    </>
  );
};

export default Sprays;
