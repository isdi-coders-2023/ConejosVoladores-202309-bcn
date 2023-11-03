import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import CharacarterWrapper from "../../features/characters/store/CharactersWrapper";

describe("Given component App", () => {
  describe("When it is render", () => {
    test("It should have a HTMLElement main", async () => {
      render(
        <CharacarterWrapper>
          <ThemeProvider theme={mainTheme}>
            <MemoryRouter initialEntries={[{ pathname: "/" }]}>
              <App />
            </MemoryRouter>
          </ThemeProvider>
        </CharacarterWrapper>,
      );
      const homePageElement = screen.getByRole("heading", {
        name: "Characters",
      });

      expect(homePageElement).toBeInTheDocument();
    });
  });
});
