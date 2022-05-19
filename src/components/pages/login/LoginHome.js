import { useRef, useContext } from "react";
import Link from "next/link";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, TwitterAuthProvider } from "firebase/auth";
import { Card, CardContent, Button, TextField, Grid, Typography, Divider, Stack, CardActions, Link as MuiLink } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import { blue, grey, lightBlue, red } from "@mui/material/colors";
import { v4 as uuid } from "uuid";
import ContainedButton from "components/common/ContainedButton";
import { auth } from "lib/firebase";
import { snackbarContext } from "contexts/snackbarContext";

const LoginHome = (props) => {
    const { variant } = props;
    const isForLogin = variant === 'signup' ? false : true;
    const emailAddressInput = useRef();
    const passwordInput = useRef();
    const snackbarCtx = useContext(snackbarContext);

    const openSnackbarWhenLogin = () => snackbarCtx.openSnackbar({ message: 'ログインしました' });
    const openSnackbarWhenSignUp = () => snackbarCtx.openSnackbar({ message: 'ユーザー登録に成功しました' });
    const openSnackbarWhenLoginFaied = () => snackbarCtx.openSnackbar({ message: 'ログインに失敗しました', severity: 'error' });

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                openSnackbarWhenLogin();
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    const loginWithTwitter = () => {
        const twitterProvider = new TwitterAuthProvider();
        signInWithPopup(auth, twitterProvider)
            .then(result => {
                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app"s credentials to access the Twitter API.
                const credential = TwitterAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const secret = credential.secret;
                // The signed-in user info.
                const user = result.user;
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = TwitterAuthProvider.credentialFromError(error);
            });
    }

    const loginWithEmail = () => {
        const emailAddress = emailAddressInput.current.value;
        const password = passwordInput.current.value;
        if (isForLogin) {
            signInWithEmailAndPassword(auth, emailAddress, password)
                .then(userCredential => {
                    const user = userCredential.user;
                    openSnackbarWhenLogin();
                })
                .catch(error => {
                    const errorMessage = error.message;
                    openSnackbarWhenLoginFaied();
                });
        } else {
            createUserWithEmailAndPassword(auth, emailAddress, password)
                .then(userCredential => {
                    // Signed in
                    const user = userCredential.user;
                    openSnackbarWhenSignUp();
                })
                .catch(error => {
                    const errorMessage = error.message;
                });
        }
    }

    const signInWithSNSButtons = [{
        text: "google",
        icon: <GoogleIcon />,
        onClick: loginWithGoogle,
        bgcolor: red[500]
    }, {
        text: "twitter",
        icon: <TwitterIcon />,
        onClick: loginWithTwitter,
        bgcolor: lightBlue[500]
    }, {
        text: "apple",
        icon: <AppleIcon />,
        onClick: null,
        bgcolor: "#000"
    }, {
        text: "faebook",
        icon: <FacebookIcon />,
        onClick: null,
        bgcolor: blue[500]
    }, {
        text: "github",
        icon: <GitHubIcon />,
        onClick: null,
        bgcolor: grey[900]
    }].map(sns => {
        const { text, icon, onClick, bgcolor } = sns;

        return (
            <ContainedButton
                key={uuid()}
                size="large"
                sx={{ bgcolor, fontWeight: 700 }}
                onClick={onClick}
                startIcon={icon}
                text={text}
            />
        )
    })

    return (
        <Grid container spacing={0}>
            <Grid item xs={0} md={2} lg={3}></Grid>
            <Grid item xs={12} md={8} lg={6}>
                <Card>
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="body1"><SchoolRoundedIcon sx={{ fontSize: "2rem", color: blue[500], mb: 2 }} /></Typography>
                        <Typography variant="h5" sx={{ mb: "1rem" }}>SNSアカウントで{isForLogin ? 'ログイン' : '登録'}</Typography>
                        <Stack spacing={1} sx={{ maxWidth: "20rem", m: "0 auto" }}>
                            {signInWithSNSButtons}
                        </Stack>
                        <Divider sx={{ m: "1.5rem 0" }}>または</Divider>
                        <Typography variant="h5" sx={{ mb: "1rem" }}>メールアドレスで{isForLogin ? 'ログイン' : '登録'}</Typography>
                        <Grid container spacing={1} sx={{ textAlign: "left" }}>
                            <Grid item xs={12} md={6}>
                                <TextField size="small" fullWidth variant="outlined" margin="dense" label="メールアドレス" inputRef={emailAddressInput} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField size="small" fullWidth variant="outlined" margin="dense" label="パスワード" inputRef={passwordInput} />
                                {isForLogin && <Typography variant="body2" sx={{ textAlign: "right" }}><MuiLink>パスワードを忘れた場合は</MuiLink></Typography>}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Stack spacing={2} sx={{ width: "100%" }}>
                            <ContainedButton fullWidth size="large" onClick={loginWithEmail} text={isForLogin ? 'ログイン' : '登録する'} />
                            {
                                isForLogin &&
                                <Button fullWidth>
                                    <Link href='/signup'>
                                        <a>アカウントを作成</a>
                                    </Link>
                                </Button>
                            }
                        </Stack>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default LoginHome