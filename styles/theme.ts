import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";

export const theme = extendTheme({
  breakpoints,
  colors: {
    primary: {
      100: '#008FFF',
      200: '#0085F2',
      300: '#0062B3',
      500: '#003865',
      600: '#003F73',
      700: '#002A4D',
    },
    secondary: {
      100: '#47CFFF',
      200: '#47CBFF',
      300: '#44C1F2',
      500: '#41B6E6',
      600: '#3698BF',
      700: '#1D5166',
    },
  },
  fonts: {
    body: "Poppins, Roboto, system-ui, sans-serif",
    heading: "Noir, Roboto, Georgia, serif",
  },
});
