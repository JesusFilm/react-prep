import { ReactElement } from 'react'
import { TimerModel } from '@/libs/data'
import { Timer } from '@/components/Timer'
import { Dispatch, SetStateAction } from 'react'
import { Grid, Stack } from '@mui/material'

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
    <Stack sx={{ flexDirection: 'column', gap: 2, flexWrap: 'wrap' }}>
      {timers.map((timer, key) => (
        <Timer key={key} timer={timer} deleteTimer={deleteTimer} />
      ))}
    </Stack>
  )
}
