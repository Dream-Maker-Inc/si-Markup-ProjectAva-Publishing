import { PaletteOptions } from "@mui/material";

export enum Color {
  Primary = "#ffffff",
  Secondary = "#f2f2f2",
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: Color.Primary,
  },
  secondary: {
    main: Color.Secondary,
  },
  text: {},
  background: {},
};
