import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--white);
  background-image: url("/images/background-weapons.png");
  background-attachment: fixed;
  background-size: cover;

  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Rubik", sans-serif;
    font-size: 2.8rem;

    padding: 1rem;
    text-align: center;

    @media (max-width: 720px) {
      font-size: 2rem;
    }
  }
`;

export const WeaponsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  @media (max-width: 1366px) {
    width: 100%;
  }

  @media (max-width: 720px) {
    padding: 1rem;
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
