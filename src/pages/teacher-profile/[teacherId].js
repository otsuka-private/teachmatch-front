import Head from "next/head"
import TeacherProfileHome from "components/pages/teacher-profile/TeacherProfileHome"

// 先生のプロフィール画面
const Index = () => {
    return (
        <>
            <Head>
                <title>講師のプロフィール</title>
            </Head>

            <TeacherProfileHome />
        </>
    )
}

export default Index