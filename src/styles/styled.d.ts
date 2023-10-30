import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      secondary: string;
      "error-background": string;
      "check-background": string;
      font: string;
      "secondary-font": string;
    };

    typography: {
      "main-font-fammily": string;
      "secondary-font-family": string;
    };
  }
}
