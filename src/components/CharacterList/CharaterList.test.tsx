import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import CharacterList from "./CharacterList";
import { render, screen } from "@testing-library/react";
import CharacarterProviderWrapper from "../../features/characters/Store/CharactersWrapper";

describe("Given the component CharacterList", () => {
  describe("When CharacterList is initialize", () => {
    test("It should have strated the list", () => {
      const ulTagName = "list";
      const liTagName = "listitem";

      render(
        <CharacarterProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <CharacterList />
          </ThemeProvider>
        </CharacarterProviderWrapper>,
      );

      const elementList = screen.queryByRole(ulTagName);
      const elementItemList = screen.queryByRole(liTagName);

      expect(elementList).toBeInTheDocument();
      expect(elementItemList).toBeNull();
    });
  });
});
