import '../styles/globals.css';
import { CssBaseline } from '@mui/material';
import Layout from 'components/layout/Layout';
import ThemeProvider from 'contexts/themeContext';
import { firebaseApp } from 'lib/firebase';
import { SnackbarProvider } from 'contexts/snackbarContext';
import Snackbar from 'components/common/Snackbar';

function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider>
      <SnackbarProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
          <Snackbar />
        </Layout>
      </SnackbarProvider>
    </ThemeProvider>

  )
}

export default MyApp
