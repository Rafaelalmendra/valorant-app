import styled from "styled-components";

export const Card = styled.main`
  background-color: var(--white);
  background-image: url("/images/background-weapons.png");
  background-attachment: fixed;
  background-size: cover;

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
