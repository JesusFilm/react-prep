'use client'

import { ReactElement } from 'react'
import { Task } from '../../libs/data'
import { Box, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface TaskCardProps {
  task: Task
  key: string
  completeHandler: (id: string) => void
  deleteHandler: (id: string) => void
}

export function TaskCard({
  task,
  completeHandler,
  deleteHandler,
}: TaskCardProps): ReactElement {
  return (
    <div>
      <Box display="flex" alignItems="center">
        <Typography
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          onClick={() => completeHandler(task.id)}
        >
          {task.name}
        </Typography>
        <IconButton aria-label="delete" onClick={() => deleteHandler(task.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </div>
  )
}
