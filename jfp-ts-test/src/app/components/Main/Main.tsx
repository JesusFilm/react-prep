import { ReactElement } from 'react'
import React, { useState, ChangeEvent } from 'react'
import { Title } from '../Title'
import { Task, tasksData } from '../../libs/data'
import { Button, TextField } from '@mui/material'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { TaskCardProps } from '../TaskCard'

import { v4 as uuidv4 } from 'uuid'

export function Main(): ReactElement {
  const [taskArray, setTaskArray] = useState([...tasksData])

  function addTask(name: string) {
    setTaskArray((taskArray) => [...taskArray, { name, completed: false }])
  }

  return (
    <>
      <Title label={'To Do List'} />
      <Form handleAdd={addTask} />
      {taskArray.map((task) => (
        <TaskCard item={task} key={uuidv4()} />
      ))}
    </>
  )
}
