import { useRef } from "react";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, TwitterAuthProvider } from "firebase/auth";
import { Card, CardContent, Button, TextField, Grid, Typography, Divider, Stack, Container, CardActions, Link, Box } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { blue, grey, lightBlue, red } from "@mui/material/colors";
import ContainedButton from "components/common/ContainedButton";
import { auth } from "lib/firebase";

const LoginHome = () => {
    const userIdInput = useRef();
    const passwordInput = useRef();

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const loginWithTwitter = () => {
        const twitterProvider = new TwitterAuthProvider();
        signInWithPopup(auth, twitterProvider)
            .then(result => {
                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                const credential = TwitterAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const secret = credential.secret;

                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = TwitterAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const loginWithEmail = () => {
        const userId = userIdInput.current.value;
        const password = passwordInput.current.value;
        signInWithEmailAndPassword(auth, userId, password)
            .then(userCredential => {
                const user = userCredential.user;
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="body1"><SchoolRoundedIcon sx={{ fontSize: '2rem', color: blue[500], mb: 2 }} /></Typography>
                        <Typography variant="h5" sx={{ mb: '1rem' }}>SNSアカウントでログイン</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '20rem', m: '0 auto' }}>
                            <Button variant="contained" size="large" sx={{ bgcolor: red[500], fontWeight: 700, mb: { xs: '0.5rem' } }} onClick={loginWithGoogle} startIcon={<GoogleIcon />}>Google</Button>
                            <Button variant="contained" size="large" sx={{ bgcolor: lightBlue[500], fontWeight: 700, mb: { xs: '0.5rem' } }} onClick={loginWithTwitter} startIcon={<TwitterIcon />}>Twitter</Button>
                            <Button variant="contained" size="large" sx={{ bgcolor: "#000", fontWeight: 700, mb: { xs: '0.5rem' } }} startIcon={<AppleIcon />}>Apple</Button>
                            <Button variant="contained" size="large" sx={{ bgcolor: blue[500], fontWeight: 700, mb: { xs: '0.5rem' } }} startIcon={<FacebookIcon />} >Facebook</Button>
                            <Button variant="contained" size="large" sx={{ bgcolor: grey[900], fontWeight: 700, mb: { xs: '0.5rem' } }} startIcon={<GitHubIcon />}>Github</Button>
                        </Box>
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
                            <ContainedButton fullWidth onClick={loginWithEmail} text='ログイン' />
                            <Button fullWidth>アカウントを作成</Button>
                        </Stack>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default LoginHome