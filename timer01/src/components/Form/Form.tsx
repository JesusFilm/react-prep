'use client'
import { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { Button, Container, Stack, TextField } from '@mui/material'
import { useFormControl } from '@mui/material/FormControl'
import { Timer } from '../Timer'
import { TimerModel, timers } from '@/libs/data'

interface FormProps {
  setTimers: Dispatch<SetStateAction<TimerModel[]>>
}

export function Form({ setTimers }: FormProps): ReactElement {
  function addTimer() {
    console.log('Clicked!!!')
    // setTime(<Timer time />)
  }

  // On click: call function that adds timer and clears textfield

  setTimers((prevtimers) => {
    return [
      ...prevtimers,
      {
        id: '1243',
        label: 'this is a test',
        durationSeconds: 10,
        remainingSeconds: 10,
        isRunning: true,
      },
    ]
  })
  return (
    <div>
      <Container>
        <Stack py={3} m={40} gap={2}>
          <TextField
            sx={{ mb: 2 }}
            id="Max Time"
            label="Max time"
            variant="outlined"
          />
          <TextField
            sx={{ mb: 2 }}
            id="Timer Name"
            label="Timer Name"
            variant="outlined"
            defaultValue=""
          />
          <Button onClick={addTimer} variant="contained">
            Add Timer
          </Button>
        </Stack>
      </Container>
    </div>
  )
}
