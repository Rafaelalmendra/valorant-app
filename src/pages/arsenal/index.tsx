import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Head from "next/head";
import api from "lib/api";
SwiperCore.use([Navigation]);

//components
import { Divider, Title } from "@/components/Typography";
import WeaponCard from "@/components/WeaponCard";
import Loading from "components/Loading";
import Modal from "@/components/Modal";

//styles
import { Card, WeaponsContainer, SkinContainer } from "styles/weapons";

interface WeaponInfoProps {
  displayName: string;
  displayIcon: string;
  shopData?: {
    cost?: number;
    categoryText: string;
  };
  skins: any;
}

const Arsenal = () => {
  const [weapons, setWeapons] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    api
      .get("/weapons", {
        params: {
          language: "pt-BR",
        },
      })
      .then((reponse) => {
        setWeapons(reponse.data.data);
        console.log(reponse.data.data);
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
        <title>Valorant Guide | Armas</title>
      </Head>
      {isFetching && <Loading />}
      <Card>
        <Title style={{ color: "var(--black)", marginTop: "6.5625rem" }}>
          ESCOLHA A SUA ARMA
        </Title>
        <Divider style={{ width: "50%" }} />
        <WeaponsContainer>
          {weapons?.map((weapon: WeaponInfoProps) => (
            <>
              <div onClick={() => setModal(true)}>
                <WeaponCard
                  title={weapon.displayName}
                  weaponImage={weapon.displayIcon}
                  price={weapon.shopData?.cost}
                  category={weapon.shopData?.categoryText}
                  skinsImage={weapon.skins[0].displayIcon}
                />
              </div>
            </>
          ))}
        </WeaponsContainer>
      </Card>
    </>
  );
};

export default Arsenal;
