import { fireEvent, render } from '@testing-library/react'
import { TaskCard } from '.'
import '@testing-library/jest-dom' //important!

describe('TaskCard', () => {
  const work = {
    id: '1',
    name: 'Do some work',
    completed: true,
  }
  it('should call onDelete when pressed Delete is presssed', () => {
    // Arrange
    const mockFunction = jest.fn()

    const { getByText } = render(
      <TaskCard task={work} onDelete={mockFunction} onComplete={jest.fn()} />
    )

    // Act
    const deleteButton = getByText('x')
    fireEvent.click(deleteButton)

    // Assert
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should handle complete', () => {
    const onDelete = jest.fn
    const onCompelte = jest.fn

    const { getByRole } = render(
      <TaskCard task={work} onDelete={onDelete} onComplete={onCompelte} />
    )

    expect(getByRole('button', { name: 'Complete' })).toBeInTheDocument()
  })
})
