import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: "#bdbdbd",
      },
      secondary: {
        main: "#212121",
      },
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
        ].join(','),
        }
  });

  theme = responsiveFontSizes(theme);

  export default theme