'use client'
import { TimerModel } from '@/libs/data'
import { ReactElement } from 'react'
import { Button } from '@mui/material'

interface TimerProps {
  model: TimerModel
  removeTimer: () => void
}

export function Timer({ model, removeTimer }: TimerProps): ReactElement {
  return (
    <>
      <div>
        {model.label} - {model.isRunning.toString()} - {model.remainingSeconds}
        <Button onClick={removeTimer}>delete</Button>
      </div>
    </>
  )
}
