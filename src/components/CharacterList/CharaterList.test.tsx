import { ThemeProvider } from "styled-components";
import CharacarterProviderWapper from "../../features/characters/strore/CharactersWrapper";
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
            <CharacterList />
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
