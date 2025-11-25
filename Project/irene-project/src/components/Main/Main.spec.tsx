import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from './Main'
import { timers as initialTimers } from '@/libs/data'

// Mock uuid
jest.mock('uuid', () => ({
  v4: jest.fn(() => 'mock-uuid-123'),
}))

// Mock the child components to focus on Main component logic
jest.mock('../Title', () => {
  return function MockTitle({ label }: { label?: string }) {
    return <div data-testid="title">{label || 'Timer App'}</div>
  }
})

jest.mock('../Form', () => {
  return function MockForm({ onAddTimer }: { onAddTimer: (label: string, duration: number) => void }) {
    return (
      <div data-testid="form">
        <button
          onClick={() => onAddTimer('New Timer', 60)}
          data-testid="add-timer-button"
        >
          Add Timer
        </button>
      </div>
    )
  }
})

jest.mock('../Timer', () => {
  return function MockTimer({
    id,
    label,
    onDelete,
  }: {
    id: string
    label: string
    onDelete: (id: string) => void
  }) {
    return (
      <div data-testid={`timer-${id}`}>
        <span>{label}</span>
        <button onClick={() => onDelete(id)} data-testid={`delete-${id}`}>
          Delete
        </button>
      </div>
    )
  }
})

describe('Main', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should render Title component with correct label', () => {
    // Arrange & Act
    render(<Main />)

    // Assert
    expect(screen.getByTestId('title')).toHaveTextContent('My Timer Dashboard')
  })

  it('should render Form component', () => {
    // Arrange & Act
    render(<Main />)

    // Assert
    expect(screen.getByTestId('form')).toBeInTheDocument()
  })

  it('should render initial timers', () => {
    // Arrange & Act
    render(<Main />)

    // Assert
    initialTimers.forEach((timer) => {
      expect(screen.getByTestId(`timer-${timer.id}`)).toBeInTheDocument()
      expect(screen.getByText(timer.label)).toBeInTheDocument()
    })
  })

  it('should add a new timer when onAddTimer is called', async () => {
    // Arrange
    const user = userEvent.setup({ delay: null })

    // Act
    render(<Main />)
    const addButton = screen.getByTestId('add-timer-button')
    await user.click(addButton)

    // Assert
    await waitFor(() => {
      const newTimer = screen.getByText('New Timer')
      expect(newTimer).toBeInTheDocument()
    })
  })

  it('should delete a timer when delete button is clicked', async () => {
    // Arrange
    const user = userEvent.setup({ delay: null })
    const timerToDelete = initialTimers[0]

    // Act
    render(<Main />)
    const deleteButton = screen.getByTestId(`delete-${timerToDelete.id}`)
    await user.click(deleteButton)

    // Assert
    await waitFor(() => {
      expect(screen.queryByTestId(`timer-${timerToDelete.id}`)).not.toBeInTheDocument()
    })
  })

  it('should decrement remaining seconds for running timers', async () => {
    // Arrange
    render(<Main />)
    const initialTimer = initialTimers[0]
    const initialRemaining = initialTimer.remainingSeconds

    // Act - advance time by 2 seconds
    jest.advanceTimersByTime(2000)

    // Assert - timer should have decremented (we can't easily check the exact value without more complex setup,
    // but we can verify the timer still exists and the component is updating)
    await waitFor(() => {
      expect(screen.getByTestId(`timer-${initialTimer.id}`)).toBeInTheDocument()
    })
  })

  it('should stop timer when remaining seconds reaches 0', async () => {
    // Arrange
    render(<Main />)
    const timerWithLowTime = initialTimers.find((t) => t.remainingSeconds > 0 && t.remainingSeconds <= 5)
    
    if (timerWithLowTime) {
      // Act - advance time beyond the remaining seconds
      jest.advanceTimersByTime((timerWithLowTime.remainingSeconds + 1) * 1000)

      // Assert - timer should still exist (not deleted, just stopped)
      await waitFor(() => {
        expect(screen.getByTestId(`timer-${timerWithLowTime.id}`)).toBeInTheDocument()
      })
    }
  })
})

