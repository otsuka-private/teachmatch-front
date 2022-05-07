import { CardContent, Typography, Link } from "@mui/material";
import { blue } from "@mui/material/colors";
import CardWithNoShadow from "components/common/CardWithNoShadow";

const ClassroomHeader = () => {
    return (
        <CardWithNoShadow sx={{}}>
            <CardContent>
                <Typography variant="h5">授業の情報</Typography>
                <Typography variant="h6">時間: 18:00 - 19:30</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>授業はこちらから</Typography>
                <Typography variant="body1"><Link href="https://google.com" sx={{}}>https://zoom.us/zoom-link-something</Link></Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>講師 : 佐藤先生</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>科目 : 世界史</Typography>
            </CardContent>
        </CardWithNoShadow>
    )
}

export default ClassroomHeader