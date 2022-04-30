import styled from "styled-components";

export const Card = styled.main`
  background-color: var(--white);
  background-image: url("/images/background-weapons.png");
  background-attachment: fixed;
  background-size: cover;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeaponsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  @media (max-width: 1366px) {
    width: 90%;
  }
`;

export const SkinContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.6875rem;
`;
