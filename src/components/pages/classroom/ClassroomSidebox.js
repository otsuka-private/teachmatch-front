import { CardContent, Typography, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import CardWithNoShadow from "components/common/CardWithNoShadow";

const ClassroomSidebox = () => {

    const LinkTextBox = (props) => {

        return (
            <Typography variant="body1" sx={{ mt: 2 }}>
                <Link href="https://google.com" underline="none" sx={{ color: props.color }}>
                    {props.text}
                </Link>
            </Typography>
        )
    }

    return (
        <CardWithNoShadow>
            <CardContent>
                <Typography variant="h5">お困りですか？</Typography>
                <LinkTextBox text="Zoomリンクが開けません" />
                <LinkTextBox text="授業時間になっても先生が来ません" />
                <LinkTextBox text="開始時間に遅刻しそうです" />
                <LinkTextBox text="授業の日程を変更したいです" />
                <br />
                <LinkTextBox text="その他のよくある質問" color={grey[700]} />
                <LinkTextBox text="それでも問題が解決しないときは" color={grey[700]} />
            </CardContent>
        </CardWithNoShadow>
    )
}

export default ClassroomSidebox