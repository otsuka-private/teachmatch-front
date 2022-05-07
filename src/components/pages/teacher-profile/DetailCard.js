import { useState } from "react";
import { Card, CardContent, Tabs, Tab, Typography, Chip, Box } from "@mui/material";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import { v4 as uuid } from "uuid";
import SwipeableViews from 'react-swipeable-views';
import TextBox from "./TextBox";
import TabPanel from "components/common/TabPanel";
import ResponsiveStack from "components/common/ResponsiveStack";
import { tokyoMainCities } from "assets/dummyDatabase";
import AvailableTime from "./Detail/AvailableTime";

const DetailCard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue);

    const handleChangeIndex = index => setValue(index);

    return (
        <Card sx={{ boxShadow: 'none' }}>
            <CardContent>
                <Typography variant="h5">指導について</Typography>
                <Tabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab icon={<MenuBookRoundedIcon />} iconPosition="start" label="科目" />
                    <Tab icon={<LocationOnRoundedIcon />} iconPosition="start" label="地域" />
                    <Tab icon={<AccessTimeFilledRoundedIcon />} iconPosition="start" label="時間帯" />
                </Tabs>
                <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
                    <TabPanel value={value} index={0} sx={{ p: 1 }}>
                        <TextBox title="国語">
                            <Typography variant="body1">東大受験レベルまで指導ができます。入試成績は82点でした。</Typography>
                        </TextBox>
                        <TextBox title="算数・数学">
                            <Typography variant="body1">東大受験レベルまで指導ができます。入試成績は41点でした。</Typography>
                        </TextBox>
                        <TextBox title="英語">
                            <Typography variant="body1">東大受験レベルまで指導ができます。入試成績は91点でした。</Typography>
                        </TextBox>
                        <TextBox title="社会">
                            <Typography variant="body1">東大受験レベルまで指導ができます。入試成績は81点でした。</Typography>
                        </TextBox>
                        <TextBox title="理科">
                            <Typography variant="body1">東大受験レベルまで指導ができます。センター試験では化学基礎と地学基礎を選択しました。</Typography>
                        </TextBox>
                    </TabPanel>
                    <TabPanel value={value} index={1} sx={{ p: 1 }}>
                        <TextBox title="オンライン指導">
                            <Typography variant="body1">対応しています</Typography>
                        </TextBox>
                        <TextBox title="路線">
                            <Typography variant="body1">東京メトロ銀座線</Typography>
                            <Typography variant="body1">東京メトロ丸の内線</Typography>
                        </TextBox>
                        <TextBox title="地域">
                            <Typography variant="body1">東京都</Typography>
                            <ResponsiveStack spacing={1}>
                                {tokyoMainCities.map((city, index) => {
                                    if (index < 15) {
                                        return <Chip
                                            key={uuid()}
                                            label={city}
                                            color="primary"
                                            icon={<CheckCircleOutlineRoundedIcon />}
                                        />
                                    } else {
                                        return <Chip
                                            key={uuid()}
                                            label={city}
                                            color="primary"
                                            variant="outlined"
                                            icon={<ChangeHistoryRoundedIcon />}
                                        />
                                    }
                                })}
                            </ResponsiveStack>
                        </TextBox>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <AvailableTime />
                        <Box>

                        </Box>
                    </TabPanel>
                </SwipeableViews>

            </CardContent>
        </Card>
    )
}

export default DetailCard