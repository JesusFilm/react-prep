import { Card, CardContent, IconButton, Stack } from '@mui/material'
import { Dispatch, ReactElement, SetStateAction } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { TimerModel } from '@/libs/data'

export interface TimerProps {
  key: string
  label: string
  durationSeconds: number
  remainingSeconds: number
  isRunning: boolean
  handleClose: Dispatch<SetStateAction<TimerModel[]>>
  timerState: TimerModel[]
}

export function Timer({
  key,
  label,
  durationSeconds,
  remainingSeconds,
  isRunning,
  handleClose,
  timerState,
}: TimerProps): ReactElement {
  console.log('key', key)
  console.log('label', label)
  function timerRemover(target: string) {
    const result = timerState.find((timer) => timer.key === target)
    if (result === undefined) return
    const index = timerState.indexOf(result)
    console.log([timerState.slice(0, index)])
    return [timerState.slice(0, index)]
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Stack>
            <h1>{label}</h1>
            <IconButton
              onClick={(current) => {
                const target = key
                const newTimerState = timerRemover(key)
                // handleClose(newTimerState)
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
