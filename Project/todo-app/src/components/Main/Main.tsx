'use client'

import { ReactElement, useState } from 'react'
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
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          }
        } else {
          return task
        }
      })
    )
  }

  function handleDelete(id: string): void {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id))
  }

  return (
    <Container maxWidth="sm">
      <Title label="Todo" />
      <Form handleAdd={handleAdd} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  )
}
