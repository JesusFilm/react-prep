export interface Task {
  name: string
  completed: boolean
}

export const taskArr: Task[] = [
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
