import styled from "styled-components";

export const ModalCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);

  width: 60rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fafafa;
  border-radius: 8px;

  @media (max-width: 1000px) {
    width: 90%;
    height: 28rem;
  }
`;

export const Header = styled.div`
  padding: 2.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 1.5rem 2rem 0 2rem;
  }

  p {
    font-family: "Rubik", sans-serif;
    font-size: 1.475rem;
    font-weight: 400;
    color: var(--black-2);
    text-transform: uppercase;

    strong {
      color: var(--red);
      font-weight: 600;
    }
  }

  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;

  @media (max-width: 1000px) {
    padding: 1rem 0 1rem 0;
  }

  img {
    width: 450px;

    @media (max-width: 1000px) {
      width: 300px;
    }
  }
`;

export const DarkBackground = styled.div`
  background-color: var(--black);
  opacity: 0.04;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;
