'use client'

import { useState } from 'react'

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
