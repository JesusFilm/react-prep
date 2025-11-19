'use client'

import { Form } from '../Form'
import { TimerModel, timers } from '../../libs/data'
import { Timer } from '../Timer'
import { Box } from '@mui/material'
import { useState } from 'react'
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
