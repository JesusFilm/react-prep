import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { ReactElement } from 'react'
import React, { useState } from 'react'
import { Task, cardsData } from '@/app/libs/data'
import { v4 as uuidv4 } from 'uuid'

interface FormProps {
  name: string
  onChangeName: (newName: string) => void
  onAddTask: (newTask: Task) => void
}

export function Form({
  name,
  onChangeName,
  onAddTask,
}: FormProps): ReactElement {
  return (
    <>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        sx={{ ml: 8 }}
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChangeName(event.target.value)
        }}
      ></TextField>

      <Button
        variant="contained"
        sx={{ ml: 12 }}
        onClick={() =>
          onAddTask({ name: name, completed: false, key: uuidv4() })
        }
      >
        Add Task
      </Button>
    </>
  )
}
