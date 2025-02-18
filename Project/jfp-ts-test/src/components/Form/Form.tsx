'use client'

import { Box, Button, TextField } from '@mui/material'
import { ReactElement, useState } from 'react'

interface FormProps {
  addTask: (name: string) => void
}

export function Form({ addTask }: FormProps): ReactElement {
  const [taskName, setTaskName] = useState('')

  const handleAddTask = () => {
    // Prevent adding empty task
    if (taskName === '') {
      return
    }

    addTask(taskName)

    // Clear the input field
    setTaskName('')
  }

  return (
    <div>
      <Box display="flex" alignItems="center" gap={3}>
        <TextField
          id="filled-basic"
          value={taskName}
          label=""
          variant="filled"
          onChange={(e) => {
            setTaskName(e.target.value)
          }}
          sx={{ ml: 1, width: '70%' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          sx={{ mr: 1, width: '30%' }}
        >
          Add Task
        </Button>
      </Box>
    </div>
  )
}
