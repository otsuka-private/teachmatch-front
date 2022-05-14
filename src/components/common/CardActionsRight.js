import { CardActions } from "@mui/material"

const CardActionsRight = (props) => {
    return (
        <CardActions sx={{ display: 'flex', justifyContent: 'end', ...props.sx }}>
            {props.children}
        </CardActions>
    );
}

export default CardActionsRight