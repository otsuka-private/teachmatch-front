import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProfileHeader from "components/pages/teacher-profile/ProfileHeader";
import AboutCard from "components/pages/teacher-profile/AboutCard";
import AboutCardPC from "components/pages/teacher-profile/AboutCardPC";
import DetailCard from "components/pages/teacher-profile/DetailCard";
import PriceCard from "components/pages/teacher-profile/PriceCard";
import MessageCardPC from "components/pages/teacher-profile/MessageCardPC";
import { teachers } from 'assets/dummyDatabase';
import { useEffect, useState } from 'react';

const teacher = teachers[3];

const TeacherProfileHome = () => {
    const [teacherData, setTeacherData] = useState({});
    const theme = useTheme();
    const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));
    useEffect(() => {
        const getTeacherData = async () => {
            const res = await fetch('http://126.227.65.161/teacher/profile?id=iWktAruR4DcgAfXbIxZXQQZF0YX2');
            const result = await res.json();
            setTeacherData(result.result);
        }

        getTeacherData();
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ProfileHeader isLargerThanMd={isLargerThanMd} teacher={teacher} />
            </Grid>
            {isLargerThanMd &&
                <>
                    <Grid item lg={4}>
                        <Grid container spacing={2} >
                            <Grid item lg={12}>
                                <PriceCard teacher={teacher} />
                            </Grid>
                            <Grid item lg={12}>
                                <AboutCardPC teacher={teacher} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={8}>
                        <Grid container spacing={2}>
                            <Grid item lg={12}>
                                <MessageCardPC teacher={teacher} />
                            </Grid>
                            <Grid item lg={12}>
                                <DetailCard teacher={teacher} />
                            </Grid>
                        </Grid>
                    </Grid>
                </>}
            {!isLargerThanMd &&
                <>
                    <Grid item xs={12}>
                        <PriceCard teacher={teacher} />
                    </Grid>
                    <Grid item xs={12}>
                        <AboutCard teacher={teacher} />
                    </Grid>
                    <Grid item xs={12}>
                        <DetailCard />
                    </Grid>
                </>}
        </Grid>
    )
}

export default TeacherProfileHome