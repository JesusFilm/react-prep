import { ReactElement } from 'react'
import React, { useState, ChangeEvent } from 'react'
import { Title } from '../Title'
import { Task, tasksData } from '../../libs/data'
import { Button, TextField } from '@mui/material'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { TaskCardProps } from '../TaskCard'

import { v4 as uuidv4 } from 'uuid'
uuidv4() // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// const Task1: Task = {
//   name: 'TASK ONE',
//   completed: false,
// }

export function Main(): ReactElement {
  const [taskArray, setTaskArray] = useState([...tasksData])
  // const [name, setName] = useState('Task Name')

  // function changeName(newName: string) {
  //   setName(newName)
  // }

  function addTask(str: string) {
    setTaskArray((taskArray) => [...taskArray, { name: str, completed: false }])

    console.log(str)
  }

  // console.log(taskArray)

  return (
    <>
      <Title label={'To Do List'}></Title>
      {/* <Title label={'TODO List'}></Title> */}
      <Form handleAdd={addTask}></Form>
      {taskArray.map((x) => (
        <TaskCard item={x} key={uuidv4()}></TaskCard>
      ))}
    </>
  )
}
