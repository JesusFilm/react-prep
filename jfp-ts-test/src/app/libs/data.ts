export interface Task {
  name: string
  completed: boolean
}

export const array: Task[] = [
  {
    name: 'Clean up desk',
    completed: true,
  },
  {
    name: 'Write code',
    completed: true,
  },
  {
    name: 'finish off',
    completed: false,
  },
]
