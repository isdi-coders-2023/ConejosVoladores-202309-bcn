import { render, screen } from "@testing-library/react";
import Loading from "./Loading";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import UiContextWrapped from "../../features/Ui/store/UiContextWrapper";

describe("Given a Loading component", () => {
  describe("When is render", () => {
    test("Then it should show `logo loading page`", () => {
      const expectedAltText = "logo loading page";
      const expectedImageSrc = "public/images/logo.png";

      render(
        <BrowserRouter>
          <UiContextWrapped>
            <ThemeProvider theme={mainTheme}>
              <Loading />
            </ThemeProvider>{" "}
          </UiContextWrapped>
        </BrowserRouter>,
      );

      const loadImage = screen.getByAltText(expectedAltText);
      expect(loadImage).toHaveAttribute("src", expectedImageSrc);
    });
  });
});
