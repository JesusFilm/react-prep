import React from 'react'
import Typography from '@mui/material/Typography'

interface TitleProps {
  label?: string
}

export function Title({ label }: TitleProps) {
  return (
    <Typography variant="h3" sx={{ textAlign: 'center' }}>
      {label ?? 'No Label was given.'}
    </Typography>
  )
}
