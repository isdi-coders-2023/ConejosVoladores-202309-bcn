import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it receives an image with the alt property 'logo loading page'", () => {
    test("Then it should show a circle image", () => {
      render(<Loading />);

      const expectedText = "logo loading page";
      const loadingPage = screen.getByAltText(expectedText);

      expect(loadingPage).toBeInTheDocument();
    });
  });
});
