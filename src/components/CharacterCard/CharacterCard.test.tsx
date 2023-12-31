import { render, screen } from "@testing-library/react";
import CharactersWrapper from "../../features/characters/store/CharactersWrapper";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import { CharacterStructure } from "../../features/characters/types";
import CharacterCard from "./CharacterCard";

describe("Given the CharacterCardComponent", () => {
  describe("When is given the information of mario", () => {
    test("it should display mario at least name, img", async () => {
      const marioInformation: CharacterStructure = {
        id: 1,
        name: "Mario",
        availability: "Starter",
        imageUrl:
          "https://raw.githubusercontent.com/HugoVS26/ConejosVoladores-202309-bcn-API/main/images/1.webp",
        appears: ["SSB", "Melee", "Brawl", "SSB4"],
        attack: "Mario Finale",
        smashtype: "Directional",
        series: "Mario",
      };

      render(
        <CharactersWrapper>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <CharacterCard character={marioInformation} />
            </BrowserRouter>
          </ThemeProvider>
        </CharactersWrapper>,
      );

      const name = screen.getByRole("heading") as HTMLHeadingElement;
      const img = screen.getByRole("img", {
        name: "Mario",
      }) as HTMLImageElement;

      expect(img.src).toBe(marioInformation.imageUrl);
      expect(name.textContent).toBe(marioInformation.name);
    });
  });
});
