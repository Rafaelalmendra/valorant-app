import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import api from '../../lib/api';
import Agent from '../../components/Agent';
SwiperCore.use([Navigation]);

interface AgentInfo {
  uuid: string;
  fullPortrait: string;
  background: string;
  displayName : string;
  description: string;
  role: {
    displayName: string;
  }
}

export default function Agentes() {
  const [ isFetching, setIsFetching ] = useState(true);
  const [ agent, setAgent ] = useState([]);

  useEffect(() => {
    api.get('/agents', {
      params: {
        language: 'pt-BR',
        isPlayableCharacter: true
      }
    })
      .then((response) => {
        setAgent(response.data.data);
        console.log(response.data.data);
      }).catch((response) => {
        console.log(response.error);
      }).finally(() => {
        setIsFetching(false);
      })
  }, [])

  return (
    <>
      <Head>
        <title>Valorant Guide | Agentes</title>
      </Head>
      
      {isFetching && (
        <div className="loading">
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      )}

      <Swiper
        className="margin"
        navigation 
        loop
      >
        {agent?.map((agent: AgentInfo) => (
          <SwiperSlide key={agent.uuid}>
            <Agent 
              image={agent.fullPortrait}
              background={agent.background}
              name={agent.displayName}
              role={agent.role?.displayName}
              description={agent.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};