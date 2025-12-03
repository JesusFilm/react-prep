export interface Task {
  id: string
  name: string
  completed: boolean
  day: string
}

export const tasks: Task[] = [
  {
    id: '1',
    name: 'task1',
    completed: false,
    day: 'Monday',
  },
  {
    id: '2',
    name: 'task2',
    completed: true,
    day: 'Tuesday',
  },
  {
    id: '3',
    name: 'task3',
    completed: true,
    day: 'Wednesday',
  },
]
