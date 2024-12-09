'use client'

import { TodoForm } from '../TodoForm'
import { EditTodoForm } from '../EditTodoForm'
import { TodoNote } from '../TodoNote'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
uuidv4()

// Wrapper component will be a white container that holds all the todo tasks
export function TodoWrapper(props) {
  const [todos, setTodos] = useState([])

  // Add a todo object
  const addTodo = (todo) => {
    console.log('Adding Todo: ', todo)
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ])
  }

  // Strikethrough todo title to indicate completed state (toggle)
  const toggleComplete = (id) => {
    console.log('Setting Todo with id: ' + id)
    setTodos(() =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Delete todo note
  const deleteTodo = (id) => {
    console.log('Deleting Todo with id: ' + id)
    setTodos(() => todos.filter((todo) => todo.id !== id))
  }

  // Edit todo note by re-using form
  const editTodo = (id) => {
    console.log('Editing Todo with id: ' + id)
    setTodos(() =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  // Update todo note when EditTodoForm is submitted
  const updateNote = (id, task) => {
    console.log('Updating Todo with id: ' + id + ' with new task: ' + task)
    setTodos(() =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    )
  }

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        return todo.isEditing ? (
          <EditTodoForm
            id={todo.id}
            key={index}
            todoNote={todo}
            updateNote={updateNote}
          />
        ) : (
          <TodoNote
            task={todo.task}
            key={index}
            id={todo.id}
            toggleComplete={toggleComplete}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            editMode={todo.isEditing}
          />
        )
      })}
    </div>
  )
}
