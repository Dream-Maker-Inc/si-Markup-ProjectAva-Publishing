import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "IBM Plex Mono",
  h1: {
    fontSize: "40px",
  },
  h2: {
    fontSize: "24px",
  },

  subtitle1: {
    fontSize: "40px",
  },
  subtitle2: {
    fontSize: "24px",
  },
  body1: {
    fontSize: "16px",
  },
  body2: {
    fontSize: "14px",
  },
  caption: {
    fontSize: "16px",
  },
};

export const typographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
