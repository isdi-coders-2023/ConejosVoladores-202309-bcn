import { ThemeProvider } from "styled-components";
import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";

describe("Given a HomePage component", () => {
  describe("When it is call", () => {
    test("Then it should show heading with text Character");

    const expectedText = "Characters";

    render(
      <ThemeProvider theme={mainTheme}>
        <HomePage />
      </ThemeProvider>,
    );

    const text = screen.getByText(expectedText);

    expect(text).toBeInTheDocument();
  });
});
