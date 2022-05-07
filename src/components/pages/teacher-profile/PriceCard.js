import { useState } from "react";
import { Card, CardContent, Box, Typography, CardActions, Button, Tabs, Tab, Grid } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CurrencyYenRoundedIcon from '@mui/icons-material/CurrencyYenRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import SwipeableViews from 'react-swipeable-views';
import TextBox from "./TextBox";
import TabPanel from "components/common/TabPanel";
import CardWithNoShadow from "components/common/CardWithNoShadow";
import { blue, blueGrey } from "@mui/material/colors";

const PriceCard = (props) => {
    const { teacher } = props;
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue);

    const handleChangeIndex = index => setValue(index);

    return (
        <CardWithNoShadow>
            <CardContent>
                <Tabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab icon={<CurrencyYenRoundedIcon />} iconPosition="start" label="料金プラン" />
                    <Tab icon={<StarRoundedIcon />} iconPosition="start" label="指導実績" />
                </Tabs>
                <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
                    <TabPanel value={value} index={0} sx={{ pt: 2, pb: 0.5 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Card>
                                    <CardContent sx={{ p: 0, height: '14rem', display: 'flex', flexDirection: 'column', '&:last-child': { pb: 0 } }}>
                                        <Box sx={{ p: 2, height: '80%', bgcolor: blueGrey[100] }}>
                                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 400 }}>通常料金</Typography>
                                            <Typography variant="body1" sx={{ letterSpacing: 1.1 }}>体験授業後は通常料金に移行します</Typography>
                                        </Box>
                                        <Box sx={{ p: 1, height: '20%', textAlign: 'center', bgcolor: blueGrey[300], color: 'white' }}>
                                            <Typography variant="body1"><span style={{ fontSize: '1.5rem' }}>{teacher.price.contract}円</span>/30分</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card>
                                    <CardContent sx={{ p: 0, height: '14rem', display: 'flex', flexDirection: 'column', '&:last-child': { pb: 0 } }}>
                                        <Box sx={{ p: 2, height: '80%', bgcolor: blue[100] }}>
                                            <Typography variant="h6" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}><SellRoundedIcon sx={{ mr: 1 }} />体験料金</Typography>
                                            <Typography variant="body1" sx={{ letterSpacing: 1.1 }}>最初の2時間は体験料金でお試しすることができます。</Typography>
                                        </Box>
                                        <Box sx={{ p: 1, height: '20%', textAlign: 'center', bgcolor: blue[500], color: 'white' }}>
                                            <Typography variant="body1"><span style={{ fontSize: '1.5rem' }}>{teacher.price.trial}円</span>/30分</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <TextBox title="生徒からの評価">
                            <Typography variant="body1">{teacher.teachingCareer.rating} / 5.0</Typography>
                        </TextBox>
                        <TextBox title="指導回数">
                            <Typography variant="body1">{teacher.teachingCareer.count}回</Typography>
                        </TextBox>
                        <TextBox title="合格実績">
                            <Typography variant="body1">{teacher.teachingCareer.result} </Typography>
                        </TextBox>
                    </TabPanel>
                </SwipeableViews>

            </CardContent>
            <CardActions>
                <Button variant="contained" fullWidth size="large" endIcon={<SendRoundedIcon />}>体験授業を申し込む</Button>
            </CardActions>
        </CardWithNoShadow >
    )
}

export default PriceCard