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
import { cardsData } from '@/app/libs/data'

interface Task {
  id: string
  name: string
  completed: boolean
  onHandleChange: (id: string) => void
  onDeleteTodo: (key: string) => void
}

export function TaskCard({
  id,
  name,
  completed,
  onDeleteTodo,
  onHandleChange,
}: Task): ReactElement {
  // const [checked, setChecked] = useState(completed)
  // const handleChange = () => {
  //onHandleUpdate(id, !completed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onHandleChange(id)
  }

  function handleDelete(): void {
    console.log(id)
    onDeleteTodo(id)
  }

  console.log(name, completed)
  
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h3"></Typography>
          <Button variant="contained" onClick={handleDelete}>
            Remove Task
          </Button>
          <FormControlLabel
            sx={{ ml: 10 }}
            control={<Checkbox checked={completed} onChange={handleChange} />}
            label="Completed?"
            labelPlacement="start"
          />
        </CardContent>
      </Card>
    </>
  )
}
