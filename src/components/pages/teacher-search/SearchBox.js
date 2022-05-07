import { useState } from "react";
import { Box, Card, CardContent, Button, Typography, Grid, FormGroup, Chip } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LoupeRoundedIcon from '@mui/icons-material/LoupeRounded';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { v4 as uuid } from "uuid";
import CardActionRight from "components/common/CardActionsRight";
import SelectBox from "components/common/SelectBox";
import ResponsiveStack from "components/common/ResponsiveStack";
import AccourdionBox from "components/common/AccourdionBox";
import { universities, places, studentTypes, subjects, days } from "assets/dummyDatabase";

const SearchBox = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const theme = useTheme();
    const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

    const Chips = (props) => {
        const handleClick = event => setSelectedSubjects(prev => [...prev, event.target.closest('div').id]);
        const handleDelete = event => setSelectedSubjects(prev => prev.filter(n => n !== event.target.closest('div').id));

        const chips = props.options.map(option => {
            return (
                selectedSubjects.includes(option)
                    ? <Chip
                        key={uuid()}
                        id={option}
                        label={option}
                        color="primary"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    : <Chip
                        key={uuid()}
                        id={option}
                        label={option}
                        color="primary"
                        variant="outlined"
                        onClick={handleClick}
                    />
            )
        });
        return chips;
    }

    return (
        <Box sx={{ mb: '2rem' }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" sx={{ mb: '1rem' }}>講師を検索</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <SelectBox label="講師の大学" options={universities} icon={<SchoolRoundedIcon sx={{ mr: 1 }} />} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <SelectBox label="お住まいの地域" options={places} icon={<PlaceRoundedIcon sx={{ mr: 1 }} />} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <SelectBox label="生徒のタイプ" options={studentTypes} icon={<PersonRoundedIcon sx={{ mr: 1 }} />} />
                        </Grid>
                    </Grid>
                    <AccourdionBox title="より詳細な検索" icon={<LoupeRoundedIcon sx={{ mr: 1 }} />}>
                        <Box sx={{ mb: '1rem' }}>
                            <FormGroup>
                                <Typography variant="body1">対応科目</Typography>
                                <ResponsiveStack spacing={1}>
                                    <Chips options={subjects} />
                                </ResponsiveStack>
                            </FormGroup>
                        </Box>
                        <Box>
                            <FormGroup>
                                <Typography variant="body1">対応曜日</Typography>
                                <ResponsiveStack spacing={1}>
                                    <Chips options={days} />
                                </ResponsiveStack>
                            </FormGroup>
                        </Box>
                    </AccourdionBox>
                </CardContent>
                <CardActionRight>
                    <Button fullWidth={isLargerThanMd} variant="contained" size="large" startIcon={<SearchRoundedIcon />}>検索する</Button>
                </CardActionRight>
            </Card>
        </Box>
    );
};

export default SearchBox