import { render, screen } from '@testing-library/react'
import { TimerList } from './TimerList'
import { timers as defaultTimers } from '@/libs/data'

describe('TimerList', () => {
  it('should put timers in the TimerList', () => {
    const imaginaryFunction = jest.fn(() => '')

    render(<TimerList timers={defaultTimers} setTimers={imaginaryFunction} />)

    const timerName0 = screen.getByText('time')
    expect(timerName0).toBeInTheDocument()

    const timerValue0 = screen.getByText('10 s')
    expect(timerValue0).toBeInTheDocument()

    const timerName1 = screen.getByText('dime')
    expect(timerName1).toBeInTheDocument()

    const timerValue1 = screen.getByText('101 s')
    expect(timerValue1).toBeInTheDocument()

    const timerName2 = screen.getByText('pi')
    expect(timerName2).toBeInTheDocument()

    const timerValue2 = screen.getByText('0 s')
    expect(timerValue2).toBeInTheDocument()

    const allDeleteButtons = screen.getAllByText('Delete Timer')
    expect(allDeleteButtons).toHaveLength(3)
  })
})
