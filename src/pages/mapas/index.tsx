import { useState, useEffect } from "react";
import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

//lib
import api from "../../lib/api";

//components
import { Divider, Title } from "components/Typography";
import Loading from "components/Loading";

//styles
import { Background, BackgroundImage } from "../../styles/maps";

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
              <Title
                style={{
                  position: "relative",
                  zIndex: "2",
                }}
              >
                {map.displayName}
              </Title>
              <Divider
                style={{ width: "21.75rem", position: "relative", zIndex: "2" }}
              />
              {/*  <img src={map.splash} alt="" />*/}
              <BackgroundImage image={map.splash} />
            </Background>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Mapas;
