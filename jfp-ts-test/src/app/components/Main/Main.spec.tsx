import {
  render,
  screen,
  fireEvent,
  queryByText,
  queryByRole,
} from '@testing-library/react'
import { Main } from '.'
import '@testing-library/jest-dom'

describe('Main Page', () => {
  it('renders initial state correctly', () => {
    const { getByText, getByRole, getByLabelText } = render(<Main />)

    expect(getByText('To Do List')).toBeInTheDocument()
    expect(getByLabelText('Task Name')).toBeInTheDocument()
    expect(getByRole('textbox')).toBeInTheDocument()
    expect(getByText('Submit')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(screen.queryByText('Not Completed')).toBeNull()
  })

  it('sees if textbox is empty initially', () => {
    const { getByLabelText } = render(<Main />)
    const defaultPlaceholderText = getByLabelText('Task Name')
    expect(defaultPlaceholderText).toBeInTheDocument()
    expect(defaultPlaceholderText).toHaveValue('')
  })

  it('checks if writing task name and submitting adds task', () => {
    const { getByLabelText, getByText } = render(<Main />)
    const defaultPlaceholderText = getByLabelText('Task Name')
    fireEvent.change(defaultPlaceholderText, {
      target: { value: 'Testing Task Name' },
    })
    const submitButton = getByText('Submit')
    fireEvent.click(submitButton)
    expect(defaultPlaceholderText).toHaveValue('')
    expect(getByText('Testing Task Name')).toBeInTheDocument()
    expect(getByText('Not Completed')).toBeInTheDocument()
  })

  it('checks if delete button works', () => {
    const { getByLabelText, getByText } = render(<Main />)
    const defaultPlaceholderText = getByLabelText('Task Name')
    fireEvent.change(defaultPlaceholderText, {
      target: { value: 'Testing Task Name' },
    })
    const submitButton = getByText('Submit')
    fireEvent.click(submitButton)
    expect(getByText('Testing Task Name')).toBeInTheDocument()
    expect(getByText('Not Completed')).toBeInTheDocument()

    // Getting delete button
    const deleteButton = getByLabelText('Delete Button')
    fireEvent.click(deleteButton)
    expect(screen.queryByText('Testing Task Name')).not.toBeInTheDocument()
    expect(screen.queryByText('Not Completed')).not.toBeInTheDocument()
  })
})
