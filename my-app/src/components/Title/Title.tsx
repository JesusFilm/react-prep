import { ReactElement } from 'react'
import { Typography } from '@mui/material'

export function Title(label: string = 'Jay Chen'): ReactElement {
  return <Typography>{label}</Typography>
}
