import '../styles/globals.css';
import Layout from 'components/layout/Layout';
import ThemeProvider from 'context/themeContext';

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
