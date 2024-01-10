'use client'

import { v4 as uuidv4 } from 'uuid'
import { TaskCard } from '../TaskCard'
import { Task, initialTasks } from '../../libs/data'
import Box from '@mui/material/Box' //remeber to specifically get this and not the entire materials folder
import { useState } from 'react' //should this be changed then?
import { Form } from '../Form/Form'

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const onAddTask = (taskName: string) => {
    const newTask: Task = {
      id: uuidv4(),
      name: taskName,
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const handleDelete = (taskId: string) => {
    // Remove the task with the given taskId
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  const handleComplete = (taskId: string) => {
    // set the task witht the task id of 'taskId' to completed
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    )
  }

  return (
    <Box>
      <Form onAddTask={onAddTask} />
      {tasks.map((task: Task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      ))}
    </Box>
  )
}
