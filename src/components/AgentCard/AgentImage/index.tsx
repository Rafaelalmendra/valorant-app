import Images from "./style";

interface AgentImageProps {
  avatar: string;
  background?: string;
  name: string;
}

const AgentImage = ({ avatar, background, name }: AgentImageProps) => (
  <Images>
    <img src={avatar} alt={`${name}`} />
    <img src={background} alt={`${name}`} />
  </Images>
);

export default AgentImage;
