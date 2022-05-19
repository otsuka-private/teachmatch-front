import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { customTheme } from "lib/mui";

const ThemeProvider = (props) => {

    return (
        <MuiThemeProvider theme={customTheme}>
            {props.children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider;

