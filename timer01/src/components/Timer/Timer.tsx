import { ReactElement } from 'react'
import { Container, Stack, Typography } from '@mui/material'
import { TimerModel } from '@/libs/data'
import { arrayBuffer } from 'stream/consumers'

interface TimerProps {
  timers: TimerModel[]
}

export function Timer({ timers }: TimerProps): ReactElement {
  // typography needs an unique key, to not confuse itself with the others.

  // timers.map returns a new array, by taking the labels out of a timer instance out of each element in timer array
  // then aBunchOfLabels is the new array that timers.map spits out

  return (
    <div>
      <Container>
        <Stack py={10}>
          {timers.map((timer) => (
            <div key={timer.id}>
              <Typography variant="h6">{timer.label}</Typography>
              <Typography>{timer.remainingSeconds}</Typography>
            </div>
          ))}
        </Stack>
      </Container>
    </div>
  )
}
