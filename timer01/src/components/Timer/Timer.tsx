import { ReactElement } from 'react'
import { Container, Stack, Typography, Button } from '@mui/material'
import { TimerModel } from '@/libs/data'
interface TimerProps {
  timer: TimerModel
  deleteTimer: (timerId: string) => void
}

export function Timer({ timer, deleteTimer }: TimerProps): ReactElement {
  const timerId: string = timer.id
  // typography needs an unique key, to not confuse itself with the others.

  // timers.map returns a new array, by taking the labels out of a timer instance out of each element in timer array
  // then aBunchOfLabels is the new array that timers.map spits out

  return (
    <div>
      <Container
        sx={{
          border: 2,
          margin: 1,
          borderRadius: 2,
          width: 250,
          height: 200,
          boxShadow: 10,
        }}
      >
        <Stack py={10}>
          <Typography variant="h6" sx={{ margin: -1 }}>
            {timer.label}
          </Typography>
          <Typography sx={{ margin: 1 }}>{timer.remainingSeconds} s</Typography>
          <Button onClick={() => deleteTimer(timerId)} variant="contained">
            Delete Timer
          </Button>
        </Stack>
      </Container>
    </div>
  )
}
