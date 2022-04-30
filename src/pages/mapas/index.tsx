import Head from "next/head";
import { useState, useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Background } from "../../styles/maps";
import { Divider, Title } from "components/Typography";
import api from "../../lib/api";
import Loading from "components/Loading";
SwiperCore.use([Navigation]);

interface MapProps {
  splash: string;
  displayName: string;
  uuid: string;
}

const Mapas = () => {
  const [maps, setMaps] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    api
      .get("/maps")
      .then((response) => {
        setMaps(response.data.data);
        console.log(response.data.data);
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
        <title>Valorant Guide | Mapas</title>
      </Head>
      {isFetching && <Loading />}
      <Swiper navigation loop>
        {maps.map((map: MapProps) => (
          <SwiperSlide key={map.uuid}>
            <Background>
              <Title>{map.displayName}</Title>
              <Divider style={{ width: "21.75rem" }} />
              <img src={map.splash} alt="" />
            </Background>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Mapas;
