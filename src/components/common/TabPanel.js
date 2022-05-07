import { Box } from "@mui/material";

const TabPanel = (props) => {
    const { children, value, index, sx, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index}
        // {...other}
        >
            {value === index && (
                <Box sx={{ p: 0, ...sx }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel