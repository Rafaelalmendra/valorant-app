import { useState, useEffect } from "react";
import Head from "next/head";

//lib
import api from "lib/api";

//components
import Loading from "@/components/Loading";
import WeaponCard from "@/components/WeaponCard";
import { Divider } from "@/components/Typography";

//styles
import { Card, WeaponsContainer } from "styles/weapons";

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

  useEffect(() => {
    api
      .get("/weapons", {
        params: {
          language: "pt-BR",
        },
      })
      .then((reponse) => {
        setWeapons(reponse.data.data);
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
        <h2
          style={{
            color: "var(--black)",
            margin: "6.5625rem 0 0.4rem 0",
          }}
        >
          ESCOLHA A ARMA E VEJA A SKIN
        </h2>
        <Divider style={{ width: "50%" }} />
        <WeaponsContainer>
          {weapons?.map((weapon: WeaponInfoProps) => (
            <WeaponCard
              title={weapon.displayName}
              weaponImage={weapon.displayIcon}
              price={weapon.shopData?.cost}
              category={weapon.shopData?.categoryText}
              skinsImage={weapon.skins}
            />
          ))}
        </WeaponsContainer>
      </Card>
    </>
  );
};

export default Arsenal;
