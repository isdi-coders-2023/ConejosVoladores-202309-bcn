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
  });
  describe("When is rendered and we are at `/home`", () => {
    test("Then it should show the image `button-home--active`", () => {
      const expectedAltText = "Home button";
      const expectedImageSrc = "images/button-home--active.svg";

      render(
        <MemoryRouter initialEntries={[{ pathname: "/home" }]}>
          <ThemeProvider theme={mainTheme}>
            <NavigationBar />
          </ThemeProvider>
        </MemoryRouter>,
      );

      const homeIcon = screen.getByAltText(expectedAltText);
      expect(homeIcon).toHaveAttribute("src", expectedImageSrc);
    });
  });
  describe("When is rendered", () => {
    test("Then it should show the image `button-add`", () => {
      const expectedAltText = "Add button";
      const expectedImageSrc = "images/button-add.svg";

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
  describe("When is rendered and we are at `/add`", () => {
    test("Then it should show the image `button-add--active`", () => {
      const expectedAltText = "Add button";
      const expectedImageSrc = "images/button-add--active.svg";

      render(
        <MemoryRouter initialEntries={[{ pathname: "/add" }]}>
          <ThemeProvider theme={mainTheme}>
            <NavigationBar />
          </ThemeProvider>
        </MemoryRouter>,
      );

      const homeIcon = screen.getByAltText(expectedAltText);
      expect(homeIcon).toHaveAttribute("src", expectedImageSrc);
    });
  });
});
