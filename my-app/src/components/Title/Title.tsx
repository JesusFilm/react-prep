import { ReactElement } from 'react'
import { Typography } from '@mui/material'

interface TitleProps {
  label?: string
}

export function Title({ label = 'Timers' }: TitleProps): ReactElement {
  return <Typography fontSize={32}>{label}</Typography>
}
