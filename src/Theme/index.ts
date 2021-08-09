import { DefaultTheme, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { IColors, IBrandColors, ISpacing, IPadding } from "./styled";

const BrandColors: IBrandColors = {
  primary: "#102e4a",
  secondary: "#1A4975",
  tertiary: "#368F8B",
};

const Colors: IColors = {
  lighter: "#F2F2F2",
  light: "#CCCCCC",
  dark: "#A3A3A3",
  darker: "#7A7A7A",
  white: "#ffffff",
  black: "#000000",
  red: "red",
  yellow: "yellow",
  green: "green",
};

const Spacing: ISpacing = {
  small: ".5rem",
  base: "1rem",
  large: "1.5rem",
};

const Padding: IPadding = {
  small: ".5rem",
  base: "1rem",
  large: "1.5rem",
};

const Theme: DefaultTheme = {
  colors: { ...Colors },
  brandColors: { ...BrandColors },
  spacing: { ...Spacing },
  padding: { ...Padding },
};

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
`;

export { Theme, GlobalStyle };
