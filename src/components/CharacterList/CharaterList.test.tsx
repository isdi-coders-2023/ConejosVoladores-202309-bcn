import { ThemeProvider } from "styled-components";
import CharacarterProviderWapper from "../../features/characters/strore/CharactersWapper";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../styles/GlobalStyles";
import mainTheme from "../../styles/mainTheme";
import CharacterList from "./CharacterList";
import { cleanup, render, screen } from "@testing-library/react";

describe("Given the component CharacterList", () => {
  describe("When CharacterList is initialize", () => {
    beforeEach(() => {
      render(
        <CharacarterProviderWapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <GlobalStyles />
              <CharacterList />
            </BrowserRouter>
          </ThemeProvider>
        </CharacarterProviderWapper>,
      );
    });
    test("It should have strated the list", () => {
      const elementList = screen.queryByRole("list");
      const elementItemList = screen.queryByRole("listitem");

      expect(elementList).toBeInTheDocument();
      expect(elementItemList).toBeNull();
    });
  });
});

afterEach(() => {
  cleanup();
});
