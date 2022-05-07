import Head from "next/head"
import Home from "components/pages/teacher-profile/Home"

// 先生のプロフィール画面
const Index = () => {
    return (
        <>
            <Head>
                <title>講師のプロフィール</title>
            </Head>

            <Home />
        </>
    )
}

export default Index