export interface Task {
  name: string
  completed: boolean
}

export const tasks: Task[] = [
  {
    name: 'task1',
    completed: false,
  },
  {
    name: 'task2',
    completed: true,
  },
  {
    name: 'task3',
    completed: true,
  },
]
