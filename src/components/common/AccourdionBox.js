import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccourdionBox = (props) => {
    const { title, children, icon } = props;

    return (
        // ?? BorderColorはテキトウ
        <Accordion sx={{ mt: '1rem', boxShadow: 'none', border: '#ccc 1px solid', borderRadius: '4px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ color: 'rgb(0 0 0 / 0.6)' }}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

export default AccourdionBox