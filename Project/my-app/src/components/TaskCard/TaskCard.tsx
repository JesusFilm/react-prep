import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Task } from '../../libs/data'
import { Box, Button } from '@mui/material'

interface taskCardProps {
  task: Task
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function TaskCard({ task, onDelete, onComplete }: taskCardProps) {
  const handleDelete = () => {
    onDelete(task.id)
  }

  const handleComplete = () => {
    onComplete(task.id)
  }

  return (
    <Card
      sx={{
        width: '30%',
        pb: '5px',
        mb: '15px',
        textAlign: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {task.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.completed ? 'Completed' : 'Not Completed'}
        </Typography>

        <Box sx={{ minWidth: '50%', pb: '5px', mb: '15px', pt: '5px' }}>
          <Button variant="outlined" color="primary" onClick={handleComplete}>
            Complete
          </Button>
        </Box>
        {/* <Button variant="contained" color="error" onClick={handleDelete}> */}
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(task.id)}
        >
          x
        </Button>
      </CardContent>
    </Card>
  )
}
