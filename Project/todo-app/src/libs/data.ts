export interface Task {
  name: string
  completed: boolean
}

export const taskArr: Task[] = [
  {
    name: 'cook',
    completed: true,
  },
  {
    name: 'clean',
    completed: false,
  },
  {
    name: 'walk dog',
    completed: false,
  },
]
