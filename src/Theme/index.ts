import { DefaultTheme, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { IColors, IBrandColors, ISizes } from "./styled";

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

const Spacing: ISizes = {
  small: ".5rem",
  base: "1rem",
  large: "1.5rem",
};

const Padding: ISizes = {
  small: ".5rem",
  base: "1rem",
  large: "1.5rem",
};

const Border = {
  radius: {
    small: "2px",
    base: "4px",
    large: "6px",
  },
  borderWidth: {
    small: "2px",
    base: "4px",
    large: "6px",
  },
  borderStyle: "solid",
};

const FontStyles = {
  family: {
    sansSerif: "Helvetica",
    serif: "something",
  },
  size: {
    small: "14px",
    base: "16px",
    large: "18px",
  },
  weight: {
    small: "300",
    base: "500",
    large: "700",
  },
};

const Theme: DefaultTheme = {
  colors: { ...Colors },
  brandColors: { ...BrandColors },
  font: { ...FontStyles },
  spacing: { ...Spacing },
  padding: { ...Padding },
  border: { ...Border },
  status: {
    success: Colors.green,
    warning: Colors.yellow,
    error: Colors.red,
  },
  input: {
    padding: {
      paddingX: Padding.small,
      paddingY: Padding.base,
    },
    border: {
      borderWidth: Border.borderWidth.base,
      borderStyle: Border.borderStyle,
      borderColor: Colors.light,
      borderRadius: Border.radius.base,
    },
  },
  button: {
    padding: {
      paddingX: Padding.small,
      paddingY: Padding.base,
    },
    font: {
      fontSize: FontStyles.size.base,
      fontWeight: FontStyles.weight.base,
      fontFamily: FontStyles.family.sansSerif,
    },
    border: {
      borderWidth: Border.borderWidth.base,
      borderStyle: Border.borderStyle,
      borderRadius: Border.radius.base,
    },
  },
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
