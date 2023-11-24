import { ReactElement } from 'react' 
import Typography from '@mui/material/Typography';

interface TitleProps {
  label?: string;
}

export function Title({label = 'Annas To-dos'}: TitleProps) :ReactElement {
  return(
  <>
     <Typography variant="h2" gutterBottom>{label}</Typography>
  </>);
}

