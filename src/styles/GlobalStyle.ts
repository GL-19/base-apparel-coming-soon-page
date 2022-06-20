import { createGlobalStyle } from "styled-components";
import bg from "../images/bg-pattern-desktop.svg";

export const GlobalStyle = createGlobalStyle` 
  :root {
    --desatured-red: hsl(0, 36%, 70%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    max-width: 100vw;
    max-height: 100vh;
    margin: 0 auto;

    font-family: 'Josefin Sans', sans-serif;

    background: url(${bg}) no-repeat;
  }
`;
