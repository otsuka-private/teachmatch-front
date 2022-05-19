import { useContext } from "react";
import { Snackbar as MuiSnackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { snackbarContext } from "contexts/snackbarContext";

const Snackbar = () => {
    const snackbarCtx = useContext(snackbarContext);
    const closeHandler = () => {
        snackbarCtx.closeSnackbar();
    };

    return (
        <MuiSnackbar open={snackbarCtx.toOpen} autoHideDuration={4000} onClose={closeHandler}>
            <MuiAlert severity={snackbarCtx.severity} sx={{ width: '100%' }} variant="filled">{snackbarCtx.message}</MuiAlert>
        </MuiSnackbar>
    );
};

export default Snackbar;