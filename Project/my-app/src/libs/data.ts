import { v4 as uuidv4 } from 'uuid'
interface Task {
  id: string
  name: string
  completed: boolean
}

export const tasks: Task[] = []

const clean: Task = {
  id: uuidv4(),
  name: 'Clean the car',
  completed: false,
}

const bank: Task = {
  id: uuidv4(),
  name: 'Go to the bank',
  completed: false,
}

const work: Task = {
  id: uuidv4(),
  name: 'Do some work',
  completed: true,
}

tasks.push(clean)
tasks.push(bank)
tasks.push(work)

console.log('Tasks: ', tasks)

export default Task
