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
      <Container
        sx={{
          gap: 2,
          ml: -39,
          mt: 20,
          width: 300,
          border: 4,
          borderRadius: 2,
        }}
      >
        <Stack py={4} m={0.75} gap={2}>
          <TextField
            sx={{ mb: 2 }}
            id="Max Time"
            label="Max Time"
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
        </Stack>
      </Container>
    </div>
  )
}
