import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface TaskFormProps {
  onAddTask: (taskName: string) => void
}

export const Form: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState('')
  const [submitButtonPressed, setSubmitButtonPressed] = useState(false)

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = () => {
    onAddTask(text)
    setSubmitButtonPressed(true)
    //setText('b') //this would have been way better but ther purpose is to learn useEffect
  }

  useEffect(() => {
    submitButtonPressed && setText('')
    setSubmitButtonPressed(false)
  }, [submitButtonPressed])

  return (
    <Box>
      <Box sx={{ maxWidth: '100%', textAlign: 'left', pb: 0 }}>
        <TextField
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
