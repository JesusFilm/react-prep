import { ReactElement } from 'react' 

interface TitleProps {
  label?: string;
}

export function Title({label = 'This is a Title'}: TitleProps) :ReactElement {
  console.log(label)
  return(
  <>
    <h2 className="title">{label}</h2>
  </>);
}

