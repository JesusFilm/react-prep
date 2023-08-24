'use client'

import { ReactElement, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import Container from '@mui/material/Container'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { taskArr, Task } from '../../libs/data'

export function Main(): ReactElement {
  const [tasks, setTasks] = useState(() => taskArr)

  function handleAdd(task: Task): void {
    setTasks((previousTasks) => [...previousTasks, task])
  }

  function handleCheck(id: string): void {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        }
      } else {
        return task
      }
    })
    setTasks(newTasks)
  }

  function handleDelete(id: string): void {}

  return (
    <Container maxWidth="sm">
      <Title label="Todo" />
      <Form />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} handleCheck={handleCheck} />
      ))}
    </Container>
  )
}
