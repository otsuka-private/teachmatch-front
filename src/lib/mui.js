import { createTheme } from "@mui/material";
import { blue, brown, lightBlue, pink, red } from "@mui/material/colors";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            // red or pink
            main: red[500]
        },
        // colors
        red: {
            main: red[500]
        },
        lightBlue: {
            main: lightBlue[500]
        },
        brown: {
            main: brown[500]
        },
        black: {
            main: '#000'
        },
        white: {
            main: '#fff'
        }
    },
    typography: {
        fontFamily: '"Roboto", "Zen Kaku Gothic New", sans-serif;'
    }
});

