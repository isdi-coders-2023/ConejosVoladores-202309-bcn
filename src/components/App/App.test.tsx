import { render, screen } from "@testing-library/react";
import CharacarterProviderWapper from "../../features/characters/strore/CharactersWapper";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given component App", () => {
  describe("When it is render", () => {
    test("It should have a HTMLElement main", () => {
      render(
        <CharacarterProviderWapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </CharacarterProviderWapper>,
      );
      const elementMain = screen.queryByRole("main");

      expect(elementMain).toBeInTheDocument();
    });
  });
});
