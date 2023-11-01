import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header Component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={mainTheme}>
        <Header />
      </ThemeProvider>,
    );
  });
  describe("When it receives an image with alt property Super Smash Bross logo", () => {
    test("Then it should show an image with the same alt property", () => {
      const expectedText = "Super Smash Bross logo";

      const header = screen.getByAltText(expectedText);

      expect(header).toBeInTheDocument();
    });
  });
});
