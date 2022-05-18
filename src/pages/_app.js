import '../styles/globals.css';
import Layout from 'components/layout/Layout';
import ThemeProvider from 'context/themeContext';
import { firebaseApp } from 'lib/firebase';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
