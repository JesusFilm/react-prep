interface Task {
  name: string
  completed: boolean
}

let tasks: Task[] = []

const clean: Task = {
  name: 'Clean the car',
  completed: false,
}

const bank: Task = {
  name: 'Go to the bank',
  completed: false,
}

const work: Task = {
  name: 'Do some work',
  completed: true,
}

tasks.push(clean)
tasks.push(bank)
tasks.push(work)

console.log('Tasks: ' + tasks)
