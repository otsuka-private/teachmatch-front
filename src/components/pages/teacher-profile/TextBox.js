import { Box, Typography } from "@mui/material";

const TextBox = props => {
    const { title, children } = props;

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>{title}</Typography>
            {children}
        </Box>
    )
}

export default TextBox