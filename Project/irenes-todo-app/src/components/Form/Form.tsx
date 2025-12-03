import { Task } from '@/libs/data'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'
import { v4 } from 'uuid'

interface FormProps {
  addTask: (newTask: Task) => void
  tasks: Task[]
}
export function Form({ addTask, tasks }: FormProps) {
  const [textVariable, setTextVariable] = useState('')

  // useEffect(() => {
  //   setTextVariable('')
  // }, [tasks])

  function handleClick() {
    addTask({ id: v4(), name: textVariable, completed: false, day: 'Monday' })
    setTextVariable('')
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextVariable(e.target.value)
  }

  return (
    <>
      <TextField
        id="standard-basic"
        label="Textfield"
        variant="standard"
        value={textVariable}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>Add Task</Button>
    </>
  )
}
