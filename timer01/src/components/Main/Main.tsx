'use client'
import { ReactElement, useEffect, useState } from 'react'
import { Title } from '@/components/Title'
import { Form } from '@/components/Form'
import { timers as defaultTimers } from '@/libs/data'
import { Container, Grid } from '@mui/material'
import { TimerList } from '../TimerList/TimerList'

export function Main(): ReactElement {
  const [timers, setTimers] = useState(defaultTimers)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    console.log('tick')
    const tick = () => {
      setTimers((prevtimers) =>
        prevtimers.map((timer) => {
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

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Title label="Timers" />
          <Form setTimers={setTimers} />
          <TimerList timers={timers} setTimers={setTimers} />
        </Grid>
      </Container>
    </div>
  )
}
