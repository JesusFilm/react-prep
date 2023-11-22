import { ReactElement } from 'react'
import Typography from '@mui/material/Typography'

interface TitleProps {
  label?: string
}

export function Title({ label }: TitleProps): ReactElement {
  // export function Title({label = 'Anna Page'}: TitleProps) :ReactElement {
  console.log(label)
  return (
    <>
      <Typography variant="h2" gutterBottom>
        {label}
        {/* {label ?? 'Anna Page'} */}
      </Typography>
    </>
  )
}
