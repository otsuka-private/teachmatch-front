import Head from 'next/head'
import ClassroomHome from 'components/pages/classroom/ClassroomHome'

const Index = () => {
    return (
        <>
            <Head>
                <title>授業部屋</title>
            </Head>

            <ClassroomHome />
        </>
    )
}

export default Index