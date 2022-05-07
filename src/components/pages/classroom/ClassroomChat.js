import { useState } from "react";
import { Box, CardContent, Typography, Button, TextField, Tabs, Tab, Grid } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardWithNoShadow from "components/common/CardWithNoShadow";
import CardActionsRight from "components/common/CardActionsRight";
import TabPanel from "components/common/TabPanel";

const ClassroomChat = (props) => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    const handleChange = (event, newValue) => setValue(newValue);

    const ChatTabPanel = () => {
        const MessageBox = (props) => {
            const { message, align } = props;
            const justifyContent = align === 'right' ? 'end' : 'start';
            const backgroundColor = align === 'right' ? blue[500] : grey[100];
            const color = align === 'right' ? '#fff' : '#000';

            return (
                <Box sx={{ display: 'flex', mt: 1, mb: { xs: 2, lg: 1 }, justifyContent, }}>
                    <Typography Typography variant="body1" sx={{ backgroundColor, color, pt: 1, pb: 1, pr: 2, pl: 2, borderRadius: '1rem', display: 'inline', fontSize: '1rem', maxWidth: { xs: '70%', lg: '40%' } }
                    }>{message}</Typography >
                </Box>
            )
        }

        return (
            <TabPanel value={value} index={0}>
                <CardWithNoShadow>
                    <CardContent sx={{ p: 0 }}>
                        <Box sx={{ p: { xs: 0, md: 1 }, height: '1000px', maxHeight: { xs: '65vh' }, overflow: 'scroll' }}>
                            <Typography variant="body1" sx={{ mt: 3, mb: 3, fontSize: '0.9rem', textAlign: 'center', color: grey[500], borderRadius: 10 }}>2022/04/09</Typography>
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='生徒からのメッセージ' align='right' />
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='生徒からのメッセージ' align='right' />
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='生徒からのメッセージ' align='right' />
                            <Typography variant="body1" sx={{ mt: 3, mb: 3, fontSize: '0.9rem', textAlign: 'center', color: grey[500], borderRadius: 10 }}>2022/04/10</Typography>
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='生徒からのメッセージ' align='right' />
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='生徒からのメッセージ' align='right' />
                            <Typography variant="body1" sx={{ mt: 3, mb: 3, fontSize: '0.9rem', textAlign: 'center', color: grey[500], borderRadius: 10 }}>2022/04/11</Typography>
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='生徒からのメッセージ' align='right' />
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ' align='right' />
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ' align='right' />
                            <MessageBox message='先生からのメッセージ' align='left' />
                            <MessageBox message='生徒からのメッセージ生徒からのメッセージ生徒からのメッセージ' align='right' />
                        </Box>
                    </CardContent>
                    <CardActionsRight sx={{ p: 0, pt: 2, pb: 2 }} >
                        {isDesktop && <Button size="large" sx={{ mr: 0.5 }}><UploadFileRoundedIcon /></Button>}
                        <TextField size="small" label='メッセージを入力' multiline fullWidth />
                        <Button size={!isDesktop ? 'normal' : 'large'} ><SendRoundedIcon /></Button >
                    </CardActionsRight>
                </CardWithNoShadow>
            </TabPanel>
        )
    }

    const FileTabPanel = () => {
        const FileBlock = (props) => {
            return (
                <Grid item xs={12} lg={6}>
                    <Box sx={{ '&:hover': { filter: 'brightness(0.8)' } }}>
                        <img src={props.src} alt="file-1" style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '0.25rem' }} />
                        <Typography variant="body1">生徒の答案</Typography>
                    </Box>
                </Grid>
            )
        }

        return (
            <TabPanel value={value} index={1}>
                <CardWithNoShadow>
                    <CardContent sx={{ p: 1 }}>
                        <Typography variant="h5">ファイルの管理</Typography>
                        <Box sx={{ mt: 1, pt: 2, maxHeight: { xs: '65vh' }, overflow: 'scroll' }}>
                            <Grid container spacing={2}>
                                <FileBlock src="https://images.unsplash.com/photo-1527239441953-caffd968d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                                <FileBlock src="https://images.unsplash.com/photo-1527239441953-caffd968d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                                <FileBlock src="https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                                <FileBlock src="https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                                <FileBlock src="https://images.unsplash.com/photo-1527239441953-caffd968d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                                <FileBlock src="https://images.unsplash.com/photo-1527239441953-caffd968d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                                <FileBlock src="https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                                <FileBlock src="https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                            </Grid>
                        </Box>
                    </CardContent>
                </CardWithNoShadow>
            </TabPanel>
        )
    }

    return (
        <CardWithNoShadow sx={{ pb: 0 }}>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 0 } }}>
                <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                    <Tab label="チャット" icon={<ChatRoundedIcon />} iconPosition='start' />
                    <Tab label="ファイル" icon={<InsertDriveFileRoundedIcon />} iconPosition='start' />
                </Tabs>
                <ChatTabPanel />
                <FileTabPanel />
            </CardContent>
        </CardWithNoShadow>
    )
}

export default ClassroomChat