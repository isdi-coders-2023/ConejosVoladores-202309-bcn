import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import CharacterList from "./CharacterList";
import { getAllByRole, render, screen } from "@testing-library/react";
import CharacarterWrapper from "../../features/characters/store/CharactersWrapper";
import App from "../App/App";
import { MemoryRouter } from "react-router-dom";

describe("Given the component CharacterList", () => {
  describe("When CharacterList is initialize", () => {
    test("It should have strated the list", () => {
      const ulTagName = "list";
      const liTagName = "listitem";

      render(
        <CharacarterWrapper>
          <ThemeProvider theme={mainTheme}>
            <CharacterList />
          </ThemeProvider>
        </CharacarterWrapper>,
      );

      const elementList = screen.queryByRole(ulTagName);
      const elementItemList = screen.queryByRole(liTagName);

      expect(elementList).toBeInTheDocument();
      expect(elementItemList).toBeNull();
    });
  });

  describe("When we recive data of characters", () => {
    test("it expect to have characters cards", () => {
      const expectedNames = ["Characters", "Link", "Yoshi"];
      render(
        <CharacarterWrapper>
          <ThemeProvider theme={mainTheme}>
            <MemoryRouter initialEntries={[{ pathname: "/" }]}>
              <App />
            </MemoryRouter>
          </ThemeProvider>
        </CharacarterWrapper>,
      );

      const mainElement = screen.getByRole("main");
      const headingElements = getAllByRole(mainElement, "heading");

      headingElements.forEach((element, position) => {
        expect(element.textContent).toBe(expectedNames[position]);
      });
    });
  });
});
