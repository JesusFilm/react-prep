import { Form } from '../Form'
import { TimerModel, timers } from '../../libs/data'
import { Timer } from '../Timer'
import { v4 as uuidv4 } from 'uuid'
import { Box } from '@mui/material'

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

  return (
    <div>
      <>Hello World</>
      <Form></Form>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
        <ul>{timerList}</ul>
      </Box>
    </div>
  )
}
