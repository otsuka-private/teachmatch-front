import { Container as MuiContainer } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="lg" sx={{ pb: '3rem', overflowX: 'hidden' }}>
            {children}
        </MuiContainer>
    )
}

export default Container