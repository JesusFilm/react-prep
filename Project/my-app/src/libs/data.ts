import { v4 as uuidv4 } from 'uuid'
export interface Task {
  id: string
  name: string
  completed?: boolean
}

export const initialTasks: Task[] = [
  {
    id: uuidv4(),
    name: 'Clean the car',
  },
  {
    id: uuidv4(),
    name: 'Go to the bank',
  },
]

//example of creating individually and pushing to the list
const work: Task = {
  id: uuidv4(),
  name: 'Do some work',
  completed: true,
}

initialTasks.push(work)
