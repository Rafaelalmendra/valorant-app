import styled from "styled-components";

interface ContainerProps {
  active: string;
}

export const LinksContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const Li = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  color: ${(props) => (props.active ? "var(--red)" : "var(--white)")};
`;
