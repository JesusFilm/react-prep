import { Button, Card, Switch, Typography } from '@mui/material'
import { ReactElement, useState, ChangeEvent } from 'react'
import { Task } from '../../libs/data'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'

export interface TaskCardProps {
  item: Task
  deleteTask: (removeId: string) => void
}

export function TaskCard({ item, deleteTask }: TaskCardProps): ReactElement {
  // let taskStatus = ''
  const taskName = item.name
  const [compState, setCompState] = useState(false)

function handleDelete(removeTaskId: string) {
  deleteTask(removeTaskId)
}

  return (
    <Card variant="outlined" sx={{ maxWidth: 275 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4">{taskName}</Typography>
        <Typography variant="overline">
          {compState ? 'Completed' : 'Not Completed'}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Switch
            checked={compState}
            onChange={() => setCompState(!compState)}
          />
          <IconButton>
            <DeleteIcon
              onClick={() => {handleDelete(item.taskId)}}
            />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}
