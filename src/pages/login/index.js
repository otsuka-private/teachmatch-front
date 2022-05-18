import { Box } from "@mui/material"
import LoginHome from "components/pages/login/LoginHome"
import Head from "next/head"

const Index = () => {
    return (
        <Box>
            <Head>
                <title>Login</title>
            </Head>

            <LoginHome />
        </Box>

    )
}

export default Index