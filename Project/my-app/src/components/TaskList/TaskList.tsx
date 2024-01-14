'use client'

import { TaskCard } from '../TaskCard'
import { Task } from '../../libs/data'
import Box from '@mui/material/Box' //remeber to specifically get this and not the entire materials folders

interface mainProps {
  initialTasks: Task[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}
export function TaskList({ initialTasks, onDelete, onComplete }: mainProps) {
  return (
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
          data-testid={`task-card-${task.id}`}
          key={task.id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </Box>
  )
}
