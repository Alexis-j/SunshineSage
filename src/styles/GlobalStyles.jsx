import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.mainText};
    transition: background 0.3s ease, color 0.3s ease;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1,h2,h3,h4,h5,h6,p,span {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export default GlobalStyles;
