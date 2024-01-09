import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Task from '../../libs/data'

export function TaskCard(task: Task) {
  return (
    <Card sx={{ maxWidth: '70%', pb: '5px', mb: '15px', textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {task.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.completed ? 'Completed' : 'Not Completed'}
        </Typography>
      </CardContent>
    </Card>
  )
}
