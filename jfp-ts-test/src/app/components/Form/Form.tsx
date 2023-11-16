import { Task } from '@/app/libs/data'
import { Button, Stack, TextField } from '@mui/material'
import { ReactElement } from 'react'
import React, { useState, ChangeEvent } from 'react'

// import { taskArr } from '@/app/libs/data'

interface FormProps {
  handleAdd: (str: string) => void
  // handleAdd: (task: Task) => void
}

export function Form({ handleAdd }: FormProps): ReactElement {
  // const [taskArray, setTaskArray] = useState(taskArr)
  const [name, setName] = useState('Task Name')


  function changeName(newName: string) {
    setName(newName)
    
  }

 

  function consoleLog(): void {
    handleAdd(name)
  }

  return (
    <Stack direction="row" gap={2} sx={{ pb: 2 }}>
      <TextField
        id="outlined-basic"
        label="Task Name"
        variant="outlined"
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          changeName(event.target.value)
        }}
      />

      <Button variant="contained" size="large" onClick={consoleLog}>
        {/* <Button variant="contained" size="large" onClick={() => handleAdd('str')}> */}
        Submit
      </Button>
    </Stack>
  )
}
