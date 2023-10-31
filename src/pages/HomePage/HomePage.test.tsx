import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";

describe("Given a HomePage component", () => {
  describe("When it is call", () => {
    test("Then it should show heading with text Character");

    const expectedText = "Characters";

    render(<HomePage />);

    const text = screen.getByText(expectedText);

    expect(text).toBeInTheDocument();
  });
});
