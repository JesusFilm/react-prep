import { Card, CardContent, Stack } from '@mui/material'
import { ReactElement } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

export interface TimerProps {
  id: string
  label: string
  durationSeconds: number
  remainingSeconds: number
  isRunning: boolean
}

export function Timer({
  id,
  label,
  durationSeconds,
  remainingSeconds,
  isRunning,
}: TimerProps): ReactElement {
  return (
    <div>
      <Card>
        <CardContent>
          <Stack>
            <h1>{label}</h1>
            <DeleteIcon />
          </Stack>
          <p>remaining time: {remainingSeconds}</p>
          <p>total time: {durationSeconds}</p>
          <p>{isRunning ? 'running' : 'complete'}</p>
        </CardContent>
      </Card>
    </div>
  )
}
