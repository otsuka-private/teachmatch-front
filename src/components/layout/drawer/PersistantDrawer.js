import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Drawer, Toolbar, Typography, Divider, IconButton } from '@mui/material';
// ?: これなんだ？AppBarとは別物なのか？
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DrawerContent from './DrawerContent';
import { blue, grey } from '@mui/material/colors';

// TODO: MUIからコピーしてきただけであまり意味を理解していない、コード分割などしてきれいにするように
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const drawerStyle = {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    }
}

const PersistentDrawer = (props) => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    {!open && <IconButton color="inherit" onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>Teach Match</Typography>
                    <IconButton color='inherit'><AccountCircleRoundedIcon /></IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" open={open} sx={drawerStyle} >
                <DrawerHeader>
                    <Typography variant="body1" sx={{ color: grey[500], fontSize: '0.9rem' }}>開発のルーティング用</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <DrawerContent />
            </Drawer>
            <Main open={open} sx={{ bgcolor: blue[50] }}>
                <DrawerHeader />
                {props.children}
            </Main>
        </Box>
    );
}

export default PersistentDrawer;
