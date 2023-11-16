import { Card, Switch, Typography } from '@mui/material'
import { ReactElement, useState,  } from 'react'
import { Task } from '../../libs/data'
import CardContent from '@mui/material/CardContent'

export interface TaskCardProps {
  item: Task
}

export function TaskCard({ item }: TaskCardProps): ReactElement {
  // let taskStatus = ''
  const taskName = item.name
  const taskStatus = item.completed ? 'Completed' : 'Not Completed'
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [compState, setCompState] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompState(event.target.checked);
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h4">{taskName}</Typography>
        <Typography variant="overline">{taskStatus}</Typography>
        <Switch
        checked={compState}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
/>
      </CardContent>
    </Card>
  )
}
