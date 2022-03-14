import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  .agent {
    width: 525px;
    height: 800px;
    object-fit: cover;
  }

  .background {
    position: absolute;
    z-index: -1;
    left: 80px;
    max-width: 35%;
  }
`

export const Infos = styled.div`
  max-width: 23rem;

  .divider {
    width: 100%;
    height: 1px;
    margin: 0.6em 0 1rem 0;

    background-color: var(--red);
  }

  .subtitle {
    margin-bottom: 0.875rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;

    text-transform: uppercase;
  }

  h2 {
    font-family: 'Rubik', sans-serif;
    font-size: 4rem;
    font-weight: 600;

    color: var(--red);
    text-transform: uppercase;
  }

  p {
    margin-top: 0.875rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.3rem;
    text-align: justify;
  }
`