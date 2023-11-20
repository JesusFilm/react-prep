import {
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material'
import { ReactElement } from 'react'
import { Card, Button } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

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
  const completion = completed ? 'Done' : 'Not Done'
  const [checked, setChecked] = useState(completed)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h3">
          </Typography>
          <Button variant="contained" onClick={() => onDeleteTodo(uuidv4())}>
            Remove Task
          </Button>
          <FormControlLabel
            sx={{ ml: 10 }}
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label={completion }
          />
        </CardContent>
      </Card>
    </>
  )
}
