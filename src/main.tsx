import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import GlobalStyles from "./styles/GlobalStyles";
import CharacterProviderWrapper from "./features/characters/strore/CharactersWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CharacterProviderWrapper>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CharacterProviderWrapper>
  </React.StrictMode>,
);
