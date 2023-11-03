import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import CharacarterWrapper from "./features/characters/store/CharactersWrapper";
import GlobalStyle from "./styles/GlobalStyle";
import "@fontsource-variable/changa";
import UiContextWrapper from "./features/Ui/store/UiContextWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiContextWrapper>
      <CharacarterWrapper>
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </CharacarterWrapper>
    </UiContextWrapper>
  </React.StrictMode>,
);
