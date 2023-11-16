export interface Task {
  name: string
  completed: boolean
}

export const tasksData: Task[] = [
  {
    name: 'clean room',
    completed: false,
  },
  {
    name: 'mow lawns',
    completed: false,
  },
  {
    name: 'do dishes',
    completed: true,
  },
]
