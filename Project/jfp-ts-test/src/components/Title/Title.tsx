import { ReactElement } from 'react'
import { Typography } from '@mui/material'

interface TitleProps {
  label: string
}

export function Title({ label }: TitleProps): ReactElement {
  return (
    <div>
      <Typography>`${label}`</Typography>
    </div>
  )
}
