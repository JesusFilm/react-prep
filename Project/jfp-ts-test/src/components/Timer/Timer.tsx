import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material'
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
  id,
  label,
  durationSeconds,
  remainingSeconds,
  isRunning,
  handleClose,
  timerState,
}: TimerProps): ReactElement {
  function timerRemover() {
    return timerState
      .slice(0, id)
      .concat(timerState.slice(id + 1, timerState.length))

    // return timerState.filter((timer) => id !== target)
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Stack
            sx={{
              fontWeight: 'fontWeightBold',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h3" sx={{ color: 'blue' }}>
              {label}
            </Typography>
            <div>
              <IconButton
                onClick={() => {
                  const newTimerState = timerRemover()
                  handleClose(newTimerState)
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Stack>
          <Typography>remaining time: {remainingSeconds}</Typography>
          <Typography>total time: {durationSeconds}</Typography>
          <Typography>{isRunning ? 'running' : 'complete'}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}
