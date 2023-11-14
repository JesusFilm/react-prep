import { Task } from '@/libs/data'
import { Box, Button, Card, Typography } from '@mui/material'
import { ReactElement } from 'react'

interface TaskCardProps {
  task: Task
  updateTaskCompletion: (taskName: string) => void
  deleteTask: (taskName: string) => void
}

export function TaskCard(props: TaskCardProps): ReactElement {
  function handleCompleteButtonClick() {
    props.updateTaskCompletion(props.task.name)
  }

  function handleDeleteButtonClick() {
    props.deleteTask(props.task.name)
  }

  return (
    <Card
      sx={{
        paddingX: 4,
        marginY: 4,
        bgcolor: '#DDDDDD',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '180px',
      }}
    >
      <Typography variant="h3">{props.task.name}</Typography>
      <Typography variant="body1">
        {props.task.completed ? 'Completed' : 'Incomplete'}
      </Typography>
      <Box>
        <Button onClick={handleCompleteButtonClick} variant="contained">
          {props.task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </Button>
        <Button
          onClick={handleDeleteButtonClick}
          variant="contained"
          sx={{ ml: 2 }}
        >
          Delete
        </Button>
      </Box>
    </Card>
  )
}
