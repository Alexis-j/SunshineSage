import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.mainText};
    transition: background 0.3s ease, color 0.3s ease;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1,h2,h3,p {
    margin: 0;
  }
`;

export default GlobalStyles;
