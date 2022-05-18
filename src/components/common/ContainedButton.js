import { Button } from "@mui/material"

const ContainedButton = (props) => {
    const { text, ...others } = props;

    return (
        <Button variant="contained" {...others}>{text}</Button>
    )
}

export default ContainedButton