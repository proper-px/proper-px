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

export interface ISizes {
  small: string;
  base: string;
  large: string;
}

export interface IShirtSizes {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

export interface IPaddingProperties {
  paddingX: string;
  paddingY: string;
}

export interface IBorderProperties {
  borderWidth: string;
  borderStyle: string;
  borderColor?: string;
  borderRadius?: string;
}

export interface IFontFamilyOptions {
  sansSerif: string;
  serif: string;
}

export interface IFontProperties {
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
}

export interface IInputProperties {
  padding: IPaddingProperties;
  border: IBorderProperties;
}

export interface IStatusProperties {
  success: string;
  warning: string;
  error: string;
}

export interface IButtonProperties {
  padding: IPaddingProperties;
  font: IFontProperties;
  border: IBorderProperties;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IColors;
    brandColors: IBrandColors;
    font: {
      family: IFontFamilyOptions;
      size: ISizes;
      weight: ISizes;
    };
    spacing: ISizes;
    padding: ISizes;
    border: {
      radius: ISizes;
      borderWidth: ISizes;
      borderStyle: string;
    };
    breakpoints: IShirtSizes;
    containerMaxWidths: IShirtSizes;
    status: IStatusProperties;
    input: IInputProperties;
    button: IButtonProperties;
    navbar: {
      bgColor: string;
      fgColor: string;
      linkPadding: string;
      isFixed: boolean;
      barPadding: string;
    };
  }
}
