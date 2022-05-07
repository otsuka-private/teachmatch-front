import { useState } from "react";
import { Card, CardContent, Typography, Tabs, Tab, Box } from "@mui/material";
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { v4 as uuid } from "uuid";
import TextBox from "./TextBox";
import TabPanel from "components/common/TabPanel";

const AboutCard = (props) => {
    const { teacher } = prosp;
    const [value, setValue] = useState(0);
    const { message } = teacher;

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Card sx={{ boxShadow: 'none' }}>
            <CardContent>
                <Typography variant="h6">私について</Typography>
                <Tabs variant="fullWidth" value={value} onChange={handleChange} >
                    <Tab icon={<ChatRoundedIcon />} iconPosition="start" label="メッセージ" />
                    <Tab icon={<FaceRoundedIcon />} iconPosition="start" label="プロフィール" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TextBox title='メッセージ'>
                        <Typography variant="body1">{message}</Typography>
                    </TextBox>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TextBox title='経歴'>
                        <Typography variant="body1">高校 : {teacher.education.highSchool}</Typography>
                        <Typography variant="body1">中学 : {teacher.education.juniorHighSbool}</Typography>
                    </TextBox>
                    <TextBox title='最寄りの路線'>
                        <Typography variant="body1">{teacher.location.railway}</Typography>
                    </TextBox>
                    <TextBox title='趣味・特技'>
                        {teacher.skills.map(skill => {
                            return (
                                <Box key={uuid()} sx={{ mt: 1 }}>
                                    <Typography variant="body1">{skill.title}</Typography>
                                    <Typography variant="body1">{skill.description}</Typography>
                                </Box>
                            )
                        }
                        )
                        }
                    </TextBox>
                </TabPanel>
            </CardContent>
        </Card>
    )
}

export default AboutCard