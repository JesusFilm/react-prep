'use client'

import { Form } from '../Form'
import { timers } from '../../libs/data'
import { Timer } from '../Timer'
import { v4 as uuidv4 } from 'uuid'
import { Box } from '@mui/material'
import { useState } from 'react'
import { Title } from '../Title'

export function Main() {
  const timerList = timers.map((x) => (
    <Timer
      key={uuidv4()}
      id={x.id}
      label={x.label}
      durationSeconds={x.durationSeconds}
      remainingSeconds={x.remainingSeconds}
      isRunning={x.isRunning}
    ></Timer>
  ))

  const [timerState, setTimerState] = useState([])

  return (
    <div>
      <Title label="Timer App"></Title>
      <Form></Form>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
        <ul>{timerList}</ul>
      </Box>
    </div>
  )
}
