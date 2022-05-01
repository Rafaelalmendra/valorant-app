import { useState, useEffect } from "react";
import Head from "next/head";
import api from "lib/api";

//components
import { Divider, Title } from "@/components/Typography";
import WeaponCard from "@/components/WeaponCard";
import Loading from "components/Loading";

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
        <Title
          style={{
            color: "var(--black)",
            margin: "6.5625rem 0 0.4rem 0",
            fontSize: "3.2rem",
          }}
        >
          ESCOLHA A ARMA E VEJA A SKIN
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
                  skinsImage={weapon.skins}
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
