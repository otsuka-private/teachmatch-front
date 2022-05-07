import { AppBar as MuiAppBar, Button, Typography, Toolbar } from '@mui/material';

// ?: なぜか一回cmd+cして再起動しないと変更が反映されない
const AppBar = () => {
    return (
        <MuiAppBar>
            <Toolbar>
                <Button color='inherit'>Home</Button>
                <Typography variant="h6" component="div" sx={{ m: '0 auto' }}>Teach Match</Typography>
                <Button color='inherit' variant='outlined'>Login</Button>
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar