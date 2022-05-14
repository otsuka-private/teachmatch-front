import { useRef } from "react";
import { Card, CardContent, Button, TextField, Grid, Typography, Divider, Stack, Container, CardActions, Link } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { blue } from "@mui/material/colors";

const LoginHome = () => {
    const userIdInput = useRef();
    const passwordInput = useRef();

    const handleLogin = () => {
        const userId = userIdInput.current.value;
        const password = passwordInput.current.value;
    }

    return (
        <Container maxWidth='sm'>
            <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="body1"><SchoolRoundedIcon sx={{ fontSize: '2rem', color: blue[500], mb: 2 }} /></Typography>
                    <Typography variant="h5" sx={{ mb: '1rem' }}>SNSアカウントでログイン</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="outlined" size="large" ><GoogleIcon color="red" /></Button>
                        <Button variant="outlined" size="large" ><TwitterIcon color='lightBlue' /></Button>
                        <Button variant="outlined" size="large" ><AppleIcon color="black" /></Button>
                        <Button variant="outlined" size="large" ><FacebookIcon /></Button>
                    </Stack>
                    <Divider sx={{ m: '1.5rem 0' }}>または</Divider>
                    <Typography variant="h5" sx={{ mb: '1rem' }}>Emailでログイン</Typography>
                    <Grid container spacing={1} sx={{ textAlign: 'left' }}>
                        <Grid item xs={12}>
                            <TextField size="small" fullWidth variant="outlined" margin="dense" label="メールアドレス" inputRef={userIdInput} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField size="small" fullWidth variant="outlined" margin="dense" label="パスワード" inputRef={passwordInput} />
                            <Typography variant="body2" sx={{ textAlign: 'right' }}><Link>パスワードを忘れた場合は</Link></Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <Button variant="contained" onClick={handleLogin} fullWidth size="large">ログイン</Button>
                        <Button fullWidth>アカウントを作成</Button>
                    </Stack>
                </CardActions>
            </Card>
        </Container>

    )
}

export default LoginHome