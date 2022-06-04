//components
import AgentImage from "./AgentImage";
import { Title, Divider, Subtitle, P } from "components/Typography";

//styles
import { CardInfos, CardContainer } from "./style";

interface AgentCardProps {
  name: string;
  role: string;
  description: string;
  avatar: string;
  background?: string;
}

const AgentCard = ({
  avatar,
  background,
  name,
  role,
  description,
}: AgentCardProps) => (
  <CardContainer>
    <AgentImage avatar={avatar} background={background} name={name} />
    <CardInfos>
      <Title style={{ color: "#FF4655" }}>{name}</Title>
      <Divider />
      <Subtitle style={{ margin: "1rem 0 0.4rem 0" }}>função</Subtitle>
      <P>{role}</P>
      <Subtitle style={{ margin: "1rem 0 0.4rem 0" }}>biografia</Subtitle>
      <P>{description}</P>
    </CardInfos>
  </CardContainer>
);

export default AgentCard;
