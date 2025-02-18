'use client'

import { useState } from 'react'

/**
 * TodoForm React functional component for adding tasks.
 *
 * This component renders a form with a controlled text input and a submit button. It uses the
 * useState hook to manage the input value. When submitted, if the input is not empty, it calls
 * the addTodo function provided via props to add a new task and resets the input field.
 *
 * @param {Object} props - The component props.
 * @param {function(string): void} props.addTodo - Callback function to add a new task.
 * @returns {JSX.Element} The rendered TodoForm component.
 */
export function TodoForm(props) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Deny add if no text inputted
    if (value === '') return

    // console.log('Params passed into addTodo: ' + value)
    props.addTodo(value)
    setValue('')
  }

  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Enter in your next task!"
        onChange={(e) => {
          console.log('Typed in: ' + e.target.value)
          setValue(e.target.value)
        }}
      ></input>
      <button type="submit" className="todo-btn" onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  )
}
