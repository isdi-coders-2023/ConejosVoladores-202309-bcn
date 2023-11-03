import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { render, screen } from "@testing-library/react";
import CharactersWrapper from "../../features/characters/store/CharactersWrapper";
import { MemoryRouter } from "react-router-dom";
import UiContextWrapper from "../../features/Ui/store/UiContextWrapper";
import CharacterList from "./CharacterList";
import CharactersContext from "../../features/characters/store/CharactersContext";
import mockCharacters from "../../mocks/mockData";
import { characterApiToCharacter } from "../../data/apiSmash";

describe("Given the component CharacterList", () => {
  describe("When CharacterList is initialize", () => {
    test("It should have strated the list", () => {
      const ulTagName = "list";
      const liTagName = "listitem";

      render(
        <UiContextWrapper>
          <CharactersWrapper>
            <ThemeProvider theme={mainTheme}>
              <CharacterList />
            </ThemeProvider>
          </CharactersWrapper>
        </UiContextWrapper>,
      );

      const elementList = screen.queryByRole(ulTagName);
      const elementItemList = screen.queryByRole(liTagName);

      expect(elementList).toBeInTheDocument();
      expect(elementItemList).toBeNull();
    });
  });

  describe("When we recive data of characters", () => {
    test("Then it should return Mario and Donkey Kong", () => {
      const mario = "Mario";
      const donkeyKong = "Donkey Kong";
      const loadCharacters = () => {};
      const characters = mockCharacters.map((characterApi) =>
        characterApiToCharacter(characterApi),
      );

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter initialEntries={["/"]}>
            <CharactersContext.Provider value={{ characters, loadCharacters }}>
              <CharacterList />
            </CharactersContext.Provider>
          </MemoryRouter>
        </ThemeProvider>,
      );

      const marioElement = screen.getByRole("heading", {
        name: mario,
      });
      const donkeyKongElement = screen.getByRole("heading", {
        name: donkeyKong,
      });

      expect(marioElement).toBeInTheDocument();
      expect(donkeyKongElement).toBeInTheDocument();
    });
  });
});
