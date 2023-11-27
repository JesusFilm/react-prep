import { ReactElement, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Task } from '@/app/libs/data'
import { tasks } from '../../libs/data'
import { v4 as uuidv4 } from 'uuid'

interface FormProps {
  setToDoItems: (arr: Task[]) => void
}

export function Form({ setToDoItems }: FormProps): ReactElement {
  const [textfieldItem, setTextFieldItem] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('Form submitted with textfieldItem:', textfieldItem)
    setToDoItems((prevItems: Task[]) => {
      const updatedItems = [
        ...prevItems,
        { id: uuidv4(), name: textfieldItem, completed: false },
      ]
      return updatedItems
    })
    setTextFieldItem('')
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <>
          <Typography variant="h4" component="div">
            New Task:
          </Typography>
          <TextField
            required
            id="standard-required"
            label="Required"
            variant="standard"
            value={textfieldItem}
            onChange={(e) => setTextFieldItem(e.target.value)}
          />
          <br />
          <Button variant="outlined" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </>
      </Box>
    </>
  )
}
