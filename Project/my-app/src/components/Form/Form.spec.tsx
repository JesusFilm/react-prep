import { fireEvent, render, waitFor } from '@testing-library/react'
import { Form } from '.'
import '@testing-library/jest-dom' //important!

describe('Form', () => {
  it('should reset the textfield after clicked (USING useEffect)', async () => {
    const mockAddTask = jest.fn()

    const { getByLabelText, getByText } = render(
      <Form onAddTask={mockAddTask} />
    )

    const nameInputField = getByLabelText('Enter Task') as HTMLInputElement
    const submitButton = getByText('Submit')

    fireEvent.change(nameInputField, { target: { value: 'New Task' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(nameInputField.value).toBe('')
    })
  })

  it('should send text from the textfield when the submit button is pressed', () => {
    const mockAddTask = jest.fn()

    const { getByLabelText, getByText } = render(
      <Form onAddTask={mockAddTask} />
    )

    const nameInputField = getByLabelText('Enter Task')
    const submitButton = getByText('Submit')

    fireEvent.change(nameInputField, { target: { value: 'New Task' } })
    fireEvent.click(submitButton)

    expect(mockAddTask).toHaveBeenCalledWith('New Task')
  })
})
