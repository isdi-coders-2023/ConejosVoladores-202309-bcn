import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import CharacterList from "./CharacterList";
import { render, screen, waitFor } from "@testing-library/react";
import CharactersWrapper from "../../features/characters/store/CharactersWrapper";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

describe("Given the component CharacterList", () => {
  describe("When CharacterList is initialize", () => {
    test("It should have strated the list", () => {
      const ulTagName = "list";
      const liTagName = "listitem";

      render(
        <CharactersWrapper>
          <ThemeProvider theme={mainTheme}>
            <CharacterList />
          </ThemeProvider>
        </CharactersWrapper>,
      );

      const elementList = screen.queryByRole(ulTagName);
      const elementItemList = screen.queryByRole(liTagName);

      expect(elementList).toBeInTheDocument();
      expect(elementItemList).toBeNull();
    });
  });

  describe("When we recive data of characters", () => {
    test("Then it should return Mario and Donkey Kong", async () => {
      const mario = "Mario";
      const donkeyKong = "Donkey Kong";
      await waitFor(() =>
        render(
          <CharactersWrapper>
            <ThemeProvider theme={mainTheme}>
              <MemoryRouter initialEntries={["/"]}>
                <HomePage />
              </MemoryRouter>
            </ThemeProvider>
          </CharactersWrapper>,
        ),
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
