import { AppBar as MuiAppBar, Typography, Toolbar, Button } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const AppBar = (props) => {
    const { drawerWidth, onClick } = props;

    return (
        <MuiAppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
            onClick={onClick}
        >
            <Toolbar>
                <Button color='inherit' sx={{ display: { sm: 'none' } }}><MenuRoundedIcon /></Button>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 600 }}>Teach Match</Typography>
                <Button color='inherit'><PersonRoundedIcon /></Button>
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar