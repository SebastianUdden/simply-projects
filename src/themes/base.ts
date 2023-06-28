import { DefaultTheme } from "styled-components";
import { JewelFonts } from "./fonts";

export const BaseTheme: DefaultTheme = {
  fontFaces: JewelFonts,
  colors: {
    white: "#FFF",
    black: "#111",
    primary: "#E2001A",
    surfaceWarm: "#F7EFE9",
    surfaceCold: "#F2F2F2",
    surfaceLight: "#FAF5F2",
    subtleText: "#999",
    border: "#E5E5E5",
    borderDark: "#D6D6D6",
    positiveGreen: "#5AA562",
    negativeRed: "#E2001A",
    neutralYellow: "#eeaf2f",
  },
  fonts: {
    primary: "Jewel-base",
    secondary: "Jewel-header",
  },
  headers: {
    font: "primary",
  },
  body: {
    font: "primary",
    color: "black",
    backgroundColor: "white",
  },
  button: {
    borderRadius: "0",
    color: "#fff",
    bgColor: "#111",
  },
  header: {
    color: "#111",
    bgColor: "F2F2F2",
  },
};
