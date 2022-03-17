import AgentImage from './AgentImage';
import { Card } from '../Card';
import { CardInfos } from './style';
import { Title, Divider, Subtitle, P } from 'components/Typography';

interface AgentCardProps {
  name: string;
  role: string;
  description: string;
  avatar: string;
  background: string;
};

const AgentCard = ({ avatar, background, name, role, description }: AgentCardProps) => (
  <Card>
    <AgentImage avatar={avatar} background={background} name={name} />
    <CardInfos>
      <Title style={{ color: '#FF4655' }}>{name}</Title>
      <Divider />
      <Subtitle>função</Subtitle>
      <P>{role}</P>
      <Subtitle>biografia</Subtitle>
      <P>{description}</P>
    </CardInfos>
  </Card>
);

export default AgentCard;