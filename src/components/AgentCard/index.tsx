import Card from '../Card';
import { CardInfos, Images } from './style';
import { Title, Divider, Subtitle, P } from '../../components/Typography';

interface AgentProps {
  avatar: string;
  background: string;
  name: string;
  role: string;
  description: string;
};

const AgentCard = ({ avatar, background, name, role, description }: AgentProps) => (
  <Card>
    <Images>
      <img className="agent" src={avatar} alt={`${name}`} />
      <img className="background" src={background} alt={`${name}`} />
    </Images>
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