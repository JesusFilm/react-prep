import { Task } from '@/libs/data'
import { Button, Card, Typography } from '@mui/material'
import { ReactElement } from 'react'

interface TaskCardProps {
  task: Task
  updateTaskCompletion: (taskName: string) => void
  deleteTask: (taskName: string) => void
}

export function TaskCard(props: TaskCardProps): ReactElement {
  function handleCompleteButtonClick() {
    props.updateTaskCompletion(props.task.name)
  }

  function handleDeleteButtonClick() {
    props.deleteTask(props.task.name)
  }

  return (
    <Card>
      <Typography variant="h1">{props.task.name}</Typography>
      <Typography variant="body1">
        {props.task.completed ? 'completed' : 'incomplete'}
      </Typography>
      <Button onClick={handleCompleteButtonClick}>
        {props.task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </Button>
      <Button onClick={handleDeleteButtonClick}>Delete</Button>
    </Card>
  )
}
