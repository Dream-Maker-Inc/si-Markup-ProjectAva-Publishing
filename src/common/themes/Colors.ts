import { PaletteOptions } from "@mui/material";

export enum Color {
  Primary = "#ffffff",
  Secondary = "#f2f2f2",

  BgLightDark = "#0d0803",

  LightWhite = "#F1F1F1",
  LightPink = "#FF71E4",
  LightGreen = "#A1FF92",
  LightBlue = "#4ADEFF",
  LightYellow = "#FFEF92",
  LightPurple = "#8C14EB",

  PrimaryGrey = "#767676",
  DarkGrey = "#33312F",
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: Color.Primary,
  },
};
