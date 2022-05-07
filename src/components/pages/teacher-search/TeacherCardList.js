import { Grid } from "@mui/material";
import { v4 as uuid } from "uuid";
import { teachers as teacherDatabase } from "assets/dummyDatabase";
import TeacherCard from "./TeacherCard";

const TeacherCardList = () => {
    const teachers = [...teacherDatabase, ...teacherDatabase, ...teacherDatabase];

    const teacherCards = teachers.map(teacher => {
        return (
            <Grid item key={uuid()} xs={12} sm={6} lg={4} >
                <TeacherCard data={teacher} />
            </Grid>
        )
    });

    return (
        <Grid container spacing={2} >
            {teacherCards}
        </Grid >
    )
}

export default TeacherCardList