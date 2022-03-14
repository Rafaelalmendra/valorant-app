/* eslint-disable @next/next/no-img-element */
import { Container, Infos } from './style';

interface AgentProps {
  image: string;
  background: string;
  name: string;
  role: string;
  description: string;
};

export default function Agent({ 
  image, 
  background, 
  name, 
  role, 
  description
 }: AgentProps) {

  return (
    <Container className="margin">
      <div>
        <img 
          className="agent"
          src={image} 
          alt={`Agent image ${name}`} 
        />

        <img 
          className="background"
          src={background} 
          alt={`Agent background ${name}`}
        />
      </div>

      <Infos>
        <h2>{name}</h2>
        <div className="divider"></div>
        <p className="subtitle">função</p>
        <p>{role}</p>
        <p className="subtitle">biografia</p>
        <p>{description}</p>
      </Infos>
    </Container>
  );
};