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
      <Box
        display="flex"
        alignItems="center"
        sx={{
          mt: 2,
          ml: 1,
          mr: 1,
          width: '80%',
          borderRadius: 2,
          bgcolor: 'primary.main',
        }}
      >
        <Typography
          fontFamily="Pacifico"
          sx={{
            textDecoration: task.completed ? 'line-through' : 'none',
            ml: 1,
            color: 'white',
          }}
          onClick={() => completeHandler(task.id)}
        >
          {task.name}
        </Typography>
        <IconButton
          aria-label="cardDelete"
          onClick={() => deleteHandler(task.id)}
          sx={{ ml: 'auto' }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </div>
  )
}
