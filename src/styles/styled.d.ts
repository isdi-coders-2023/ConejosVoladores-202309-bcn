import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      "container-background": "#fbd000";
      "main-background": "#049cd8";
      "error-background": string;
      "check-background": string;
      font: string;
      "secondary-font": string;
    };

    typography: {
      "main-font-family": string;
      "secondary-font-family": string;
      size: string;
    };
  }
}
