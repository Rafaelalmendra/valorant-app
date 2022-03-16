import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4655',
      dark: '#0F1923',
      light: '#ECE8E1',
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Archivo',
      'sans-serif',
    ].join(','),
    allVariants: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      fontWeight: 500,
      textAlign: 'justify',
    },
    h1: {
      fontSize: '4rem',
      fontWeight: '600',
      color: '#FF4655',
      textTransform: "uppercase",
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontSize: '1.2rem',
      fontWeight: 600,
      color: '#0F1923',
      textTransform: "uppercase",
    }
  },
});