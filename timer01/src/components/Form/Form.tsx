'use client'
import { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { Button, Container, Stack, TextField } from '@mui/material'

import { TimerModel } from '@/libs/data'
import { v4 } from 'uuid'

interface FormProps {
  setTimers: Dispatch<SetStateAction<TimerModel[]>>
}

export function Form({ setTimers }: FormProps): ReactElement {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  function deleteTimer() {}

  function addTimer() {
    setTimers((prevtimers) => {
      return [
        ...prevtimers,
        {
          id: v4(),
          label: name,
          durationSeconds: count,
          remainingSeconds: count,
          isRunning: true,
        },
      ]
    })
    setCount(0)
    setName('')
  }

  // On click: call function that adds timer and clears textfield

  return (
    <div>
      <Container>
        <Stack py={3} m={40} gap={2}>
          <TextField
            sx={{ mb: 2 }}
            id="Max Time"
            label="Max time"
            variant="outlined"
            value={count}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCount(Number(event.target.value))
            }}
          />
          <TextField
            sx={{ mb: 2 }}
            id="Timer Name"
            label="Timer Name"
            variant="outlined"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value)
            }}
          />
          <Button onClick={addTimer} variant="contained">
            Add Timer
          </Button>
          <Button onClick={deleteTimer} variant="contained">
            Delete Timer
          </Button>
        </Stack>
      </Container>
    </div>
  )
}
