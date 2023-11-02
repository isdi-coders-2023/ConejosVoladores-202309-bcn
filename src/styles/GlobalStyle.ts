import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  body {
    margin: 0;
    padding:0;
  }

  button {
    margin:0;
    background-color: transparent;
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    color: ${({ theme }) => theme.color.mainFont};
    background-color: ${({ theme }) => theme.color.mainBackground};
    font-size: ${({ theme }) => theme.typography.propertiesSize};
  }

  .main-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
`;

export default GlobalStyle;
