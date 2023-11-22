import React, { useState, ReactElement } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useFormState } from 'react-dom'
import { TaskCard } from '../TaskCard'
import { Task } from '@/app/libs/data'


interface FormProps{
  setTasksArray:(arr: Task[]) => void
}

export function Form( {setTasksArray}: FormProps): ReactElement {
  
  const [toDoName, setName] = useState('')

  function addCard() {
    setTasksArray([
      {
      name: {},
      completed: true
    }
  ])
    //write code that adds the input into a new card\
    console.log('Adding task:', toDoName)
  }

  return (
    <>
      <Typography variant="h4" component="div">
        New Task:
      </Typography>
      <TextField
        onChange={(e) => {
          const textValue = (e.target.value);
          setName(prev => prev + textValue)}}
        value={toDoName}
        // name="name"
        // id="name"
      />
      <Button variant="outlined" onClick={addCard}>
        Submit
      </Button>
    </>

  )
}
