'use client'

import { ReactElement, useState } from 'react'
import { Form } from '../Form/Form'
import { Title } from '../Title/Title'
import { tasks } from '@/libs/data'
import { TaskCard } from '../TaskCard'
import { v4 as uuidv4 } from 'uuid'
uuidv4()

export function Main(): ReactElement {
  const [arrTasks, setTasks] = useState(tasks)

  // Add a new task card object
  const addTask = (newTaskName: string) => {
    setTasks([
      ...arrTasks,
      {
        name: newTaskName,
        completed: false,
        id: uuidv4(),
      },
    ])
  }

  // Toggle task between complete and incomplete
  const toggleComplete = (id: string) => {
    const arrUpdatedTasks = arrTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        }
      }
      return task
    })
    setTasks(arrUpdatedTasks)
  }

  // Delete task card object
  const deleteTask = (id: string) => {
    const arrUpdatedTasks = arrTasks.filter((task) => task.id !== id)
    setTasks(arrUpdatedTasks)
  }

  return (
    <div>
      <Title label="Write your To-Do here!" />
      <Form addTask={addTask} />
      {arrTasks.map((task) => {
        return (
          <TaskCard
            task={task}
            key={task.id}
            completeHandler={toggleComplete}
            deleteHandler={deleteTask}
          />
        )
      })}
    </div>
  )
}
