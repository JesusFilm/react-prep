import { ReactElement } from 'react'
import { Container, Stack, Typography } from '@mui/material'
import { TimerModel } from '@/libs/data'

interface time {
  timers: TimerModel
}

export function Timer({ timers }: time): ReactElement {
  return (
    <div>
      <Container>
        <Stack py={1}>
          <Typography variant="h6">{timers.label}</Typography>
          <Typography>{timers.remainingSeconds}</Typography>
        </Stack>
      </Container>
    </div>
  )
}
