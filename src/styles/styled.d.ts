import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      containerBackground: string;
      disabledButtonBackground: string;
      mainBackground: string;
      errorBackground: string;
      successfullBackground: string;
      mainFont: string;
      secondaryFont: string;
      inputBackground: string;
    };
    typography: {
      mainFontFamily: string;
      secondaryFontFamily: string;
      propertiesSize: string;
      titleSize: string;
      headerSize: string;
      inputTitleSize: string;
      inputTextSize: string;
      titleSize: string;
      headerSize: string;
    };
  }
}
