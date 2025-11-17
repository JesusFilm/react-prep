import { Typography } from '@mui/material'
import { ReactElement } from 'react'

interface CounterProps {
  count: number
}

export function Counter({ count }: CounterProps): ReactElement {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Counter
      </Typography>
      <Typography variant="h4" data-role="count">
        {count}
      </Typography>
    </>
  )
}
