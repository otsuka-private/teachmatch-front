import { useState, createContext } from "react";

export const snackbarContext = createContext({
    toOpen: false,
    message: '',
    severity: 'success',
    openSnackbar: (snackbarInfo) => { },
    closeSnackbar: () => { }
});

export const SnackbarProvider = (props) => {
    const { children } = props;
    const [toOpen, setToOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');

    const openSnackbar = (snackbarInfo) => {
        setToOpen(true);
        setMessage(snackbarInfo.message);
        setSeverity(snackbarInfo.severity || 'success');
    }

    const closeSnackbar = () => {
        setToOpen(false);
        setMessage('');
    }

    const contextValue = {
        toOpen,
        message,
        severity,
        openSnackbar,
        closeSnackbar
    }

    return (
        <snackbarContext.Provider value={contextValue}>
            {children}
        </snackbarContext.Provider>
    );
}