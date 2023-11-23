import { v4 as uuidv4 } from 'uuid';

export interface Task {
  name: string,
  completed: boolean,
  uuid: string
}

export const tasks: Array<Task>  = [
  {
    name:'Anna',
    completed: true,
    uuid: uuidv4(),
  },
  {
    name:'Jack',
    completed: false,
    uuid: uuidv4(),
  },
  {
    name:'Des',
    completed: true,
    uuid: uuidv4(),
  }
];

