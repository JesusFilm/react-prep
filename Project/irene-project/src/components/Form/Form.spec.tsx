import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

describe('Form', () => {
  const mockOnAddTimer = jest.fn()

  beforeEach(() => {
    mockOnAddTimer.mockClear()
  })

  it('should render form inputs and submit button', () => {
    // Arrange & Act
    render(<Form onAddTimer={mockOnAddTimer} />)

    // Assert
    expect(screen.getByLabelText('Timer Label')).toBeInTheDocument()
    expect(screen.getByLabelText('Duration (seconds)')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Create Timer' })).toBeInTheDocument()
  })

  it('should call onAddTimer with label and duration when form is submitted', async () => {
    // Arrange
    const user = userEvent.setup()

    // Act
    render(<Form onAddTimer={mockOnAddTimer} />)
    const labelInput = screen.getByLabelText('Timer Label')
    const durationInput = screen.getByLabelText('Duration (seconds)')
    const submitButton = screen.getByRole('button', { name: 'Create Timer' })

    await user.type(labelInput, 'My New Timer')
    await user.type(durationInput, '300')
    await user.click(submitButton)

    // Assert
    expect(mockOnAddTimer).toHaveBeenCalledWith('My New Timer', 300)
    expect(mockOnAddTimer).toHaveBeenCalledTimes(1)
  })

  it('should clear form inputs after successful submission', async () => {
    // Arrange
    const user = userEvent.setup()

    // Act
    render(<Form onAddTimer={mockOnAddTimer} />)
    const labelInput = screen.getByLabelText('Timer Label') as HTMLInputElement
    const durationInput = screen.getByLabelText('Duration (seconds)') as HTMLInputElement

    await user.type(labelInput, 'Test Timer')
    await user.type(durationInput, '120')
    await user.click(screen.getByRole('button', { name: 'Create Timer' }))

    // Assert
    expect(labelInput.value).toBe('')
    expect(durationInput.value).toBe('')
  })

  it('should not call onAddTimer when label is empty', async () => {
    // Arrange
    const user = userEvent.setup()

    // Act
    render(<Form onAddTimer={mockOnAddTimer} />)
    const durationInput = screen.getByLabelText('Duration (seconds)')
    const submitButton = screen.getByRole('button', { name: 'Create Timer' })

    await user.type(durationInput, '300')
    await user.click(submitButton)

    // Assert
    expect(mockOnAddTimer).not.toHaveBeenCalled()
  })

  it('should not call onAddTimer when duration is 0 or negative', async () => {
    // Arrange
    const user = userEvent.setup()

    // Act
    render(<Form onAddTimer={mockOnAddTimer} />)
    const labelInput = screen.getByLabelText('Timer Label')
    const durationInput = screen.getByLabelText('Duration (seconds)')
    const submitButton = screen.getByRole('button', { name: 'Create Timer' })

    await user.type(labelInput, 'Test Timer')
    await user.type(durationInput, '0')
    await user.click(submitButton)

    // Assert
    expect(mockOnAddTimer).not.toHaveBeenCalled()
  })

  it('should trim whitespace from label before submission', async () => {
    // Arrange
    const user = userEvent.setup()

    // Act
    render(<Form onAddTimer={mockOnAddTimer} />)
    const labelInput = screen.getByLabelText('Timer Label')
    const durationInput = screen.getByLabelText('Duration (seconds)')
    const submitButton = screen.getByRole('button', { name: 'Create Timer' })

    await user.type(labelInput, '  Padded Timer  ')
    await user.type(durationInput, '180')
    await user.click(submitButton)

    // Assert
    expect(mockOnAddTimer).toHaveBeenCalledWith('Padded Timer', 180)
  })
})

