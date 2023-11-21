import { v4 as uuidv4 } from 'uuid'
export interface Task {
  name: string
  completed: boolean
  key: string
  
}

export const cardsData: Task[] = [
  {
    name: 'Clean up desk',
    completed: true,
    key: uuidv4()
  },
  {
    
    name: 'Write code',
    completed: true,
    key: uuidv4()
  },
  {
    name: 'finish off',
    completed: false,
    key: uuidv4()
  },
  
]
