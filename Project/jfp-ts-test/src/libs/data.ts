import { v4 as uuidv4 } from 'uuid'

export interface Task {
  name: string
  completed: boolean
  id: string
}

export const tasks: Task[] = [
  // { name: 'task1', completed: false, id: uuidv4() },
  // { name: 'task2', completed: false, id: uuidv4() },
  // { name: 'task3', completed: false, id: uuidv4() },
]
