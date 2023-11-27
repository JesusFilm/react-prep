import { ReactElement, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Task } from '../../libs/data'
import { v4 as uuidv4 } from 'uuid'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { Form } from '../Form'

interface TaskCardProps {
  task: Task
  deleteTodo: (key: string) => void
  toggleTodo: (key: string, completed: boolean) => void
}

export function TaskCard({ task, toggleTodo, deleteTodo }: TaskCardProps): ReactElement {
  const {id, name, completed} = task
  //object destructuring 
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3" component="div">
            Task: {name}
          </Typography>
          <div className="status">
            <Checkbox
              color="primary"
              checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)}
            />
            <Typography variant="h6" component="div">
              Status: {completed ? 'Completed' : 'Not Completed'}
            </Typography>
          </div>
          <Button onClick={() =>deleteTodo(id)}>Delete</Button>
        </CardContent>
      </Card>
    </>
  )
}
