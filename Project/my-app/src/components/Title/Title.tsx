import React from 'react'
import Typography from '@mui/material/Typography'

interface TitleProps {
  label?: string
}

export function Title({ label }: TitleProps) {
  return label ? (
    <Typography variant="h3" sx={{ textAlign: 'center' }}>
      {label}
    </Typography>
  ) : (
    <Typography>No Label was given.</Typography>
  )
}
