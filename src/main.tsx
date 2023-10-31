import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import GlobalStyle from "./styles/GlobalStyles";
import CharacarterProviderWapper from "./features/characters/strore/CharactersWapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CharacarterProviderWapper>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CharacarterProviderWapper>
  </React.StrictMode>,
);
