import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import CharacarterWrapper from "../../features/characters/store/CharactersWrapper";

describe("Given component App", () => {
  describe("When it is render", () => {
    test("Then it should have go to HomePage", async () => {
      render(
        <CharacarterWrapper>
          <ThemeProvider theme={mainTheme}>
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </ThemeProvider>
        </CharacarterWrapper>,
      );

      const headingElment = screen.getByRole("heading", {
        name: "Characters",
      });

      expect(headingElment).toBeInTheDocument();
    });
  });
});
