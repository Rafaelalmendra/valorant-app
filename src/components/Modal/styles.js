import styled from "styled-components";

export const ModalCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);

  width: 60rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const Header = styled.div`
  padding: 2.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    font-family: "Rubik", sans-serif;
    font-size: 1.475rem;
    color: var(--black-2);
    text-transform: uppercase;
  }

  svg {
    cursor: pointer;
  }
`;

export const DarkBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;
