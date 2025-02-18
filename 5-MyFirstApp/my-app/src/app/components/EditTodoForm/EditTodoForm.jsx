'use client'

import { useState } from 'react'

/**
 * EditTodoForm component renders a form for updating an existing to-do item.
 *
 * This component initializes its state with the current task text from the provided todoNote prop.
 * It renders a controlled input field where user input is logged and managed using React's useState hook.
 * On form submission, it prevents the default behavior, checks for non-empty input, and then calls the
 * updateNote callback with the todo note's id and the new task text. Following a successful update,
 * the input field is cleared.
 *
 * @param {Object} props - The component properties.
 * @param {Object} props.todoNote - The to-do item object.
 * @param {number|string} props.todoNote.id - The unique identifier for the to-do note.
 * @param {string} props.todoNote.task - The current task text.
 * @param {Function} props.updateNote - Callback function to update the to-do item. It should accept the to-do note id and the updated task text as parameters.
 * @returns {JSX.Element} A form element that allows the user to edit the to-do item's task.
 */
export function EditTodoForm(props) {
  const [value, setValue] = useState(props.todoNote.task)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Deny add if no text inputted
    if (value === '') return

    // console.log('Params passed into addTodo: ' + value)
    props.updateNote(props.todoNote.id, value)

    setValue('')
  }

  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder={'Update Task'}
        onChange={(e) => {
          console.log('Typed in: ' + e.target.value)
          setValue(e.target.value)
        }}
      ></input>
      <button type="submit" className="todo-btn" onClick={handleSubmit}>
        Update Task
      </button>
    </form>
  )
}
