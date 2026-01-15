import { ReactElement } from 'react'
import { TextField, Button, Box } from '@mui/material'

interface FormProps {
  addTimer: (name: string, time: number) => void
  handleNameChange: (name: string) => void
  handleTimeChange: (time: number) => void
  name: string
  time: number
}

export function Form({
  addTimer,
  handleNameChange,
  handleTimeChange,
  name,
  time,
}: FormProps): ReactElement {
  return (
    <>
      <TextField
        label="Timer Name"
        variant="outlined"
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
      />

      <TextField
        label="Total Time"
        type="number"
        variant="outlined"
        value={time}
        onChange={(e) => handleTimeChange(Number(e.target.value))}
      />

      <Button onClick={() => addTimer(name, time)} sx={{ padding: 2 }}>
        Press me!
      </Button>
    </>
  )
}
