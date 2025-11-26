import { ReactElement } from 'react'
import { TimerModel } from '@/libs/data'
import { Timer } from '@/components/Timer'
import { Dispatch, SetStateAction } from 'react'

interface TimerProps {
  timers: TimerModel[]
  setTimers: Dispatch<SetStateAction<TimerModel[]>>
}

export function TimerList({ timers, setTimers }: TimerProps): ReactElement {
  function deleteTimer(timerId: string) {
    setTimers((timers) => {
      return timers.filter((timer) => timer.id != timerId)
    })
  }

  return (
    <div>
      {timers.map((timer, key) => (
        <Timer key={key} timer={timer} deleteTimer={deleteTimer} />
      ))}
    </div>
  )
}
