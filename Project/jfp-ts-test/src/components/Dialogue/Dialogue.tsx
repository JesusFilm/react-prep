import { Dispatch, ReactElement, SetStateAction, useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Form } from '../Form'
import { v4 as uuidv4 } from 'uuid'
import { TimerModel } from '@/libs/data'
import { Box } from '@mui/material'

interface DialogueProps {
  handleSubmit: Dispatch<SetStateAction<TimerModel[]>>
  timerState: TimerModel[]
}

export function Dialogue({
  handleSubmit,
  timerState,
}: DialogueProps): ReactElement {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('New Timer')
  const [seconds, setSeconds] = useState(60)

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSecond = parseInt(event.target.value)
    setSeconds(newSecond)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a New Timer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Timer</DialogTitle>
        <DialogContent>
          <DialogContentText>i love timers</DialogContentText>

          {/* <Form handleSubmit={handleSubmit} timerState={timerState}></Form> */}

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <TextField
              id="titleTextfield"
              label="Title"
              onChange={handleTitleChange}
              sx={{ mx: '5px' }}
            />
            <TextField
              id="seconds"
              label="Seconds"
              onChange={handleSecondsChange}
              sx={{ mx: '5px' }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            type="submit"
            form="add-timer-form"
            onClick={() => {
              handleSubmit([
                ...timerState,
                {
                  key: uuidv4(),
                  id: timerState.length.toString(),
                  label: title,
                  durationSeconds: seconds,
                  remainingSeconds: seconds,
                  isRunning: true,
                },
              ])
              handleClose()
            }}
          >
            Add Timer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
