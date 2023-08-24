import { ReactElement } from 'react'
import Card from '@mui/material/Card'
import { Task } from '../../libs/data'
import { CardContent, Checkbox, IconButton, Typography } from '@mui/material'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

interface Props {
  task: Task
  handleCheck: (id: string) => void
  handleDelete: (id: string) => void
}

export function TaskCard({
  task,
  handleCheck,
  handleDelete,
}: Props): ReactElement {
  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={task.completed}
          onChange={() => handleCheck(task.id)}
        />
        <Typography>{task.name}</Typography>
        <IconButton
          color="error"
          onClick={() => handleDelete(task.id)}
          sx={{ ml: 'auto' }}
        >
          <DeleteRoundedIcon />
        </IconButton>
      </CardContent>
    </Card>
  )
}
