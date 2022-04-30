import Head from "next/head";
import { useState, useEffect } from "react";
import { Card, WeaponsContainer } from "styles/weapons";
import { Divider, Title } from "@/components/Typography";
import api from "lib/api";
import Loading from "components/Loading";
import WeaponCard from "@/components/WeaponCard";
import Modal from "@/components/Modal";

interface WeaponInfoProps {
  displayName: string;
  displayIcon: string;
  shopData?: {
    cost?: number;
    categoryText: string;
  };
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
        console.log(response.error);
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
            <div onClick={() => setModal(true)}>
              <WeaponCard
                title={weapon.displayName}
                weaponImage={weapon.displayIcon}
                price={weapon.shopData?.cost}
                category={weapon.shopData?.categoryText}
              />
            </div>
          ))}
        </WeaponsContainer>
      </Card>

      {modal ? (
        <Modal title="skins" onClose={() => setModal(false)}>
          <h1>teste</h1>
        </Modal>
      ) : null}
    </>
  );
};

export default Arsenal;
