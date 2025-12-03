import { Task } from '@/libs/data'
import { Button, Card, Stack, Switch, Typography } from '@mui/material'
import { ReactElement, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

interface TaskCardProps {
  task: Task
  handleComplete: (id: string) => void
  deleteTask: (id: string) => void
  selectDay: (id: string, day: string) => void
}

export function TaskCard({
  task,
  handleComplete,
  deleteTask,
  selectDay,
}: TaskCardProps): ReactElement {
  const isCompleted = task.completed
  const [day, setDay] = useState<string | null>('Monday')

  const handleDay = (event: React.MouseEvent<HTMLElement>, newDay: string) => {
    setDay(newDay)
    selectDay(task.id, newDay)
  }
  return (
    <Card
      variant="outlined"
      sx={{ p: 4, backgroundColor: isCompleted ? '#83cc96' : '#db8e84' }}
    >
      {
        <>
          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            {' '}
            <Typography variant="h1" component="h2">
              {task.name}
            </Typography>
            <Switch onClick={() => handleComplete(task.id)} />
          </Stack>
          <Button onClick={() => deleteTask(task.id)}>Delete</Button>
          <ToggleButtonGroup
            value={day}
            exclusive
            onChange={handleDay}
            aria-label="text alignment"
          >
            <ToggleButton value="Monday" aria-label="Monday">
              Monday
            </ToggleButton>
            <ToggleButton value="Tuesday" aria-label="Tuesday">
              Tuesday
            </ToggleButton>
            <ToggleButton value="Wednesday" aria-label="Wednesday">
              Wednesday
            </ToggleButton>
          </ToggleButtonGroup>
        </>
      }
    </Card>
  )
}
