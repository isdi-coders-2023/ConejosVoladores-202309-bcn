import { render, screen } from "@testing-library/react";
import Loading from "./Loading";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import UiContextWrapper from "../../features/Ui/store/UiContextWrapper";

describe("Given a Loading component", () => {
  describe("When is render", () => {
    test("Then it should show `logo loading page`", () => {
      const expectedAltText = "logo loading page";
      const expectedImageSrc = "public/images/logo.png";

      render(
        <BrowserRouter>
          <UiContextWrapper>
            <ThemeProvider theme={mainTheme}>
              <Loading />
            </ThemeProvider>
          </UiContextWrapper>
        </BrowserRouter>,
      );

      const loadImage = screen.getByAltText(expectedAltText);
      expect(loadImage).toHaveAttribute("src", expectedImageSrc);
    });
  });
});
