import { Task } from '@/libs/data'
import {
  Button,
  Card,
  Paper,
  Stack,
  styled,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { ReactElement, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Notes } from '@mui/icons-material'

interface TaskCardProps {
  task: Task
  handleComplete: (id: string) => void
  deleteTask: (id: string) => void
  selectDay: (id: string, day: string) => void
  taskMove: (id: string, input: string) => void
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}))

export default function DirectionStack() {
  return (
    <div>
      <Stack direction="row" spacing={50}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  )
}

export function TaskCard({
  task,
  handleComplete,
  deleteTask,
  selectDay,
  taskMove,
}: TaskCardProps): ReactElement {
  const isCompleted = task.completed
  const [day, setDay] = useState<string | null>('Monday')

  const ariaLabel = { 'aria-label': 'description' }

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

          <Stack direction="row" spacing={2}>
            <Button onClick={() => deleteTask(task.id)}>Delete</Button>
            <ToggleButtonGroup
              value={day}
              exclusive
              onChange={handleDay}
              aria-label="text alignment"
            >
              <ToggleButton value="Mon" aria-label="Mon">
                Monday
              </ToggleButton>
              <ToggleButton value="Tues" aria-label="Tues">
                Tuesday
              </ToggleButton>
              <ToggleButton value="Wed" aria-label="Wed">
                Wednesday
              </ToggleButton>
              <ToggleButton value="Thur" aria-label="Thurs">
                Thursday
              </ToggleButton>
              <ToggleButton value="Fri" aria-label="Fri">
                Friday
              </ToggleButton>
            </ToggleButtonGroup>
            <TextField
              placeholder="Type notes here"
              id="outlined-multiline-static"
              label="Notes:"
              multiline
              rows={4}
              onChange={(event) => {
                const input = event.target.value
                taskMove(task.id, input)
              }}
            />
          </Stack>
        </>
      }
    </Card>
  )
}
