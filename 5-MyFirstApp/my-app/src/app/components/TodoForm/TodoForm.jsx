'use client'

import { useState } from 'react'

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
