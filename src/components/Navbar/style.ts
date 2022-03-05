import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  z-index: 99;
  width: 24.25rem;
  height: 100vh;

  background: var(--black-2);
  color: var(--white);
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 3.25rem;

  img {
    max-width: 184px;
  }
`

export const GuideTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;

  text-transform: uppercase;

  p {
    margin: 0 0.5rem 0 0.5rem;
  }

  span {
    width: 2.375rem;
    height: 2px;
    background: var(--white);
  }
`