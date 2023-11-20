import { ReactElement } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {Task} from '../../libs/data'

interface TaskCardProps {
  task:Task,
}

export function TaskCard({ task }: TaskCardProps): ReactElement {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
              <Typography variant="h3" component="div">
                Task: {task.name}
              </Typography>
              <Typography variant="h6" component="div">
                Status: {task.completed ? 'Completed' : 'Not Completed'}
              </Typography>
        </CardContent>
      </Card>
    </>
  )
}
