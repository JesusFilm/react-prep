import { fireEvent, render, screen } from '@testing-library/react'
import { Form } from './Form'

describe('Form Component', () => {
  it('should update title textfield', () => {
    render(<Form handleSubmit={jest.fn()} timerState={[]} />)
    fireEvent.change(screen.getByText('Title'), {
      target: { title: 'timer title test' },
    })

    expect(screen.getByText('timer title test')).toBeInTheDocument()

    // Arrange
    // Assert
    // Act
  })
})
