import { P, Subtitle } from "../Typography";
import { Card, Image, CardInfos, PriceAndCategory } from "./style";

interface WeaponCardProps {
  title: string;
  weaponImage: string;
  price?: number;
  category?: string;
}

const WeaponCard = ({
  title,
  weaponImage,
  price,
  category,
}: WeaponCardProps) => (
  <Card>
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
  </Card>
);

export default WeaponCard;
