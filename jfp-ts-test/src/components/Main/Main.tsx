'use client'

import { ReactElement, useEffect, useState } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard/TaskCard'
import { Task } from '@/libs/data'
import { v4 as uuidv4 } from 'uuid'
import { Box, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'

export function Main(): ReactElement {
  const [tasks, setTasks] = useState<Task[]>([])
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [showReward, setShowReward] = useState(false)

  useEffect(() => {
    setLoading(true)
    getRewardImage()
    checkTaskCompletion()
  }, [tasks])

  async function getRewardImage() {
    await axios.get('https://randomfox.ca/floof/').then((response) => {
      setImageUrl(response.data.image)
      setLoading(false)
    })
  }

  function addTask(name: string) {
    const newTask = { name: name, completed: false }
    setTasks((tasks) => [...tasks, newTask])
    setShowReward(false)
  }

  function updateTaskCompletion(taskName: string) {
    const newTaskArray = tasks.map((task) => {
      return task.name == taskName
        ? { name: task.name, completed: !task.completed }
        : task
    })
    checkTaskCompletion()

    setTasks(newTaskArray)
  }

  function checkTaskCompletion() {
    setShowReward(
      tasks.every((task) => {
        return task.completed
      })
    )
  }

  function deleteTask(taskName: string) {
    const newTaskArray = tasks.filter((task) => {
      return task.name != taskName
    })

    setTasks(newTaskArray)
  }

  return (
    <>
      <Box sx={{ ml: 4 }}>
        <Title />
        <Form addTask={addTask} tasks={tasks} />
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
        {!loading && showReward ? (
          <>
            <Typography>
              Congratulations on finishing all your tasks! Here is a cute fox
              picture as your reward
            </Typography>
            <Image src={imageUrl} alt="fox" width={300} height={300} />
          </>
        ) : null}
      </Box>
    </>
  )
}
