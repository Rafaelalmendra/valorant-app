/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Infos
} from './style';

export default function Agent() {
  return (
    <Container>
      <div>
        <img src="/images/agent-test.svg" alt="teste" />
      </div>

      <Infos>
        <h2>BRIMSTONE</h2>
        <div className="divider"></div>
        <p className="subtitle">FUNÇÃO</p>
        <p>CONTROLADOR</p>
        <p className="subtitle">BIOGRAFIA</p>
        <p>
          Vindo diretamente dos EUA, o arsenal orbital de Brimstone garante que o esquadrão dele esteja sempre em vantagem. Sua capacidade de oferecer utilidade com precisão a distância faz dele um comandante inigualável na linha de frente.
        </p>
      </Infos>
    </Container>
  );
};