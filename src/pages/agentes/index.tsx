import Head from "next/head";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import api from "lib/api";

//components
import AgentCard from "components/AgentCard";
import Loading from "components/Loading";

interface AgentInfo {
  uuid: string;
  fullPortrait: string;
  background: string;
  displayName: string;
  description: string;
  role: {
    displayName: string;
  };
}

const Agentes = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [agent, setAgent] = useState([]);
  useEffect(() => {
    api
      .get("/agents", {
        params: {
          language: "pt-BR",
          isPlayableCharacter: true,
        },
      })
      .then((response) => {
        setAgent(response.data.data);
      })
      .catch((response) => {
        console.error(response.error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Valorant Guide | Agentes</title>
      </Head>
      {isFetching && <Loading />}
      <Swiper navigation loop>
        {agent?.map((agent: AgentInfo) => (
          <SwiperSlide key={agent.uuid}>
            <AgentCard
              avatar={agent.fullPortrait}
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

export default Agentes;
