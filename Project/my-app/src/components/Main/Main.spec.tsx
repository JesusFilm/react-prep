import { fireEvent, getByText, render, screen } from '@testing-library/react'
import { Main } from '.'
import '@testing-library/jest-dom' //important!

describe('Main', () => {
  it('should render the title component', () => {
    // Arrange
    const { getByText } = render(<Main />)
    // Act - (Nothing here because just checking if text is present on page not needing to click any buttons etc..)
    // Assert
    const titleElement = getByText(/Tasks/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('should add tasks using the setTasks function', () => {
    // Arrange
    render(<Main />)
    const addTaskInput = screen.getByLabelText('Enter Task')
    const addTaskButton = screen.getByText('Submit') as HTMLButtonElement
    const newTask = 'test task'

    // Act  - create new task
    fireEvent.change(addTaskInput, { target: { value: newTask } })
    fireEvent.click(addTaskButton)

    // Assert - check task is titled 'Unnamed Task'
    const addedTask = screen.getByText(newTask)
    expect(addedTask).toBeInTheDocument()
  })

  it('should automatically name Unnamed tasks', () => {
    //assumes that no untitled tasks are in the page initially
    // Arrange
    render(<Main />)
    const addTaskInput = screen.getByLabelText('Enter Task')
    const addTaskButton = screen.getByText('Submit') as HTMLButtonElement
    const newTask = ''

    // Act  - create new task
    fireEvent.change(addTaskInput, { target: { value: newTask } })
    fireEvent.click(addTaskButton)

    // Assert
    const unnamedTask = screen.getByText('Unnamed Task')
    expect(unnamedTask).toBeInTheDocument()
  })
})
