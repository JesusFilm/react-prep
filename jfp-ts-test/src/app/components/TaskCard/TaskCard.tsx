import { ReactElement, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Task } from '../../libs/data'
import { v4 as uuidv4 } from 'uuid'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'



interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps): ReactElement {
  const [isChecked, setIsChecked] = useState(task.completed)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    task.completed = !isChecked;
  }

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3" component="div">
            Task: {task.name}
          </Typography>
          <div className='status'>
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              color="primary"
            />
            <Typography variant="h6" component="div">
              Status: {task.completed ? 'Completed' : 'Not Completed'}
            </Typography>
          </div>
          <Button>Delete</Button>
        </CardContent>
      </Card>
    </>
  )
}
