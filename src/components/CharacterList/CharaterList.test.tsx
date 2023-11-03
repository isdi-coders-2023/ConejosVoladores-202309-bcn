import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { render, screen, waitFor } from "@testing-library/react";
import CharactersWrapper from "../../features/characters/store/CharactersWrapper";
import { MemoryRouter } from "react-router-dom";
import UiContextWrapper from "../../features/Ui/store/UiContextWrapper";
import CharacterList from "./CharacterList";
import CharactersContext from "../../features/characters/store/CharactersContext";

const characters = [
  {
    id: 1,
    name: "Mario",
    availability: "Starter",
    appears: ["SSB", "Melee", "Brawl", "SSB4"],
    attack: "Mario Finale",
    smashtype: "Directional",
    imageUrl:
      "https://raw.githubusercontent.com/HugoVS26/ConejosVoladores-202309-bcn-API/main/images/1.webp",
    series: "Mario",
  },
  {
    id: 2,
    name: "Donkey Kong",
    availability: "Starter",
    appears: ["SSB", "Melee", "Brawl", "SSB4"],
    attack: "Konga Beat",
    smashtype: "Focused",
    imageUrl:
      "https://raw.githubusercontent.com/HugoVS26/ConejosVoladores-202309-bcn-API/main/images/2.webp",
    series: "Donkey Kong",
  },
];

describe("Given the component CharacterList", () => {
  describe("When CharacterList is initialize", () => {
    test("It should have strated the list", async () => {
      const ulTagName = "list";
      const liTagName = "listitem";

      await waitFor(() =>
        render(
          <UiContextWrapper>
            <CharactersWrapper>
              <ThemeProvider theme={mainTheme}>
                <CharacterList />
              </ThemeProvider>
            </CharactersWrapper>
          </UiContextWrapper>,
        ),
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
