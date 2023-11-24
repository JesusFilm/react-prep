import { v4 as uuidv4 } from 'uuid';

export interface Task {
  name: string,
  completed: boolean,
  id:string
}

export const tasks: Array<Task>  = [
  {
    name:'Anna',
    completed: true,
    id:uuidv4(),
  },
  {
    name:'Jack',
    completed: false,
    id:uuidv4(),
  },
  {
    name:'Des',
    completed: true,
    id:uuidv4(),
  }
];

