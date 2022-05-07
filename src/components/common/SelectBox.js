import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { v4 as uuid } from 'uuid';

const SelectBox = (props) => {
    const { label, options, icon } = props;
    const [selectedOption, setSelectedOption] = useState('');
    const theme = useTheme();
    const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

    const handleChange = event => setSelectedOption(event.target.value);

    const menuItems = options.map(option => <MenuItem key={uuid()} value={option}>{option}</MenuItem>);

    const Label = () => isLargerThanMd ? <>{icon} {label}</> : <>{label}</>

    return (
        <FormControl fullWidth>
            <InputLabel sx={{ display: 'flex', alignItems: 'center' }}><Label /></InputLabel>
            <Select value={selectedOption} label={<Label />} onChange={handleChange}>
                {menuItems}
            </Select>
        </FormControl >
    )
}

export default SelectBox