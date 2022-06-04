import styled from "styled-components";

export const CardContainer = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  background-size: cover;
  background-attachment: fixed;
  background-color: var(--white);
  background-image: url("/images/background-weapons.png");

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const CardInfos = styled.div`
  max-width: 23rem;

  @media (max-width: 720px) {
    position: absolute;
    bottom: 40px;
    z-index: 2;
  }
`;
