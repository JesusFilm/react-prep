import { Task } from '@/app/libs/data'
import { Button, Stack, TextField } from '@mui/material'
import { ReactElement } from 'react'
import React, { useState, ChangeEvent } from 'react'

interface FormProps {
  handleAdd: (name: string) => void
}

export function Form({ handleAdd }: FormProps): ReactElement {
  const [name, setName] = useState('')

  function handleChangeTextField(newName: string) {
    setName(newName)
  }

  function handleSubmit(): void {
    handleAdd(name)
  }

  return (
    <Stack direction="row" gap={2} sx={{ pb: 2 }}>
      <TextField
        id="outlined-basic"
        label="Task Name"
        variant="outlined"
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleChangeTextField(event.target.value)
        }}
      />

      <Button variant="contained" size="large" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  )
}
