export interface Task {
  id: string
  name: string
  completed: boolean
}

export const taskArr: Task[] = [
  {
    id: '1',
    name: 'cook',
    completed: true,
  },
  {
    id: '2',
    name: 'clean',
    completed: false,
  },
  {
    id: '3',
    name: 'walk dog',
    completed: false,
  },
]
