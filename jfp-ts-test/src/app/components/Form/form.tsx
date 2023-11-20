import React, { useState, ReactElement } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useFormState } from 'react-dom'
import { TaskCard } from '../TaskCard'

export function Form(): ReactElement {
  
  const [toDoName, setName] = useState('')

  function addCard() {
    //write code that adds the input into a new card
    console.log('Adding task:', toDoName)
  }

  return (
    <>
      <Typography variant="h4" component="div">
        New Task:
      </Typography>
      <TextField
        onChange={(e) => setName(e.target.value)}
        value={toDoName}
        name="name"
        id="name"
      />
      <Button variant="outlined" onClick={addCard}>
        Submit
      </Button>
    </>

  )
}
