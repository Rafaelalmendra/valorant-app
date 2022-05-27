import styled from "styled-components";

interface ContainerProps {
  active: string;
}

export const LinksContainer = styled.ul`
  display: none;

  @media (max-width: 1280px) {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--black-2);

    gap: 1.5rem;
  }
`;

export const Li = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.475rem;
  color: ${(props) => (props.active ? "var(--red)" : "var(--white)")};
`;

export const IconClose = styled.div`
  color: var(--white);
`;
