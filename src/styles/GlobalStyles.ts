import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.cdnfonts.com/css/new-super-mario-font-u");

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  h1,
  h2,
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
    font-family: ${({ theme }) => theme.typography["main-font-family"]};
    color: ${({ theme }) => theme.color["main-font"]};
    background-color: ${({ theme }) => theme.color["main-background"]};
    font-size: ${({ theme }) => theme.typography["properties-size"]};
  }

`;

export default GlobalStyle;
