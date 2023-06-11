import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: calc(100vw / 1920 * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: 1280px) {
      font-size: calc(100vw / 1280 * 10);
    }

    @media (max-width: 600px) {
      font-size: calc(100vw / 414 * 10);
    }
  }

  body {
    background-color: #F3F2DE;
  }
`

export default GlobalStyles;