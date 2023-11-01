import { render, screen } from "@testing-library/react";
import CharacarterProviderWapper from "../../features/characters/strore/CharactersWapper";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../../styles/GlobalStyle";
import App from "./App";

describe("Given component App", () => {
  describe("When is initialize", () => {
    beforeAll(() => {
      render(
        <CharacarterProviderWapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <GlobalStyle />
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </CharacarterProviderWapper>,
      );
    });
    test("It should have a HTMLElement main", () => {
      const elementMain = screen.queryByRole("main");

      expect(elementMain).toBeInTheDocument();
    });
  });
});
