import { fireEvent, render } from '@testing-library/react'
import { Main } from '.'
import '@testing-library/jest-dom' //important!

describe('Main', () => {
  it('should have a title component', () => {
    // Arrange
    const { getByText } = render(<Main />)
    // Act - (Nothing here because just checking if text is present on page not needing to click any buttons etc..)
    // Assert
    const titleElement = getByText(/Tasks/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('should automatically title unnamed tasks', () => {
    // Arrange
    render(<Main />)
    // Act  - create new task with name = ''
    const addTaskButton = 'add-task-button' // Adjust the test ID based on your actual implementation
    fireEvent.click(addTaskButton)

    // Assert - check task is titled 'Unnamed Task'
    const titleElement = getByText(/Unnamed Task/i)
    expect(titleElement).toBeInTheDocument()
  })
})

//TODO ^^
