import { fireEvent, render, screen } from '@testing-library/react'
import { Timer } from './Timer'
import { TimerModel } from '@/libs/data'

describe('Timer', () => {
  it('should display a timer for the timers page', () => {
    const mockDeleteTimerFunction = jest.fn()
    const mockTimerProp: TimerModel = {
      id: '01',
      label: 'Counter',
      durationSeconds: 10,
      remainingSeconds: 10,
      isRunning: true,
    }
    render(
      <Timer timer={mockTimerProp} deleteTimer={mockDeleteTimerFunction} />
    )
    const timerName = screen.getByText('Counter')
    expect(timerName).toBeInTheDocument()

    const timerValue = screen.getByText('10 s')
    expect(timerValue).toBeInTheDocument()

    const buttonDeleteTimer = screen.getByText('Delete Timer')
    expect(buttonDeleteTimer).toBeInTheDocument()
  })

  // Research jest function mocking
  // Assert that the function is called
  it('should delete the timer when delete timer button is pressed', () => {
    const mockDeleteTimerFunction = jest.fn()
    const mockTimerProp: TimerModel = {
      id: '01',
      label: 'Counter',
      durationSeconds: 10,
      remainingSeconds: 10,
      isRunning: true,
    }

    render(
      <Timer timer={mockTimerProp} deleteTimer={mockDeleteTimerFunction} />
    )

    fireEvent.click(screen.getByText('Delete Timer'))

    expect(mockDeleteTimerFunction).toHaveBeenCalledWith(mockTimerProp.id)
  })
})
