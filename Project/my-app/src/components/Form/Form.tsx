import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface TaskFormProps {
  onAddTask: (taskName: string) => void
}

export function Form({ onAddTask }: TaskFormProps) {
  const [text, setText] = useState('')
  const [submitButtonPressed, setSubmitButtonPressed] = useState(false)

  useEffect(() => {
    submitButtonPressed && setText('')
    setSubmitButtonPressed(false)
  }, [submitButtonPressed])

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = () => {
    onAddTask(text)
    setSubmitButtonPressed(true)
    //setText('b') //this would have been faster but ther purpose is to learn useEffect
  }

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ width: '100%', textAlign: 'top', pb: 1 }}>
        <TextField
          sx={{ width: '50%', textAlign: 'center', pb: 1 }}
          label="Enter Task"
          variant="outlined"
          value={text}
          onChange={handleTaskNameChange}
          margin="normal"
        />
      </Box>

      <Box sx={{ maxWidth: '100%', textAlign: 'center', pb: 5 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  )
}
