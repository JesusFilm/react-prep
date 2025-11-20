import { fireEvent, render, screen } from '@testing-library/react'
import { Form } from './Form'
import { v4 as uuidv4 } from 'uuid'

describe('Form Component', () => {
  jest.mock('uuid', () => ({
    __esModule: true,
    v4: jest.fn(),
  }))
  const mockUuidv4 = uuidv4 as jest.MockedFunction<typeof uuidv4>
  const handleSubmit = jest.fn()
  it('should call handleSubmit when Add Timer is clicked', () => {
    render(<Form handleSubmit={handleSubmit} timerState={[]} />)
    // fireEvent.change(screen.getByLabelText('Title'), {
    //   target: { title: 'testname12345' },
    // })
    fireEvent.click(screen.getByText('Add Timer'))

    // expect(screen.getByText('testname12345')).toBeInTheDocument()

    expect(handleSubmit).toHaveBeenCalledTimes(1)

    // Arrange
    // Assert
    // Act
  })
})
