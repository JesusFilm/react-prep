'use client'

import { TaskCard } from '../TaskCard'
import { Task } from '../../libs/data'
import Box from '@mui/material/Box' //remeber to specifically get this and not the entire materials folder
import Grow from '@mui/material/Grow'

interface mainProps {
  initialTasks: Task[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}
export function TaskList({ initialTasks, onDelete, onComplete }: mainProps) {
  return (
    ///<Grow>
    <Box
      aria-label="Close"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      {initialTasks.map((task: Task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </Box>
    // </Grow>
  )
}
