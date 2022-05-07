import { useState } from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';
import DrawerContent from './DrawerContent';
import AppBar from './AppBar';
import { blue } from '@mui/material/colors';

const drawerWidth = 240;

const ResponsiveDrawer = (props) => {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar drawerWidth={drawerWidth} onClick={handleDrawerToggle} />
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={window}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <DrawerContent />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <DrawerContent />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, mt: '1rem', bgcolor: blue[50], width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;
