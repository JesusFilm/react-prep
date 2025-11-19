import { Card, CardContent, IconButton, Stack } from '@mui/material'
import { Dispatch, ReactElement, SetStateAction } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { TimerModel } from '@/libs/data'

export interface TimerProps {
  key: string
  id: number
  label: string
  durationSeconds: number
  remainingSeconds: number
  isRunning: boolean
  handleClose: Dispatch<SetStateAction<TimerModel[]>>
  timerState: TimerModel[]
}

export function Timer({
  key,
  id,
  label,
  durationSeconds,
  remainingSeconds,
  isRunning,
  handleClose,
  timerState,
}: TimerProps): ReactElement {
  function timerRemover(target: number) {
    // const result = timerState.find((timer) => timer.id == target)
    // if (result === undefined) return
    // const index = timerState.indexOf(result)
    // console.log([timerState.slice(0, index)])
    console.log(id)

    return timerState
      .slice(0, id)
      .concat(timerState.slice(id + 1, timerState.length))

    // return timerState.filter((timer) => id !== target)
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Stack>
            <h1>{label}</h1>
            <IconButton
              onClick={(current) => {
                const target = id
                const newTimerState = timerRemover(id)
                handleClose(newTimerState)
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
          <p>remaining time: {remainingSeconds}</p>
          <p>total time: {durationSeconds}</p>
          <p>{isRunning ? 'running' : 'complete'}</p>
        </CardContent>
      </Card>
    </div>
  )
}
