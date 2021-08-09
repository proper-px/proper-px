import "styled-components";

export interface IBrandColors {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface IColors {
  lighter: string;
  light: string;
  dark: string;
  darker: string;
  white: string;
  black: string;
  red: string;
  yellow: string;
  green: string;
}

export interface ISpacing {
  small: string;
  base: string;
  large: string;
}

export interface IPadding {
  small: string;
  base: string;
  large: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IColors;
    brandColors: IBrandColors;
    spacing: ISpacing;
    padding: IPadding;
  }
}
