import "styled-components";

declare module "styled-components" {
  export interface Colors {
    white: string;
    black: string;
    primary: string;
    surfaceWarm: string;
    surfaceCold: string;
    surfaceLight: string;
    subtleText: string;
    border: string;
    borderDark: string;
    positiveGreen: string;
    negativeRed: string;
    neutralYellow: string;
  }

  export interface Fonts {
    primary: string;
    secondary: string;
  }
  export interface DefaultTheme {
    colors: Colors;
    headers: {
      uppercaseH1?: boolean;
      font: keyof Fonts;
    };
    body: {
      font: keyof Fonts;
      color: string;
      backgroundColor: string;
    };
    fontFaces: string[];
    fonts: Fonts;
    button?: {
      borderRadius?: string;
      color?: string;
      bgColor?: string;
    };
    header: {
      color: string;
      bgColor: string;
    };
  }
}
