import { fireEvent, render } from '@testing-library/react'
import { Task } from '../../libs/data'
import { TaskCard } from '.'
import '@testing-library/jest-dom' //important!

describe('TaskCard', () => {
  it('should call onDelete when pressed Delete is presssed', () => {
    // Arrange
    const mockFunction = jest.fn()

    const work = {
      id: '1',
      name: 'Do some work',
      completed: true,
    }

    const { getByText } = render(
      <TaskCard task={work} onDelete={mockFunction} onComplete={jest.fn()} />
    )

    // Act
    const deleteButton = getByText('x')
    fireEvent.click(deleteButton)

    // Assert
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})
