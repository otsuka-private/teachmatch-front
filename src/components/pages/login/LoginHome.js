import { Card, CardContent, Button, TextField, Grid, Typography, Divider, Stack, Container } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import CardActionsRight from "components/common/CardActionsRight";
import { useRef } from "react";

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
                    <Typography variant="h4" sx={{ mb: '1rem' }}>Sign in with</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="outlined" size="large" ><GoogleIcon /></Button>
                        <Button variant="outlined" size="large" ><TwitterIcon /></Button>
                        <Button variant="outlined" size="large" ><AppleIcon /></Button>
                        <Button variant="outlined" size="large" ><FacebookIcon /></Button>
                    </Stack>
                    <Divider sx={{ m: '1rem 0' }} />
                    <Typography variant="h4" sx={{ mb: '1rem' }}>Sign in with ID and password</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField fullWidth variant="outlined" margin="dense" label="メールアドレス" inputRef={userIdInput} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth variant="outlined" margin="dense" label="パスワード" inputRef={passwordInput} />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActionsRight>
                    <Button variant="contained" onClick={handleLogin} fullWidth>ログイン</Button>
                </CardActionsRight>
            </Card>
        </Container>

    )
}

export default LoginHome