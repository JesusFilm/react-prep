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

  const onAddTask = (taskName: string) => {
    const newTask: Task = {
      id: uuidv4(),
      name: taskName ? taskName : 'Unnamed Task',
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const handleDelete = (taskId: string) => {
    // Remove the task with the given taskId
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  const handleComplete = (taskId: string) => {
    // set the task with the task id of 'taskId' to completed
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

//TODO add task completed change button css to say completed anchange colour
