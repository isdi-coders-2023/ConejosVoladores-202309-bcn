import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../styles/GlobalStyles";
import App from "./App";
import CharacarterProviderWrapper from "../../features/characters/Store/CharactersWrapper";

describe("Given component App", () => {
  describe("When is initialize", () => {
    beforeAll(() => {
      render(
        <CharacarterProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <GlobalStyles />
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </CharacarterProviderWrapper>,
      );
    });
    test("It should have a HTMLElement main", () => {
      const elementMain = screen.queryByRole("main");

      expect(elementMain).toBeInTheDocument();
    });
  });
});
