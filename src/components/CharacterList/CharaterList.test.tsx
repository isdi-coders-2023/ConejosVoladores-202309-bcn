import { ThemeProvider } from "styled-components";
import CharacarterProviderWapper from "../../features/characters/strore/CharactersWapper";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../styles/GlobalStyles";
import mainTheme from "../../styles/mainTheme";
import CharacterList from "./CharacterList";
import { render, screen } from "@testing-library/react";
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
describe("Given the component CharacterList", () => {
  describe("When CharacterList is initialize", () => {
    test("It should have strated the list", async () => {
      const CharacterList = await screen.findByRole("list");

      expect(CharacterList).toBeInTheDocument();
    });
  });
});
