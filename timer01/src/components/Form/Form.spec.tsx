import { render, screen } from '@testing-library/react'
import { Form } from './Form'
import { v4 as uuidv4 } from 'uuid'

describe('Form', () => {
  jest.mock('uuid', () => ({
    __esModule: true,
    v4: jest.fn(),
  }))
  const mockUuidv4 = uuidv4 as jest.MockedFunction<typeof uuidv4>
  it('should display the form component', () => {
    const notRealFunction = jest.fn(() => '')

    render(<Form setTimers={notRealFunction} />)
    const textBoxName = screen.getByLabelText('Timer Name')
    expect(textBoxName).toBeInTheDocument()

    const textBoxSeconds = screen.getByLabelText('Max Time')
    expect(textBoxSeconds).toBeInTheDocument()

    const buttonAddTimer = screen.getByText('Add Timer')
    expect(buttonAddTimer).toBeInTheDocument()
  })
})
