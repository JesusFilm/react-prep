import { ReactElement } from 'react'
import { Typography } from '@mui/material'

interface TitleProps {
  label: string
}

export function Title({ label }: TitleProps): ReactElement {
  return (
    <div>
      <Typography variant="h3" sx={{ mb: '2%' }}>
        {label}
      </Typography>
    </div>
  )
}
