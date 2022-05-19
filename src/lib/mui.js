import { createTheme } from "@mui/material";
import { amber, blue, brown, lightBlue, pink, red, teal } from "@mui/material/colors";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: red[500]
        },
        success: {
            main: teal[500]
        },
        info: {
            main: blue[500]
        },
        warning: {
            main: amber[500]
        },
        error: {
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

