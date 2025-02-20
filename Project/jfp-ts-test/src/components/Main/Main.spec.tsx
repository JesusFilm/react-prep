import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Main } from './Main'
import '@testing-library/jest-dom'
import React, { act } from 'react'

describe('Main', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render title', () => {
    render(<Main />)
    const title = screen.getByText('Write your To-Do here!')

    // Check that title exists
    expect(title).toBeInTheDocument()
  })

  it('should have an add task button', () => {
    render(<Main />)
    const addButton = screen.getByRole('button', { name: /add task/i })

    // Check that title exists
    expect(addButton).toBeInTheDocument()
  })

  it('should add a task when the add button is pressed', () => {
    render(<Main />)
    const addButton = screen.getByRole('button', { name: /add task/i })
    const input = screen.getByRole('textbox') as HTMLInputElement

    // Add text to form
    act(() => {
      fireEvent.change(input, { target: { value: 'New Task!' } })

      // Simulate user button click
      addButton.click()
    })

    // Check that the task was added
    expect(screen.getByText('New Task!')).toBeInTheDocument()
  })

  it('should remove the task when the delete button is pressed', () => {
    render(<Main />)
    const addButton = screen.getByRole('button', { name: /add task/i })
    const input = screen.getByRole('textbox') as HTMLInputElement

    act(() => {
      fireEvent.change(input, { target: { value: 'New Task!' } })

      addButton.click()
    })

    const deleteButton = screen.getByRole('button', { name: /cardDelete/i })
    fireEvent.click(deleteButton)

    expect(screen.findByText('New Task!')).toBeTruthy()
  })
})
