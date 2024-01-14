import { render } from '@testing-library/react'
import { TaskList } from '.'
import '@testing-library/jest-dom' //important!
describe('TaskList', () => {
  beforeAll(() => {})
  it('should render the list of tasks', () => {
    const mockFunction = jest.fn()
    const initialTasks = [
      { id: '1', name: 'Task 1' },
      { id: '2', name: 'Task 2' },
    ]
    const test = render(
      <TaskList
        initialTasks={initialTasks}
        onDelete={mockFunction}
        onComplete={mockFunction}
      />
    )

    initialTasks.forEach((task) => {
      expect(test.getByText(task.name)).toBeInTheDocument()
    })
  })
})

/* 

possible other test

it('should allow other tasks to be added', () => {
    //call add funciton
    const testTask = {
      id: '1',
      name: 'This is a test',
      completed: false,
    }
    //check list length
  })
  it('should allow other tasks to be deleted', () => {
    //call delete function remove one from list
    //check list length
  })
  
  */
