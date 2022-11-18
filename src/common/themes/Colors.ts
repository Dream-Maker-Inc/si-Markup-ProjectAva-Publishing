import { PaletteOptions } from "@mui/material";

export enum Color {
  Primary = "#ffffff",
  Secondary = "#f2f2f2",

  LightWhite = "#F1F1F1",
  LightPink = "#FF71E4",
  LightGreen = "#A1FF92",
  LightBlue = "#4ADEFF",
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: Color.Primary,
  },
};
