import { ReactElement } from 'react'
import { TimerModel } from '@/libs/data'
import { Timer } from '@/components/Timer'
import { v4 } from 'uuid'
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
      {timers.map((timer) => (
        <Timer key={v4()} timer={timer} deleteTimer={deleteTimer} />
      ))}
    </div>
  )
}
