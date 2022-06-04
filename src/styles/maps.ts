import styled from "styled-components";

interface BackgroundProps {
  image: string;
}

export const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--black);
`;

export const BackgroundImage = styled.img<BackgroundProps>`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100vh;

  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  opacity: 70%;
  background-image: url(${(props) => props.image});
`;
