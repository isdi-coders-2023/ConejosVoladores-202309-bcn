import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Button from "./Button";
import { BrowserRouter } from "react-router-dom";

describe("Given a Button component", () => {
  describe("When it is rendered with prop type `disabled`", () => {
    test("Then it should show a disabled button", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Button
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              disabled={true}
              type={"button"}
              children={""}
            />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const disabledButton = screen.getByRole("button");

      expect(disabledButton).toBeDisabled();
    });
  });

  describe("When it is rendered with prop onClick", () => {
    test("Then it should call onClick when clicked", () => {
      const onClick = vi.fn();

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Button
              onClick={onClick}
              disabled={false}
              type={"button"}
              children={""}
            />
          </ThemeProvider>
        </BrowserRouter>,
      );
      fireEvent.click(screen.getByRole("button"));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
