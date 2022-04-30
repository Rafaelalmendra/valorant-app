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
  }

  img:last-child {
    position: absolute;
    z-index: 1;

    width: 30%;
    left: 5rem;
  }
`;

export default Images;
