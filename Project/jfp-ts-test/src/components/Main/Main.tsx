'use client'

import { Form } from '../Form'
import { TimerModel, timers } from '../../libs/data'
import { Timer } from '../Timer'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { Title } from '../Title'

export function Main() {
  const [timerState, setTimerState] = useState<TimerModel[]>([])

  console.log('timers', timerState)

  const timerList = timerState.map((x, index) => (
    <Timer
      key={x.key}
      id={index}
      label={x.label}
      durationSeconds={x.durationSeconds}
      remainingSeconds={x.remainingSeconds}
      isRunning={x.isRunning}
      handleClose={setTimerState}
      timerState={timerState}
    />
  ))

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const tick = () => {
      setTimerState((prevTimerState) =>
        prevTimerState.map((timer) => {
          if (!timer.isRunning) {
            // Do nothing if timer is done
            return timer
          }

          const nextRemaining = Math.max(0, timer.remainingSeconds - 1)
          if (nextRemaining === timer.remainingSeconds) {
            // Do nothing if remaining seconds is the same
            return timer
          }

          return {
            ...timer,
            remainingSeconds: nextRemaining,
            isRunning: nextRemaining > 0,
          }
        })
      )

      timeoutId = setTimeout(tick, 1000)
    }

    timeoutId = setTimeout(tick, 1000)

    // return () => {
    //   console.log('clear')
    //   clearTimeout(timeoutId)
    // }
  }, [])

  return (
    <div>
      <Title label="Timer App"></Title>
      <Form handleSubmit={setTimerState} timerState={timerState}></Form>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
        <ul>{timerList}</ul>
      </Box>
    </div>
  )
}
