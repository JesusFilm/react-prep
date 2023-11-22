import { Typography } from '@mui/material'
import { ReactElement } from 'react'

interface TitleProps {
  label?: string
}

export function Title(label: TitleProps): ReactElement {
  return (
    <Typography variant="h2" align="left" sx={{ mb: 5, mt: 2.5, ml: 5 }}>
      Jacks cool to-do List
    </Typography>
  )
}
