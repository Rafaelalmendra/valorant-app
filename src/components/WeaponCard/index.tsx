import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

//components
import Modal from "../Modal";
import { P, Subtitle } from "../Typography";

//styles
import {
  Card,
  Image,
  CardInfos,
  PriceAndCategory,
  SkinContainer,
  SkinContainerPistols,
} from "./style";

//types
interface WeaponCardProps {
  title: string;
  weaponImage: string;
  price?: number;
  category?: string;
  skinsImage?: any;
  children?: React.ReactNode;
}

const WeaponCard = ({
  title,
  weaponImage,
  price,
  category,
  children,
  skinsImage,
}: WeaponCardProps) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Card onClick={() => setModal(true)}>
        <h1>{title}</h1>
        <h2>{title}</h2>
        <Image>
          <img src={weaponImage} alt={title} />
        </Image>
        <CardInfos>
          <PriceAndCategory>
            <Subtitle>Preço</Subtitle>
            <P style={{ color: "var(--white)" }}>{price}</P>
          </PriceAndCategory>
          <PriceAndCategory>
            <Subtitle>CATEGORIA</Subtitle>
            <P style={{ color: "var(--white)" }}>{category}</P>
          </PriceAndCategory>
        </CardInfos>
        {children}
      </Card>

      {modal ? (
        <Modal title={title} onClose={() => setModal(false)}>
          <Swiper navigation loop>
            {category === "Armas Leves" ? (
              <>
                {skinsImage.map((skin: any) => (
                  <>
                    {skin.displayIcon && skin.contentTierUuid ? (
                      <SwiperSlide>
                        <SkinContainerPistols>
                          <img src={skin.displayIcon} alt="" />
                          <p>{skin.displayName}</p>
                        </SkinContainerPistols>
                      </SwiperSlide>
                    ) : null}
                  </>
                ))}
              </>
            ) : (
              <>
                {skinsImage.map((skin: any) => (
                  <>
                    {skin.displayIcon && skin.contentTierUuid ? (
                      <SwiperSlide>
                        <SkinContainer>
                          <img src={skin.displayIcon} alt="" />
                          <p>{skin.displayName}</p>
                        </SkinContainer>
                      </SwiperSlide>
                    ) : null}
                  </>
                ))}
              </>
            )}
          </Swiper>
        </Modal>
      ) : null}
    </>
  );
};

export default WeaponCard;
