import { Container as MuiContainer } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="lg" sx={{ pb: 2 }}>
            {children}
        </MuiContainer>
    )
}

export default Container