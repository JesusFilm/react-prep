'use client'
import { TimerModel } from '@/libs/data'
import { ReactElement } from 'react'
import React, { useState } from 'react'

interface TimerProps {
  model: TimerModel
}

export function Timer({ model }: TimerProps): ReactElement {
  //const [count, setCount] = useState(model.remainingSeconds)
  //const [status, setStatus] = useState(model.isRunning)

  return (
    <>
      <div>
        {model.label} - {model.isRunning.toString()} - {model.remainingSeconds}
      </div>
    </>
  )
}
