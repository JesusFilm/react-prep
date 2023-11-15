import { Typography } from '@mui/material'
import { ReactElement } from 'react'

interface TitleProps {
  label?: string
}
export function Title({ label }: TitleProps): ReactElement {
  return (
    <Typography variant="h1" sx={{ my: 4, textAlign: 'center' }}>
      {label ?? 'Hello World'}
    </Typography>
  )
}
