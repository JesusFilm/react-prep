import { TimerModel } from '@/libs/data'
import { ReactElement } from 'react'

export function Timer(model: TimerModel): ReactElement {
  return (
    <>
      {model.label}
      {model.remainingSeconds}
      {model.isRunning}
    </>
  )
}
