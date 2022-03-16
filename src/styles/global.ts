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

  img {
    width: 100%;
  }

  //delete later
  .agent {
    width: 525px;
    height: 800px;
    object-fit: cover;
  }

  .background {
    position: absolute;
    z-index: -1;
    left: 80px;
    width: 30%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--black);
    width: 3rem;
    height: 3rem;

    &:hover {
      color: var(--red);
    }
  }

  //loading
  .loading {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--red);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`