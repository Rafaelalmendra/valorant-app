import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;

    filter: brightness(0.8);
  }
`