import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Timer from './Timer'

describe('Timer', () => {
  const mockOnDelete = jest.fn()

  const defaultProps = {
    id: '1',
    label: 'Test Timer',
    durationSeconds: 120,
    remainingSeconds: 60,
    isRunning: true,
    onDelete: mockOnDelete,
  }

  beforeEach(() => {
    mockOnDelete.mockClear()
  })

  it('should display the timer label', () => {
    // Arrange
    const props = { ...defaultProps, label: 'My Timer' }

    // Act
    render(<Timer {...props} />)

    // Assert
    expect(screen.getByText('My Timer')).toBeInTheDocument()
  })

  it('should format and display time as MM:SS', () => {
    // Arrange
    const props = { ...defaultProps, remainingSeconds: 125 }

    // Act
    render(<Timer {...props} />)

    // Assert
    expect(screen.getByText('02:05')).toBeInTheDocument()
  })

  it('should display "Running" status when timer is running', () => {
    // Arrange
    const props = { ...defaultProps, isRunning: true }

    // Act
    render(<Timer {...props} />)

    // Assert
    expect(screen.getByText('Running')).toBeInTheDocument()
  })

  it('should display "Paused" status when timer is not running', () => {
    // Arrange
    const props = { ...defaultProps, isRunning: false }

    // Act
    render(<Timer {...props} />)

    // Assert
    expect(screen.getByText('Paused')).toBeInTheDocument()
  })

  it('should display "Completed" status when remaining seconds is 0', () => {
    // Arrange
    const props = { ...defaultProps, remainingSeconds: 0 }

    // Act
    render(<Timer {...props} />)

    // Assert
    expect(screen.getByText('Completed')).toBeInTheDocument()
  })

  it('should call onDelete when delete button is clicked', async () => {
    // Arrange
    const user = userEvent.setup()
    const props = { ...defaultProps, id: 'timer-123' }

    // Act
    render(<Timer {...props} />)
    const deleteButton = screen.getByLabelText('delete timer')
    await user.click(deleteButton)

    // Assert
    expect(mockOnDelete).toHaveBeenCalledWith('timer-123')
    expect(mockOnDelete).toHaveBeenCalledTimes(1)
  })

  it('should display progress bar when timer is not completed', () => {
    // Arrange
    const props = { ...defaultProps, remainingSeconds: 60, durationSeconds: 120 }

    // Act
    render(<Timer {...props} />)

    // Assert
    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toBeInTheDocument()
    expect(progressBar).toHaveAttribute('aria-valuenow', '50')
  })

  it('should not display progress bar when timer is completed', () => {
    // Arrange
    const props = { ...defaultProps, remainingSeconds: 0 }

    // Act
    render(<Timer {...props} />)

    // Assert
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })

  it('should format time correctly for single digit minutes and seconds', () => {
    // Arrange
    const props = { ...defaultProps, remainingSeconds: 65 }

    // Act
    render(<Timer {...props} />)

    // Assert
    expect(screen.getByText('01:05')).toBeInTheDocument()
  })
})

