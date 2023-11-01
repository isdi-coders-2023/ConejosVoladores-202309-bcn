import { ThemeProvider } from "styled-components";
import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import CharacarterProviderWrapper from "../../features/characters/store/CharactersWrapper";

describe("Given a HomePage component", () => {
  describe("When it is called", () => {
    test("Then it should show a heading with the text Characters", () => {
      const expectedText = "Characters";

      render(
        <CharacarterProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <HomePage />
          </ThemeProvider>
        </CharacarterProviderWrapper>,
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
