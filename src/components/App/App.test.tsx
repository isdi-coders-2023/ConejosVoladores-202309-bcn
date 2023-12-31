import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import CharactersWrapper from "../../features/characters/store/CharactersWrapper";
import UiContextWrapper from "../../features/Ui/store/UiContextWrapper";

describe("Given component App", () => {
  describe("When it is render", () => {
    test("Then it should go to HomePage", async () => {
      render(
        <UiContextWrapper>
          <CharactersWrapper>
            <ThemeProvider theme={mainTheme}>
              <MemoryRouter initialEntries={["/"]}>
                <App />
              </MemoryRouter>
            </ThemeProvider>
          </CharactersWrapper>
        </UiContextWrapper>,
      );

      const headingElment = screen.getByRole("heading", {
        name: "Characters",
      });

      expect(headingElment).toBeInTheDocument();
    });
  });
});
