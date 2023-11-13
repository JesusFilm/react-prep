import { Typography } from '@mui/material'
import { ReactElement } from 'react'

interface TitleProps {
  label?: string
}

export function Title(props: TitleProps): ReactElement {
  return <Typography variant="h2">Title</Typography>
}
