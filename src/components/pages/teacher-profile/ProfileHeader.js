import { Box, Card, CardMedia, CardContent, Typography, Button, Avatar, Stack } from '@mui/material';
// import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { teachers } from 'assets/dummyDatabase';
// import { breakpoints } from 'utils/globalVariables';
// import CardActionsFlexRight from 'components/common/CardActionsFlexRight';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import { amber } from '@mui/material/colors';

const ProfileHeader = (props) => {
    const { isLargetThanMd } = props;
    const teacher = teachers[3];
    const { bannerImageUrl, age, major, name, sex, profileImageUrl } = teacher;

    const profileWidth = isLargetThanMd ? 16 * 8 : 16 * 6;
    const profileSx = {
        width: profileWidth,
        height: profileWidth,
        transform: { md: `translateY(-${profileWidth / 2 + 16}px)` },
        border: 'white 4px solid',
        mr: 2,
        mb: { xs: 1, md: 0 }
    }

    return (
        <Card sx={{ boxShadow: 'none' }}>
            <CardMedia
                component="img"
                height={isLargetThanMd ? 16 * 12 : 16 * 8}
                image={bannerImageUrl}
                alt="banner"
            />
            <CardContent>
                <Box sx={{ display: { xs: 'block', md: 'flex' }, height: { xs: 16 * 6, md: 16 * 5 }, transform: { xs: 'translateY(-80px)', md: 'none' } }}>
                    <Avatar
                        alt="Profile"
                        src={profileImageUrl}
                        sx={profileSx}
                    />
                    <Box>
                        <Typography variant="h5" sx={{ mr: 1 }}>{name}</Typography>
                        <Typography variant="body1" sx={{ color: 'rgb(0 0 0 /0.7)' }}>東京大学・{major} / {age}歳・{sex}</Typography>
                        <Typography variant="body1"><StarRoundedIcon sx={{ color: amber[500] }} /><StarRoundedIcon sx={{ color: amber[500] }} /><StarRoundedIcon sx={{ color: amber[500] }} /><StarRoundedIcon sx={{ color: amber[500] }} /><StarHalfRoundedIcon sx={{ color: amber[500] }} /></Typography>
                    </Box>

                </Box>
                {/* <Box>
                    <Typography variant="h6">料金</Typography>
                    <Typography variant="body1">体験授業千円 / 30分</Typography>
                </Box> */}
            </CardContent>
            {/* <CardActionsFlexRight>
                <Button variant="contained" size='large' endIcon={<SendRoundedIcon />}>体験授業を申し込む</Button>
            </CardActionsFlexRight> */}
        </Card>
    )
}

export default ProfileHeader