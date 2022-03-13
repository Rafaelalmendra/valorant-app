import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  img {
    max-width: 500px;
  }
`

export const Infos = styled.div`
  max-width: 23rem;

  .divider {
    width: 100%;
    height: 1px;
    margin: 1rem 0 1rem 0;

    background-color: var(--red);
  }

  .subtitle {
    margin-bottom: 0.875rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
  }

  h2 {
    font-family: 'Rubik', sans-serif;
    font-size: 4rem;
    font-weight: 600;
    color: var(--red);
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