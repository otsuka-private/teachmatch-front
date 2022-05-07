import { CardActions } from "@mui/material"

const CardActionsFlexRight = (props) => {
    return (
        <CardActions sx={{ display: 'flex', justifyContent: 'end', ...props.sx }}>
            {props.children}
        </CardActions>
    );
}

export default CardActionsFlexRight