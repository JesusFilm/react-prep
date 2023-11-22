import React, { useState, ReactElement } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useFormState } from 'react-dom'
import { TaskCard } from '../TaskCard'
import { Task } from '@/app/libs/data'
import { v4 as uuidv4 } from 'uuid';


interface FormProps {
  setTasksArray: (arr: Task[]) => void
}

export function Form({ setTasksArray }: FormProps): ReactElement {
  const [toDoName, setName] = useState('')
  // const [toDosList, setToDosList] = useState([])

  // function addCard() {
  //   setTasksArray([
  //     {
  //       name: {},
  //       completed: true,
  //     },
  //   ])
  //   //write code that adds the input into a new card\
  //   console.log('Adding task:', toDoName)
  // }

  function addCard(e){
    e.preventDefault() 
    //this prevents page from refreshing so it can be added ? 
    setTasksArray(currentToDos => {
      return [
        ...currentToDos,
        {
          uuid:uuidv4(), title: toDoName, completed: true
        },
      ]
    })
  }

  return (
    <>
      <Form>
        <Typography variant="h4" component="div">
          New Task:
        </Typography>
        <TextField
          onChange={(e) => {
            const textValue = e.target.value
            setName((prev) => prev + textValue)
          }}
          value={toDoName}
          // name="name"
          // id="name"
        />
        <Button variant="outlined"onClick={addCard}>
          Submit
        </Button>
      </Form>
    </>
  )
}
