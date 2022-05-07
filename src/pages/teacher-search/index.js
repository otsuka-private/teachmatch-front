import Head from "next/head"
import Home from "components/pages/teacher-search/Home"

// 先生の検索画面
const Index = () => {
    return (
        <>
            <Head>
                <title>講師を検索する</title>
            </Head>
            <Home />
        </>
    )
}

export default Index