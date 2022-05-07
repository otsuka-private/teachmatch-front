import { Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClassroomHeader from "components/pages/classroom/ClassroomHeader";
import ClassroomChat from "components/pages/classroom/ClassroomChat";
import ClassroomSidebox from "components/pages/classroom/ClassroomSidebox";

const ClassroomHome = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Grid container spacing={2}>
            {isDesktop &&
                <>
                    <Grid item xs={12} lg={8}>
                        <ClassroomChat />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <ClassroomHeader />
                            </Grid>
                            <Grid item xs={12}>
                                <ClassroomSidebox />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
            {!isDesktop &&
                <>
                    <Grid item xs={12}>
                        <ClassroomHeader />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <ClassroomChat />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Grid item xs={12}>
                            <ClassroomSidebox />
                        </Grid>
                    </Grid>
                </>}
        </Grid>
    )
}

export default ClassroomHome