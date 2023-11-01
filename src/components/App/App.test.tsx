import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CharacarterWrapper from "../../features/characters/store/CharactersWrapper";

describe("Given component App", () => {
  describe("When it is render", () => {
    test("It should have a HTMLElement main", () => {
      render(
        <CharacarterWrapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </CharacarterWrapper>,
      );
      const elementMain = screen.getByRole("main");

      expect(elementMain).toBeInTheDocument();
    });
  });
});
