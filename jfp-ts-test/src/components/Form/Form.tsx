import { Task, tasks } from '@/libs/data'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import { ReactElement, useEffect, useState } from 'react'

interface FormProps {
  addTask: (name: string) => void
  tasks: Task[]
}

export function Form(props: FormProps): ReactElement {
  const [textFieldValue, setTextFieldValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setTextFieldValue('')
  }, [props.tasks])

  function handleTextFieldChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setTextFieldValue(e.target.value)
  }

  function handleButtonClick() {
    props.addTask(textFieldValue)
    setTextFieldValue('')
  }

  function openDialog() {
    setIsOpen(true)
  }

  function closeDialog() {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={openDialog} variant="contained" sx={{ mt: 4 }}>
        New Task
      </Button>
      <Dialog open={isOpen} onClose={closeDialog}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <Box sx={{ height: '50px' }}>
            <TextField
              value={textFieldValue}
              onChange={handleTextFieldChange}
              sx={{ height: '100%' }}
            >
              Enter Task
            </TextField>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              sx={{ height: '100%', ml: 4 }}
            >
              Add
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}
