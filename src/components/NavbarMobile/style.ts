import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--black-2);
  color: var(--white);
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  img {
    max-width: 136px;
  }
`;

export const GuideTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
  text-transform: uppercase;
  p {
    margin: 0 0.35rem 0 0.35rem;
    font-size: 0.875rem;
  }
  span {
    width: 1.875rem;
    height: 2px;
    background: var(--white);
  }
`;
