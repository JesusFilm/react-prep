'use client'

/**
 * TodoNote is a React functional component representing a single todo item.
 *
 * This component logs the provided props for debugging purposes, determines the visual state
 * based on the todo's completion status, and renders a todo note interface. The interface includes:
 * - A paragraph displaying the todo task that toggles its completed state when clicked.
 * - An edit button to trigger the editing of the todo item.
 * - A delete button to remove the todo item.
 *
 * @param {Object} props - The properties object for the todo item.
 * @param {number|string} props.id - Unique identifier for the todo item.
 * @param {string} props.task - The description or content of the todo item.
 * @param {boolean} props.completed - Indicates whether the todo item is completed.
 * @param {Function} props.toggleComplete - Callback function to toggle the completion state of the todo item.
 * @param {Function} props.editTodo - Callback function to initiate editing of the todo item.
 * @param {Function} props.deleteTodo - Callback function to delete the todo item.
 * @returns {JSX.Element} The rendered JSX representation of the todo note.
 */
export function TodoNote(props) {
  console.log('TodoNote with props: ', props)
  let completedState = props.completed ? 'completed' : ''

  // Create todo note
  return (
    <div className="Todo">
      <p
        onClick={() => props.toggleComplete(props.id)}
        className={completedState}
      >
        {props.task}
      </p>
      <button
        style={{
          aspectRatio: '1 / 1',
          background: 'none',
          border: 'none',
        }}
        onClick={() => props.editTodo(props.id)}
      >
        📝
      </button>
      <button
        style={{
          aspectRatio: '1 / 1',
          background: 'none',
          border: 'none',
        }}
        onClick={() => props.deleteTodo(props.id)}
      >
        🗑️
      </button>
    </div>
  )
}
