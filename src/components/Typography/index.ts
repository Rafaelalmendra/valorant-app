import styled from "styled-components";

interface TypographProps {
  center?: boolean;
}

export const Title = styled.h1<TypographProps>`
  font-family: "Rubik", sans-serif;
  font-size: 4rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--white);
  text-align: ${(props) => (props.center ? "center" : "left")};

  @media (max-width: 720px) {
    text-align: center;
    font-size: 2.6rem;
  }
`;

export const Subtitle = styled.p<TypographProps>`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: ${(props) => (props.center ? "center" : "left")};

  @media (max-width: 720px) {
    text-align: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--red);

  @media (max-width: 720px) {
    display: none;
  }
`;

export const P = styled.div<TypographProps>`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3rem;
  text-align: ${(props) => (props.center ? "center" : "justify")};

  @media (max-width: 720px) {
    text-align: center;
    padding: 0 1rem 0 1rem;
  }
`;
