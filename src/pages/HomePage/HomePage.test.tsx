import { ThemeProvider } from "styled-components";
import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import CharacarterWrapper from "../../features/characters/store/CharactersWrapper";
import { BrowserRouter } from "react-router-dom";

describe("Given a HomePage component", () => {
  describe("When it is called", () => {
    test("Then it should show a heading with the text Characters", () => {
      const expectedText = "Characters";

      render(
        <CharacarterWrapper>
          <BrowserRouter>
            <ThemeProvider theme={mainTheme}>
              <HomePage />
            </ThemeProvider>
          </BrowserRouter>
        </CharacarterWrapper>,
      );

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
