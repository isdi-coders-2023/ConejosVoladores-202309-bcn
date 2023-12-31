import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a NavigationBar component", () => {
  describe("When is rendered", () => {
    test("Then it should show the image `button-home`", () => {
      const expectedAltText = "Home button";
      const expectedImageSrc = "images/button-home.svg";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <NavigationBar />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const homeIcon = screen.getByAltText(expectedAltText);
      expect(homeIcon).toHaveAttribute("src", expectedImageSrc);
    });

    test("Then it should show the image `button-plus`", () => {
      const expectedAltText = "Add character button";
      const expectedImageSrc = "images/button-plus.svg";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <NavigationBar />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const homeIcon = screen.getByAltText(expectedAltText);
      expect(homeIcon).toHaveAttribute("src", expectedImageSrc);
    });
  });

  describe("When is rendered and we are at `/addCharacter`", () => {
    test("Then it should show the image `button-plus.svg` with the className `navigation__icon`", () => {
      const expectedAltText = "Home button";
      const expectedImageClassName = "navigation__icon";

      render(
        <MemoryRouter initialEntries={[{ pathname: "/addCharacter" }]}>
          <ThemeProvider theme={mainTheme}>
            <NavigationBar />
          </ThemeProvider>
        </MemoryRouter>,
      );

      const homeImage = screen.getByAltText(expectedAltText);
      expect(homeImage).toHaveClass(expectedImageClassName);
    });
  });
});
