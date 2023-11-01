import { ThemeProvider } from "styled-components";
import CharacarterProviderWapper from "../../features/characters/strore/CharactersWapper";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../styles/GlobalStyles";
import mainTheme from "../../styles/mainTheme";
import CharacterList from "./CharacterList";
import { render, screen } from "@testing-library/react";

describe("Given the component CharacterList", () => {
  describe("When CharacterList is initialize", () => {
    test("It should have strated the list", () => {
      const ulTagName = "list";
      const liTagName = "listitem";

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

      const elementList = screen.queryByRole(ulTagName);
      const elementItemList = screen.queryByRole(liTagName);

      expect(elementList).toBeInTheDocument();
      expect(elementItemList).toBeNull();
    });
  });
});
