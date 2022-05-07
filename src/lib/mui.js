import { createTheme } from "@mui/material";
import { blue, pink, red } from "@mui/material/colors";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            // red or pink
            main: red[500]
        }
    },
    typography: {
        fontFamily: '"Roboto", "Zen Kaku Gothic New", sans-serif;'
    }
});

