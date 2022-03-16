import Card from '../Card';
import AgentImage from '../AgentImage';
import { CardInfos } from './style';
import { Title, Divider, Subtitle, P } from '../../components/Typography';

interface AgentCardProps {
  avatar: string;
  background: string;
  name: string;
  role: string;
  description: string;
};

const AgentCard = ({ avatar, background, name, role, description }: AgentCardProps) => (
  <Card>
    <AgentImage avatar={avatar} background={background} name={name} />
    <CardInfos>
      <Title>{name}</Title>
      <Divider />
      <Subtitle>função</Subtitle>
      <P>{role}</P>
      <Subtitle>biografia</Subtitle>
      <P>{description}</P>
    </CardInfos>
  </Card>
);

export default AgentCard;