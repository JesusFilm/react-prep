'use client'

import { ReactElement } from 'react'
import { Typography } from '@mui/material'
import '@fontsource/pacifico'

interface TitleProps {
  label?: string
}

export function Title({ label }: TitleProps): ReactElement {
  return (
    <div>
      <Typography
        variant="h4"
        fontFamily="Pacifico"
        display="flex"
        justifyContent="center"
      >
        {label}
      </Typography>
    </div>
  )
}
