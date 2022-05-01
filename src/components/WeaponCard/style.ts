import styled from "styled-components";

export const Card = styled.main`
  position: relative;
  width: 26.375rem;
  height: 19.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4.125rem;
  border-radius: 4px;
  background: var(--red);
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.18);
  transition: transform 0.1s ease-in-out;
  h1 {
    color: var(--white);
    text-transform: uppercase;
  }
  h2 {
    font-family: "Rubik", sans-serif;
    position: absolute;
    transform: rotate(-90deg);
    -webkit-text-stroke: 1px var(--black);
    color: transparent;
    font-size: 3.2rem;
    opacity: 0.5;
    text-transform: uppercase;
    left: -2.5rem;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;
export const Image = styled.div`
  height: 12rem;
  display: flex;
  align-items: center;
  img {
    max-width: 15.5rem;
    max-height: 8.75rem;
    margin-top: 1.9375rem;
  }
`;
export const CardInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6875rem;
  width: 100%;
`;
export const PriceAndCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SkinContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 6rem;

  p {
    font-size: 1.5rem;
    margin-top: 3rem;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    color: var(--black-2);
    text-transform: uppercase;
  }
`;
export const SkinContainerPistols = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.5rem;

  p {
    font-size: 1.5rem;
    margin-top: 3rem;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    color: var(--black-2);
    text-transform: uppercase;
  }

  img {
    max-width: 20rem;
  }
`;
