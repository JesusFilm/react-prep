import { CardContent, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { Card, Button } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

interface Task {
  name: string
  completed: boolean
  onDeleteTodo: (key: string) => void
}

export function TaskCard({
  name,
  completed,
  onDeleteTodo,
}: Task): ReactElement {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h3">
            {completed ? 'Done' : 'Not Done'}
          </Typography>
          <Button
            variant="contained"
            onClick={() =>
              onDeleteTodo(uuidv4())}
  
          >
            Remove Task
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
