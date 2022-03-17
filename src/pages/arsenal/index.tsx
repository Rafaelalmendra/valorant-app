import Head from "next/head";
import { useState, useEffect } from "react";
import Loading from "components/Loading";
import api from 'lib/api';
import { Card } from 'styles/weapons';

const Arsenal = () => {
  const [ weapons, setWeapons ] = useState([]);
  const [ isFetching, setIsFetching ] = useState(true);

  useEffect(() => {
    api.get('/weapons', {
      params: {
        language: 'pt-BR',
      }
    })
      .then((reponse) => {
        setWeapons(reponse.data.data);
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
      <Head> <title>Valorant Guide | Armas</title></Head>
      {isFetching && <Loading />}
      <Card>

      </Card>
    </>
  );
}

export default Arsenal;