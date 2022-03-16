import styled from "styled-components";

const Card = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4rem 0 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export default Card;