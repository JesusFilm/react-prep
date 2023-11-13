export interface Task {
  name: string
  completed: boolean
}
export const tasks: Task[] = [
  { name: 'task1', completed: true },
  { name: 'task2', completed: true },
  { name: 'task3', completed: false },
]
