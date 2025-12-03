'use client'

import { useState } from 'react'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { Task } from '../../libs/data'

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([]) // list of tasks

  console.log('tasks', tasks)

  function addTask(newTask: Task): void {
    setTasks([...tasks, newTask])
  }

  function handleComplete(id: string) {
    const updated = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updated)
  }

  function deleteTask(id: string) {
    const updated = tasks.filter((task) => task.id !== id)
    setTasks(updated)
  }

  function selectDay(id: string, dayName: string) {
    const updated = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, day: dayName }
      }
      return task
    })
    setTasks(updated)
  }

  return (
    <>
      <Form addTask={addTask} tasks={tasks} />
      {tasks.map((currentTask) => (
        <TaskCard
          key={currentTask.id}
          task={currentTask}
          handleComplete={handleComplete}
          selectDay={selectDay}
          deleteTask={deleteTask}
        />
      ))}
    </>
  )
}
