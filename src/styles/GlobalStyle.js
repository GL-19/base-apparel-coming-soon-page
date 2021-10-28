import { createGlobalStyle } from "styled-components";
import bg from "../images/bg-pattern-desktop.svg";

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    background-color: hsl(0, 36%, 70%);

    @media screen and (min-width: 850px) {
      background: url(${bg}) no-repeat ;
    }
  }
`;
