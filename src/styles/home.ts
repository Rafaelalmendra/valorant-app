import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--white);
  background-image: url("/images/background-weapons.png");
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 912px) {
    flex-direction: column;
    padding: 0 2rem;
  }

  img {
    max-width: 416px;

    @media (max-width: 912px) {
      margin-top: 7rem;
    }
  }

  img:last-child {
    max-width: 400px;

    @media (max-width: 912px) {
      margin-top: 2rem;
    }
  }
`;
