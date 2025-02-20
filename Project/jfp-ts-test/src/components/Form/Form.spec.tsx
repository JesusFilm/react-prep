import { fireEvent, render, screen } from '@testing-library/react'
import { Form } from './Form'
import '@testing-library/jest-dom'
import React from 'react'

describe('Form', () => {
  // 1. Test that the form automatically clears itself when the add button is pressed
  it('clears form when add button is pressed while form field is populated', () => {
    const mockAddTask = jest.fn()
    render(<Form addTask={mockAddTask} />)
    const addButton = screen.getByRole('button', { name: /add task/i })

    // Add text to form
    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Test Task' } })

    // Check that the input field is cleared
    expect(input.value).toBe('Test Task')

    // Simulate user button click
    fireEvent.click(addButton)

    // Check that the input field is cleared
    expect(input.value).toBe('')
  })
})
