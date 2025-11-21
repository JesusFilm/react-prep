import { ReactElement } from 'react'
import { Typography } from '@mui/material'

interface TitleProps {
  label?: string
}

export function Title({ label }: TitleProps): ReactElement {
  return (
    <div>
      <Typography variant="h1" component="h1">
        {label}
      </Typography>
    </div>
  )
}
