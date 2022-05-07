import { Card } from "@mui/material"

const CardWithNoShadow = (props) => {
    return (
        <Card sx={{ boxShadow: 'none', ...props.sx }}>
            {props.children}
        </Card>
    )
}

export default CardWithNoShadow