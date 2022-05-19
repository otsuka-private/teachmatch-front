import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Container from 'components/layout/Container';
import ResponsiveDrawer from './drawer/ResponsiveDrawer';

const Layout = (props) => {
    const { children } = props;

    return (
        <Box>
            <CssBaseline />
            <ResponsiveDrawer>
                <Container>
                    {children}
                </Container>
            </ResponsiveDrawer>
        </Box>
    )
}

export default Layout