import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Container from 'components/layout/Container';
import PersistentDrawer from './drawer/PersistantDrawer';

const Layout = (props) => {
    return (
        <Box>
            <CssBaseline />
            <PersistentDrawer>
                <Container>
                    {props.children}
                </Container>
            </PersistentDrawer>
        </Box>
    )
}

export default Layout