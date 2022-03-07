import { createTheme, ThemeOptions } from "@mui/material/styles";

export const grayColors = {
  light: "#FFFFFF0D",
  dark: "#1F2124",
  main: "#283142",
  secondary: "#a9a9a9",
};

const options: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      light: "#99c7de",
      dark: "#598295",
      main: "#80BAD6",
      contrastText: "#000",
    },
    secondary: {
      light: "#151a27",
      dark: "#000000",
      main: "#000000",
      contrastText: "#fff",
    },
    success: {
      light: "#52be7f",
      dark: "#1b7943",
      main: "#27AE60",
      contrastText: "#000",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: ["Space Grotesk", "sans-serif"].join(","),
  },
};
export const appTheme = createTheme(options);
