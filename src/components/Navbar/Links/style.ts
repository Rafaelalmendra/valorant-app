import styled from "styled-components";

interface ContainerProps {
  active: string;
}

export const LinksContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  ul {
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    a:first-child {
      margin-bottom: 2rem;
    }

    a:last-child {
      margin-top: 2rem;
    }
  }
`

export const Li = styled.li<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  font-size: 1rem;

  color: ${props => props.active ? "var(--red)" : "var(--white)"};

  img {
    max-width: 23px;
  }
`