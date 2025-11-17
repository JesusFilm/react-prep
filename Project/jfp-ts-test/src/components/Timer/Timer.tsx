import { Card, CardContent } from '@mui/material'
import { ReactElement } from 'react'

interface TimerProps {
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
          <h1>{label}</h1>
          <p>remaining time:{remainingSeconds}</p>
          <p>total time:{durationSeconds}</p>
          <p>{isRunning ? 'running' : 'complete'}</p>
        </CardContent>
      </Card>
    </div>
  )
}
