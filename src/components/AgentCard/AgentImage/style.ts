import styled from "styled-components";

const Images = styled.div`
  img:first-child {
    position: relative;
    z-index: 2;

    width: 32.8125rem;
    height: 50rem;
    object-fit: cover;

    @media (max-width: 1366px) {
      width: 26rem;
      height: 44rem;
    }

    @media (max-width: 920px) {
      height: 30rem;
      width: 22rem;
    }

    @media (max-width: 720px) {
      margin-top: 3rem;
      height: 30rem;
      width: 22rem;
    }
  }

  img:last-child {
    position: absolute;
    z-index: 1;

    width: 30%;
    left: 5rem;

    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export default Images;
