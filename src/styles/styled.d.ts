import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      "container-background": string;
      "main-background": string;
      "error-background": string;
      "successfull-background": string;
      "main-font": string;
      "secondary-font": string;
      "input-background": string;
    };

    typography: {
      "main-font-family": string;
      "secondary-font-family": string;
      "properties-size": string;
      "title-size": string;
      "header-size": string;
      "input-title-size": string;
      "input-text-size": string;
      "title-size": string;
      "header-size": string;
    };
  }
}
