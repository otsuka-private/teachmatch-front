import { CardContent, Typography } from "@mui/material";
import TextBox from "./TextBox";
import CardWithNoShadow from "components/common/CardWithNoShadow";

const MessageCardPC = (props) => {
    const { teacher } = props;
    const { message } = teacher;

    return (
        <CardWithNoShadow>
            <CardContent>
                <Typography variant="h5">メッセージ</Typography>
                <Typography variant="body1">{message}</Typography>
            </CardContent>
        </CardWithNoShadow>
    )
}

export default MessageCardPC