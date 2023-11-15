import { Card, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { Task } from '../../libs/data'
import CardContent from '@mui/material/CardContent'

export interface TaskCardProps {
  item: Task
}

export function TaskCard({ item }: TaskCardProps): ReactElement {
  // let taskStatus = ''
  const taskName = item.name
  const taskStatus = item.completed ? 'Completed' : 'Not Completed'
  // if (item.completed) {
  //   taskStatus = 'Completed'
  // } else {
  //   taskStatus = 'Not Complete'
  // }

  return (
    <Card variant="outlined" sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h4">{taskName}</Typography>
        <Typography variant="overline">{taskStatus}</Typography>
      </CardContent>
    </Card>
  )
}
