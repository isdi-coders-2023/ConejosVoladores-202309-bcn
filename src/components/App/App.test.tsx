import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../styles/GlobalStyles";
import App from "./App";
import CharacarterProviderWapper from "../../features/characters/Store/CharactersWapper";

describe("Given component App", () => {
  describe("When is initialize", () => {
    beforeAll(() => {
      render(
        <CharacarterProviderWapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <GlobalStyles />
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
