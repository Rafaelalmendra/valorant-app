import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 5rem;

  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  background: var(--black-2);
  color: var(--white);

  @media (max-width: 1280px) {
    display: flex;
  }
`;
