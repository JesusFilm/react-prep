import { ReactElement } from 'react'
import Card from '@mui/material/Card'
import { Task } from '../../libs/data'
import { CardContent, Checkbox, Typography } from '@mui/material'

interface Props {
  task: Task
  handleCheck: (id: string) => void
}

export function TaskCard({ task, handleCheck }: Props): ReactElement {
  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography>{task.name}</Typography>
        <Checkbox
          checked={task.completed}
          sx={{ ml: 'auto' }}
          onChange={() => handleCheck(task.id)}
        />
      </CardContent>
    </Card>
  )
}
