import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --black: #111111;
    --black-2: #0F1923;
    --white: #ECE8E1;
    --red: #FF4655;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--white);
  }

  html, body, textarea, button {
    font-family: 'Archivo', sans-serif;
    -webkit-font-smoothing: antialiased;
    border: none;

    &:focus {
      border: 0 none;
      outline: 0;
    }
  }

  button {
    cursor: pointer;
  }
  
  a {
    all: unset;
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }
`