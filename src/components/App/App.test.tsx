import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CharacarterWrapper from "../../features/characters/store/CharactersWrapper";

describe("Given component App", () => {
  describe("When is initialize", () => {
    beforeAll(() => {
      render(
        <CharacarterWrapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </CharacarterWrapper>,
      );
    });
    test("It should have a HTMLElement main", () => {
      const elementMain = screen.queryByRole("main");

      expect(elementMain).toBeInTheDocument();
    });
  });
});
