import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header Component", () => {
  describe("When it receives an image with alt property Super Smash Bross logo", () => {
    test("Then it should show an image with alt property Super Smash Bross logo", () => {
      const expectedText = "Super Smash Bross logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <Header />
        </ThemeProvider>,
      );

      const header = screen.getByAltText(expectedText);

      expect(header).toBeInTheDocument();
    });
  });
});
