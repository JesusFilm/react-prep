import { ReactElement } from 'react'
import Typography from '@mui/material/Typography'

interface Props {
  label?: string
}

export function Title({ label }: Props): ReactElement {
  return <Typography variant="h3">{label ?? 'Default Title'}</Typography>
}
