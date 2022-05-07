import { Box, CardContent, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import CardWithNoShadow from 'components/common/CardWithNoShadow';
import TextBox from './TextBox';

const AboutCardPC = (props) => {
    const { teacher } = props;

    return (
        <CardWithNoShadow>
            <CardContent>
                <Typography variant="h5">プロフィール</Typography>
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
                            <Box key={uuid()} >
                                <Typography variant="body1">{skill.title}</Typography>
                                <Typography variant="body1">{skill.description}</Typography>
                            </Box>
                        )
                    }
                    )
                    }
                </TextBox>
            </CardContent>
        </CardWithNoShadow>
    )
}

export default AboutCardPC