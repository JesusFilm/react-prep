import { Dispatch, ReactElement, SetStateAction } from 'react'
import { Box, TextField } from '@mui/material/'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { TimerModel } from '@/libs/data'

interface FormProps {
  handleSubmit: Dispatch<SetStateAction<TimerModel[]>>
  timerState: TimerModel[]
}

export function Form({ handleSubmit, timerState }: FormProps): ReactElement {
  const [title, setTitle] = useState('New Timer')
  // const [hours, setHours] = useState(0)
  // const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(60)

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  // const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newHour = parseInt(event.target.value)
  //   setHours(newHour)
  // }

  // const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newMinutes = parseInt(event.target.value)
  //   setMinutes(newMinutes)
  // }

  const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSecond = parseInt(event.target.value)
    setSeconds(newSecond)
  }

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <TextField id="title" label="Title" onChange={handleTitleChange} />
        {/* <TextField
          id="hours"
          label="Hours"
          type="number"
          onChange={handleHoursChange}
        />
        <TextField
          id="minutes"
          label="Minutes"
          onChange={handleMinutesChange}
        /> */}
        <TextField
          id="seconds"
          label="Seconds"
          onChange={handleSecondsChange}
        />
        <Button
          onClick={() => {
            handleSubmit([
              ...timerState,
              {
                id: timerState.length.toString(),
                label: title,
                durationSeconds: seconds,
                remainingSeconds: seconds,
                isRunning: true,
              },
            ])
          }}
          // onClick={handleSubmit([
          //   ...timerState,
          //   { timerState.length, title, minutes, hours, seconds },
          // ])}
        >
          Add Timer
        </Button>
      </Box>
    </div>
  )
}
