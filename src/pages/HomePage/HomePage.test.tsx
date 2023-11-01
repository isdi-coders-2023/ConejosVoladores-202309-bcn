import { ThemeProvider } from "styled-components";
import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import CharacarterWrapper from "../../features/characters/store/CharactersWrapper";

describe("Given a HomePage component", () => {
  describe("When it is called", () => {
    test("Then it should show a heading with the text Characters", () => {
      const expectedText = "Characters";

      render(
        <CharacarterWrapper>
          <ThemeProvider theme={mainTheme}>
            <HomePage />
          </ThemeProvider>
        </CharacarterWrapper>,
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
