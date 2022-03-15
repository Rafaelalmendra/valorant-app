import { useState, useEffect } from 'react';
import Head from "next/head";
import api from '../../lib/api';

export default function Mapas() {
  const [ maps, setMaps ] = useState([]);

  useEffect(() => {
    api.get('maps')
      .then((response) => {
        setMaps(response.data.data);
        console.log(response.data.data);
      })
      .catch((response) => {
        console.error(response.error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Valorant Guide | Mapas</title>
      </Head>
      <h1>hello</h1>
    </>
  );
};