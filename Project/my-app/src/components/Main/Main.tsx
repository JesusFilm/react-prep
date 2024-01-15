'use client'

//imports
import { Title } from '../Title/Title'
import { TaskList } from '../TaskList'
import Box from '@mui/material/Box'
import { Task, initialTasks } from '../../libs/data'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { Form } from '../Form'

export function Main() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const onAddTask = (name: string) => {
    const newTask: Task = {
      id: uuidv4(),
      name,
      // name: taskName ? taskName : 'Unnamed Task',
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const handleDelete = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  const handleComplete = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '90%',
      }}
    >
      <Title label="Tasks" />
      <Form onAddTask={onAddTask} />
      <TaskList
        initialTasks={tasks}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
    </Box>
  )
}
