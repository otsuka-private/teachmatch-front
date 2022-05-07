import { Button } from "@mui/material"

const FlatContainedButton = props => {
    const { children, ...others } = props;

    return (
        <Button variant="contained" sx={{ boxShadow: 'none' }} {...others}>
            {props.children}
        </Button>
    )
}

export default FlatContainedButton