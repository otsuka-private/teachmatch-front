import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchBox from "./SearchBox";
import TeacherCardList from "./TeacherCardList";

const Home = () => {
    const theme = useTheme();
    const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <SearchBox isLargerThanMd={isLargerThanMd} />
            <TeacherCardList isLargerThanMd={isLargerThanMd} />
        </>
    )
}

export default Home