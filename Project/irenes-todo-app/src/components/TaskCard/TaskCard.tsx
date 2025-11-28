import { Task } from '@/libs/data'
import { Typography } from '@mui/material'
import { ReactElement } from 'react'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps): ReactElement {
  return (
    <>
      <Typography variant="h1" component="h2">
        {task.name}
      </Typography>
      <Typography variant="h1" component="h2">
        {`${task.completed}`}
      </Typography>
    </>
  )
}
