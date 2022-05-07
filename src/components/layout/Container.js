import { Container as MuiContainer } from "@mui/material"

const Container = ({ children }) => {
    return (
        <MuiContainer maxWidth="lg">
            {children}
        </MuiContainer>
    )
}

export default Container