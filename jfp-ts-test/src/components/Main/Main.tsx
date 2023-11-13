'use client'

import { Key, ReactElement, useState } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard/TaskCard'
import { Task, tasks } from '@/libs/data'
import { v4 as uuidv4 } from 'uuid'

export function Main(): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(name: string) {
    const newTask = { name: name, completed: false }
    setTasks((tasks) => [...tasks, newTask])
  }

  function updateTaskCompletion(taskName: string) {
    const newTaskArray = tasks.map((task) => {
      return task.name == taskName
        ? { name: task.name, completed: !task.completed }
        : task
    })

    setTasks(newTaskArray)
  }

  function deleteTask(taskName: string) {
    const newTaskArray = tasks.filter((task) => {
      return task.name != taskName
    })

    setTasks(newTaskArray)
  }

  return (
    <>
      <Title />
      <Form addTask={addTask} />
      {tasks.map((task: Task) => {
        return (
          <TaskCard
            task={task}
            updateTaskCompletion={updateTaskCompletion}
            deleteTask={deleteTask}
            key={uuidv4()}
          ></TaskCard>
        )
      })}
    </>
  )
}
